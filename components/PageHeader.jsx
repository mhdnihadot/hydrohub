import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Container from "./Container";
import { Reveal, TextReveal } from "./motion";

// Simple header used by inner pages (products, about, credits).
export default function PageHeader({ crumbs = [], eyebrow, title, intro, children }) {
  return (
    <section className="pb-10 pt-28 sm:pb-14 sm:pt-36">
      <Container>
        {crumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-1 text-xs text-muted">
            <Link href="/" className="hover:text-ink">
              Home
            </Link>
            {crumbs.map((c) => (
              <span key={c.label} className="flex items-center gap-1">
                <ChevronRight className="h-3 w-3" strokeWidth={1.5} />
                {c.href ? (
                  <Link href={c.href} className="hover:text-ink">
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-ink">{c.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            {eyebrow && (
              <Reveal>
                <span className="text-sm font-medium text-brand">{eyebrow}</span>
              </Reveal>
            )}
            <TextReveal
              as="h1"
              lines={[title]}
              className="mt-2 text-4xl font-semibold leading-[1.08] tracking-[-0.02em] text-ink sm:text-5xl lg:text-6xl"
            />
            {intro && (
              <Reveal delay={150}>
                <p className="mt-5 text-base leading-relaxed text-muted">{intro}</p>
              </Reveal>
            )}
          </div>
          {children}
        </div>
      </Container>
    </section>
  );
}
