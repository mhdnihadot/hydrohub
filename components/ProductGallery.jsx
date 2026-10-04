"use client";

import { useState } from "react";
import Image from "next/image";
import ProductVisual from "./ProductVisual";

// First slide = the product (photo if provided, otherwise the render); the rest are "in use" photos.
export default function ProductGallery({ product }) {
  const slides = [{ type: "product" }, ...product.gallery.map((src) => ({ type: "photo", src }))];
  const [active, setActive] = useState(0);

  const render = (slide, sizes, priority) =>
    slide.type === "product" ? (
      product.image ? (
        <Image src={product.image} alt={product.name} fill priority={priority} sizes={sizes} className="object-cover" />
      ) : (
        <ProductVisual kind={product.kind} tone={product.tone} className="h-full w-full" />
      )
    ) : (
      <Image src={slide.src} alt={`${product.name} in use`} fill sizes={sizes} className="object-cover" />
    );

  return (
    <div>
      <div className="relative aspect-square overflow-hidden rounded-2xl border border-line sm:aspect-[5/4]">
        {slides.map((slide, i) => (
          <div key={i} className={`absolute inset-0 transition-opacity duration-500 ${i === active ? "opacity-100" : "opacity-0"}`}>
            {render(slide, "(max-width: 1024px) 100vw, 640px", i === 0)}
          </div>
        ))}
        {active > 0 && (
          <span className="absolute left-3 top-3 rounded-full border border-line bg-white px-2.5 py-1 text-[11px] font-medium text-ink">In use</span>
        )}
      </div>
      <div className="mt-3 grid grid-cols-4 gap-3">
        {slides.map((slide, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`relative aspect-square overflow-hidden rounded-xl border-2 transition-colors ${
              i === active ? "border-ink" : "border-line hover:border-ink/30"
            }`}
            aria-label={i === 0 ? "Show product" : `Show photo ${i}`}
            aria-current={i === active}
          >
            {render(slide, "120px", false)}
          </button>
        ))}
      </div>
    </div>
  );
}
