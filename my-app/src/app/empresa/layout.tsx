import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Empresa",
  description:
    "Descubra a missão, os valores e a equipe de especialistas da InvestPro. Veja por que somos líderes em consultoria de investimentos imobiliários no Brasil.",
};

export default function EnterpriseRoot({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
