import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-muted border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-primary">Projeto</h3>
            <p className="text-sm text-muted-foreground">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque
              ullam alias saepe! Corrupti quia quo odit blanditiis tempore,
              cumque, ab iure a, molestiae aliquid quae? Consequatur suscipit
              cumque tenetur sed?
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Navegação</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/empresa"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Empresa
                </Link>
              </li>
              <li>
                <Link
                  href="/produtos"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Produtos
                </Link>
              </li>
              <li>
                <Link
                  href="/contato"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Serviços</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="text-muted-foreground">Service 1</span>
              </li>
              <li>
                <span className="text-muted-foreground">Service 2</span>
              </li>
              <li>
                <span className="text-muted-foreground">Service 3</span>
              </li>
              <li>
                <span className="text-muted-foreground">Service 4</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Contato</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">
                  São Paulo, SP - Brasil
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">(11) 9999-9999</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">
                  contato@projeto.com.br
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 Projeto. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
