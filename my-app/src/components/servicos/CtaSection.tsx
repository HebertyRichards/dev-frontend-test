import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ctaSectionData } from "@/data/serviceData";

export function CtaSection() {
  return (
    <section className="bg-primary py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground text-balance mb-4">
          {ctaSectionData.title}
        </h2>
        <p className="text-xl text-primary-foreground/90 text-pretty mb-8">
          {ctaSectionData.subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contato">Agendar Consultoria Gratuita</Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            asChild
          >
            <Link href="/empresa">Conhecer a Empresa</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
