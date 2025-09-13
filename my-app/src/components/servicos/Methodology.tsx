"use client"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { methodologyData } from "@/data/serviceData";
import { motion, Variants } from "framer-motion";

const columnLeftVariant: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const columnRightVariant: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export function Methodology() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-4">
            {methodologyData.title}
          </h2>
          <p className="text-xl text-muted-foreground text-pretty">
            {methodologyData.subtitle}
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={columnLeftVariant}
          >
            <h3 className="text-2xl font-bold mb-6">
              {methodologyData.methodology.title}
            </h3>
            <div className="space-y-6">
              {methodologyData.methodology.steps.map((step, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-primary-foreground">
                      {index + 1}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">{step.title}</h4>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={columnRightVariant}
          >
          <Card className="hover:border-gray-900 dark:bg-slate-900 dark:hover:border-indigo-200 transition-all duration-500 hover:-translate-y-1">
            <CardHeader>
              <CardTitle>{methodologyData.factors.title}</CardTitle>
              <CardDescription>
                {methodologyData.factors.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                {methodologyData.factors.categories.map((category, index) => (
                  <div key={index} className="space-y-2">
                    <h5 className="font-medium">{category.title}</h5>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {category.items.map((item, idx) => (
                        <li key={idx}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
        </div>
      </div>
    </section>
  );
}
