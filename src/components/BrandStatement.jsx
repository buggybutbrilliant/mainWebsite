import './brand-statement.css';

const pillars = [
  {
    icon: '⚡',
    title: 'Builder-First',
    desc: 'We build alongside you, not just for you. Every deliverable is something we would ship ourselves.',
  },
  {
    icon: '📐',
    title: 'Performance-Obsessed',
    desc: 'Every millisecond matters. Every kilobyte is a decision. We optimize from the start, not the end.',
  },
  {
    icon: '🚀',
    title: 'Execution-Driven',
    desc: 'Ideas are everywhere. Shipped products are rare. We close the gap between concept and live.',
  },
];

export default function BrandStatement() {
  return (
    <section className="section section--surface brand-statement" id="about">
      <div className="container">
        <div className="brand-statement__content">
          <span className="section-label">Our philosophy</span>
          <blockquote className="brand-statement__quote">
            We don't wait for perfect. We ship, we test, we refine.
            BuggyButBrilliant exists for founders, makers, and builders
            who know that{' '}
            <em className="text-accent">execution beats perfection</em> — every time.
          </blockquote>
        </div>

        {/* Pillars */}
        <div className="brand-statement__pillars">
          {pillars.map(p => (
            <div className="pillar-card" key={p.title}>
              <span className="pillar-icon" aria-hidden="true">{p.icon}</span>
              <h3 className="pillar-title">{p.title}</h3>
              <p className="pillar-desc">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
