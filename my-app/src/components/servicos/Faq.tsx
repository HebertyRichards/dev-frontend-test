import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqData } from "@/data/serviceData";

export function Faq() {
  return (
    <section className="bg-card py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-4">
            {faqData.title}
          </h2>
          <p className="text-xl text-muted-foreground text-pretty">
            {faqData.subtitle}
          </p>
        </div>
        <Accordion type="single" collapsible className="space-y-4">
          {faqData.questions.map((item) => (
            <AccordionItem value={item.id} key={item.id}>
              <AccordionTrigger className="text-left">
                {item.question}
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground">{item.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
