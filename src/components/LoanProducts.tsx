"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { useApplyModal } from "@/context/ApplyModalContext";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const products = [
  {
    icon: "/icon-briefcase.svg",
    tint: "bg-orange-50 text-orange-600 border-orange-100/50",
    title: "Business Loan",
    body: "Unsecured term loans from ₹5 Lakh to ₹1 Crore for shops, traders, and small manufacturers with at least a year in business. Stretched over flexible repayment terms.",
    cta: "Grow Operations →",
    hoverClass: "hover:bg-orange-500 hover:shadow-orange-500/10",
    href: "/products/business-loan",
  },
  {
    icon: "/icon-chart-growth.svg",
    tint: "bg-sky-50 text-sky-600 border-sky-100/50",
    title: "Loan Against POS",
    body: "Short-term credit against card-machine sales, repaid automatically from daily settlements. No EMI-day stress, allowing you to focus on selling.",
    cta: "Ease Cash Flow →",
    hoverClass: "hover:bg-sky-400 hover:shadow-sky-400/10",
    href: "/products/loan-against-pos",
  },
  {
    icon: "/icon-money-bag.svg",
    tint: "bg-purple-50 text-purple-600 border-purple-100/50",
    title: "Working Capital",
    body: "A revolving credit line that flexes with your cash-flow cycle. Keep your inventory fully stocked and suppliers paid instantly without blocking funds.",
    cta: "Stock Inventory →",
    hoverClass: "hover:bg-purple-600 hover:shadow-purple-600/10",
    href: "/products/working-capital",
  },
  {
    icon: "/icon-document-check.svg",
    tint: "bg-emerald-50 text-emerald-600 border-emerald-100/50",
    title: "Invoice Financing",
    body: "Turn unpaid invoices into instant cash. Get up to 90% of your invoice value upfront to bridge cash gaps and manage supplier terms seamlessly.",
    cta: "Unlock Cash →",
    hoverClass: "hover:bg-emerald-600 hover:shadow-emerald-600/10",
    href: "/products/invoice-financing",
  },
  {
    icon: "/icon-wallet.svg",
    tint: "bg-slate-50 text-slate-600 border-slate-100/50",
    title: "…and more",
    body: "From invoice financing to seasonal top-ups, we tailor the structure to how your business actually earns. Flexible rates custom to your revenue.",
    cta: "Explore Structures →",
    hoverClass: "hover:bg-[#0b2c5c] hover:shadow-[#0b2c5c]/10",
    href: "/#apply",
  },
];

export default function LoanProducts() {
  const reduceMotion = useReducedMotion();
  const { openModal } = useApplyModal();

  const item = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
  };

  const ProductCard = ({ product }: { product: typeof products[0] }) => (
    <motion.article
      variants={item}
      whileHover={reduceMotion ? {} : { y: -6, boxShadow: "0 20px 40px -15px rgba(30, 41, 59, 0.08)" }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="flex flex-col rounded-xl bg-[#faf6f0] p-8 shadow-xs transition-all duration-300 group"
    >
      <div className="mb-6">
        <img
          src={product.icon}
          alt=""
          aria-hidden="true"
          className="h-24 w-24 object-contain transition-all duration-300"
        />
      </div>
      <h3 className="font-display text-[26px] sm:text-4xl font-semibold text-ink transition-colors duration-300 leading-tight">
        {product.title}
      </h3>
      <p className="mt-4 grow text-base leading-relaxed text-ink/75 transition-colors duration-300">
        {product.body}
      </p>
      {product.href === "/#apply" ? (
        <button
          type="button"
          onClick={() => openModal()}
          className="mt-8 inline-flex items-center gap-1 font-bold text-royal-deep transition-colors duration-300 text-base underline decoration-1 underline-offset-4 hover:text-royal-deep/80 text-left cursor-pointer"
        >
          <span className="group-hover:mr-1 transition-all duration-200">{product.cta.replace(" →", "")}</span>
          <span className="group-hover:translate-x-1 transition-transform duration-200">&rarr;</span>
        </button>
      ) : (
        <Link
          href={product.href}
          className="mt-8 inline-flex items-center gap-1 font-bold text-royal-deep transition-colors duration-300 text-base underline decoration-1 underline-offset-4 hover:text-royal-deep/80"
        >
          <span className="group-hover:mr-1 transition-all duration-200">{product.cta.replace(" →", "")}</span>
          <span className="group-hover:translate-x-1 transition-transform duration-200">&rarr;</span>
        </Link>
      )}
    </motion.article>
  );

  return (
    <section id="products" className="relative scroll-mt-24 py-24 bg-white overflow-hidden">
      {/* Stripe-style gradient mesh (Subtle variations, bottom left) */}
      <div className="absolute inset-y-0 -left-40 -z-10 transform-gpu overflow-hidden blur-3xl pointer-events-none select-none" aria-hidden="true">
        <div
          className="aspect-1155/678 w-[40rem] rotate-[45deg] bg-gradient-to-tr from-[#38bdf8]/10 via-[#8b5cf6]/5 to-transparent opacity-30"
        />
      </div>

      {/* Subtle doodles */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <img src="/decor-kite-string.svg" alt="" className="absolute left-10 top-12 w-20 opacity-10" />
        <img src="/decor-sparkles.svg" alt="" className="absolute right-12 bottom-12 w-14 opacity-10" />
      </div>

      {/* Restricting max-width to 5xl (1024px) for a tighter, narrower visual block */}
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Left Column */}
          <div className="space-y-8 animate-fade-in">
            <motion.div
              initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: EASE }}
              className="flex flex-col items-start text-left mb-6"
            >
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-royal-deep">
                Our Credit Offerings
              </p>
              <h2 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-[2.6rem]">
                How can we{" "}
                <span className="relative inline-block px-1">
                  help
                  <img
                    src="/decor-circle-scribble.svg"
                    alt=""
                    aria-hidden="true"
                    className="absolute -z-1 left-1/2 top-1/2 w-[160%] max-w-none -translate-x-1/2 -translate-y-1/2 opacity-85"
                  />
                </span>{" "}
                your business?
              </h2>
              <p className="mt-6 text-ink/75 leading-relaxed">
                Borrowing options built around how your business actually flows. Whether you swipe cards daily or have a busy season around the corner, we have you covered.
              </p>
              <Link
                href="/products/business-loan"
                className="mt-8 inline-flex items-center gap-2 font-bold text-coral transition-colors hover:text-coral/80"
              >
                Explore all products <span aria-hidden="true">→</span>
              </Link>
            </motion.div>

            {/* Business Loan (Index 0) */}
            <ProductCard product={products[0]} />

            {/* Working Capital (Index 2) */}
            <ProductCard product={products[2]} />
          </div>

          {/* Right Column (Staggered/offset downward) */}
          <div className="space-y-8 md:mt-24">
            {/* Loan Against POS (Index 1) */}
            <ProductCard product={products[1]} />

            {/* Invoice Financing (Index 3) */}
            <ProductCard product={products[3]} />

            {/* ...and more (Index 4) */}
            <ProductCard product={products[4]} />
          </div>
        </div>
      </div>
    </section>
  );
}
