import { CalendarDays, Clock3, Heart, Shield, Star, Users } from "lucide-react";
import Image from "next/image";

import { FadeIn, HoverCard } from "@/components/motion-primitives";
import { ButtonLink } from "../ui/button-link";
import { siteConfig } from "@/components/site-data";

type HeroFeature = {
  icon: typeof Heart;
  title: string;
  text: string;
};

type HeroPromise = {
  icon: typeof Heart;
  text: string;
};

function HeroBadge({ text }: { text: string }) {
  return (
    <div className="rounded-2xl border border-white/12 bg-white/10 px-4 py-3 text-center text-sm font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-sm">
      {text}
    </div>
  );
}

const heroFeatures: HeroFeature[] = [
  {
    icon: Heart,
    title: "Atendimento Humanizado",
    text: "Cuidado próximo, acolhedor e pensado para pets e tutores.",
  },
  {
    icon: Shield,
    title: "Estrutura Completa",
    text: "Ambientes planejados para rotina, diagnóstico e internação.",
  },
  {
    icon: Clock3,
    title: "Emergência 24 Horas",
    text: "Equipe preparada para agir com agilidade quando mais importa.",
  },
  {
    icon: Users,
    title: "Equipe Especializada",
    text: "Profissionais experientes para cada etapa do cuidado veterinário.",
  },
];

const heroPromises: HeroPromise[] = [
  { icon: Shield, text: "Confiança que acolhe." },
  { icon: Heart, text: "Cuidado que transforma." },
  { icon: Star, text: "Saúde que acompanha cada fase da vida." },
];

type HeroSectionProps = {
  hasLogo: boolean;
  hasClinicImage: boolean;
};

export function HeroSection({ hasLogo, hasClinicImage }: HeroSectionProps) {
  return (
    <section className="surface-grid relative overflow-hidden bg-[linear-gradient(180deg,#fbf8f2_0%,#f8f3ea_52%,#ffffff_100%)]">
      {hasClinicImage ? (
        <>
          <Image
            src="/image.png"
            alt="Fachada da clínica Sanus Vet"
            fill
            priority
            quality={100}
            sizes="100vw"
            className="object-cover object-[62%_center] blur-[10px] md:blur-[7px]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(251,248,242,0.99)_0%,rgba(248,243,234,0.93)_18%,rgba(248,243,234,0.76)_40%,rgba(248,243,234,0.5)_62%,rgba(248,243,234,0.24)_82%,rgba(248,243,234,0.12)_100%)] md:hidden" />
          <div className="absolute inset-0 hidden bg-[linear-gradient(90deg,rgba(251,248,242,0.99)_0%,rgba(251,248,242,0.97)_16%,rgba(248,243,234,0.92)_30%,rgba(248,243,234,0.82)_42%,rgba(248,243,234,0.66)_54%,rgba(248,243,234,0.46)_66%,rgba(248,243,234,0.24)_80%,rgba(248,243,234,0.08)_100%)] md:block" />
          <div className="absolute inset-0 bg-white/14 md:bg-transparent" />
        </>
      ) : null}
      <div className="floating-orb absolute left-[-4rem] top-20 h-40 w-40 rounded-full bg-[#A7CBE5]/30 blur-3xl" />
      <div className="floating-orb-delayed absolute right-[-3rem] top-16 h-44 w-44 rounded-full bg-[#D4AF37]/12 blur-3xl" />     

      <div className="section-shell relative z-10 py-14 sm:py-18 lg:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.92fr)] lg:gap-14">
          <div className="relative max-w-[40rem] pl-5 sm:pl-0">
            <FadeIn delay={0.04}>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/25 bg-white/75 px-4 py-2 text-sm font-bold uppercase tracking-[0.18em] text-[#C69B1D] shadow-[0_14px_35px_rgba(13,44,77,0.06)] backdrop-blur-sm">
                <Heart className="h-4 w-4" />
                Cuidado que gera confiança
              </div>
            </FadeIn>

            <FadeIn delay={0.12}>
              <h1 className="mt-6 max-w-[14ch] text-[2.95rem] font-bold leading-[0.94] tracking-[-0.04em] text-[#0D2C4D] sm:text-[4.2rem] lg:text-[5rem]">
                Cuidado completo para
                <br />
                quem você
                <br />
                <span className="text-[#C69B1D]">mais ama.</span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="mt-7 max-w-[35rem]">
                <div className="mb-5 flex items-center gap-4">
                  <div className="h-[2px] w-20 rounded-full bg-[#D4AF37]" />
                  <Heart className="h-4 w-4 text-[#C69B1D]" />
                </div>
                <p className="text-base leading-8 text-slate-700 sm:text-lg sm:leading-9">
                  Para quem considera seu pet parte da família, 
                  a Sanus Vet é a
                  clínica veterinária que cuida hoje para garantir mais saúde
                  amanhã, porque acredita que confiança se constrói com
                  presença, orientação e acompanhamento constante.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.28}>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <ButtonLink
                  href={`https://wa.me/${siteConfig.whatsappRaw}`}
                  className="px-7 py-4 text-base ring-transparent"
                >
                  
                  Agendar consulta
                </ButtonLink>
                <ButtonLink
                  href={`https://wa.me/${siteConfig.whatsappRaw}`}
                  variant="secondary"
                  className="px-7 py-4 text-base ring-transparent"
                >
                  
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

        {/* <FadeIn delay={0.42}>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {heroFeatures.map((feature) => {
              const Icon = feature.icon;

              return (
                <article
                  key={feature.title}
                  className="card-depth rounded-[1.7rem] border border-white/70 bg-white/78 p-6 shadow-[0_24px_60px_rgba(13,44,77,0.08)] backdrop-blur-md"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F7FAFE] text-[#0D2C4D] shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]">
                    <Icon className="h-6 w-6 text-[#0D2C4D]" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-[#0D2C4D]">
                    {feature.title}
                  </h3>
                  <div className="mt-3 h-[2px] w-12 rounded-full bg-[#D4AF37]" />
                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {feature.text}
                  </p>
                </article>
              );
            })}
          </div>
        </FadeIn> */}

        {/* <FadeIn delay={0.48}>
          <div className="mt-5 overflow-hidden rounded-[1.4rem] bg-[#0D2C4D] text-white shadow-[0_18px_45px_rgba(13,44,77,0.2)]">
            <div className="grid gap-0 md:grid-cols-3">
              {heroPromises.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.text}
                    className="flex items-center gap-3 border-b border-white/10 px-5 py-4 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0"
                  >
                    <Icon className="h-5 w-5 shrink-0 text-[#D4AF37]" />
                    <span className="text-sm font-medium text-white/92">
                      {item.text}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </FadeIn> */}
      </div>
    </section>
  );
}
