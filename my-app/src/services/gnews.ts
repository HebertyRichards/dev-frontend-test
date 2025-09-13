import { Article } from "@/types/news";

function normalizeTitle(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^\w\s]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function calculateTitleSimilarity(titleA: string, titleB: string): number {
  const normalizedA = normalizeTitle(titleA);
  const normalizedB = normalizeTitle(titleB);

  const wordsA = new Set(normalizedA.split(" "));
  const wordsB = new Set(normalizedB.split(" "));

  const intersection = new Set([...wordsA].filter(word => wordsB.has(word)));
  const union = new Set([...wordsA, ...wordsB]);

  if (union.size === 0) {
    return 1;
  }

  return intersection.size / union.size;
}

export async function getNews(): Promise<Article[]> {
  const apiKey = process.env.GNEWS_API_KEY;
  const baseUrl = process.env.GNEWS_API_BASE_URL;

  if (!apiKey || !baseUrl) {
    console.error("GNews environment variables are not configured!");
    return [];
  }

  const query = "imóveis";
  const url = `${baseUrl}?q=${query}&lang=pt&country=br&max=10&apikey=${apiKey}`;

  try {
    const res = await fetch(url, {
      next: { revalidate: 1800 },
    });

    if (!res.ok) {
      console.error("Failed to fetch news from GNews:", await res.text());
      return [];
    }

    const data = await res.json();
    const articles: Article[] = data.articles || [];

    if (articles.length === 0) {
      return [];
    }

    const SIMILARITY_THRESHOLD = 0.3;
    const uniqueArticles: Article[] = [];

    articles.forEach(currentArticle => {
      const isDuplicate = uniqueArticles.some(uniqueArticle =>
        calculateTitleSimilarity(currentArticle.title, uniqueArticle.title) > SIMILARITY_THRESHOLD
      );

      if (!isDuplicate) {
        uniqueArticles.push(currentArticle);
      }
    });

    return uniqueArticles.slice(0, 10);

  } catch (error: unknown) {
    if (error instanceof Error) {
        console.error("GNews API connection error:", error.message);
    } else {
        console.error("An unknown error occurred while connecting to GNews API:", error);
    }
    return [];
  }
}