"use client";

import { useMemo, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { HelpCircle, Minus, Plus } from "lucide-react";

import { FadeIn } from "@/components/motion-primitives";
import { cn } from "@/lib/utils";

type FAQItem = {
  question: string;
  answer: string;
};

export function FAQSection() {
  const items = useMemo<FAQItem[]>(
    () => [
      {
        question: "Quais serviços a Sanus Vet oferece?",
        answer:
          "Oferecemos atendimento clínico, cirurgias, exames laboratoriais, consultas de especialidades, vacinação, internação e muito mais.",
      },
      {
        question: "Quais os horários de atendimento?",
        answer:
          "Nosso hospital funciona de segunda a sábado, das 8h às 23h. Atendemos emergências 24 horas por dia.",
      },
      {
        question:
          "É necessário agendar consulta ou atendem por ordem de chegada?",
        answer:
          "Para garantir um atendimento mais ágil, recomendamos o agendamento prévio. No entanto, também atendemos casos de emergência sem a necessidade de agendamento.",
      },
    ],
    [],
  );

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="duvidas" className="relative bg-white py-20">
      <div className="floating-orb absolute left-10 top-12 h-28 w-28 rounded-full bg-[#A7CBE5]/16 blur-3xl" />
      <div className="floating-orb-delayed absolute right-10 bottom-10 h-28 w-28 rounded-full bg-[#D4AF37]/12 blur-3xl" />

      <div className="section-shell">
        <div className="mx-auto max-w-3xl text-center">
          <FadeIn>
            <span className="text-sm font-bold uppercase tracking-[0.28em] text-[#1E4D7A]">
              Dúvidas Frequentes
            </span>
          </FadeIn>
          <FadeIn delay={0.08}>
            <h2 className="mt-4 text-3xl font-bold text-[#0D2C4D] sm:text-4xl">
              Respostas rápidas para você decidir com segurança
            </h2>
          </FadeIn>
          <FadeIn delay={0.16}>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Transparência e orientação clara em cada etapa do cuidado.
            </p>
          </FadeIn>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-5">
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            const toggle = () =>
              setOpenIndex((current) => (current === index ? null : index));

            return (
              <FadeIn key={item.question} delay={0.05 * index}>
                <article className="card-depth overflow-hidden rounded-[1.75rem] border border-black/5 bg-white/92 shadow-[0_14px_35px_rgba(13,44,77,0.05),0_28px_70px_rgba(13,44,77,0.08)] backdrop-blur-sm">
                  <button
                    type="button"
                    onClick={toggle}
                    aria-expanded={isOpen}
                    className="flex w-full items-start justify-between gap-6 px-7 py-6 text-left"
                  >
                    <span className="flex items-start gap-4">
                      <span className="soft-ring mt-1 inline-flex rounded-2xl bg-[linear-gradient(180deg,#FDF8EA_0%,#F2E9D0_100%)] p-3 text-[#1E4D7A]">
                        <HelpCircle className="h-6 w-6" />
                      </span>
                      <span className="text-lg font-bold leading-7 text-[#0D2C4D]">
                        {item.question}
                      </span>
                    </span>

                    <span
                      className={cn(
                        "mt-1 inline-flex h-10 w-10 flex-none items-center justify-center rounded-full border border-slate-200 bg-white text-[#1E4D7A] shadow-[0_10px_25px_rgba(13,44,77,0.08)] transition-transform duration-300",
                        isOpen && "rotate-180",
                      )}
                    >
                      {isOpen ? (
                        <Minus className="h-5 w-5" />
                      ) : (
                        <Plus className="h-5 w-5" />
                      )}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen ? (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-7 pb-7">
                          <p className="pl-[60px] text-base leading-7 text-slate-600">
                            {item.answer}
                          </p>
                        </div>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}

