import React, { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    department: "support",
    message: "",
  });

  const departments = [
    { value: "support", label: "General Support" },
    { value: "billing", label: "Billing & Payments" },
    { value: "privacy", label: "Privacy & Data Protection" },
    { value: "legal", label: "Legal" },
    { value: "partnerships", label: "Partnerships" },
    { value: "security", label: "Security" },
  ];

  const contactCards = [
    { icon: "fa-headset", label: "General Support", email: "support@woven.so", purpose: "Account inquiries, bug reports", sla: "24 hours" },
    { icon: "fa-credit-card", label: "Billing & Payments", email: "billing@woven.so", purpose: "Invoices, payment failures", sla: "24 hours" },
    { icon: "fa-shield-halved", label: "Privacy & Data Protection", email: "privacy@woven.so", purpose: "Data subject requests", sla: "30 days" },
    { icon: "fa-scale-balanced", label: "Legal", email: "legal@woven.so", purpose: "ToS, DMCA, legal correspondence", sla: "5 business days" },
    { icon: "fa-handshake", label: "Partnerships", email: "hello@woven.so", purpose: "Integrations, agency partnerships", sla: "3 business days" },
    { icon: "fa-lock", label: "Security", email: "security@woven.so", purpose: "Responsible disclosure", sla: "48 hours" },
  ];

  const offices = [
    {
      title: "Headquarters",
      address: "[Street Address], Lagos, Nigeria",
      icon: "fa-building",
    },
    {
      title: "Remote-First Operations",
      address: "Nigeria · United Kingdom · North America",
      icon: "fa-globe",
    },
  ];

  const socials = [
    { icon: "fa-linkedin", label: "LinkedIn", handle: "linkedin.com/company/woven" },
    { icon: "fa-twitter", label: "Twitter/X", handle: "@woven" },
    { icon: "fa-instagram", label: "Instagram", handle: "@woven" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder — wire to your backend
    alert("Message queued. Our team will respond within the stated SLA.");
  };

  return (
    <div className="contact-page">
      {/* Hero */}
      <section className="contact-hero">
        <p className="eyebrow">Contact Us</p>
        <h1>
          Let's weave something<br />
          <span className="highlight">together.</span>
        </h1>
        <p className="lead">
          Whether you're an enterprise buyer, prospective partner, or simply
          curious — our team is ready to help.
        </p>
      </section>

      {/* Contact Form */}
      <section className="contact-form-section">
        <div className="contact-grid">
          <div className="form-col">
            <h2>Send a Message</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="you@company.com"
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="department">Department</label>
                <select
                  id="department"
                  value={formData.department}
                  onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                >
                  {departments.map((d) => (
                    <option key={d.value} value={d.value}>
                      {d.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows="5"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us how we can help..."
                />
              </div>
              <button type="submit" className="btn-primary">
                <i className="fas fa-paper-plane"></i> Send Message
              </button>
            </form>
          </div>

          <div className="info-col">
            <h2>Departmental Contacts</h2>
            <div className="dept-list">
              {contactCards.map((c) => (
                <article className="dept-card" key={c.label}>
                  <div className="dept-icon"><i className={`fas ${c.icon}`}></i></div>
                  <div className="dept-content">
                    <h3>{c.label}</h3>
                    <a href={`mailto:${c.email}`} className="dept-email">{c.email}</a>
                    <p className="dept-purpose">{c.purpose}</p>
                    <span className="dept-sla">SLA: {c.sla}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Offices */}
      <section className="contact-offices">
        <h2>Offices</h2>
        <div className="offices-grid">
          {offices.map((o) => (
            <div className="office-card" key={o.title}>
              <div className="office-icon"><i className={`fas ${o.icon}`}></i></div>
              <h3>{o.title}</h3>
              <p>{o.address}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Social */}
      <section className="contact-social">
        <h2>Connect</h2>
        <div className="social-grid">
          {socials.map((s) => (
            <a className="social-card" key={s.label} href="#">
              <i className={`fab ${s.icon}`}></i>
              <div>
                <span className="social-label">{s.label}</span>
                <span className="social-handle">{s.handle}</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Corporate Inquiries */}
      <section className="contact-corporate">
        <div className="corporate-banner">
          <h2>Corporate Inquiries</h2>
          <p>
            For investor relations, enterprise sales, or strategic partnerships,
            please contact the Office of the CEO.
          </p>
          <a href="mailto:hello@woven.so" className="btn-primary">
            <i className="fas fa-envelope"></i> hello@woven.so
          </a>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;