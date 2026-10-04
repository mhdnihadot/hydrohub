import { Phone, Mail, Clock, MapPin } from "lucide-react";
import Container from "./Container";
import EnquiryForm from "./EnquiryForm";
import { Reveal, TextReveal } from "./motion";

const contacts = [
  { Icon: Phone, label: "Call us", value: "+1 (800) 283-7144", href: "tel:+18002837144" },
  { Icon: Mail, label: "Email", value: "hello@hydrohub.io", href: "mailto:hello@hydrohub.io" },
  { Icon: Clock, label: "Hours", value: "Sat–Thu · 8am – 8pm" },
  { Icon: MapPin, label: "Showroom", value: "Financial Center Blvd, Suite 2104" },
];

export default function EnquirySection() {
  return (
    <section id="enquiry" className="scroll-mt-28 pb-16 sm:pb-24">
      <Container>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
          <Reveal variant="left" className="min-w-0 lg:col-span-5">
            <div className="flex h-full flex-col justify-between gap-10 rounded-3xl bg-navy p-6 text-white sm:p-10">
              <div>
                <TextReveal
                  lines={["Let's find the right", "water for *you*"]}
                  accentClass="text-aqua"
                  className="text-[30px] font-semibold leading-[1.1] tracking-[-0.02em] sm:text-4xl"
                />
                <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/65">
                  Leave your details and a HydroHub expert will call you back within one working day — including a free
                  water test at your place.
                </p>
                <ol className="mt-8 space-y-4 border-t border-white/10 pt-6">
                  {["We call you back", "Free on-site water test", "Installed within 24 hours"].map((step, i) => (
                    <li key={step} className="flex items-center gap-3 text-sm">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/25 text-[11px] font-semibold">
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
              <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1">
                {contacts.map(({ Icon, label, value, href }) => (
                  <li key={label} className="flex items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-aqua">
                      <Icon className="h-4 w-4" strokeWidth={1.5} />
                    </span>
                    <div className="min-w-0">
                      <div className="text-[11px] text-white/50">{label}</div>
                      {href ? (
                        <a href={href} className="text-sm font-medium hover:text-aqua">
                          {value}
                        </a>
                      ) : (
                        <div className="text-sm font-medium">{value}</div>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal variant="right" delay={150} className="min-w-0 lg:col-span-7">
            <div className="h-full rounded-3xl border border-line bg-white p-6 sm:p-10">
              <h3 className="text-xl font-semibold tracking-tight text-ink">Enquiry form</h3>
              <p className="mb-6 mt-1 text-sm text-muted">It takes less than a minute.</p>
              <EnquiryForm />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
