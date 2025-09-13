import { Button } from "@/components/ui/button";
import Link from "next/link";

export function CallToActionSection() {
  return (
    <section className="bg-slate-200 dark:bg-slate-800 py-20 px-4">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-4">
            Pronto para Investir com Segurança?
          </h2>
          <p className="text-xl text-pretty mb-8">
            Agende uma consultoria gratuita e descubra as melhores oportunidades
            de investimento imobiliário para o seu perfil.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contato">Agendar Consultoria Gratuita</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-primary-foreground hover:bg-primary-foreground hover:text-primary"
              asChild
            >
              <Link href="/servicos">Conhecer Serviços</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
