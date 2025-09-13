import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";

export function ContactInfo() {
  return (
    <aside>
      <Card className="transition duration-500 hover:border-gray-900 dark:bg-slate-900 dark:hover:border-indigo-200 flex">
        <CardHeader>
          <CardTitle>Informações de Contato</CardTitle>
          <CardDescription>
            Outras formas de entrar em contato conosco
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-3">
            <Phone className="h-5 w-5 text-primary" />
            <div>
              <p className="font-medium">(11) 3000-0000</p>
              <p className="text-sm text-muted-foreground">
                Segunda a Sexta, 8h às 18h
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Mail className="h-5 w-5 text-primary" />
            <div>
              <p className="font-medium">contato@investpro.com.br</p>
              <p className="text-sm text-muted-foreground">
                Resposta em até 2 horas
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <MapPin className="h-5 w-5 text-primary" />
            <div>
              <p className="font-medium">Av. Paulista, 1000 - Sala 1501</p>
              <p className="text-sm text-muted-foreground">
                Bela Vista, São Paulo - SP
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </aside>
  );
}
