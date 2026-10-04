"use client";

import { useState } from "react";
import { useInView } from "./motion";

// Water-quality meter: purity score (0–100, higher is better) per test, for tap vs filtered vs HydroHub water.
const sources = {
  Tap: { purity: "72%", levels: [34, 48, 58, 26] },
  Filtered: { purity: "91%", levels: [70, 82, 74, 60] },
  HydroHub: { purity: "99.9%", levels: [98, 99, 100, 94] },
};
const labels = ["Lead", "Chlorine", "Microbes", "TDS"];

export default function WaterQualityWidget() {
  const [source, setSource] = useState("HydroHub");
  const [ref, inView] = useInView({ threshold: 0.3 });
  const { purity, levels } = sources[source];

  return (
    <div
      ref={ref}
      className={`w-full rounded-2xl bg-white p-5 ${
        inView ? "is-visible" : ""
      }`}
    >
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-display text-[15px] font-semibold tracking-tight text-ink">Water quality</span>
          <span className="rounded-full bg-sky px-2 py-0.5 text-[10px] font-semibold text-brand tabular-nums">{purity}</span>
        </div>
        <span className="text-[10px] font-medium uppercase tracking-wider text-muted">Live</span>
      </div>

      <div className="mb-4 flex items-center gap-4 text-[11px]">
        {Object.keys(sources).map((s) => (
          <button
            key={s}
            onClick={() => setSource(s)}
            className={`pb-0.5 transition-colors ${
              source === s ? "border-b-2 border-brand font-bold text-ink" : "font-medium text-muted hover:text-ink"
            }`}
          >
            {s}
          </button>
        ))}
      </div>

      <div className="flex h-28 items-end justify-between gap-2.5">
        {levels.map((lvl, i) => (
          <div key={labels[i]} className="flex h-full flex-1 flex-col justify-end">
            <div
              className={`grow-bar w-full rounded-[6px] ${lvl >= 90 ? "bg-brand" : lvl >= 60 ? "bg-water" : "bg-navy/25"}`}
              style={{ height: `${Math.max(lvl, 6)}%`, "--d": `${700 + i * 120}ms` }}
            />
          </div>
        ))}
      </div>
      <div className="mt-2 flex justify-between gap-2.5 text-center text-[10px] text-muted">
        {labels.map((l) => (
          <span key={l} className="flex-1">
            {l}
          </span>
        ))}
      </div>

      <div className="mt-3 border-t border-line pt-3 text-[10px] tracking-wide text-muted">Purity by test · higher is better</div>
    </div>
  );
}
