import fs from "node:fs";
import path from "node:path";

import { ClinicShowcase } from "./sections/clinic-showcase";
import { FAQSection } from "./sections/faq-section";
import { FounderSection } from "./sections/founder-section";
import { FinalCTA } from "./sections/final-cta";
import { Footer } from "./sections/footer";
import { HeroSection } from "./sections/hero-section";
import { Navbar } from "./sections/navbar";
import { ServicesGrid } from "./sections/services-grid";
import { SpecialtiesSection } from "./sections/specialties-section";
import { StructureSection } from "./sections/structure-section";
import { TestimonialsCarousel } from "./sections/testimonials-carousel";

export function LandingPage() {
  const hasLogo = fs.existsSync(
    path.join(process.cwd(), "public", "image_0.png"),
  );
  const hasHeroClinicImage = fs.existsSync(
    path.join(process.cwd(), "public", "image.png"),
  );
  const hasClinicImage = fs.existsSync(
    path.join(process.cwd(), "public", "image_2.png"),
  );
  const hasFounderImage = fs.existsSync(
    path.join(process.cwd(), "public", "founder.jpeg"),
  );

  return (
    <div className="flex min-h-screen flex-col bg-white text-black">
      <Navbar hasLogo={hasLogo} />
      <main className="relative flex-1 overflow-hidden">
        <HeroSection hasLogo={hasLogo} hasClinicImage={hasHeroClinicImage} />
        <ServicesGrid />
        <SpecialtiesSection />
        <ClinicShowcase hasClinicImage={hasClinicImage} />
        <StructureSection />
        <FounderSection hasFounderImage={hasFounderImage} />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer hasLogo={hasLogo} />
    </div>
  );
}
