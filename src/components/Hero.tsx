"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useApplyModal } from "@/context/ApplyModalContext";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const slides = [
  {
    image: "/hero-slide-1.png",
    alt: "Smiling Indian woman entrepreneur standing in her retail shop",
    title: "Empowering Retailers"
  },
  {
    image: "/hero-slide-2.png",
    alt: "Smiling Indian male business owner standing inside a garment boutique",
    title: "Supporting Commerce"
  },
  {
    image: "/hero-slide-3.png",
    alt: "Happy Indian female artisan working in her design workshop",
    title: "Fueling Creators"
  },
  {
    image: "/hero-slide-4.png",
    alt: "Smiling Indian male tech startup founder in his modern office",
    title: "Backing Startups"
  }
];

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const { openModal } = useApplyModal();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (reduceMotion) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000); // Transition every 6 seconds
    return () => clearInterval(timer);
  }, [reduceMotion]);

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };

  const item = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 22 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
  };

  return (
    <section className="relative overflow-hidden bg-[#fafafb]/40 min-h-[550px] lg:h-[700px] flex items-center border-b border-slate-200/40">

      {/* Desktop Background Split Layout */}
      <div className="hidden lg:flex absolute inset-0 z-0 select-none pointer-events-none">
        {/* Left Side: Solid Light Panel casting shadow to the right */}
        <div className="w-[55%] bg-[#fafafb] h-full shadow-[25px_0_40px_-15px_rgba(0,0,0,0.08)] border-r border-slate-200/60 z-10" />

        {/* Right Side: Image Slider */}
        <div className="w-[45%] h-full relative overflow-hidden bg-slate-100 z-0">
          <AnimatePresence initial={false} mode="popLayout">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.8, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <img
                src={slides[currentSlide].image}
                alt={slides[currentSlide].alt}
                className="w-full h-full object-cover object-center"
              />
            </motion.div>
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-r from-black/5 to-transparent pointer-events-none" />
        </div>
      </div>

      {/* Subtle background decorative shapes overlay */}
      <div className="absolute inset-0 pointer-events-none select-none z-10 opacity-15">
        <img src="/decor-sparkles.svg" alt="" className="absolute left-8 top-12 w-16" />
        <img src="/decor-arrow-doodle.svg" alt="" className="absolute right-1/4 top-1/3 w-16 rotate-45" />
        <img src="/decor-circle-scribble.svg" alt="" className="absolute left-1/3 bottom-12 w-20" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-20 mx-auto w-full max-w-6xl px-4 sm:px-6 py-12 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

          {/* Left Column: Content (Original Branding Restored) */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="lg:col-span-6 flex flex-col items-start mb-24 text-left"
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
                  className="absolute top-12 -z-1 left-52 -rotate-3  w-80% sm:-bottom-3"
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
              <button
                type="button"
                onClick={() => openModal()}
                className="inline-flex items-center justify-center rounded-lg bg-coral px-10 py-4 text-base font-bold text-white shadow-md shadow-coral/15 transition-all hover:scale-[1.02] hover:bg-coral/95 active:scale-[0.98] cursor-pointer"
              >
                Apply Now
              </button>
              <a
                href="#eligibility"
                className="inline-flex items-center justify-center rounded-lg border-2 border-ink/10 bg-white px-8 py-4 text-base font-bold text-ink transition-all hover:border-royal hover:text-royal-deep active:scale-[0.98]"
              >
                Check eligibility
              </a>
            </motion.div>
          </motion.div>

          {/* Mobile-only Image Slider Container */}
          <div className="col-span-12 lg:hidden mt-8">
            <div className="relative h-[300px] sm:h-[400px] w-full overflow-hidden rounded-2xl border border-slate-200/80 shadow-lg bg-slate-100">
              <AnimatePresence initial={false} mode="popLayout">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: reduceMotion ? 0 : 0.8, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <img
                    src={slides[currentSlide].image}
                    alt={slides[currentSlide].alt}
                    className="w-full h-full object-cover object-center"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Dots navigation overlay for mobile */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10 bg-slate-900/40 backdrop-blur-xs px-3 py-1.5 rounded-full">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${currentSlide === idx ? "w-6 bg-white" : "w-2 bg-white/50"
                      }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Desktop-only Dots Indicator Overlay for Slider */}
          <div className="hidden lg:col-span-6 lg:flex justify-end pr-4 z-20">
            <div className="flex flex-col gap-3 bg-white/85 backdrop-blur-md p-4 rounded-2xl border border-slate-200/60 shadow-xl shadow-slate-100/50">
              {slides.map((slide, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className="group flex items-center justify-between text-left cursor-pointer"
                  aria-label={`Go to slide ${idx + 1}`}
                >
                  <span className={`text-[10px] font-extrabold tracking-wider uppercase mr-4 transition-colors ${currentSlide === idx ? "text-royal" : "text-slate-400 group-hover:text-slate-600"
                    }`}>
                    {slide.title}
                  </span>
                  <span className={`h-2.5 rounded-full transition-all duration-300 ${currentSlide === idx ? "w-8 bg-royal" : "w-2.5 bg-slate-300 group-hover:bg-slate-400"
                    }`} />
                </button>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
