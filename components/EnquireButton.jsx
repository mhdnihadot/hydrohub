"use client";

import { ArrowRight } from "lucide-react";
import { openEnquiry } from "./EnquiryModal";

export default function EnquireButton({ product = "", interest = "", children = "Enquire now", className = "", arrow = true, onClick }) {
  return (
    <button
      type="button"
      onClick={() => {
        onClick?.();
        openEnquiry(product, interest);
      }}
      className={className}
    >
      {children}
      {arrow && <ArrowRight className="h-4 w-4" strokeWidth={1.5} />}
    </button>
  );
}
