import CustomButton from '../Buttons/CustomButton';
import './hero.css';

export default function Hero() {
  const handleScroll = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="home" aria-label="Hero">
      {/* Background Video */}
      <video
        className="hero__video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      >
        <source src="/videos/" type="video/mp4" />
      </video>

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
          Buggy<span className="text-accent">But</span><br />Brilliant
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

        {/* Scroll indicator */}
        <div className="hero__scroll-hint anim-fadeIn anim-delay-6" aria-hidden="true">
          <div className="hero__scroll-line" />
          <span>Scroll</span>
        </div>
      </div>
    </section>
  );
}
