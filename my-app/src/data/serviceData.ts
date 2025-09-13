import { Calculator, PieChart, FileText, Clock, Users, Shield, Search} from "lucide-react";
import { ServiceCard } from "@/types/services";

export const complementaryServicesData = {
    title: "Serviços Complementares",
    subtitle: "Suporte completo para sua jornada de investimento",
    services: [
      {
        icon: Search,
        title: "Busca Personalizada",
        description: "Encontramos imóveis que atendem exatamente seus critérios",
        iconClassName: "text-primary",
      },
      {
        icon: Shield,
        title: "Due Diligence",
        description: "Verificação completa da documentação e situação legal",
        iconClassName: "text-primary",
      },
      {
        icon: Users,
        title: "Negociação",
        description: "Representamos seus interesses nas negociações",
        iconClassName: "text-primary",
      },
      {
        icon: Clock,
        title: "Acompanhamento",
        description: "Suporte contínuo após a aquisição do imóvel",
        iconClassName: "text-primary",
      },
    ] as ServiceCard[],
  };

  export const faqData = {
    title: "Perguntas Frequentes",
    subtitle: "Esclarecemos as principais dúvidas sobre nossos serviços",
    questions: [
      {
        id: "item-1",
        question: "Como funciona a consulta de CPF/CNPJ para análise de crédito?",
        answer:
          "A consulta de CPF/CNPJ é um serviço opcional e avançado que realizamos apenas com seu consentimento explícito. Utilizamos apenas provedores oficiais como SPC, Serasa e Banco Central para avaliar seu histórico de crédito e score, o que nos permite fazer recomendações mais precisas sobre sua capacidade de financiamento. Todos os dados são tratados com máxima segurança e confidencialidade, seguindo a LGPD.",
      },
      {
        id: "item-2",
        question: "Qual é o custo dos serviços de consultoria?",
        answer:
          "Oferecemos diferentes modalidades de atendimento. A avaliação inicial é gratuita e inclui uma análise básica do seu perfil. Para consultorias mais detalhadas, cobramos uma taxa fixa que varia de acordo com a complexidade do caso. Também temos planos de acompanhamento mensal para investidores que desejam suporte contínuo. Entre em contato para um orçamento personalizado.",
      },
      {
        id: "item-3",
        question: "Vocês trabalham com imóveis em todo o Brasil?",
        answer:
          "Sim, atendemos clientes em todo o território nacional. Temos parcerias com corretores e imobiliárias nas principais capitais e regiões metropolitanas do país. Nossa análise de mercado abrange dados de todas as regiões, permitindo identificar oportunidades em qualquer estado. Para regiões específicas, podemos fazer visitas técnicas mediante agendamento.",
      },
      {
        id: "item-4",
        question: "Como garantem a qualidade das recomendações?",
        answer:
          "Nossa metodologia combina análise quantitativa através de algoritmos proprietários com a experiência de nossos consultores especializados. Todas as recomendações passam por validação humana e são baseadas em dados atualizados do mercado. Além disso, fazemos acompanhamento dos resultados dos investimentos recomendados para continuamente aprimorar nossos modelos. Oferecemos garantia de satisfação em todos os nossos serviços.",
      },
      {
        id: "item-5",
        question: "Quanto tempo leva para receber as recomendações?",
        answer:
          "O prazo varia de acordo com a complexidade da análise. Para avaliações básicas, entregamos um relatório preliminar em até 48 horas. Análises completas com simulações de financiamento e busca personalizada levam entre 5 a 10 dias úteis. Para casos que envolvem consulta de CPF/CNPJ, pode levar até 15 dias úteis devido aos processos de verificação. Mantemos você informado sobre o progresso durante todo o processo.",
      },
    ],
  };

  export const mainServicesData = {
    title: "Serviços Principais",
    subtitle: "Soluções personalizadas para cada perfil de investidor",
    services: [
      {
        icon: Calculator,
        iconContainerClass: "bg-primary/10",
        iconClass: "text-primary",
        title: "Avaliação Financeira",
        description:
          "Análise completa do seu perfil financeiro e capacidade de investimento",
        features: [
          "Análise de renda e patrimônio",
          "Avaliação de capacidade de endividamento",
          "Definição de perfil de risco",
          "Planejamento de metas financeiras",
        ],
        decoratorClass: "bg-primary/10",
      },
      {
        icon: PieChart,
        iconContainerClass: "bg-primary/10",
        iconClass: "text-primary",
        title: "Análise de Portfólio",
        description: "Otimização e diversificação do seu portfólio imobiliário",
        features: [
          "Avaliação de imóveis existentes",
          "Estratégias de diversificação",
          "Análise de rentabilidade",
          "Recomendações de otimização",
        ],
        decoratorClass: "bg-primary/10",
      },
      {
        icon: FileText,
        iconContainerClass: "bg-primary/10",
        iconClass: "text-primary",
        title: "Simulação de Financiamento",
        description: "Cálculos precisos e comparação de opções de financiamento",
        features: [
          "Simulações em múltiplos bancos",
          "Comparação de taxas e condições",
          "Análise de viabilidade",
          "Suporte na documentação",
        ],
        decoratorClass: "bg-primary/10",
      },
    ],
  };

  export const methodologyData = {
    title: "Transparência em Nossas Recomendações",
    subtitle: "Entenda como desenvolvemos nossas análises e recomendações",
    methodology: {
      title: "Nossa Metodologia",
      steps: [
        {
          title: "Coleta de Dados",
          description:
            "Analisamos sua situação financeira, objetivos e preferências pessoais",
        },
        {
          title: "Análise de Mercado",
          description:
            "Estudamos tendências, preços e oportunidades nas regiões de interesse",
        },
        {
          title: "Algoritmo Proprietário",
          description:
            "Aplicamos nosso algoritmo que considera 50+ variáveis para ranquear opções",
        },
        {
          title: "Validação Humana",
          description:
            "Nossos especialistas revisam e refinam as recomendações do algoritmo",
        },
      ],
    },
    factors: {
      title: "Fatores Considerados",
      description: "Principais variáveis em nossa análise",
      categories: [
        {
          title: "Financeiros",
          items: [
            "Renda mensal",
            "Patrimônio líquido",
            "Score de crédito",
            "Capacidade de entrada",
          ],
        },
        {
          title: "Mercado",
          items: [
            "Valorização histórica",
            "Liquidez da região",
            "Infraestrutura local",
            "Potencial de crescimento",
          ],
        },
        {
          title: "Pessoais",
          items: [
            "Objetivos de investimento",
            "Perfil de risco",
            "Prazo de investimento",
            "Preferências de localização",
          ],
        },
        {
          title: "Imóvel",
          items: [
            "Tipo de propriedade",
            "Estado de conservação",
            "Potencial de aluguel",
            "Custos de manutenção",
          ],
        },
      ],
    },
  };

  export const ctaSectionData = {
    title: "Pronto para Começar?",
    subtitle:
      "Agende uma consultoria gratuita e descubra como podemos ajudar você a alcançar seus objetivos de investimento imobiliário.",
  };

  export const serviceHeroData = {
    badge: "Nossos Serviços",
    title: "Consultoria Completa em Investimento Imobiliário",
    highlightedWord: " Completa",
    subtitle:
      "Oferecemos uma gama completa de serviços para maximizar seus investimentos imobiliários com segurança e transparência.",
  };
  