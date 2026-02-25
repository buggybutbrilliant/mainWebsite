import './process.css';

const steps = [
  {
    num: '01',
    title: 'Understand',
    desc: 'We learn your goal, not just your brief. Context drives better decisions than specifications alone.',
  },
  {
    num: '02',
    title: 'Build',
    desc: 'Fast execution, real output from day one. No month-long planning phases before a line of work.',
  },
  {
    num: '03',
    title: 'Refine',
    desc: 'Iterations driven by feedback, not guesses. We adjust based on what actually matters to you.',
  },
  {
    num: '04',
    title: 'Ship',
    desc: 'We deploy. We don\'t just hand off files. Your product goes live with full handoff documentation.',
  },
];

export default function Process() {
  return (
    <section className="section process" id="process">
      <div className="container">
        <span className="section-label">Our approach</span>
        <h2 className="process__heading">How We Work</h2>
        <p className="process__subheading">
          A tight loop of understanding, building, refining, and shipping.
          No fluff in the middle.
        </p>

        <div className="process__steps">
          {steps.map((step, i) => (
            <div className="process-step" key={step.num}>
              {/* Connector line (desktop) */}
              {i < steps.length - 1 && (
                <div className="process-step__connector" aria-hidden="true" />
              )}

              <div className="process-step__num">{step.num}</div>
              <div className="process-step__body">
                <h3 className="process-step__title">{step.title}</h3>
                <p className="process-step__desc">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
