import Link from "next/link";

const legalLinks = [
  { label: "About Us", href: "/about-us" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Fair Practice Code for Collection and Recovery", href: "/doc/NBFC%20Fair%20practices%20for%20Code%20Collection%20and%20Recovery%20(New).pdf" },
  { label: "Fair Practice Code", href: "/doc/Fair%20Practices%20Code%20(New).pdf" },
  { label: "Code of conduct for DSA & DMA", href: "/doc/Code%20of%20Conduct%20for%20DSA%20%26%20MSA%20(New).pdf" },
  { label: "IT Usage Policy", href: "/doc/Kite%20IT%20Usage%20Policy%20(New).pdf" },
  { label: "KYC & AML Policy", href: "/doc/(KYC%20%26%20AML)%20Know%20Your%20Customer%20and%20Anti%20Money%20Laundering%20Policy%20(New).pdf" },
  { label: "Business Continuity Plan", href: "/doc/Kite%20Business%20Continuity%20Plan%20(New).pdf" },
  { label: "Approach for Risk Gradation", href: "/doc/Kite%20Approach%20on%20Gradation%20of%20Risk%20(New).pdf" },
  { label: "MITC", href: "/doc/Kite%20MITC%20Policy%20(New).pdf" },
  { label: "Our LSPs list", href: "/doc/Kite%20LSP%20(New)%20.pdf" },
  { label: "Customer Grievance Redressal Mechanism", href: "/doc/Kite%20Customer%20Redressal%20Mechanism%20(New).pdf" },
];

export default function Footer() {
  return (
    <footer id="footer" className="mt-auto bg-[#0f2a4a] text-white">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr_1.2fr] lg:gap-8">
          {/* Logo Column */}
          <div>
            <img
              src="/newkitewashed.svg"
              alt="Kite Finance"
              width={202}
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
                  {link.href.startsWith("/") && !link.href.endsWith(".pdf") ? (
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

            </div>

            <div className="border-t border-white/10 pt-4">
              <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-white/45 mb-2">
                Grievance Redressal
              </h3>
              <div className="text-white/60 leading-relaxed space-y-1.5">
                <div>Grievance Officer - Ms. Mittal Panchal</div>
                <div className="flex items-center gap-2">
                  <svg className="h-4 w-4 text-white/45" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:gro@kitefinance.in" className="hover:text-white transition-colors">
                    gro@kitefinance.in
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="h-4 w-4 text-white/45" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href="tel:+916366452827" className="hover:text-white transition-colors">
                    +91 6366452827
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 flex flex-col md:flex-row md:items-start md:justify-between gap-6 text-xs leading-relaxed text-white/50">
          <p className="max-w-md">
            Note: We are a Non-Banking Financial Company registered with Reserve Bank of India<br />
            Company Name: Jayshree Credit Services Private Limited (formerly known as Jayshree Dealers Private Limited)<br />
            Corporate Identity Number (CIN): U64920KA1996PTC202260
          </p>
          <p className="shrink-0">
            © 2024 All rights reserved | Kite Finance
          </p>
        </div>
      </div>
    </footer>
  );
}
