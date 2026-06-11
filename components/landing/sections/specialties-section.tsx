import {
  AlertTriangle,
  Bone,
  Droplets,
  HeartPulse,
  PersonStanding,
  Pill,
  Skull,
  Wind,
  type LucideIcon,
} from "lucide-react";

import { FadeIn, HoverCard } from "@/components/motion-primitives";

type EmergencyCard = {
  title: string;
  description: string;
  status: string;
  icon: LucideIcon;
};

const emergencyCards: EmergencyCard[] = [
  {
    title: "Respiração acelerada ou com esforço",
    description:
      "Boca aberta, flancos muito expandidos, língua arroxeada ou esforço para respirar podem indicar falta de oxigênio, problema cardíaco ou crise respiratória.",
    status: "Emergência imediata",
    icon: Wind,
  },
  {
    title: "Gengivas brancas, cinzas ou azuladas",
    description:
      "Coloração pálida, acinzentada ou azulada pode ser sinal de choque, anemia grave ou alteração circulatória.",
    status: "Emergência imediata",
    icon: HeartPulse,
  },
  {
    title: "Vômito repetido, com sangue ou espuma",
    description:
      "Episódios seguidos podem indicar intoxicação, obstrução, torção gástrica ou outra urgência que precisa de avaliação rápida.",
    status: "Atendimento urgente",
    icon: Skull,
  },
  {
    title: "Incapacidade de se levantar ou andar",
    description:
      "Queda repentina, arrasto das patas, desequilíbrio ou imobilidade podem ser sinais de dor intensa, fratura, crise neurológica ou trauma.",
    status: "Atendimento urgente",
    icon: PersonStanding,
  },
  {
    title: "Diarreia intensa ou com sangue",
    description:
      "Principalmente quando acompanhada de vômito, pode causar desidratação rápida e agravamento importante, em especial em filhotes e idosos.",
    status: "Atendimento urgente",
    icon: Droplets,
  },
  {
    title: "Dificuldade para urinar",
    description:
      "Fazer força para urinar, chorar, sair pouca urina ou não conseguir urinar pode indicar obstrução urinária, especialmente grave em gatos machos.",
    status: "Emergência imediata",
    icon: Bone,
  },
  {
    title: "Convulsão, desmaio ou queda",
    description:
      "Tremores, perda de consciência, rigidez, colapso ou desmaio exigem avaliação rápida, mesmo que o pet pareça melhorar depois.",
    status: "Emergência imediata",
    icon: AlertTriangle,
  },
  {
    title: "Intoxicação ou corpo estranho",
    description:
      "Se o pet ingeriu remédio, chocolate, planta tóxica, produto químico ou objeto estranho, procure ajuda sem esperar os sintomas piorarem.",
    status: "Emergência imediata",
    icon: Pill,
  },
];

export function SpecialtiesSection() {
  return (
    <section
      id="especialidades"
      className="surface-grid relative overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(167,203,229,0.18),transparent_24%),linear-gradient(135deg,#0D2C4D_0%,#12395b_54%,#081D33_100%)] py-20 text-white"
    >
      <div className="floating-orb absolute -left-10 top-12 h-40 w-40 rounded-full bg-[#1E4D7A]/30 blur-3xl" />
      <div className="floating-orb-delayed absolute right-0 top-0 h-52 w-52 rounded-full bg-[#D4AF37]/10 blur-3xl" />
      <div className="section-shell">
        <div className="max-w-3xl">
          <FadeIn>
            <span className="text-sm font-bold uppercase tracking-[0.28em] text-[#D4AF37]">
              Atenção, tutor
            </span>
          </FadeIn>
          <FadeIn delay={0.08}>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
              Seu pet está bem agora?
            </h2>
          </FadeIn>
          <FadeIn delay={0.16}>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-100/80">
              Alguns sinais podem parecer pequenos, mas indicam emergência. Se
              você reconhecer qualquer um desses, não espere até amanhã.
            </p>
          </FadeIn>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {emergencyCards.map((card, index) => {
            const Icon = card.icon;

            return (
              <HoverCard key={card.title} delay={0.04 * index}>
                <article className="card-depth group flex h-full flex-col rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(13,44,77,0.9)_0%,rgba(8,29,51,0.94)_100%)] p-6 shadow-[0_24px_60px_rgba(0,0,0,0.2)] backdrop-blur-xl">
                  <div className="inline-flex w-fit rounded-2xl bg-white/8 p-4 text-[#D4AF37] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="mt-5 text-2xl font-bold leading-tight text-white">
                    {card.title}
                  </h3>
                  <p className="mt-3 flex-1 text-base leading-7 text-slate-100/75">
                    {card.description}
                  </p>
                  <div className="mt-6">
                    <span className="inline-flex items-center rounded-full bg-[linear-gradient(180deg,rgba(212,175,55,0.22)_0%,rgba(212,175,55,0.12)_100%)] px-4 py-2 text-sm font-bold text-[#F2E9D0] ring-1 ring-[#D4AF37]/25">
                      {card.status}
                    </span>
                  </div>
                </article>
              </HoverCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
