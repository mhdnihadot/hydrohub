"use client";

import { useState } from "react";
import { ArrowRight, CircleCheck, Loader2 } from "lucide-react";
import { products } from "@/data/products";

const interests = ["Purifier", "Dispenser", "Filter", "Bottles", "Office / bulk", "Service & repair"];
const interestFor = { purifiers: "Purifier", dispensers: "Dispenser", filters: "Filter", bottles: "Bottles" };

const inputCls =
  "w-full rounded-2xl border border-line bg-white px-4 py-3 text-sm text-ink placeholder:text-muted/70 outline-none transition focus:border-brand focus:ring-4 focus:ring-brand/10";

// Minimal enquiry form: name, phone, email, interest chips, product (optional), message.
export default function EnquiryForm({ defaultProduct = "", onDone, compact = false }) {
  const [interest, setInterest] = useState(
    () => interestFor[products.find((p) => p.name === defaultProduct)?.category] || ""
  );
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [error, setError] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());
    payload.interest = interest;

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
      <div className="flex flex-col items-center py-10 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-sky text-brand">
          <CircleCheck className="h-7 w-7" strokeWidth={1.5} />
        </span>
        <h3 className="mt-5 text-2xl font-semibold tracking-tight text-ink">Thanks — we&apos;ve got it!</h3>
        <p className="mt-2 max-w-xs text-sm text-muted">A HydroHub water expert will call you back within one working day.</p>
        {onDone && (
          <button onClick={onDone} className="mt-6 rounded-full border border-line px-5 py-2.5 text-sm font-semibold text-ink hover:bg-frost">
            Close
          </button>
        )}
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className={`grid gap-4 ${compact ? "" : "sm:grid-cols-2"}`}>
        <label className="block">
          <span className="mb-1.5 block text-xs font-medium text-muted">Full name *</span>
          <input name="name" required minLength={2} autoComplete="name" placeholder="Your name" className={inputCls} />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-xs font-medium text-muted">Phone *</span>
          <input
            name="phone"
            required
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            pattern="[0-9+()\s-]{7,20}"
            placeholder="+971 50 123 4567"
            className={inputCls}
          />
        </label>
      </div>

      <label className="block">
        <span className="mb-1.5 block text-xs font-medium text-muted">Email</span>
        <input name="email" type="email" autoComplete="email" placeholder="you@example.com" className={inputCls} />
      </label>

      <div>
        <span className="mb-2 block text-xs font-medium text-muted">I&apos;m interested in</span>
        <div className="flex flex-wrap gap-2">
          {interests.map((i) => (
            <button
              type="button"
              key={i}
              onClick={() => setInterest(interest === i ? "" : i)}
              className={`rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors ${
                interest === i ? "border-brand bg-brand text-white" : "border-line bg-white text-ink hover:border-brand/40 hover:bg-frost"
              }`}
            >
              {i}
            </button>
          ))}
        </div>
      </div>

      <label className="block">
        <span className="mb-1.5 block text-xs font-medium text-muted">Product (optional)</span>
        <select name="product" defaultValue={defaultProduct} className={`${inputCls} appearance-none`}>
          <option value="">Not sure yet</option>
          {products.map((p) => (
            <option key={p.slug} value={p.name}>
              {p.name}
            </option>
          ))}
        </select>
      </label>

      <label className="block">
        <span className="mb-1.5 block text-xs font-medium text-muted">Message</span>
        <textarea name="message" rows={compact ? 3 : 4} maxLength={1000} placeholder="Tell us a little about your space or needs" className={`${inputCls} resize-none`} />
      </label>

      {status === "error" && <p className="text-sm text-red-600">{error}</p>}

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-brand-hover disabled:opacity-70 sm:w-auto"
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
      <p className="text-[11px] text-muted">We only use your details to reply to this enquiry.</p>
    </form>
  );
}
