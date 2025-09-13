"use client"
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
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export function MainServices() {
  return (
    <main className="py-20 px-4 bg-slate-200 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl lg:text-4xl font-bold text-balance mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {mainServicesData.title}
          </motion.h2>
          <motion.p
            className="text-xl text-muted-foreground text-pretty"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {mainServicesData.subtitle}
          </motion.p>
        </div>
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {mainServicesData.services.map((service, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Card className="relative overflow-hidden bg-white hover:border-gray-900
                      dark:bg-slate-900 border-2 cursor-pointer 
                      transition-all duration-500 
                      dark:hover:border-indigo-200 hover:-translate-y-1"
            >
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
                      <CheckCircle className="h-4 w-4" />
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
                  <Button className="w-full" asChild>
                    <Link href="/contato">Analisar Portfólio</Link>
                  </Button>
                )}
                {service.title === "Simulação de Financiamento" && (
                  <Button className="w-full" asChild>
                    <Link href="/contato">Simular Financiamento</Link>
                  </Button>
                )}
              </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  );
}
