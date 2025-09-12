import Link from "next/link";
import { Building2 } from "lucide-react";
import { footerLinks, contactInfo } from "@/data/index";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Building2 className="h-8 w-8 text-primary" />
              <span className="font-bold text-xl text-foreground">
                InvestPro
              </span>
            </Link>
            <p className="text-sm md:text-base text-muted-foreground mb-4 max-w-md">
              Consultoria especializada em investimentos imobiliários
              personalizados. Ajudamos você a tomar as melhores decisões de
              investimento com base no seu perfil e objetivos.
            </p>
          </div>

        <div className="grid grid-cols-2 gap-8 md:col-span-1 lg:col-span-2 md:grid-cols-2">
          <div>
            <h3 className="font-semibold text-foreground mb-4">
              Links Rápidos
            </h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                <Link
                 href={link.href}
                 className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.text}
                </Link>
              </li>
            ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contato</h3>
            <ul className="space-y-3">
                {contactInfo.map((item, index) => (
              <li key={index} className="flex items-start space-x-2">
                    <item.icon className="h-4 w-4 mt-1 flex-shrink-0 text-muted-foreground" />
                    <div className="w-full min-w-0">
                      <a
                        href={item.href || "#"}
                        className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors truncate block"
                      >
                        {item.text}
                      </a>
                    </div>
                   </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} InvestPro. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
