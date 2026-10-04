"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import EnquiryForm from "./EnquiryForm";

// Open from anywhere with openEnquiry() (see EnquireButton) — optionally pre-selecting a product.
export function openEnquiry(product = "") {
  window.dispatchEvent(new CustomEvent("open-enquiry", { detail: { product } }));
}

export default function EnquiryModal() {
  const [open, setOpen] = useState(false);
  const [product, setProduct] = useState("");
  const [formKey, setFormKey] = useState(0);

  useEffect(() => {
    const onOpen = (e) => {
      setProduct(e.detail?.product || "");
      setFormKey((k) => k + 1);
      setOpen(true);
    };
    window.addEventListener("open-enquiry", onOpen);
    return () => window.removeEventListener("open-enquiry", onOpen);
  }, []);

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

  return (
    <div
      className={`fixed inset-0 z-[60] flex items-end justify-center transition-opacity duration-300 sm:items-center sm:p-6 ${
        open ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
      aria-hidden={!open}
    >
      <div className="absolute inset-0 bg-navy-deep/50 backdrop-blur-sm" onClick={() => setOpen(false)} />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="enquiry-title"
        data-lenis-prevent
        className={`relative max-h-[92dvh] w-full max-w-lg overflow-y-auto rounded-t-[28px] bg-white p-6 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] sm:p-8 ${
          open ? "translate-y-0" : "translate-y-10"
        }`}
      >
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <h2 id="enquiry-title" className="text-2xl font-semibold tracking-tight text-ink">
              Make an enquiry
            </h2>
            <p className="mt-1 text-sm text-muted">Share a few details and we&apos;ll call you back.</p>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line text-ink hover:bg-frost"
            aria-label="Close"
          >
            <X className="h-4 w-4" strokeWidth={1.5} />
          </button>
        </div>
        {open && <EnquiryForm key={formKey} defaultProduct={product} onDone={() => setOpen(false)} compact />}
      </div>
    </div>
  );
}
