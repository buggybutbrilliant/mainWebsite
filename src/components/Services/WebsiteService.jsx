import './services.css';
import ImageCarousel from './ImageCarousel';

const FEATURES = [
  'Performance-first builds that respect Core Web Vitals.',
  'Mobile-first layouts that feel intentional on every screen.',
  'Clean deployment pipelines that your team can actually maintain.',
  'Hosting guidance from static exports to edge deployments.',
  'Lighthouse-optimized output without chasing artificial scores.',
];

export default function WebsiteService() {
  return (
    <div className="service-detail">
      <div className="service-detail__inner">
        <div className="service-split">
          <div>
            <h3 className="service-detail__heading">Websites that move as fast as you ship.</h3>
            <p className="service-detail__desc">
              We design and build product sites, marketing pages, and internal tools that feel engineered, not theme-flipped. The
              goal is simple: clarity for the user and control for your team.
            </p>
            <p className="service-detail__desc">
              You'll see working builds early. We iterate in the browser, not in endless slide decks. Every decision—from layout to
              loading strategy—is made with performance and maintainability in mind.
            </p>
          </div>
          <ul className="dot-list">
            {FEATURES.map((text) => (
              <li className="dot-list__item" key={text}>
                <span className="dot-list__dot" aria-hidden="true" />
                <span className="dot-list__text">{text}</span>
              </li>
            ))}
          </ul>
        </div>

        <ImageCarousel
          label="TEMPLATE PREVIEWS"
          altPrefix="Template"
          images={[
            '/services/template1.jpg',
            '/services/template2.jpg',
            '/services/template3.jpg',
            '/services/template4.jpg',
            '/services/template5.jpg',
          ]}
        />
      </div>
    </div>
  );
}
