import { Badge } from "@/components/ui/badge";
import { serviceHeroData } from "@/data/serviceData";

export function ServiceSection() {
  return (
    <section className="bg-slate-50 dark:bg-slate-950 py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <Badge variant="secondary" className="mb-4 bg-green-500 font-bold">
          {serviceHeroData.badge}
        </Badge>
        <h1 className="text-4xl lg:text-5xl font-bold text-balance mb-6">
          {serviceHeroData.title.replace(serviceHeroData.highlightedWord, "")}
          <span className="text-primary">
            {serviceHeroData.highlightedWord}
          </span>
        </h1>
        <p className="text-xl text-muted-foreground text-pretty">
          {serviceHeroData.subtitle}
        </p>
      </div>
    </section>
  );
}
