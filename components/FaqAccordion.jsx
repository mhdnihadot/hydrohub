"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import Container from "./Container";
import { Reveal, TextReveal } from "./motion";

const faqs = [
  {
    q: "Which purifier is right for my water?",
    a: "It depends on your water source and TDS level. Book a free water test — our technician measures TDS, hardness and chlorine at your tap and recommends RO, UV or a simple filter accordingly.",
  },
  {
    q: "How quickly can you install?",
    a: "Most installations happen within 24 hours of booking. A standard purifier or dispenser takes about 45 minutes, and we test the water before we leave.",
  },
  {
    q: "How often do filters need changing?",
    a: "Typically every 6–12 months depending on usage and water quality. Your HydroHub tracks filter life and we book the change for you before it runs out.",
  },
  {
    q: "Do you offer plans for offices?",
    a: "Yes — office plans include dispensers, purifiers, scheduled servicing and bottle delivery on one monthly invoice, with priority support.",
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
                  Clear answers to the most common questions about our products, installation and servicing.
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
