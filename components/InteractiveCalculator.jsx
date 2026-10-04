"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "./Container";
import EnquireButton from "./EnquireButton";
import ProductVisual from "./ProductVisual";
import { Reveal, TextReveal, CountUp } from "./motion";
import { getProduct } from "@/data/products";

const MIN = 2;
const MAX = 60;

// Daily litres → recommended system
const pick = (l) =>
  l <= 6 ? "clearflow-jug" : l <= 12 ? "countertop-mini" : l <= 30 ? "hydropure-ro-uv" : "aquastand-floor";
const fitFor = (l) => (l <= 6 ? "1–2 people" : l <= 12 ? "Small family" : l <= 30 ? "Family home" : "Office / team");

export default function InteractiveCalculator() {
  const [litres, setLitres] = useState(16);

  const product = getProduct(pick(litres));
  const bottles = Math.round((litres * 365) / 1.5);
  const fill = ((litres - MIN) / (MAX - MIN)) * 100;

  return (
    <section id="calculator" className="pb-16 sm:pb-24">
      <Container>
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <TextReveal
              lines={["Find the right system", "in seconds."]}
              className="text-[32px] font-semibold leading-[1.1] tracking-[-0.02em] text-ink sm:text-5xl"
            />
            <Reveal delay={250}>
              <p className="mt-6 max-w-md text-sm leading-relaxed text-muted sm:text-base">
                Tell us roughly how much water you use a day and we&apos;ll suggest a system that fits — then confirm it
                with a free on-site water test.
              </p>
            </Reveal>
            <Reveal delay={400}>
              <EnquireButton
                product={product.name}
                className="mt-8 inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-hover"
              >
                Book a free water test
              </EnquireButton>
            </Reveal>
          </div>

          <Reveal variant="scale" delay={200}>
            <div className="rounded-3xl border border-line bg-sky p-6 sm:p-9">
              <div className="border-b border-ink/10 pb-4 font-display text-base font-semibold text-ink">System finder</div>

              <div className="mt-5 text-sm font-medium text-muted">Your daily water use</div>
              <div className="mt-2 flex items-baseline gap-2">
                <CountUp to={litres} duration={600} className="font-display text-5xl font-semibold tracking-tight text-ink sm:text-6xl" />
                <span className="text-lg font-medium text-muted">litres / day</span>
              </div>

              <input
                type="range"
                min={MIN}
                max={MAX}
                step="1"
                value={litres}
                onChange={(e) => setLitres(Number(e.target.value))}
                className="custom-slider mt-6"
                style={{ "--fill": `${fill}%` }}
                aria-label="Daily water use in litres"
              />
              <div className="mt-2 flex justify-between text-[11px] font-medium text-muted">
                <span>Home · {MIN} L</span>
                <span>Office · {MAX} L+</span>
              </div>

              {/* Recommendation */}
              <Link
                href={`/products/${product.slug}`}
                className="group mt-6 flex items-center gap-4 rounded-2xl border border-line bg-white p-3 pr-4 transition-colors hover:border-ink/20"
              >
                <ProductVisual kind={product.kind} tone={product.tone} className="h-16 w-16 shrink-0 rounded-xl" />
                <div className="min-w-0 flex-1">
                  <div className="text-[11px] font-medium uppercase tracking-wider text-brand">Recommended · {fitFor(litres)}</div>
                  <div className="truncate font-display text-lg font-semibold text-ink">{product.name}</div>
                </div>
                <ArrowRight className="h-4 w-4 shrink-0 text-ink transition-transform group-hover:translate-x-1" strokeWidth={1.5} />
              </Link>

              <div className="mt-4 text-sm text-muted">
                That&apos;s about{" "}
                <span className="font-semibold text-ink">
                  <CountUp to={bottles} duration={600} format={(v) => Math.round(v).toLocaleString("en-US")} />
                </span>{" "}
                plastic bottles avoided every year.
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
