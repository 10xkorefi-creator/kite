"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
  Plus,
  Minus,
  DollarSign,
  Wallet,
  Percent,
  Calendar,
  Building,
  PlusCircle,
  Briefcase,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GlassCard from "@/components/GlassCard";
import AssetChart from "@/components/AssetChart";

// Default Initial Data
const initialTransactions = [
  { id: 1, type: "deposit", desc: "Bank Transfer (HDFC)", amount: 5000, date: "Today, 2:40 PM" },
  { id: 2, type: "buy", desc: "Mutual Fund Investment", amount: 3350, date: "Yesterday, 10:15 AM" },
  { id: 3, type: "withdraw", desc: "Vendor Payout (Razorpay)", amount: 1200, date: "Jun 7, 2026" },
  { id: 4, type: "deposit", desc: "SME Loan Disbursal", amount: 4850, date: "Jun 1, 2026" },
];

export default function Dashboard() {
  // Stats state
  const [netWorth, setNetWorth] = useState(648290.4);
  const [investments, setInvestments] = useState(512940.4);
  const [savings, setSavings] = useState(4850);
  const [liabilities, setLiabilities] = useState(135350.0);
  
  // Transaction State
  const [transactions, setTransactions] = useState(initialTransactions);

  // Calculator State
  const [calcMonthly, setCalcMonthly] = useState(500);
  const [calcRate, setCalcRate] = useState(8);
  const [calcYears, setCalcYears] = useState(10);

  // Handle mock deposit
  const handleDeposit = () => {
    const amount = 5000;
    setNetWorth((prev) => prev + amount);
    setSavings((prev) => prev + amount);
    const newTx = {
      id: Date.now(),
      type: "deposit",
      desc: "Simulated Deposit (Mock)",
      amount,
      date: "Just Now",
    };
    setTransactions((prev) => [newTx, ...prev]);
  };

  // Handle mock withdrawal
  const handleWithdraw = () => {
    const amount = 2500;
    setNetWorth((prev) => prev - amount);
    setSavings((prev) => prev - amount);
    const newTx = {
      id: Date.now(),
      type: "withdraw",
      desc: "Simulated Withdrawal (Mock)",
      amount,
      date: "Just Now",
    };
    setTransactions((prev) => [newTx, ...prev]);
  };

  // Compound Interest Calculation
  // FV = P * ((1 + r)^t - 1) / r
  const calculateCompoundInterest = () => {
    const P = calcMonthly;
    const r = (calcRate / 100) / 12;
    const n = calcYears * 12;
    if (r === 0) {
      return {
        futureValue: Math.round(P * n),
        totalContributed: Math.round(P * n),
        totalEarnings: 0,
      };
    }
    const futureValue = P * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
    const totalContributed = P * n;
    const totalEarnings = futureValue - totalContributed;
    return {
      futureValue: Math.round(futureValue),
      totalContributed: Math.round(totalContributed),
      totalEarnings: Math.round(totalEarnings),
    };
  };

  const calcResults = calculateCompoundInterest();

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-page text-ink flex flex-col pt-24 pb-12 relative overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-royal/5 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-sun/5 blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-8 relative z-10 flex-grow">
          {/* Dashboard Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-ink/5 pb-6">
            <div>
              <h1 className="text-3xl font-extrabold tracking-tight text-ink font-display">Wealth Command</h1>
              <p className="text-ink/60 text-sm mt-1">
                Real-time tracking for WASIF KAREEM. Connected to 4 external accounts.
              </p>
            </div>
            {/* Quick Actions */}
            <div className="flex items-center gap-3">
              <button
                onClick={handleDeposit}
                className="flex items-center justify-center space-x-2 px-4 py-2.5 bg-coral hover:bg-coral/90 text-white rounded-xl text-sm font-bold shadow-md shadow-coral/15 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Plus className="h-4 w-4" />
                <span>Simulate Deposit</span>
              </button>
              <button
                onClick={handleWithdraw}
                className="flex items-center justify-center space-x-2 px-4 py-2.5 bg-white border border-ink/10 hover:bg-slate-50 text-ink rounded-xl text-sm font-bold transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Minus className="h-4 w-4" />
                <span>Simulate Withdraw</span>
              </button>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Net Worth */}
            <GlassCard hoverGlow>
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-xs text-ink/50 uppercase font-bold tracking-wider">Net Worth</p>
                  <motion.h3
                    key={netWorth}
                    initial={{ scale: 0.95, opacity: 0.8 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-2xl font-extrabold text-ink mt-2"
                  >
                    ${netWorth.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </motion.h3>
                </div>
                <div className="p-2 rounded-lg bg-royal/10 border border-royal/20 text-royal-deep">
                  <DollarSign className="h-5 w-5" />
                </div>
              </div>
              <div className="flex items-center space-x-1 mt-4 text-xs text-emerald-600 font-semibold">
                <ArrowUpRight className="h-3.5 w-3.5" />
                <span>+3.8%</span>
                <span className="text-ink/40 font-normal">this week</span>
              </div>
            </GlassCard>

            {/* Investments */}
            <GlassCard hoverGlow>
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-xs text-ink/50 uppercase font-bold tracking-wider">Total Investments</p>
                  <h3 className="text-2xl font-extrabold text-ink mt-2">
                    ${investments.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </h3>
                </div>
                <div className="p-2 rounded-lg bg-kite-teal/10 border border-kite-teal/20 text-teal-700">
                  <Briefcase className="h-5 w-5" />
                </div>
              </div>
              <div className="flex items-center space-x-1 mt-4 text-xs text-emerald-600 font-semibold">
                <ArrowUpRight className="h-3.5 w-3.5" />
                <span>+5.2%</span>
                <span className="text-ink/40 font-normal">since last month</span>
              </div>
            </GlassCard>

            {/* Savings */}
            <GlassCard hoverGlow>
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-xs text-ink/50 uppercase font-bold tracking-wider">Liquid Savings</p>
                  <motion.h3
                    key={savings}
                    initial={{ scale: 0.95, opacity: 0.8 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-2xl font-extrabold text-ink mt-2"
                  >
                    ${savings.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </motion.h3>
                </div>
                <div className="p-2 rounded-lg bg-sun/10 border border-sun/20 text-amber-700">
                  <Wallet className="h-5 w-5" />
                </div>
              </div>
              <div className="flex items-center space-x-1 mt-4 text-xs text-ink/65">
                <span className="text-emerald-600 font-bold flex items-center mr-1">
                  <TrendingUp className="h-3.5 w-3.5 mr-0.5" /> Earning 4.5% APY
                </span>
              </div>
            </GlassCard>

            {/* Liabilities */}
            <GlassCard hoverGlow>
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-xs text-ink/50 uppercase font-bold tracking-wider">Active Liabilities</p>
                  <h3 className="text-2xl font-extrabold text-ink mt-2">
                    ${liabilities.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </h3>
                </div>
                <div className="p-2 rounded-lg bg-lilac/10 border border-lilac/20 text-purple-700">
                  <Building className="h-5 w-5" />
                </div>
              </div>
              <div className="flex items-center space-x-1 mt-4 text-xs text-rose-600 font-semibold">
                <ArrowDownRight className="h-3.5 w-3.5" />
                <span>-1.4%</span>
                <span className="text-ink/40 font-normal">mortgage paid down</span>
              </div>
            </GlassCard>
          </div>

          {/* Core Analytics Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Chart Widget */}
            <div className="lg:col-span-2 space-y-8">
              <GlassCard className="h-full">
                <AssetChart />
              </GlassCard>
            </div>

            {/* Wealth Calculator Widget */}
            <div className="lg:col-span-1">
              <GlassCard className="space-y-6 h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="p-1.5 rounded bg-royal/10 border border-royal/20 text-royal-deep">
                      <TrendingUp className="h-4 w-4" />
                    </span>
                    <h3 className="text-base font-bold text-ink uppercase tracking-wider font-display">Wealth Planner</h3>
                  </div>
                  <p className="text-xs text-ink/60 mt-2 leading-relaxed">
                    Compute future wealth projections using compound monthly investments.
                  </p>

                  <div className="space-y-4 mt-6">
                    {/* Monthly Deposit Slider */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs font-bold text-ink/80">
                        <span>Monthly Contribution</span>
                        <span className="text-royal-deep">${calcMonthly}/mo</span>
                      </div>
                      <input
                        type="range"
                        min="100"
                        max="5000"
                        step="100"
                        value={calcMonthly}
                        onChange={(e) => setCalcMonthly(Number(e.target.value))}
                        className="w-full h-1 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-royal"
                      />
                    </div>

                    {/* Interest Rate Slider */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs font-bold text-ink/80">
                        <span>Expected Return (Annual)</span>
                        <span className="text-royal-deep">{calcRate}% APY</span>
                      </div>
                      <input
                        type="range"
                        min="1"
                        max="15"
                        step="0.5"
                        value={calcRate}
                        onChange={(e) => setCalcRate(Number(e.target.value))}
                        className="w-full h-1 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-royal"
                      />
                    </div>

                    {/* Years Slider */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs font-bold text-ink/80">
                        <span>Investment Horizon</span>
                        <span className="text-royal-deep">{calcYears} Years</span>
                      </div>
                      <input
                        type="range"
                        min="1"
                        max="40"
                        step="1"
                        value={calcYears}
                        onChange={(e) => setCalcYears(Number(e.target.value))}
                        className="w-full h-1 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-royal"
                      />
                    </div>
                  </div>
                </div>

                {/* Calculation Results Display */}
                <div className="bg-slate-50 rounded-2xl p-5 border border-ink/5 space-y-3 mt-6">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-ink/60 font-semibold">Future Net Value</span>
                    <span className="text-xl font-extrabold text-royal-deep">
                      ${calcResults.futureValue.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-ink/50">Total Contributions</span>
                    <span className="text-ink/80 font-bold">
                      ${calcResults.totalContributed.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-ink/50">Total Interest Earned</span>
                    <span className="text-emerald-600 font-bold">
                      +${calcResults.totalEarnings.toLocaleString()}
                    </span>
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>

          {/* Bottom Grid: Live Transactions + Allocations */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Live Feed Column */}
            <div className="lg:col-span-2">
              <GlassCard className="h-full">
                <div className="flex items-center justify-between pb-4 border-b border-ink/5">
                  <div className="flex items-center space-x-2">
                    <span className="p-1.5 rounded bg-royal/10 border border-royal/20 text-royal-deep">
                      <Wallet className="h-4 w-4" />
                    </span>
                    <h3 className="text-base font-bold text-ink uppercase tracking-wider font-display">Live Activity Log</h3>
                  </div>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200/50">
                    Live Feed Active
                  </span>
                </div>

                <div className="mt-6 space-y-4">
                  <AnimatePresence initial={false}>
                    {transactions.map((tx) => (
                      <motion.div
                        key={tx.id}
                        initial={{ opacity: 0, y: -20, height: 0 }}
                        animate={{ opacity: 1, y: 0, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="flex items-center justify-between p-4 bg-slate-50 hover:bg-slate-100/70 rounded-2xl border border-ink/5 transition-all duration-300 mb-1">
                          <div className="flex items-center space-x-4">
                            <div className={`p-2 rounded-xl border ${
                              tx.type === "deposit"
                                ? "bg-emerald-50 border-emerald-200/50 text-emerald-700"
                                : tx.type === "withdraw"
                                ? "bg-rose-50 border-rose-200/50 text-rose-700"
                                : "bg-royal/10 border-royal/20 text-royal-deep"
                            }`}>
                              {tx.type === "deposit" ? (
                                <ArrowUpRight className="h-4 w-4" />
                              ) : tx.type === "withdraw" ? (
                                <ArrowDownRight className="h-4 w-4" />
                              ) : (
                                <Briefcase className="h-4 w-4" />
                              )}
                            </div>
                            <div>
                              <p className="text-sm font-bold text-ink">{tx.desc}</p>
                              <p className="text-[10px] text-ink/40 font-bold">{tx.date}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className={`text-sm font-extrabold ${
                              tx.type === "deposit" ? "text-emerald-700" : tx.type === "withdraw" ? "text-rose-700" : "text-ink"
                            }`}>
                              {tx.type === "deposit" ? "+" : tx.type === "withdraw" ? "-" : ""}${tx.amount.toLocaleString()}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </GlassCard>
            </div>

            {/* Asset Split Breakdown */}
            <div className="lg:col-span-1">
              <GlassCard className="h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="p-1.5 rounded bg-kite-teal/10 border border-kite-teal/20 text-teal-700">
                      <Percent className="h-4 w-4" />
                    </span>
                    <h3 className="text-base font-bold text-ink uppercase tracking-wider font-display">Asset Distribution</h3>
                  </div>
                  <p className="text-xs text-ink/60 mt-2 leading-relaxed">
                    Visual division of currently tracked assets.
                  </p>

                  <div className="space-y-5 mt-6">
                    {/* Item 1 */}
                    <div className="space-y-1.5">
                      <div className="flex justify-between text-xs font-bold text-ink/80">
                        <span>US Equities</span>
                        <span>$389,010.24 (60%)</span>
                      </div>
                      <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                        <motion.div initial={{ width: 0 }} animate={{ width: "60%" }} transition={{ duration: 1 }} className="h-full bg-royal rounded-full" />
                      </div>
                    </div>

                    {/* Item 2 */}
                    <div className="space-y-1.5">
                      <div className="flex justify-between text-xs font-bold text-ink/80">
                        <span>Cryptocurrency</span>
                        <span>$123,930.16 (25%)</span>
                      </div>
                      <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                        <motion.div initial={{ width: 0 }} animate={{ width: "25%" }} transition={{ duration: 1, delay: 0.1 }} className="h-full bg-kite-teal rounded-full" />
                      </div>
                    </div>

                    {/* Item 3 */}
                    <div className="space-y-1.5">
                      <div className="flex justify-between text-xs font-bold text-ink/80">
                        <span>Fixed Term & Cash</span>
                        <span>$135,350.00 (15%)</span>
                      </div>
                      <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                        <motion.div initial={{ width: 0 }} animate={{ width: "15%" }} transition={{ duration: 1, delay: 0.2 }} className="h-full bg-lilac rounded-full" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Simulated Stats Banner */}
                <div className="mt-8 p-4 bg-amber-50 rounded-2xl border border-amber-100/50 flex items-start space-x-3 text-xs text-amber-900/80 leading-normal">
                  <div className="p-1.5 bg-sun/20 rounded-lg text-amber-800 flex-shrink-0">
                    <PlusCircle className="h-4.5 w-4.5" />
                  </div>
                  <p className="font-medium">
                    Rebalancing recommended: Bitcoin represents 25% of holdings, exceeding your 20% limit guidelines.
                  </p>
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
