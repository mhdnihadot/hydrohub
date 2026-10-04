import Link from "next/link";
import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import ProductCard from "@/components/ProductCard";
import EnquirySection from "@/components/EnquirySection";
import { Reveal } from "@/components/motion";
import { categories, products, getCategory } from "@/data/products";

export const metadata = {
  title: "Products",
  description: "Water purifiers, dispensers, filters and reusable bottles from HydroHub.",
};

export default async function ProductsPage({ searchParams }) {
  const { category: slug } = await searchParams;
  const active = getCategory(slug);
  const list = active ? products.filter((p) => p.category === active.slug) : products;

  const tabs = [{ slug: "", name: "All", count: products.length }, ...categories.map((c) => ({ ...c, count: products.filter((p) => p.category === c.slug).length }))];

  return (
    <main>
      <PageHeader
        crumbs={[{ label: "Products", href: active ? "/products" : undefined }, ...(active ? [{ label: active.name }] : [])]}
        eyebrow="Products"
        title={active ? active.name : "Everything for pure water"}
        intro={active ? active.tagline : "Purifiers, dispensers, filters and bottles — chosen, installed and serviced by HydroHub."}
      />

      <Container>
        {/* Category tabs */}
        <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:px-0">
          {tabs.map((t) => {
            const isActive = (active?.slug || "") === t.slug;
            return (
              <Link
                key={t.slug || "all"}
                href={t.slug ? `/products?category=${t.slug}` : "/products"}
                scroll={false}
                className={`flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                  isActive ? "border-ink bg-ink text-white" : "border-line bg-white text-ink hover:border-ink/30"
                }`}
              >
                {t.name}
                <span className={`text-xs ${isActive ? "text-white/60" : "text-muted"}`}>{t.count}</span>
              </Link>
            );
          })}
        </div>

        {/* Grid */}
        <div className="mt-8 grid grid-cols-1 gap-4 pb-16 sm:grid-cols-2 sm:pb-24 lg:grid-cols-3 xl:grid-cols-4">
          {list.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 4) * 80}>
              <ProductCard product={p} />
            </Reveal>
          ))}
        </div>
      </Container>

      <EnquirySection />
    </main>
  );
}
