"use client";

import React from "react";
import { useApplyModal } from "@/context/ApplyModalContext";

interface ProductCtaProps {
  ctaText: string;
  productTitle: string;
}

export default function ProductCta({ ctaText, productTitle }: ProductCtaProps) {
  const { openModal } = useApplyModal();

  return (
    <button
      type="button"
      onClick={() => openModal(productTitle)}
      className="inline-block rounded-lg bg-white px-8 py-3.5 text-[15px] font-bold text-[#0b2c5c] shadow-lg shadow-white/10 transition-all hover:scale-[1.02] hover:bg-slate-50 active:scale-[0.98] cursor-pointer"
    >
      {ctaText}
    </button>
  );
}
