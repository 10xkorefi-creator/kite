"use client";

import React, { useState, useEffect } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const performanceData = {
  "1M": [
    { name: "Week 1", value: 610000 },
    { name: "Week 2", value: 625000 },
    { name: "Week 3", value: 620000 },
    { name: "Week 4", value: 648290 },
  ],
  "6M": [
    { name: "Jan", value: 520000 },
    { name: "Feb", value: 550000 },
    { name: "Mar", value: 585000 },
    { name: "Apr", value: 570000 },
    { name: "May", value: 615000 },
    { name: "Jun", value: 648290 },
  ],
  "1Y": [
    { name: "Q1", value: 450000 },
    { name: "Q2", value: 505000 },
    { name: "Q3", value: 580000 },
    { name: "Q4", value: 648290 },
  ],
};

export default function AssetChart() {
  const [timeframe, setTimeframe] = useState<"1M" | "6M" | "1Y">("6M");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-full h-80 bg-slate-50/50 rounded-xl flex items-center justify-center border border-slate-200/40">
        <div className="text-slate-400 text-sm animate-pulse">Loading Chart Analytics...</div>
      </div>
    );
  }

  const currentData = performanceData[timeframe];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-base font-bold text-ink uppercase tracking-wider">Performance Index</h3>
        <div className="flex bg-slate-100 border border-slate-200/60 rounded-lg p-0.5 space-x-1">
          {(["1M", "6M", "1Y"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTimeframe(t)}
              className={`px-3 py-1 text-xs font-bold rounded-md transition-all ${
                timeframe === t
                  ? "bg-royal text-white shadow"
                  : "text-slate-500 hover:text-ink"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div className="h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={currentData}
            margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.25} />
                <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(30, 41, 59, 0.05)" vertical={false} />
            <XAxis
              dataKey="name"
              stroke="#64748b"
              fontSize={11}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke="#64748b"
              fontSize={11}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(255, 255, 255, 0.95)",
                borderColor: "rgba(30, 41, 59, 0.08)",
                borderRadius: "12px",
                color: "#1e293b",
                boxShadow: "0 10px 25px -10px rgba(30, 41, 59, 0.08)",
              }}
              formatter={(value: any) => [`$${value.toLocaleString()}`, "Net Worth"]}
              labelStyle={{ color: "#64748b", fontSize: "11px" }}
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#0ea5e9"
              strokeWidth={3}
              fillOpacity={1}
              fill="url(#colorValue)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
