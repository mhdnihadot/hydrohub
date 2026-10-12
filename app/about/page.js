import Image from "next/image";
import { BadgeIndianRupee, Factory, Leaf, Recycle } from "lucide-react";
import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import EnquirySection from "@/components/EnquirySection";
import EnquireButton from "@/components/EnquireButton";
import ProcessSection from "@/components/ProcessSection";
import { Reveal, TextReveal, CountUp } from "@/components/motion";

export const metadata = {
  title: "About us",
  description: "Hydro Hub Industries makes affordable, sustainable filtration for the water you bathe, wash and clean with. Made in India since 2019.",
};

const stats = [
  { value: 2019, from: 2000, label: "Founded" },
  { value: 16500, suffix: " sq ft", label: "Factory size", group: true },
  { value: 1000000, label: "Production capacity", group: true },
  { value: 97, suffix: "%", label: "Of home water isn't for drinking" },
];

const values = [
  { Icon: BadgeIndianRupee, title: "Affordable", text: "Good water for good life shouldn't be a luxury. We keep our filters and cartridges within reach of every home." },
  { Icon: Recycle, title: "Sustainable", text: "Long-life cartridges (25,000 L / 6 months) and durable brass connectors mean less to throw away." },
  { Icon: Leaf, title: "Eco-friendly", text: "BPA-free food-grade plastic, and hair care made with all-natural bio-actives. #TheNaturalWay." },
  { Icon: Factory, title: "Made in India", text: "Designed for Indian water conditions and built in our own factory. Made in India, made for the world." },
];

const steps = [
  { n: "01", title: "Shower & Tap Filter", text: "Fit it to your existing shower or tap. It removes chlorine, neutralises hard water and filters heavy metals." },
  { n: "02", title: "Hard Water Shampoo & Shower Gel", text: "No more dry or frizzy hair and skin after your daily shower." },
  { n: "03", title: "Boar Bristle Brush", text: "Lifts leftover minerals and pollutants and gives hair a natural bounce." },
  { n: "04", title: "Share your routine", text: "Post it on Instagram or X with #NoMoreBadHairDays #TheNaturalWay." },
];

export default function AboutPage() {
  return (
    <main>
      <PageHeader
        crumbs={[{ label: "About" }]}
        eyebrow="About Hydro Hub"
        title="It all starts with water"
        intro="Our parents and grandparents drew water straight from the backyard well. Today we don't know where the water in our taps and showers comes from, and it often carries hard water minerals, chlorine, heavy metals and hundreds of other contaminants. At Hydro Hub, our mission is to solve these daily water woes with affordable, sustainable and eco-friendly solutions."
      />

      {/* Story image + text */}
      <section className="pb-16 sm:pb-24">
        <Container>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
            <Reveal className="lg:col-span-7">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl sm:aspect-[16/10]">
                <Image src="/images/gallery/spray.jpg" alt="Water spraying, fresh and clean" fill sizes="(max-width: 1024px) 100vw, 700px" className="object-cover" />
              </div>
            </Reveal>
            <Reveal delay={120} className="lg:col-span-5">
              <div className="flex h-full flex-col justify-between gap-8 rounded-2xl bg-navy p-6 text-white sm:p-10">
                <div>
                  <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Our vision</h2>
                  <p className="mt-4 text-sm leading-relaxed text-white/70 sm:text-base">
                    To become the top brand in non-drinking residential water filtration, because 97% of the water you use
                    isn&apos;t for drinking or cooking.
                  </p>
                </div>
                <p className="border-t border-white/10 pt-6 text-sm leading-relaxed text-white/70">
                  <span className="mb-2 block text-xs font-semibold uppercase tracking-wider text-aqua">Our mission</span>
                  To make good water for good life, affordable and accessible to everyone.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <ProcessSection withFacts={false} />

      {/* Stats */}
      <section className="pb-16 sm:pb-24">
        <Container>
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line lg:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 80} className="bg-white p-6 sm:p-8">
                <div className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                  <CountUp to={s.value} from={s.from || 0} group={s.group} />
                  {s.suffix}
                </div>
                <div className="mt-1 text-sm text-muted">{s.label}</div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Clients */}
      <section className="pb-16 sm:pb-24">
        <Container>
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-line bg-sky p-6 sm:flex-row sm:items-center sm:p-10">
              <div>
                <span className="text-sm font-medium text-brand">Manufacturing partner</span>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">Trusted by Eureka Forbes · Aquaguard</h2>
                <p className="mt-2 max-w-lg text-sm leading-relaxed text-muted">
                  Our factory manufactures shower &amp; tap water filters for leading brands. Enquire about bulk and OEM orders.
                </p>
              </div>
              <EnquireButton interest="Bulk / OEM" className="inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-hover">
                Bulk / OEM enquiry
              </EnquireButton>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Values */}
      <section className="pb-16 sm:pb-24">
        <Container>
          <TextReveal
            lines={["What we stand for"]}
            className="text-[32px] font-semibold leading-[1.1] tracking-[-0.02em] text-ink sm:text-5xl"
          />
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ Icon, title, text }, i) => (
              <Reveal key={title} delay={i * 80} className="h-full">
                <div className="h-full rounded-2xl border border-line p-6">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sky text-brand">
                    <Icon className="h-5 w-5" strokeWidth={1.5} />
                  </span>
                  <h3 className="mt-6 text-lg font-semibold tracking-tight text-ink">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* How it works */}
      <section className="pb-16 sm:pb-24">
        <Container>
          <div className="rounded-2xl bg-sky p-6 sm:p-10 lg:p-14">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <TextReveal
                lines={["The hard water routine"]}
                className="text-[32px] font-semibold leading-[1.1] tracking-[-0.02em] text-ink sm:text-5xl"
              />
              <Reveal delay={150}>
                <EnquireButton className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-hover">
                  Make an enquiry
                </EnquireButton>
              </Reveal>
            </div>
            <ol className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
              {steps.map((s, i) => (
                <Reveal as="li" key={s.n} delay={i * 100} className="border-t border-ink/15 pt-5">
                  <span className="font-display text-sm font-semibold text-brand">{s.n}</span>
                  <h3 className="mt-3 text-lg font-semibold tracking-tight text-ink">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{s.text}</p>
                </Reveal>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      <EnquirySection />
    </main>
  );
}
