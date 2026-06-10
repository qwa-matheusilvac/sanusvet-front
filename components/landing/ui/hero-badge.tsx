type HeroBadgeProps = {
  text: string;
};

export function HeroBadge({ text }: HeroBadgeProps) {
  return (
    <div className="card-depth rounded-full border border-white/15 bg-white/10 px-4 py-3 text-center text-sm font-medium text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur">
      {text}
    </div>
  );
}
