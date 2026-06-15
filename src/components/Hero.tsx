"use client";

import { motion, useReducedMotion } from "framer-motion";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const pressMarks = ["BizDaily", "FinDesk", "MSME Times", "StartupWire"];

export default function Hero() {
  const reduceMotion = useReducedMotion();

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };
  const item = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 22 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
  };

  return (
    <section className="relative overflow-hidden  py-12 lg:pb-32 bg-[#fafafb]/40">
      {/* Stripe-style colorful background glow (multi-layer, more obvious) */}
      <div className="absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl pointer-events-none select-none" aria-hidden="true">
        <div
          className="relative left-[calc(50%-15rem)] aspect-1155/678 w-[40rem] -translate-x-1/2 rotate-[35deg] bg-gradient-to-tr from-[#38bdf8] via-[#8b5cf6] to-[#f5c451] opacity-35 sm:left-[calc(50%-32rem)] sm:w-[80rem]"
          style={{
            clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
          }}
        />
        <div
          className="relative left-[calc(50%+15rem)] aspect-1155/678 w-[35rem] -translate-x-1/2 rotate-[-15deg] bg-gradient-to-br from-[#8b5cf6] via-[#38bdf8] to-[#f5c451] opacity-25 sm:left-[calc(50%+25rem)] sm:w-[60rem] -mt-40"
        />
      </div>

      {/* Subtle background doodles */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <img src="/decor-sparkles.svg" alt="" className="absolute left-8 top-12 w-16 opacity-15" />
        <img src="/decor-arrow-doodle.svg" alt="" className="absolute right-1/4 top-1/3 w-16 rotate-45 opacity-15" />
        <img src="/decor-circle-scribble.svg" alt="" className="absolute left-1/3 bottom-12 w-20 opacity-15" />
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 pb-12 pt-4 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:pb-20 lg:pt-8">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col items-start text-left"
        >
          <motion.h1
            variants={item}
            className="font-display text-3xl font-semibold leading-[1.15] tracking-tight text-ink sm:text-4xl lg:text-5xl"
          >
            Elevating Businesses with{" "}
            <span className="relative inline-block text-royal">
              flexible, collateral-free
              <img
                src="/decor-swoosh.svg"
                alt=""
                aria-hidden="true"
                className="absolute top-8 -z-1 left-24 -rotate-6 w-full sm:-bottom-3"
              />
            </span>{" "}
            funding
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-lg leading-relaxed text-ink/75"
          >
            Grow with <strong>Kite Finance</strong>. Your micro, small, medium enterprise today will be a large corporate tomorrow. Avail up to <span className="font-bold text-ink">₹1 Crore</span> for MSMEs without collateral in under 29 hours.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a
              href="#apply"
              className="inline-flex items-center justify-center rounded-lg bg-coral px-10 py-4 text-base font-bold text-white shadow-md shadow-coral/15 transition-all hover:scale-[1.02] hover:bg-coral/95 active:scale-[0.98]"
            >
              Apply Now
            </a>
            <a
              href="#eligibility"
              className="inline-flex items-center justify-center rounded-lg border-2 border-ink/10 bg-white px-8 py-4 text-base font-bold text-ink transition-all hover:border-royal hover:text-royal-deep active:scale-[0.98]"
            >
              Check eligibility
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-4 w-full border-t border-ink/5 pt-6">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-ink/40">
              Backed by banking &amp; fintech veterans · featured in
            </p>
            <div className=" flex flex-wrap items-center gap-x-8 gap-y-2">
              {pressMarks.map((mark) => (
                <span key={mark} className="text-sm font-bold text-ink/40 hover:text-ink/60 transition-colors">
                  {mark}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Hero Image visually integrated */}
        <motion.div
          initial={{
            opacity: 0,
            y: reduceMotion ? 0 : 30,
            scale: reduceMotion ? 1 : 0.97,
          }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.25 }}
          className="relative mx-auto w-full max-w-lg lg:col-span-5"
        >
          <img
            src="/decor-kite-string.svg"
            alt=""
            aria-hidden="true"
            className="absolute -top-14 right-6 w-24 rotate-6 lg:-right-2 z-10"
          />
          <img
            src="/decor-sparkles.svg"
            alt=""
            aria-hidden="true"
            className="absolute -left-4 bottom-2 w-16 z-10"
          />

          <div className="relative overflow-hidden rounded-2xl border border-ink/10 bg-white p-2 shadow-xl shadow-ink/5">
            <img
              src="/kite-fin-hero.jpg"
              alt="Kite Finance Hero Dashboard"
              className="w-full h-auto rounded-xl object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
