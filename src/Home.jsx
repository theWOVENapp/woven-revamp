import { useNavigate } from 'react-router-dom';
import { SectionTitle } from './Layout';

export default function Home() {
  const navigate = useNavigate();

  return <>
    <section className="hero page-width">
      <div className="hero-copy reveal">
        <span className="eyebrow">A calmer way to create</span><h1>Make space for <em>what matters.</em></h1><p>Woven brings your social world into focus, giving every idea the room and rhythm it deserves.</p><div className="hero-actions"><button className="button button-primary large" onClick={() => navigate('/pricing')}>Start weaving <span aria-hidden="true">↗</span></button><button className="button button-ghost large" onClick={() => navigate('/features')}>Explore the product <span aria-hidden="true">→</span></button></div><div className="proof"><div className="avatar-stack"><span>AO</span><span>MK</span><span>JB</span><span>+</span></div><span><strong>2,400+</strong> thoughtful teams are already in motion</span></div></div>
      <div className="hero-visual reveal delay-1"><div className="orbit orbit-one"></div><div className="orbit orbit-two"></div><div className="device"><div className="device-top"><span>WOVEN / TODAY</span><span>•••</span></div><div className="device-card accent-card"><span className="card-label">MONDAY, 09:41</span><strong>A new thread<br />is taking shape.</strong><span className="card-line"></span><small>Draft · 82% ready</small></div><div className="device-card note-card"><span>✦</span><strong>Keep the signal.<br />Lose the noise.</strong></div><div className="device-footer"><span>◒ 04 channels</span><span>↗ Share</span></div></div><div className="floating-note">◎ <span>your next best idea</span></div></div>
    </section>
    <section className="marquee"><div>PLAN WITH INTENTION <span>✦</span> PUBLISH WITH CLARITY <span>✦</span> GROW WITH EASE <span>✦</span></div></section>
    <section className="intro-section page-width"><SectionTitle eyebrow="The Woven approach">Your work deserves<br /><em>a little more room.</em></SectionTitle><div className="intro-grid"><article className="editorial-card teal"><span className="card-number">01</span><h3>One clear view</h3><p>Bring every channel, campaign, and conversation into one considered workspace.</p><span className="card-arrow">↗</span></article><article className="editorial-card orange"><span className="card-number">02</span><h3>More signal</h3><p>See what is working at a glance, then spend your energy on the ideas that matter.</p><span className="card-arrow">↗</span></article><article className="editorial-card dark-card"><span className="card-number">03</span><h3>Better together</h3><p>Invite your team into the process without losing the thread.</p><span className="card-arrow">↗</span></article></div></section>
    <section className="quote-section page-width"><span className="quote-mark">“</span><blockquote>Woven made our content feel less like a queue and more like a point of view.</blockquote><cite>— Maya Okafor, Studio North</cite></section>
        <section class="features-section">
      <div class="features-header">
        <h2>A Unified Platform for Modern Teams</h2>
        <p>Woven isn't just a tool; it's a digital loom. We streamline the chaos of content creation into a seamless, high-output workflow for creators and agencies alike.</p>
      </div>
      <div class="features-grid">
        <article class="feature-card">
          <div class="icon-wrap"><i class="fas fa-calendar-alt"></i></div>
          <h3>Unified Calendar</h3>
          <p>Visualize your entire strategy across every platform in a single, elegant editorial view.</p>
        </article>
        <article class="feature-card">
          <div class="icon-wrap"><i class="fas fa-brain"></i></div>
          <h3>AI Creative Studio</h3>
          <p>From captions to hashtags, our specialized AI threads context directly into your brand voice.</p>
        </article>
        <article class="feature-card">
          <div class="icon-wrap"><i class="fas fa-coins"></i></div>
          <h3>Flexible Credits</h3>
          <p>No rigid limits. Use credits for what you need, when you need it. They never expire.</p>
        </article>
      </div>
    </section>

   

    <div class="magic-section">
      <article class="magic-card">
        <div class="magic-badge teal"><i class="fas fa-magic"></i> AI CAPTION GENERATOR</div>
        <h3>Generate Perfect Tones</h3>
        <p>Select from Professional, Playful, Witty, or Bold. Our AI understands your brand context and delivers high-engagement copy in seconds.</p>
      </article>
      <article class="magic-card">
        <div class="magic-badge orange"><i class="fas fa-hashtag"></i> AI HASHTAG RESEARCHER</div>
        <h3>Image-to-Tag Magic</h3>
        <p>Upload an image or describe your topic. We'll analyze trending clusters and provide a high-performing mix for maximum reach.</p>
      </article>
    </div>

   
    <div class="promo-section">
      <article class="promo-card dark">
        <h3>Cross-Platform Publishing</h3>
        <p>One-click distribution to Meta, TikTok, LinkedIn, and more. Tailor content for each network without leaving the loom.</p>
        <div class="promo-icon"><i class="fas fa-rocket"></i></div>
      </article>
      <article class="promo-card light">
        <div class="promo-icon"><i class="fas fa-chart-line"></i></div>
        <h3>Analytics Dashboard</h3>
        <p>Real-time insights across all accounts.</p>
      </article>
    </div>

   
    <div class="secondary-section">
      <article class="secondary-card orange">
        <div class="sec-icon"><i class="fas fa-users"></i></div>
        <h3>Team Collaboration</h3>
        <p>Built for agencies and teams.</p>
      </article>
      <article class="secondary-card light">
        <div>
          <h3>Content Calendar</h3>
          <p>Drag-and-drop ease for visual planners.</p>
        </div>
        <div class="sec-icon"><i class="fas fa-calendar-alt"></i></div>
      </article>
    </div>

   
    <section class="ready-section">
      <h2>READY TO WEAVE YOUR STORY?</h2>
      <div class="ready-buttons">
        <button class="btn-ready-primary" type="button">Start now</button>
        <button class="btn-ready-secondary" type="button">Learn more</button>
      </div>
    </section>
  </>;
}
