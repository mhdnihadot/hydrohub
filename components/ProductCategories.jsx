import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Container from "./Container";
import ProductCard from "./ProductCard";
import ProductVisual from "./ProductVisual";
import { Reveal, TextReveal } from "./motion";
import { categories, productsIn } from "@/data/products";

export default function ProductCategories() {
  // one featured product per category
  const featured = categories.map((c) => productsIn(c.slug)[0]).filter(Boolean);

  return (
    <section id="products" className="pb-16 sm:pb-24">
      <Container>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Reveal>
              <span className="text-sm font-medium text-brand">Our products</span>
            </Reveal>
            <TextReveal
              lines={["Shop by category"]}
              className="mt-2 text-[32px] font-semibold leading-[1.1] tracking-[-0.02em] text-ink sm:text-5xl"
            />
          </div>
          <Reveal delay={200}>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-frost"
            >
              View all products <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
            </Link>
          </Reveal>
        </div>

        {/* Categories — hover-expand row on desktop, 2-col grid on tablet/mobile */}
        <div className="expand-row mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:h-[400px] lg:gap-4">
          {categories.map((c, i) => (
            <Reveal key={c.slug} variant="scale" delay={i * 100} className="h-full">
              <Link
                href={`/products?category=${c.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-[#F3F5F8] transition-colors duration-300 hover:border-ink/20"
              >
                <ProductVisual kind={c.kind} tone={c.tone} className="min-h-[150px] flex-1 sm:min-h-[220px] lg:min-h-0" />
                <div className="flex items-end justify-between gap-3 border-t border-line bg-white p-4 sm:p-5">
                  <div className="min-w-0">
                    <span className="text-[11px] font-medium text-muted">{productsIn(c.slug).length} products</span>
                    <h3 className="mt-0.5 text-lg font-semibold tracking-tight text-ink sm:text-xl">{c.name}</h3>
                    <p className="mt-1 hidden text-sm leading-snug text-muted sm:line-clamp-2">{c.tagline}</p>
                  </div>
                  <span className="hidden h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line text-ink transition-colors group-hover:border-brand group-hover:bg-brand group-hover:text-white sm:flex">
                    <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        {/* Featured products */}
        <div className="mt-14 flex items-end justify-between gap-4">
          <Reveal>
            <h3 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">Featured products</h3>
          </Reveal>
        </div>
        <div className="-mx-4 mt-6 flex snap-x snap-mandatory scroll-px-4 gap-4 overflow-x-auto px-4 pb-2 [scrollbar-width:none] sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 lg:grid-cols-4">
          {featured.map((p, i) => (
            <Reveal key={p.slug} delay={i * 100} className="w-[78%] shrink-0 snap-start sm:w-auto">
              <ProductCard product={p} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
