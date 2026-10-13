"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import Container from "./Container";
import { Reveal, TextReveal } from "./motion";

const faqs = [
  {
    q: "Do you manufacture for other brands?",
    a: "Yes, that's our core business. Since 2019 we've developed and manufactured water products for OEM brands, including Eureka Forbes (Aquaguard), from our own factory.",
  },
  {
    q: "Can you build to our own design?",
    a: "Yes. Our dedicated engineers develop custom designs to your specification, backed by in-house R&D led by a dedicated Dr., at a reasonable price.",
  },
  {
    q: "What do you make in-house?",
    a: "Everything. We run injection moulding, pressing and punching, CNC and VMC machining, and ultrasonic welding, with 5 assembly lines taking each product from raw part to finished product.",
  },
  {
    q: "How much can you produce?",
    a: "Our factory has a production capacity of 10,00,000. Tell us your volumes when you enquire and we'll plan your order around them.",
  },
  {
    q: "What products can you manufacture?",
    a: "Any water-related product. We're not limited to one product: our R&D team and engineers can develop and manufacture to your brief. Today we make 5-layer shower & tap filters and cartridges, and our R&D team is developing aroma, Vitamin C, hydrogen and alkaline cartridges, washing machine, tank and kitchen tap filters, rainwater harvesting systems and a hard water shampoo.",
  },
];

export default function FaqAccordion() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="pb-16 sm:pb-24">
      <Container>
        <Reveal variant="scale">
          <div className="grid grid-cols-1 gap-10 rounded-3xl bg-brand px-5 py-12 sm:px-12 sm:py-16 lg:grid-cols-12 lg:gap-12 lg:px-16 lg:py-24">
            <div className="lg:col-span-5">
              <TextReveal
                lines={["Frequently", "Asked Questions"]}
                className="text-[32px] font-semibold leading-[1.08] tracking-[-0.02em] text-white sm:text-5xl"
              />
              <Reveal delay={250}>
                <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/80 sm:text-base">
                  Clear answers for brands looking for a water filter manufacturing partner.
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
                        <p className="max-w-xl pr-10 text-sm leading-relaxed text-white/80">{f.a}</p>
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
