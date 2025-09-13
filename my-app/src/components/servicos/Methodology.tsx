import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { methodologyData } from "@/data/serviceData";

export function Methodology() {
  return (
    <section className="bg-card py-20 px-4">
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
          <div>
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
          </div>
          <Card>
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
        </div>
      </div>
    </section>
  );
}
