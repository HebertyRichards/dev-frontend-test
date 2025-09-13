import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star } from "lucide-react";
import { testimonialsHome } from "@/data/index";

function Stars() {
  return (
    <div className="flex items-center space-x-1 mb-2">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-yellow-500 text-yellow-500" />
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-4">
            Casos de Sucesso
          </h2>
          <p className="text-xl text-muted-foreground text-pretty">
            Veja como ajudamos nossos clientes a alcançar seus objetivos
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsHome.map((testimonial) => (
            <Card
              key={testimonial.author}
              className="bg-white transition-all duration-500 dark:bg-slate-900 border-transparent hover:border-4 hover:border-indigo-200 hover:-translate-y-1"
            >
              <CardHeader>
                <Stars />
                <CardTitle className="text-lg">{testimonial.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {testimonial.quote}
                </p>
                <p className="text-sm font-medium">- {testimonial.author}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
