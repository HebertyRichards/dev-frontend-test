"use client"
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { contactInfo } from "@/data/enterprise";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export function Headquarters() {
  return (
    <section className="bg-slate-200 dark:bg-slate-800 py-20 px-4">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.h2
          className="text-3xl lg:text-4xl font-bold text-balance mb-4"
          variants={itemVariants}
        >
          Conheça Nossa Sede
        </motion.h2>
        <motion.p className="text-xl text-pretty mb-8" variants={itemVariants}>
          Visite nosso escritório ou entre em contato para agendar uma reunião
        </motion.p>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8"
          variants={containerVariants}
        >
          {contactInfo.map((info) => {
            const Icon = info.icon;
            return (
              <motion.div
                key={info.title}
                className="flex flex-col items-center"
                variants={itemVariants}
              >
                <Icon className="h-8 w-8 mb-2" />
                <h3 className="font-semibold mb-1">{info.title}</h3>
                <div className="text-sm">
                  {info.lines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
        <motion.div variants={itemVariants}>
          <Button size="lg" asChild>
            <Link href="/contato">Agendar Visita</Link>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
