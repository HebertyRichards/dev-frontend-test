import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Serviços",
  description:
    "Conheça os serviços especializados da InvestPro, desde a análise de viabilidade e consultoria de investimentos até a gestão completa do seu portfólio imobiliário.",
};

export default function ServicesRoot({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
