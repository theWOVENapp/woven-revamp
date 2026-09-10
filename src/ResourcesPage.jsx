import React from "react";

const ResourcesPage = () => {
  const knowledgeBase = [
    {
      section: "Getting Started",
      icon: "fa-rocket",
      items: [
        { name: "Onboarding Guide", desc: "End-to-end walkthrough from Anonymous Wow demo to first publish" },
        { name: "Connecting Instagram", desc: "OAuth setup, Meta Business Verification, and Mobile Push fallback" },
        { name: "Understanding Credits", desc: "Credit architecture, operation costs, and purchase flows" },
        { name: "The Omnibox", desc: "Source drafts, platform variants, and sync behavior" },
      ],
    },
    {
      section: "AI Co-Writing",
      icon: "fa-wand-magic-sparkles",
      items: [
        { name: "Tone Presets Guide", desc: "Detailed breakdown of each preset with examples" },
        { name: "Source Draft Best Practices", desc: "Optimizing input for superior AI output" },
        { name: "Image Context", desc: "Leveraging vision models for 4x caption quality" },
        { name: "Variate Generator", desc: "When to request multiple options and how to select" },
        { name: "Remix Engine (Phase 1.5)", desc: "Platform-native content repurposing" },
      ],
    },
    {
      section: "Publishing & Scheduling",
      icon: "fa-calendar-check",
      items: [
        { name: "Auto-Publish vs. Mobile Push", desc: "Decision framework for publishing paths" },
        { name: "API Failure Handling", desc: "Auto-retry pipeline, refunds, and fallback" },
        { name: "Media Validation", desc: "Aspect ratios, auto-cropping, and rejection paths" },
        { name: "Optimal Scheduling", desc: "General best practices for posting times" },
      ],
    },
    {
      section: "AI Chat (Phase 2)",
      icon: "fa-comments",
      items: [
        { name: "Human-in-the-Loop", desc: "Confidence thresholds, escalation triggers" },
        { name: "Escalation Configuration", desc: "Customizing AI autonomy boundaries" },
        { name: "Intent Classification", desc: "Categories and escalation rules" },
        { name: "Learning Loop", desc: "How human edits improve AI quality" },
      ],
    },
    {
      section: "Billing & Pricing",
      icon: "fa-credit-card",
      items: [
        { name: "Regional Pricing", desc: "Global vs. Nigeria billing tracks" },
        { name: "Overage Policy", desc: "Credit pool limits and overage rates" },
        { name: "Credit Packs", desc: "Pay-as-you-go vs. subscription comparison" },
        { name: "Payment Methods", desc: "Stripe and Paystack supported methods" },
      ],
    },
    {
      section: "Technical Documentation",
      icon: "fa-code",
      items: [
        { name: "Immutable Credit Ledger", desc: "Append-only architecture and race-condition prevention" },
        { name: "Mobile Push Queue", desc: "API risk mitigation and habit formation" },
        { name: "Product Philosophy", desc: "AI-first, progressive disclosure, trust through transparency" },
        { name: "Time-to-Wow Metric", desc: "North Star onboarding metric" },
      ],
    },
    {
      section: "Agency Resources",
      icon: "fa-briefcase",
      items: [
        { name: "Multi-Client Management", desc: "Workspaces, approval queues, brand separation" },
        { name: "White-Label Reports (Phase 3)", desc: "Branded analytics for clients" },
        { name: "Agency Pricing", desc: "Large/Agency tier and custom plans" },
      ],
    },
  ];

  const developerResources = [
    { name: "API Reference", desc: "Phase 1 endpoints and authentication", icon: "fa-plug" },
    { name: "Webhooks", desc: "Stripe and Paystack webhook integration", icon: "fa-webhook" },
    { name: "Status Page", desc: "Real-time Platform availability", icon: "fa-signal" },
  ];

  const community = [
    { name: "Creator Stories", desc: "User interviews and case studies", icon: "fa-users" },
    { name: "Changelog", desc: "Weekly product updates", icon: "fa-list-check" },
    { name: "Feature Requests", desc: "Community voting on roadmap", icon: "fa-lightbulb" },
    { name: "Referral Program", desc: "Credit rewards for referrals (coming soon)", icon: "fa-gift" },
  ];

  const supportChannels = [
    { name: "Email Support", value: "support@woven.so", icon: "fa-envelope" },
    { name: "Contact Form", value: "woven.so/contact", icon: "fa-message" },
    { name: "Status Page", value: "status.woven.so", icon: "fa-signal" },
    { name: "Twitter/X", value: "@woven", icon: "fa-twitter" },
  ];

  return (
    <div className="resources-page">
      <header className="resources-hero">
        <p className="eyebrow">Resources</p>
        <h1>
          Everything you need<br />
          to <span className="highlight">weave with confidence.</span>
        </h1>
        <p className="lead">
          Comprehensive documentation, guides, and community resources for creators
          across all tiers.
        </p>
      </header>

      <section className="resources-kb">
        <h2>Knowledge Base</h2>
        <div className="kb-grid">
          {knowledgeBase.map((section) => (
            <article className="kb-card" key={section.section}>
              <div className="kb-header">
                <div className="kb-icon"><i className={`fas ${section.icon}`}></i></div>
                <h3>{section.section}</h3>
              </div>
              <ul className="kb-list">
                {section.items.map((item) => (
                  <li key={item.name}>
                    <div className="kb-item">
                      <span className="kb-item-name">{item.name}</span>
                      <span className="kb-item-desc">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="resources-dev">
        <h2>Developer Resources</h2>
        <div className="dev-grid">
          {developerResources.map((d) => (
            <div className="dev-card" key={d.name}>
              <i className={`fas ${d.icon}`}></i>
              <div>
                <h3>{d.name}</h3>
                <p>{d.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="resources-community">
        <h2>Community</h2>
        <div className="community-grid">
          {community.map((c) => (
            <div className="community-card" key={c.name}>
              <i className={`fas ${c.icon}`}></i>
              <h3>{c.name}</h3>
              <p>{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="resources-support">
        <h2>Support Channels</h2>
        <div className="support-grid">
          {supportChannels.map((s) => (
            <a className="support-card" key={s.name} href="#">
              <i className={`fas ${s.icon}`}></i>
              <div>
                <span className="support-name">{s.name}</span>
                <span className="support-value">{s.value}</span>
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ResourcesPage;