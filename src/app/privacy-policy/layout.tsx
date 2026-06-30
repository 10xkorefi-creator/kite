import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Kite Finance",
  description: "Read Kite Finance's Privacy Policy. Understand how Jayshree Credit Services Private Limited collects, processes, and protects your personal and financial data.",
  alternates: {
    canonical: "https://www.kitefinance.in/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | Kite Finance",
    description: "Read Kite Finance's Privacy Policy. Understand how Jayshree Credit Services Private Limited collects, processes, and protects your personal and financial data.",
    url: "https://www.kitefinance.in/privacy-policy",
    siteName: "Kite Finance",
    locale: "en_IN",
    type: "website",
  },
};

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
