"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

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
    if (formData.phone.trim() && !/^\+?[0-9\s\-()]{10,15}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Please enter a message";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");
    // Simulate API request delay
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus("success");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch {
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
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone number"
              className={`w-full rounded-lg border px-4 py-3 text-[15px] outline-none transition-all placeholder:text-ink/30 ${
                errors.phone
                  ? "border-red-500 bg-red-50/20 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                  : "border-ink/10 focus:border-royal focus:ring-1 focus:ring-royal"
              }`}
            />
            {errors.phone && (
              <p className="mt-1.5 flex items-center gap-1 text-xs text-red-500 font-semibold">
                <AlertCircle className="h-3 w-3" />
                {errors.phone}
              </p>
            )}
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

        {status === "error" && (
          <div className="rounded-lg bg-red-50 p-4 border border-red-100 flex items-center gap-3 text-red-700 text-sm">
            <AlertCircle className="h-5 w-5 shrink-0" />
            <span>Something went wrong. Please check your network and try again.</span>
          </div>
        )}

        <button
          type="submit"
          disabled={status === "submitting"}
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
