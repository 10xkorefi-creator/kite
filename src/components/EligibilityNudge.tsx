"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useApplyModal } from "@/context/ApplyModalContext";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const criteria = [
  {
    icon: "/icon-briefcase.svg",
    title: "Verify co-founders",
    body: "co-applicants/directors identification documentation",
  },
  {
    icon: "/icon-document-check.svg",
    title: "Financial History",
    body: "bank statement records for all operational accounts",
  },
  {
    icon: "/icon-rupee-coin.svg",
    title: "Tax Compliance",
    body: "current status & documents verification",
  },
  {
    icon: "/icon-shield-check.svg",
    title: "Business Presence",
    body: "details on physical address / operational facility or registered office",
  },
];

export default function EligibilityNudge() {
  const reduceMotion = useReducedMotion();
  const { openModal } = useApplyModal();

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };
  const item = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
  };

  return (
    <section id="eligibility" className="scroll-mt-24 py-16 sm:py-24 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: EASE }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            <h2 className="font-display text-4xl font-semibold tracking-tight text-royal">
              Who can Apply?
            </h2>
            <p className="mt-2 text-lg font-bold text-royal-deep">
              Eligibility &amp; Documentation
            </p>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="mt-8 space-y-6 w-full"
            >
              {criteria.map((item_) => (
                <motion.div
                  key={item_.title}
                  variants={item}
                  className="flex items-start gap-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-royal/10 text-royal">
                    <img
                      src={item_.icon}
                      alt=""
                      aria-hidden="true"
                      className="h-5 w-5"
                    />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-ink leading-tight">
                      {item_.title}
                    </h3>
                    <p className="mt-0.5 text-sm text-ink/70">
                      {item_.body}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={item} className="mt-10">
              <button
                type="button"
                onClick={() => openModal()}
                className="inline-flex items-center justify-center rounded-lg bg-coral px-10 py-3.5 text-base font-bold text-white shadow-md shadow-coral/15 transition-all hover:scale-[1.02] hover:bg-coral/95 active:scale-[0.98] cursor-pointer"
              >
                Apply now
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: reduceMotion ? 1 : 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: EASE }}
            className="lg:col-span-5"
          >
            <div className="relative overflow-hidden rounded-2xl border border-ink/10 bg-white p-2 shadow-lg shadow-ink/5">
              <img
                src="/team-meeting.png"
                alt="Who Can Apply Illustration"
                className="w-full h-auto rounded-xl object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
