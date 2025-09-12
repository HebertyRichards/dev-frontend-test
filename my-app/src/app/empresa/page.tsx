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
  Award,
  Users,
  TrendingUp,
  MapPin,
  Mail,
  Phone,
  Star,
} from "lucide-react";
import Link from "next/link";

export default function EmpresaPage() {
  return (
    <div className="min-h-screen">
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
            Há mais de 10 anos no mercado, somos especialistas em conectar
            pessoas aos melhores investimentos imobiliários do Brasil.
          </p>
        </div>
      </section>
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Nossa Missão</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Democratizar o acesso a investimentos imobiliários de
                  qualidade, oferecendo consultoria personalizada e transparente
                  para todos os perfis de investidores.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Nossa Visão</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Ser a principal referência em consultoria de investimento
                  imobiliário no Brasil, reconhecida pela excelência e
                  resultados dos nossos clientes.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Nossos Valores</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Transparência, ética, excelência no atendimento e compromisso
                  com o sucesso financeiro dos nossos clientes.
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
              Números que Falam por Si
            </h2>
            <p className="text-xl text-muted-foreground text-pretty">
              Resultados conquistados ao longo de nossa trajetória
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">
                2.500+
              </div>
              <p className="text-muted-foreground">Clientes Atendidos</p>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">
                R$ 850M
              </div>
              <p className="text-muted-foreground">Volume Negociado</p>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">
                95%
              </div>
              <p className="text-muted-foreground">Satisfação dos Clientes</p>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">
                12
              </div>
              <p className="text-muted-foreground">Estados Atendidos</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-4">
              Nossa Equipe de Especialistas
            </h2>
            <p className="text-xl text-muted-foreground text-pretty">
              Profissionais qualificados e experientes no mercado imobiliário
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-white">RS</span>
                </div>
                <CardTitle>Roberto Silva</CardTitle>
                <CardDescription>CEO & Fundador</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  15 anos de experiência no mercado imobiliário. Especialista em
                  investimentos de alto padrão.
                </p>
                <Badge variant="outline">CRECI 12345-SP</Badge>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-white">MC</span>
                </div>
                <CardTitle>Marina Costa</CardTitle>
                <CardDescription>Diretora de Análise</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Economista com MBA em Finanças. Especialista em análise de
                  viabilidade de investimentos.
                </p>
                <Badge variant="outline">CFA Charterholder</Badge>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-white">LS</span>
                </div>
                <CardTitle>Lucas Santos</CardTitle>
                <CardDescription>Gerente de Relacionamento</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  10 anos em consultoria financeira. Especialista em atendimento
                  personalizado.
                </p>
                <Badge variant="outline">CFP Certificado</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section className="bg-card py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-4">
              Certificações e Reconhecimentos
            </h2>
            <p className="text-xl text-muted-foreground text-pretty">
              Credibilidade e qualidade reconhecidas pelo mercado
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Award className="mx-auto h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-lg">CRECI Ativo</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Registro ativo no Conselho Regional de Corretores de Imóveis
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Award className="mx-auto h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-lg">ISO 9001</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Certificação de qualidade em processos e atendimento
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Award className="mx-auto h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-lg">Prêmio Excelência</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Melhor consultoria imobiliária de São Paulo 2023
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Award className="mx-auto h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-lg">SECOVI-SP</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Membro ativo do Sindicato das Empresas de Compra e Venda
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-4">
              O que Nossos Clientes Dizem
            </h2>
            <p className="text-xl text-muted-foreground text-pretty">
              Depoimentos reais de quem confia na InvestPro
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                  Atendimento Excepcional
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  "A InvestPro me ajudou a encontrar o apartamento perfeito para
                  investimento. O atendimento foi personalizado e as
                  recomendações muito assertivas. Já estou com 100% de ocupação
                  há 8 meses!"
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold text-primary-foreground">
                      CF
                    </span>
                  </div>
                  <div>
                    <p className="font-medium">Carlos Ferreira</p>
                    <p className="text-sm text-muted-foreground">
                      Empresário, São Paulo
                    </p>
                  </div>
                </div>
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
                <CardTitle className="text-lg">Transparência Total</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  "Fiquei impressionada com a transparência da InvestPro. Eles
                  explicaram cada detalhe do processo e me ajudaram a entender
                  todos os aspectos do investimento. Recomendo para todos!"
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold text-secondary-foreground">
                      PM
                    </span>
                  </div>
                  <div>
                    <p className="font-medium">Patricia Mendes</p>
                    <p className="text-sm text-muted-foreground">
                      Médica, Rio de Janeiro
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section className="bg-primary py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground text-balance mb-4">
            Conheça Nossa Sede
          </h2>
          <p className="text-xl text-primary-foreground/90 text-pretty mb-8">
            Visite nosso escritório ou entre em contato para agendar uma reunião
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="flex flex-col items-center">
              <MapPin className="h-8 w-8 text-primary-foreground mb-2" />
              <h3 className="font-semibold text-primary-foreground mb-1">
                Endereço
              </h3>
              <p className="text-primary-foreground/90 text-sm">
                Av. Paulista, 1000 - Sala 1501
                <br />
                Bela Vista, São Paulo - SP
                <br />
                CEP: 01310-100
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Phone className="h-8 w-8 text-primary-foreground mb-2" />
              <h3 className="font-semibold text-primary-foreground mb-1">
                Telefone
              </h3>
              <p className="text-primary-foreground/90 text-sm">
                (11) 3000-0000
                <br />
                (11) 99999-9999
                <br />
                Seg-Sex: 8h às 18h
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="h-8 w-8 text-primary-foreground mb-2" />
              <h3 className="font-semibold text-primary-foreground mb-1">
                E-mail
              </h3>
              <p className="text-primary-foreground/90 text-sm">
                contato@investpro.com.br
                <br />
                atendimento@investpro.com.br
              </p>
            </div>
          </div>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contato">Agendar Visita</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
