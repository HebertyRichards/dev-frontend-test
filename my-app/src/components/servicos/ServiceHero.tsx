"use client";
import { Badge } from "@/components/ui/badge";
import { serviceHeroData } from "@/data/serviceData";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export function ServiceSection() {
  return (
    <motion.section
      className="bg-slate-50 dark:bg-slate-950 py-20 px-4"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div variants={itemVariants}>
          <Badge variant="secondary" className="mb-4 bg-green-500 font-bold">
            {serviceHeroData.badge}
          </Badge>
        </motion.div>
        <motion.h1
          className="text-4xl lg:text-5xl font-bold text-balance mb-6"
          variants={itemVariants}
        >
          {serviceHeroData.title.replace(serviceHeroData.highlightedWord, "")}
          <span className="text-primary">
            {serviceHeroData.highlightedWord}
          </span>
        </motion.h1>
        <motion.p
          className="text-xl text-muted-foreground text-pretty"
          variants={itemVariants}
        >
          {serviceHeroData.subtitle}
        </motion.p>
      </div>
    </motion.section>
  );
}
