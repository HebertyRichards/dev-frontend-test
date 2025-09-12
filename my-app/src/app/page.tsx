import { HeroSection } from "@/components/index/HeroSection";
import { WhyUsSection } from "@/components/index/WhyUsSection";
import { TestimonialsSection } from "@/components/index/TestimonialsSection";
import { NewsSection } from "@/components/index/NewsSection";
import { HowItWorksSection } from "@/components/index/HowItWorksSection";
import { CallToActionSection } from "@/components/index/CallToActionSection";
import { getNews } from "@/services/gnews";

export default async function Home() {
  const articles = await getNews();

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <HeroSection />
        <WhyUsSection />
        <TestimonialsSection />
        {articles && articles.length > 0 && <NewsSection articles={articles} />}
        <HowItWorksSection />
        <CallToActionSection />
      </main>
    </div>
  );
}
