type FeatureItemProps = {
  title: string;
  text: string;
};

export function FeatureItem({ title, text }: FeatureItemProps) {
  return (
    <div className="card-depth rounded-[1.5rem] border border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)] p-5 shadow-[0_15px_35px_rgba(13,44,77,0.05)]">
      <p className="text-base font-bold text-[#0D2C4D]">{title}</p>
      <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
    </div>
  );
}
