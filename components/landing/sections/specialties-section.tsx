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
    title: "Respiracao acelerada ou com esforco",
    description:
      "Boca aberta, flancos muito expandidos, lingua arroxeada ou esforco para respirar podem indicar falta de oxigenio, problema cardiaco ou crise respiratoria.",
    status: "Emergencia imediata",
    icon: Wind,
  },
  {
    title: "Gengivas brancas, cinzas ou azuladas",
    description:
      "Coloracao palida, acinzentada ou azulada pode ser sinal de choque, anemia grave ou alteracao circulatoria.",
    status: "Emergencia imediata",
    icon: HeartPulse,
  },
  {
    title: "Vomito repetido, com sangue ou espuma",
    description:
      "Episodios seguidos podem indicar intoxicacao, obstrucao, torcao gastrica ou outra urgencia que precisa de avaliacao rapida.",
    status: "Atendimento urgente",
    icon: Skull,
  },
  {
    title: "Incapacidade de se levantar ou andar",
    description:
      "Queda repentina, arrasto das patas, desequilibrio ou imobilidade podem ser sinais de dor intensa, fratura, crise neurologica ou trauma.",
    status: "Atendimento urgente",
    icon: PersonStanding,
  },
  {
    title: "Diarreia intensa ou com sangue",
    description:
      "Principalmente quando acompanhada de vomito, pode causar desidratacao rapida e agravamento importante, em especial em filhotes e idosos.",
    status: "Atendimento urgente",
    icon: Droplets,
  },
  {
    title: "Dificuldade para urinar",
    description:
      "Fazer forca para urinar, chorar, sair pouca urina ou nao conseguir urinar pode indicar obstrucao urinaria, especialmente grave em gatos machos.",
    status: "Emergencia imediata",
    icon: Bone,
  },
  {
    title: "Convulsao, desmaio ou queda",
    description:
      "Tremores, perda de consciencia, rigidez, colapso ou desmaio exigem avaliacao rapida, mesmo que o pet pareca melhorar depois.",
    status: "Emergencia imediata",
    icon: AlertTriangle,
  },
  {
    title: "Intoxicacao ou corpo estranho",
    description:
      "Se o pet ingeriu remedio, chocolate, planta toxica, produto quimico ou objeto estranho, procure ajuda sem esperar os sintomas piorarem.",
    status: "Emergencia imediata",
    icon: Pill,
  },
];

export function SpecialtiesSection() {
  return (
    <section
      id="especialidades"
      className="surface-grid relative overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(20,72,120,0.4),transparent_24%),linear-gradient(135deg,#071727_0%,#08203a_54%,#04101d_100%)] py-20 text-white"
    >
      <div className="floating-orb absolute -left-10 top-12 h-40 w-40 rounded-full bg-[#1E4D7A]/30 blur-3xl" />
      <div className="floating-orb-delayed absolute right-0 top-0 h-52 w-52 rounded-full bg-[#ff7a59]/10 blur-3xl" />
      <div className="section-shell">
        <div className="max-w-3xl">
          <FadeIn>
            <span className="text-sm font-bold uppercase tracking-[0.28em] text-[#ff8d6d]">
              Atencao, tutor
            </span>
          </FadeIn>
          <FadeIn delay={0.08}>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
              Seu pet esta bem agora?
            </h2>
          </FadeIn>
          <FadeIn delay={0.16}>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-100/80">
              Alguns sinais podem parecer pequenos, mas indicam emergencia. Se
              voce reconhecer qualquer um desses, nao espere ate amanha.
            </p>
          </FadeIn>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {emergencyCards.map((card, index) => {
            const Icon = card.icon;

            return (
              <HoverCard key={card.title} delay={0.04 * index}>
                <article className="card-depth group flex h-full flex-col rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(10,36,63,0.92)_0%,rgba(8,28,49,0.94)_100%)] p-6 shadow-[0_24px_60px_rgba(0,0,0,0.2)] backdrop-blur-xl">
                  <div className="inline-flex w-fit rounded-2xl bg-white/8 p-4 text-[#ff8d6d] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="mt-5 text-2xl font-bold leading-tight text-white">
                    {card.title}
                  </h3>
                  <p className="mt-3 flex-1 text-base leading-7 text-slate-100/75">
                    {card.description}
                  </p>
                  <div className="mt-6">
                    <span className="inline-flex items-center rounded-full bg-[linear-gradient(180deg,rgba(255,122,89,0.22)_0%,rgba(255,122,89,0.12)_100%)] px-4 py-2 text-sm font-bold text-[#ff8d6d] ring-1 ring-[#ff8d6d]/20">
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
