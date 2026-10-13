import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import Container from "./Container";
import EnquireButton from "./EnquireButton";
import { Reveal, TextReveal, CountUp } from "./motion";

// OEM offer — what Hydro Hub manufactures for other brands (all facts from the company brief).

const offer = [
  "Product concept development & custom design",
  "In-house R&D led by a dedicated Dr.",
  "Prototype development with dedicated engineers",
  "Injection moulding, CNC & VMC, ultrasonic welding on 5 assembly lines",
  "Quality inspection & private-label manufacturing support",
];

export default function OemSection() {
  return (
    <section id="oem" className="scroll-mt-28 pb-16 sm:pb-24">
      <Container>
        {/* Intro */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Reveal>
              <span className="text-sm font-medium text-brand">OEM &amp; ODM manufacturing</span>
            </Reveal>
            <TextReveal
              lines={["Your brand,", "built in *our* factory"]}
              className="mt-2 text-[32px] font-semibold leading-[1.1] tracking-[-0.02em] text-ink sm:text-5xl"
            />
          </div>
          <Reveal delay={200}>
            <Link
              href="/#process"
              className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-line bg-white px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-frost"
            >
              How we work <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
            </Link>
          </Reveal>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-12 lg:gap-5">
          {/* What we offer */}
          <Reveal variant="left" className="lg:col-span-6">
            <div className="flex h-full flex-col rounded-2xl border border-line bg-white p-6 sm:p-10">
              <div>
                <span className="inline-block bg-brand px-3 py-1.5 font-display text-xs font-semibold uppercase tracking-[0.14em] text-white">
                  What we offer
                </span>
              </div>
              <h3 className="mt-6 text-2xl font-semibold leading-tight tracking-tight text-ink sm:text-[32px]">
                R&amp;D, design and manufacturing of water solutions, for your brand
              </h3>
              <ul className="mt-6 space-y-3">
                {offer.map((s, i) => (
                  <Reveal as="li" key={s} delay={150 + i * 90} className="flex items-center gap-3 text-sm text-ink sm:text-base">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sky text-brand">
                      <Check className="h-3.5 w-3.5" strokeWidth={2} />
                    </span>
                    {s}
                  </Reveal>
                ))}
              </ul>
              <Reveal delay={650} className="mt-6 font-display text-sm font-semibold text-brand sm:text-base">
                Custom design <span className="text-cyan">|</span> Reasonable price <span className="text-cyan">|</span> Built at scale
              </Reveal>
              <div className="mt-auto flex flex-col gap-3 pt-8 sm:flex-row">
                <EnquireButton
                  interest="Bulk / OEM"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-hover"
                >
                  Start an OEM project
                </EnquireButton>
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border border-line px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-frost"
                >
                  See what we make <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
                </Link>
              </div>
            </div>
          </Reveal>

          {/* Proof */}
          <Reveal variant="right" delay={150} className="lg:col-span-6">
            <div className="group relative flex h-full min-h-[420px] flex-col justify-end overflow-hidden rounded-2xl p-6 sm:p-8">
              <Image
                src="/images/photos/packaging.webp"
                alt="Hydro Hub filter packaging"
                fill
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover object-[40%_center] transition-transform duration-[1.5s] ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand via-brand/80 via-45% to-transparent" />
              <span className="relative w-fit rounded-full bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-brand">Trusted by</span>
              <p className="relative mt-3 max-w-sm text-2xl font-semibold leading-snug text-white drop-shadow-[0_2px_12px_rgba(17,20,58,0.6)] sm:text-3xl">
                Eureka Forbes · Aquaguard
              </p>
              <div className="relative mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-white/95 p-4">
                  <div className="whitespace-nowrap font-display text-xl font-semibold tracking-tight text-ink sm:text-2xl">
                    <CountUp to={1000000} duration={1800} group />
                  </div>
                  <div className="mt-0.5 text-xs text-muted">production capacity</div>
                </div>
                <div className="rounded-xl bg-white/95 p-4">
                  <div className="whitespace-nowrap font-display text-xl font-semibold tracking-tight text-ink sm:text-2xl">
                    <CountUp to={16500} duration={1600} group />
                  </div>
                  <div className="mt-0.5 text-xs text-muted">sq ft in-house factory</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
