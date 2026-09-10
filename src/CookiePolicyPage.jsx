import React from "react";

const CookiePolicyPage = () => {
  const definitions = [
    { term: "Cookie", definition: "A small text file placed on your device that enables the Platform to recognize your device and store information about your preferences or past actions." },
    { term: "Strictly Necessary Cookies", definition: "Cookies required for the Platform to function. These cannot be disabled." },
    { term: "Functional Cookies", definition: "Cookies that enhance usability by remembering your preferences." },
    { term: "Analytical Cookies", definition: "Cookies that collect aggregated data on Platform usage." },
    { term: "Marketing Cookies", definition: "Cookies used to deliver relevant advertising and measure campaign performance." },
    { term: "Data Controller", definition: "The entity that determines the purposes and means of processing personal data." },
  ];

  const cookieCategories = [
    {
      title: "Strictly Necessary Cookies",
      desc: "These Cookies are essential to the operation of the Platform. They enable core functions including authentication, session management, security, and load balancing.",
      legal: "Legitimate interest / Contract performance",
      cookies: [
        { name: "woven_session", purpose: "Maintains authenticated session", duration: "Session", provider: "Woven" },
        { name: "woven_csrf", purpose: "CSRF protection", duration: "Session", provider: "Woven" },
        { name: "woven_draft", purpose: "Preserves Omnibox draft state", duration: "30 days", provider: "Woven" },
        { name: "__cf_bm", purpose: "Bot management and DDoS protection", duration: "30 minutes", provider: "Cloudflare" },
      ],
    },
    {
      title: "Functional Cookies",
      desc: "These Cookies remember your preferences and settings to provide a personalized experience.",
      legal: "Consent",
      cookies: [
        { name: "woven_theme", purpose: "Dark/light mode preference", duration: "12 months", provider: "Woven" },
        { name: "woven_tone", purpose: "Last-used tone preset", duration: "12 months", provider: "Woven" },
        { name: "woven_tz", purpose: "Timezone and locale", duration: "12 months", provider: "Woven" },
        { name: "woven_onboard", purpose: "Onboarding completion state", duration: "12 months", provider: "Woven" },
      ],
    },
    {
      title: "Analytical Cookies",
      desc: "These Cookies help us understand how the Platform is used, identify performance issues, and improve the product.",
      legal: "Consent",
      cookies: [
        { name: "_ga, _gid", purpose: "Traffic analysis", duration: "24 months", provider: "Google Analytics" },
        { name: "sentry_session", purpose: "Error tracking", duration: "Session", provider: "Sentry" },
        { name: "logrocket_session", purpose: "Session replay (masked)", duration: "Session", provider: "LogRocket" },
        { name: "woven_ttw", purpose: "Time-to-Wow measurement", duration: "12 months", provider: "Woven" },
      ],
    },
    {
      title: "Marketing Cookies",
      desc: "These Cookies measure the effectiveness of our marketing campaigns and deliver relevant advertising. We do not sell personal data.",
      legal: "Consent",
      cookies: [
        { name: "_fbp", purpose: "Meta Pixel attribution", duration: "90 days", provider: "Meta" },
        { name: "li_sugr", purpose: "LinkedIn attribution", duration: "90 days", provider: "LinkedIn" },
        { name: "woven_ref", purpose: "Referral tracking", duration: "90 days", provider: "Woven" },
      ],
    },
  ];

  const processors = [
    { name: "Stripe", purpose: "Payment processing", jurisdiction: "USA / EU" },
    { name: "Paystack", purpose: "Payment processing", jurisdiction: "Nigeria" },
    { name: "Firebase", purpose: "Push notifications", jurisdiction: "USA" },
    { name: "Sentry", purpose: "Error monitoring", jurisdiction: "USA" },
    { name: "LogRocket", purpose: "Session replay", jurisdiction: "USA" },
    { name: "Google Analytics", purpose: "Traffic analysis", jurisdiction: "USA" },
  ];

  return (
    <div className="legal-page cookie-page">
      {/* Header */}
      <header className="legal-header">
        <p className="eyebrow">Legal</p>
        <h1>Cookie Policy</h1>
        <div className="legal-meta">
          <span><strong>Effective:</strong> [DATE]</span>
          <span><strong>Last Reviewed:</strong> [DATE]</span>
          <span><strong>Version:</strong> 1.0</span>
        </div>
      </header>

      {/* 1.1 */}
      <section className="legal-section">
        <h2><span className="section-num">1.1</span> Introduction</h2>
        <p>
          This Cookie Policy ("Policy") describes how <strong>[Woven Legal Entity Name]</strong>{" "}
          ("Woven," "the Company," "we," "us," or "our") uses cookies, pixels, local
          storage, and similar tracking technologies (collectively, "Cookies") on
          woven.so and all associated subdomains, applications, and services
          (collectively, the "Platform").
        </p>
        <p>
          This Policy should be read in conjunction with our Privacy Policy, Terms of
          Service, and, where applicable, our Data Processing Agreement. By
          continuing to use the Platform, you consent to the use of Cookies as
          described herein, subject to your preferences as configured in the Cookie
          Consent Manager.
        </p>
      </section>

      {/* 1.2 Definitions */}
      <section className="legal-section">
        <h2><span className="section-num">1.2</span> Definitions</h2>
        <div className="definition-grid">
          {definitions.map((d) => (
            <div className="definition-card" key={d.term}>
              <h3>{d.term}</h3>
              <p>{d.definition}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 1.3 Categories */}
      <section className="legal-section">
        <h2><span className="section-num">1.3</span> Categories of Cookies We Use</h2>
        {cookieCategories.map((cat, idx) => (
          <div className="cookie-category" key={cat.title}>
            <h3>
              <span className="section-num">1.3.{idx + 1}</span> {cat.title}
            </h3>
            <p>{cat.desc}</p>
            <div className="cookie-table-wrap">
              <table className="cookie-table">
                <thead>
                  <tr>
                    <th>Cookie</th>
                    <th>Purpose</th>
                    <th>Duration</th>
                    <th>Provider</th>
                  </tr>
                </thead>
                <tbody>
                  {cat.cookies.map((c) => (
                    <tr key={c.name}>
                      <td><code>{c.name}</code></td>
                      <td>{c.purpose}</td>
                      <td>{c.duration}</td>
                      <td>{c.provider}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="legal-basis">
              <strong>Legal Basis:</strong> {cat.legal}
            </p>
          </div>
        ))}
      </section>

      {/* 1.4 Third-Party Processors */}
      <section className="legal-section">
        <h2><span className="section-num">1.4</span> Third-Party Processors</h2>
        <p>
          The following third-party processors may set Cookies on the Platform. Each
          maintains its own privacy and cookie policies:
        </p>
        <div className="processor-grid">
          {processors.map((p) => (
            <div className="processor-card" key={p.name}>
              <h3>{p.name}</h3>
              <p>{p.purpose}</p>
              <span className="jurisdiction">{p.jurisdiction}</span>
            </div>
          ))}
        </div>
        <p className="legal-note">
          We execute Data Processing Agreements with all processors and require
          equivalent data protection standards.
        </p>
      </section>

      {/* 1.5 Managing Preferences */}
      <section className="legal-section">
        <h2><span className="section-num">1.5</span> Managing Your Cookie Preferences</h2>
        <h3>1.5.1 Cookie Consent Manager</h3>
        <p>
          Upon first visit, you will be presented with a Cookie Consent Manager
          enabling you to:
        </p>
        <ul className="legal-list">
          <li>Accept All Cookies</li>
          <li>Reject Non-Essential Cookies</li>
          <li>Customize Preferences by category</li>
        </ul>
        <p>
          Your preferences are stored and may be updated at any time via the "Cookie
          Settings" link in the Platform footer.
        </p>

        <h3>1.5.2 Browser Controls</h3>
        <p>
          You may also manage Cookies through your browser settings. Note that
          disabling Strictly Necessary Cookies will impair Platform functionality.
        </p>

        <h3>1.5.3 Do Not Track</h3>
        <p>
          We honor Do Not Track (DNT) and Global Privacy Control (GPC) signals by
          disabling Analytical and Marketing Cookies when such signals are detected.
        </p>
      </section>

      {/* 1.6-1.9 */}
      <section className="legal-section">
        <h2><span className="section-num">1.6</span> International Data Transfers</h2>
        <p>
          Cookies may transfer data to jurisdictions outside your country of
          residence. Where required, we rely on Standard Contractual Clauses (SCCs)
          and equivalent safeguards.
        </p>
      </section>

      <section className="legal-section">
        <h2><span className="section-num">1.7</span> Retention</h2>
        <p>
          Cookie retention periods are specified in Sections 1.3.1–1.3.4. Consent
          records are retained for a minimum of three (3) years to demonstrate
          compliance.
        </p>
      </section>

      <section className="legal-section">
        <h2><span className="section-num">1.8</span> Changes to This Policy</h2>
        <p>
          We reserve the right to amend this Policy. Material changes will be
          communicated via in-app notification or email not less than fourteen (14)
          days prior to the effective date.
        </p>
      </section>

      <section className="legal-section contact-block">
        <h2><span className="section-num">1.9</span> Contact</h2>
        <div className="contact-card-legal">
          <p><strong>Data Protection Officer</strong></p>
          <p>[Woven Legal Entity Name]</p>
          <p>[Registered Address]</p>
          <p>Email: <a href="mailto:privacy@woven.so">privacy@woven.so</a></p>
        </div>
      </section>
    </div>
  );
};

export default CookiePolicyPage;