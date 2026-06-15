"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function TrustStrip() {
  const reduceMotion = useReducedMotion();

  // Credit Line state (Total 50 Lakhs)
  const [drawAmount, setDrawAmount] = useState(1500000);
  const totalLimit = 5000000;
  const availableLimit = totalLimit - drawAmount;

  // Interest calculations (13.5% p.a.)
  const ratePerAnnum = 0.135;
  const dailyDrawnInterest = Math.round((drawAmount * ratePerAnnum) / 365);

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } },
  };

  const cardVariant = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
  };

  return (
    <section id="why-kite" className="relative scroll-mt-24 py-24 bg-slate-50 border-t border-b border-slate-100/80 overflow-hidden">
      {/* Background Decorative Gradient Mesh */}
      <div className="absolute inset-y-0 left-0 -z-10 w-1/2 opacity-20 transform-gpu overflow-hidden blur-3xl pointer-events-none select-none" aria-hidden="true">
        <div 
          className="aspect-1155/678 w-[40rem] rotate-[15deg] bg-gradient-to-tr from-[#38bdf8]/10 via-[#2563eb]/5 to-transparent opacity-30"
        />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Heading matching the styling of other pages (text-ink) */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Funding that&apos;s fast &amp; flexible
          </h2>
          <p className="mt-4 text-lg text-ink/70 max-w-2xl mx-auto">
            Get on-demand access to a revolving line of credit
          </p>
        </div>

        {/* Bento Grid layout with distinct white cards on slate-50 background */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6"
        >
          {/* Card 1: Funds available on demand (7 columns) */}
          <motion.div
            variants={cardVariant}
            whileHover={reduceMotion ? {} : { y: -5, boxShadow: "0 15px 30px -10px rgba(15, 23, 42, 0.04)" }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            className="lg:col-span-7 bg-white rounded-xl p-6 sm:p-8 border border-slate-200/50 shadow-xs hover:border-royal/15 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-4 mb-4">
                <img
                  src="/icon-shield-check.svg"
                  alt=""
                  aria-hidden="true"
                  className="h-8 w-8 object-contain"
                />
                <h3 className="text-xl font-bold text-ink">Funds available on demand</h3>
              </div>
              <p className="text-sm text-ink/65 leading-relaxed mb-6">
                Draw cash to your account instantly whenever your business needs it.
              </p>
            </div>

            {/* Interactive Disbursal Widget */}
            <div className="bg-slate-50 rounded-lg p-4 sm:p-6 border border-slate-100">
              <div className="flex justify-between items-end mb-4">
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Available Limit</p>
                  <p className="text-3xl font-extrabold text-royal mt-1 font-sans">
                    ₹{availableLimit.toLocaleString("en-IN")}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Drawn Balance</p>
                  <p className="text-lg font-bold text-ink mt-1">
                    ₹{drawAmount.toLocaleString("en-IN")}
                  </p>
                </div>
              </div>

              {/* Progress Slider Track */}
              <div className="h-3 w-full bg-slate-200 rounded-full overflow-hidden flex mb-6">
                <div 
                  className="h-full bg-royal transition-all duration-300"
                  style={{ width: `${(drawAmount / totalLimit) * 100}%` }}
                />
                <div 
                  className="h-full bg-sky-300 transition-all duration-300"
                  style={{ width: `${(availableLimit / totalLimit) * 100}%` }}
                />
              </div>

              {/* Custom Range Slider */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-bold text-slate-500">
                  <span>Simulate withdrawal amount</span>
                  <span>Total Limit: ₹50L</span>
                </div>
                <input
                  type="range"
                  min="500000"
                  max="5000000"
                  step="100000"
                  value={drawAmount}
                  onChange={(e) => setDrawAmount(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-royal"
                />
              </div>

              <div className="mt-4 pt-4 border-t border-slate-200/50 flex items-center justify-between text-xs font-bold text-emerald-600">
                <span>● Disburses instantly</span>
                <span className="text-slate-400 font-normal">Revolving line of credit</span>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Pay for what you use (5 columns) */}
          <motion.div
            variants={cardVariant}
            whileHover={reduceMotion ? {} : { y: -5, boxShadow: "0 15px 30px -10px rgba(15, 23, 42, 0.04)" }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            className="lg:col-span-5 bg-white rounded-xl p-6 sm:p-8 border border-slate-200/50 shadow-xs hover:border-royal/15 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-4 mb-4">
                <img
                  src="/icon-wallet.svg"
                  alt=""
                  aria-hidden="true"
                  className="h-8 w-8 object-contain"
                />
                <h3 className="text-xl font-bold text-ink">Pay for what you use</h3>
              </div>
              <p className="text-sm text-ink/65 leading-relaxed mb-6">
                Only pay interest on the amount you withdraw. The rest of your credit line is free to hold.
              </p>
            </div>

            {/* Interest Breakdown Widget */}
            <div className="space-y-4">
              <div className="rounded-lg border border-slate-100 p-4 bg-slate-50 space-y-3">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-500 font-medium">Drawn: ₹{(drawAmount / 100000).toFixed(0)}L</span>
                  <span className="font-extrabold text-rose-600">₹{dailyDrawnInterest.toLocaleString("en-IN")}/day interest</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-500 font-medium">Unused: ₹{(availableLimit / 100000).toFixed(0)}L</span>
                  <span className="font-extrabold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">₹0/day interest</span>
                </div>
              </div>

              <div className="rounded-lg bg-emerald-50 border border-emerald-100 p-4 text-center">
                <p className="text-xs font-bold text-emerald-800">
                  Zero charges on idle funds
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Access to collateral-free credit (5 columns) */}
          <motion.div
            variants={cardVariant}
            whileHover={reduceMotion ? {} : { y: -5, boxShadow: "0 15px 30px -10px rgba(15, 23, 42, 0.04)" }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            className="lg:col-span-5 bg-white rounded-xl p-6 sm:p-8 border border-slate-200/50 shadow-xs hover:border-royal/15 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-4 mb-4">
                <img
                  src="/icon-document-check.svg"
                  alt=""
                  aria-hidden="true"
                  className="h-8 w-8 object-contain"
                />
                <h3 className="text-xl font-bold text-ink">Access to collateral-free credit</h3>
              </div>
              <p className="text-sm text-ink/65 leading-relaxed mb-6">
                Get business credit without pledging property, assets, or security.
              </p>
            </div>

            {/* Zero Assets Requirements Checklist Visual */}
            <div className="bg-slate-50 rounded-lg p-4 sm:p-5 border border-slate-100 text-xs space-y-3">
              <div className="flex items-center justify-between py-1 border-b border-slate-200/40">
                <span className="text-slate-500 font-medium">Property Mortgage</span>
                <span className="font-bold text-rose-500 flex items-center gap-1">✕ Not Required</span>
              </div>
              <div className="flex items-center justify-between py-1 border-b border-slate-200/40">
                <span className="text-slate-500 font-medium">Gold or FD Pledge</span>
                <span className="font-bold text-rose-500 flex items-center gap-1">✕ Not Required</span>
              </div>
              <div className="flex items-center justify-between py-1">
                <span className="text-slate-500 font-medium">Personal Assets</span>
                <span className="font-bold text-rose-500 flex items-center gap-1">✕ Not Required</span>
              </div>
            </div>
          </motion.div>

          {/* Card 4: Financing that grows with you (7 columns) */}
          <motion.div
            variants={cardVariant}
            whileHover={reduceMotion ? {} : { y: -5, boxShadow: "0 15px 30px -10px rgba(15, 23, 42, 0.04)" }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            className="lg:col-span-7 bg-white rounded-xl p-6 sm:p-8 border border-slate-200/50 shadow-xs hover:border-royal/15 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-4 mb-4">
                <img
                  src="/icon-chart-growth.svg"
                  alt=""
                  aria-hidden="true"
                  className="h-8 w-8 object-contain"
                />
                <h3 className="text-xl font-bold text-ink">Financing that grows with you</h3>
              </div>
              <p className="text-sm text-ink/65 leading-relaxed mb-6">
                Your credit limit automatically scales up as your business grows and repays.
              </p>
            </div>

            {/* Custom SVG Line Chart Graphic representing growth curve */}
            <div className="bg-slate-50 rounded-lg p-4 border border-slate-100">
              <div className="relative w-full h-[120px]">
                {/* SVG Curve */}
                <svg className="w-full h-full" viewBox="0 0 400 120" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="chart-grad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#2563eb" stopOpacity="0.15" />
                      <stop offset="100%" stopColor="#2563eb" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  
                  {/* Grid Lines */}
                  <line x1="0" y1="90" x2="400" y2="90" stroke="rgba(30, 41, 59, 0.04)" strokeDasharray="3 3" />
                  <line x1="0" y1="60" x2="400" y2="60" stroke="rgba(30, 41, 59, 0.04)" strokeDasharray="3 3" />
                  <line x1="0" y1="30" x2="400" y2="30" stroke="rgba(30, 41, 59, 0.04)" strokeDasharray="3 3" />

                  {/* Shaded Area */}
                  <path 
                    d="M 20 100 Q 150 90, 200 60 T 380 20 L 380 110 L 20 110 Z" 
                    fill="url(#chart-grad)" 
                  />

                  {/* Curve Path */}
                  <path 
                    d="M 20 100 Q 150 90, 200 60 T 380 20" 
                    fill="none" 
                    stroke="#2563eb" 
                    strokeWidth="3" 
                    strokeLinecap="round"
                  />

                  {/* Data Points */}
                  <circle cx="20" cy="100" r="4" fill="#2563eb" stroke="#fff" strokeWidth="2" />
                  <circle cx="200" cy="60" r="4" fill="#2563eb" stroke="#fff" strokeWidth="2" />
                  <circle cx="380" cy="20" r="4" fill="#2563eb" stroke="#fff" strokeWidth="2" />
                </svg>

                {/* Milestone overlay text */}
                <div className="absolute inset-0 w-full h-full text-[9px] font-bold text-slate-400 pointer-events-none">
                  <div className="absolute left-[5%] -translate-x-[20%] flex flex-col items-start pt-[90px]">
                    <span className="text-slate-800 font-extrabold whitespace-nowrap">₹10 Lakh</span>
                    <span>Month 1</span>
                  </div>
                  <div className="absolute left-[50%] -translate-x-1/2 flex flex-col items-center pt-[55px]">
                    <span className="text-slate-800 font-extrabold whitespace-nowrap">₹30 Lakh</span>
                    <span>Month 6</span>
                  </div>
                  <div className="absolute right-[5%] translate-x-[20%] flex flex-col items-end pt-[15px]">
                    <span className="text-slate-800 font-extrabold whitespace-nowrap">₹1 Crore</span>
                    <span>Month 12</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
