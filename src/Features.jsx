import { useEffect, useState } from 'react';

export default function Features() {
  const [metrics, setMetrics] = useState({ growth: 0, impact: 0, score: '0.0' });

  useEffect(() => {
    const start = performance.now();
    let frameId;
    const finishTimer = window.setTimeout(() => {
      setMetrics({ growth: 24, impact: 92, score: '84.2' });
    }, 1500);

    const animate = (now) => {
      const progress = Math.min((now - start) / 1400, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setMetrics({
        growth: Math.round(24 * eased),
        impact: Math.round(92 * eased),
        score: (84.2 * eased).toFixed(1),
      });

      if (progress < 1) frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(frameId);
      window.clearTimeout(finishTimer);
    };
  }, []);

  return <>
    <section className="center-hero page-width">
      <span className="eyebrow">Built for the whole story</span>
      <h1>Crafted for clarity.<br />Designed for <em>connection.</em></h1>
      <p>Step into an editorial social management experience. We replaced the chaos of standard tools with the intentionality of a master loom.</p>
    </section>

    <section className="feature-cards page-width">
      <article className="feature-card">
        <span className="feature-icon">#</span>
        <h3>Smart tags</h3>
        <p>Reach your niche with AI-curated hashtags that actually work.</p>
        <a href="#analytics">Learn about Woven AI ↗</a>
      </article>
      <article className="feature-card feature-card-dark">
        <span className="feature-icon">✦</span>
        <h3>Caption gen</h3>
        <p>Context-aware copy that sounds like your brand, not a bot.</p>
        <a href="#analytics">Learn about Woven AI ↗</a>
      </article>
      <article className="feature-card feature-card-wide">
        <span className="eyebrow">Woven AI</span>
        <h3>Ignite your voice with the creative studio.</h3>
        <p>Woven learns your unique tone and helps craft captions, threads, and tags that resonate.</p>
        <a href="#analytics">Learn about Woven AI ↗</a>
      </article>
    </section>

    <section className="analytics-section page-width" id="analytics">
      <div className="analytics-copy">
        <span className="eyebrow">Signal, not noise</span>
        <h2>Clarity through consolidated <em>analytics.</em></h2>
        <p>One dashboard, infinite insight. Track your growth, engagement, and ROI across every platform without switching tabs.</p>
        <div className="stats">
          <div><strong>{metrics.growth}%</strong><span>Growth</span></div>
          <div><strong>{metrics.impact}%</strong><span>Impact</span></div>
        </div>
      </div>
      <div className="analytics-panel">
        <div>
          <span className="card-label">ENGAGEMENT SCORE</span>
          <strong className="score">{metrics.score}</strong>
        </div>
        <div className="bars">
          {[2.25, 3.5, 3, 5].map((height, index) => (
            <span key={index} className={index === 1 ? 'bar orange-bar' : 'bar'} style={{ '--bar-height': `${height}rem` }} />
          ))}
        </div>
      </div>
    </section>

    <section className="calendar-section page-width">
      <div>
        <span className="eyebrow">Your rhythm, unified</span>
        <h2>Master your rhythm with the Unified Content Calendar.</h2>
        <p>Ditch the fragmented views. Visualize your brand's narrative across every platform in one seamless interface.</p>
        <ul>
          <li>● Fluid drag-and-drop scheduling</li>
          <li>● Visual cross-platform storyboarding</li>
        </ul>
      </div>
      <div className="calendar-art"><span>▦</span><small>UNIFIED CALENDAR</small></div>
    </section>
  </>;
}
