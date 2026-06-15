import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LoanProducts from "@/components/LoanProducts";
import TrustStrip from "@/components/TrustStrip";
import HowItWorks from "@/components/HowItWorks";
import Terms from "@/components/Terms";
import EligibilityNudge from "@/components/EligibilityNudge";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";

export default function Home() {
  return (
    <>
      <Preloader />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-white focus:px-5 focus:py-2.5 focus:font-semibold focus:text-ink focus:shadow-lg"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <LoanProducts />
        <TrustStrip />
        <HowItWorks />
        <Terms />
        <EligibilityNudge />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
