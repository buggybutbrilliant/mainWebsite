import './services.css';
import ImageCarousel from './ImageCarousel';

const CHIPS = [
  {
    title: 'Launch sprints',
    subtitle: 'Built for founders shipping in public.',
  },
  {
    title: 'Feature drop teasers',
    subtitle: 'with real UI.',
  },
  {
    title: 'Release notes',
    subtitle: 'that people read.',
  },
];

export default function PosterService() {
  return (
    <div className="service-detail">
      <div className="service-detail__inner">
        <div className="poster-chips">
          {CHIPS.map((chip) => (
            <div className="poster-chip" key={chip.title}>
              <p className="poster-chip__title">{chip.title}</p>
              <p className="poster-chip__subtitle">{chip.subtitle}</p>
            </div>
          ))}
        </div>

        <h3 className="service-detail__heading">Posters and visuals that carry your product story.</h3>
        <p className="service-detail__desc">
          We design visual systems for launches, feature drops, and ongoing product storytelling. The work is built around your
          interface, your constraints, and the platforms that matter to you.
        </p>

        <div className="poster-lines" aria-label="Poster service details">
          <div className="poster-line">Social-first compositions that survive the feed scroll.</div>
          <div className="poster-line">Platform-specific exports for stories, posts, carousels, and print.</div>
          <div className="poster-line">Type systems that stay legible even at thumbnail size.</div>
          <div className="poster-line">Visual languages that match your product, not a trend board.</div>
        </div>

        <ImageCarousel
          label="POSTER SAMPLES"
          altPrefix="Poster"
          images={['/services/poster1.jpg', '/services/poster2.jpg', '/services/poster3.jpg', '/services/poster4.jpg']}
        />
      </div>
    </div>
  );
}
