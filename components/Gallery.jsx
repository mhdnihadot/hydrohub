"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X, ArrowLeft, ArrowRight, Expand } from "lucide-react";
import Container from "./Container";
import { Reveal, TextReveal } from "./motion";

const images = [
  { src: "/images/gallery/droplet.jpg", caption: "Every drop, tested" },
  { src: "/images/hero.jpg", caption: "Living with pure water" },
  { src: "/images/gallery/blue-glass.jpg", caption: "Crisp & refreshing" },
  { src: "/images/gallery/spray.jpg", caption: "Filtered to 0.1 micron" },
  { src: "/images/gallery/splash.jpg", caption: "Mineral balanced" },
  { src: "/images/gallery/pouring.jpg", caption: "Fresh at home" },
];

export default function Gallery() {
  const [active, setActive] = useState(null); // index of image in the lightbox

  useEffect(() => {
    if (active === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight") setActive((i) => (i + 1) % images.length);
      if (e.key === "ArrowLeft") setActive((i) => (i - 1 + images.length) % images.length);
    };
    document.documentElement.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.documentElement.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active]);

  return (
    <section id="gallery" className="scroll-mt-28 pb-16 sm:pb-24">
      <Container>
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <Reveal>
              <span className="text-sm font-medium text-brand">Gallery</span>
            </Reveal>
            <TextReveal
              lines={["Moments of pure water"]}
              className="mt-2 text-[32px] font-semibold leading-[1.1] tracking-[-0.02em] text-ink sm:text-5xl"
            />
          </div>
          <Reveal delay={200}>
            <p className="max-w-sm text-sm leading-relaxed text-muted">
              Select any photo to view it full size.
            </p>
          </Reveal>
        </div>

        {/* Desktop: hover-expand strip. Tablet: 3-col grid. Mobile: 2-col grid with a wide first tile. */}
        <div className="expand-row mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:h-[460px]">
          {images.map((img, i) => (
            <Reveal
              key={img.src}
              variant="scale"
              delay={i * 80}
              className="h-full"
              style={{ "--grow-hover": 3.2 }}
            >
              <button
                onClick={() => setActive(i)}
                className="group relative block h-full min-h-[180px] w-full overflow-hidden rounded-2xl text-left sm:min-h-[240px] lg:min-h-0"
                aria-label={`Open image: ${img.caption}`}
              >
                <Image
                  src={img.src}
                  alt={img.caption}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 520px"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 hidden bg-gradient-to-t from-navy-deep/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 lg:block" />
                <div className="absolute inset-x-0 bottom-0 hidden items-end justify-between gap-2 p-4 opacity-0 transition-all duration-500 group-hover:opacity-100 lg:flex">
                  <span className="truncate text-sm font-semibold text-white">{img.caption}</span>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/90 text-navy">
                    <Expand className="h-3.5 w-3.5" strokeWidth={1.5} />
                  </span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </Container>

      {/* Lightbox */}
      {active !== null && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-gradient-to-b from-navy-deep/85 to-navy-deep/95 p-4"
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
          aria-label={images[active].caption}
        >
          <div className="relative h-[70dvh] w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <Image src={images[active].src} alt={images[active].caption} fill sizes="100vw" className="rounded-xl object-contain" />
          </div>
          <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-sm font-medium text-white/80">
            {images[active].caption} · {active + 1}/{images.length}
          </p>
          <button
            onClick={() => setActive(null)}
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
            aria-label="Close"
          >
            <X className="h-5 w-5" strokeWidth={1.5} />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setActive((i) => (i - 1 + images.length) % images.length);
            }}
            className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
            aria-label="Previous image"
          >
            <ArrowLeft className="h-5 w-5" strokeWidth={1.5} />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setActive((i) => (i + 1) % images.length);
            }}
            className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
            aria-label="Next image"
          >
            <ArrowRight className="h-5 w-5" strokeWidth={1.5} />
          </button>
        </div>
      )}
    </section>
  );
}
