import './about.css';

export default function About() {
  return (
    <section className="about" id="about" aria-label="About the Founder">
      <div className="container">

        <div className="about__grid">
          <div className="about__image-col">
            <div className="about__image-wrapper">
              <img
                src="/favicon.ico"
                alt="Founder of BuggyButBrilliant"
                className="about__image"
              />
              <div className="about__image-glow" aria-hidden="true" />
            </div>

            <div className="about__stats">
              <div className="about__stat">
                <span className="about__stat-number">20+</span>
                <span className="about__stat-label">Projects Delivered</span>
              </div>
              <div className="about__stat">
                <span className="about__stat-number">3+</span>
                <span className="about__stat-label">Years Experience</span>
              </div>
              <div className="about__stat">
                <span className="about__stat-number">100%</span>
                <span className="about__stat-label">Client Satisfaction</span>
              </div>
            </div>
          </div>

          <div className="about__content-col">
            <span className="about__eyebrow">About the Founder</span>
            <h2 className="about__title">
              Built by a Builder,<br />
              <span className="text-accent">Not a Corporation</span>
            </h2>

            <p className="about__story">
              BuggyButBrilliant started from a simple belief — great digital products
              do not require a giant agency. They require someone who actually cares
              about the outcome. I started this studio after seeing too many small
              businesses overpay for average results from agencies that treated them
              like ticket numbers.
            </p>

            <p className="about__story">
              Every project I take on is treated like it is my own. From the first
              conversation to the final delivery, you work directly with me — no
              account managers, no miscommunication, no bloated timelines.
            </p>

            <div className="about__mission">
              <span className="about__mission-label">Our Mission</span>
              <p className="about__mission-text">
                To help founders and businesses build digital products that actually
                work — fast, affordable, and without the corporate nonsense.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
