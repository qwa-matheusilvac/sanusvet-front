import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type InfoPillProps = {
  title: string;
  text: string;
  icon: ReactNode;
};

export function InfoPill({ title, text, icon }: InfoPillProps) {
  return (
    <div className={cn("card-depth glass-panel rounded-[1.5rem] p-5")}>
      <p className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.16em] text-[#1E4D7A]">
        <span className="rounded-full bg-[#A7CBE5]/30 p-1 text-[#0D2C4D]">
          {icon}
        </span>
        {title}
      </p>
      <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
    </div>
  );
}
