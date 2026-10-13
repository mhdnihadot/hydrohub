"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, Mail } from "lucide-react";
import Container from "./Container";
import EnquireButton from "./EnquireButton";
import { email, socials } from "@/data/contact";

const links = [
  { label: "How we work", href: "/#process" },
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

  // Menu open: lock page scroll and close on Escape (links close it on tap)
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.documentElement.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.documentElement.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

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
            <EnquireButton
              interest="Bulk / OEM"
              arrow={false}
              className="hidden items-center rounded-full border border-line bg-white px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-brand hover:text-brand lg:inline-flex"
            >
              Bulk / OEM
            </EnquireButton>
            <EnquireButton
              arrow={false}
              className="hidden items-center rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-hover sm:inline-flex"
            >
              Enquire
            </EnquireButton>
            <button
              onClick={() => setOpen((v) => !v)}
              className={`flex h-10 w-10 items-center justify-center rounded-full border transition-colors duration-300 md:hidden ${open ? "border-brand bg-brand text-white" : "border-line text-ink hover:bg-frost"}`}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              {open ? <X className="h-4 w-4" strokeWidth={1.5} /> : <Menu className="h-4 w-4" strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile menu: full-height navy sheet under the header; links slide in one after another */}
      <div
        id="mobile-menu"
        className={`fixed inset-x-0 bottom-0 top-[72px] overflow-y-auto bg-brand text-white transition-[clip-path,visibility] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] [scrollbar-width:none] md:hidden ${
          open ? "visible [clip-path:inset(0_0_0_0)]" : "invisible [clip-path:inset(0_0_100%_0)]"
        }`}
        aria-hidden={!open}
      >
        <Container className="flex min-h-full flex-col py-6">
          <nav aria-label="Mobile">
            <ol>
              {links.map((l, i) => (
                <li
                  key={l.label}
                  className={`border-b border-white/10 transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                  }`}
                  style={{ transitionDelay: open ? `${120 + i * 60}ms` : "0ms" }}
                >
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    tabIndex={open ? 0 : -1}
                    className="group flex items-center gap-4 py-4"
                  >
                    <span className="w-6 font-display text-xs font-semibold text-aqua">0{i + 1}</span>
                    <span className={`flex-1 font-display text-[28px] font-semibold tracking-tight ${isActive(l.href) ? "text-aqua" : "text-white"}`}>
                      {l.label}
                    </span>
                    <ArrowUpRight className="h-5 w-5 text-white/50 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" strokeWidth={1.5} />
                  </Link>
                </li>
              ))}
            </ol>
          </nav>

          <div
            className={`mt-8 grid grid-cols-2 gap-3 transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
            style={{ transitionDelay: open ? `${120 + links.length * 60}ms` : "0ms" }}
          >
            <EnquireButton
              interest="Bulk / OEM"
              arrow={false}
              onClick={() => setOpen(false)}
              className="flex items-center justify-center rounded-full border border-white/30 py-3.5 text-sm font-semibold text-white"
            >
              Bulk / OEM
            </EnquireButton>
            <EnquireButton
              arrow={false}
              onClick={() => setOpen(false)}
              className="flex items-center justify-center rounded-full bg-white py-3.5 text-sm font-semibold text-brand"
            >
              Make an enquiry
            </EnquireButton>
          </div>

          {/* Contact strip */}
          <div
            className={`mt-auto flex items-end justify-between gap-4 border-t border-white/10 pt-6 transition-opacity duration-500 ${open ? "opacity-100" : "opacity-0"}`}
            style={{ transitionDelay: open ? `${200 + links.length * 60}ms` : "0ms" }}
          >
            <div className="space-y-2 text-sm">
              <a href={email.href} tabIndex={open ? 0 : -1} className="flex items-center gap-2 text-white/85">
                <Mail className="h-4 w-4 text-aqua" strokeWidth={1.5} /> {email.label}
              </a>
            </div>
            <div className="flex gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  tabIndex={open ? 0 : -1}
                  aria-label={`${s.label} (opens in a new tab)`}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                    <path d={s.path} fillRule="evenodd" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
}
