import Link from "next/link";

const legalLinks = [
  { label: "About Us", href: "/about-us" },
  { label: "Privacy Policy", href: "https://www.kitefinance.in/_files/ugd/eb3c0c_bcd9a22d6c1a4859a78aaef7c727b400.pdf" },
  { label: "Fair Practice Code for Collection and Recovery", href: "https://www.kitefinance.in/_files/ugd/eb3c0c_fef7f7a86c7143dca07ca3f3cb0da300.pdf" },
  { label: "Fair Practice Code", href: "https://www.kitefinance.in/_files/ugd/eb3c0c_70c80d81208b4d64b65a65a7f828aa6a.pdf" },
  { label: "Code of conduct for DSA & DMA", href: "https://www.kitefinance.in/_files/ugd/eb3c0c_485066f88917464d86291e0d00bc2286.pdf" },
  { label: "IT Usage Policy", href: "https://www.kitefinance.in/_files/ugd/eb3c0c_bf5a8c2716354d73bf8754488f3e77ad.pdf" },
  { label: "KYC & AML Policy", href: "https://www.kitefinance.in/_files/ugd/eb3c0c_17631157930841668c452d746d6f777f.pdf" },
  { label: "Business Continuity Plan", href: "https://www.kitefinance.in/_files/ugd/eb3c0c_0e26bcf1f5554a17b06cf5ef7da41610.pdf" },
  { label: "Approach for Risk Gradation", href: "https://www.kitefinance.in/_files/ugd/eb3c0c_034fb2bb12974032b8ad6295f7808605.pdf" },
  { label: "MITC", href: "https://www.kitefinance.in/_files/ugd/eb3c0c_c0bbe5ac246b4545a3a221372af1f66c.pdf" },
  { label: "Our LSPs list", href: "https://www.kitefinance.in/_files/ugd/eb3c0c_287de98f08914399924e1060d672e5e1.pdf" },
  { label: "Customer Grievance Redressal Mechanism", href: "/about-us#contact" },
];

export default function Footer() {
  return (
    <footer id="footer" className="mt-auto bg-[#0f2a4a] text-white">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr_1.2fr] lg:gap-8">
          {/* Logo Column */}
          <div>
            <img
              src="/kite-finance-final-white-dark-bg.svg"
              alt="Kite Finance"
              width={146}
              height={56}
              className="h-14 w-auto"
            />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
              Hassle-free credit for India&apos;s small businesses. Quick approvals, minimal paperwork, transparent terms.
            </p>
          </div>

          {/* Links Column */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-white/45 mb-4">
              Company &amp; Legal
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-x-4 gap-y-2 text-sm text-white/70">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  {link.href.startsWith("/") ? (
                    <Link href={link.href} className="hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Office Column */}
          <div className="space-y-6 text-sm text-white/75">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-white/45 mb-2 flex items-center gap-1.5">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Registered office address:
              </h3>
              <p className="leading-relaxed text-white/60">
                SF-04, Smart Square, Krishna Temple<br />
                Road, Stage 1 Indiranagar -<br />
                Bangalore 560038 - Karnataka.
              </p>
            </div>

            <div className="space-y-2">
              <p className="flex items-center gap-2 text-white/60">
                <svg className="h-4 w-4 text-white/45" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:Info@kitefinance.in" className="hover:text-white transition-colors">
                  Info@kitefinance.in
                </a>
              </p>
              <p className="flex items-center gap-2 text-white/60">
                <svg className="h-4 w-4 text-white/45" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+916366452827" className="hover:text-white transition-colors">
                  +91 6366452827
                </a>
              </p>
            </div>

            <div className="border-t border-white/10 pt-4">
              <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-white/45 mb-2">
                Grievance Redressal
              </h3>
              <p className="text-white/60 leading-relaxed">
                Grievance Officer - Ms. Mittal Panchal<br />
                <a href="mailto:gro@kitefinance.in" className="text-white/80 hover:text-white underline">
                  gro@kitefinance.in
                </a><br />
                <a href="tel:6366452827" className="text-white/80 hover:text-white">
                  6366452827
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 flex flex-col md:flex-row md:items-start md:justify-between gap-6 text-xs leading-relaxed text-white/50">
          <p className="max-w-md">
            Note: We are a Non-Banking Financial Company registered with Reserve Bank of India<br />
            Company Name: Jayshree Dealers Private Limited<br />
            Corporate Identity Number (CIN) :U45201WB1996PTC079873
          </p>
          <p className="shrink-0">
            © 2024 All rights reserved | Kite Finance
          </p>
        </div>
      </div>
    </footer>
  );
}
