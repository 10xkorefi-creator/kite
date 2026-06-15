"use client";

import { motion, useReducedMotion } from "framer-motion";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const steps = [
  {
    icon: "/icon-document-check.svg",
    title: "Submit Documentation",
    body: "Fill the application & upload matching documents",
    hoverBg: "hover:bg-[#fdba74]", // Richer solid orange
  },
  {
    icon: "/icon-rupee-coin.svg",
    title: "Receive Your Sanction Offer",
    body: "After assessment, verify options to match your budget/purpose",
    hoverBg: "hover:bg-[#7dd3fc]", // Richer solid sky-blue
  },
  {
    icon: "/icon-shield-check.svg",
    title: "Complete Agreement Process",
    body: "Ensure standard documentation checks and sign transaction agreement",
    hoverBg: "hover:bg-[#d8b4fe]", // Richer solid purple
  },
  {
    icon: "/icon-chart-growth.svg",
    title: "Fuel Your Business Growth",
    body: "Following checklist, funds will be deposited directly into your account.",
    hoverBg: "hover:bg-[#fde047]", // Richer solid yellow
  },
];

export default function HowItWorks() {
  const reduceMotion = useReducedMotion();

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };
  const item = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
  };

  return (
    <section id="how-it-works" className="relative scroll-mt-24 bg-[#fafafb]/30 py-24 text-ink border-t border-slate-100 overflow-hidden">
      {/* Stripe-style gradient mesh */}
      <div className="absolute inset-y-0 right-0 -z-10 w-1/2 opacity-30 transform-gpu overflow-hidden blur-3xl pointer-events-none select-none" aria-hidden="true">
        <div 
          className="aspect-1155/678 w-[40rem] rotate-[-20deg] bg-gradient-to-tr from-[#8b5cf6]/10 to-[#38bdf8]/10 opacity-30"
        />
      </div>

      {/* Subtle doodles */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <img src="/decor-arrow-doodle.svg" alt="" className="absolute left-16 top-10 w-16 opacity-10" />
        <img src="/decor-sparkles.svg" alt="" className="absolute right-10 top-24 w-12 opacity-10" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Apply in 4 simple steps
          </h2>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              variants={item}
              whileHover={reduceMotion ? {} : { y: -4, boxShadow: "0 12px 30px -10px rgba(30, 41, 59, 0.04)" }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="relative p-6 sm:p-8 rounded-xl bg-white border border-slate-100 flex flex-col h-full shadow-xs hover:border-royal/25 transition-all duration-300 group"
            >
              <div className="flex justify-between items-start">
                <span className="font-display text-lg font-bold text-royal bg-royal/5 px-2.5 py-0.5 rounded-lg">
                  0{index + 1}
                </span>
                <img
                  src={step.icon}
                  alt=""
                  aria-hidden="true"
                  className="h-8 w-8 object-contain"
                />
              </div>
              <h3 className="text-lg font-bold text-ink mt-6 leading-snug">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-ink/70 leading-relaxed">
                {step.body}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <a
            href="#apply"
            className="inline-flex items-center justify-center rounded-lg bg-coral px-8 py-3 text-sm font-bold text-white shadow-md shadow-coral/15 transition-all hover:bg-coral/95 active:scale-95"
          >
            Apply now
          </a>
        </div>
      </div>
    </section>
  );
}
