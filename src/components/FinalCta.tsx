"use client";

import { motion, useReducedMotion } from "framer-motion";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function FinalCta() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="apply" className="scroll-mt-24 py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: EASE }}
          className="relative isolate overflow-hidden rounded-xl border border-ink/5 bg-white px-6 py-16 text-center shadow-sm shadow-ink/5 sm:px-12 lg:py-20"
        >
          {/* background doodles */}
          <img
            src="/decor-blob-yellow.svg"
            alt=""
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 -z-10 w-[22rem] max-w-none -translate-x-1/2 -translate-y-1/2 opacity-30 sm:w-[32rem]"
          />
          <img
            src="/decor-sparkles.svg"
            alt=""
            aria-hidden="true"
            className="absolute left-6 top-10 w-12 opacity-60 sm:left-16 sm:w-16"
          />
          <img
            src="/decor-kite-string.svg"
            alt=""
            aria-hidden="true"
            className="absolute right-6 top-6 w-12 rotate-12 opacity-60 sm:right-16 sm:w-16"
          />
          
          <h2 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            Ready to grow?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-ink/75 leading-relaxed">
            Apply in ten minutes, get verified fast, and put working capital in
            your account within 72 hours.
          </p>
          
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-lg bg-coral px-10 py-4 text-lg font-bold text-white shadow-lg shadow-coral/15 transition-all hover:scale-[1.02] hover:bg-coral/90 active:scale-[0.98]"
            >
              Apply now
            </a>
            <a
              href="#eligibility"
              className="inline-flex items-center justify-center rounded-lg border border-ink/15 bg-white px-10 py-4 text-lg font-bold text-ink transition-all hover:border-royal hover:text-royal-deep active:scale-[0.98]"
            >
              Check eligibility
            </a>
          </div>

          <p className="mt-8 text-xs font-semibold uppercase tracking-wider text-ink/40">
            No collateral for most loans &middot; Processing fee stated upfront
          </p>
        </motion.div>
      </div>
    </section>
  );
}
