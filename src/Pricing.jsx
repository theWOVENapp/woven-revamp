import { useState } from 'react';

const plans = [
  { name: 'Seedling', sub: 'For finding your rhythm', price: 'Free', features: ['1 social profile', '10 scheduled posts'] },
  { name: 'Bloom', sub: 'For creators ready to grow', price: '₦12,000', features: ['5 social profiles', 'Unlimited scheduling', 'Woven AI studio'], featured: true },
  { name: 'Canopy', sub: 'For teams with a shared vision', price: '₦28,000', features: ['Unlimited profiles', 'Team collaboration', 'Advanced analytics'] },
];

export default function Pricing() {
  const [credits, setCredits] = useState(25);
  const cost = credits <= 25 ? 0 : credits <= 100 ? 2500 : credits <= 250 ? 5000 : 9000;

  return <><section className="center-hero pricing-heading page-width"><span className="eyebrow">Simple, considered pricing</span><h1>Invest in your <em>creative rhythm.</em></h1><p>Start with the essentials. Grow into the tools that help your best work find its people.</p></section><section className="pricing-layout page-width"><div className="plans"><div className="pricing-section-head"><h2>Choose your plan</h2><span>Cancel anytime</span></div>{plans.map((plan) => <article key={plan.name} className={plan.featured ? 'plan featured-plan' : 'plan'}>{plan.featured && <span className="popular">Most woven</span>}<div className="plan-head"><div><h3>{plan.name}</h3><p>{plan.sub}</p></div><strong>{plan.price}</strong></div><ul>{plan.features.map((feature) => <li key={feature}>✓ {feature}</li>)}</ul><button className={plan.featured ? 'button button-primary' : 'button button-ghost'}>Choose {plan.name}</button></article>)}</div><aside className="credit-panel"><span className="eyebrow">Flex your flow</span><h2>Need a little more room?</h2><p>Top up with credits whenever inspiration strikes.</p><div className="credit-free"><strong>25 free credits</strong><span>included with every account</span></div><label htmlFor="credits">Credits <output>{credits}</output></label><input id="credits" type="range" min="25" max="500" step="25" value={credits} onChange={(event) => setCredits(Number(event.target.value))} /><div className="range-labels"><span>25</span><span>500</span></div><div className="credit-total"><span>One-time total</span><strong>₦{cost.toLocaleString()}</strong></div></aside></section></>;
}
