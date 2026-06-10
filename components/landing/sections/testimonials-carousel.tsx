import { FadeIn, HoverCard } from "@/components/motion-primitives";

import { testimonials } from "../content";

export function TestimonialsCarousel() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#F2E9D0_0%,#fbf6ea_100%)] py-20">
      <div className="floating-orb absolute right-14 top-16 h-28 w-28 rounded-full bg-white/45 blur-3xl" />
      <div className="section-shell">
        <div className="mx-auto max-w-3xl text-center">
          <FadeIn>
            <span className="text-sm font-bold uppercase tracking-[0.28em] text-[#1E4D7A]">
              Depoimentos
            </span>
          </FadeIn>
          <FadeIn delay={0.08}>
            <h2 className="mt-4 text-3xl font-bold text-[#0D2C4D] sm:text-4xl">
              Quem confia na Sanus Vet recomenda
            </h2>
          </FadeIn>
          <FadeIn delay={0.16}>
            <p className="mt-4 text-lg leading-8 text-slate-700">
              Relatos de tutores que encontraram acolhimento, agilidade e
              segurança para seus pets.
            </p>
          </FadeIn>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <HoverCard key={testimonial.author}>
              <blockquote className="card-depth glass-panel rounded-[1.75rem] p-8">
                <p className="text-lg leading-8 text-slate-700">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <footer className="mt-6 text-sm font-bold uppercase tracking-[0.2em] text-[#1E4D7A]">
                  {testimonial.author}
                </footer>
              </blockquote>
            </HoverCard>
          ))}
        </div>
      </div>
    </section>
  );
}
