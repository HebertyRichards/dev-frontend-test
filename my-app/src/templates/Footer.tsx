import Link from "next/link";
import { Building2, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Building2 className="h-8 w-8 text-primary" />
              <span className="font-bold text-xl text-foreground">
                InvestPro
              </span>
            </Link>
            <p className="text-muted-foreground mb-4 max-w-md">
              Consultoria especializada em investimentos imobiliários
              personalizados. Ajudamos você a tomar as melhores decisões de
              investimento com base no seu perfil e objetivos.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-4">
              Links Rápidos
            </h3>
            <ul className="space-y-2">
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
                  href="/servicos"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Serviços
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
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contato</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>(11) 9999-9999</span>
              </li>
              <li className="flex items-center space-x-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>contato@investpro.com.br</span>
              </li>
              <li className="flex items-center space-x-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>São Paulo, SP</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 InvestPro. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
