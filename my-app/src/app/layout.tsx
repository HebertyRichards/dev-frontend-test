import type { Metadata, Viewport } from "next";
import { Header } from "@/templates/Header";
import { Footer } from "@/templates/Footer";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: {
    default: "InvestPro | Investimentos Imobiliários de Alta Performance",
    template: "InvestPro | %s",
  },
  description:
    "A InvestPro é sua parceira estratégica em investimentos imobiliários. Conte com nossa equipe de especialistas para encontrar as melhores oportunidades do mercado.",
  openGraph: {
    title: "InvestPro | Investimentos Imobiliários de Alta Performance",
    description:
      "Conectando você aos melhores investimentos imobiliários do Brasil.",
    siteName: "InvestPro",
    type: "website",
    locale: "pt_BR",
  },
  keywords: [
    "InvestPro",
    "investimentos imobiliários",
    "consultoria imobiliária",
    "mercado imobiliário",
    "imóveis de alto padrão",
    "especialistas em imóveis",
    "investimento em imóveis Brasil",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen bg-gray-300 dark:bg-slate-950">
            <Header />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
