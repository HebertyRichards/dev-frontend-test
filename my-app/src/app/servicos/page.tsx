import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Calculator,
  FileText,
  Search,
  Shield,
  Users,
  CheckCircle,
  PieChart,
  Clock,
} from "lucide-react";
import Link from "next/link";

export default function Services() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-background to-card py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="secondary" className="mb-4">
            Nossos Serviços
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-balance mb-6">
            Consultoria <span className="text-primary">Completa</span> em
            Investimento Imobiliário
          </h1>
          <p className="text-xl text-muted-foreground text-pretty">
            Oferecemos uma gama completa de serviços para maximizar seus
            investimentos imobiliários com segurança e transparência.
          </p>
        </div>
      </section>
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-4">
              Serviços Principais
            </h2>
            <p className="text-xl text-muted-foreground text-pretty">
              Soluções personalizadas para cada perfil de investidor
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-primary/10 rounded-bl-full"></div>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Calculator className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Avaliação Financeira</CardTitle>
                <CardDescription>
                  Análise completa do seu perfil financeiro e capacidade de
                  investimento
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-secondary" />
                    <span className="text-sm">
                      Análise de renda e patrimônio
                    </span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-secondary" />
                    <span className="text-sm">
                      Avaliação de capacidade de endividamento
                    </span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-secondary" />
                    <span className="text-sm">
                      Definição de perfil de risco
                    </span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-secondary" />
                    <span className="text-sm">
                      Planejamento de metas financeiras
                    </span>
                  </li>
                </ul>
                <Button className="w-full" asChild>
                  <Link href="/contato">Solicitar Avaliação</Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-secondary/10 rounded-bl-full"></div>
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <PieChart className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle>Análise de Portfólio</CardTitle>
                <CardDescription>
                  Otimização e diversificação do seu portfólio imobiliário
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-secondary" />
                    <span className="text-sm">
                      Avaliação de imóveis existentes
                    </span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-secondary" />
                    <span className="text-sm">
                      Estratégias de diversificação
                    </span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-secondary" />
                    <span className="text-sm">Análise de rentabilidade</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-secondary" />
                    <span className="text-sm">Recomendações de otimização</span>
                  </li>
                </ul>
                <Button variant="secondary" className="w-full" asChild>
                  <Link href="/contato">Analisar Portfólio</Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-accent/10 rounded-bl-full"></div>
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-accent" />
                </div>
                <CardTitle>Simulação de Financiamento</CardTitle>
                <CardDescription>
                  Cálculos precisos e comparação de opções de financiamento
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-secondary" />
                    <span className="text-sm">
                      Simulações em múltiplos bancos
                    </span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-secondary" />
                    <span className="text-sm">
                      Comparação de taxas e condições
                    </span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-secondary" />
                    <span className="text-sm">Análise de viabilidade</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-secondary" />
                    <span className="text-sm">Suporte na documentação</span>
                  </li>
                </ul>
                <Button
                  variant="outline"
                  className="w-full bg-transparent"
                  asChild
                >
                  <Link href="/contato">Simular Financiamento</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section className="bg-card py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-4">
              Transparência em Nossas Recomendações
            </h2>
            <p className="text-xl text-muted-foreground text-pretty">
              Entenda como desenvolvemos nossas análises e recomendações
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">Nossa Metodologia</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-primary-foreground">
                      1
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Coleta de Dados</h4>
                    <p className="text-muted-foreground">
                      Analisamos sua situação financeira, objetivos e
                      preferências pessoais
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-primary-foreground">
                      2
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Análise de Mercado</h4>
                    <p className="text-muted-foreground">
                      Estudamos tendências, preços e oportunidades nas regiões
                      de interesse
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-primary-foreground">
                      3
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">
                      Algoritmo Proprietário
                    </h4>
                    <p className="text-muted-foreground">
                      Aplicamos nosso algoritmo que considera 50+ variáveis para
                      ranquear opções
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-primary-foreground">
                      4
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Validação Humana</h4>
                    <p className="text-muted-foreground">
                      Nossos especialistas revisam e refinam as recomendações do
                      algoritmo
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Fatores Considerados</CardTitle>
                <CardDescription>
                  Principais variáveis em nossa análise
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h5 className="font-medium">Financeiros</h5>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Renda mensal</li>
                      <li>• Patrimônio líquido</li>
                      <li>• Score de crédito</li>
                      <li>• Capacidade de entrada</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h5 className="font-medium">Mercado</h5>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Valorização histórica</li>
                      <li>• Liquidez da região</li>
                      <li>• Infraestrutura local</li>
                      <li>• Potencial de crescimento</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h5 className="font-medium">Pessoais</h5>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Objetivos de investimento</li>
                      <li>• Perfil de risco</li>
                      <li>• Prazo de investimento</li>
                      <li>• Preferências de localização</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h5 className="font-medium">Imóvel</h5>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Tipo de propriedade</li>
                      <li>• Estado de conservação</li>
                      <li>• Potencial de aluguel</li>
                      <li>• Custos de manutenção</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-4">
              Serviços Complementares
            </h2>
            <p className="text-xl text-muted-foreground text-pretty">
              Suporte completo para sua jornada de investimento
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardHeader>
                <Search className="mx-auto h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-lg">Busca Personalizada</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Encontramos imóveis que atendem exatamente seus critérios
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Shield className="mx-auto h-8 w-8 text-secondary mb-2" />
                <CardTitle className="text-lg">Due Diligence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Verificação completa da documentação e situação legal
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Users className="mx-auto h-8 w-8 text-accent mb-2" />
                <CardTitle className="text-lg">Negociação</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Representamos seus interesses nas negociações
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Clock className="mx-auto h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-lg">Acompanhamento</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Suporte contínuo após a aquisição do imóvel
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section className="bg-card py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-xl text-muted-foreground text-pretty">
              Esclarecemos as principais dúvidas sobre nossos serviços
            </p>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left">
                Como funciona a consulta de CPF/CNPJ para análise de crédito?
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground">
                  A consulta de CPF/CNPJ é um serviço opcional e avançado que
                  realizamos apenas com seu consentimento explícito. Utilizamos
                  apenas provedores oficiais como SPC, Serasa e Banco Central
                  para avaliar seu histórico de crédito e score, o que nos
                  permite fazer recomendações mais precisas sobre sua capacidade
                  de financiamento. Todos os dados são tratados com máxima
                  segurança e confidencialidade, seguindo a LGPD.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left">
                Qual é o custo dos serviços de consultoria?
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground">
                  Oferecemos diferentes modalidades de atendimento. A avaliação
                  inicial é gratuita e inclui uma análise básica do seu perfil.
                  Para consultorias mais detalhadas, cobramos uma taxa fixa que
                  varia de acordo com a complexidade do caso. Também temos
                  planos de acompanhamento mensal para investidores que desejam
                  suporte contínuo. Entre em contato para um orçamento
                  personalizado.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left">
                Vocês trabalham com imóveis em todo o Brasil?
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground">
                  Sim, atendemos clientes em todo o território nacional. Temos
                  parcerias com corretores e imobiliárias nas principais
                  capitais e regiões metropolitanas do país. Nossa análise de
                  mercado abrange dados de todas as regiões, permitindo
                  identificar oportunidades em qualquer estado. Para regiões
                  específicas, podemos fazer visitas técnicas mediante
                  agendamento.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left">
                Como garantem a qualidade das recomendações?
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground">
                  Nossa metodologia combina análise quantitativa através de
                  algoritmos proprietários com a experiência de nossos
                  consultores especializados. Todas as recomendações passam por
                  validação humana e são baseadas em dados atualizados do
                  mercado. Além disso, fazemos acompanhamento dos resultados dos
                  investimentos recomendados para continuamente aprimorar nossos
                  modelos. Oferecemos garantia de satisfação em todos os nossos
                  serviços.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left">
                Quanto tempo leva para receber as recomendações?
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground">
                  O prazo varia de acordo com a complexidade da análise. Para
                  avaliações básicas, entregamos um relatório preliminar em até
                  48 horas. Análises completas com simulações de financiamento e
                  busca personalizada levam entre 5 a 10 dias úteis. Para casos
                  que envolvem consulta de CPF/CNPJ, pode levar até 15 dias
                  úteis devido aos processos de verificação. Mantemos você
                  informado sobre o progresso durante todo o processo.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
      <section className="bg-primary py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground text-balance mb-4">
            Pronto para Começar?
          </h2>
          <p className="text-xl text-primary-foreground/90 text-pretty mb-8">
            Agende uma consultoria gratuita e descubra como podemos ajudar você
            a alcançar seus objetivos de investimento imobiliário.
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
    </div>
  );
}
