import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock } from "lucide-react";

export function OpeningHours() {
  return (
    <aside>
      <Card className="transition duration-500 hover:border-gray-900 dark:bg-slate-900 dark:hover:border-indigo-200 flex">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Clock className="h-5 w-5 text-primary" />
            <span>Horário de Atendimento</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="flex justify-between">
            <span>Segunda a Sexta</span>
            <span className="font-medium">8h às 18h</span>
          </div>
          <div className="flex justify-between">
            <span>Sábado</span>
            <span className="font-medium">9h às 14h</span>
          </div>
          <div className="flex justify-between">
            <span>Domingo</span>
            <span className="text-muted-foreground">Fechado</span>
          </div>
        </CardContent>
      </Card>
    </aside>
  );
}
