import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import {
  Building2,
  LayoutDashboard,
  Mail,
  MapPin,
  UserCheck,
  ArrowRight,
  Clock,
  MessageSquare
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | Kite Finance",
  description: "Contact Kite Finance. Choose between Loan Services for MSME business loans or Financial Management Dashboard support for bank statement analysis and expense tracking.",
  alternates: {
    canonical: "https://www.kitefinance.in/contact",
  },
  openGraph: {
    title: "Contact Us | Kite Finance",
    description: "Contact Kite Finance. Choose between Loan Services for MSME business loans or Financial Management Dashboard support for bank statement analysis and expense tracking.",
    url: "https://www.kitefinance.in/contact",
    siteName: "Kite Finance",
    locale: "en_IN",
    type: "website",
  },
};

export default function ContactPortalPage() {
  return (
    <>
      <Navbar />

      <main id="main-content" className="flex-grow bg-slate-50/50">
        {/* Banner Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[#0b2c5c] to-[#0f2a4a] py-16 text-white sm:py-20">
          <div className="absolute inset-0 pointer-events-none select-none">
            <img src="/decor-sparkles.svg" alt="" className="absolute left-8 top-8 w-16 opacity-10" />
            <img src="/decor-kite-string.svg" alt="" className="absolute right-8 bottom-8 w-24 opacity-10 rotate-12" />
          </div>

          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 relative z-10">
            <h1 className="font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Contact Us
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base text-white/80 leading-relaxed font-medium">
              We are here to help. Choose the department that best suits your inquiry to get in touch with our team.
            </p>
          </div>
        </section>

        {/* Portal Cards Section */}
        <section className="py-16 -mt-8 relative z-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">

              {/* Card 1: Loan Services */}
              <div className="flex flex-col justify-between rounded-3xl border border-royal/10 bg-white p-8 shadow-xl shadow-royal/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:border-royal/30">
                <div>
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-royal/5 mb-6">
                    <Image src="/icon-briefcase.svg" alt="Briefcase Icon" width={32} height={32} />
                  </div>
                  <h2 className="font-display text-2xl font-bold text-ink mb-3">
                    Loan Services Support
                  </h2>
                  <p className="text-ink/70 text-sm leading-relaxed mb-6">
                    Need working capital, business loans, POS loans, or invoice financing? Contact our lending operations division for assistance with active applications, documentation requirements, or customized financing structures.
                  </p>

                  <div className="space-y-3.5 border-t border-slate-100 pt-6 mb-8 text-sm">
                    <div className="flex items-center gap-3 text-ink/75">
                      <Clock className="h-4.5 w-4.5 text-royal/70 shrink-0" />
                      <span>Response within 24-48 business hours</span>
                    </div>
                    <div className="flex items-center gap-3 text-ink/75">
                      <MessageSquare className="h-4.5 w-4.5 text-royal/70 shrink-0" />
                      <span>Eligibility assessment support</span>
                    </div>
                  </div>
                </div>

                <Link
                  href="/contact/loans"
                  className="group w-full inline-flex items-center justify-center gap-2 rounded-xl bg-royal py-4 text-base font-bold text-white shadow-lg shadow-royal/15 transition-all hover:bg-royal-deep hover:scale-[1.01] active:scale-[0.99]"
                >
                  <span>Contact Loan Support</span>
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>

              {/* Card 2: Financial Management Dashboard */}
              <div className="flex flex-col justify-between rounded-3xl border border-emerald-500/10 bg-white p-8 shadow-xl shadow-emerald-500/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:border-emerald-500/30">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50/50">
                      <Image src="/icon-chart-growth.svg" alt="Chart Growth Icon" width={32} height={32} />
                    </div>
                    <span className="inline-flex items-center rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-bold text-emerald-700 border border-emerald-200/30">
                      Coming Soon
                    </span>
                  </div>
                  <h2 className="font-display text-2xl font-bold text-ink mb-3">
                    Financial Management Dashboard Support
                  </h2>
                  <p className="text-ink/70 text-sm leading-relaxed mb-6">
                    Get assistance with setting up your Financial Management Dashboard and understanding your financial insights in one place.</p>

                  <div className="space-y-3.5 border-t border-slate-100 pt-6 mb-8 text-sm">
                    <div className="flex items-center gap-3 text-ink/75">
                      <Clock className="h-4.5 w-4.5 text-emerald-500/70 shrink-0" />
                      <span>Dedicated technical support team</span>
                    </div>
                    <div className="flex items-center gap-3 text-ink/75">
                      <MessageSquare className="h-4.5 w-4.5 text-emerald-500/70 shrink-0" />
                      <span>Analytics Dashboard support</span>
                    </div>
                  </div>
                </div>

                <Link
                  href="/contact/pfm"
                  className="group w-full inline-flex items-center justify-center gap-2 rounded-xl bg-coral py-4 text-base font-bold text-white shadow-lg shadow-coral/15 transition-all hover:bg-coral/95 hover:scale-[1.01] active:scale-[0.99]"
                >
                  <span>Contact Dashboard Support</span>
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>

            </div>
          </div>
        </section>

        {/* Info & Regulatory Coordinates Section */}
        <section className="py-16 bg-white border-t border-slate-100">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-5 items-start">

              {/* Statutory Info Card (Grievance Redressal) */}
              <div className="lg:col-span-3 rounded-2xl border border-slate-100 bg-[#fafafb]/30 p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-royal/10 text-royal">
                    <UserCheck className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold text-ink">Grievance Redressal Cell</h3>
                </div>
                <p className="text-sm text-ink/70 leading-relaxed mb-6">
                  In case of complaints or grievance regarding loan services, you can reach out directly to our Grievance Redressal Officer under the statutory RBI guidelines:
                </p>
                <div className="space-y-3.5 text-sm">
                  <p className="font-semibold text-ink">
                    Grievance Officer: <span className="text-ink/80 font-normal">Ms. Mittal Panchal</span>
                  </p>
                  <p className="font-semibold text-ink">
                    Email Support: <a href="mailto:gro@kitefinance.in" className="text-royal hover:underline font-bold">gro@kitefinance.in</a>
                  </p>
                  <p className="font-semibold text-ink">
                    Helpline: <a href="tel:6366452827" className="text-royal hover:underline font-bold">6366452827</a>
                  </p>
                </div>
              </div>

              {/* General Contacts Card */}
              <div className="lg:col-span-2 space-y-8 pl-0 lg:pl-6">
                <div>
                  <h3 className="text-lg font-bold text-ink mb-4">General Contacts</h3>
                  <div className="space-y-5">
                    {/* Address */}
                    <div className="flex gap-3">
                      <MapPin className="h-5 w-5 text-royal shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-xs font-bold text-ink uppercase tracking-wider">Registered Office</h4>
                        <p className="mt-1 text-xs text-ink/70 leading-relaxed">
                          SF-04, Smart Square, Krishna Temple Road, Stage 1 Indiranagar, Bangalore 560038, Karnataka.
                        </p>
                      </div>
                    </div>
                    {/* Email */}
                    <div className="flex gap-3">
                      <Mail className="h-5 w-5 text-royal shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-xs font-bold text-ink uppercase tracking-wider">General Email</h4>
                        <p className="mt-1 text-xs text-ink/70 leading-relaxed">
                          <a href="mailto:Info@kitefinance.in" className="text-royal hover:underline font-semibold">Info@kitefinance.in</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-slate-100 pt-6">
                  <p className="text-[11px] leading-relaxed text-ink/50">
                    Jayshree Credit Services Private Limited (formerly known as Jayshree Dealers Private Limited) is a registered NBFC licensed by the Reserve Bank of India. CIN: U64920KA1996PTC202260.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
