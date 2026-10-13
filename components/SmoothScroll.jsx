"use client";

import { useEffect } from "react";
import Lenis from "lenis";

// Site-wide smooth scrolling (Lenis, ~3 KB). Also smooths in-page #anchor links.
export default function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // lerp (not a long fixed duration) keeps wheel/trackpad scrolling responsive; touch scrolling stays native.
    const lenis = new Lenis({
      lerp: 0.14,
      smoothWheel: true,
      syncTouch: false,
      anchors: { offset: -90 },
      autoRaf: true,
    });

    return () => lenis.destroy();
  }, []);

  return null;
}
