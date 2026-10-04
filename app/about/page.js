import Image from "next/image";
import { Droplets, Leaf, ShieldCheck, Users } from "lucide-react";
import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import EnquirySection from "@/components/EnquirySection";
import EnquireButton from "@/components/EnquireButton";
import { Reveal, TextReveal, CountUp } from "@/components/motion";

export const metadata = {
  title: "About us",
  description: "HydroHub makes pure, great-tasting water simple for homes and offices.",
};

const stats = [
  { value: 5000, suffix: "+", label: "Homes served" },
  { value: 300, suffix: "+", label: "Offices on a plan" },
  { value: 24, suffix: "h", label: "Average install time" },
  { value: 2.1, suffix: "M", label: "Plastic bottles avoided", decimals: 1 },
];

const values = [
  { Icon: ShieldCheck, title: "Tested, not promised", text: "Every installation ends with an on-site water test, so you see the difference in numbers — not marketing." },
  { Icon: Users, title: "Our own technicians", text: "No subcontractors. Our certified team installs, services and supports every system we sell." },
  { Icon: Leaf, title: "Less plastic", text: "One HydroHub system replaces thousands of single-use bottles every year." },
  { Icon: Droplets, title: "Honest advice", text: "Sometimes a simple filter is all you need. We'll tell you — even if it costs less." },
];

const steps = [
  { n: "01", title: "Free water test", text: "We measure TDS, hardness and chlorine at your tap." },
  { n: "02", title: "Right-size the system", text: "We recommend the simplest system that fixes your water." },
  { n: "03", title: "Install in 24 hours", text: "A certified technician installs and tests before handover." },
  { n: "04", title: "Care for life", text: "Filter changes and servicing are booked automatically." },
];

export default function AboutPage() {
  return (
    <main>
      <PageHeader
        crumbs={[{ label: "About" }]}
        eyebrow="About HydroHub"
        title="Pure water, made simple"
        intro="We started HydroHub because getting clean, great-tasting water at home shouldn't mean hauling bottles or deciphering filter specs. Today we look after thousands of homes and offices — from the first water test to every filter change after."
      />

      {/* Story image + text */}
      <section className="pb-16 sm:pb-24">
        <Container>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
            <Reveal className="lg:col-span-7">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl sm:aspect-[16/10]">
                <Image src="/images/gallery/pouring.jpg" alt="Pouring a glass of filtered water at home" fill sizes="(max-width: 1024px) 100vw, 700px" className="object-cover" />
              </div>
            </Reveal>
            <Reveal delay={120} className="lg:col-span-5">
              <div className="flex h-full flex-col justify-between gap-8 rounded-2xl bg-navy p-6 text-white sm:p-10">
                <div>
                  <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Our mission</h2>
                  <p className="mt-4 text-sm leading-relaxed text-white/70 sm:text-base">
                    To give every home and workplace safe, great-tasting water straight from the tap — with less plastic,
                    less hassle and honest advice.
                  </p>
                </div>
                <p className="border-t border-white/10 pt-6 text-sm leading-relaxed text-white/70">
                  &ldquo;If we wouldn&apos;t drink it ourselves, we don&apos;t install it.&rdquo;
                  <span className="mt-2 block text-xs text-white/45">— The HydroHub team</span>
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Stats */}
      <section className="pb-16 sm:pb-24">
        <Container>
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line lg:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 80} className="bg-white p-6 sm:p-8">
                <div className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                  <CountUp to={s.value} decimals={s.decimals || 0} />
                  {s.suffix}
                </div>
                <div className="mt-1 text-sm text-muted">{s.label}</div>
              </Reveal>
            ))}
          </div>
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
                lines={["How it works"]}
                className="text-[32px] font-semibold leading-[1.1] tracking-[-0.02em] text-ink sm:text-5xl"
              />
              <Reveal delay={150}>
                <EnquireButton className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-hover">
                  Book a free water test
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
