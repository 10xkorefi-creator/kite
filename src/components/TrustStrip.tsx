"use client";

import { motion, useReducedMotion } from "framer-motion";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const benefits = [
  {
    icon: "/icon-shield-check.svg",
    title: "Funds available\non demand",
  },
  {
    icon: "/icon-wallet.svg",
    title: "Pay for what\nyou use",
  },
  {
    icon: "/icon-document-check.svg",
    title: "Access to\ncollateral-free credit",
  },
  {
    icon: "/icon-chart-growth.svg",
    title: "Financing that\ngrows with you",
  },
];

export default function TrustStrip() {
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
    <section id="why-kite" className="scroll-mt-24 py-16 sm:py-24 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-royal sm:text-4xl">
            Funding that&apos;s fast &amp; flexible
          </h2>
          <p className="mt-3 text-lg font-semibold text-royal-deep">
            Get on-demand access to a revolving line of credit
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4"
        >
          {benefits.map((benefit) => (
            <motion.div
              key={benefit.title}
              variants={item}
              className="flex flex-col items-center text-center"
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-royal/10 text-royal mb-4">
                <img
                  src={benefit.icon}
                  alt=""
                  aria-hidden="true"
                  className="h-9 w-9 text-royal"
                />
              </span>
              <h3 className="text-base font-semibold text-royal-deep whitespace-pre-line leading-snug">
                {benefit.title}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
