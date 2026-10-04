import Link from "next/link";
import { ArrowRight, Waves, Droplets, Hexagon, Orbit, ShieldCheck, Layers, Triangle, Sparkle, CalendarClock, Filter } from "lucide-react";
import Container from "./Container";
import { Reveal, TextReveal } from "./motion";

const partners = [
  { name: "Solv.", Icon: Triangle },
  { name: "GreenFlag", Icon: Orbit },
  { name: "Aqualine", Icon: Waves },
  { name: "Meetem", Icon: Layers },
  { name: "Continiom", Icon: Hexagon },
  { name: "PureCert", Icon: ShieldCheck },
  { name: "trustvil", Icon: Sparkle },
  { name: "Rainfold", Icon: Droplets },
];

export default function PartnerTicker() {
  return (
    <section id="service" className="py-16 sm:py-24">
      <Container>
        {/* Trust badge */}
        <Reveal className="flex justify-center">
          <div className="rounded-full border border-line bg-frost px-4 py-2 text-center text-xs font-medium text-ink/80 sm:px-5 sm:text-sm">
            Trusted by 5,000+ homes & 300 offices
          </div>
        </Reveal>

        {/* Logo marquee */}
        <Reveal delay={150} className="mask-fade-x relative mt-8 overflow-hidden py-3">
          <div className="animate-marquee items-center gap-12 text-navy sm:gap-16">
            {[...partners, ...partners].map(({ name, Icon }, i) => (
              <div key={i} className="flex items-center gap-2 whitespace-nowrap opacity-80 transition-opacity hover:opacity-100">
                <Icon className="h-6 w-6" strokeWidth={1.5} />
                <span className="text-lg font-bold tracking-tight sm:text-xl">{name}</span>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Sub-hero */}
        <div className="mt-16 grid grid-cols-1 items-stretch gap-10 sm:mt-24 lg:grid-cols-12 lg:gap-8">
          <div className="flex flex-col justify-between lg:col-span-5">
            <div>
            <TextReveal
              lines={["Built for your next", "gen of *hydration*"]}
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
                <span className="font-semibold text-ink">Clean water, made simple.</span> Purification technology
                designed around how you actually live and work.
              </p>
              <p>
                <span className="font-semibold text-ink">Lab-grade purity,</span> with none of the bottled-water waste.
                Every HydroHub system is installed, tested and serviced by our own certified technicians.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-7 lg:gap-5">
            {/* Light water card */}
            <Reveal delay={150} variant="scale" className="h-full">
              <div className="flex h-full min-h-[260px] flex-col justify-between rounded-2xl bg-sky p-6 transition-shadow sm:p-7">
                <div>
                  <h3 className="text-2xl font-semibold leading-tight tracking-tight text-ink">
                    Pure water at any scale — home or office
                  </h3>
                  <ul className="mt-5 space-y-2 text-xs leading-relaxed text-muted">
                    <li className="flex gap-2">
                      <ArrowRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand" strokeWidth={1.5} />
                      RO + UV purification, tested every visit
                    </li>
                    <li className="flex gap-2">
                      <ArrowRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand" strokeWidth={1.5} />
                      Filter changes booked automatically
                    </li>
                  </ul>
                </div>
                <Link
                  href="/products?category=purifiers"
                  className="mt-6 inline-flex w-fit items-center gap-2 whitespace-nowrap rounded-full bg-brand px-5 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-brand-hover"
                >
                  View purifiers <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
                </Link>
              </div>
            </Reveal>

            {/* Navy card */}
            <Reveal delay={300} variant="scale" className="h-full">
              <div className="relative flex h-full min-h-[300px] flex-col justify-between overflow-hidden rounded-2xl bg-navy p-6 text-white sm:min-h-[340px] sm:p-7">
                <Waves className="pointer-events-none absolute -right-6 -top-6 h-40 w-40 text-white/[0.05]" strokeWidth={1} />

                <div className="relative space-y-3">
                  <div className="w-fit rounded-2xl bg-white/10 p-3">
                    <span className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-white px-2.5 py-1 text-[10px] font-semibold text-navy">
                      <CalendarClock className="h-3 w-3" strokeWidth={1.5} /> Refill delivery
                    </span>
                    <div className="text-sm font-semibold">Scheduled for you</div>
                    <div className="text-[11px] text-white/60">2 × 19 L bottles</div>
                  </div>
                  <div className="ml-auto w-fit rounded-2xl border border-white/10 bg-navy-soft p-3">
                    <span className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-aqua px-2.5 py-1 text-[10px] font-semibold text-navy">
                      <Filter className="h-3 w-3" strokeWidth={1.5} /> Filter change
                    </span>
                    <div className="text-sm font-semibold">Booked automatically</div>
                    <div className="mt-2 h-1.5 w-28 overflow-hidden rounded-full bg-white/15">
                      <div className="h-full w-[78%] rounded-full bg-aqua" />
                    </div>
                  </div>
                </div>

                <h3 className="relative mt-6 text-2xl font-semibold leading-tight tracking-tight text-white">
                  Subscribe once — never run out of fresh water
                </h3>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
