"use client";

import { useEffect, useRef, useState } from "react";

// Lightweight scroll-motion primitives (IntersectionObserver + CSS, no animation library).
// Styles live in app/globals.css under "Scroll motion".

export function useInView({ threshold = 0.2, rootMargin = "0px 0px -60px 0px" } = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return [ref, inView];
}

// Fades/lifts children in once. variant: "up" | "scale" | "left" | "right"
export function Reveal({ children, delay = 0, variant = "up", as: Tag = "div", className = "", style, ...rest }) {
  const [ref, inView] = useInView({ threshold: 0.12 });
  return (
    <Tag
      ref={ref}
      data-variant={variant}
      className={`reveal ${inView ? "is-visible" : ""} ${className}`}
      style={{ ...style, "--reveal-delay": `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

// Heading that reveals word by word (faded + blurred → solid).
// `lines` is an array of strings (one per line); wrap a word in *asterisks* to accent it.
export function TextReveal({ lines, as: Tag = "h2", className = "", accentClass = "text-brand", delay = 0, step = 70 }) {
  const [ref, inView] = useInView({ threshold: 0.3 });
  let i = 0;
  return (
    <Tag ref={ref} className={`${inView ? "is-visible" : ""} ${className}`}>
      {lines.map((line, li) => (
        <span key={li} className="block">
          {line.split(" ").map((raw, wi) => {
            const accent = raw.startsWith("*") && raw.endsWith("*");
            const word = accent ? raw.slice(1, -1) : raw;
            const d = delay + i++ * step;
            return (
              <span key={wi}>
                <span className={`word ${accent ? accentClass : ""}`} style={{ "--d": `${d}ms` }}>
                  {word}
                </span>
                {wi < line.split(" ").length - 1 ? " " : ""}
              </span>
            );
          })}
        </span>
      ))}
    </Tag>
  );
}

// Counts from `from` to `to` when scrolled into view (or whenever `to` changes after that).
export function CountUp({ to, from = 0, duration = 1400, decimals = 0, format, className = "" }) {
  const fmt = format || ((v) => v.toFixed(decimals));
  const [ref, inView] = useInView({ threshold: 0.4 });
  const [value, setValue] = useState(from);
  const current = useRef(from);

  useEffect(() => {
    if (!inView) return;
    const start = current.current;
    const t0 = performance.now();
    let raf;
    const tick = (now) => {
      const p = Math.min(1, (now - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      const v = start + (to - start) * eased;
      current.current = v;
      setValue(v);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);

  return (
    <span ref={ref} className={`tabular-nums ${className}`}>
      {fmt(value)}
    </span>
  );
}
