import { Button } from "@/components/ui/button";
import Link from "next/link";
import { contactInfo } from "@/data/enterprise";

export function Headquarters() {
  return (
    <section className="bg-slate-200 dark:bg-slate-800 py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-4">
          Conheça Nossa Sede
        </h2>
        <p className="text-xl text-pretty mb-8">
          Visite nosso escritório ou entre em contato para agendar uma reunião
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {contactInfo.map((info) => {
            const Icon = info.icon;
            return (
              <div key={info.title} className="flex flex-col items-center">
                <Icon className="h-8 w-8 mb-2" />
                <h3 className="font-semibold mb-1">{info.title}</h3>
                <div className="text-sm">
                  {info.lines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        <Button size="lg" asChild>
          <Link href="/contato">Agendar Visita</Link>
        </Button>
      </div>
    </section>
  );
}
