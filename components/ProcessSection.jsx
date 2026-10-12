import { Check, FlaskConical, PencilRuler, Factory } from "lucide-react";
import Container from "./Container";
import EnquireButton from "./EnquireButton";
import { Reveal, TextReveal, CountUp } from "./motion";

// Core of the business: every product goes R&D → Product Development → Manufacturing, all in-house.
// `withFacts` adds the factory numbers + clients row (the About page shows those separately).

const stages = [
  {
    Icon: FlaskConical,
    title: "R&D",
    text: "Every product starts in research. A dedicated Dr. leads our R&D, studying Indian water conditions and what hard water, chlorine and heavy metals do to hair, skin and fabrics.",
    points: ["Dedicated Dr. leading R&D", "Research into Indian water conditions", "NSF & WQA certified filter media", "Cartridges formulated for each region"],
  },
  {
    Icon: PencilRuler,
    title: "Product Development",
    text: "Our dedicated engineers turn that research into products, or into your own custom design, built to perform and priced to sell.",
    points: ["Dedicated in-house engineers", "Custom designs for OEM brands", "Prototyped and refined before launch", "Reasonable, competitive pricing"],
  },
  {
    Icon: Factory,
    title: "Manufacturing",
    text: "Manufacturing is fully in-house. Our own machines and assembly lines take every product from raw part to finished filter.",
    points: ["Injection moulding, pressing & punching", "CNC & VMC machining", "Ultrasonic welding", "5 assembly lines"],
  },
];

const facts = [
  { to: 2019, from: 2000, label: "Founded" },
  { to: 16500, group: true, suffix: " sq ft", label: "Factory" },
  { to: 1000000, group: true, label: "Production capacity" },
];

export default function ProcessSection({ withFacts = true }) {
  return (
    <section id="process" className="scroll-mt-28 pb-16 sm:pb-24">
      <Container>
        <Reveal variant="scale">
          <div className="overflow-hidden rounded-3xl bg-navy px-5 py-12 text-white sm:px-10 sm:py-16 lg:px-14 lg:py-20">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <span className="inline-block bg-white px-3 py-1.5 font-display text-xs font-semibold uppercase tracking-[0.14em] text-navy">
                  How we work
                </span>
                <TextReveal
                  lines={["Every product, from", "*research* to sales point"]}
                  accentClass="text-aqua"
                  className="mt-5 text-[30px] font-semibold leading-[1.08] tracking-[-0.02em] text-white sm:text-5xl"
                />
              </div>
              <Reveal delay={250}>
                <p className="max-w-sm text-sm leading-relaxed text-white/65 sm:text-base">
                  Everything happens in-house: dedicated R&amp;D, dedicated engineers, our own machines and 5 assembly lines,
                  so you get custom designs at a reasonable price.
                </p>
              </Reveal>
            </div>

            {/* Pipeline */}
            <div className="relative mt-12 sm:mt-16">
              {/* connecting line (desktop) */}
              <Reveal className="absolute left-0 right-0 top-6 hidden lg:block" aria-hidden="true">
                <div className="grow-x h-px w-full bg-gradient-to-r from-cyan via-aqua/60 to-cyan" style={{ "--d": "300ms" }} />
              </Reveal>

              <ol className="relative grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-6">
                {stages.map(({ Icon, title, text, points }, i) => (
                  <Reveal as="li" key={title} delay={200 + i * 220} className="flex flex-col">
                    <div className="relative flex w-fit items-center gap-3 bg-navy pr-3">
                      <span className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-cyan text-white ring-8 ring-navy">
                        <Icon className="h-5 w-5" strokeWidth={1.5} />
                      </span>
                      <span className="font-display text-sm font-semibold text-aqua">Step 0{i + 1}</span>
                    </div>
                    <div className="mt-5 flex flex-1 flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-colors duration-300 hover:bg-white/[0.07]">
                      <h3 className="text-2xl font-semibold tracking-tight">{title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-white/65">{text}</p>
                      <ul className="mt-6 space-y-2.5 border-t border-white/10 pt-5">
                        {points.map((p) => (
                          <li key={p} className="flex items-start gap-2.5 text-sm text-white/90">
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-cyan" strokeWidth={2} />
                            {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Reveal>
                ))}
              </ol>
            </div>

            {withFacts && (
              <div className="mt-12 grid grid-cols-1 gap-4 border-t border-white/10 pt-10 sm:mt-16 lg:grid-cols-12 lg:items-center">
                <div className="grid grid-cols-3 gap-4 lg:col-span-7">
                  {facts.map((f, i) => (
                    <Reveal key={f.label} delay={i * 100}>
                      <div className="font-display text-xl font-semibold tracking-tight sm:text-3xl">
                        <CountUp to={f.to} from={f.from || 0} group={f.group} />
                        {f.suffix}
                      </div>
                      <div className="mt-1 text-xs text-white/55 sm:text-sm">{f.label}</div>
                    </Reveal>
                  ))}
                </div>
                <Reveal delay={300} className="lg:col-span-5">
                  <div className="flex flex-col items-start gap-4 rounded-2xl bg-white p-5 text-ink sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <div className="text-xs font-medium text-muted">Manufacturing partner to</div>
                      <div className="mt-0.5 font-display text-lg font-semibold">Eureka Forbes · Aquaguard</div>
                    </div>
                    <EnquireButton interest="Bulk / OEM" className="inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-hover">
                      Bulk / OEM
                    </EnquireButton>
                  </div>
                </Reveal>
              </div>
            )}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
