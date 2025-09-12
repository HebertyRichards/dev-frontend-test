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
            <Card key={member.name} className="text-center">
              <CardHeader>
                <div className="mx-auto w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-white">
                    {member.initials}
                  </span>
                </div>
                <CardTitle>{member.name}</CardTitle>
                <CardDescription>{member.role}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {member.description}
                </p>
                <Badge variant="outline">{member.badge}</Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
