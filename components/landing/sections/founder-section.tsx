import Image from "next/image";

import { UserRound } from "lucide-react";

import { FadeIn, HoverCard } from "@/components/motion-primitives";

type FounderSectionProps = {
  hasFounderImage: boolean;
};

export function FounderSection({ hasFounderImage }: FounderSectionProps) {
  return (
    <section id="fundador" className="relative bg-white py-20">
      <div className="floating-orb absolute -left-12 top-16 h-32 w-32 rounded-full bg-[#D4AF37]/10 blur-3xl" />
      <div className="floating-orb-delayed absolute right-10 bottom-12 h-28 w-28 rounded-full bg-[#A7CBE5]/20 blur-3xl" />
      <div className="section-shell grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <HoverCard delay={0.1} className="relative">
          <div className="pulse-glow absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-[#A7CBE5]/50 via-white/50 to-[#D4AF37]/25 blur-2xl" />
          <div className="tilt-panel overflow-hidden rounded-[2.25rem] border border-white/60 bg-white shadow-[0_35px_90px_rgba(13,44,77,0.12)]">
            {hasFounderImage ? (
              <Image
                src="/founder.jpeg"
                alt="Foto do Dr. Igor Costa, fundador da Sanus Vet"
                width={900}
                height={1100}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex min-h-[520px] flex-col justify-between bg-[linear-gradient(135deg,#0D2C4D_0%,#1E4D7A_35%,#A7CBE5_100%)] p-8 text-white">
                <div className="inline-flex items-center gap-3 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur">
                  <span className="rounded-full bg-white/15 p-2">
                    <UserRound className="h-5 w-5" />
                  </span>
                  Moldura pronta para a foto
                </div>
                <div className="glass-panel max-w-md rounded-[1.75rem] p-6 text-slate-800">
                  <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#1E4D7A]">
                    Foto do fundador
                  </p>
                  <p className="mt-4 text-lg font-medium leading-8 text-[#0D2C4D]">
                    Adicione `public/founder.png` para exibir a foto do Dr. Igor
                    Costa nesta seção.
                  </p>
                </div>
              </div>
            )}
          </div>
        </HoverCard>

        <div className="max-w-2xl">
          <FadeIn>
            <span className="text-sm font-bold uppercase tracking-[0.28em] text-[#1E4D7A]">
              Fundador
            </span>
          </FadeIn>
          <FadeIn delay={0.08}>
            <h2 className="mt-4 text-3xl font-bold text-[#0D2C4D] sm:text-4xl">
              Dr. Igor Costa
            </h2>
          </FadeIn>
          <FadeIn delay={0.14}>
            <p className="mt-3 text-lg font-semibold text-slate-700">
              Fundador da Sanus Vet | Cirurgia e Ortopedia Veterinária
            </p>
          </FadeIn>

          <FadeIn delay={0.22}>
            <div className="mt-6 space-y-5 text-lg leading-8 text-slate-600">
              <p>
                Dr. Igor Costa é médico-veterinário, fundador da Sanus Vet, com
                mais de 10 anos de experiência em especialidades cirúrgicas.
                Atua com foco em cirurgia, ortopedia, neurocirurgia e
                procedimentos avançados em cães e gatos.
              </p>
              <p>
                Sua trajetória começou com uma paixão pelos animais desde a
                infância e se transformou em um propósito: oferecer atendimento
                veterinário de alta qualidade, unindo técnica, segurança e
                cuidado humanizado.
              </p>
              <p>
                Com formação multidisciplinar, Dr. Igor possui pós-graduação em
                Ortopedia e Neurocirurgia Veterinária, Cirurgia de Tecidos
                Moles em Cães e Gatos, Anestesiologia Veterinária e Clínica
                Médica de Cães e Gatos, além de aprimoramentos em Videocirurgia
                Veterinária e Cirurgias Avançadas do Sistema Urinário.
              </p>
              <p>
                Na Sanus Vet, lidera uma estrutura pensada para proporcionar
                diagnóstico preciso, procedimentos seguros e acompanhamento
                próximo em cada etapa do tratamento, sempre com foco na
                recuperação, no bem-estar e na qualidade de vida dos pets.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

