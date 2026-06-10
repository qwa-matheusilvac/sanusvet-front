import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { FadeIn, HoverCard } from "@/components/motion-primitives";

import { specialties } from "../content";
import { ButtonLink } from "../ui/button-link";

export function SpecialtiesSection() {
  return (
    <section
      id="especialidades"
      className="surface-grid relative overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(167,203,229,0.18),transparent_24%),linear-gradient(135deg,#1E4D7A_0%,#153a5d_58%,#0D2C4D_100%)] py-20 text-white"
    >
      <div className="floating-orb absolute -left-10 top-12 h-40 w-40 rounded-full bg-white/8 blur-3xl" />
      <div className="floating-orb-delayed absolute right-0 top-0 h-52 w-52 rounded-full bg-[#D4AF37]/12 blur-3xl" />
      <div className="section-shell">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <FadeIn>
              <span className="text-sm font-bold uppercase tracking-[0.28em] text-[#F2E9D0]">
                Especialidades
              </span>
            </FadeIn>
            <FadeIn delay={0.08}>
              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                Equipe de Especialistas Dedicada
              </h2>
            </FadeIn>
            <FadeIn delay={0.16}>
              <p className="mt-4 text-lg leading-8 text-slate-100/90">
                Cuidado integrado com especialistas que unem diagnóstico preciso,
                experiência clínica e atenção individualizada.
              </p>
            </FadeIn>
          </div>

          <FadeIn delay={0.24}>
            <ButtonLink href="#agendamento">Falar com a equipe</ButtonLink>
          </FadeIn>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {specialties.map((specialty) => (
            <HoverCard key={specialty.title}>
              <article className="card-depth group flex h-full flex-col rounded-[1.75rem] border border-white/12 bg-white/8 p-6 shadow-[0_24px_60px_rgba(0,0,0,0.12)] backdrop-blur-xl">
                <div className="inline-flex w-fit rounded-2xl bg-white/10 p-4 text-[#F2E9D0] shadow-[inset_0_1px_0_rgba(255,255,255,0.14)] transition-transform duration-300 group-hover:scale-110">
                  {specialty.icon}
                </div>
                <h3 className="mt-5 text-2xl font-bold">{specialty.title}</h3>
                <p className="mt-3 flex-1 text-base leading-7 text-slate-100/85">
                  {specialty.description}
                </p>
                <Link
                  href="#contato"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#F2E9D0] hover:text-white"
                >
                  Saber mais
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </article>
            </HoverCard>
          ))}
        </div>
      </div>
    </section>
  );
}
