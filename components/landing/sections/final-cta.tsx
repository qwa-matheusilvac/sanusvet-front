import { FadeIn } from "@/components/motion-primitives";
import { siteConfig } from "@/components/site-data";

import { ButtonLink } from "../ui/button-link";

export function FinalCTA() {
  return (
    <section
      id="agendamento"
      className="surface-grid relative overflow-hidden bg-[radial-gradient(circle_at_top,rgba(167,203,229,0.14),transparent_26%),linear-gradient(180deg,#0D2C4D_0%,#081D33_100%)] py-20 text-white"
    >
      <div className="floating-orb absolute left-10 top-10 h-36 w-36 rounded-full bg-[#A7CBE5]/10 blur-3xl" />
      <div className="floating-orb-delayed absolute right-10 bottom-0 h-40 w-40 rounded-full bg-[#D4AF37]/10 blur-3xl" />
      <div className="section-shell">
        <div className="card-depth group flex h-full flex-col items-center justify-center rounded-[1.75rem] border border-white/12 bg-white/8 p-6 text-center shadow-[0_24px_60px_rgba(0,0,0,0.12)] backdrop-blur-xl">
          <FadeIn>
            <span className="text-sm font-bold uppercase tracking-[0.28em] text-[#A7CBE5]">
              Atendimento rápido
            </span>
          </FadeIn>
          <FadeIn delay={0.08}>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Agende a consulta do seu pet hoje mesmo!
            </h2>
          </FadeIn>
          <FadeIn delay={0.16}>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-100/85">
              Converse com nossa equipe, solicite orientação inicial e encaminhe
              seu pet para consulta, exame ou emergência com agilidade.
            </p>
          </FadeIn>
          <FadeIn delay={0.24}>
            <div className="mt-8 flex justify-center">
              <ButtonLink href={`https://wa.me/${siteConfig.whatsappRaw}`}>
                Agendar Consulta
              </ButtonLink>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
