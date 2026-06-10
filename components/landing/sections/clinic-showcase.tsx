import Image from "next/image";

import { FadeIn } from "@/components/motion-primitives";
import { siteConfig } from "@/components/site-data";

import { ButtonLink } from "../ui/button-link";
import { FeatureItem } from "../ui/feature-item";

type ClinicShowcaseProps = {
  hasClinicImage: boolean;
};

export function ClinicShowcase({ hasClinicImage }: ClinicShowcaseProps) {
  return (
    <section className="relative bg-white py-20">
      <div className="floating-orb absolute left-10 bottom-10 h-28 w-28 rounded-full bg-[#A7CBE5]/18 blur-3xl" />
      <div className="section-shell grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <FadeIn className="relative">
          <div className="pulse-glow absolute -inset-4 -z-10 rounded-[2rem] bg-[#A7CBE5]/40 blur-2xl" />
          <div className="tilt-panel">
            {hasClinicImage ? (
              <Image
                src="/image_2.png"
                alt="Equipe e estrutura da clínica Sanus Vet"
                width={900}
                height={1100}
                className="w-full rounded-[2rem] border border-white/50 object-cover shadow-[0_35px_90px_rgba(13,44,77,0.18)]"
              />
            ) : (
              <div className="flex min-h-[460px] items-end rounded-[2rem] border border-white/50 bg-gradient-to-br from-[#A7CBE5] via-[#F2E9D0] to-white p-8 shadow-[0_35px_90px_rgba(13,44,77,0.18)]">
                <div className="glass-panel max-w-sm rounded-[1.5rem] p-6">
                  <span className="text-sm font-bold uppercase tracking-[0.28em] text-[#1E4D7A]">
                    Estrutura de referência
                  </span>
                  <p className="mt-4 text-lg font-medium leading-8 text-[#0D2C4D]">
                    Adicione `public/image_2.png` para exibir a foto real da
                    clínica nesta seção.
                  </p>
                </div>
              </div>
            )}
          </div>
        </FadeIn>

        <div>
          <FadeIn>
            <span className="text-sm font-bold uppercase tracking-[0.28em] text-[#1E4D7A]">
              Conheça Nossa Clínica
            </span>
          </FadeIn>
          <FadeIn delay={0.08}>
            <h2 className="mt-4 text-3xl font-bold text-[#0D2C4D] sm:text-4xl">
              Tecnologia de Ponta e Estrutura de Referência
            </h2>
          </FadeIn>
          <FadeIn delay={0.16}>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              {siteConfig.clinicDescription}
            </p>
          </FadeIn>

          <FadeIn delay={0.24}>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <FeatureItem
                title="Centro cirúrgico"
                text="Equipamentos modernos e protocolos seguros."
              />
              <FeatureItem
                title="Diagnóstico por imagem"
                text="Raio-x e ultrassom para decisões rápidas."
              />
              <FeatureItem
                title="Atendimento humanizado"
                text="Cuidado próximo para tutores e pets."
              />
              <FeatureItem
                title="Fluxo 24 horas"
                text="Estrutura pronta para rotina e emergência."
              />
            </div>
          </FadeIn>

          <FadeIn delay={0.32}>
            <div className="mt-8">
              <ButtonLink href="#contato" variant="secondary">
                Visite Nossa Estrutura
              </ButtonLink>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
