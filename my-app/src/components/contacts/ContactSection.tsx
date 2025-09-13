import { Badge } from "@/components/ui/badge";

export function ContactSection() {
  return (
    <section className="bg-slate-50 dark:bg-slate-950 py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <Badge variant="secondary" className="mb-4 bg-green-500 font-bold">
          Entre em Contato
        </Badge>
        <h1 className="text-4xl lg:text-5xl font-bold text-balance mb-6">
          Vamos Conversar sobre seu{" "}
          <span className="text-primary">Investimento</span>
        </h1>
        <p className="text-xl text-muted-foreground text-pretty">
          Preencha o formulário abaixo para receber uma análise personalizada e
          descobrir as melhores oportunidades de investimento imobiliário.
        </p>
      </div>
    </section>
  );
}
