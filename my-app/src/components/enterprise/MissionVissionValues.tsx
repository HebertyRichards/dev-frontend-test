import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { missionVisionValues } from "@/data/enterprise";

export function MissionVisionValues() {
  return (
    <section className="py-20 px-4 bg-slate-200 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {missionVisionValues.map((item) => {
            const Icon = item.icon;
            return (
              <Card
                key={item.title}
                className="text-center transition duration-500 hover:border-gray-900 dark:bg-slate-900 dark:hover:border-indigo-200 hover:-translate-y-1"
              >
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
