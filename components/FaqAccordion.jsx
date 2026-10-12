"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import Container from "./Container";
import { Reveal, TextReveal } from "./motion";

const faqs = [
  {
    q: "Why filter water I don't drink?",
    a: "97% of the water you use at home is for bathing, washing and cleaning. Hard water minerals, chlorine and heavy metals in that water dry out skin, cause hair fall and dull your fabrics. Shampoo and skincare can only do so much when the water itself is the problem.",
  },
  {
    q: "Will SIA fit my shower or tap?",
    a: "Yes. SIA uses standard ½″ brass connectors that fit most modern showers and taps, and you can fit it yourself with ease.",
  },
  {
    q: "How often do I replace the cartridge?",
    a: "Every 25,000 litres or 6 months, whichever comes first. Replacement cartridges are easily available and customised for your region's water.",
  },
  {
    q: "How is SIA different from cheaper imported filters?",
    a: "Most imports are generic designs for Western markets that only filter chlorine. SIA has 5 layers made for Indian water: it also neutralises and conditions hard water salts. It comes with brass connectors instead of plastic and a 2.5-year warranty.",
  },
  {
    q: "Do you manufacture for other brands?",
    a: "Yes. Since 2019 we've run a 16,500 sq ft factory with a production capacity of 10,00,000, and we manufacture for clients including Eureka Forbes (Aquaguard). Send us an enquiry for bulk or OEM orders.",
  },
];

export default function FaqAccordion() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="pb-16 sm:pb-24">
      <Container>
        <Reveal variant="scale">
          <div className="grid grid-cols-1 gap-10 rounded-3xl bg-navy px-5 py-12 sm:px-12 sm:py-16 lg:grid-cols-12 lg:gap-12 lg:px-16 lg:py-24">
            <div className="lg:col-span-5">
              <TextReveal
                lines={["Frequently", "Asked Questions"]}
                className="text-[32px] font-semibold leading-[1.08] tracking-[-0.02em] text-white sm:text-5xl"
              />
              <Reveal delay={250}>
                <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/65 sm:text-base">
                  Clear answers to the most common questions about SIA, cartridges and working with us.
                </p>
              </Reveal>
            </div>

            <div className="divide-y divide-white/10 lg:col-span-7">
              {faqs.map((f, i) => {
                const isOpen = open === i;
                return (
                  <Reveal key={i} delay={150 + i * 100} className="py-5 first:pt-0 last:pb-0">
                    <button
                      onClick={() => setOpen(isOpen ? -1 : i)}
                      className="group flex w-full items-center justify-between gap-4 text-left"
                      aria-expanded={isOpen}
                    >
                      <span
                        className={`text-base font-medium transition-colors sm:text-lg ${
                          isOpen ? "text-white" : "text-white/90 group-hover:text-white"
                        }`}
                      >
                        {f.q}
                      </span>
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/15 text-white/80 transition-colors group-hover:border-aqua group-hover:text-aqua">
                        {isOpen ? <Minus className="h-4 w-4" strokeWidth={1.5} /> : <Plus className="h-4 w-4" strokeWidth={1.5} />}
                      </span>
                    </button>
                    <div
                      className={`grid transition-all duration-500 ease-out ${
                        isOpen ? "mt-3 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="max-w-xl pr-10 text-sm leading-relaxed text-white/60">{f.a}</p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
