import { useState } from 'react';
import './services.css';

export default function ImageCarousel({ images, label, altPrefix }) {
  const [active, setActive] = useState(0);

  const prev = () => setActive((i) => (i - 1 + images.length) % images.length);
  const next = () => setActive((i) => (i + 1) % images.length);

  return (
    <div className="carousel">
      <span className="section-label carousel__label">{label}</span>

      <div className="carousel__expanded">
        <button className="carousel__arrow carousel__arrow--left" onClick={prev} aria-label="Previous" type="button">
          &#8249;
        </button>
        <img className="carousel__main-img" src={images[active]} alt={`${altPrefix} ${active + 1}`} loading="lazy" />
        <button className="carousel__arrow carousel__arrow--right" onClick={next} aria-label="Next" type="button">
          &#8250;
        </button>
        <div className="carousel__nav-mobile">
          <button className="carousel__arrow-mob" onClick={prev} aria-label="Previous" type="button">
            &#8249; Prev
          </button>
          <span className="carousel__counter-inline">
            {active + 1} / {images.length}
          </span>
          <button className="carousel__arrow-mob" onClick={next} aria-label="Next" type="button">
            Next &#8250;
          </button>
        </div>
      </div>

      <p className="carousel__counter">
        {active + 1} / {images.length}
      </p>

      <div className="carousel__thumbs">
        {images.map((src, i) => (
          <img
            key={src}
            className={`carousel__thumb${i === active ? ' carousel__thumb--active' : ''}`}
            src={src}
            alt={`${altPrefix} ${i + 1}`}
            loading="lazy"
            onClick={() => setActive(i)}
          />
        ))}
      </div>
    </div>
  );
}
