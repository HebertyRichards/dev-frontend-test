import { ContactForm } from "@/components/contacts/ContactForm";
import { ContactSection } from "@/components/contacts/ContactSection";
import { OpeningHours } from "@/components/contacts/OpeningHours";
import { ContactInfo } from "@/components/contacts/ContactInfo";
import { FaqCard } from "@/components/contacts/FaqCard";

export default function Contacts() {
  return (
    <div className="min-h-screen">
      <ContactSection />

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
            <div className="space-y-6">
              <ContactInfo />
              <OpeningHours />
              <FaqCard />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
