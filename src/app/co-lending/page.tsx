import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CoLendingCta from "@/components/CoLendingCta";
import { Mail, Phone, MapPin, ExternalLink, ShieldCheck, Building2, UserCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Co-Lending Partnership | Kite Finance",
  description: "Learn about the co-lending partnership between Kite Finance (Jayshree Credit Services Private Limited (formerly known as Jayshree Dealers Private Limited)) and Fintree Finance Private Limited. Combining resources to offer credit to Indian MSMEs.",
  alternates: {
    canonical: "https://www.kitefinance.in/co-lending",
  },
  openGraph: {
    title: "Co-Lending Partnership | Kite Finance",
    description: "Learn about the co-lending partnership between Kite Finance (Jayshree Credit Services Private Limited (formerly known as Jayshree Dealers Private Limited)) and Fintree Finance Private Limited. Combining resources to offer credit to Indian MSMEs.",
    url: "https://www.kitefinance.in/co-lending",
    siteName: "Kite Finance",
    locale: "en_IN",
    type: "website",
  },
};

export default function CoLendingPage() {
  return (
    <>
      <Navbar />

      <main id="main-content" className="flex-grow">
        {/* Section 1: Hero Banner */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[#0b2c5c] to-[#0f2a4a] py-20 text-white lg:py-28">
          {/* Subtle background doodles */}
          <div className="absolute inset-0 pointer-events-none select-none opacity-15">
            <img src="/decor-sparkles.svg" alt="" className="absolute left-8 top-8 w-16" />
            <img src="/decor-arrow-doodle.svg" alt="" className="absolute right-12 top-10 w-16 rotate-45 brightness-0 invert" />
            <img src="/decor-kite-string.svg" alt="" className="absolute right-8 bottom-8 w-24 rotate-12" />
            <img src="/decor-circle-scribble.svg" alt="" className="absolute left-10 bottom-6 w-20 brightness-0 invert" />
          </div>

          <div className="mx-auto max-w-5xl px-4 sm:px-6 relative z-10 text-center">
            <h1 className="font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl leading-tight">
              Co-Lending Partnership
            </h1>
            <p className="mt-4 text-lg text-sky-300 font-bold uppercase tracking-wider">
              Kite Finance &amp; Fintree Finance
            </p>
            <p className="mx-auto mt-8 max-w-3xl text-base text-white/80 leading-relaxed font-medium">
              We have partnered with Fintree Finance Private Limited to offer joint credit structures. By pooling capital and technology resources under RBI-defined co-lending frameworks, we provide small businesses across India with larger loan options, lower overall costs, and streamlined digital evaluations.
            </p>

            {/* Logo side-by-side display */}
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16">
              <div className="flex h-24 w-52 items-center justify-center rounded-2xl bg-white p-4 shadow-xl border border-white/10">
                <img
                  src="/newkitecolor.svg"
                  alt="Kite Finance Logo"
                  className="h-12 w-auto object-contain"
                />
              </div>

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-500/20 text-sky-300 font-bold text-xl">
                +
              </div>

              <div className="flex h-24 w-52 items-center justify-center rounded-2xl bg-white p-4 shadow-xl border border-white/10">
                <img
                  src="/fintree-logo.png"
                  alt="Fintree Finance Logo"
                  className="h-16 w-auto object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Details and Compliance */}
        <section className="py-24 bg-white relative">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-start">
              {/* Left Column: Partnership Details */}
              <div className="lg:col-span-6 space-y-8 text-left">
                <div>
                  <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                    Joint Credit Facility Overview
                  </h2>
                  <p className="mt-4 text-base text-ink/70 leading-relaxed">
                    Under the co-lending arrangement, Kite Finance and Fintree Finance jointly process credit requests. This collaborative structure optimizes operations and enables:
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-royal/10 text-royal">
                      <ShieldCheck className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-ink leading-tight">Regulatory Compliance</h3>
                      <p className="mt-1 text-sm text-ink/65 leading-relaxed">
                        Evaluated and disbursed in alignment with RBI Co-Lending Guidelines (CLS) to maintain transparency.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-royal/10 text-royal">
                      <Building2 className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-ink leading-tight">Unified Customer Portal</h3>
                      <p className="mt-1 text-sm text-ink/65 leading-relaxed">
                        A single visual dashboard for application tracking, repayments, and updates from both organizations.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <CoLendingCta />
                </div>
              </div>

              {/* Right Column: Nodal Officer & Compliance Contact */}
              <div className="lg:col-span-6">
                <div className="rounded-2xl border border-slate-100 bg-slate-50/50 p-8 shadow-xs text-left">
                  <h3 className="font-display text-xl font-bold text-ink mb-6 border-b border-ink/5 pb-4">
                    Fintree Grievance Redressal
                  </h3>
                  
                  <div className="space-y-6">
                    {/* Nodal Officer name */}
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white border border-ink/5 shadow-sm text-royal">
                        <UserCheck className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-ink/40 uppercase tracking-wider">Nodal Officer Details</h4>
                        <p className="mt-1 text-base font-bold text-ink">Sweta Parekh</p>
                        <p className="text-xs text-ink/60 mt-0.5">Designation: Nodal Officer / Grievance Redressal Officer</p>
                      </div>
                    </div>

                    {/* Email IDs */}
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white border border-ink/5 shadow-sm text-royal">
                        <Mail className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-ink/40 uppercase tracking-wider">Email Addresses</h4>
                        <div className="mt-1 space-y-1">
                          <p className="text-sm">
                            <a href="mailto:wecare@fintreefinance.com" className="text-royal hover:underline font-semibold">
                              wecare@fintreefinance.com
                            </a>
                          </p>
                          <p className="text-sm">
                            <a href="mailto:wecarefintree@gmail.com" className="text-royal hover:underline font-semibold">
                              wecarefintree@gmail.com
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Phone number */}
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white border border-ink/5 shadow-sm text-royal">
                        <Phone className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-ink/40 uppercase tracking-wider">Contact Number</h4>
                        <p className="mt-1 text-sm">
                          <a href="tel:18002678111" className="text-royal hover:underline font-semibold">
                            1800 267 8111
                          </a>
                        </p>
                      </div>
                    </div>

                    {/* Address */}
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white border border-ink/5 shadow-sm text-royal">
                        <MapPin className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-ink/40 uppercase tracking-wider">Office Address</h4>
                        <p className="mt-1 text-sm text-ink/70 leading-relaxed font-medium">
                          Fintree Finance Pvt. Ltd.<br />
                          Engineering Centre, 4th Floor,<br />
                          9 Matthew Road, Opera House,<br />
                          Mumbai – 400004, India.
                        </p>
                      </div>
                    </div>

                    {/* Website Link */}
                    <div className="flex items-start gap-4 border-t border-ink/5 pt-6">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white border border-ink/5 shadow-sm text-royal">
                        <ExternalLink className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-ink/40 uppercase tracking-wider">Website URL</h4>
                        <p className="mt-1 text-sm">
                          <a
                            href="https://fintreefinance.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-royal hover:underline font-bold"
                          >
                            https://fintreefinance.com/
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
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
