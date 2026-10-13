"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Container from "./Container";
import { Reveal, useInView } from "./motion";

// Brand statements from the company profile
const testimonials = [
  {
    author: "Our vision",
    quote: "To become the top brand in non-drinking residential water filtration.",
    image: "/images/photos/truck.webp",
  },
  {
    author: "Our mission",
    quote: "To make good water for good life, affordable and accessible to everyone.",
    image: "/images/photos/water.webp",
  },
  {
    author: "#NoMoreBadHairDays",
    quote: "Water is the first and last thing to touch your hair in the shower. Make it good water.",
    image: "/images/photos/reception.webp",
  },
];

const LEAVE_MS = 650;

// Where a card sits in the stack: 0 = front, 1–2 = peeking behind (iOS notification style), rest hidden.
function stackStyle(pos, leaving) {
  if (leaving) return { transform: "translate3d(0,-48px,0) scale(1.03)", opacity: 0, zIndex: 40, filter: "brightness(1)" };
  if (pos === 0) return { transform: "translate3d(0,0,0) scale(1)", opacity: 1, zIndex: 30, filter: "brightness(1)" };
  if (pos === 1) return { transform: "translate3d(0,22px,0) scale(0.95)", opacity: 1, zIndex: 20, filter: "brightness(0.8)" };
  if (pos === 2) return { transform: "translate3d(0,42px,0) scale(0.9)", opacity: 1, zIndex: 10, filter: "brightness(0.65)" };
  return { transform: "translate3d(0,42px,0) scale(0.9)", opacity: 0, zIndex: 0, filter: "brightness(0.65)" };
}

export default function TestimonialSlider() {
  const [index, setIndex] = useState(0);
  const [leaving, setLeaving] = useState(null); // card animating off the top of the stack
  const [ref, inView] = useInView({ threshold: 0.35 });
  const leaveTimer = useRef(null);
  const startX = useRef(null);
  const n = testimonials.length;

  const go = (dir) => {
    clearTimeout(leaveTimer.current);
    if (dir > 0) {
      // front card lifts away, the one behind rises into place
      setLeaving(index);
      leaveTimer.current = setTimeout(() => setLeaving(null), LEAVE_MS);
    } else {
      setLeaving(null);
    }
    setIndex((i) => (i + dir + n) % n);
  };

  useEffect(() => () => clearTimeout(leaveTimer.current), []);

  const onPointerDown = (e) => (startX.current = e.clientX);
  const onPointerUp = (e) => {
    if (startX.current === null) return;
    const dx = e.clientX - startX.current;
    startX.current = null;
    if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
  };

  return (
    <section className="pb-16 sm:pb-24">
      <Container>
        <Reveal variant="scale">
          <div
            ref={ref}
            onPointerDown={onPointerDown}
            onPointerUp={onPointerUp}
            className="relative isolate h-[520px] touch-pan-y select-none pb-[42px] sm:h-[640px]"
            role="region"
            aria-roledescription="carousel"
            aria-label="Our vision and mission"
          >
            {testimonials.map((t, i) => {
              const pos = (i - index + n) % n;
              const front = pos === 0 && leaving !== i;
              return (
                <article
                  key={t.image}
                  aria-hidden={!front}
                  className={`absolute inset-x-0 top-0 bottom-[42px] isolate flex origin-bottom flex-col justify-end overflow-hidden rounded-3xl bg-navy-deep p-5 pb-24 shadow-[0_20px_50px_-20px_rgba(8,24,39,0.45)] transition-[transform,opacity,filter] duration-[650ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform sm:p-12 lg:p-14 ${
                    front && inView ? "is-visible" : ""
                  }`}
                  style={stackStyle(pos, leaving === i)}
                >
                  <Image
                    src={t.image}
                    alt={front ? t.author : ""}
                    fill
                    sizes="(max-width: 1248px) 100vw, 1200px"
                    className="-z-10 object-cover object-[60%_center]"
                  />
                  <div className="absolute inset-0 -z-10 bg-gradient-to-t from-navy-deep/90 via-navy-deep/30 to-transparent" />
                  <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-deep/50 to-transparent" />

                  <div className="max-w-3xl sm:pr-32">
                    <span className="word text-sm font-medium text-aqua" style={{ "--d": "150ms" }}>
                      {t.author}
                    </span>
                    <p className="mt-4 text-xl font-medium leading-snug tracking-[-0.01em] text-white sm:text-3xl lg:text-[34px]">
                      {`“${t.quote}”`.split(" ").map((w, wi) => (
                        <span key={wi}>
                          <span className="word" style={{ "--d": `${250 + wi * 35}ms` }}>
                            {w}
                          </span>{" "}
                        </span>
                      ))}
                    </p>
                  </div>
                </article>
              );
            })}

            {/* Controls sit above the stack */}
            <div className="absolute bottom-[62px] right-5 z-50 flex items-center gap-2 sm:bottom-[90px] sm:right-12 lg:right-14">
              <button
                onClick={() => go(-1)}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
                aria-label="Previous slide"
              >
                <ArrowLeft className="h-4 w-4" strokeWidth={1.5} />
              </button>
              <button
                onClick={() => go(1)}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-navy transition-colors hover:bg-sky"
                aria-label="Next slide"
              >
                <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
