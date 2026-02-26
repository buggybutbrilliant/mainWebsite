import CustomButton from './Buttons/CustomButton';
import './cta.css';

export default function CTA() {
  return (
    <section className="section section--surface cta" id="cta">
      <div className="container">
        <div className="cta__inner">
          {/* Radial glow behind heading */}
          <div className="cta__glow" aria-hidden="true" />

          <span className="section-label">Ready?</span>
          <h2 className="cta__heading">
            Ready to Build<br />
            Something <span className="text-accent">Real?</span>
          </h2>
          <p className="cta__subtext">
            No fake timelines. No bloated proposals. Just execution.
          </p>

          <div className="cta__buttons">
            <CustomButton
              label="Start a Project"
              variant="primary"
              href="https://mail.google.com/mail/?view=cm&fs=1&to=frombugs2brilliance@gmail.com"
            />
            <CustomButton
              label="See Our Work"
              variant="outline"
              onClick={() =>
                document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
}
