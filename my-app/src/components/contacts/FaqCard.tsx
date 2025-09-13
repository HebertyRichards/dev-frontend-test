import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HelpCircle } from "lucide-react";

export function FaqCard() {
  return (
    <aside>
      <Card className="transition duration-500 hover:border-gray-900 dark:bg-slate-900 dark:hover:border-indigo-200 flex">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <HelpCircle className="h-5 w-5 text-primary" />
            <span>Dúvidas Frequentes</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">
            Confira nossa seção de perguntas frequentes para esclarecer dúvidas
            comuns.
          </p>
          <Button variant="outline" className="w-full bg-transparent" asChild>
            <a href="/servicos#faq">Ver FAQ</a>
          </Button>
        </CardContent>
      </Card>
    </aside>
  );
}
