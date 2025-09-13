"use client";

import React from "react";
import Autoplay from "embla-carousel-autoplay";
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
        <Card className="h-full transition duration-500 hover:border-gray-900 dark:bg-slate-900 dark:hover:border-indigo-200 flex flex-col p-0 overflow-hidden hover:-translate-y-1">
          {article.image ? (
            <div className="relative w-full aspect-video">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ) : (
            <div className="w-full h-48 bg-secondary flex items-center justify-center">
              <Newspaper className="h-12 w-12 text-muted-foreground" />
            </div>
          )}
          <CardHeader className="p-6">
            <CardTitle className="text-lg leading-snug line-clamp-2">
              {article.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-grow p-6 pt-0">
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
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  return (
    <section className="py-20 px-4 dark:bg-slate-900 bg-slate-100">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-4">
            Notícias do Mercado Imobiliário
          </h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-3xl mx-auto">
            Mantenha-se informado com as últimas novidades e tendências do
            setor.
          </p>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          className="w-full max-w-6xl mx-auto relative"
        >
          <CarouselContent className="-ml-4">
            {articles.map((article, index) => (
              <CarouselItem
                key={index}
                className="basis-full md:basis-1/2 xl:basis-1/3 pl-4"
              >
                <ArticleCard article={article} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:inline-flex absolute left-2 top-1/2 -translate-y-1/2 z-10" />
          <CarouselNext className="hidden md:inline-flex absolute right-2 top-1/2 -translate-y-1/2 z-10" />
        </Carousel>
      </div>
    </section>
  );
}
