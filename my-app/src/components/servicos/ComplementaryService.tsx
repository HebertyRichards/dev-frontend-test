import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { complementaryServicesData } from "@/data/serviceData";

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {complementaryServicesData.services.map((service, index) => (
            <Card key={index} className="text-center hover:border-gray-900 dark:bg-slate-900 dark:hover:border-indigo-200 transition-all duration-500 hover:-translate-y-1">
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
          ))}
        </div>
      </div>
    </section>
  );
}
