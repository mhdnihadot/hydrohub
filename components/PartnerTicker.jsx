import Link from "next/link";
import { ArrowRight, Waves, ShieldCheck, CalendarClock, Layers } from "lucide-react";
import Container from "./Container";
import { Reveal, TextReveal } from "./motion";

const facts = [
  { Icon: Layers, label: "Filtration", value: "5 layers", note: "Made for Indian water" },
  { Icon: CalendarClock, label: "Cartridge life", value: "25,000 L", note: "or 6 months · easy replacements" },
  { Icon: ShieldCheck, label: "Warranty", value: "2.5 years", note: "Brass connectors built to last" },
];

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
                cleaning, in ways you don&apos;t even notice. Our vision is to become the top brand in non-drinking
                residential water filtration.
              </p>
            </Reveal>
          </div>

          {/* Mission card — fills the right side */}
          <Reveal delay={200} variant="scale" className="h-full lg:col-span-7">
            <div className="relative flex h-full min-h-[340px] flex-col justify-between gap-10 overflow-hidden rounded-2xl bg-navy p-6 text-white sm:p-10">
              <Waves className="pointer-events-none absolute -right-8 -top-8 h-56 w-56 text-white/[0.05]" strokeWidth={1} />

              <div className="relative">
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-aqua">Our mission</span>
                <h3 className="mt-4 max-w-lg text-[28px] font-semibold leading-[1.15] tracking-tight sm:text-4xl">
                  Good water for good life, affordable &amp; accessible to everyone
                </h3>
              </div>

              <ul className="relative grid grid-cols-1 gap-3 sm:grid-cols-3">
                {facts.map(({ Icon, label, value, note }, i) => (
                  <Reveal as="li" key={label} delay={350 + i * 120} className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-2.5 py-1 text-[10px] font-semibold text-navy">
                      <Icon className="h-3 w-3" strokeWidth={1.5} /> {label}
                    </span>
                    <div className="mt-3 font-display text-lg font-semibold">{value}</div>
                    <div className="text-[11px] text-white/60">{note}</div>
                  </Reveal>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
