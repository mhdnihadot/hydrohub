import Image from "next/image";
import { Check } from "lucide-react";
import EnquireButton from "./EnquireButton";
import { getCategory } from "@/data/products";

// No detail pages: the card carries the key facts and opens the enquiry form.
export default function ProductCard({ product }) {
  const category = getCategory(product.category);
  const chips = product.highlights.map((k) => product.specs[k]).filter((c) => c && c !== product.badge);
  const upcoming = Boolean(product.badge);

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white transition-colors duration-300 hover:border-ink/20">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={product.image || product.gallery[0]}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/45 via-transparent to-transparent" />
        <span className="absolute left-3 top-3 rounded-full bg-white px-2.5 py-1 text-[10px] font-semibold text-ink">
          {product.badge || "Available now"}
        </span>
      </div>

      <div className="flex flex-1 flex-col border-t border-line p-5">
        <span className="text-[11px] font-medium uppercase tracking-wider text-brand">{category?.name}</span>
        <h3 className="mt-1 text-lg font-semibold tracking-tight text-ink">{product.name}</h3>
        <p className="mt-1 text-sm leading-relaxed text-muted">{product.summary}</p>

        <ul className="mt-4 space-y-1.5">
          {product.features.slice(0, 3).map((f) => (
            <li key={f} className="flex items-start gap-2 text-xs leading-relaxed text-ink">
              <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand" strokeWidth={2} />
              {f}
            </li>
          ))}
        </ul>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {chips.map((c) => (
            <span key={c} className="rounded-full bg-frost px-2.5 py-1 text-[11px] font-medium text-ink">
              {c}
            </span>
          ))}
        </div>

        <div className="mt-auto pt-5">
          <EnquireButton
            product={product.name}
            className="inline-flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-full border border-line px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-brand hover:bg-brand hover:text-white"
          >
            {upcoming ? "Notify me" : "Enquire"}
          </EnquireButton>
        </div>
      </div>
    </article>
  );
}
