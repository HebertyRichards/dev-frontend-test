import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { teamMembers } from "@/data/enterprise";

export function Team() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-4">
            Nossa Equipe de Especialistas
          </h2>
          <p className="text-xl text-muted-foreground text-pretty">
            Profissionais qualificados e experientes no mercado imobiliário
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <Card
              key={member.name}
              className="text-center transition-all duration-300 hover:border-gray-900 dark:hover:border-indigo-200 hover:-translate-y-1 dark:bg-slate-900"
            >
              <CardHeader className="pt-8">
                <div className="mx-auto w-24 h-24 mb-4 rounded-full overflow-hidden ring-2 ring-primary/30 ring-offset-2 dark:ring-offset-slate-900">
                  <img
                    src={member.imageUrl}
                    alt={`Foto de ${member.name}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle>{member.name}</CardTitle>
                <CardDescription>{member.role}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 min-h-[72px]">
                  {member.description}
                </p>
                <Badge variant="secondary" className="bg-green-500 font-bold">
                  {member.badge}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
