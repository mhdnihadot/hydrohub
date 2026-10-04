import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ProductVisual from "./ProductVisual";
import { getCategory } from "@/data/products";

export default function ProductCard({ product }) {
  const category = getCategory(product.category);
  const chips = product.highlights.slice(0, 2).map((k) => product.specs[k]).filter(Boolean);

  return (
    <Link
      href={`/products/${product.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white transition-colors duration-300 hover:border-ink/20"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        ) : (
          <ProductVisual
            kind={product.kind}
            tone={product.tone}
            className="h-full w-full transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
        )}
        {product.badge && (
          <span className="absolute left-3 top-3 rounded-full border border-line bg-white px-2.5 py-1 text-[10px] font-semibold text-ink">
            {product.badge}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col border-t border-line p-5">
        <span className="text-[11px] font-medium uppercase tracking-wider text-brand">{category?.name}</span>
        <h3 className="mt-1 text-lg font-semibold tracking-tight text-ink">{product.name}</h3>
        <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-muted">{product.summary}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {chips.map((c) => (
            <span key={c} className="rounded-full bg-frost px-2.5 py-1 text-[11px] font-medium text-ink">
              {c}
            </span>
          ))}
        </div>

        <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold text-ink">
          View details
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.5} />
        </span>
      </div>
    </Link>
  );
}
