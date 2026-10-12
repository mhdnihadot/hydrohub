import Image from "next/image";
import { ArrowUpRight, Check, X } from "lucide-react";
import Container from "./Container";
import EnquireButton from "./EnquireButton";
import { Reveal, TextReveal } from "./motion";
import { products } from "@/data/products";

// Home-page product story, told in the same order as the company profile:
// Why partner with us (vs imports) → In development → Expanding the range.

// Manufacturing with Hydro Hub vs sourcing generic imported products
const compare = [
  ["In-house R&D led by a dedicated Dr.", "Off-the-shelf designs, no R&D"],
  ["Custom designs built to your specification", "Fixed catalogue models"],
  ["Dedicated engineers on your project", "Little or no engineering support"],
  ["All manufacturing in-house: moulding, CNC & VMC, welding", "Parts spread across outsourced suppliers"],
  ["5 assembly lines, 10,00,000 production capacity", "Supply depends on overseas factories"],
  ["Made in India, close to your market", "Long shipping lead times"],
  ["Reasonable, factory-direct pricing", "Import duties and middleman margins"],
];

const actives = [
  { name: "Rare Blue Clay", text: "Exfoliates skin & scalp, removing mineral build-up, pollution and dead cells." },
  { name: "Bamboo Vinegar", text: "Neutralises hard water minerals, improves lather and prevents flaky deposits." },
  { name: "Argan Oil", text: "Restores natural moisture and boosts hair growth." },
];

// Everything in R&D except the shampoo, which has its own block above
const future = products.filter((p) => p.badge === "In R&D" && p.slug !== "hard-water-shampoo");

// Solid blue label, like the headings in the company profile
function Label({ children, light = false }) {
  return (
    <span
      className={`inline-block px-3 py-1.5 font-display text-xs font-semibold uppercase tracking-[0.14em] ${
        light ? "bg-white text-navy" : "bg-brand text-white"
      }`}
    >
      {children}
    </span>
  );
}

// The profile's two-tone footer stripe, drawn in on scroll
function Stripes() {
  return (
    <Reveal className="mt-16 space-y-1.5 sm:mt-24" aria-hidden="true">
      <div className="grow-x h-2.5 rounded-full bg-cyan" />
      <div className="grow-x h-4 rounded-full bg-brand" style={{ "--d": "250ms" }} />
    </Reveal>
  );
}

export default function ProductStory() {
  return (
    <section id="products" className="pb-16 sm:pb-24">
      <Container>
        {/* 1 — Hydro Hub vs generic */}
        <div>
          <div className="flex flex-col items-start gap-5">
            <Reveal>
              <Label>Why partner with us</Label>
            </Reveal>
            <TextReveal
              lines={["Manufacture with us, not *imports*"]}
              className="text-[28px] font-semibold leading-[1.1] tracking-[-0.02em] text-ink sm:text-4xl"
            />
          </div>
          <div className="mt-8 overflow-hidden rounded-2xl border border-line">
            <div className="grid grid-cols-2 bg-frost font-display text-sm font-semibold text-ink sm:text-base">
              <div className="border-r border-line px-4 py-4 sm:px-6">Hydro Hub</div>
              <div className="px-4 py-4 text-muted sm:px-6">Importing generic products</div>
            </div>
            {compare.map(([ours, other], i) => (
              <Reveal key={ours} delay={i * 70} className="grid grid-cols-2 border-t border-line text-sm">
                <div className="flex items-start gap-2.5 border-r border-line px-4 py-4 text-ink sm:px-6">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" strokeWidth={2} />
                  {ours}
                </div>
                <div className="flex items-start gap-2.5 px-4 py-4 text-muted sm:px-6">
                  <X className="mt-0.5 h-4 w-4 shrink-0 text-muted/60" strokeWidth={2} />
                  {other}
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* 2 — From our R&D: hard water shampoo */}
        <div className="mt-16 sm:mt-24">
          <div className="flex flex-col items-start gap-5">
            <Reveal>
              <Label>From our R&amp;D lab</Label>
            </Reveal>
            <TextReveal
              lines={["Hard water *shampoo*", "formulated in-house"]}
              className="text-[28px] font-semibold leading-[1.1] tracking-[-0.02em] text-ink sm:text-4xl"
            />
          </div>
          <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-12 lg:gap-5">
            <Reveal variant="left" className="lg:col-span-5">
              <div className="relative h-full min-h-[360px] overflow-hidden rounded-2xl">
                <Image src="/images/hero.jpg" alt="Healthy, bouncy hair" fill sizes="(max-width: 1024px) 100vw, 500px" className="object-cover object-[60%_center]" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <span className="text-xs font-medium uppercase tracking-wider text-aqua">Hydro Hub · 300 ml</span>
                  <p className="mt-1 font-display text-2xl font-semibold leading-tight text-white">no more BAD HAIR DAYS!</p>
                </div>
              </div>
            </Reveal>
            <Reveal variant="right" delay={150} className="lg:col-span-7">
              <div className="flex h-full flex-col rounded-2xl bg-sky p-6 sm:p-10">
                <p className="max-w-xl text-sm leading-relaxed text-muted sm:text-base">
                  Our R&amp;D goes beyond filters. Led by our dedicated Dr., the team has already formulated a hard water
                  shampoo that neutralises hard water, removes the mineral build-up that leaves hair dull and frizzy, and
                  restores natural moisture. We develop and manufacture it in-house, ready to carry your brand.
                </p>
                <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
                  {actives.map((a, i) => (
                    <Reveal key={a.name} delay={250 + i * 110} className="rounded-xl bg-white p-4">
                      <h4 className="font-display text-sm font-semibold text-ink">{a.name}</h4>
                      <p className="mt-1.5 text-xs leading-relaxed text-muted">{a.text}</p>
                    </Reveal>
                  ))}
                </div>
                <p className="mt-5 text-xs text-muted">
                  All-natural bio-actives. <span className="font-semibold text-ink">NO</span> sulphates, parabens, mineral oil,
                  synthetic colourants or perfume.
                </p>
                <div className="mt-auto pt-8">
                  <EnquireButton
                    product="Hard Water Shampoo"
                    interest="Bulk / OEM"
                    className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-hover"
                  >
                    Develop it for your brand
                  </EnquireButton>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* 3 — More in R&D */}
        <div className="mt-16 grid grid-cols-1 gap-8 sm:mt-24 lg:grid-cols-12">
          <div className="flex flex-col items-start gap-5 lg:col-span-4">
            <Reveal>
              <Label>Already in R&amp;D</Label>
            </Reveal>
            <TextReveal
              lines={["On our R&D", "bench *now*"]}
              className="text-[28px] font-semibold leading-[1.1] tracking-[-0.02em] text-ink sm:text-4xl"
            />
            <Reveal delay={200}>
              <p className="max-w-xs text-sm leading-relaxed text-muted">
                Our R&amp;D team is already developing these. Partner with us to bring any of them to market under your brand.
              </p>
            </Reveal>
          </div>
          <ol className="divide-y divide-line border-y border-line lg:col-span-8">
            {future.map((p, i) => (
              <Reveal as="li" key={p.slug} delay={i * 90}>
                <EnquireButton
                  product={p.name}
                  arrow={false}
                  className="group flex w-full items-center gap-4 py-5 text-left sm:gap-6"
                >
                  <span className="w-8 shrink-0 font-display text-sm font-semibold text-brand">0{i + 1}</span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-base font-semibold tracking-tight text-ink sm:text-lg">{p.name}</span>
                    <span className="mt-0.5 block truncate text-sm text-muted">{p.summary}</span>
                  </span>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line text-ink transition-colors group-hover:border-brand group-hover:bg-brand group-hover:text-white">
                    <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
                  </span>
                </EnquireButton>
              </Reveal>
            ))}
          </ol>
        </div>

        <Stripes />
      </Container>
    </section>
  );
}
