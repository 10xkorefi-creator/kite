import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCta from "@/components/ProductCta";

// Type definition for product data
interface Highlight {
  title: string;
  desc: string;
}

interface ProductInfo {
  title: string;
  subtitle: string;
  description: string;
  highlights: Highlight[];
  ctaText: string;
  icon: string;
  illustration: string;
}

const productsData: Record<string, ProductInfo> = {
  "business-loan": {
    title: "Business Loan",
    subtitle: "Custom Credit for Growing Enterprises",
    description: "Designed for small manufacturers, traders, and retail outlets. Access term financing structured around your historical operating metrics without unnecessary collateral requirements.",
    highlights: [
      { title: "Adaptable Limits", desc: "Financing amounts determined based on overall business capacity and cash flow patterns." },
      { title: "Simplified Registration", desc: "Digital verification processes designed to respect your daily operations and hours." },
      { title: "Aligned Timelines", desc: "Flexible structures designed in harmony with seasonal business cycles and revenue." }
    ],
    ctaText: "Apply for Business Loan",
    icon: "/icon-briefcase.svg",
    illustration: "/illustration-business-loan.png"
  },
  "loan-against-pos": {
    title: "Loan Against POS",
    subtitle: "Liquidity Powered by Daily Sales",
    description: "Leverage your point-of-sale card transactions to unlock short-term working capital. Repay dynamically as you process client card and digital payments.",
    highlights: [
      { title: "Dynamic Settlements", desc: "Repayment structures that align naturally with card swipe and digital volume." },
      { title: "Reduced Tension", desc: "Designed to minimize the typical stress associated with fixed month-end dates." },
      { title: "Operational Continuity", desc: "Keep purchasing inventory and serving customers with steady funding." }
    ],
    ctaText: "Apply for POS Loan",
    icon: "/icon-chart-growth.svg",
    illustration: "/illustration-pos-loan.png"
  },
  "working-capital": {
    title: "Working Capital",
    subtitle: "Revolving Limits to Manage Cycles",
    description: "Maintain a steady flow of operations. Keep your shelves stocked, address payroll, manage supplier dues, or resolve immediate business requirements.",
    highlights: [
      { title: "Revolving Access", desc: "Draw down credit limits as required by your ongoing operational cycles." },
      { title: "Inventory Optimization", desc: "Never miss bulk discount opportunities from vendors due to cash gaps." },
      { title: "Liquidity Cushion", desc: "Designed to help bridge seasonal fluctuations and regular overheads." }
    ],
    ctaText: "Check Working Capital Limits",
    icon: "/icon-money-bag.svg",
    illustration: "/illustration-working-capital.png"
  },
  "invoice-financing": {
    title: "Invoice Financing",
    subtitle: "Accelerate Cash Flow from Outstanding Invoices",
    description: "Convert unpaid corporate bills and trade receivables into immediate working capital. Close customer payment gaps and maintain momentum.",
    highlights: [
      { title: "Cash Acceleration", desc: "Access invoice value upfront rather than waiting for extended client credit terms." },
      { title: "Supplier Agility", desc: "Settle with vendors on your own terms to earn potential cash discounts." },
      { title: "Growth Preservation", desc: "Use outstanding balances to fund ongoing production or critical new projects." }
    ],
    ctaText: "Finance Invoices",
    icon: "/icon-document-check.svg",
    illustration: "/illustration-invoice-financing.png"
  }
};

export async function generateStaticParams() {
  return [
    { slug: "business-loan" },
    { slug: "loan-against-pos" },
    { slug: "working-capital" },
    { slug: "invoice-financing" }
  ];
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = productsData[slug];
  if (!product) {
    return {
      title: "Product Not Found | Kite Finance"
    };
  }
  return {
    title: `${product.title} | Kite Finance`,
    description: product.description,
    alternates: {
      canonical: `https://www.kitefinance.in/products/${slug}`,
    },
    openGraph: {
      title: `${product.title} | Kite Finance`,
      description: product.description,
      url: `https://www.kitefinance.in/products/${slug}`,
      siteName: "Kite Finance",
      locale: "en_IN",
      type: "website",
    },
  };
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;
  const product = productsData[slug];

  if (!product) {
    notFound();
  }

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

          <div className="mx-auto max-w-5xl px-4 sm:px-6 relative z-10">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-center text-left">
              {/* Left Column: Content */}
              <div className="lg:col-span-7 flex flex-col items-start">
                {/* Breadcrumb */}
                <nav aria-label="Breadcrumb" className="mb-6 flex text-xs font-semibold uppercase tracking-wider text-sky-300/80">
                  <Link href="/" className="hover:text-white transition-colors">Home</Link>
                  <span className="mx-2 text-white/30">/</span>
                  <span className="text-white/60">Products</span>
                  <span className="mx-2 text-white/30">/</span>
                  <span className="text-white">{product.title}</span>
                </nav>

                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={product.icon}
                    alt=""
                    width={40}
                    height={40}
                    className="h-10 w-10 filter brightness-0 invert object-contain opacity-95"
                  />
                  <span className="text-sm font-bold text-sky-300 tracking-wider uppercase">
                    {product.subtitle}
                  </span>
                </div>

                <h1 className="font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl leading-tight">
                  {product.title}
                </h1>
                
                <p className="mt-6 text-lg text-white/80 leading-relaxed font-medium">
                  {product.description}
                </p>
                
                <div className="mt-8">
                  <ProductCta ctaText={product.ctaText} productTitle={product.title} />
                </div>
              </div>

              {/* Right Column: Corporate Flat Illustration */}
              <div className="lg:col-span-5 flex justify-center lg:justify-end">
                <div className="relative w-full max-w-[360px] aspect-square overflow-hidden rounded-xl bg-white border border-white/10 shadow-2xl transition-all duration-300 hover:scale-[1.01] hover:shadow-white/5">
                  <img
                    src={product.illustration}
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Product Highlights */}
        <section className="py-24 bg-slate-50/50">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                Product Features
              </h2>
              <div className="mt-4 mx-auto h-1 w-12 rounded-full bg-royal" />
              <p className="mt-4 text-ink/60 max-w-lg mx-auto text-sm">
                Customizable business financial tools designed to support operations without administrative delays.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {product.highlights.map((highlight) => (
                <div
                  key={highlight.title}
                  className="rounded-xl border border-slate-100 bg-white p-8 shadow-xs transition-all duration-300 hover:shadow-md hover:border-royal/15"
                >
                  <h3 className="font-display text-xl font-bold text-ink mb-4">
                    {highlight.title}
                  </h3>
                  <p className="text-sm text-ink/75 leading-relaxed">
                    {highlight.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center text-xs text-ink/40 max-w-md mx-auto leading-relaxed">
              * Rates, terms, and eligibility conditions are determined individually based on Jayshree Credit Services Private Limited (formerly known as Jayshree Dealers Private Limited) internal policies and verification guidelines.
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
