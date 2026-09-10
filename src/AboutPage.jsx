import React from "react";

const AboutPage = () => {
  const roadmap = [
    { phase: "Phase 1", timeline: "Months 1–5", scope: "Instagram-first MVP: Omnibox, AI co-writing, scheduling, Mobile Push Queue" },
    { phase: "Phase 1.5", timeline: "Post-PMF", scope: "X integration, Remix Engine, visual calendar, voice samples, Paystack" },
    { phase: "Phase 2", timeline: "Months 8–12", scope: "AI Chat with Human-in-the-Loop, LinkedIn, TikTok" },
    { phase: "Phase 3", timeline: "Months 12–18", scope: "Team workspaces, custom RAG knowledge base, advanced analytics, white-label agency portal" },
  ];

  const comparison = [
    { dimension: "Pricing Model", buffer: "Per-channel", hootsuite: "Per-seat", sprout: "Per-seat", woven: "Per-operation (credits)" },
    { dimension: "AI Depth", buffer: "Text rewrites", hootsuite: "None", sprout: "Alt text", woven: "Vision + voice + variates" },
    { dimension: "Free Tier", buffer: "Yes", hootsuite: "No", sprout: "No", woven: "Yes" },
    { dimension: "API Fallback", buffer: "None", hootsuite: "None", sprout: "None", woven: "Mobile Push Queue" },
    { dimension: "Voice Training", buffer: "None", hootsuite: "None", sprout: "None", woven: "Few-shot from history" },
  ];

  const corporateInfo = [
    { label: "Legal Entity", value: "[Woven Legal Entity Name]" },
    { label: "Registration Number", value: "RC-[XXXXXXX]" },
    { label: "Tax Identification Number", value: "TIN-[XXXXXXX]" },
    { label: "Registered Address", value: "[Street Address], Lagos, Nigeria" },
    { label: "Founded", value: "[Year]" },
    { label: "Industry", value: "Software as a Service (SaaS) — Social Media Management" },
  ];

  return (
    <div className="about-page">
      {/* Hero */}
      <section className="about-hero">
        <p className="eyebrow">About Woven</p>
        <h1>
          Weaving the future of<br />
          <span className="highlight">social publishing.</span>
        </h1>
        <p className="lead">
          Woven was founded to address a critical gap in the social media management
          market: the creative bottleneck. While existing tools optimize the logistics
          of publishing, none address the fundamental challenge of content creation —
          the blank caption box.
        </p>
      </section>

      {/* Mission */}
      <section className="about-mission">
        <div className="mission-card">
          <div className="mission-icon"><i className="fas fa-bullseye"></i></div>
          <h2>Our Mission</h2>
          <p>
            To eliminate the creative bottleneck in social media publishing by
            empowering creators with AI that sounds like them, not like a template.
          </p>
        </div>
      </section>

      {/* Principles */}
      <section className="about-principles">
        <h2>Core Principles</h2>
        <div className="principles-grid">
          <article className="principle-card">
            <div className="principle-icon"><i className="fas fa-robot"></i></div>
            <h3>AI-First, Not AI-Bolted-On</h3>
            <p>Woven's co-writing engine is the product; the calendar is the container. Scheduling is built around AI, not the reverse.</p>
          </article>
          <article className="principle-card">
            <div className="principle-icon"><i className="fas fa-layer-group"></i></div>
            <h3>Progressive Disclosure</h3>
            <p>One mode, one focus, one screen at a time. Plan, Create, and Inbox modes operate independently — never simultaneously.</p>
          </article>
          <article className="principle-card">
            <div className="principle-icon"><i className="fas fa-shield-halved"></i></div>
            <h3>Trust Through Transparency</h3>
            <p>Credits never expire. Failed publishes auto-refund. Pricing is per-operation, not per-token. Users always know what they are paying for and why.</p>
          </article>
          <article className="principle-card">
            <div className="principle-icon"><i className="fas fa-handshake"></i></div>
            <h3>Honest About AI Limitations</h3>
            <p>AI cannot handle refund disputes, demonstrate empathy, or make legal claims. Woven's Human-in-the-Loop architecture ensures sensitive interactions escalate to humans.</p>
          </article>
        </div>
      </section>

      {/* Market Positioning */}
      <section className="about-market">
        <h2>Market Positioning</h2>
        <p className="section-desc">
          Woven occupies the space between Buffer's affordability and Sprout Social's
          AI ambition, but with a fundamentally different value proposition:
          per-operation pricing, vision and voice AI, and a Mobile Push Queue that
          de-risks API dependency.
        </p>
        <div className="comparison-table-wrap">
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Dimension</th>
                <th>Buffer</th>
                <th>Hootsuite</th>
                <th>Sprout Social</th>
                <th className="woven-col">Woven</th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((row) => (
                <tr key={row.dimension}>
                  <td className="dimension">{row.dimension}</td>
                  <td>{row.buffer}</td>
                  <td>{row.hootsuite}</td>
                  <td>{row.sprout}</td>
                  <td className="woven-col">{row.woven}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Roadmap */}
      <section className="about-roadmap">
        <h2>Product Roadmap</h2>
        <div className="roadmap-grid">
          {roadmap.map((item) => (
            <article className="roadmap-card" key={item.phase}>
              <div className="roadmap-header">
                <span className="phase-badge">{item.phase}</span>
                <span className="timeline">{item.timeline}</span>
              </div>
              <p>{item.scope}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Leadership */}
      <section className="about-leadership">
        <h2>Leadership</h2>
        <div className="leader-card">
          <div className="leader-avatar"><i className="fas fa-user-tie"></i></div>
          <div>
            <h3>Olaniy Ayoola</h3>
            <p className="leader-role">Founder / Chief Executive Officer</p>
            <p className="leader-bio">
              [Biography — professional background, prior experience, and motivation
              for founding Woven]
            </p>
          </div>
        </div>
        <div className="leader-card">
          <div className="leader-avatar"><i className="fas fa-user-tie"></i></div>
          <div>
            <h3>Ademilua Adeola</h3>
            <p className="leader-role">Chief Technology Officer / AI + Full Stack Engineer</p>
            <p className="leader-bio">
              [Biography — professional background, prior experience, and motivation
              for founding Woven]
            </p>
          </div>
        </div>
        <p className="remote-note">
          Woven operates as a remote-first, async-first organization with team members
          distributed across Nigeria, the United Kingdom, and North America.
        </p>
      </section>

      {/* Corporate Info */}
      <section className="about-corporate">
        <h2>Corporate Information</h2>
        <div className="corporate-grid">
          {corporateInfo.map((item) => (
            <div className="corporate-item" key={item.label}>
              <span className="corporate-label">{item.label}</span>
              <span className="corporate-value">{item.value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Careers */}
      <section className="about-careers">
        <div className="careers-card">
          <h2>Careers</h2>
          <p>
            Woven is committed to building a team that cares about creators, ethical
            AI, and tools that respect both.
          </p>
          <a href="mailto:careers@woven.so" className="btn-primary">
            <i className="fas fa-briefcase"></i> View Openings
          </a>
        </div>
      </section>

      {/* Closing */}
      <section className="about-closing">
        <p className="closing-quote">
          Woven is a living product. We ship weekly, read every support ticket, and
          cut scope ruthlessly to protect what matters. We are building this in
          public, with our users, toward a single goal:
        </p>
        <h3 className="closing-tagline">
          Create once. Adapt everywhere.<br />
          <span className="highlight">Never stare at a blank caption box again.</span>
        </h3>
      </section>
    </div>
  );
};

export default AboutPage;