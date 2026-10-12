"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { useInView } from "./motion";

// What each option filters out of shower & tap water, per the SIA vs generic comparison in the company profile.
const sources = {
  "Tap water": { badge: "Unfiltered", levels: [0, 0, 0, 0] },
  Generic: { badge: "Chlorine only", levels: [100, 0, 0, 0] },
  SIA: { badge: "5 layers", levels: [100, 100, 100, 100] },
};
const labels = ["Chlorine", "Hardness", "Metals", "Sediment"];

export default function WaterQualityWidget() {
  const [source, setSource] = useState("SIA");
  const [ref, inView] = useInView({ threshold: 0.3 });
  const { badge, levels } = sources[source];
  const tabRefs = useRef({});
  const underline = useRef(null);

  // Slide the underline to the active tab (written straight to the DOM — no re-render needed)
  useLayoutEffect(() => {
    const tab = tabRefs.current[source];
    if (!tab || !underline.current) return;
    underline.current.style.width = `${tab.offsetWidth}px`;
    underline.current.style.transform = `translateX(${tab.offsetLeft}px)`;
  }, [source]);

  return (
    <div
      ref={ref}
      className={`w-full rounded-2xl bg-white p-5 ${
        inView ? "is-visible" : ""
      }`}
    >
      <div className="mb-3 flex items-center justify-between">
        <span className="font-display text-[15px] font-semibold tracking-tight text-ink">Shower water</span>
        <span className="rounded-full bg-sky px-2 py-0.5 text-[10px] font-semibold text-brand">{badge}</span>
      </div>

      <div className="relative mb-4 flex items-center gap-4 text-[11px]">
        {Object.keys(sources).map((s) => (
          <button
            key={s}
            ref={(el) => (tabRefs.current[s] = el)}
            onClick={() => setSource(s)}
            className={`pb-1 font-semibold transition-colors duration-300 ${source === s ? "text-ink" : "text-muted hover:text-ink"}`}
          >
            {s}
          </button>
        ))}
        <span
          ref={underline}
          aria-hidden="true"
          className="absolute bottom-0 left-0 h-0.5 rounded-full bg-brand transition-[transform,width] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
        />
      </div>

      <div className="flex h-28 items-end justify-between gap-2.5">
        {levels.map((lvl, i) => (
          <div key={labels[i]} className="flex h-full flex-1 flex-col justify-end">
            <div
              className={`grow-bar w-full rounded-[6px] ${lvl ? "bg-brand" : "bg-navy/15"}`}
              style={{ height: `${Math.max(lvl, 8)}%`, "--d": `${700 + i * 120}ms` }}
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

      <div className="mt-3 border-t border-line pt-3 text-[10px] tracking-wide text-muted">What gets filtered · full bar = treated</div>
    </div>
  );
}
