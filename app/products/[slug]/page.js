import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, ChevronRight, ShieldCheck, Truck, Wrench, Sparkles } from "lucide-react";
import Container from "@/components/Container";
import ProductGallery from "@/components/ProductGallery";
import ProductCard from "@/components/ProductCard";
import EnquireButton from "@/components/EnquireButton";
import { Reveal } from "@/components/motion";
import { products, getProduct, getCategory, productsIn } from "@/data/products";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return { title: product.name, description: product.summary };
}

const perks = [
  { Icon: Truck, text: "Free installation within 24 hours" },
  { Icon: Wrench, text: "Filter changes & servicing included on plans" },
  { Icon: ShieldCheck, text: "Certified, tested before handover" },
];

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const category = getCategory(product.category);
  const related = [
    ...productsIn(product.category).filter((p) => p.slug !== product.slug),
    ...products.filter((p) => p.category !== product.category),
  ].slice(0, 4);

  return (
    <main className="pt-28 sm:pt-32">
      <Container>
        <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-1 text-xs text-muted">
          <Link href="/" className="hover:text-ink">
            Home
          </Link>
          <ChevronRight className="h-3 w-3" strokeWidth={1.5} />
          <Link href="/products" className="hover:text-ink">
            Products
          </Link>
          <ChevronRight className="h-3 w-3" strokeWidth={1.5} />
          <Link href={`/products?category=${category.slug}`} className="hover:text-ink">
            {category.name}
          </Link>
          <ChevronRight className="h-3 w-3" strokeWidth={1.5} />
          <span className="text-ink">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <ProductGallery product={product} />
          </Reveal>

          <Reveal delay={120} className="lg:py-4">
            <div className="flex items-center gap-2">
              <span className="text-xs font-medium uppercase tracking-wider text-brand">{category.name}</span>
              {product.badge && (
                <span className="rounded-full border border-line px-2.5 py-0.5 text-[11px] font-medium text-ink">{product.badge}</span>
              )}
            </div>
            <h1 className="mt-3 text-4xl font-semibold leading-[1.08] tracking-[-0.02em] text-ink sm:text-5xl">{product.name}</h1>
            <p className="mt-4 text-base leading-relaxed text-muted">{product.summary}</p>

            {/* Spec highlights */}
            <dl className="mt-6 grid grid-cols-3 divide-x divide-line rounded-2xl border border-line">
              {product.highlights.map((k) => (
                <div key={k} className="flex flex-col-reverse px-3 py-4 text-center sm:px-4">
                  <dt className="mt-0.5 text-[11px] text-muted sm:text-xs">{k}</dt>
                  <dd className="font-display text-base font-semibold text-ink sm:text-lg">{product.specs[k]}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <EnquireButton
                product={product.name}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-hover"
              >
                Enquire about this product
              </EnquireButton>
              <a
                href="tel:+18002837144"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-full border border-line px-7 py-3.5 text-sm font-semibold text-ink transition-colors hover:border-ink/30"
              >
                Call an expert
              </a>
            </div>

            <ul className="mt-8 space-y-3 border-t border-line pt-6">
              {perks.map(({ Icon, text }) => (
                <li key={text} className="flex items-center gap-3 text-sm text-ink">
                  <Icon className="h-4 w-4 text-brand" strokeWidth={1.5} />
                  {text}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex gap-4 rounded-2xl bg-sky p-5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-brand">
                <Sparkles className="h-5 w-5" strokeWidth={1.5} />
              </span>
              <div>
                <h3 className="text-sm font-semibold text-ink">HydroHub Care</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">
                  Add a care plan for automatic filter changes, yearly servicing and priority support — ask us when you
                  enquire.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Details */}
        <div className="mt-16 grid grid-cols-1 gap-10 border-t border-line pt-12 sm:mt-24 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <h2 className="text-2xl font-semibold tracking-tight text-ink">Overview</h2>
            <p className="mt-4 text-base leading-relaxed text-muted">{product.description}</p>
            <h3 className="mt-10 text-lg font-semibold text-ink">Key features</h3>
            <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {product.features.map((f) => (
                <li key={f} className="flex items-start gap-3 rounded-xl border border-line p-4 text-sm text-ink">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" strokeWidth={1.5} />
                  {f}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-5">
            <h2 className="text-2xl font-semibold tracking-tight text-ink">Specifications</h2>
            <dl className="mt-4 divide-y divide-line rounded-2xl border border-line">
              {Object.entries(product.specs).map(([k, v]) => (
                <div key={k} className="flex items-center justify-between gap-4 px-5 py-3.5 text-sm">
                  <dt className="text-muted">{k}</dt>
                  <dd className="text-right font-medium text-ink">{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        {/* Related */}
        <div className="mt-16 pb-16 sm:mt-24 sm:pb-24">
          <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">You may also like</h2>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((p, i) => (
              <Reveal key={p.slug} delay={i * 80}>
                <ProductCard product={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </main>
  );
}
