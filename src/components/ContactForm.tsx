"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
// Client-side direct submission is used here because Web3Forms endpoint is protected by Cloudflare challenge
// which blocks server-side requests in Node environments.

interface ContactFormProps {
  defaultService?: "loans" | "pfm";
}

export default function ContactForm({ defaultService = "loans" }: ContactFormProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    serviceType: defaultService,
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [agreed, setAgreed] = useState(true);

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
    if (formData.phone.trim() && formData.phone.length !== 10) {
      newErrors.phone = "Phone number must be exactly 10 digits";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Please enter a message";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name === "phone") {
      const sanitized = value.replace(/\D/g, "").slice(0, 10);
      setFormData((prev) => ({ ...prev, [name]: sanitized }));
      if (errors[name]) {
        setErrors((prev) => ({ ...prev, [name]: "" }));
      }
      return;
    }
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");
    try {
      const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "984b59c3-f402-4bfe-9d9b-d72a60a2c099";
      const payload = {
        access_key: accessKey,
        subject: `New Contact Form Submission from ${formData.firstName} ${formData.lastName || ""}`,
        from_name: "Kite Finance Website",
        name: `${formData.firstName} ${formData.lastName || ""}`,
        email: formData.email,
        phone: formData.phone ? `+91 ${formData.phone}` : "N/A",
        "Service Type": formData.serviceType === "pfm" ? "Financial Management Dashboard Support" : "Loan Services Support",
        message: formData.message,
      };

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();
      if (response.ok && result.success) {
        setStatus("success");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          serviceType: defaultService,
          message: "",
        });
      } else {
        console.error("Web3Forms API error response:", result);
        setStatus("error");
      }
    } catch (error) {
      console.error("Error submitting contact form:", error);
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-xl bg-white p-6 sm:p-8 shadow-xl border border-ink/5 text-center py-12 sm:py-16 transition-all duration-300">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-500 mb-6">
          <CheckCircle2 className="h-10 w-10" />
        </div>
        <h3 className="font-display text-2xl font-bold text-ink mb-3">
          Message Sent Successfully!
        </h3>
        <p className="text-ink/65 max-w-sm mx-auto mb-8">
          Thank you for reaching out. We have received your inquiry and our team will get back to you shortly.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="rounded-lg bg-coral px-8 py-3 text-sm font-bold text-white shadow-md transition-all hover:scale-[1.02] hover:bg-coral/95 active:scale-[0.98]"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-xl bg-white p-6 sm:p-8 shadow-xl border border-ink/5">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {/* First Name */}
          <div>
            <label htmlFor="firstName" className="block text-sm font-bold text-ink/75 mb-2">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First name"
              className={`w-full rounded-lg border px-4 py-3 text-[15px] outline-none transition-all placeholder:text-ink/30 ${
                errors.firstName
                  ? "border-red-500 bg-red-50/20 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                  : "border-ink/10 focus:border-royal focus:ring-1 focus:ring-royal"
              }`}
            />
            {errors.firstName && (
              <p className="mt-1.5 flex items-center gap-1 text-xs text-red-500 font-semibold">
                <AlertCircle className="h-3 w-3" />
                {errors.firstName}
              </p>
            )}
          </div>

          {/* Last Name */}
          <div>
            <label htmlFor="lastName" className="block text-sm font-bold text-ink/75 mb-2">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last name"
              className="w-full rounded-lg border border-ink/10 px-4 py-3 text-[15px] outline-none transition-all placeholder:text-ink/30 focus:border-royal focus:ring-1 focus:ring-royal"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-bold text-ink/75 mb-2">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className={`w-full rounded-lg border px-4 py-3 text-[15px] outline-none transition-all placeholder:text-ink/30 ${
                errors.email
                  ? "border-red-500 bg-red-50/20 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                  : "border-ink/10 focus:border-royal focus:ring-1 focus:ring-royal"
              }`}
            />
            {errors.email && (
              <p className="mt-1.5 flex items-center gap-1 text-xs text-red-500 font-semibold">
                <AlertCircle className="h-3 w-3" />
                {errors.email}
              </p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-sm font-bold text-ink/75 mb-2">
              Phone
            </label>
            <div className={`flex rounded-lg border overflow-hidden transition-all focus-within:ring-1 ${
              errors.phone
                ? "border-red-500 bg-red-50/20 focus-within:border-red-500 focus-within:ring-red-500"
                : "border-ink/10 focus-within:border-royal focus-within:ring-royal"
            }`}>
              <div className="flex items-center bg-slate-50 px-3.5 border-r border-ink/10 text-ink/50 font-semibold select-none text-[15px]">
                +91
              </div>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="98765 43210"
                className="w-full px-4 py-3 text-[15px] outline-none placeholder:text-ink/30 bg-transparent"
              />
            </div>
            {errors.phone && (
              <p className="mt-1.5 flex items-center gap-1 text-xs text-red-500 font-semibold">
                <AlertCircle className="h-3 w-3" />
                {errors.phone}
              </p>
            )}
          </div>
        </div>

        {/* Service Type Dropdown */}
        <div>
          <label htmlFor="serviceType" className="block text-sm font-bold text-ink/75 mb-2">
            Service Type
          </label>
          <div className="relative">
            <select
              id="serviceType"
              name="serviceType"
              value={formData.serviceType}
              onChange={handleChange}
              className="w-full rounded-lg border border-ink/10 px-4 py-3 text-[15px] outline-none transition-all focus:border-royal focus:ring-1 focus:ring-royal bg-white appearance-none cursor-pointer text-ink font-medium"
            >
              <option value="loans">Loan Services Support</option>
              <option value="pfm">Financial Management Dashboard Support</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-ink/50">
              <svg className="fill-current h-4.5 w-4.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-bold text-ink/75 mb-2">
            Leave us a message...
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            placeholder="Tell us what you're looking for or any questions you have..."
            className={`w-full rounded-lg border px-4 py-3 text-[15px] outline-none transition-all placeholder:text-ink/30 resize-none ${
              errors.message
                ? "border-red-500 bg-red-50/20 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                : "border-ink/10 focus:border-royal focus:ring-1 focus:ring-royal"
            }`}
          />
          {errors.message && (
            <p className="mt-1.5 flex items-center gap-1 text-xs text-red-500 font-semibold">
              <AlertCircle className="h-3 w-3" />
              {errors.message}
            </p>
          )}
        </div>

        {/* Privacy Policy Checkbox */}
        <div className="flex items-start px-1">
          <div className="flex h-5 items-center">
            <input
              id="privacy"
              name="privacy"
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="h-4 w-4 rounded border-ink/10 text-royal focus:ring-royal cursor-pointer"
            />
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor="privacy" className="font-semibold text-ink/70 cursor-pointer">
              I agree to the{" "}
              <a
                href="/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-royal hover:underline font-bold"
              >
                Privacy Policy
              </a>
              .
            </label>
          </div>
        </div>

        {status === "error" && (
          <div className="rounded-lg bg-red-50 p-4 border border-red-100 flex items-center gap-3 text-red-700 text-sm">
            <AlertCircle className="h-5 w-5 shrink-0" />
            <span>Something went wrong. Please check your network and try again.</span>
          </div>
        )}

        <button
          type="submit"
          disabled={status === "submitting" || !agreed}
          className="w-full inline-flex items-center justify-center rounded-lg bg-coral py-4 text-base font-bold text-white shadow-lg shadow-coral/15 transition-all hover:scale-[1.01] hover:bg-coral/95 active:scale-[0.99] disabled:opacity-75 disabled:cursor-not-allowed disabled:hover:scale-100"
        >
          {status === "submitting" ? (
            <div className="flex items-center gap-2">
              <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
              <span>Submitting...</span>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Send className="h-4.5 w-4.5" />
              <span>Submit</span>
            </div>
          )}
        </button>
      </form>
    </div>
  );
}
