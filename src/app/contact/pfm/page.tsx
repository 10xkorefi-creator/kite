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
  title: "Contact PFM Dashboard Support | Kite Finance",
  description: "Get technical support for the Kite PFM Dashboard. Inquire about bank statement linking, data aggregation, expense tracking, and security protocols.",
  alternates: {
    canonical: "https://www.kitefinance.in/contact/pfm",
  },
  openGraph: {
    title: "Contact PFM Dashboard Support | Kite Finance",
    description: "Get technical support for the Kite PFM Dashboard. Inquire about bank statement linking, data aggregation, expense tracking, and security protocols.",
    url: "https://www.kitefinance.in/contact/pfm",
    siteName: "Kite Finance",
    locale: "en_IN",
    type: "website",
  },
};

const faqs = [
  {
    q: "How do I link my bank accounts to the PFM Dashboard?",
    a: "You can securely link your eligible financial accounts through our partnered services. Simply follow the on-screen instructions to provide your consent for securely sharing your financial information to enable the PFM Dashboard."
  },
  {
    q: "Is my bank credential or statement data safe?",
    a: "Yes. Your financial information is securely handled and protected using appropriate security measures. The information shared is used only to provide and improve the PFM Dashboard and related services. Kite Finance cannot initiate transactions or access your funds"
  },
  {
    q: "Why are some of my transactions categorized incorrectly?",
    a: "Your transactions are automatically categorized to help you better understand your finances. If a transaction is categorized incorrectly, you can update the category, and the dashboard will use your input to improve future categorization."
  },
  {
    q: "How do I revoke consent for data sharing?",
    a: "You remain in control of your financial information. You can withdraw your consent at any time through the partnered service used to provide your consent. Once your consent is withdrawn, no new financial information will be accessed."
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
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold text-emerald-300 border border-emerald-500/20 mb-4 select-none">
              <LayoutDashboard className="h-3.5 w-3.5" />
              PFM Dashboard Tech Support
            </div>
            <h1 className="font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Contact PFM Dashboard
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base text-white/80 leading-relaxed font-medium">
              Having issues linking bank statements, tracking expenses, or have security questions? Let our dashboard support team help you.
            </p>
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
                    PFM Dashboard FAQs
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
