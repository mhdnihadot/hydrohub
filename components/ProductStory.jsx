import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, X } from "lucide-react";
import Container from "./Container";
import EnquireButton from "./EnquireButton";
import { Reveal, TextReveal, CountUp } from "./motion";
import { products } from "@/data/products";

// Home-page product story, told in the same order as the company profile:
// The solution → How it works → SIA vs generic → Very next product → Future products.

const solution = [
  "Made in India. Made for the world.",
  "Unique 5-layer filter",
  "Reduces chlorine",
  "Reduces water hardness",
  "Reduces impurities",
];

const layers = [
  { text: "Removes chlorine, lead, mercury & other heavy metals", c: "bg-[#E9D9A6]" },
  { text: "Neutralises hard water salts", c: "bg-[#D6DCE4]" },
  { text: "Removes smell & micro-impurities", c: "bg-[#3A3F47]" },
  { text: "Conditions hard water salts", c: "bg-[#C9DDF2]" },
  { text: "Removes micro-impurities & sediments", c: "bg-[#E8A25A]" },
];

const build = ["Metal connectors that last long", "BPA-free food-grade plastic for your family's safety", "Standard ½″ connectors fit most modern bath fittings"];
const results = ["Reduces hair loss", "Balances pH", "Protects skin"];

const compare = [
  ["5-layer filter made for Indian water conditions", "Generic design for Western markets"],
  ["Filters chlorine & conditions hard water salts", "Chlorine filtration only"],
  ["Brass connectors", "Plastic connectors"],
  ["2.5 years warranty", "No warranty"],
  ["Replacement cartridges easily available", "Availability not guaranteed"],
  ["Cartridges customised for your region", "Generic replacement cartridges"],
  ["Water Quality Association member", "No official affiliations"],
];

const actives = [
  { name: "Rare Blue Clay", text: "Exfoliates skin & scalp, removing mineral build-up, pollution and dead cells." },
  { name: "Bamboo Vinegar", text: "Neutralises hard water minerals, improves lather and prevents flaky deposits." },
  { name: "Argan Oil", text: "Restores natural moisture and boosts hair growth." },
];

const future = products.filter((p) => p.badge === "Coming soon");

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
        {/* Intro */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Reveal>
              <span className="text-sm font-medium text-brand">Our products</span>
            </Reveal>
            <TextReveal
              lines={["Healthier hair & skin", "starts in the *shower*"]}
              className="mt-2 text-[32px] font-semibold leading-[1.1] tracking-[-0.02em] text-ink sm:text-5xl"
            />
          </div>
          <Reveal delay={200}>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-line bg-white px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-frost"
            >
              View all products <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
            </Link>
          </Reveal>
        </div>

        {/* 1 — The solution */}
        <div className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-12 lg:gap-5">
          <Reveal variant="left" className="lg:col-span-6">
            <div className="flex h-full flex-col rounded-2xl border border-line bg-white p-6 sm:p-10">
              <div>
                <Label>The solution</Label>
              </div>
              <h3 className="mt-6 text-2xl font-semibold leading-tight tracking-tight text-ink sm:text-[32px]">
                Introducing SIA, India&apos;s 1st Dual Hardness Technology Shower &amp; Tap Filter
              </h3>
              <ul className="mt-6 space-y-3">
                {solution.map((s, i) => (
                  <Reveal as="li" key={s} delay={150 + i * 90} className="flex items-center gap-3 text-sm text-ink sm:text-base">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sky text-brand">
                      <Check className="h-3.5 w-3.5" strokeWidth={2} />
                    </span>
                    {s}
                  </Reveal>
                ))}
              </ul>
              <Reveal delay={650} className="mt-6 font-display text-sm font-semibold text-brand sm:text-base">
                Reduces hair-fall <span className="text-cyan">|</span> Protects skin <span className="text-cyan">|</span> Prevents bacteria
              </Reveal>
              <div className="mt-auto flex flex-col gap-3 pt-8 sm:flex-row">
                <Link
                  href="/products/sia-shower-tap-filter"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-hover"
                >
                  Explore SIA <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
                </Link>
                <EnquireButton
                  product="SIA Shower & Tap Filter"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border border-line px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-frost"
                >
                  Enquire
                </EnquireButton>
              </div>
            </div>
          </Reveal>

          <Reveal variant="right" delay={150} className="lg:col-span-6">
            <div className="group relative flex h-full min-h-[420px] flex-col justify-end overflow-hidden rounded-2xl p-6 sm:p-8">
              <Image
                src="/images/gallery/spray.jpg"
                alt="Fresh water spraying, like a filtered shower"
                fill
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/85 via-navy-deep/20 to-transparent" />
              <p className="relative max-w-sm text-xl font-semibold leading-snug text-white sm:text-2xl">
                SIA gives you clean, healthy water for better hair &amp; skin.
              </p>
              <div className="relative mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-white/95 p-4">
                  <div className="font-display text-2xl font-semibold tracking-tight text-ink">
                    <CountUp to={25000} duration={1600} group /> L
                  </div>
                  <div className="mt-0.5 text-xs text-muted">or 6 months per cartridge</div>
                </div>
                <div className="rounded-xl bg-white/95 p-4">
                  <div className="font-display text-2xl font-semibold tracking-tight text-ink">
                    <CountUp to={2.5} decimals={1} duration={1400} /> yrs
                  </div>
                  <div className="mt-0.5 text-xs text-muted">warranty</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* 2 — How it works */}
        <Reveal variant="scale" className="mt-4 lg:mt-5">
          <div className="overflow-hidden rounded-2xl bg-navy p-6 text-white sm:p-10 lg:p-14">
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <Label light>How it works</Label>
                <TextReveal
                  lines={["Smart 5-layer filter"]}
                  accentClass="text-aqua"
                  className="mt-5 text-[28px] font-semibold leading-[1.1] tracking-[-0.02em] text-white sm:text-4xl"
                />
              </div>
              <p className="max-w-xs text-sm leading-relaxed text-white/60">No more bad hair days, #TheNaturalWay.</p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
              {/* Layer stack */}
              <ol className="space-y-3 lg:col-span-7">
                {layers.map((l, i) => (
                  <Reveal as="li" key={l.text} delay={i * 120} className="flex items-center gap-4">
                    <span className="w-6 shrink-0 font-display text-sm font-semibold text-aqua">0{i + 1}</span>
                    <div className="relative flex-1 overflow-hidden rounded-xl border border-white/10 bg-white/5 px-4 py-3.5">
                      <div className={`grow-x absolute inset-y-0 left-0 w-1.5 ${l.c}`} style={{ "--d": `${200 + i * 120}ms` }} />
                      <span className="relative pl-2 text-sm text-white/90 sm:text-[15px]">{l.text}</span>
                    </div>
                  </Reveal>
                ))}
                <Reveal as="li" delay={700} className="pl-10 pt-2 text-xs font-semibold uppercase tracking-wider text-aqua">
                  NSF &amp; WQA certified media
                </Reveal>
              </ol>

              {/* Build + results */}
              <div className="flex flex-col justify-between gap-8 lg:col-span-5">
                <ul className="space-y-4">
                  {build.map((b, i) => (
                    <Reveal as="li" key={b} delay={300 + i * 100} className="border-t border-white/10 pt-4 text-sm leading-relaxed text-white/70">
                      {b}
                    </Reveal>
                  ))}
                </ul>
                <Reveal delay={600} className="rounded-xl bg-white p-5 text-ink">
                  <ul className="space-y-2">
                    {results.map((r) => (
                      <li key={r} className="flex items-center gap-2.5 text-base font-semibold">
                        <Check className="h-4 w-4 text-brand" strokeWidth={2} />
                        {r}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>
            </div>
          </div>
        </Reveal>

        {/* 3 — SIA vs generic */}
        <div className="mt-16 sm:mt-24">
          <div className="flex flex-col items-start gap-5">
            <Reveal>
              <Label>SIA shower &amp; tap filter</Label>
            </Reveal>
            <TextReveal
              lines={["Why SIA, not a generic import"]}
              className="text-[28px] font-semibold leading-[1.1] tracking-[-0.02em] text-ink sm:text-4xl"
            />
          </div>
          <div className="mt-8 overflow-hidden rounded-2xl border border-line">
            <div className="grid grid-cols-2 bg-frost font-display text-sm font-semibold text-ink sm:text-base">
              <div className="border-r border-line px-4 py-4 sm:px-6">SIA</div>
              <div className="px-4 py-4 text-muted sm:px-6">Generic imports</div>
            </div>
            {compare.map(([sia, other], i) => (
              <Reveal key={sia} delay={i * 70} className="grid grid-cols-2 border-t border-line text-sm">
                <div className="flex items-start gap-2.5 border-r border-line px-4 py-4 text-ink sm:px-6">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" strokeWidth={2} />
                  {sia}
                </div>
                <div className="flex items-start gap-2.5 px-4 py-4 text-muted sm:px-6">
                  <X className="mt-0.5 h-4 w-4 shrink-0 text-muted/60" strokeWidth={2} />
                  {other}
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* 4 — Very next product */}
        <div className="mt-16 sm:mt-24">
          <div className="flex flex-col items-start gap-5">
            <Reveal>
              <Label>Very next product</Label>
            </Reveal>
            <TextReveal
              lines={["Hard water *shampoo*"]}
              className="text-[28px] font-semibold leading-[1.1] tracking-[-0.02em] text-ink sm:text-4xl"
            />
          </div>
          <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-12 lg:gap-5">
            <Reveal variant="left" className="lg:col-span-5">
              <div className="relative h-full min-h-[360px] overflow-hidden rounded-2xl">
                <Image src="/images/hero.jpg" alt="Healthy, bouncy hair" fill sizes="(max-width: 1024px) 100vw, 500px" className="object-cover object-[60%_center]" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <span className="text-xs font-medium uppercase tracking-wider text-aqua">sia naturals · 300 ml</span>
                  <p className="mt-1 font-display text-2xl font-semibold leading-tight text-white">no more BAD HAIR DAYS!</p>
                </div>
              </div>
            </Reveal>
            <Reveal variant="right" delay={150} className="lg:col-span-7">
              <div className="flex h-full flex-col rounded-2xl bg-sky p-6 sm:p-10">
                <p className="max-w-xl text-sm leading-relaxed text-muted sm:text-base">
                  Hard water minerals build up on your scalp and clog hair follicles, leaving hair dull, lifeless and frizzy
                  after a shower. Sia Hard Water Shampoo neutralises hard water, removes mineral build-up and restores
                  natural moisture.
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
                  <Link
                    href="/products/sia-hard-water-shampoo"
                    className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-hover"
                  >
                    See the shampoo <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* 5 — Future products */}
        <div className="mt-16 grid grid-cols-1 gap-8 sm:mt-24 lg:grid-cols-12">
          <div className="flex flex-col items-start gap-5 lg:col-span-4">
            <Reveal>
              <Label>Future products</Label>
            </Reveal>
            <TextReveal
              lines={["Better water", "for the whole *home*"]}
              className="text-[28px] font-semibold leading-[1.1] tracking-[-0.02em] text-ink sm:text-4xl"
            />
            <Reveal delay={200}>
              <p className="max-w-xs text-sm leading-relaxed text-muted">
                What&apos;s coming next. Enquire about any of them and we&apos;ll tell you when it launches.
              </p>
            </Reveal>
          </div>
          <ol className="divide-y divide-line border-y border-line lg:col-span-8">
            {future.map((p, i) => (
              <Reveal as="li" key={p.slug} delay={i * 90}>
                <Link href={`/products/${p.slug}`} className="group flex items-center gap-4 py-5 sm:gap-6">
                  <span className="w-8 shrink-0 font-display text-sm font-semibold text-brand">0{i + 1}</span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-base font-semibold tracking-tight text-ink sm:text-lg">{p.name}</span>
                    <span className="mt-0.5 block truncate text-sm text-muted">{p.summary}</span>
                  </span>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line text-ink transition-colors group-hover:border-brand group-hover:bg-brand group-hover:text-white">
                    <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
                  </span>
                </Link>
              </Reveal>
            ))}
          </ol>
        </div>

        <Stripes />
      </Container>
    </section>
  );
}
