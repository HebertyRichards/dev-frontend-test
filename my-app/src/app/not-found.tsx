import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <p>Página não encontrada, voltar para o inicio</p>
      <Link href="/">Voltar para a Página Inicial</Link>
    </div>
  );
}
