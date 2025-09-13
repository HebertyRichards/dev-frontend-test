"use client"
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function CallToActionSection() {
  return (
    <section className="bg-slate-200 dark:bg-slate-800 py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={containerVariants}
        >
          <motion.h2
            className="text-3xl lg:text-4xl font-bold text-balance mb-4"
            variants={itemVariants}
          >
            Pronto para Investir com Segurança?
          </motion.h2>
          <motion.p
            className="text-xl text-pretty mb-8"
            variants={itemVariants}
          >
            Agende uma consultoria gratuita e descubra as melhores oportunidades
            de investimento imobiliário para o seu perfil.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={itemVariants}
          >
            <Button size="lg" asChild>
              <Link href="/contato">Agendar Consultoria Gratuita</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-primary-foreground hover:bg-primary-foreground hover:text-primary"
              asChild
            >
              <Link href="/servicos">Conhecer Serviços</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
