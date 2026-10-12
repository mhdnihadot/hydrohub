import { Layers, Sparkles } from "lucide-react";

// Facts from the company profile, shown as a light glass card beside the hero copy
export default function HeroFactCard() {
  return (
    <div className="w-full rounded-2xl border border-white/20 bg-white/10 p-5 text-white backdrop-blur-md">
      <p className="font-display text-[44px] font-semibold leading-none tracking-[-0.03em]">
        97<span className="text-aqua">%</span>
      </p>
      <p className="mt-2 text-[13px] leading-snug text-white/85">
        of the water you use at home is for bathing, washing and cleaning.
      </p>

      {/* 3% drinking & cooking vs 97% everything else */}
      <div className="mt-4 flex h-2 overflow-hidden rounded-full bg-white/15" aria-hidden="true">
        <span className="w-[3%] bg-white/40" />
        <span className="flex-1 bg-aqua" />
      </div>
      <div className="mt-1.5 flex justify-between text-[10px] text-white/65">
        <span>3% drinking &amp; cooking</span>
        <span>97% bathing &amp; washing</span>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2 border-t border-white/15 pt-4">
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/10">
            <Layers className="h-4 w-4 text-aqua" strokeWidth={1.8} aria-hidden="true" />
          </span>
          <span className="text-[11px] font-medium leading-tight">5 filter layers</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/10">
            <Sparkles className="h-4 w-4 text-aqua" strokeWidth={1.8} aria-hidden="true" />
          </span>
          <span className="text-[11px] font-medium leading-tight">Dual Hardness Technology</span>
        </div>
      </div>
    </div>
  );
}
