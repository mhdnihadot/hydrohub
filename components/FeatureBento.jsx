"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Container from "./Container";
import EnquireButton from "./EnquireButton";
import { Reveal, TextReveal, CountUp, useInView } from "./motion";

const rowA = [
  { t: "Drinking", c: "bg-sky text-navy" },
  { t: "Coffee & tea", c: "bg-navy text-white" },
  { t: "Cooking", c: "bg-frost text-muted" },
  { t: "Baby formula", c: "bg-sky text-navy" },
];
const rowB = [
  { t: "Office pantry", c: "bg-brand text-white" },
  { t: "Gyms", c: "bg-frost text-muted" },
  { t: "Restaurants", c: "bg-sky text-navy" },
  { t: "Schools", c: "bg-frost text-muted" },
];

function Tags({ items }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((tag) => (
        <span key={tag.t} className={`whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-medium ${tag.c}`}>
          {tag.t}
        </span>
      ))}
    </div>
  );
}

function FilterLifeCard() {
  const [ref, inView] = useInView({ threshold: 0.4 });
  const legend = [
    { label: "Remaining", pct: 82, c: "bg-water" },
    { label: "Used", pct: 18, c: "bg-navy" },
  ];

  return (
    <div ref={ref} className={`rounded-xl bg-white p-5 ${inView ? "is-visible" : ""}`}>
      <span className="text-xs font-medium text-muted">Filter life</span>
      <div className="mt-1 flex flex-wrap items-baseline gap-x-2">
        <CountUp to={82} duration={1600} format={(v) => `${v.toFixed(0)}%`} className="font-display text-3xl font-semibold tracking-tight text-ink" />
        <span className="text-[11px] text-muted">
          <CountUp to={1248} duration={1800} format={(v) => Math.round(v).toLocaleString("en-US")} /> L purified
        </span>
      </div>

      <div className="mt-4 flex h-2 w-full overflow-hidden rounded-full bg-line">
        <div className="grow-x h-full w-[82%] bg-water" style={{ "--d": "200ms" }} />
        <div className="grow-x h-full w-[18%] bg-navy" style={{ "--d": "600ms" }} />
      </div>

      <div className="mt-3 flex gap-4 text-[10px] text-muted">
        {legend.map((l) => (
          <div key={l.label} className="flex items-center gap-1.5">
            <span className={`h-1.5 w-1.5 rounded-full ${l.c}`} />
            <span className="text-ink">{l.label}</span> {l.pct}%
          </div>
        ))}
      </div>
    </div>
  );
}

export default function FeatureBento() {
  return (
    <section id="benefits" className="pb-16 sm:pb-24">
      <Container>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <TextReveal
            lines={["Access the pure water you need, fast"]}
            className="max-w-3xl text-[32px] font-semibold leading-[1.1] tracking-[-0.02em] text-ink sm:text-5xl"
          />
          <Reveal delay={300}>
            <EnquireButton className="inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full border border-line bg-white px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-frost">
              Book a visit
            </EnquireButton>
          </Reveal>
        </div>

        {/* Mobile/tablet: grid. Desktop: hover-expand row (see .expand-row in globals.css). */}
        <div className="expand-row mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:h-[440px] lg:gap-5">
          {/* Card 1 — use cases */}
          <Reveal variant="scale" delay={0} className="h-full">
            <div className="flex h-full items-center overflow-hidden rounded-2xl bg-sky p-5 sm:p-6">
              <div className="w-full rounded-xl border border-line bg-white p-5">
                <h3 className="text-lg font-semibold tracking-tight text-ink">Pure water for every use</h3>
                <div className="mt-4">
                  <Tags items={[...rowA, ...rowB]} />
                </div>
                <p className="mt-4 text-xs leading-relaxed text-muted">
                  One system covers drinking, cooking and the coffee machine — at home or across the office.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Card 2 — monitoring */}
          <Reveal variant="scale" delay={150} className="h-full">
            <div className="flex h-full flex-col justify-between gap-8 overflow-hidden rounded-2xl border border-line bg-ice p-5 sm:p-6">
              <div>
                <h3 className="text-3xl font-semibold leading-[1.1] tracking-tight text-ink">
                  Smart
                  <br />
                  Monitoring.
                </h3>
                <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">
                  Your system tracks filter life and purity, and books servicing before you need it.
                </p>
              </div>
              <div>
                <FilterLifeCard />
              </div>
            </div>
          </Reveal>

          {/* Card 3 — photo (bigger at rest) */}
          <Reveal variant="scale" delay={300} className="h-full md:col-span-2 lg:col-span-1" style={{ "--grow": 1.45 }}>
            <div className="group relative flex h-full min-h-[380px] flex-col justify-between overflow-hidden rounded-2xl p-6 lg:min-h-0">
              <Image
                src="/images/bento_phone.jpg"
                alt="Customer booking a HydroHub service on her phone"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 640px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/40 via-transparent to-navy-deep/80" />
              <h3 className="relative text-2xl font-semibold tracking-tight text-white sm:text-3xl">Hassle-free install</h3>
              <div className="relative">
                <p className="max-w-sm text-base font-medium leading-snug text-white sm:text-lg">
                  Book in a minute — a certified technician installs and tests your system within 24 hours.
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-white">
                  Free water test included <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
