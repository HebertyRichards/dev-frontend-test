import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Newspaper } from "lucide-react";
import Link from "next/link";
import { Article, NewsSectionProps } from "@/types/news";

function ArticleCard({ article }: { article: Article }) {
  return (
    <div className="p-1 h-full">
      <Link
        href={article.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full"
      >
        <Card className="h-full hover:shadow-lg transition-shadow duration-300 flex flex-col">
          {article.image ? (
            <div className="relative w-full aspect-video">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover rounded-t-lg"
                loading="lazy"
              />
            </div>
          ) : (
            <div className="w-full h-48 bg-secondary flex items-center justify-center rounded-t-lg">
              <Newspaper className="h-12 w-12 text-muted-foreground" />
            </div>
          )}
          <CardHeader>
            <CardTitle className="text-lg leading-snug line-clamp-2">
              {article.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-grow">
            <p className="text-muted-foreground text-sm line-clamp-3">
              {article.description}
            </p>
          </CardContent>
        </Card>
      </Link>
    </div>
  );
}

export function NewsSection({ articles }: NewsSectionProps) {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-4">
            Notícias do Mercado Imobiliário
          </h2>
          <p className="text-xl text-muted-foreground text-pretty">
            Mantenha-se informado com as últimas novidades do setor.
          </p>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-2">
            {articles.map((article, index) => (
              <CarouselItem
                key={index}
                className="basis-full lg:basis-1/2 xl:basis-1/3"
              >
                <ArticleCard article={article} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:block">
            <CarouselPrevious className="absolute left-[-50px] top-1/2 -translate-y-1/2" />
            <CarouselNext className="absolute right-[-50px] top-1/2 -translate-y-1/2" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
