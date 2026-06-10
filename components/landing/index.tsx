import fs from "node:fs";
import path from "node:path";

import { ClinicShowcase } from "./sections/clinic-showcase";
import { FinalCTA } from "./sections/final-cta";
import { Footer } from "./sections/footer";
import { HeroSection } from "./sections/hero-section";
import { Navbar } from "./sections/navbar";
import { ServicesGrid } from "./sections/services-grid";
import { SpecialtiesSection } from "./sections/specialties-section";
import { TestimonialsCarousel } from "./sections/testimonials-carousel";

export function LandingPage() {
  const hasLogo = fs.existsSync(
    path.join(process.cwd(), "public", "image_0.png"),
  );
  const hasClinicImage = fs.existsSync(
    path.join(process.cwd(), "public", "image_2.png"),
  );

  return (
    <div className="flex min-h-screen flex-col bg-white text-black">
      <Navbar hasLogo={hasLogo} />
      <main className="relative flex-1 overflow-hidden">
        <HeroSection hasLogo={hasLogo} />
        <ServicesGrid />
        <SpecialtiesSection />
        <ClinicShowcase hasClinicImage={hasClinicImage} />
        <TestimonialsCarousel />
        <FinalCTA />
      </main>
      <Footer hasLogo={hasLogo} />
    </div>
  );
}
