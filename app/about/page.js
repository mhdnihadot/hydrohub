import Image from "next/image";
import { BadgeIndianRupee, Factory, Recycle, ShieldCheck } from "lucide-react";
import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import EnquirySection from "@/components/EnquirySection";
import EnquireButton from "@/components/EnquireButton";
import ProcessSection from "@/components/ProcessSection";
import { Reveal, TextReveal, CountUp } from "@/components/motion";

export const metadata = {
  title: "About us",
  description: "Hydro Hub Industries is a Bengaluru water solutions company: research, development, design and manufacturing of water filtration products and components, with OEM & ODM partnerships.",
};

const stats = [
  { value: 2019, from: 2000, label: "Founded" },
  { value: 16500, suffix: " sq ft", label: "Factory size", group: true },
  { value: 1000000, label: "Production capacity", group: true },
  { value: 97, suffix: "%", label: "Of home water isn't for drinking" },
];

const values = [
  { Icon: BadgeIndianRupee, title: "Cost-effective", text: "Solutions that balance functionality, durability, design and cost, so products work commercially for our partners." },
  { Icon: ShieldCheck, title: "Quality-focused", text: "Material inspection, production checks and product evaluation throughout the manufacturing process." },
  { Icon: Recycle, title: "Continuous improvement", text: "We keep refining products, processes and designs as market requirements evolve." },
  { Icon: Factory, title: "Made in India", text: "Research, development and manufacturing in Bengaluru, for brands, distributors and businesses." },
];

// What we do (company profile)
const steps = [
  { n: "01", title: "Research & Development", text: "We explore new technologies, product concepts, filtration materials and engineering solutions for evolving market needs." },
  { n: "02", title: "Product Design & Development", text: "Product concepts, component design, prototyping, product improvement and manufacturing-oriented development." },
  { n: "03", title: "OEM & ODM Manufacturing", text: "We help businesses develop and manufacture water filtration products under their own brands." },
  { n: "04", title: "Water Filtration Products", text: "Domestic water filtration products, shower filters, tap filters, filter components and water treatment accessories." },
  { n: "05", title: "Quality Control & Testing", text: "Material inspection, production checks, product evaluation and quality improvement at every stage." },
  { n: "06", title: "Manufacturing & Supply", text: "Efficient production processes and dependable supply for business customers and brand partners." },
];

export default function AboutPage() {
  return (
    <main>
      <PageHeader
        crumbs={[{ label: "About" }]}
        eyebrow="About Hydro Hub"
        title="It all starts with water"
        intro="Hydro Hub Industries is a water solutions company based in Bengaluru, India. We believe better products begin with understanding real customer needs, so our approach combines research and development, product engineering, material selection, prototyping, manufacturing, quality control and commercial supply. We support businesses that want to develop new products, improve existing designs and manufacture water filtration solutions under their own brands."
      />

      {/* Story image + text */}
      <section className="pb-16 sm:pb-24">
        <Container>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
            <Reveal className="lg:col-span-7">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl sm:aspect-[16/10]">
                <Image src="/images/photos/reception.webp" alt="Hydro Hub Industries reception" fill sizes="(max-width: 1024px) 100vw, 700px" className="object-cover" />
              </div>
            </Reveal>
            <Reveal delay={120} className="lg:col-span-5">
              <div className="flex h-full flex-col justify-between gap-8 rounded-2xl bg-brand p-6 text-white sm:p-10">
                <div>
                  <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Our vision</h2>
                  <p className="mt-4 text-sm leading-relaxed text-white/70 sm:text-base">
                    To become a trusted Indian water technology and manufacturing company, recognised for product innovation,
                    engineering capability, manufacturing excellence and long-term OEM/ODM partnerships.
                  </p>
                </div>
                <p className="border-t border-white/10 pt-6 text-sm leading-relaxed text-white/70">
                  <span className="mb-2 block text-xs font-semibold uppercase tracking-wider text-aqua">Our mission</span>
                  Good water for better long life, affordable and accessible to everyone.
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
                  We develop and manufacture water filtration products for brands. Enquire about OEM, ODM and private-label manufacturing.
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

      {/* What we do */}
      <section className="pb-16 sm:pb-24">
        <Container>
          <div className="rounded-2xl bg-sky p-6 sm:p-10 lg:p-14">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <TextReveal
                lines={["What we do"]}
                className="text-[32px] font-semibold leading-[1.1] tracking-[-0.02em] text-ink sm:text-5xl"
              />
              <Reveal delay={150}>
                <EnquireButton interest="Bulk / OEM" className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-hover">
                  Partner with us
                </EnquireButton>
              </Reveal>
            </div>
            <ol className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
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
