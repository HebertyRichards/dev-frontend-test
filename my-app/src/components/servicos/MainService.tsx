import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import Link from "next/link";
import { mainServicesData } from "@/data/serviceData";

export function MainServices() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-4">
            {mainServicesData.title}
          </h2>
          <p className="text-xl text-muted-foreground text-pretty">
            {mainServicesData.subtitle}
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {mainServicesData.services.map((service, index) => (
            <Card key={index} className="relative overflow-hidden">
              <div
                className={`absolute top-0 right-0 w-20 h-20 ${service.decoratorClass} rounded-bl-full`}
              ></div>
              <CardHeader>
                <div
                  className={`w-12 h-12 ${service.iconContainerClass} rounded-lg flex items-center justify-center mb-4`}
                >
                  <service.icon className={`h-6 w-6 ${service.iconClass}`} />
                </div>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-secondary" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                {service.title === "Avaliação Financeira" && (
                  <Button className="w-full" asChild>
                    <Link href="/contato">Solicitar Avaliação</Link>
                  </Button>
                )}
                {service.title === "Análise de Portfólio" && (
                  <Button variant="secondary" className="w-full" asChild>
                    <Link href="/contato">Analisar Portfólio</Link>
                  </Button>
                )}
                {service.title === "Simulação de Financiamento" && (
                  <Button
                    variant="outline"
                    className="w-full bg-transparent"
                    asChild
                  >
                    <Link href="/contato">Simular Financiamento</Link>
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
