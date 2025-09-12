import { Article } from "@/types/news";

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
    return data.articles || [];
  } catch (error: unknown) {
    if (error instanceof Error) {
        console.error("GNews API connection error:", error.message);
    } else {
        console.error("An unknown error occurred while connecting to GNews API:", error);
    }
    return [];
  }
}