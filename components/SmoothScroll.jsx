"use client";

import { useEffect } from "react";
import Lenis from "lenis";

// Site-wide smooth scrolling (Lenis, ~3 KB). Also smooths in-page #anchor links.
export default function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      anchors: { offset: -90 },
      autoRaf: true,
    });

    return () => lenis.destroy();
  }, []);

  return null;
}
