import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contatos",
  description:
    "Entre em contato com a equipe da InvestPro. Estamos prontos para atender você por telefone, e-mail ou em nosso escritório. Agende uma reunião hoje mesmo.",
};

export default function ContactsRoot({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
