import { FadeIn, HoverCard } from "@/components/motion-primitives";
import { siteConfig } from "@/components/site-data";

import { services } from "../content";
import type { CardItem } from "../types";

export function ServicesGrid() {
  return (
    <section id="servicos" className="relative bg-white py-20">
      <div className="floating-orb absolute left-0 top-10 h-32 w-32 rounded-full bg-[#A7CBE5]/20 blur-3xl" />
      <div className="floating-orb-delayed absolute right-8 top-24 h-24 w-24 rounded-full bg-[#D4AF37]/15 blur-3xl" />
      <div className="section-shell">
        <div className="mx-auto max-w-3xl text-center">
          <FadeIn>
            <span className="text-sm font-bold uppercase tracking-[0.28em] text-[#1E4D7A]">
              Serviços
            </span>
          </FadeIn>
          <FadeIn delay={0.08}>
            <h2 className="mt-4 text-3xl font-bold text-[#0D2C4D] sm:text-4xl">
              Serviços Completos para a Saúde do Seu Pet
            </h2>
          </FadeIn>
          <FadeIn delay={0.16}>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              {siteConfig.servicesSubtitle}
            </p>
          </FadeIn>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ title, description, icon }: CardItem) {
  return (
    <HoverCard>
      <article className="card-depth group h-full rounded-[1.75rem] border border-black/5 bg-white/92 p-7 shadow-[0_14px_35px_rgba(13,44,77,0.05),0_28px_70px_rgba(13,44,77,0.08)] backdrop-blur-sm">
        <div className="soft-ring inline-flex rounded-2xl bg-[linear-gradient(180deg,#FDF8EA_0%,#F2E9D0_100%)] p-4 text-[#1E4D7A] transition-transform duration-300 group-hover:scale-110">
          {icon}
        </div>
        <h3 className="mt-6 text-2xl font-bold text-[#0D2C4D]">{title}</h3>
        <p className="mt-3 text-base leading-7 text-slate-600">{description}</p>
      </article>
    </HoverCard>
  );
}
