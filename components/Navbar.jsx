"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import Container from "./Container";
import EnquireButton from "./EnquireButton";

const links = [
  { label: "Products", href: "/products" },
  { label: "Gallery", href: "/#gallery" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/#faq" },
];

export function Logo({ light = false }) {
  return (
    <Link href="/" className="flex items-center gap-2" aria-label="HydroHub home">
      <span className={`flex h-8 w-8 items-center justify-center rounded-lg ${light ? "bg-white text-navy" : "bg-brand text-white"}`}>
        {/* water drop mark */}
        <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
          <path d="M12 2.5c-.4 0-.7.2-.9.5C9.4 5.6 5 11.4 5 15a7 7 0 0 0 14 0c0-3.6-4.4-9.4-6.1-12-.2-.3-.5-.5-.9-.5Z" />
        </svg>
      </span>
      <span className={`font-display text-xl font-semibold tracking-tight ${light ? "text-white" : "text-ink"}`}>HydroHub</span>
    </Link>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href) => !href.includes("#") && pathname.startsWith(href);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b bg-white transition-colors duration-300 ${
        scrolled || open ? "border-line" : "border-transparent"
      }`}
    >
      <Container>
        <div className="flex h-[72px] items-center justify-between gap-6">
          <Logo />

          <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
            {links.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className={`text-sm transition-colors ${isActive(l.href) ? "font-semibold text-ink" : "font-medium text-muted hover:text-ink"}`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a href="tel:+18002837144" className="hidden text-sm font-medium text-ink lg:inline-block lg:pr-4">
              +1 (800) 283-7144
            </a>
            <EnquireButton
              arrow={false}
              className="hidden items-center rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-hover sm:inline-flex"
            >
              Enquire
            </EnquireButton>
            <button
              onClick={() => setOpen((v) => !v)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink transition-colors hover:bg-frost md:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {open ? <X className="h-4 w-4" strokeWidth={1.5} /> : <Menu className="h-4 w-4" strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile drawer */}
      <div className={`grid border-t border-line transition-all duration-300 ease-out md:hidden ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr] border-transparent"}`}>
        <div className="overflow-hidden">
          <Container className="py-3">
            {links.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between border-b border-line py-4 text-base font-medium text-ink last:border-0"
              >
                {l.label}
                <ArrowRight className="h-4 w-4 text-muted" strokeWidth={1.5} />
              </Link>
            ))}
            <EnquireButton
              onClick={() => setOpen(false)}
              className="mb-2 mt-3 flex w-full items-center justify-center gap-2 rounded-full bg-brand py-3.5 text-sm font-semibold text-white"
            >
              Make an enquiry
            </EnquireButton>
          </Container>
        </div>
      </div>
    </header>
  );
}
