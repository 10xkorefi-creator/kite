"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useApplyModal } from "@/context/ApplyModalContext";

const productLinks = [
  { label: "Business Loan", href: "/products/business-loan", icon: "/icon-briefcase.svg" },
  { label: "Loan Against POS", href: "/products/loan-against-pos", icon: "/icon-chart-growth.svg" },
  { label: "Working Capital", href: "/products/working-capital", icon: "/icon-money-bag.svg" },
  { label: "Invoice Financing", href: "/products/invoice-financing", icon: "/icon-document-check.svg" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  const { openModal } = useApplyModal();

  return (
    <header className="sticky top-0 z-50 border-b border-ink/5 bg-page/90 backdrop-blur-md">
      <nav
        aria-label="Main"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:h-20"
      >
        <Link href="/" aria-label="Kite Finance home" className="shrink-0 rounded-md">
          <Image
            src="/newkitecolor.svg"
            alt="Kite Finance"
            width={216}
            height={60}
            priority
            className="h-12 w-auto lg:h-16"
          />
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden items-center gap-8 md:flex">
          <li>
            <Link
              href="/"
              className="text-[15px] font-semibold text-ink/75 transition-colors hover:text-royal-deep"
            >
              Home
            </Link>
          </li>
          
          {/* Products Dropdown */}
          <li
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button
              type="button"
              onClick={() => setDropdownOpen((v) => !v)}
              aria-expanded={dropdownOpen}
              className="inline-flex items-center gap-1 text-[15px] font-semibold text-ink/75 transition-colors hover:text-royal-deep cursor-pointer"
            >
              Products
              <svg
                className={`h-4 w-4 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.95 }}
                  transition={{ duration: 0.15, ease: "easeOut" }}
                  className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-72 rounded-xl border border-ink/5 bg-white p-3 shadow-xl z-50"
                >
                  <div className="px-3 py-2 text-[11px] font-bold uppercase tracking-wider text-ink/40 font-display border-b border-ink/5 mb-2">
                    Browse by type:
                  </div>
                  <ul className="space-y-1">
                    {productLinks.map((product) => (
                      <li key={product.label}>
                        <Link
                          href={product.href}
                          onClick={() => setDropdownOpen(false)}
                          className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-semibold text-ink transition-colors hover:bg-slate-50"
                        >
                          <img
                            src={product.icon}
                            alt=""
                            aria-hidden="true"
                            className="h-6 w-6 object-contain"
                          />
                          {product.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </li>

          <li>
            <Link
              href="/about-us"
              className="text-[15px] font-semibold text-ink/75 transition-colors hover:text-royal-deep"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              href="/co-lending"
              className="text-[15px] font-semibold text-ink/75 transition-colors hover:text-royal-deep"
            >
              Co-Lending
            </Link>
          </li>
          <li>
            <Link
              href="/about-us#contact"
              className="text-[15px] font-semibold text-ink/75 transition-colors hover:text-royal-deep"
            >
              Contact
            </Link>
          </li>

        </ul>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => openModal()}
            className="hidden rounded-lg bg-coral px-6 py-2.5 text-[15px] font-bold text-white shadow-md shadow-coral/15 transition-all hover:scale-[1.02] hover:bg-coral/90 active:scale-[0.98] md:inline-block cursor-pointer"
          >
            Apply now
          </button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl text-ink hover:bg-white md:hidden"
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              {open ? (
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
            animate={reduceMotion ? { opacity: 1 } : { opacity: 1, height: "auto" }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden border-t border-ink/5 bg-page md:hidden"
          >
            <ul className="space-y-1 px-4 pb-5 pt-2">
              <li>
                <Link
                  href="/"
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3 py-3 text-base font-semibold text-ink hover:bg-white"
                >
                  Home
                </Link>
              </li>

              {/* Products Mobile Collapsible */}
              <li>
                <button
                  type="button"
                  onClick={() => setMobileProductsOpen((v) => !v)}
                  className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-base font-semibold text-ink hover:bg-white cursor-pointer"
                >
                  <span>Products</span>
                  <svg
                    className={`h-4 w-4 text-ink/50 transition-transform duration-200 ${mobileProductsOpen ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <AnimatePresence>
                  {mobileProductsOpen && (
                    <motion.ul
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="overflow-hidden pl-6 pr-3 py-1 space-y-1 bg-slate-50/50 rounded-xl mt-1"
                    >
                      {productLinks.map((product) => (
                        <li key={product.label}>
                          <Link
                            href={product.href}
                            onClick={() => {
                              setOpen(false);
                              setMobileProductsOpen(false);
                            }}
                            className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-semibold text-ink/80 hover:bg-white hover:text-ink"
                          >
                            <img
                              src={product.icon}
                              alt=""
                              aria-hidden="true"
                              className="h-5 w-5 object-contain"
                            />
                            {product.label}
                          </Link>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>

              <li>
                <Link
                  href="/about-us"
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3 py-3 text-base font-semibold text-ink hover:bg-white"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/co-lending"
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3 py-3 text-base font-semibold text-ink hover:bg-white"
                >
                  Co-Lending
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us#contact"
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3 py-3 text-base font-semibold text-ink hover:bg-white"
                >
                  Contact
                </Link>
              </li>


              <li className="pt-2">
                <button
                  type="button"
                  onClick={() => {
                    setOpen(false);
                    openModal();
                  }}
                  className="block w-full rounded-lg bg-coral px-5 py-3 text-center text-base font-bold text-white shadow-md shadow-coral/15 hover:bg-coral/90 cursor-pointer"
                >
                  Apply now
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
