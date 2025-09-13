import { TrendingUp, Shield, Users, Mail, Phone, MapPin, LucideIcon, Building2, Home, User, Briefcase, GraduationCap, Heart } from "lucide-react";

export const features: { icon: LucideIcon; title: string; description: string }[] = [
    {
      icon: TrendingUp,
      title: "Análise Personalizada",
      description:
        "Recomendações baseadas no seu perfil financeiro, objetivos e preferências pessoais.",
    },
    {
      icon: Shield,
      title: "Transparência Total",
      description:
        "Explicamos cada recomendação com dados claros e metodologia transparente.",
    },
    {
      icon: Users,
      title: "Suporte Especializado",
      description:
        "Acompanhamento contínuo com consultores especializados em investimento imobiliário.",
    },
  ];

export const testimonialsHome = [
    {
      title: "Apartamento para Investimento",
      quote:
        `"Consegui um apartamento de 2 quartos que gera R$ 2.800/mês de aluguel. ROI de 8,5% ao ano!"`,
      author: "Maria Silva, Empresária",
    },
    {
      title: "Casa Própria Financiada",
      quote:
        `"Encontrei a casa perfeita dentro do meu orçamento. Financiamento aprovado em 15 dias!"`,
      author: "João Santos, Engenheiro",
    },
    {
      title: "Portfólio Diversificado",
      quote:
        `"Construí um portfólio de 3 imóveis em 2 anos. Renda passiva de R$ 6.500/mês!"`,
      author: "Ana Costa, Médica",
    },
  ];

  export const steps = [
    {
      number: 1,
      title: "Análise do Perfil",
      description: "Avaliamos sua situação financeira, objetivos e preferências.",
    },
    {
      number: 2,
      title: "Recomendações",
      description: "Apresentamos as melhores opções de imóveis e estratégias.",
    },
    {
      number: 3,
      title: "Simulações",
      description: "Calculamos financiamentos, rentabilidade e cenários.",
    },
    {
      number: 4,
      title: "Acompanhamento",
      description: "Suporte contínuo até a concretização do investimento.",
    },
  ];
  

  export const footerLinks = [
    { href: "/", text: "Home" },
    { href: "/empresa", text: "Empresa" },
    { href: "/servicos", text: "Serviços" },
    { href: "/contato", text: "Contato" },
  ];
  
  export const contactInfo: { icon: LucideIcon; text: string; href?: string }[] = [
    { icon: Phone, text: "(11) 9999-9999", href: "tel:+5511999999999" },
    { icon: Mail, text: "contato@investpro.com.br", href: "mailto:contato@investpro.com.br" },
    { icon: MapPin, text: "São Paulo, SP" },
  ];
  
  export const clientTypes = [
    {
      icon: User,
      title: "Investidor Iniciante",
      description: "Primeira compra de imóvel para investimento",
      badge: "Pessoa Física",
      color: "bg-blue-500/10 text-blue-600",
      stats: "35% dos clientes",
    },
    {
      icon: TrendingUp,
      title: "Investidor Experiente",
      description: "Expansão de portfólio imobiliário",
      badge: "Alto Patrimônio",
      color: "bg-green-500/10 text-green-600",
      stats: "28% dos clientes",
    },
    {
      icon: Home,
      title: "Casa Própria",
      description: "Realização do sonho da casa própria",
      badge: "Pessoa Física",
      color: "bg-purple-500/10 text-purple-600",
      stats: "25% dos clientes",
    },
    {
      icon: Building2,
      title: "Empresas",
      description: "Investimento corporativo em imóveis",
      badge: "Pessoa Jurídica",
      color: "bg-orange-500/10 text-orange-600",
      stats: "12% dos clientes",
    },
  ];
  
  export const profileTypes = [
    {
      icon: GraduationCap,
      title: "Profissionais Liberais",
      subtitle: "Médicos, Advogados, Engenheiros",
      color: "text-cyan-600",
    },
    {
      icon: Briefcase,
      title: "Executivos",
      subtitle: "Diretores, Gerentes, Empresários",
      color: "text-indigo-600",
    },
    {
      icon: Users,
      title: "Famílias",
      subtitle: "Casais e famílias buscando estabilidade",
      color: "text-pink-600",
    },
    {
      icon: Heart,
      title: "Aposentados",
      subtitle: "Investimento para renda complementar",
      color: "text-emerald-600",
    },
  ];
  