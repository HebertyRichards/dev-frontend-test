"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { clientTypes } from "@/data";
import { profileTypes } from "@/data";

export default function ClientTypesAnimation() {
  const [activeClient, setActiveClient] = useState(0);
  const [activeProfile, setActiveProfile] = useState(0);

  useEffect(() => {
    const clientInterval = setInterval(() => {
      setActiveClient((prev) => (prev + 1) % clientTypes.length);
    }, 3000);

    const profileInterval = setInterval(() => {
      setActiveProfile((prev) => (prev + 1) % profileTypes.length);
    }, 2500);

    return () => {
      clearInterval(clientInterval);
      clearInterval(profileInterval);
    };
  }, []);

  return (
    <section className="py-20 px-4 bg-slate-200 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-4">
            Nossos Clientes
          </h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
            Atendemos diferentes perfis de investidores com soluções
            personalizadas para cada necessidade
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center lg:text-left">
              Tipos de Investimento
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {clientTypes.map((client, index) => {
                const Icon = client.icon;
                const isActive = index === activeClient;
                return (
                  <Card
                    key={index}
                    className={`
                    bg-white hover:border-gray-900
                      dark:bg-slate-900 border-2 cursor-pointer 
                      transition-all duration-500 
                      dark:hover:border-indigo-200
                      ${
                        isActive
                          ? "border-gray-900 dark:border-indigo-200 shadow-lg scale-105"
                          : "border-transparent"
                      }
                    `}
                    onClick={() => setActiveClient(index)}
                  >
                    <CardContent className="p-6">
                      <div
                        className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${client.color}`}
                      >
                        <Icon className="h-6 w-6" />
                      </div>
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold">{client.title}</h4>
                        <Badge
                          variant="secondary"
                          className="text-xs bg-green-500 font-bold"
                        >
                          {client.badge}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">
                        {client.description}
                      </p>
                      <div className="text-xs font-medium text-primary">
                        {client.stats}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center lg:text-left">
              Perfis Atendidos
            </h3>
            <div className="space-y-4">
              {profileTypes.map((profile, index) => {
                const Icon = profile.icon;
                const isActive = index === activeProfile;

                return (
                  <div
                    key={index}
                    className={`
                      bg-white dark:bg-slate-900 border-2 rounded-lg p-4 flex items-center space-x-4
                      transition-all duration-500 
                      hover:border-gray-900 dark:hover:border-indigo-200
                      ${
                        isActive
                          ? "border-gray-900 dark:border-indigo-200 transform translate-x-2"
                          : "border-transparent"
                      }
                    `}
                  >
                    <div
                      className={`w-10 h-10 rounded-full bg-background flex items-center justify-center ${profile.color}`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-sm">{profile.title}</h4>
                      <p className="text-xs text-muted-foreground">
                        {profile.subtitle}
                      </p>
                    </div>
                    <div
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        isActive ? "bg-primary scale-150" : "bg-muted"
                      }`}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold mb-2">500+</div>
            <div className="text-sm text-muted-foreground">
              Clientes Atendidos
            </div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2">R$ 120M</div>
            <div className="text-sm text-muted-foreground">
              Em Investimentos
            </div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2">95%</div>
            <div className="text-sm text-muted-foreground">Satisfação</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2">8.2%</div>
            <div className="text-sm text-muted-foreground">ROI Médio</div>
          </div>
        </div>
      </div>
    </section>
  );
}
