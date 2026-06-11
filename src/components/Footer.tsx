import Link from "next/link";

const legalLinks = [
  "About us",
  "Privacy Policy",
  "Fair Practice Code to Directors and key personnel",
  "Fair Practice Code",
  "Grievance Redressal Officer",
  "IT Usage Policy",
  "KYC & AML Policy",
  "Platform Facilitator Fee",
  "Responsible Co-Lending Policy",
  "T&C",
  "Vigil Mechanism",
  "Customer Grievance Redressal Mechanism",
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
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-sm text-white/70">
              {legalLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-white transition-colors">
                    {link}
                  </a>
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
                Registered Office Address
              </h3>
              <p className="leading-relaxed text-white/60">
                840, 1st &amp; 2nd Floor, 5th Cross,<br />
                11th Main Rd, HAL 2nd Stage,<br />
                Indiranagar, Bengaluru,<br />
                Karnataka 560008 - India
              </p>
            </div>

            <div className="space-y-2">
              <p className="flex items-center gap-2 text-white/60">
                <svg className="h-4 w-4 text-white/45" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@kite-fin.com" className="hover:text-white transition-colors">
                  info@kite-fin.com
                </a>
              </p>
              <p className="flex items-center gap-2 text-white/60">
                <svg className="h-4 w-4 text-white/45" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+918591863557" className="hover:text-white transition-colors">
                  +91 85918 63557
                </a>
              </p>
            </div>

            <div className="border-t border-white/10 pt-4">
              <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-white/45 mb-2">
                Grievance Redressal
              </h3>
              <p className="text-white/60 leading-relaxed">
                Mr. Wasif Kareem (Grievance Redressal Officer)<br />
                <a href="mailto:gro@kite-fin.com" className="text-white/80 hover:text-white underline">
                  gro@kite-fin.com
                </a><br />
                <a href="tel:02269022029" className="text-white/80 hover:text-white">
                  022 6902 2029
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 flex flex-col md:flex-row md:items-start md:justify-between gap-6 text-xs leading-relaxed text-white/50">
          <p className="max-w-md">
            Kite Finance Private Limited is a non-banking financial company
            (NBFC) registered with the Reserve Bank of India. Registration No. B-02.00067.
            RBI does not accept any responsibility or guarantee about the present position as to the financial soundness of the company or for the correctness of any of the statements or representations made or opinions expressed by the company and for repayment of deposits/ discharge of liabilities by the company.
          </p>
          <p className="shrink-0">
            © 2024 All rights reserved | Kite Finance
          </p>
        </div>
      </div>
    </footer>
  );
}
