"use client";

import { useState } from "react";
import {
  ArrowRight,
  CircleCheck,
  Loader2,
  ShowerHead,
  Filter,
  Sparkles,
  WashingMachine,
  Factory,
  Wrench,
  Flower2,
  Citrus,
  Atom,
  Droplets,
  Container,
  CookingPot,
  CloudRain,
  Phone,
  MessageCircle,
  Mail,
} from "lucide-react";
import { products } from "@/data/products";

// Icon per product (falls back to a filter icon)
const productIcons = {
  "shower-tap-filter": ShowerHead,
  "replacement-cartridge": Filter,
  "hard-water-shampoo": Sparkles,
  "aroma-flavour-1": Flower2,
  "aroma-flavour-2": Flower2,
  "vitamin-c-cartridge": Citrus,
  "hydrogen-balls": Atom,
  "alkaline-media": Droplets,
  "washing-machine-filter": WashingMachine,
  "water-tank-sink-filter": Container,
  "kitchen-tap-filter": CookingPot,
  "rainwater-harvesting-system": CloudRain,
};

// Options: the two OEM services, then every product. `value` is what gets sent.
const interests = [
  { value: "Bulk / OEM", Icon: Factory },
  { value: "Custom design", Icon: Wrench },
  ...products.map((p) => ({ value: p.name, label: p.name.replace(/^Hydro Hub /, ""), Icon: productIcons[p.slug] || Filter })),
];

const contactModes = [
  { label: "Call", Icon: Phone },
  { label: "WhatsApp", Icon: MessageCircle },
  { label: "Email", Icon: Mail },
];

const fieldCls =
  "h-12 w-full rounded-xl border border-transparent bg-frost px-4 text-base text-ink placeholder:text-muted/70 outline-none transition-colors focus:border-brand focus:bg-white";

function Label({ children, optional }) {
  return (
    <span className="mb-2 flex items-center justify-between text-xs font-medium text-ink">
      {children}
      {optional && <span className="font-normal text-muted">Optional</span>}
    </span>
  );
}

// Enquiry form: what they need (services + products), name, phone, preferred contact, email, message.
export default function EnquiryForm({ defaultProduct = "", defaultInterest = "", onDone, compact = false }) {
  // Several options can be picked (OEM buyers often want more than one product)
  const [picked, setPicked] = useState(() => [defaultInterest, defaultProduct].filter(Boolean));
  const toggle = (value) => setPicked((p) => (p.includes(value) ? p.filter((v) => v !== value) : [...p, value]));
  const [contact, setContact] = useState("Call");
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [error, setError] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    const payload = Object.fromEntries(new FormData(e.currentTarget).entries());
    payload.interest = picked.join(", ");
    payload.product = picked.filter((v) => products.some((p) => p.name === v)).join(", ");
    payload.contact = contact;

    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (!res.ok || !json.success) throw new Error(json.message || "Something went wrong");
      setStatus("sent");
    } catch (err) {
      setError(err.message);
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="flex flex-col items-center py-12 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-sky text-brand">
          <CircleCheck className="h-7 w-7" strokeWidth={1.5} />
        </span>
        <h3 className="mt-5 text-2xl font-semibold tracking-tight text-ink">Thank you — we&apos;ve got it</h3>
        <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted">
          The Hydro Hub team will get back to you by {contact === "Email" ? "email" : contact === "WhatsApp" ? "WhatsApp" : "phone"} within one working day.
        </p>
        {onDone && (
          <button onClick={onDone} className="mt-7 rounded-full border border-line px-6 py-2.5 text-sm font-semibold text-ink hover:border-ink/30">
            Close
          </button>
        )}
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      {/* 1. What do you need? */}
      <fieldset>
        <legend className="mb-3 flex w-full items-center justify-between text-xs font-medium text-ink">
          What are you looking for?
          <span className="font-normal text-muted">Pick any</span>
        </legend>
        {/* Chips wrap and stretch, so every row fills the full width on any screen */}
        <div className="flex flex-wrap gap-2">
          {interests.map(({ value, label = value, Icon }) => {
            const active = picked.includes(value);
            return (
              <button
                type="button"
                key={value}
                onClick={() => toggle(value)}
                aria-pressed={active}
                className={`flex min-h-11 flex-auto items-center gap-2 rounded-xl border px-3 py-2.5 text-left text-xs font-medium transition-colors duration-300 ease-out ${
                  active ? "border-brand bg-sky text-ink" : "border-line bg-white text-ink hover:border-ink/25"
                }`}
              >
                <Icon className={`h-4 w-4 shrink-0 transition-colors duration-300 ${active ? "text-brand" : "text-muted"}`} strokeWidth={1.5} />
                {label}
              </button>
            );
          })}
        </div>
      </fieldset>

      {/* 2. Your details */}
      <div className={`grid gap-4 ${compact ? "sm:grid-cols-2" : "sm:grid-cols-2"}`}>
        <label className="block">
          <Label>Full name</Label>
          <input name="name" required minLength={2} autoComplete="name" placeholder="Your name" className={fieldCls} />
        </label>
        <label className="block">
          <Label>Phone</Label>
          <input
            name="phone"
            required
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            pattern="[0-9+()\s-]{7,20}"
            placeholder="+91 98765 43210"
            className={fieldCls}
          />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block sm:col-span-2">
          <Label>Email</Label>
          <input name="email" type="email" required autoComplete="email" placeholder="you@example.com" className={fieldCls} />
        </label>
      </div>

      <fieldset>
        <legend className="mb-2 text-xs font-medium text-ink">Best way to reach you</legend>
        <div className="relative grid grid-cols-3 rounded-xl bg-frost p-1">
          {/* sliding highlight */}
          <span
            aria-hidden="true"
            className="absolute bottom-1 left-1 top-1 rounded-lg bg-white ring-1 ring-line transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{
              width: "calc((100% - 0.5rem) / 3)",
              transform: `translateX(${contactModes.findIndex((m) => m.label === contact) * 100}%)`,
            }}
          />
          {contactModes.map(({ label, Icon }) => (
            <button
              type="button"
              key={label}
              onClick={() => setContact(label)}
              aria-pressed={contact === label}
              className={`relative z-10 flex h-10 items-center justify-center gap-1.5 rounded-lg text-xs font-medium transition-colors duration-300 ${
                contact === label ? "text-ink" : "text-muted hover:text-ink"
              }`}
            >
              <Icon className="h-3.5 w-3.5" strokeWidth={1.5} />
              {label}
            </button>
          ))}
        </div>
      </fieldset>

      <label className="block">
        <Label optional>Message</Label>
        <textarea
          name="message"
          rows={compact ? 3 : 4}
          maxLength={1000}
          placeholder="Tell us a little about your space or what you need"
          className={`${fieldCls} h-auto resize-none py-3`}
        />
      </label>

      {status === "error" && <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p>}

      <div className="flex flex-col gap-3 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs leading-relaxed text-muted sm:max-w-[16rem]">
          We only use your details to reply to this enquiry. No spam.
        </p>
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-brand px-7 text-sm font-semibold text-white transition-colors hover:bg-brand-hover disabled:opacity-70"
        >
          {status === "sending" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" strokeWidth={1.5} /> Sending…
            </>
          ) : (
            <>
              Send enquiry <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
