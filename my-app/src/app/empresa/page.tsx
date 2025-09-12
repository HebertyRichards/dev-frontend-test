import { EnterpriseHeader } from "@/components/enterprise/EnterpriseHeader";
import { MissionVisionValues } from "@/components/enterprise/MissionVissionValues";
import { Stats } from "@/components/enterprise/Stats";
import { Team } from "@/components/enterprise/Team";
import { Certifications } from "@/components/enterprise/Certifications";
import { Testimonials } from "@/components/enterprise/Testimonials";
import { Headquarters } from "@/components/enterprise/HeadQuarters";

export default function Enterprise() {
  return (
    <div className="min-h-screen">
      <EnterpriseHeader />
      <MissionVisionValues />
      <Stats />
      <Team />
      <Certifications />
      <Testimonials />
      <Headquarters />
    </div>
  );
}
