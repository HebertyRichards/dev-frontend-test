import { ServiceSection } from "@/components/servicos/ServiceHero";
import { MainServices } from "@/components/servicos/MainService";
import { Methodology } from "@/components/servicos/Methodology";
import { ComplementaryServices } from "@/components/servicos/ComplementaryService";
import { Faq } from "@/components/servicos/Faq";
import { CtaSection } from "@/components/servicos/CtaSection";
export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <ServiceSection />
      <MainServices />
      <Methodology />
      <ComplementaryServices />
      <Faq />
      <CtaSection />
    </div>
  );
}
