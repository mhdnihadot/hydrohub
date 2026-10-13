import Image from "next/image";
import { Check } from "lucide-react";
import Container from "./Container";
import EnquireButton from "./EnquireButton";
import { Reveal, TextReveal } from "./motion";

// Solutions by where the water is used at home.
const spaces = [
  {
    title: "Bathroom",
    text: "Filtered shower water for less hair fall and softer skin, plus a hard water hair care routine.",
    includes: ["Shower & Tap Filter", "Vitamin C & aroma cartridges (in R&D)", "Hard water shampoo (in R&D)"],
    image: "/images/gallery/spray.jpg",
  },
  {
    title: "Kitchen & taps",
    text: "Cleaner water at the kitchen tap and sink, from the storage tank to the rain on your roof.",
    includes: ["Kitchen tap filter (in R&D)", "Water tank sink filter (in R&D)", "Rainwater harvesting (in R&D)"],
    image: "/images/gallery/pouring.jpg",
  },
  {
    title: "Laundry",
    text: "Fabric losing its shine and softness? Treat the water going into your washing machine.",
    includes: ["Washing machine filter (in R&D)"],
    image: "/images/gallery/splash.jpg",
  },
];

export default function SpacesSection() {
  return (
    <section id="spaces" className="pb-16 sm:pb-24">
      <Container>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Reveal>
              <span className="text-sm font-medium text-brand">Solutions</span>
            </Reveal>
            <TextReveal
              lines={["Good water, every room"]}
              className="mt-2 text-[32px] font-semibold leading-[1.1] tracking-[-0.02em] text-ink sm:text-5xl"
            />
          </div>
          <Reveal delay={200}>
            <p className="max-w-sm text-sm leading-relaxed text-muted">
              From your shower to your washing machine, better water for every daily chore.
            </p>
          </Reveal>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3 lg:gap-5">
          {spaces.map((s, i) => (
            <Reveal key={s.title} delay={i * 120} className="h-full">
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={s.image}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <h3 className="text-xl font-semibold tracking-tight text-ink">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{s.text}</p>
                  <ul className="mt-5 space-y-2 border-t border-line pt-5">
                    {s.includes.map((x) => (
                      <li key={x} className="flex items-center gap-2.5 text-sm text-ink">
                        <Check className="h-4 w-4 shrink-0 text-brand" strokeWidth={1.5} />
                        {x}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-6">
                    <EnquireButton className="inline-flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-full border border-line px-5 py-3 text-sm font-semibold text-ink transition-colors hover:border-brand hover:bg-brand hover:text-white">
                      Enquire about {s.title.toLowerCase()}
                    </EnquireButton>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
