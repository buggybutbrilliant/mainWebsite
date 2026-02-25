import './services.css';

const STEPS = [
  {
    label: '01 — INTAKE',
    desc: 'You share raw footage, product context, and the outcome you care about—signups, understanding, or retention.',
  },
  {
    label: '02 — EDIT PASS',
    desc: 'We build a tight narrative first: pacing, structure, and clarity before adding polish or motion.',
  },
  {
    label: '03 — REFINEMENT',
    desc: 'We iterate on cuts, captions, and transitions driven by feedback and early viewer signals.',
  },
  {
    label: '04 — DELIVERY',
    desc: 'We ship platform-ready exports for YouTube, Reels, Shorts, and internal libraries.',
  },
];

export default function VideoService() {
  return (
    <div className="service-detail">
      <div className="service-detail__inner">
        <div className="service-split">
          <div>
            <h3 className="service-detail__heading">Video editing tuned for retention, not vanity metrics.</h3>
            <p className="service-detail__desc">
              From short-form clips to focused explainers, we work with your existing footage and product screens to tell a story
              that holds attention. Every cut serves a single idea.
            </p>
          </div>

          <div className="video-timeline" aria-label="Video service timeline">
            {STEPS.map((step) => (
              <div className="video-step" key={step.label}>
                <p className="video-step__label">{step.label}</p>
                <p className="video-step__desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="coming-soon-block">
          <span className="coming-soon-text">Coming Soon</span>
        </div>
      </div>
    </div>
  );
}
