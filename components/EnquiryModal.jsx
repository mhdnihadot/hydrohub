"use client";

import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import EnquiryForm from "./EnquiryForm";

const EXIT_MS = 280;

// Open from anywhere with openEnquiry() (see EnquireButton) — optionally pre-selecting a product.
export function openEnquiry(product = "") {
  window.dispatchEvent(new CustomEvent("open-enquiry", { detail: { product } }));
}

export default function EnquiryModal() {
  const [mounted, setMounted] = useState(false); // in the DOM
  const [shown, setShown] = useState(false); // animated "in" state
  const [product, setProduct] = useState("");
  const [formKey, setFormKey] = useState(0);
  const closeTimer = useRef(null);

  useEffect(() => {
    const onOpen = (e) => {
      clearTimeout(closeTimer.current);
      setProduct(e.detail?.product || "");
      setFormKey((k) => k + 1);
      setMounted(true);
      // wait a frame so the "from" state paints before transitioning in
      requestAnimationFrame(() => requestAnimationFrame(() => setShown(true)));
    };
    window.addEventListener("open-enquiry", onOpen);
    return () => window.removeEventListener("open-enquiry", onOpen);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const onKey = (e) => {
      if (e.key !== "Escape") return;
      setShown(false);
      clearTimeout(closeTimer.current);
      closeTimer.current = setTimeout(() => setMounted(false), EXIT_MS);
    };
    document.documentElement.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.documentElement.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [mounted]);

  const close = () => {
    setShown(false);
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setMounted(false), EXIT_MS);
  };

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-end justify-center sm:items-center sm:p-6">
      {/* dark linear backdrop — adjust the /opacity values to taste (no blur) */}
      <div
        className={`absolute inset-0 bg-gradient-to-b from-navy-deep/55 to-navy-deep/85 transition-opacity ease-out ${
          shown ? "opacity-100 duration-300" : "opacity-0 duration-200"
        }`}
        onClick={close}
      />

      {/* Phone: bottom sheet slides up. Larger screens: gentle rise + scale + fade. */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="enquiry-title"
        data-lenis-prevent
        className={`relative max-h-[92dvh] w-full max-w-xl overflow-y-auto rounded-t-3xl bg-white p-6 transition-[transform,opacity] sm:rounded-3xl sm:p-8 ${
          shown
            ? "translate-y-0 opacity-100 duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] sm:scale-100"
            : "translate-y-full duration-[280ms] ease-[cubic-bezier(0.4,0,1,1)] sm:translate-y-4 sm:scale-[0.97] sm:opacity-0"
        }`}
      >
        <div className="mb-6 flex items-start justify-between gap-4 border-b border-line pb-5">
          <div>
            <span className="text-xs font-medium uppercase tracking-wider text-brand">Free water test included</span>
            <h2 id="enquiry-title" className="mt-1 text-2xl font-semibold tracking-tight text-ink">
              Make an enquiry
            </h2>
            <p className="mt-1 text-sm text-muted">Share a few details — we reply within one working day.</p>
          </div>
          <button
            onClick={close}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line text-ink transition-colors hover:bg-frost"
            aria-label="Close"
          >
            <X className="h-4 w-4" strokeWidth={1.5} />
          </button>
        </div>
        <EnquiryForm key={formKey} defaultProduct={product} onDone={close} compact />
      </div>
    </div>
  );
}
