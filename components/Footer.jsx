import Link from "next/link";
import Container from "./Container";
import { Logo } from "./Navbar";
import { categories } from "@/data/products";

const company = [
  { label: "About us", href: "/about" },
  { label: "Gallery", href: "/#gallery" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/#enquiry" },
];

// lucide v1 ships no brand icons, so these are small inline marks.
const socials = [
  {
    label: "Facebook",
    path: "M14 8h2.5V4.5H14c-2.2 0-4 1.8-4 4V11H8v3.5h2V20h3.5v-5.5H16l.5-3.5h-3V8.5c0-.3.2-.5.5-.5Z",
  },
  {
    label: "Instagram",
    path: "M8 3.5h8A4.5 4.5 0 0 1 20.5 8v8a4.5 4.5 0 0 1-4.5 4.5H8A4.5 4.5 0 0 1 3.5 16V8A4.5 4.5 0 0 1 8 3.5Zm4 5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm4.75-1.25a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z",
  },
  {
    label: "WhatsApp",
    path: "M12 3.5a8.5 8.5 0 0 0-7.3 12.8L3.5 20.5l4.3-1.1A8.5 8.5 0 1 0 12 3.5Zm4.6 11.9c-.2.6-1.1 1.1-1.6 1.2-.4.1-1 .1-1.6-.1a14 14 0 0 1-1.5-.6 11.2 11.2 0 0 1-4.3-3.8c-.5-.7-.9-1.6-.9-2.5s.5-1.4.7-1.6c.2-.2.4-.3.6-.3h.4c.1 0 .3 0 .5.4l.7 1.6c.1.1.1.3 0 .4l-.3.5-.3.3c-.1.1-.2.3-.1.5.2.3.7 1.1 1.4 1.8.9.8 1.7 1.1 2 1.2.2.1.4.1.5-.1l.7-.9c.2-.2.3-.2.5-.1l1.5.7c.2.1.4.2.4.3.1.1.1.6-.1 1.2Z",
  },
];

export default function Footer() {
  return (
    <footer className="pb-4 sm:pb-6">
      <Container>
        <div className="rounded-3xl bg-navy px-6 py-12 text-white sm:px-10 lg:px-14 lg:py-16">
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-12">
            <div className="col-span-2 sm:col-span-3 lg:col-span-5">
              <Logo light />
              <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/60">
                Water purifiers, dispensers, filters and bottles for homes and offices — installed in 24 hours and looked
                after for life.
              </p>
              <div className="mt-6 flex gap-2">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href="#"
                    aria-label={s.label}
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
              <ul className="mt-4 space-y-3 text-sm text-white/60">
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
              <ul className="mt-4 space-y-3 text-sm text-white/60">
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
              <ul className="mt-4 space-y-3 text-sm text-white/60">
                <li>
                  <a href="tel:+18002837144" className="transition-colors hover:text-white">
                    +1 (800) 283-7144
                  </a>
                </li>
                <li>
                  <a href="mailto:hello@hydrohub.io" className="transition-colors hover:text-white">
                    hello@hydrohub.io
                  </a>
                </li>
                <li>Financial Center Blvd, Suite 2104</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
            <p>© HydroHub. All rights reserved.</p>
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
