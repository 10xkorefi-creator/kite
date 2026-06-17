import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import {
  Target,
  Rocket,
  BookOpen,
  Unlock,
  Workflow,
  Cpu,
  Heart,
  ShieldCheck,
  Mail,
  Phone,
  MapPin,
  UserCheck
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Kite Finance",
  description: "Discover Kite Finance's mission to empower MSMEs in India with unsecured loans. Jayshree Credit Services Private Limited is a registered NBFC offering swift, flexible financial solutions.",
};

const pillars = [
  {
    icon: Target,
    title: "Our Mission",
    description: "Our mission at Kite Finance is clear: to make business financing accessible, fast, and hassle-free. We understand that the traditional lending process can be cumbersome and restrictive, especially for small and medium-sized enterprises (SMEs) that often struggle with the collateral demands of conventional banks. That's where we step in – offering a breath of fresh air with our unsecured loan options.",
    className: "md:col-span-1 border-emerald-500/10 hover:border-emerald-500/30",
    iconColor: "text-emerald-500 bg-emerald-50",
  },
  {
    icon: Rocket,
    title: "Our Purpose",
    description: "Our core offering is unsecured business loans, designed to provide the capital your business needs without the complexities of collateral. Whether it's for expanding operations, managing cash flow, or investing in new ventures, we make sure that financial constraints don't hold back your business's potential. We blend cutting-edge technology with a deep understanding of the financial needs of Indian businesses, allowing us to offer streamlined loan processing, quick disbursal, and flexible repayment options. Our digital-first strategy ensures a hassle-free experience, saving our clients valuable time.",
    className: "md:col-span-2 border-royal/10 hover:border-royal/30",
    iconColor: "text-royal bg-royal/5",
  },
  {
    icon: BookOpen,
    title: "Our Story",
    description: "Founded by a team of finance experts and technology enthusiasts, Kite Finance emerged from the need for more accessible and adaptive financial options for businesses in India. We observed the challenges that entrepreneurs and established businesses face in securing funds, often hindered by cumbersome processes and collateral requirements. This observation sparked our mission to create a more inclusive financial landscape, bringing together the speed of modern technology and the expertise of relationship-driven credit assessment.",
    className: "md:col-span-3 border-lilac/10 hover:border-lilac/30",
    iconColor: "text-lilac bg-lilac/5",
  },
];

const setsApart = [
  {
    icon: Unlock,
    title: "Unsecured Business Loans",
    description: "Our core offering is unsecured loans, designed to give businesses the freedom to grow without the burden of providing collateral.",
  },
  {
    icon: Workflow,
    title: "Tailored Financial Solutions",
    description: "We understand that each business is unique. That's why our financial products are tailored to meet the specific needs of different industries and business models.",
  },
  {
    icon: Cpu,
    title: "Technology-Driven Approach",
    description: "At the heart of Kite Finance is our robust, intuitive technology platform that ensures a smooth, transparent, and quick loan application process.",
  },
  {
    icon: Heart,
    title: "Commitment to Customer Success",
    description: "Our relationship with our clients goes beyond financial transactions. We strive to be partners in their growth journey, providing not just funds but also financial guidance.",
  },
  {
    icon: ShieldCheck,
    title: "Ethical Lending Practices",
    description: "Integrity and ethical practices are at the core of all our operations. We believe in transparent, responsible lending and building long-term trust.",
  },
];

export default function AboutUsPage() {
  return (
    <>
      <Navbar />

      <main id="main-content" className="flex-grow">
        {/* Hero Banner */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[#0b2c5c] to-[#0f2a4a] py-20 text-white lg:py-28">
          {/* Subtle background doodles */}
          <div className="absolute inset-0 pointer-events-none select-none">
            <img src="/decor-sparkles.svg" alt="" className="absolute left-8 top-8 w-16 opacity-15" />
            <img src="/decor-arrow-doodle.svg" alt="" className="absolute right-12 top-10 w-16 rotate-45 opacity-15 brightness-0 invert" />
            <img src="/decor-kite-string.svg" alt="" className="absolute right-8 bottom-8 w-24 opacity-15 rotate-12" />
            <img src="/decor-circle-scribble.svg" alt="" className="absolute left-10 bottom-6 w-20 opacity-15 brightness-0 invert" />
          </div>

          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 relative z-10">
            {/* Subtle logo inside Hero */}
            <div className="flex justify-center mb-6">
              <img
                src="/newkitewashed.svg"
                alt="Kite Finance Logo"
                width={166}
                height={46}
                className="h-12 w-auto opacity-90 filter drop-shadow-sm"
              />
            </div>

            <h1 className="font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Welcome to{" "}
              <span className="relative inline-block">
                Kite Finance
                <img
                  src="/decor-swoosh.svg"
                  alt=""
                  aria-hidden="true"
                  className="absolute left-0 -bottom-12 -z-1 w-full opacity-35 brightness-0 invert"
                />
              </span>
            </h1>
            <p className="mt-10 text-lg font-bold text-sky-300 tracking-wider uppercase">
              Your Partner in Business Growth
            </p>
            <p className="mx-auto mt-8 max-w-3xl text-lg text-white/80 leading-relaxed font-medium">
              At Kite Finance, we are driven by a simple yet powerful vision: to empower businesses across India with easy and flexible financial solutions. As a pioneering fintech startup, we specialize in providing unsecured loans to diverse business entities, helping them soar to new heights.
            </p>
          </div>
        </section>

        {/* Pillars Section (Our Mission, Purpose, Story) */}
        <section className="py-24 bg-slate-50/40 border-b border-slate-100">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {pillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={pillar.title}
                    className={`rounded-2xl border border-slate-100 bg-white p-8 shadow-xs transition-all duration-300 hover:shadow-md hover:border-royal/15 ${pillar.className}`}
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${pillar.iconColor}`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <h2 className="font-display text-2xl font-bold text-ink">
                        {pillar.title}
                      </h2>
                    </div>
                    <p className="text-base text-ink/75 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* What Sets Us Apart Section */}
        <section className="py-24 bg-white">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                What Sets Us Apart
              </h2>
              <div className="mt-4 mx-auto h-1 w-12 rounded-full bg-royal" />
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {setsApart.map((item, idx) => {
                const Icon = item.icon;
                const isLastFull = idx === setsApart.length - 1;
                return (
                  <div
                    key={item.title}
                    className={`rounded-2xl border border-slate-100 bg-[#fafafb]/30 p-8 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-sm hover:border-royal/20 ${
                      isLastFull ? "md:col-span-2 lg:col-span-1 md:max-w-2xl md:mx-auto lg:max-w-none" : ""
                    }`}
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-royal/10 text-royal mb-4">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-bold text-ink mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-ink/70 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact Form & Information Section */}
        <section id="contact" className="scroll-mt-24 py-20 bg-slate-50/50 border-t border-ink/5">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-5 items-start">
              {/* Contact Info */}
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                    Contact Us
                  </h2>
                  <p className="mt-3 text-base text-ink/65 leading-relaxed">
                    Drop us a line with any questions or inquiries. We are here to support your business expansion and operations.
                  </p>
                </div>

                <div className="space-y-6">
                  {/* Address */}
                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white border border-ink/5 shadow-sm text-royal">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-ink uppercase tracking-wider">Registered office address</h4>
                      <p className="mt-1 text-sm text-ink/70 leading-relaxed">
                        SF-04, Smart Square, Krishna Temple<br />
                        Road, Stage 1 Indiranagar -<br />
                        Bangalore 560038 - Karnataka.
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white border border-ink/5 shadow-sm text-royal">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-ink uppercase tracking-wider">Email Support</h4>
                      <p className="mt-1 text-sm">
                        <a href="mailto:Info@kitefinance.in" className="text-royal hover:underline font-semibold">
                          Info@kitefinance.in
                        </a>
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white border border-ink/5 shadow-sm text-royal">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-ink uppercase tracking-wider">Call Support</h4>
                      <p className="mt-1 text-sm">
                        <a href="tel:+916366452827" className="text-royal hover:underline font-semibold">
                          +91 63664 52827
                        </a>
                      </p>
                    </div>
                  </div>

                  {/* Grievance Officer */}
                  <div className="flex gap-4 border-t border-ink/5 pt-6">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white border border-ink/5 shadow-sm text-royal">
                      <UserCheck className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-ink uppercase tracking-wider">Grievance Redressal</h4>
                      <p className="mt-1 text-sm text-ink/70 leading-relaxed">
                        <span className="font-bold text-ink">Grievance Officer - Ms. Mittal Panchal</span><br />
                        Email: <a href="mailto:gro@kitefinance.in" className="text-royal hover:underline font-semibold">gro@kitefinance.in</a><br />
                        Phone: <a href="tel:6366452827" className="text-royal hover:underline font-semibold">6366452827</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Form container */}
              <div className="lg:col-span-3">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
