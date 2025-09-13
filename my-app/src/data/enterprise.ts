import { Award, TrendingUp, Users, MapPin, Mail, Phone } from "lucide-react";

export const testimonials = [
    {
      quote: `"A InvestPro me ajudou a encontrar o apartamento perfeito para investimento. O atendimento foi personalizado e as recomendações muito assertivas. Já estou com 100% de ocupação há 8 meses!"`,
      author: "Carlos Ferreira",
      role: "Empresário, São Paulo",
      initials: "CF",
      rating: 5,
    },
    {
      quote: `"Fiquei impressionada com a transparência da InvestPro. Eles explicaram cada detalhe do processo e me ajudaram a entender todos os aspectos do investimento. Recomendo para todos!"`,
      author: "Mariana Lima",
      role: "Advogada, Rio de Janeiro",
      initials: "ML",
      rating: 5,
    },
  ];
  
export const missionVisionValues = [
    {
      icon: TrendingUp,
      title: "Nossa Missão",
      description: "Democratizar o acesso a investimentos imobiliários de qualidade, oferecendo consultoria personalizada e transparente para todos os perfis de investidores.",
    },
    {
      icon: Users,
      title: "Nossa Visão",
      description: "Ser a principal referência em consultoria de investimento imobiliário no Brasil, reconhecida pela excelência e resultados dos nossos clientes.",
    },
    {
      icon: Award,
      title: "Nossos Valores",
      description: "Transparência, ética, excelência no atendimento e compromisso com o sucesso financeiro dos nossos clientes.",
    },
  ];
  
  export const stats = [
    { value: "2.500+", label: "Clientes Atendidos" },
    { value: "R$ 850M", label: "Volume Negociado" },
    { value: "95%", label: "Satisfação dos Clientes" },
    { value: "12", label: "Estados Atendidos" },
  ];
  
  export const teamMembers = [
    {
      initials: "RS",
      name: "Roberto Silva",
      role: "CEO & Fundador",
      description: "15 anos de experiência no mercado imobiliário. Especialista em investimentos de alto padrão.",
      badge: "CRECI 12345-SP",
    },
    {
      initials: "MC",
      name: "Marina Costa",
      role: "Diretora de Análise",
      description: "Economista com MBA em Finanças. Especialista em análise de viabilidade de investimentos.",
      badge: "CFA Charterholder",
    },
    {
      initials: "LS",
      name: "Lucas Santos",
      role: "Gerente de Relacionamento",
      description: "10 anos em consultoria financeira. Especialista em atendimento personalizado.",
      badge: "CFP Certificado",
    },
  ];
  
  export const certifications = [
    { title: "CRECI Ativo", description: "Registro ativo no Conselho Regional de Corretores de Imóveis" },
    { title: "ISO 9001", description: "Certificação de qualidade em processos e atendimento" },
    { title: "Prêmio Excelência", description: "Melhor consultoria imobiliária de São Paulo 2023" },
    { title: "SECOVI-SP", description: "Membro ativo do Sindicato das Empresas de Compra e Venda" },
  ];
  
  export const contactInfo = [
      {
          icon: MapPin,
          title: "Endereço",
          lines: ["Av. Paulista, 1000 - Sala 1501", "Bela Vista, São Paulo - SP", "CEP: 01310-100"]
      },
      {
          icon: Phone,
          title: "Telefone",
          lines: ["(11) 3000-0000", "(11) 99999-9999", "Seg-Sex: 8h às 18h", "Sab: 8h ás 14h"]
      },
      {
          icon: Mail,
          title: "E-mail",
          lines: ["contato@investpro.com.br", "atendimento@investpro.com.br"]
      }
  ]