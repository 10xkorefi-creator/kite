"use client";

import React, { createContext, useContext, useState } from "react";

interface ApplyModalContextType {
  isOpen: boolean;
  prefilledProduct: string | null;
  openModal: (productName?: string) => void;
  closeModal: () => void;
}

const ApplyModalContext = createContext<ApplyModalContextType | undefined>(undefined);

export function ApplyModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [prefilledProduct, setPrefilledProduct] = useState<string | null>(null);

  const openModal = (productName?: string) => {
    setPrefilledProduct(productName || null);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setPrefilledProduct(null);
  };

  return (
    <ApplyModalContext.Provider value={{ isOpen, prefilledProduct, openModal, closeModal }}>
      {children}
    </ApplyModalContext.Provider>
  );
}

export function useApplyModal() {
  const context = useContext(ApplyModalContext);
  if (context === undefined) {
    throw new Error("useApplyModal must be used within an ApplyModalProvider");
  }
  return context;
}
