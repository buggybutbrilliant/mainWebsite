import { useState } from 'react';
import ContactForm from '../ContactForm/ContactForm';
import CustomButton from '../Buttons/CustomButton';
import './hero.css';

export default function Hero() {
  const handleScroll = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  const [formOpen, setFormOpen] = useState(false);

  return (
    <section className="hero" id="home" aria-label="Hero">
      <img className="hero__bg" src="/herobg.jpg" alt="" aria-hidden="true" loading="eager" />

      {/* Dark overlay */}
      <div className="hero__overlay" aria-hidden="true" />

      {/* Accent radial glow */}
      <div className="hero__glow" aria-hidden="true" />

      {/* Content */}
      <div className="hero__content">
        <span className="hero__eyebrow anim-fadeInUp anim-delay-1">
          Digital Studio
        </span>

        <h1 className="hero__title anim-fadeInUp anim-delay-2">
          <span className="hero__title-line1">
            Buggy<span className="text-accent">But</span>
          </span>
          <span className="hero__title-line2">Brilliant</span>
        </h1>

        <p className="hero__tagline anim-fadeInUp anim-delay-3">
          Real products start buggy.<br />
          The brilliance is in refining them.
        </p>

        <div className="hero__cta anim-fadeInUp anim-delay-4">
          <CustomButton
            label="See What We Build"
            variant="primary"
            onClick={handleScroll}
          />
          <CustomButton
            label="How We Work"
            variant="outline"
            onClick={() => document.getElementById('process')?.scrollIntoView({ behavior: 'smooth' })}
          />
        </div>

        <div className="hero__know-us anim-fadeInUp anim-delay-5">
          <button className="hero__know-pill" onClick={() => setFormOpen(true)}>
            <span className="hero__know-pill-label">Already know us?</span>
            <span className="hero__know-pill-cta">Let's get started →</span>
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="hero__scroll-hint anim-fadeIn anim-delay-6" aria-hidden="true">
          <div className="hero__scroll-line" />
          <span>Scroll</span>
        </div>

        {formOpen && <ContactForm onClose={() => setFormOpen(false)} />}
      </div>
    </section>
  );
}
