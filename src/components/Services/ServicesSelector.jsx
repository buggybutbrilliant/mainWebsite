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

  return (
    <section className="section services" id="services">
      <div className="container">
        <span className="section-label">Our offerings</span>
        <h2 className="services__heading">What We Build</h2>
        <p className="services__subheading">Three focused disciplines. One execution mindset.</p>

        <div className="services__grid services__grid--mobile-interleaved">
          {SERVICES.map((service) => {
            const DetailComponent = SERVICE_COMPONENTS[service.id];
            return (
              <div key={service.id} className="service-card-group">
                <button
                  className={`service-card${activeService === service.id ? ' service-card--active' : ''}`}
                  onClick={() => handleSelect(service.id)}
                  aria-expanded={activeService === service.id}
                  type="button"
                >
                  <span className="service-card__icon">{service.icon}</span>
                  <h3 className="service-card__name">{service.name}</h3>
                  <p className="service-card__desc">{service.description}</p>
                  <span className="service-card__tap">TAP TO EXPLORE THE DETAILS</span>
                </button>
                <div
                  className={`service-detail-panel service-detail-panel--mobile${activeService === service.id ? ' service-detail-panel--open' : ''}`}
                >
                  {activeService === service.id && <DetailComponent />}
                </div>
              </div>
            );
          })}
        </div>

        <div className={`service-detail-panel service-detail-panel--desktop${activeService ? ' service-detail-panel--open' : ''}`}>
          {activeService &&
            (() => {
              const C = SERVICE_COMPONENTS[activeService];
              return <C />;
            })()}
        </div>
      </div>
    </section>
  );
}
