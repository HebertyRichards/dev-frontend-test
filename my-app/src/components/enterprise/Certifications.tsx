import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award } from "lucide-react";
import { certifications } from "@/data/enterprise";

export function Certifications() {
  return (
    <section className="bg-card py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-4">
            Certificações e Reconhecimentos
          </h2>
          <p className="text-xl text-muted-foreground text-pretty">
            Credibilidade e qualidade reconhecidas pelo mercado
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {certifications.map((cert) => (
            <Card key={cert.title} className="text-center">
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
          ))}
        </div>
      </div>
    </section>
  );
}
