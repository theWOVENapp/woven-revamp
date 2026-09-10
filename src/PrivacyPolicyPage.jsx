import React from "react";

const PrivacyPolicyPage = () => {
  const dataCategories = [
    { category: "Identity Data", examples: "Name, email address", source: "User-provided" },
    { category: "Account Data", examples: "Hashed password, billing region, currency preference, timezone", source: "User-provided" },
    { category: "Content Data", examples: "Source drafts, captions, media, scheduled post metadata, voice samples", source: "User-generated" },
    { category: "Connected Platform Data", examples: "OAuth tokens, profile information, post performance", source: "Platform APIs" },
    { category: "AI Chat Data", examples: "Thread content, messages, intent classifications, escalation history", source: "User-generated" },
    { category: "Usage Data", examples: "Feature usage, session duration, IP address, device type", source: "Automatic" },
    { category: "Payment Data", examples: "Transaction records (card details processed by Stripe/Paystack; not stored by Woven)", source: "Payment processors" },
    { category: "Technical Data", examples: "Browser type, operating system, error logs", source: "Automatic" },
  ];

  const lawfulBasis = [
    { purpose: "Provision of Platform services", basis: "Contract performance" },
    { purpose: "AI content generation", basis: "Contract performance" },
    { purpose: "Payment processing", basis: "Contract performance" },
    { purpose: "Product improvement", basis: "Legitimate interest" },
    { purpose: "Security and fraud prevention", basis: "Legitimate interest" },
    { purpose: "Marketing communications", basis: "Consent" },
    { purpose: "Analytics and cookies", basis: "Consent" },
  ];

  const recipients = [
    { recipient: "Connected Platforms (Meta, X, LinkedIn, TikTok)", purpose: "Publishing, engagement management" },
    { recipient: "Stripe, Paystack", purpose: "Payment processing" },
    { recipient: "AWS, Firebase, Sentry, LogRocket", purpose: "Infrastructure, monitoring" },
    { recipient: "Legal authorities", purpose: "Where required by law" },
  ];

  const retention = [
    { category: "Account Data", period: "Active account + 30 days post-deletion" },
    { category: "Content Data", period: "Active account + 30 days post-deletion" },
    { category: "Credit Ledger", period: "7 years (financial audit compliance; anonymized post-deletion)" },
    { category: "AI Chat Data", period: "12 months, then anonymized" },
    { category: "Backups", period: "Up to 90 days post-deletion" },
  ];

  const rights = [
    "Access your personal data",
    "Rectify inaccurate data",
    "Erase your data (right to be forgotten)",
    "Restrict processing",
    "Port your data",
    "Object to processing",
    "Withdraw consent at any time",
    "Lodge a complaint with a supervisory authority",
  ];

  return (
    <div className="legal-page privacy-page">
      <header className="legal-header">
        <p className="eyebrow">Legal</p>
        <h1>Privacy Policy</h1>
        <div className="legal-meta">
          <span><strong>Effective:</strong> [DATE]</span>
          <span><strong>Last Reviewed:</strong> [DATE]</span>
          <span><strong>Version:</strong> 1.0</span>
        </div>
      </header>

      <section className="legal-section">
        <h2><span className="section-num">3.1</span> Introduction</h2>
        <p>
          This Privacy Policy ("Policy") describes how <strong>[Woven Legal Entity Name]</strong>{" "}
          collects, uses, discloses, and safeguards personal data in connection with
          the Platform.
        </p>
        <p>Woven is committed to data protection in accordance with:</p>
        <ul className="legal-list">
          <li><strong>Nigeria Data Protection Regulation (NDPR)</strong> — Nigeria</li>
          <li><strong>General Data Protection Regulation (GDPR)</strong> — EU / UK</li>
          <li><strong>California Consumer Privacy Act (CCPA)</strong> — California, USA, where applicable</li>
        </ul>
      </section>

      <section className="legal-section">
        <h2><span className="section-num">3.2</span> Data Controller</h2>
        <div className="contact-card-legal">
          <p><strong>[Woven Legal Entity Name]</strong></p>
          <p>[Registered Address]</p>
          <p>Lagos, Nigeria</p>
          <p>Email: <a href="mailto:privacy@woven.so">privacy@woven.so</a></p>
          <p>Data Protection Officer: [Name / Email]</p>
        </div>
      </section>

      <section className="legal-section">
        <h2><span className="section-num">3.3</span> Categories of Personal Data Collected</h2>
        <div className="privacy-table-wrap">
          <table className="privacy-table">
            <thead>
              <tr>
                <th>Category</th>
                <th>Examples</th>
                <th>Source</th>
              </tr>
            </thead>
            <tbody>
              {dataCategories.map((d) => (
                <tr key={d.category}>
                  <td><strong>{d.category}</strong></td>
                  <td>{d.examples}</td>
                  <td>{d.source}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="legal-section">
        <h2><span className="section-num">3.4</span> Lawful Basis for Processing</h2>
        <div className="lawful-grid">
          {lawfulBasis.map((l) => (
            <div className="lawful-card" key={l.purpose}>
              <span className="lawful-purpose">{l.purpose}</span>
              <span className="lawful-basis-tag">{l.basis}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="legal-section">
        <h2><span className="section-num">3.5</span> How We Use Personal Data</h2>
        <ul className="legal-list">
          <li>Provide, operate, and maintain the Platform</li>
          <li>Generate AI-assisted content</li>
          <li>Publish and schedule content to Connected Platforms</li>
          <li>Process payments and manage credits</li>
          <li>Communicate transactional and service-related information</li>
          <li>Improve AI quality and Platform functionality</li>
          <li>Detect, prevent, and address security incidents</li>
          <li>Comply with legal and regulatory obligations</li>
        </ul>
      </section>

      <section className="legal-section">
        <h2><span className="section-num">3.6</span> AI Training and Data Usage</h2>
        <p><strong>3.6.1</strong> Woven does <strong>not</strong> train public AI models on User content.</p>
        <p><strong>3.6.2</strong> We may use User content to improve Woven's proprietary AI systems. Such use is internal to Woven.</p>
        <p><strong>3.6.3 Opt-Out.</strong> Users may opt out via Settings → Privacy. Opt-out does not impair Platform functionality.</p>
        <p><strong>3.6.4 Third-Party LLM Providers.</strong> Woven utilizes LiteLLM to route requests to Anthropic (Claude) and OpenAI (GPT-4o-mini). These providers do not train their models on User data.</p>
      </section>

      <section className="legal-section">
        <h2><span className="section-num">3.7</span> Data Sharing and Disclosure</h2>
        <div className="recipient-grid">
          {recipients.map((r) => (
            <div className="recipient-card" key={r.recipient}>
              <h3>{r.recipient}</h3>
              <p>{r.purpose}</p>
            </div>
          ))}
        </div>
        <p className="legal-note">
          We do <strong>not</strong> sell personal data. We do <strong>not</strong> share content with advertisers.
        </p>
      </section>

      <section className="legal-section">
        <h2><span className="section-num">3.8</span> International Data Transfers</h2>
        <p>
          Woven's infrastructure is hosted primarily in the EU and US (AWS). Where
          personal data is transferred outside your jurisdiction, we rely on:
        </p>
        <ul className="legal-list">
          <li>Standard Contractual Clauses (SCCs)</li>
          <li>Adequacy decisions (where applicable)</li>
          <li>Equivalent safeguards as required by NDPR and GDPR</li>
        </ul>
      </section>

      <section className="legal-section">
        <h2><span className="section-num">3.9</span> Data Retention</h2>
        <div className="retention-grid">
          {retention.map((r) => (
            <div className="retention-card" key={r.category}>
              <span className="retention-category">{r.category}</span>
              <span className="retention-period">{r.period}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="legal-section">
        <h2><span className="section-num">3.10</span> Data Subject Rights</h2>
        <p>Under NDPR, GDPR, and applicable law, you have the right to:</p>
        <ul className="rights-list">
          {rights.map((r, i) => (
            <li key={r}>
              <span className="right-letter">{String.fromCharCode(97 + i)}</span>
              <span>{r}</span>
            </li>
          ))}
        </ul>
        <p>
          To exercise any right, contact <a href="mailto:privacy@woven.so">privacy@woven.so</a>. We respond within thirty (30) days.
        </p>
        <p className="legal-note">
          <strong>Nigerian Users:</strong> Complaints may be directed to the Nigeria Data Protection Commission (NDPC).<br />
          <strong>EU/UK Users:</strong> Complaints may be directed to your local supervisory authority.
        </p>
      </section>

      <section className="legal-section">
        <h2><span className="section-num">3.11</span> Data Security</h2>
        <ul className="legal-list">
          <li>AES-256 encryption for OAuth tokens (Token Vault)</li>
          <li>TLS encryption for data in transit</li>
          <li>Encryption at rest for PostgreSQL storage</li>
          <li>Signed URLs for media access</li>
          <li>Role-based access controls</li>
          <li>Regular security audits and penetration testing</li>
        </ul>
        <p className="legal-note">
          In the event of a personal data breach affecting your rights, we will
          notify you within seventy-two (72) hours of detection.
        </p>
      </section>

      <section className="legal-section">
        <h2><span className="section-num">3.12</span> Children's Privacy</h2>
        <p>
          The Platform is not intended for individuals under eighteen (18) years of
          age. We do not knowingly collect data from minors.
        </p>
      </section>

      <section className="legal-section">
        <h2><span className="section-num">3.13</span> Cookies</h2>
        <p>For information on Cookies, please refer to our Cookie Policy.</p>
      </section>

      <section className="legal-section">
        <h2><span className="section-num">3.14</span> Changes to This Policy</h2>
        <p>
          We reserve the right to amend this Policy. Material changes will be
          communicated not less than fourteen (14) days prior to the effective date.
        </p>
      </section>

      <section className="legal-section contact-block">
        <h2><span className="section-num">3.15</span> Contact</h2>
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

export default PrivacyPolicyPage;