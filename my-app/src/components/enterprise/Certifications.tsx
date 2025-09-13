"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award } from "lucide-react";
import { certifications } from "@/data/enterprise";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.4,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export function Certifications() {
  return (
    <section className="dark:bg-slate-900 bg-slate-100 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-4">
            Certificações e Reconhecimentos
          </h2>
          <p className="text-xl text-muted-foreground text-pretty">
            Credibilidade e qualidade reconhecidas pelo mercado
          </p>
        </div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {certifications.map((cert) => (
            <motion.div key={cert.title} variants={itemVariants}>
              <Card className="text-center h-full transition duration-500 hover:border-gray-900 dark:bg-slate-900 dark:hover:border-indigo-200 hover:-translate-y-1">
                <CardHeader>
                  <Award className="mx-auto h-12 w-12 text-primary mb-4" />
                  <CardTitle className="text-lg">{cert.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    {cert.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
