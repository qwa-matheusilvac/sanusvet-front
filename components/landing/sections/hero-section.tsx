import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

import { FadeIn, HoverCard } from "@/components/motion-primitives";
import { siteConfig } from "@/components/site-data";

import { ButtonLink } from "../ui/button-link";
import { HeroBadge } from "../ui/hero-badge";

type HeroSectionProps = {
  hasLogo: boolean;
};

export function HeroSection({ hasLogo }: HeroSectionProps) {
  return (
    <section className="surface-grid overflow-hidden bg-[linear-gradient(180deg,#F2E9D0_0%,#fff8eb_52%,#ffffff_100%)]">
      <div className="section-shell grid items-center gap-14 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
        <div className="relative z-10">
          <div className="floating-orb absolute -left-6 top-2 h-28 w-28 rounded-full bg-[#A7CBE5]/35 blur-2xl" />
          <div className="floating-orb-delayed absolute left-40 top-32 h-16 w-16 rounded-full bg-[#D4AF37]/20 blur-2xl" />      

          <FadeIn delay={0.12}>
            <h1 className="max-w-3xl text-4xl font-bold leading-tight text-[#0D2C4D] drop-shadow-[0_6px_24px_rgba(13,44,77,0.08)] sm:text-5xl lg:text-6xl">
              {siteConfig.heroTitle}
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="mt-6 max-w-2xl space-y-4 text-lg leading-8 text-slate-700">
              <p>
                A Sanus Vet reúne profissionais especializados e atendimento
                humanizado para oferecer um cuidado veterinário completo, seguro
                e acolhedor para cães e gatos em São Caetano.
              </p>
              <p>
                Do cuidado preventivo aos procedimentos de maior complexidade,
                cada atendimento é conduzido com qualidade técnica,
                transparência e atenção individualizada para pets e tutores.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.28}>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <ButtonLink href="#agendamento">Agendar consulta</ButtonLink>
              <ButtonLink href="#contato" variant="secondary">
                Emergência 24 horas
              </ButtonLink>
            </div>
          </FadeIn>

          
        </div>

        <HoverCard delay={0.2} className="relative">
          <div className="pulse-glow absolute inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-[#A7CBE5]/70 via-white/60 to-[#1E4D7A]/20 blur-3xl" />
          <div className="tilt-panel glass-panel rounded-[2rem] p-5">
            <div className="surface-grid relative overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-[#0D2C4D] via-[#16446b] to-[#1E4D7A] p-6">
              <div className="drift-x absolute -left-10 top-10 h-28 w-28 rounded-full bg-white/10 blur-3xl" />
              <div className="floating-orb-delayed absolute bottom-0 right-0 h-36 w-36 rounded-full bg-[#D4AF37]/15 blur-3xl" />
              <div className="absolute right-4 top-4 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-white/90">
                Sanus Vet
              </div>

              {hasLogo ? (
                <div className="mb-6">
                  <Image
                    src="/image_0.png"
                    alt="Marca Sanus Vet"
                    width={160}
                    height={54}
                    className="soft-ring h-12 w-auto rounded-xl bg-white px-3 py-2"
                  />
                </div>
              ) : null}

              <Image
                src="/hero-pets.png"
                alt="Ilustração com cachorro e gato em destaque"
                width={500}
                height={500}
                priority
                className="floating-orb relative z-10 mx-auto w-full max-w-xl drop-shadow-[0_30px_60px_rgba(0,0,0,0.22)]"
              />

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <HeroBadge text="Emergência veterinária" />
                <HeroBadge text="Consultas e vacinação" />
                <HeroBadge text="Cirurgia veterinária" />
                <HeroBadge text="Ultrassom e raio-x pet" />
              </div>
            </div>
          </div>
        </HoverCard>
      </div>
    </section>
  );
}
