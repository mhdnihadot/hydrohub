"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "./Container";
import EnquireButton from "./EnquireButton";
import { Reveal, TextReveal } from "./motion";
import { getProduct } from "@/data/products";

// Hard-water problem → the products that fix it (from the company profile)
const concerns = [
  { label: "Hair fall", fix: ["sia-shower-tap-filter", "sia-hard-water-shampoo"] },
  { label: "Frizzy, dull hair", fix: ["sia-hard-water-shampoo", "sia-boar-bristle-brush"] },
  { label: "Dry, itchy skin", fix: ["sia-shower-tap-filter", "sia-hard-water-shower-gel"] },
  { label: "Chlorine smell", fix: ["sia-shower-tap-filter"] },
  { label: "Fabric losing softness", fix: ["washing-machine-filter", "hard-water-liquid-detergent"] },
  { label: "Hard water in every tap", fix: ["point-of-entry-filter"] },
];

export default function InteractiveCalculator() {
  const [picked, setPicked] = useState(["Hair fall"]);

  const toggle = (label) => setPicked((p) => (p.includes(label) ? p.filter((x) => x !== label) : [...p, label]));
  const routine = [...new Set(concerns.filter((c) => picked.includes(c.label)).flatMap((c) => c.fix))].map(getProduct);

  return (
    <section id="routine" className="pb-16 sm:pb-24">
      <Container>
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <TextReveal
              lines={["Find your", "hard water fix."]}
              className="text-[32px] font-semibold leading-[1.1] tracking-[-0.02em] text-ink sm:text-5xl"
            />
            <Reveal delay={250}>
              <p className="mt-6 max-w-md text-sm leading-relaxed text-muted sm:text-base">
                Hair fall from hard water? Pair a shower filter with a hard water shampoo. Fabrics losing their shine? A
                washing machine filter and a hard water detergent. Pick what bothers you and we&apos;ll build your routine.
              </p>
            </Reveal>
            <Reveal delay={400}>
              <EnquireButton
                product={routine[0]?.name}
                className="mt-8 inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-hover"
              >
                Ask a water expert
              </EnquireButton>
            </Reveal>
          </div>

          <Reveal variant="scale" delay={200}>
            <div className="rounded-3xl border border-line bg-sky p-6 sm:p-9">
              <div className="border-b border-ink/10 pb-4 font-display text-base font-semibold text-ink">Routine finder</div>

              <div className="mt-5 text-sm font-medium text-muted">What does hard water do to you?</div>
              <div className="mt-3 flex flex-wrap gap-2">
                {concerns.map(({ label }) => {
                  const on = picked.includes(label);
                  return (
                    <button
                      key={label}
                      onClick={() => toggle(label)}
                      aria-pressed={on}
                      className={`rounded-full border px-3.5 py-2 text-xs font-medium transition-colors duration-300 ${
                        on ? "border-brand bg-brand text-white" : "border-line bg-white text-ink hover:border-ink/25"
                      }`}
                    >
                      {label}
                    </button>
                  );
                })}
              </div>

              <div className="mt-6 text-[11px] font-medium uppercase tracking-wider text-brand">
                Your routine · {routine.length} {routine.length === 1 ? "product" : "products"}
              </div>
              <ul className="mt-3 space-y-2">
                {routine.length === 0 && (
                  <li className="rounded-2xl border border-dashed border-ink/15 p-4 text-sm text-muted">Pick at least one concern above.</li>
                )}
                {routine.map((p) => (
                  <li key={p.slug}>
                    <Link
                      href={`/products/${p.slug}`}
                      className="group flex items-center gap-4 rounded-2xl border border-line bg-white p-3 pr-4 transition-colors hover:border-ink/20"
                    >
                      <span className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl">
                        <Image src={p.image || p.gallery[0]} alt="" fill sizes="56px" className="object-cover" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block truncate font-display text-base font-semibold text-ink">{p.name}</span>
                        <span className="text-xs text-muted">{p.badge || "Available now"}</span>
                      </span>
                      <ArrowRight className="h-4 w-4 shrink-0 text-ink transition-transform group-hover:translate-x-1" strokeWidth={1.5} />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
