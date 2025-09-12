"use client";

import Link from "next/link";
import { Building2 } from "lucide-react";

export function HeaderDesktop() {
  return (
    <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b border-border">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Building2 className="h-8 w-8 text-primary" />
              <span className="font-bold text-xl text-foreground">
                InvestPro
              </span>
            </Link>
          </div>
          <div className="flex items-baseline space-x-4">
            <Link
              href="/"
              className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              href="/empresa"
              className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Empresa
            </Link>
            <Link
              href="/servicos"
              className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Serviços
            </Link>
            <Link
              href="/contato"
              className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Contato
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
