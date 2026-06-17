"use client";

import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { useApplyModal } from "@/context/ApplyModalContext";

export default function ApplyModal() {
  const { isOpen, prefilledProduct, closeModal } = useApplyModal();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    businessName: "",
    loanAmount: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [agreed, setAgreed] = useState(true);

  // Reset state on open/close
  useEffect(() => {
    if (isOpen) {
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        businessName: "",
        loanAmount: "",
      });
      setStatus("idle");
      setErrors({});
      setAgreed(true);
      // Disable background scroll
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\+?[0-9\s\-()]{10,15}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }
    if (!formData.businessName.trim()) {
      newErrors.businessName = "Business name is required";
    }
    if (!formData.loanAmount.trim()) {
      newErrors.loanAmount = "Loan amount is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate() || !agreed) return;

    setStatus("submitting");
    try {
      // Simulate API submit delay
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="absolute inset-0 bg-ink/50 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-lg overflow-hidden rounded-xl border border-ink/5 bg-white p-6 shadow-2xl z-10"
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              aria-label="Close modal"
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-lg text-ink/40 hover:bg-slate-50 hover:text-ink transition-colors cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>

            {status === "success" ? (
              <div className="text-center py-8">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-500 mb-6">
                  <CheckCircle2 className="h-9 w-9" />
                </div>
                <h3 className="font-display text-2xl font-bold text-ink mb-3">
                  Application Received!
                </h3>
                <p className="text-sm text-ink/65 max-w-sm mx-auto mb-8 leading-relaxed">
                  Thank you for applying. Our credit underwriting team is verifying your details. We will reach out to you within 72 hours.
                </p>
                <button
                  onClick={closeModal}
                  className="rounded-lg bg-coral px-8 py-3 text-sm font-bold text-white shadow-md transition-all hover:scale-[1.02] hover:bg-coral/95 active:scale-[0.98] cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <div>
                <h3 className="font-display text-2xl font-bold text-ink leading-tight">
                  {prefilledProduct ? `Apply for ${prefilledProduct}` : "Apply for Funding"}
                </h3>
                <p className="text-xs text-ink/50 mt-1 mb-6">
                  Enter your business details below to check your limit eligibility.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4 text-left">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {/* First Name */}
                    <div>
                      <label htmlFor="modal-firstName" className="block text-xs font-bold text-ink/75 mb-1.5">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="modal-firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="First name"
                        className={`w-full rounded-lg border px-3.5 py-2.5 text-sm outline-none transition-all placeholder:text-ink/30 ${
                          errors.firstName ? "border-red-500 bg-red-50/20" : "border-ink/10 focus:border-royal"
                        }`}
                      />
                      {errors.firstName && (
                        <p className="mt-1 flex items-center gap-1 text-[11px] text-red-500 font-semibold">
                          <AlertCircle className="h-3 w-3" />
                          {errors.firstName}
                        </p>
                      )}
                    </div>

                    {/* Last Name */}
                    <div>
                      <label htmlFor="modal-lastName" className="block text-xs font-bold text-ink/75 mb-1.5">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="modal-lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Last name"
                        className="w-full rounded-lg border border-ink/10 px-3.5 py-2.5 text-sm outline-none focus:border-royal placeholder:text-ink/30"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {/* Email */}
                    <div>
                      <label htmlFor="modal-email" className="block text-xs font-bold text-ink/75 mb-1.5">
                        Business Email *
                      </label>
                      <input
                        type="email"
                        id="modal-email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className={`w-full rounded-lg border px-3.5 py-2.5 text-sm outline-none transition-all placeholder:text-ink/30 ${
                          errors.email ? "border-red-500 bg-red-50/20" : "border-ink/10 focus:border-royal"
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1 flex items-center gap-1 text-[11px] text-red-500 font-semibold">
                          <AlertCircle className="h-3 w-3" />
                          {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="modal-phone" className="block text-xs font-bold text-ink/75 mb-1.5">
                        Mobile Number *
                      </label>
                      <input
                        type="tel"
                        id="modal-phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phone number"
                        className={`w-full rounded-lg border px-3.5 py-2.5 text-sm outline-none transition-all placeholder:text-ink/30 ${
                          errors.phone ? "border-red-500 bg-red-50/20" : "border-ink/10 focus:border-royal"
                        }`}
                      />
                      {errors.phone && (
                        <p className="mt-1 flex items-center gap-1 text-[11px] text-red-500 font-semibold">
                          <AlertCircle className="h-3 w-3" />
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {/* Business Name */}
                    <div>
                      <label htmlFor="modal-businessName" className="block text-xs font-bold text-ink/75 mb-1.5">
                        Registered Business Name *
                      </label>
                      <input
                        type="text"
                        id="modal-businessName"
                        name="businessName"
                        value={formData.businessName}
                        onChange={handleChange}
                        placeholder="Legal entity name"
                        className={`w-full rounded-lg border px-3.5 py-2.5 text-sm outline-none transition-all placeholder:text-ink/30 ${
                          errors.businessName ? "border-red-500 bg-red-50/20" : "border-ink/10 focus:border-royal"
                        }`}
                      />
                      {errors.businessName && (
                        <p className="mt-1 flex items-center gap-1 text-[11px] text-red-500 font-semibold">
                          <AlertCircle className="h-3 w-3" />
                          {errors.businessName}
                        </p>
                      )}
                    </div>

                    {/* Loan Amount */}
                    <div>
                      <label htmlFor="modal-loanAmount" className="block text-xs font-bold text-ink/75 mb-1.5">
                        Requested Funding Amount *
                      </label>
                      <input
                        type="text"
                        id="modal-loanAmount"
                        name="loanAmount"
                        value={formData.loanAmount}
                        onChange={handleChange}
                        placeholder="e.g. ₹10 Lakhs"
                        className={`w-full rounded-lg border px-3.5 py-2.5 text-sm outline-none transition-all placeholder:text-ink/30 ${
                          errors.loanAmount ? "border-red-500 bg-red-50/20" : "border-ink/10 focus:border-royal"
                        }`}
                      />
                      {errors.loanAmount && (
                        <p className="mt-1 flex items-center gap-1 text-[11px] text-red-500 font-semibold">
                          <AlertCircle className="h-3 w-3" />
                          {errors.loanAmount}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Privacy Checkbox */}
                  <div className="flex items-start pt-2 px-1">
                    <div className="flex h-5 items-center">
                      <input
                        id="modal-privacy"
                        name="privacy"
                        type="checkbox"
                        checked={agreed}
                        onChange={(e) => setAgreed(e.target.checked)}
                        className="h-4 w-4 rounded border-ink/10 text-royal focus:ring-royal cursor-pointer"
                      />
                    </div>
                    <div className="ml-2.5 text-xs">
                      <label htmlFor="modal-privacy" className="font-semibold text-ink/60 cursor-pointer">
                        I agree to the{" "}
                        <a
                          href="/doc/Privacy%20Policy%20Jayshree%20(New)%20.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-royal hover:underline font-bold"
                        >
                          Privacy Policy
                        </a>{" "}
                        and permit credit evaluation.
                      </label>
                    </div>
                  </div>

                  {status === "error" && (
                    <div className="rounded-lg bg-red-50 p-3.5 border border-red-100 flex items-center gap-2 text-red-700 text-xs font-medium">
                      <AlertCircle className="h-4.5 w-4.5 shrink-0" />
                      <span>An error occurred. Please check your internet connection.</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === "submitting" || !agreed}
                    className="w-full inline-flex items-center justify-center rounded-lg bg-coral py-3.5 text-sm font-bold text-white shadow-lg shadow-coral/15 transition-all hover:scale-[1.01] hover:bg-coral/95 active:scale-[0.99] disabled:opacity-75 disabled:cursor-not-allowed disabled:hover:scale-100 cursor-pointer"
                  >
                    {status === "submitting" ? (
                      <div className="flex items-center gap-2">
                        <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                        <span>Submitting Application...</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Send className="h-4 w-4" />
                        <span>Submit Application</span>
                      </div>
                    )}
                  </button>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
