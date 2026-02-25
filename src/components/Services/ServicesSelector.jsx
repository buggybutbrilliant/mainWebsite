import { useState } from 'react';
import WebsiteService from './WebsiteService';
import PosterService from './PosterService';
import VideoService from './VideoService';
import './services.css';

const SERVICES = [
  {
    id: 'websites',
    icon: '🖥️',
    name: 'Websites',
    description: 'Fast, resilient, performance-first product sites and dashboards.',
  },
  {
    id: 'posters',
    icon: '🎨',
    name: 'Posters & Visual',
    description: 'Sharp, platform-ready visuals that actually respect your brand.',
  },
  {
    id: 'video',
    icon: '🎬',
    name: 'Video & Motion',
    description: 'Short-form and explainers cut for retention, not vanity.',
  },
];

const SERVICE_COMPONENTS = {
  websites: WebsiteService,
  posters: PosterService,
  video: VideoService,
};

export default function ServicesSelector() {
  const [activeService, setActiveService] = useState(null);

  const handleSelect = (id) => {
    setActiveService((prev) => (prev === id ? null : id));
  };

  const ActiveComponent = activeService ? SERVICE_COMPONENTS[activeService] : null;

  return (
    <section className="section services" id="services">
      <div className="container">
        <span className="section-label">SERVICES</span>
        <h2 className="services__heading">What We Build</h2>
        <p className="services__subheading">
          Every engagement starts with something a little rough. Our work is about turning that honest v1 into something fast,
          clear, and shippable.
        </p>

        {/* Selector Cards */}
        <div className="services__grid">
          {SERVICES.map((service) => (
            <button
              key={service.id}
              className={`service-card${activeService === service.id ? ' service-card--active' : ''}`}
              onClick={() => handleSelect(service.id)}
              aria-expanded={activeService === service.id}
              aria-controls="service-detail-panel"
              type="button"
            >
              <div className="service-card__top">
                <span className="service-card__icon" aria-hidden="true">
                  {service.icon}
                </span>
                <h3 className="service-card__title">{service.name}</h3>
              </div>
              <p className="service-card__desc">{service.description}</p>
              <p className="service-card__hint">TAP TO EXPLORE THE DETAILS</p>
            </button>
          ))}
        </div>

        {/* Detail panel */}
        <div
          id="service-detail-panel"
          className={`service-detail-panel${activeService ? ' service-detail-panel--open' : ''}`}
          role="region"
          aria-live="polite"
        >
          {ActiveComponent && <ActiveComponent />}
        </div>
      </div>
    </section>
  );
}
