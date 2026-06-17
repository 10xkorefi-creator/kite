"use client";

import React from "react";
import { useApplyModal } from "@/context/ApplyModalContext";

export default function CoLendingCta() {
  const { openModal } = useApplyModal();

  return (
    <button
      type="button"
      onClick={() => openModal()}
      className="inline-flex items-center justify-center rounded-lg bg-coral px-10 py-4 text-base font-bold text-white shadow-md shadow-coral/15 transition-all hover:scale-[1.02] hover:bg-coral/95 active:scale-[0.98] cursor-pointer"
    >
      Apply Now
    </button>
  );
}
