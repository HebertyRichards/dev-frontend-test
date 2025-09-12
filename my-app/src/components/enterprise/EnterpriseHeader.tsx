import { Badge } from "@/components/ui/badge";

export function EnterpriseHeader() {
  return (
    <section className="bg-gradient-to-br from-background to-card py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <Badge variant="secondary" className="mb-4">
          Sobre a InvestPro
        </Badge>
        <h1 className="text-4xl lg:text-5xl font-bold text-balance mb-6">
          Transformando Sonhos em{" "}
          <span className="text-primary">Realidade Imobiliária</span>
        </h1>
        <p className="text-xl text-muted-foreground text-pretty">
          Há mais de 10 anos no mercado, somos especialistas em conectar pessoas
          aos melhores investimentos imobiliários do Brasil.
        </p>
      </div>
    </section>
  );
}
