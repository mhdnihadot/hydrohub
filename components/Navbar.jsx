"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
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

// Brand logo (public/images/brand): colour on light surfaces, white on dark ones.
export function Logo({ light = false, className = "h-11" }) {
  return (
    <Link href="/" className="flex shrink-0 items-center" aria-label="Hydro Hub Industries home">
      <Image
        src={light ? "/images/brand/logo-white.png" : "/images/brand/logo-color.png"}
        alt="Hydro Hub Industries"
        width={640}
        height={190}
        priority={!light}
        sizes="200px"
        className={`w-auto ${className}`}
      />
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
            <a href="tel:+917406616220" className="hidden text-sm font-medium text-ink lg:inline-block lg:pr-4">
              +91 74066 16220
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
