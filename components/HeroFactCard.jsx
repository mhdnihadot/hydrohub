// Facts from the company profile, shown as a light glass card beside the hero copy
export default function HeroFactCard() {
  return (
    <div className="w-full rounded-2xl border border-white/20 bg-brand/90 p-5 text-white shadow-[0_20px_50px_-20px_rgba(17,20,58,0.6)] sm:p-6">
      <p className="font-display text-[44px] font-semibold leading-none tracking-[-0.03em]">
        97<span className="text-aqua">%</span>
      </p>
      <p className="mt-2 text-[13px] leading-snug text-white/85">
        of the water you use at home is for bathing, washing and cleaning.
      </p>

      {/* 3% drinking & cooking vs 97% everything else */}
      <div className="mt-5 flex h-2 overflow-hidden rounded-full bg-white/15" aria-hidden="true">
        <span className="w-[3%] bg-white/40" />
        <span className="flex-1 bg-aqua" />
      </div>
      <div className="mt-2 flex justify-between text-[11px] text-white/70">
        <span>3% drinking &amp; cooking</span>
        <span>97% bathing &amp; washing</span>
      </div>
    </div>
  );
}
