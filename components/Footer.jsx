import Link from "next/link";
import Container from "./Container";
import { Logo } from "./Navbar";
import { categories } from "@/data/products";
import { email, socials } from "@/data/contact";

const company = [
  { label: "About us", href: "/about" },
  { label: "How we work", href: "/#process" },
  { label: "Gallery", href: "/#gallery" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/#enquiry" },
];

export default function Footer() {
  return (
    <footer className="pb-4 sm:pb-6">
      <Container>
        <div className="rounded-3xl bg-brand px-6 py-12 text-white sm:px-10 lg:px-14 lg:py-16">
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-12">
            <div className="col-span-2 sm:col-span-3 lg:col-span-5">
              <Logo light className="h-12" />
              <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/80">
                Any water-related product, developed and manufactured for OEM brands. R&amp;D, product development and manufacturing,
                all in-house. Made in India since 2019.
              </p>
              <div className="mt-6 flex gap-2">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${s.label} (opens in a new tab)`}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/80 transition-colors hover:border-white/40 hover:text-white"
                  >
                    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                      <path d={s.path} fillRule="evenodd" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            <div className="lg:col-span-2">
              <h4 className="text-sm font-semibold">Products</h4>
              <ul className="mt-4 space-y-3 text-sm text-white/80">
                {categories.map((c) => (
                  <li key={c.slug}>
                    <Link href={`/products?category=${c.slug}`} className="transition-colors hover:text-white">
                      {c.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-2">
              <h4 className="text-sm font-semibold">Company</h4>
              <ul className="mt-4 space-y-3 text-sm text-white/80">
                {company.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="transition-colors hover:text-white">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1 lg:col-span-3">
              <h4 className="text-sm font-semibold">Get in touch</h4>
              <ul className="mt-4 space-y-3 text-sm text-white/80">
                <li>
                  <a href={email.href} className="break-all transition-colors hover:text-white">
                    {email.label}
                  </a>
                </li>
                <li>
                  <address className="not-italic leading-relaxed">
                    Hydro Hub Industries
                    <br />
                    Site No 03, Survey No 56/2
                    <br />
                    Karigowda Layout, Machohalli Village
                    <br />
                    Bengaluru 560091, Karnataka, India
                  </address>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/70 sm:flex-row sm:items-center sm:justify-between">
            <p>© Hydro Hub Industries. All rights reserved.</p>
            <div className="-my-2 flex gap-1">
              <Link href="/credits" className="px-2 py-3 hover:text-white">
                Image credits
              </Link>
              <a href="#" className="px-2 py-3 hover:text-white">
                Privacy
              </a>
              <a href="#" className="px-2 py-3 hover:text-white">
                Terms
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
