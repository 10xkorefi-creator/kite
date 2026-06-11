"use client";

import { motion, useReducedMotion } from "framer-motion";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const products = [
  {
    icon: "/icon-briefcase.svg",
    tint: "bg-coral/10 text-coral border-coral/20",
    title: "Business Loan",
    body: "Unsecured term loans from ₹5 Lakh to ₹1 Crore for shops, traders, and small manufacturers with at least a year in business. Stretched over flexible repayment terms.",
    cta: "Grow Operations →",
    hoverBg: "hover:bg-[#fdba74]", // Richer solid orange
  },
  {
    icon: "/icon-chart-growth.svg",
    tint: "bg-royal/10 text-royal-deep border-royal/20",
    title: "Loan Against POS",
    body: "Short-term credit against card-machine sales, repaid automatically from daily settlements. No EMI-day stress, allowing you to focus on selling.",
    cta: "Ease Cash Flow →",
    hoverBg: "hover:bg-[#7dd3fc]", // Richer solid sky-blue
  },
  {
    icon: "/icon-money-bag.svg",
    tint: "bg-lilac/10 text-lilac border-lilac/20",
    title: "Working Capital",
    body: "A revolving credit line that flexes with your cash-flow cycle. Keep your inventory fully stocked and suppliers paid instantly without blocking funds.",
    cta: "Stock Inventory →",
    hoverBg: "hover:bg-[#ddd6fe]", // Richer solid purple
  },
  {
    icon: "/icon-wallet.svg",
    tint: "bg-sun/10 text-amber-700 border-sun/20",
    title: "…and more",
    body: "From invoice financing to seasonal top-ups, we tailor the structure to how your business actually earns. Flexible rates custom to your revenue.",
    cta: "Explore Structures →",
    hoverBg: "hover:bg-[#fde047]", // Richer solid yellow
  },
];

export default function LoanProducts() {
  const reduceMotion = useReducedMotion();

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };
  const item = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
  };

  return (
    <section id="products" className="scroll-mt-24 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: EASE }}
            className="lg:col-span-4 flex flex-col items-start text-left"
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
                  className="absolute -z-1   left-1/2 top-1/2 w-[160%] max-w-none -translate-x-1/2 -translate-y-1/2 opacity-85"
                />
              </span>{" "}
              your business?
            </h2>
            <p className="mt-6 text-ink/75 leading-relaxed">
              Borrowing options built around how your business actually flows. Whether you swipe cards daily or have a busy season around the corner, we have you covered.
            </p>
            <a
              href="#apply"
              className="mt-8 inline-flex items-center gap-2 font-bold text-coral transition-colors hover:text-coral/80"
            >
              Explore all products <span aria-hidden="true">→</span>
            </a>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid gap-6 sm:grid-cols-2 lg:col-span-8"
          >
            {products.map((product) => (
              <motion.article
                key={product.title}
                variants={item}
                whileHover={reduceMotion ? {} : { y: -6, boxShadow: "0 12px 30px -10px rgba(30, 41, 59, 0.08)" }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className={`flex flex-col rounded-[2rem] bg-[#faf6f0] p-7 transition-all duration-300 ${product.hoverBg}`}
              >
                <div className="flex items-center justify-between">
                  <img
                    src={product.icon}
                    alt=""
                    aria-hidden="true"
                    className="h-18 w-18 object-contain"
                  />
                </div>
                <h3 className="mt-6 font-display text-2xl font-semibold text-ink">
                  {product.title}
                </h3>
                <p className="mt-3 grow text-[15px] leading-relaxed text-ink/70">
                  {product.body}
                </p>
                <a
                  href="#apply"
                  className="mt-6 inline-flex items-center gap-1.5 font-bold text-royal-deep hover:text-royal transition-colors text-sm"
                >
                  {product.cta}
                </a>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
