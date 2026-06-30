import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Kite Finance | Hassle-free business loans for MSMEs",
  description:
    "Kite Finance is an RBI-registered NBFC offering quick, minimal-documentation business loans, POS loans and working capital to small merchants and MSMEs. Funds within 72 hours of verification.",
  alternates: {
    canonical: "https://www.kitefinance.in",
  },
  openGraph: {
    title: "Kite Finance | Hassle-free business loans for MSMEs",
    description:
      "RBI-registered NBFC offering quick, minimal-documentation business loans, POS loans and working capital to small merchants and MSMEs. Funds within 72 hours of verification.",
    url: "https://www.kitefinance.in",
    siteName: "Kite Finance",
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Home() {
  return (
    <>
      <Preloader />
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
