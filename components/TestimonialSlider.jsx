"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Container from "./Container";
import { Reveal, useInView } from "./motion";

const testimonials = [
  {
    author: "Sarah Mitchell, homeowner",
    quote:
      "The water test showed our tap water was far harder than we thought. HydroHub installed a purifier the next morning — the coffee tastes better and we haven't bought a single bottle since.",
    image: "/images/testimonial.jpg",
  },
  {
    author: "Lina Haddad, Office Manager at Aetheria Labs",
    quote:
      "Three floors, one monthly plan. Dispensers, filter changes and deliveries just happen — I don't have to think about water any more.",
    image: "/images/hero.jpg",
  },
];

export default function TestimonialSlider() {
  const [index, setIndex] = useState(0);
  const [ref, inView] = useInView({ threshold: 0.35 });
  const go = (dir) => setIndex((i) => (i + dir + testimonials.length) % testimonials.length);

  return (
    <section className="pb-16 sm:pb-24">
      <Container>
        <Reveal variant="scale">
          <div
            ref={ref}
            className={`relative isolate flex min-h-[520px] flex-col justify-end overflow-hidden rounded-3xl p-5 sm:min-h-[600px] sm:p-12 lg:p-14 ${
              inView ? "is-visible" : ""
            }`}
          >
            {testimonials.map((t, i) => (
              <Image
                key={t.image}
                src={t.image}
                alt={i === index ? t.author : ""}
                fill
                sizes="(max-width: 1248px) 100vw, 1200px"
                className={`-z-10 object-cover object-[60%_center] transition-all duration-1000 ${
                  i === index ? "scale-100 opacity-100" : "scale-105 opacity-0"
                }`}
              />
            ))}
            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-navy-deep/90 via-navy-deep/30 to-transparent" />
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-deep/50 to-transparent" />

            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              {/* key forces the word reveal to replay on every slide */}
              <div key={index} className="max-w-3xl">
                <span className="word text-sm font-medium text-aqua" style={{ "--d": "0ms" }}>
                  {testimonials[index].author}
                </span>
                <p className="mt-4 text-xl font-medium leading-snug tracking-[-0.01em] text-white sm:text-3xl lg:text-[34px]">
                  {`“${testimonials[index].quote}”`.split(" ").map((w, wi) => (
                    <span key={wi}>
                      <span className="word" style={{ "--d": `${150 + wi * 35}ms` }}>
                        {w}
                      </span>{" "}
                    </span>
                  ))}
                </p>
              </div>

              <div className="flex shrink-0 items-center gap-2">
                <button
                  onClick={() => go(-1)}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white transition-colors hover:bg-white/20"
                  aria-label="Previous testimonial"
                >
                  <ArrowLeft className="h-4 w-4" strokeWidth={1.5} />
                </button>
                <button
                  onClick={() => go(1)}
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-navy transition-colors hover:bg-sky"
                  aria-label="Next testimonial"
                >
                  <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
