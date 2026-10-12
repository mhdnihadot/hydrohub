"use client";

import { useState } from "react";
import Image from "next/image";

// Product photo (if provided) followed by the "in use" photos.
export default function ProductGallery({ product }) {
  const slides = [...(product.image ? [product.image] : []), ...product.gallery];
  const [active, setActive] = useState(0);
  const alt = (i) => (i === 0 && product.image ? product.name : `${product.name} in use`);

  return (
    <div>
      <div className="relative aspect-square overflow-hidden rounded-2xl border border-line sm:aspect-[5/4]">
        {slides.map((src, i) => (
          <div key={src} className={`absolute inset-0 transition-opacity duration-500 ${i === active ? "opacity-100" : "opacity-0"}`}>
            <Image src={src} alt={alt(i)} fill priority={i === 0} sizes="(max-width: 1024px) 100vw, 640px" className="object-cover" />
          </div>
        ))}
      </div>
      {slides.length > 1 && (
        <div className="mt-3 grid grid-cols-4 gap-3">
          {slides.map((src, i) => (
            <button
              key={src}
              onClick={() => setActive(i)}
              className={`relative aspect-square overflow-hidden rounded-xl border-2 transition-colors ${
                i === active ? "border-ink" : "border-line hover:border-ink/30"
              }`}
              aria-label={`Show photo ${i + 1}`}
              aria-current={i === active}
            >
              <Image src={src} alt="" fill sizes="120px" className="object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
