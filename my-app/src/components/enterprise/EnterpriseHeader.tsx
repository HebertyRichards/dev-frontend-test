"use client";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export function EnterpriseHeader() {
  return (
    <motion.section
      className="bg-slate-50 dark:bg-slate-950 py-20 px-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Badge variant="secondary" className="mb-4 bg-green-500 font-bold">
            Sobre a InvestPro
          </Badge>
        </motion.div>
        <motion.h1
          className="text-4xl lg:text-5xl font-bold text-balance mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Transformando Sonhos em{" "}
          <span className="text-primary">Realidade Imobiliária</span>
        </motion.h1>
        <motion.p
          className="text-xl text-muted-foreground text-pretty"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Há mais de 10 anos no mercado, somos especialistas em conectar pessoas
          aos melhores investimentos imobiliários do Brasil.
        </motion.p>
      </div>
    </motion.section>
  );
}
