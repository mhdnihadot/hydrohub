import Link from "next/link";
import { ArrowRight, Waves } from "lucide-react";
import Container from "./Container";
import { Reveal, TextReveal } from "./motion";

const values = ["Affordable", "Sustainable", "Eco-friendly"];

export default function PartnerTicker() {
  return (
    <section id="service" className="py-16 sm:py-24">
      <Container>
        {/* Sub-hero */}
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="flex flex-col justify-between lg:col-span-5">
            <div>
            <TextReveal
              lines={["97% of your water", "isn't for *drinking*"]}
              className="text-[34px] font-semibold leading-[1.08] tracking-[-0.02em] text-ink sm:text-5xl lg:text-[52px]"
            />

            <Reveal delay={300} className="mt-7 flex flex-wrap items-center gap-3">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-brand px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-hover"
              >
                Explore products <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center rounded-full border border-line bg-white px-5 py-3 text-sm font-semibold text-ink transition-colors hover:bg-frost"
              >
                Our story
              </Link>
            </Reveal>
            </div>

            <Reveal delay={400} className="mt-10 max-w-md space-y-4 text-sm leading-relaxed text-muted sm:text-[15px]">
              <p>
                <span className="font-semibold text-ink">Gone are the days of the backyard well.</span> Today we
                don&apos;t know where the water in our taps and showers comes from. It often carries hard water minerals,
                chlorine, heavy metals and hundreds of other contaminants.
              </p>
              <p>
                <span className="font-semibold text-ink">It shows up in your daily chores</span>: washing, bathing and
                cleaning, in ways you don&apos;t even notice.
              </p>
            </Reveal>
          </div>

          {/* Mission card — fills the right side */}
          <Reveal delay={200} variant="scale" className="h-full lg:col-span-7">
            <div className="relative flex h-full min-h-[340px] flex-col justify-between gap-10 overflow-hidden rounded-2xl bg-brand p-6 text-white sm:p-10">
              <Waves className="pointer-events-none absolute -right-8 -top-8 h-56 w-56 text-white/[0.05]" strokeWidth={1} />

              <div className="relative">
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-aqua">Our mission</span>
                <h3 className="mt-4 max-w-lg text-[28px] font-semibold leading-[1.15] tracking-tight sm:text-4xl">
                  Good water for good life, affordable &amp; accessible to everyone
                </h3>
              </div>

              {/* Vision + values, balancing the mission above */}
              <div className="relative grid grid-cols-1 gap-6 border-t border-white/15 pt-6 sm:grid-cols-2 sm:items-end">
                <Reveal delay={350}>
                  <span className="text-xs font-semibold uppercase tracking-[0.14em] text-aqua">Our vision</span>
                  <p className="mt-2 text-base leading-snug text-white/90 sm:text-lg">
                    A trusted Indian water technology and manufacturing company, recognised for innovation, engineering and
                    long-term OEM/ODM partnerships.
                  </p>
                </Reveal>
                <Reveal delay={450} className="flex flex-wrap gap-2 sm:justify-end">
                  {values.map((v) => (
                    <span key={v} className="rounded-full border border-white/20 px-3.5 py-1.5 text-xs font-medium text-white">
                      {v}
                    </span>
                  ))}
                </Reveal>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
