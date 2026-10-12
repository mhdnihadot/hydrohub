"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "./Container";
import EnquireButton from "./EnquireButton";
import { Reveal, TextReveal, CountUp, useInView } from "./motion";

const rowA = [
  { t: "Hair fall", c: "bg-sky text-navy" },
  { t: "Frizzy hair", c: "bg-navy text-white" },
  { t: "Dry skin", c: "bg-frost text-muted" },
  { t: "Flaky scalp", c: "bg-sky text-navy" },
];
const rowB = [
  { t: "Chlorine smell", c: "bg-brand text-white" },
  { t: "Heavy metals", c: "bg-frost text-muted" },
  { t: "Dull fabrics", c: "bg-sky text-navy" },
  { t: "Sediment", c: "bg-frost text-muted" },
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

function CartridgeCard() {
  const [ref, inView] = useInView({ threshold: 0.4 });

  return (
    <div ref={ref} className={`rounded-xl bg-white p-5 ${inView ? "is-visible" : ""}`}>
      <span className="text-xs font-medium text-muted">One cartridge lasts</span>
      <div className="mt-1 flex flex-wrap items-baseline gap-x-2">
        <CountUp to={25000} duration={1800} format={(v) => `${Math.round(v).toLocaleString("en-IN")} L`} className="font-display text-3xl font-semibold tracking-tight text-ink" />
        <span className="text-[11px] text-muted">or 6 months</span>
      </div>

      <div className="mt-4 flex h-2 w-full gap-1 overflow-hidden rounded-full">
        {[0, 1, 2, 3, 4].map((i) => (
          <div key={i} className="grow-x h-full flex-1 bg-cyan" style={{ "--d": `${200 + i * 150}ms` }} />
        ))}
      </div>

      <div className="mt-3 flex justify-between text-[10px] text-muted">
        <span className="text-ink">5 filter layers</span>
        <span>NSF &amp; WQA certified media</span>
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
            lines={["Hard water, handled", "from head to toe"]}
            className="max-w-3xl text-[32px] font-semibold leading-[1.1] tracking-[-0.02em] text-ink sm:text-5xl"
          />
          <Reveal delay={300}>
            <EnquireButton className="inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full border border-line bg-white px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-frost">
              Enquire now
            </EnquireButton>
          </Reveal>
        </div>

        {/* Mobile/tablet: grid. Desktop: hover-expand row (see .expand-row in globals.css). */}
        <div className="expand-row mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:h-[440px] lg:gap-5">
          {/* Card 1 — use cases */}
          <Reveal variant="scale" delay={0} className="h-full">
            <div className="flex h-full items-center overflow-hidden rounded-2xl bg-sky p-5 sm:p-6">
              <div className="w-full rounded-xl border border-line bg-white p-5">
                <h3 className="text-lg font-semibold tracking-tight text-ink">What hard water does</h3>
                <div className="mt-4">
                  <Tags items={[...rowA, ...rowB]} />
                </div>
                <p className="mt-4 text-xs leading-relaxed text-muted">
                  Shampoo and skincare can only do so much when the water itself is the problem. Our filter treats the water first.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Card 2 — monitoring */}
          <Reveal variant="scale" delay={150} className="h-full">
            <div className="flex h-full flex-col justify-between gap-8 overflow-hidden rounded-2xl border border-line bg-ice p-5 sm:p-6">
              <div>
                <h3 className="text-3xl font-semibold leading-[1.1] tracking-tight text-ink">
                  Long
                  <br />
                  lasting.
                </h3>
                <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">
                  Brass connectors, a 2.5-year warranty and replacement cartridges customised for your region.
                </p>
              </div>
              <div>
                <CartridgeCard />
              </div>
            </div>
          </Reveal>

          {/* Card 3 — photo (bigger at rest) */}
          <Reveal variant="scale" delay={300} className="h-full md:col-span-2 lg:col-span-1" style={{ "--grow": 1.45 }}>
            <div className="group relative flex h-full min-h-[380px] flex-col justify-between overflow-hidden rounded-2xl p-6 lg:min-h-0">
              <Image
                src="/images/bento_phone.jpg"
                alt="Relaxed at home after a better shower"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 640px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/40 via-transparent to-navy-deep/80" />
              <h3 className="relative text-2xl font-semibold tracking-tight text-white sm:text-3xl">Fits in minutes</h3>
              <div className="relative">
                <p className="max-w-sm text-base font-medium leading-snug text-white sm:text-lg">
                  Fit this small wonder to your existing shower or tap with ease. Standard ½″ connectors fit most modern bath fittings.
                </p>
                <Link href="/products?category=shower-tap" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-white hover:text-aqua">
                  See the filter <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
