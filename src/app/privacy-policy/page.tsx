import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Shield,
  Printer,
  Clock,
  Mail,
  Phone,
  MapPin,
  Building,
  UserCheck
} from "lucide-react";

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

const sections = [
  { id: "definitions", title: "1. Definitions" },
  { id: "applicability", title: "2. Applicability" },
  { id: "privacy", title: "Privacy Statement" },
  { id: "collection", title: "Collection of Data" },
  { id: "cookies", title: "Cookies & Web Activity" },
  { id: "data", title: "Types of Data" },
  { id: "usage", title: "Usage of Data" },
  { id: "sharing", title: "Sharing of Personal Data" },
  { id: "retention", title: "Retention of Information" },
  { id: "security", title: "Security Protocols" },
  { id: "rights", title: "User Rights" },
  { id: "minors", title: "Data Pertaining to Minors" },
  { id: "international", title: "International Users" },
  { id: "updates", title: "Policy Updates" },
  { id: "governing-law", title: "Governing Law & Grievance Cell" },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />

      <main id="main-content" className="flex-grow bg-slate-50/40 py-12 print:bg-white print:py-0">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          
          {/* Corporate Header - Printable */}
          <div className="mb-10 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm print:shadow-none print:border-none print:p-0">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 border-b border-slate-100 pb-6 print:pb-4">
              <div>
                <h1 className="font-display text-2xl font-bold text-ink">
                  Jayshree Credit Services Private Limited
                </h1>
                <p className="text-xs font-semibold text-ink/50 mt-1 uppercase tracking-wider">
                  (Formerly known as &ldquo;Jayshree Dealers Private Limited&rdquo;)
                </p>
                <p className="text-xs text-royal font-bold mt-1">
                  CIN: U64920KA1996PTC202260
                </p>
              </div>
              <div className="text-xs text-ink/70 space-y-1 md:text-right print:text-left">
                <p className="flex items-center md:justify-end gap-1.5 font-medium">
                  <MapPin className="h-3.5 w-3.5 text-ink/40" />
                  SF-04, Smart Square, Shri Krishna Temple Road, Binnamangala,
                </p>
                <p className="font-medium pl-5 md:pl-0">
                  Hoysala Nagar, Indiranagar, Bengaluru - 560038, Karnataka
                </p>
                <div className="flex flex-wrap md:justify-end gap-4 pt-1 font-semibold text-royal">
                  <span className="flex items-center gap-1">
                    <Phone className="h-3 w-3" />
                    +91 6366452827
                  </span>
                  <span className="flex items-center gap-1">
                    <Mail className="h-3 w-3" />
                    info@kitefinance.in
                  </span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 print:hidden">
              <div className="flex items-center gap-2 text-xs font-semibold text-ink/50">
                <Clock className="h-4 w-4" />
                <span>Last Updated: June 2026</span>
              </div>
              <button
                onClick={() => window.print()}
                className="inline-flex items-center gap-1.5 rounded-lg border border-ink/10 bg-white px-3 py-1.5 text-xs font-bold text-ink shadow-xs hover:bg-slate-50 transition-colors"
              >
                <Printer className="h-3.5 w-3.5" />
                Print Policy
              </button>
            </div>
          </div>

          {/* Main Layout Grid */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4 items-start">
            
            {/* Sticky Navigation Sidebar */}
            <aside className="sticky top-24 hidden lg:block border-r border-slate-100 pr-6 print:hidden">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-ink/40 mb-4">
                <Shield className="h-4 w-4 text-royal" />
                <span>Privacy Navigation</span>
              </div>
              <nav className="space-y-1">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="block rounded-lg px-3 py-2 text-xs font-semibold text-ink/65 hover:bg-slate-50 hover:text-royal transition-all"
                  >
                    {section.title}
                  </a>
                ))}
              </nav>
            </aside>

            {/* Content Area */}
            <article className="lg:col-span-3 prose prose-slate max-w-none rounded-3xl border border-slate-100 bg-white p-8 shadow-sm print:border-none print:p-0 print:shadow-none">
              
              <h2 className="font-display text-3xl font-extrabold text-ink tracking-tight border-b border-slate-100 pb-4 mb-6 print:text-2xl print:border-b-2 print:border-ink">
                PRIVACY POLICY
              </h2>
              
              <p className="text-[15px] leading-relaxed text-ink/80 mb-6">
                This privacy policy (&ldquo;<strong>Policy</strong>&rdquo;) is owned by <strong>Jayshree Credit Services Private Limited</strong>, also known as &ldquo;<strong>Kite Finance</strong>&rdquo; (&ldquo;<strong>Company</strong>&rdquo;, &ldquo;<strong>We</strong>&rdquo;, &ldquo;<strong>Us</strong>&rdquo;, &ldquo;<strong>Our</strong>&rdquo;). It helps Users understand Our approach to the processing of personal data. We treat data privacy with utmost care and diligence and maintain transparency to disseminate information on how Your personal data may be used by Us.
              </p>

              {/* Definitions */}
              <section id="definitions" className="scroll-mt-24 mb-10 print:mb-6">
                <h3 className="text-lg font-bold text-ink mb-4 border-b border-slate-100 pb-2">
                  1. Definitions
                </h3>
                <p className="text-[15px] leading-relaxed text-ink/80 mb-4">
                  The Policy uses terms in the context as follows:
                </p>
                <ol className="list-lower-roman pl-5 space-y-3.5 text-sm leading-relaxed text-ink/75">
                  <li>
                    &ldquo;<strong>We</strong>&rdquo;, &ldquo;<strong>Us</strong>&rdquo;, &ldquo;<strong>Our</strong>&rdquo;, &ldquo;<strong>Company</strong>&rdquo; refers to Jayshree Credit Services Private Limited, also known as Kite Finance, its group companies and affiliates, the website, mobile application, services, features, and related web-based applications, as the context may require; and
                  </li>
                  <li>
                    &ldquo;<strong>You</strong>&rdquo;, &ldquo;<strong>Your</strong>&rdquo; or &ldquo;<strong>User</strong>&rdquo; refers to all natural persons, body corporates, their employees, authorised representatives, and/or any person using the services or providing personal data to Us in any form, including persons who are not customers of the Company.
                  </li>
                  <li>
                    &ldquo;<strong>Personal Data</strong>&rdquo; as per applicable laws, means any data about an individual who is identifiable by or in relation to such data and generally includes information such as name, contact information, communications, financial identifiers, online identifiers, device information, and any other data classified as personal data under applicable law.
                  </li>
                </ol>
              </section>

              {/* Applicability */}
              <section id="applicability" className="scroll-mt-24 mb-10 print:mb-6">
                <h3 className="text-lg font-bold text-ink mb-4 border-b border-slate-100 pb-2">
                  2. Applicability
                </h3>
                <div className="space-y-4 text-sm leading-relaxed text-ink/75">
                  <p>
                    This Policy applies to Personal Data of any natural person that is collected, received, stored, processed or otherwise handled by the Company in connection with the provision of Services, whether such Personal Data is collected directly from You or is digitized after being collected in physical form.
                  </p>
                  <p>
                    This Policy also applies where the Company distributes, refers, integrates, or acts through service providers, referral partners, lending partners, technology partners, collection partners, resellers, implementation partners or other intermediaries in relation to products or services made available to You through or in connection with the Services.
                  </p>
                  <p>
                    In the event You are using the website, mobile application or Services as an authorised signatory, authorised representative, employee, consultant, director, guarantor, co-applicant, or other authorised person of a body corporate or non-individual entity, this Policy shall apply to Your Personal Data as well. Terms and conditions, product-specific agreements and any other consents that You may give to or for the benefit of the Company may contain additional privacy-related provisions. This Policy does not limit or supersede any such specific terms or consents. Any information that is available in the public domain, or which is otherwise made publicly available by You or any third party, does not form part of this Privacy Policy.
                  </p>
                  <p className="font-semibold text-ink">
                    Your use of or access to the services shall confirm Your understanding, acknowledgement and acceptance of this Policy. By using Our website, or Services, You expressly consent to the Company’s use of Your personal data in accordance with this Policy. If You do not agree with Our policies and practices as described in this Policy, You must not access our Services or provide any personal data to Us, or You may contact Us in the manner provided in this Policy.
                  </p>
                  <p>
                    The Website or its Services is intended only for persons who are 18 years of age or above and otherwise competent to contract under applicable law.
                  </p>
                </div>
              </section>

              {/* Privacy */}
              <section id="privacy" className="scroll-mt-24 mb-10 print:mb-6">
                <h3 className="text-lg font-bold text-ink mb-4 border-b border-slate-100 pb-2">
                  Privacy Statement
                </h3>
                <p className="text-sm leading-relaxed text-ink/75">
                  User privacy is of utmost importance to Us. We are committed to processing Personal Data lawfully, fairly, transparently, and strictly on a need-to-know basis in accordance with applicable law.
                </p>
              </section>

              {/* Collection */}
              <section id="collection" className="scroll-mt-24 mb-10 print:mb-6">
                <h3 className="text-lg font-bold text-ink mb-4 border-b border-slate-100 pb-2">
                  Collection of Data
                </h3>
                <p className="text-sm leading-relaxed text-ink/75">
                  We receive Your Personal Data through multiple sources, such as when You submit data to Us, make enquiries, apply for products or services, use the services, transact, engage with Us, use Our website or app, email or call Us, raise a complaint or grievance, through third parties, from information lawfully available in the public domain, and through cookies and similar technologies.
                </p>
              </section>

              {/* Cookies */}
              <section id="cookies" className="scroll-mt-24 mb-10 print:mb-6">
                <h3 className="text-lg font-bold text-ink mb-4 border-b border-slate-100 pb-2">
                  Cookies &amp; Web Activity
                </h3>
                <div className="space-y-4 text-sm leading-relaxed text-ink/75">
                  <p>
                    Information about Your web-based activity is collected using technologies known as cookies, which can often be controlled through internet browsers. The website and its services use cookies to uniquely recognize Your device and web browser, as well as to improve the performance and quality of Our services. We may use both session-based cookies and persistent cookies. If You block or disable cookies, certain features of the website might not function correctly or may become unavailable.
                  </p>
                  <p>
                    The Company may also work with selected third-party analytics and technology partners that may gather non-personally identifiable information about Your activity on Our website or app, including how You interact with the website, use Our features, and avail services, through their own cookies and similar technologies, subject always to applicable law.
                  </p>
                  <p>
                    We assume that all information provided by You is true, accurate, current, non-misleading, consistent and relevant on the date when it is provided. If any person other than You submits Your Personal Data to Us, We shall reasonably assume that such person has been duly authorised by You to submit such Personal Data, unless and until We are informed otherwise.
                  </p>
                  <p>
                    The Company shall collect only such Personal Data as is necessary, relevant, proportionate, and required for onboarding, KYC verification, credit underwriting, servicing, regulatory compliance, fraud prevention, and other lawful purposes expressly disclosed to the User. No excessive, unrelated, or unnecessary Personal Data shall be collected.
                  </p>
                  <p>
                    Prior to collecting any Personal Data, the Company shall obtain the User’s explicit, informed, affirmative, and purpose-specific consent through digital consent mechanisms such as click-wrap acceptance, checkbox confirmation, OTP verification, or other auditable electronic means.
                  </p>
                  <p>
                    The Company shall maintain a complete and auditable electronic record of all User consents obtained in connection with onboarding, underwriting, verification, sanction, documentation, servicing, and related lending activities, including the date, time, purpose, mode of consent, communication channel, relevant transaction reference from time to time.
                  </p>
                  <p>
                    Where any onboarding, verification, or compliance process requires access to device-based features such as camera, microphone, or location, such access shall be sought strictly on a one-time, purpose-specific basis, with the prior explicit consent of the User.
                  </p>
                  <p>
                    The Company shall not access, collect, monitor, store, or share the User’s contacts, call logs, SMS, photo gallery, media files, or other device storage content, unless expressly permitted under applicable law.
                  </p>
                </div>
              </section>

              {/* Data */}
              <section id="data" className="scroll-mt-24 mb-10 print:mb-6">
                <h3 className="text-lg font-bold text-ink mb-4 border-b border-slate-100 pb-2">
                  Types of Data Collected
                </h3>
                <div className="space-y-4 text-sm leading-relaxed text-ink/75">
                  <p>
                    The Personal Data collected or received could include Your name, address, signatures, date of birth, copies of identity cards and KYC documents, contact details including electronic mail ID and phone number, previous names, domicile, origin, citizenship, nationality, residence, any legal or other identifiers like Permanent Account Number (PAN), Aadhaar, passport, voter ID, driving licence or equivalent officially valid documents, photograph, gender, employment and occupational information, bank account details, card details, UPI handles, income details, borrowing history, repayment history, risk profile, preferences, tax-related information, bank statements, financial documents and returns, transaction information, information collected when You make or receive payments, information about visits to the website or app, website traffic data, location data, weblogs, browser details, IP address, device information, information collected through tracking technologies, communications with the Company or any of its representatives, grievance-related information, records of calls and correspondence, behavioural details, browsing actions, patterns and online activity, and any other information or Personal Data that You consent to share.
                  </p>
                  <p>
                    In order to provide lending and other financial services securely, enhance customer experience, underwrite credit exposure, comply with legal and regulatory obligations, and for limited marketing of Our services, Personal Data about You may also be obtained from other sources such as referral partners, service providers, affiliates, lending partners, account aggregators, credit information companies, financial information providers, KYC registration agencies, fraud prevention agencies, public databases, and other lawful sources.
                  </p>
                  <p className="font-semibold text-red-600 bg-red-50/50 rounded-xl p-4 border border-red-100/50 print:bg-white print:border-none print:p-0">
                    We do not ask for personal security details such as full passwords, PINs, OTPs or CVV information. If any request for such information is received purporting to be from Us, You are expected not to respond to it and to contact Us immediately.
                  </p>
                </div>
              </section>

              {/* Usage */}
              <section id="usage" className="scroll-mt-24 mb-10 print:mb-6">
                <h3 className="text-lg font-bold text-ink mb-4 border-b border-slate-100 pb-2">
                  Usage of Data
                </h3>
                <p className="text-sm leading-relaxed text-ink/75 mb-4">
                  The Company always processes Your Personal Data within the permissible usages set out in this Privacy Policy and applicable law. We use Personal Data for activities such as the following:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-sm leading-relaxed text-ink/75">
                  <li>(i) to process Your application, onboarding, KYC, verification and account creation;</li>
                  <li>(ii) to enable You to use Our website, app, and online services;</li>
                  <li>(iii) to provide lending, financial, support and related services;</li>
                  <li>(iv) to perform underwriting, risk assessment, fraud checks, due diligence, creditworthiness assessment and internal scoring;</li>
                  <li>(v) to enable payments, disbursals, repayments, collections and settlement-related activities;</li>
                  <li>(vi) to communicate with You regarding Your account, transactions, applications, service issues, changes in products, terms, policies or fees;</li>
                  <li>(vii) to provide customer service and grievance redressal;</li>
                  <li>(viii) to collect overdue amounts and carry out lawful recovery and collection activities;</li>
                  <li>(ix) to perform analytics, service improvement, product development and quality monitoring;</li>
                  <li>(x) to improve website and app usability, training, user experience and operational efficiency;</li>
                  <li>(xi) to liaise with affiliates, Partners and service providers to provide selected services to Our Users;</li>
                  <li>(xii) to send service-related messages, updates, offers, surveys and feedback requests, subject to applicable law;</li>
                  <li>(xiii) to establish, exercise or defend legal claims;</li>
                  <li>(xiv) to comply with contractual, legal, regulatory, supervisory, audit and reporting obligations;</li>
                  <li>(xv) for matters incidental or necessary to the above; and</li>
                  <li>(xvi) to undertake any other use that You specifically consent to or authorise Us to undertake.</li>
                </ul>
                <p className="text-sm leading-relaxed text-ink/75 mt-4">
                  At the time consent is sought from the User, the Company shall clearly disclose the specific purpose, lawful basis, nature of processing, retention requirements, and sharing arrangements relating to the Personal Data being collected, so that the User may make an informed decision before granting consent.
                </p>
                <p className="text-sm leading-relaxed text-ink/75 mt-2">
                  The Company may share Your Personal Data with any third party pursuant to the specific prior consent obtained from You. The Company shall retain such Personal Data only for as long as is necessary to fulfil the purpose for which it was collected, save and except as required under applicable law.
                </p>
              </section>

              {/* Sharing */}
              <section id="sharing" className="scroll-mt-24 mb-10 print:mb-6">
                <h3 className="text-lg font-bold text-ink mb-4 border-b border-slate-100 pb-2">
                  Sharing of Personal Data
                </h3>
                <div className="space-y-4 text-sm leading-relaxed text-ink/75">
                  <p>
                    The Company may share Personal Data strictly on a need-to-know basis and only for lawful purposes, subject to applicable law and, where required, the User’s prior explicit consent.
                  </p>
                  <p className="font-bold text-ink uppercase tracking-wider text-xs">
                    The Company may share Personal Data with:
                  </p>
                  <ol className="list-decimal pl-5 space-y-3">
                    <li>
                      Banks, NBFCs, co-lending partners, trustees, investors, assignees, or other regulated financial counterparties in connection with origination, servicing, assignment, securitisation, or administration of financial products.
                    </li>
                    <li>
                      Credit bureaus, credit information companies, account aggregators, financial information providers, and due diligence agencies.
                    </li>
                    <li>
                      Third-party service providers engaged for KYC verification, payments, collections, analytics, communications, storage, fraud prevention, technology support, and operational support.
                    </li>
                    <li>
                      Affiliates, subsidiaries, and group entities for lawful business, compliance, risk management, and service support purposes.
                    </li>
                    <li>
                      Regulators, governmental authorities, courts, tribunals, ombudsman institutions, auditors, and law enforcement authorities where required by law; and
                    </li>
                    <li>
                      Business partners or service providers in anonymised or aggregated form where no personally identifiable information is disclosed;
                    </li>
                    <li>
                      Where a User requests or avails any product or service offered by or through the Company or by any of your selected service providers, the Company may share such Personal Data with the relevant third-party service provider or partner to facilitate such product or service subject to applicable law and the individual&apos;s consent, where required.
                    </li>
                    <li>
                      Any third-party that the User consents to.
                    </li>
                  </ol>
                  <p>
                    Except where disclosure is mandated by law, regulatory direction, judicial process, or statutory reporting obligations, the Company shall not share personally identifiable User information without the User’s prior explicit, specific, granular, and revocable consent.
                  </p>
                  <p>
                    The Company may partner with other service providers, affiliates, regulated entities, lending partners, account aggregators, payment service providers, collection agencies, technology providers, analytics providers, referral partners, implementation partners and compliance support providers (&ldquo;<strong>Partners</strong>&rdquo;) to offer certain facilities and services to its Users. Any Personal Data shared by the Company with these Partners shall be limited to such information as is reasonably necessary for them to perform the services selected or required.
                  </p>
                  <p className="font-semibold text-ink">
                    We do not sell, rent or lease Personal Data to third parties. We may, however, disclose Personal Data where We believe in good faith that such disclosure is reasonably required:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 bg-slate-50/50 rounded-xl p-4 border border-slate-100 print:bg-white print:border-none print:p-0">
                    <li>(i) by law;</li>
                    <li>(ii) by any statutory, regulatory, supervisory or judicial authority;</li>
                    <li>(iii) to comply with legal process, search warrants, subpoenas, statutes or court orders;</li>
                    <li>(iv) to protect Our rights, reputation, safety and property, or that of Our Users, affiliates or the public;</li>
                    <li>(v) to detect, investigate or prevent fraud, cyber incidents, financial crime, unauthorised transactions or misuse of the website or its services;</li>
                    <li>(vi) in connection with a merger, acquisition, restructuring, sale of business or transfer of assets; or</li>
                    <li>(vii) for any other reason that the User consents to.</li>
                  </ul>
                </div>
              </section>

              {/* Retention */}
              <section id="retention" className="scroll-mt-24 mb-10 print:mb-6">
                <h3 className="text-lg font-bold text-ink mb-4 border-b border-slate-100 pb-2">
                  Retention of Information
                </h3>
                <div className="space-y-4 text-sm leading-relaxed text-ink/75">
                  <p>
                    We do not store Users’ full card authentication information, passwords, OTPs or PINs.
                  </p>
                  <p>
                    The Personal Data We collect will be securely stored by Us or by Our Partners for the purposes mentioned above beyond the expiry of the transactional or account-based relationship with You only if required to:
                  </p>
                  <ul className="list-disc pl-5 space-y-1.5">
                    <li>(a) comply with contractual, legal or regulatory obligations;</li>
                    <li>(b) establish, exercise or defend legal claims and resolve disputes;</li>
                    <li>(c) satisfy audit, compliance, fraud detection, supervisory review, legal inquiry, security incident investigation or law enforcement requirements;</li>
                    <li>(d) comply with NBFC, KYC, anti-money laundering, record retention or related financial sector requirements; or</li>
                    <li>(e) act in accordance with specific consents or lawful purposes.</li>
                  </ul>
                  <p>
                    Notwithstanding the generality of the foregoing, Your Personal Data shall be retained or deleted by the Company in strict compliance with statutory and regulatory requirements applicable from time to time.
                  </p>
                </div>
              </section>

              {/* Security */}
              <section id="security" className="scroll-mt-24 mb-10 print:mb-6">
                <h3 className="text-lg font-bold text-ink mb-4 border-b border-slate-100 pb-2">
                  Security Protocols
                </h3>
                <div className="space-y-4 text-sm leading-relaxed text-ink/75">
                  <p>
                    We maintain reasonable physical, technical and organisational security safeguards to protect Personal Data against loss, misuse, unauthorized access, disclosure, alteration and destruction. Personal Data is stored in secure servers with encryption and access controls. We also undertake appropriate measures to control access to computer resources and periodically review logs to detect unauthorised access.
                  </p>
                  <p>
                    The Company also has security measures in place to prevent, respond to and, where required, report any loss or breach of Personal Data and take remediation steps to prevent recurrence, in accordance with applicable law.
                  </p>
                </div>
              </section>

              {/* User Rights */}
              <section id="rights" className="scroll-mt-24 mb-10 print:mb-6">
                <h3 className="text-lg font-bold text-ink mb-4 border-b border-slate-100 pb-2">
                  User Rights
                </h3>
                <div className="space-y-4 text-sm leading-relaxed text-ink/75">
                  <p>
                    You may request access, correction, updation or erasure of Your Personal Data that You have submitted to the Company, subject to applicable law and regulatory requirements. In the event You wish to withdraw consent for further processing of Your Personal Data, or raise any grievances pertaining to Your Personal Data, You may do so by following the procedure set out below. Withdrawal of consent may impact the provision of all or certain services being provided to You at the time of such request.
                  </p>
                  <p>
                    To access, correct, update or erase Your Personal Data, or to withdraw consent or raise a grievance, You may write to Us using the contact details set out in this Policy. After verification of Your request, the Company shall take action within a reasonable period and subject to applicable law.
                  </p>
                  <p className="font-bold text-ink text-xs uppercase tracking-wider">
                    The User shall have the right at any time to:
                  </p>
                  <ul className="list-disc pl-5 space-y-1.5">
                    <li>(i) provide or withhold consent;</li>
                    <li>(ii) review previously granted consents;</li>
                    <li>(iii) modify, restrict, or revoke consent;</li>
                    <li>(iv) request deletion, anonymisation, or correction of Personal Data, subject to applicable law; and</li>
                    <li>(v) obtain information regarding the purposes for which consent has been used.</li>
                  </ul>
                  <p>
                    The Company shall provide appropriate digital mechanisms, including account settings, consent dashboards, or designated communication channels, to enable the exercise of such rights.
                  </p>
                  <p>
                    Withdrawal of consent shall be processed within a reasonable period, and no penalty, adverse action, or unauthorized processing shall continue after such withdrawal, except to the extent retention or processing is required under applicable law, contractual obligations, or regulatory requirements.
                  </p>
                </div>
              </section>

              {/* Minors */}
              <section id="minors" className="scroll-mt-24 mb-10 print:mb-6">
                <h3 className="text-lg font-bold text-ink mb-4 border-b border-slate-100 pb-2">
                  Data Pertaining to Minors
                </h3>
                <p className="text-sm leading-relaxed text-ink/75">
                  The website and its services are not designed for use by minors and does not knowingly collect, process or store personal data of children as defined under applicable law. Users are advised to ensure that no data relating to minors is submitted to the Platform. We do not accept liability for inadvertent submission of data pertaining to minors by Users.
                </p>
              </section>

              {/* International */}
              <section id="international" className="scroll-mt-24 mb-10 print:mb-6">
                <h3 className="text-lg font-bold text-ink mb-4 border-b border-slate-100 pb-2">
                  International Users
                </h3>
                <p className="text-sm leading-relaxed text-ink/75">
                  The Company is governed by the laws of India. If any User provides Personal Data pertaining to a foreign national, it shall be the responsibility of the User to keep such person informed of the contents of this Policy and obtain any required consent for processing in terms of this Policy. By providing such Personal Data to the Platform, it shall be deemed that the necessary authorization has been obtained.
                </p>
              </section>

              {/* Updates */}
              <section id="updates" className="scroll-mt-24 mb-10 print:mb-6">
                <h3 className="text-lg font-bold text-ink mb-4 border-b border-slate-100 pb-2">
                  Updates to the Privacy Policy
                </h3>
                <p className="text-sm leading-relaxed text-ink/75">
                  Our Privacy Policy may be updated from time to time, including necessary version changes to reflect legal, regulatory, business or operational developments. Users are advised to review this Policy periodically. By continuing to use Our services after such update, You shall be deemed to have accepted the revised Privacy Policy, to the extent permitted under applicable law.
                </p>
              </section>

              {/* Governing Law */}
              <section id="governing-law" className="scroll-mt-24 mb-6">
                <h3 className="text-lg font-bold text-ink mb-4 border-b border-slate-100 pb-2">
                  General / Governing Law / Grievance Officer
                </h3>
                <div className="space-y-4 text-sm leading-relaxed text-ink/75">
                  <p>
                    In the event any provision of this Privacy Policy is inconsistent with applicable law, including the Information Technology Act, 2000, rules made thereunder, financial sector regulations, or other applicable privacy or data protection laws, such applicable law shall prevail to the extent of the inconsistency.
                  </p>
                  <p>
                    This Privacy Policy shall be governed by and interpreted in accordance with the laws of India.
                  </p>
                  <p>
                    Any disputes arising in relation to this Privacy Policy shall be subject to the dispute resolution mechanism, jurisdiction and governing law provisions set out in the applicable Terms of Use, loan documentation, or other governing agreement executed with the Company, unless otherwise required by law.
                  </p>
                  
                  <div className="mt-8 rounded-2xl border border-slate-100 bg-slate-50/50 p-6 space-y-4 print:border-none print:p-0">
                    <p className="font-semibold text-ink flex items-center gap-2">
                      <UserCheck className="h-5 w-5 text-royal" />
                      If You have any questions, requests or complaints regarding this Privacy Policy or the processing of Your Personal Data, you may contact the grievance officer / designated contact person at:
                    </p>
                    <div className="pl-7 space-y-1 font-medium text-ink/80">
                      <p className="font-bold text-ink">Mrs. Mittal Panchal</p>
                      <p className="text-xs">Grievance Redressal Officer</p>
                      <p className="text-xs">Jayshree Credit Services Private Limited (also known as Kite Finance)</p>
                      <p className="text-xs pt-1">
                        Email: <a href="mailto:gro@kitefinance.in" className="text-royal hover:underline font-bold">gro@kitefinance.in</a>
                      </p>
                      <p className="text-xs">
                        Contact Number: <span className="font-semibold text-ink">+91-6366452827</span>
                      </p>
                    </div>
                    <p className="text-[11px] text-ink/50 pt-2 border-t border-slate-100">
                      Please reach out at the above details for any concerns or feedback in relation to this Policy or services rendered by the Company or any of its service providers.
                    </p>
                  </div>
                </div>
              </section>

            </article>

          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
