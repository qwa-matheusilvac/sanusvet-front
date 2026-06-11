import Image from "next/image";

import { FadeIn, HoverCard } from "@/components/motion-primitives";

import { ButtonLink } from "../ui/button-link";

const structureGalleryImages = ["/structure-1.png", "/structure-2.png"];

export function StructureSection() {
  return (
    <section id="estrutura" className="relative bg-white py-20">
      <div className="floating-orb absolute -left-10 top-16 h-32 w-32 rounded-full bg-[#A7CBE5]/16 blur-3xl" />
      <div className="floating-orb-delayed absolute right-12 bottom-16 h-28 w-28 rounded-full bg-[#D4AF37]/12 blur-3xl" />

      <div className="section-shell">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="max-w-xl">
            <FadeIn>
              <span className="text-sm font-bold uppercase tracking-[0.28em] text-[#1E4D7A]">
                Excelência em cada detalhe
              </span>
            </FadeIn>
            <FadeIn delay={0.08}>
              <h2 className="mt-4 text-3xl font-bold text-[#0D2C4D] sm:text-4xl">
                Estrutura moderna e cuidado especializado
              </h2>
            </FadeIn>
            <FadeIn delay={0.16}>
              <div className="mt-5 space-y-4 text-lg leading-8 text-slate-600">
                <p>
                  Ambientes planejados para oferecer segurança, conforto e
                  acolhimento em cada atendimento.
                </p>
                <p>
                  A Sanus Vet conta com um time especializado e estrutura de
                  internação preparada, incluindo leitos para cães de grande
                  porte, garantindo acompanhamento próximo e cuidado
                  individualizado para cada paciente.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.24}>
              <div className="mt-8">
                <ButtonLink href="#contato" variant="secondary">
                  Conhecer nossa estrutura
                </ButtonLink>
              </div>
            </FadeIn>
          </div>

          <HoverCard delay={0.12} className="relative">
            <div className="pulse-glow absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-[#A7CBE5]/45 via-white/55 to-[#1E4D7A]/18 blur-2xl" />
            <div className="tilt-panel overflow-hidden rounded-[2.25rem] border border-white/60 bg-white shadow-[0_35px_90px_rgba(13,44,77,0.14)]">
              <Image
                src="/structure-main.png"
                alt="Estrutura e internação veterinária da Sanus Vet"
                width={1200}
                height={800}
                className="h-full w-full object-cover"
              />
            </div>
          </HoverCard>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-6">
          
            <HoverCard delay={0.08}>
              <div className="card-depth group overflow-hidden rounded-[1.75rem] border border-black/5 bg-white shadow-[0_14px_35px_rgba(13,44,77,0.05),0_28px_70px_rgba(13,44,77,0.08)]">
                <Image
                  src={'/1.png'}
                  alt={`Ambiente e equipe em atendimento veterinário `}
                  width={900}
                  height={800}
                  className="h-40 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] sm:h-56 lg:h-96"
                />
              </div>
            </HoverCard>

             <HoverCard delay={0.08}>
              <div className="card-depth group overflow-hidden rounded-[1.75rem] border border-black/5 bg-white shadow-[0_14px_35px_rgba(13,44,77,0.05),0_28px_70px_rgba(13,44,77,0.08)]">
                <Image
                  src={'/2.png'}
                  alt={`Ambiente e equipe em atendimento veterinário `}
                  width={900}
                  height={800}
                  className="h-46 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] sm:h-56 lg:h-96"
                />
              </div>
            </HoverCard>
         
        </div>
      </div>
    </section>
  );
}
