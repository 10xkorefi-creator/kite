import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import {
  Mail,
  ShieldAlert,
  Clock,
  LayoutDashboard,
  ShieldCheck,
  HelpCircle,
  Activity
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Financial Management Dashboard Support | Kite Finance",
  description: "Get technical support for the Kite Financial Management Dashboard. Inquire about bank statement linking, data aggregation, expense tracking, and security protocols.",
  alternates: {
    canonical: "https://www.kitefinance.in/contact/pfm",
  },
  openGraph: {
    title: "Contact Financial Management Dashboard Support | Kite Finance",
    description: "Get technical support for the Kite Financial Management Dashboard. Inquire about bank statement linking, data aggregation, expense tracking, and security protocols.",
    url: "https://www.kitefinance.in/contact/pfm",
    siteName: "Kite Finance",
    locale: "en_IN",
    type: "website",
  },
};

const faqs = [
  {
    q: "What is the Financial Management Dashboard?",
    a: "It is an analytics tool designed to help you organize and review your financial insights in one consolidated view."
  },
  {
    q: "How is my information handled?",
    a: "We prioritize security and privacy. Data is processed in accordance with our standard privacy protocols and applicable guidelines."
  },
  {
    q: "How can I get assistance?",
    a: "For any questions or troubleshooting, you can get in touch with our team using the contact options provided on this page."
  }
];

export default function ContactPfmPage() {
  return (
    <>
      <Navbar />

      <main id="main-content" className="flex-grow">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[#0b2c5c] to-[#0f2a4a] py-16 text-white sm:py-20">
          <div className="absolute inset-0 pointer-events-none select-none">
            <img src="/decor-sparkles.svg" alt="" className="absolute left-8 top-8 w-16 opacity-10" />
            <img src="/decor-kite-string.svg" alt="" className="absolute right-8 bottom-8 w-24 opacity-10 rotate-12" />
          </div>

          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 relative z-10">
            <div className="flex flex-wrap items-center justify-center gap-3 mb-4 select-none">
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold text-emerald-300 border border-emerald-500/20">
                <LayoutDashboard className="h-3.5 w-3.5" />
                Financial Management Dashboard Tech Support
              </div>
              <span className="inline-flex items-center rounded-full bg-amber-500/20 px-3 py-1 text-xs font-bold text-amber-300 border border-amber-500/30">
                Coming Soon
              </span>
            </div>
            <h1 className="font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Contact for Financial Management Dashboard
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base text-white/80 leading-relaxed font-medium">
              Have any questions?
              Let our dashboard support team help you            </p>
          </div>
        </section>

        {/* Main Content Layout */}
        <section className="py-20 bg-slate-50/50">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-5 items-start">

              {/* Left Column: Coordinates & FAQs */}
              <div className="lg:col-span-2 space-y-10">
                <div>
                  <h2 className="font-display text-2xl font-bold text-ink">
                    Dashboard Support
                  </h2>
                  <p className="mt-2 text-sm text-ink/65 leading-relaxed">
                    Contact our tech and integration assistance desk.
                  </p>
                </div>

                <div className="space-y-6">
                  {/* Email Support */}
                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white border border-ink/5 shadow-sm text-emerald-500">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-ink uppercase tracking-wider">Tech Desk Email</h4>
                      <p className="mt-1 text-sm">
                        <a href="mailto:tech@kitefinance.in" className="text-emerald-500 hover:underline font-bold">
                          tech@kitefinance.in
                        </a>
                      </p>
                      <span className="text-[11px] text-ink/50 font-medium flex items-center gap-1.5 mt-0.5">
                        <Clock className="h-3 w-3" />
                        Mon - Sat, 9:30 AM - 6:30 PM
                      </span>
                    </div>
                  </div>

                  {/* Security Compliance Card */}
                  <div className="rounded-2xl border border-emerald-500/10 bg-emerald-50/30 p-6 space-y-4">
                    <div className="flex items-center gap-2.5 text-emerald-700">
                      <ShieldCheck className="h-5.5 w-5.5 shrink-0" />
                      <h4 className="font-bold text-sm uppercase tracking-wider">Privacy Guaranteed</h4>
                    </div>
                    <p className="text-xs text-ink/75 leading-relaxed">
                      We operate strictly secure within the RBI-approved framework. Consent is fully granular, revocable, and data transmission uses secure end-to-end encrypted pipelines.
                    </p>
                  </div>
                </div>

                {/* FAQs Sub-section */}
                <div className="border-t border-slate-200/80 pt-10">
                  <h3 className="font-display text-xl font-bold text-ink mb-6 flex items-center gap-2">
                    <HelpCircle className="h-5 w-5 text-emerald-500/80" />
                    Financial Management Dashboard FAQs
                  </h3>
                  <div className="space-y-6">
                    {faqs.map((faq) => (
                      <div key={faq.q} className="text-sm">
                        <h4 className="font-bold text-ink mb-1.5">{faq.q}</h4>
                        <p className="text-ink/70 leading-relaxed">{faq.a}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Pre-filled Form */}
              <div className="lg:col-span-3">
                <ContactForm defaultService="pfm" />
              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
