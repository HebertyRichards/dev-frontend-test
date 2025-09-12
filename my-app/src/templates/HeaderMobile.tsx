"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export function HeaderMobile() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-primary">
              Projeto
            </Link>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>
      {isOpen && (
        <div className="border-t border-border">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link
              href="/empresa"
              className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
              onClick={closeMenu}
            >
              Empresa
            </Link>
            <Link
              href="/produtos"
              className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
              onClick={closeMenu}
            >
              Produtos
            </Link>
            <Link
              href="/contato"
              className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
              onClick={closeMenu}
            >
              Contato
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
