"use client";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function HeroSection() {
  return (
    <section className="py-20 px-4 bg-slate-50 dark:bg-slate-950">
      <div className="container mx-auto">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <Badge variant="secondary" className="mb-4 bg-green-500 font-bold">
              Consultoria Especializada
            </Badge>
          </motion.div>
          <motion.h1
            className="text-4xl lg:text-6xl font-bold text-balance mb-6"
            variants={itemVariants}
          >
            Invista com{" "}
            <span className="text-teal-500 font-bold">Segurança</span>
          </motion.h1>
          <motion.p
            className="text-xl text-muted-foreground text-pretty mb-8"
            variants={itemVariants}
          >
            Recomendações personalizadas de investimento imobiliário baseadas no
            seu perfil, renda e objetivos. Descubra as melhores oportunidades do
            mercado.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={itemVariants}
          >
            <Button size="lg" asChild>
              <Link href="/contato">Começar Agora</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/servicos">Nossos Serviços</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
