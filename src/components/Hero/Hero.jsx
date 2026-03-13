import { useState, lazy, Suspense } from 'react';
import ContactForm from '../ContactForm/ContactForm';
import CustomButton from '../Buttons/CustomButton';
import './hero.css';

const Spline = lazy(() => import('@splinetool/react-spline'));

export default function Hero() {
  const [formOpen, setFormOpen] = useState(false);
  const [splineLoaded, setSplineLoaded] = useState(false);

  const handleScroll = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="home" aria-label="Hero">
      <img className="hero__bg" src="/herobg.jpg" alt="" aria-hidden="true" loading="eager" />
      <div className="hero__overlay" aria-hidden="true" />
      <div className="hero__glow" aria-hidden="true" />

      <div className="hero__inner">
        {/* LEFT — Text content */}
        <div className="hero__content">
          <span className="hero__eyebrow anim-fadeInUp anim-delay-1">
            Website · Design · Video
          </span>

          <h1 className="hero__title anim-fadeInUp anim-delay-2">
            <span className="hero__title-line1">Buggy</span>
            <span className="hero__title-line2"><span className="text-accent">But</span></span>
            <span className="hero__title-line3">Brilliant</span>
          </h1>

          <p className="hero__tagline anim-fadeInUp anim-delay-3">
            We build websites, design visuals, and edit videos<br />
            for startups and businesses ready to grow.
          </p>

          <div className="hero__cta anim-fadeInUp anim-delay-4">
            <CustomButton
              label="See Our Services"
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

          <div className="hero__scroll-hint anim-fadeIn anim-delay-6" aria-hidden="true">
            <div className="hero__scroll-line" />
            <span>Scroll</span>
          </div>
        </div>

        {/* RIGHT — Spline 3D */}
        <div className="hero__spline-col">
          <div className={`hero__spline-wrapper${splineLoaded ? ' hero__spline-wrapper--loaded' : ''}`}>
            <Suspense fallback={<div className="hero__spline-loader" />}>
              <Spline
                scene="https://prod.spline.design/SH1rSNJyBSgvkGU6/scene.splinecode"
                onLoad={() => setSplineLoaded(true)}
                className="hero__spline"
              />
            </Suspense>
            {!splineLoaded && <div className="hero__spline-loader" aria-hidden="true" />}
          </div>
        </div>
      </div>

      {/* Skateboard game button — bottom left corner */}
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className="hero__skate-btn"
        aria-label="Play a game"
      >
        <span className="hero__skate-icon">🛹</span>
        <span className="hero__skate-label">Getting bored? Play a game</span>
      </a>

      {formOpen && <ContactForm onClose={() => setFormOpen(false)} />}
    </section>
  );
}
