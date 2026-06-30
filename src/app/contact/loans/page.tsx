import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import {
  Mail,
  MapPin,
  Clock,
  Phone,
  FileCheck2,
  HelpCircle
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Loan Services | Kite Finance",
  description: "Get in touch with Kite Finance loan services. Apply or get support for business loans, POS loans, and working capital. Fast approvals & minimal documentation.",
  alternates: {
    canonical: "https://www.kitefinance.in/contact/loans",
  },
  openGraph: {
    title: "Contact Loan Services | Kite Finance",
    description: "Get in touch with Kite Finance loan services. Apply or get support for business loans, POS loans, and working capital. Fast approvals & minimal documentation.",
    url: "https://www.kitefinance.in/contact/loans",
    siteName: "Kite Finance",
    locale: "en_IN",
    type: "website",
  },
};

const faqs = [
  {
    q: "What is the standard turnaround time for loans?",
    a: "Once you upload your verified documents, our team processes and disburses approved loan funds in as little as 72 hours."
  },
  {
    q: "What documents are required to apply?",
    a: "We only require digital documents including last 12 months bank statements, GST registration certificates, and basic KYC (PAN & Aadhaar) of the promoters."
  },
  {
    q: "Are there any foreclosure or prepayment charges?",
    a: "No, Kite Finance believes in transparent terms. There are zero foreclosure or prepayment fees for early settlement of business loans."
  },
  {
    q: "Is a physical collateral required?",
    a: "No, our core loan products are completely unsecured business loans. You do not need to pledge any property or collateral."
  }
];

export default function ContactLoansPage() {
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
            <div className="inline-flex items-center gap-2 rounded-full bg-royal/10 px-4 py-1.5 text-xs font-semibold text-sky-300 border border-royal/20 mb-4 select-none">
              <FileCheck2 className="h-3.5 w-3.5" />
              Lending & Credit Support
            </div>
            <h1 className="font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Contact Loan Services
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base text-white/80 leading-relaxed font-medium">
              Have questions about MSME financing, active loan applications, or repayment queries? Let our loan experts assist you.
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
                    Loan Support Contacts
                  </h2>
                  <p className="mt-2 text-sm text-ink/65 leading-relaxed">
                    Reach our credit assessment and customer service desks directly.
                  </p>
                </div>

                <div className="space-y-6">
                  {/* Helpline */}
                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white border border-ink/5 shadow-sm text-royal">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-ink uppercase tracking-wider">Helpline</h4>
                      <p className="mt-1 text-sm">
                        <a href="tel:6366452827" className="text-royal hover:underline font-bold">
                          +91 6366452827
                        </a>
                      </p>
                      <span className="text-[11px] text-ink/50 font-medium flex items-center gap-1.5 mt-0.5">
                        <Clock className="h-3 w-3" />
                        Mon - Fri, 10:00 AM - 6:00 PM
                      </span>
                    </div>
                  </div>

                  {/* Email Support */}
                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white border border-ink/5 shadow-sm text-royal">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-ink uppercase tracking-wider">Lending Desk Email</h4>
                      <p className="mt-1 text-sm">
                        <a href="mailto:Info@kitefinance.in" className="text-royal hover:underline font-bold">
                          Info@kitefinance.in
                        </a>
                      </p>
                    </div>
                  </div>

                  {/* Office address */}
                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white border border-ink/5 shadow-sm text-royal">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-ink uppercase tracking-wider">Registered Office</h4>
                      <p className="mt-1 text-sm text-ink/70 leading-relaxed">
                        SF-04, Smart Square, Krishna Temple Road, Stage 1 Indiranagar, Bangalore 560038, Karnataka.
                      </p>
                    </div>
                  </div>
                </div>

                {/* FAQs Sub-section */}
                <div className="border-t border-slate-200/80 pt-10">
                  <h3 className="font-display text-xl font-bold text-ink mb-6 flex items-center gap-2">
                    <HelpCircle className="h-5 w-5 text-royal/80" />
                    Loan Application FAQs
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
                <ContactForm defaultService="loans" />
              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
