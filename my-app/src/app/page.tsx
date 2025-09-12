import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Shield, Users, Star } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-background to-card py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-4">
              Consultoria Especializada
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-balance mb-6">
              Invista com <span className="text-primary">Segurança</span>
            </h1>
            <p className="text-xl text-muted-foreground text-pretty mb-8">
              Recomendações personalizadas de investimento imobiliário baseadas
              no seu perfil, renda e objetivos. Descubra as melhores
              oportunidades do mercado.
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
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-4">
              Por que escolher a InvestPro?
            </h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
              Combinamos expertise de mercado com tecnologia avançada para
              oferecer as melhores recomendações de investimento imobiliário.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Análise Personalizada</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Recomendações baseadas no seu perfil financeiro, objetivos e
                  preferências pessoais.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Transparência Total</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Explicamos cada recomendação com dados claros e metodologia
                  transparente.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Suporte Especializado</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Acompanhamento contínuo com consultores especializados em
                  investimento imobiliário.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section className="bg-card py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-4">
              Casos de Sucesso
            </h2>
            <p className="text-xl text-muted-foreground text-pretty">
              Veja como ajudamos nossos clientes a alcançar seus objetivos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-yellow-500 text-yellow-500"
                    />
                  ))}
                </div>
                <CardTitle className="text-lg">
                  Apartamento para Investimento
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  "Consegui um apartamento de 2 quartos que gera R$ 2.800/mês de
                  aluguel. ROI de 8,5% ao ano!"
                </p>
                <p className="text-sm font-medium">- Maria Silva, Empresária</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-yellow-500 text-yellow-500"
                    />
                  ))}
                </div>
                <CardTitle className="text-lg">
                  Casa Própria Financiada
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  "Encontrei a casa perfeita dentro do meu orçamento.
                  Financiamento aprovado em 15 dias!"
                </p>
                <p className="text-sm font-medium">- João Santos, Engenheiro</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-yellow-500 text-yellow-500"
                    />
                  ))}
                </div>
                <CardTitle className="text-lg">
                  Portfólio Diversificado
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  "Construí um portfólio de 3 imóveis em 2 anos. Renda passiva
                  de R$ 6.500/mês!"
                </p>
                <p className="text-sm font-medium">- Ana Costa, Médica</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-4">
              Como Funciona
            </h2>
            <p className="text-xl text-muted-foreground text-pretty">
              Processo simples e transparente em 4 etapas
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl mb-4">
                1
              </div>
              <h3 className="font-semibold text-lg mb-2">Análise do Perfil</h3>
              <p className="text-muted-foreground">
                Avaliamos sua situação financeira, objetivos e preferências
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl mb-4">
                2
              </div>
              <h3 className="font-semibold text-lg mb-2">Recomendações</h3>
              <p className="text-muted-foreground">
                Apresentamos as melhores opções de imóveis e estratégias
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl mb-4">
                3
              </div>
              <h3 className="font-semibold text-lg mb-2">Simulações</h3>
              <p className="text-muted-foreground">
                Calculamos financiamentos, rentabilidade e cenários
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl mb-4">
                4
              </div>
              <h3 className="font-semibold text-lg mb-2">Acompanhamento</h3>
              <p className="text-muted-foreground">
                Suporte contínuo até a concretização do investimento
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-primary py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground text-balance mb-4">
            Pronto para Investir com Segurança?
          </h2>
          <p className="text-xl text-primary-foreground/90 text-pretty mb-8">
            Agende uma consultoria gratuita e descubra as melhores oportunidades
            de investimento imobiliário para o seu perfil.
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
              <Link href="/servicos">Conhecer Serviços</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
