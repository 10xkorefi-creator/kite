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
    <section className="relative overflow-hidden py-10 sm:py-6">
      {/* soft background shapes */}
      <img
        src="/decor-blob-lilac.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 -top-24 w-80 opacity-40"
      />
      <img
        src="/decor-blob-yellow.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 top-40 w-72 opacity-40"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 pb-12 pt-4 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:pb-20 lg:pt-8">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col items-start text-left"
        >
          <motion.h1
            variants={item}
            className="font-display text-[2.6rem] font-semibold leading-[1.1] tracking-tight text-ink sm:text-[2.5rem] lg:text-[3rem]"
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
              className="inline-flex items-center justify-center rounded-full bg-coral px-10 py-4 text-base font-bold text-white shadow-md shadow-coral/15 transition-all hover:scale-[1.02] hover:bg-coral/95 active:scale-[0.98]"
            >
              Apply Now
            </a>
            <a
              href="#eligibility"
              className="inline-flex items-center justify-center rounded-full border-2 border-ink/10 bg-white px-8 py-4 text-base font-bold text-ink transition-all hover:border-royal hover:text-royal-deep active:scale-[0.98]"
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

          <div className="relative overflow-hidden rounded-[2.5rem] border border-ink/10 bg-white p-2.5 shadow-xl shadow-ink/5">
            <img
              src="/kite-fin-hero.jpg"
              alt="Kite Finance Hero Dashboard"
              className="w-full h-auto rounded-[2rem] object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
