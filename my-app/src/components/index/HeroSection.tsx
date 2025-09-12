import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-background to-card py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center max-w-4xl mx-auto">
          <Badge variant="secondary" className="mb-4">
            Consultoria Especializada
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold text-balance mb-6">
            Invista com <span className="text-primary">Segurança</span>
          </h1>
          <p className="text-xl text-muted-foreground text-pretty mb-8">
            Recomendações personalizadas de investimento imobiliário baseadas no
            seu perfil, renda e objetivos. Descubra as melhores oportunidades do
            mercado.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contato">Começar Agora</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/servicos">Nossos Serviços</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
