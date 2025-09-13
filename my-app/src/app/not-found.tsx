import Link from "next/link";
import { AlertTriangle } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { buttonVariants } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-[80vh] w-full flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Alert variant="destructive" className="bg-white dark:bg-slate-800">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle className="font-bold text-lg">
            Erro 404: Página Não Encontrada
          </AlertTitle>
          <AlertDescription>
            Oops! O conteúdo que você está procurando não existe ou foi movido
            para outro lugar.
          </AlertDescription>
        </Alert>

        <Link
          href="/"
          className={buttonVariants({
            className: "mt-6 w-full",
          })}
        >
          Voltar para a Página Inicial
        </Link>
      </div>
    </div>
  );
}
