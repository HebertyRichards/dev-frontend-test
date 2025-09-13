"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { complementaryServicesData } from "@/data/serviceData";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export function ComplementaryServices() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-4">
            {complementaryServicesData.title}
          </h2>
          <p className="text-xl text-muted-foreground text-pretty">
            {complementaryServicesData.subtitle}
          </p>
        </div>
      <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {complementaryServicesData.services.map((service, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Card className="text-center h-full hover:border-gray-900 dark:bg-slate-900 dark:hover:border-indigo-200 transition-all duration-500 hover:-translate-y-1">
              <CardHeader>
                <service.icon
                  className={`mx-auto h-8 w-8 ${service.iconClassName} mb-2`}
                />
                <CardTitle className="text-lg">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  {service.description}
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
