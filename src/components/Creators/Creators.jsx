import './creators.css';

const CREATORS = [
  {
    name: 'Raunak',
    role: 'Founder & Developer',
    description: 'Description coming soon. The mind behind the code and the vision that drives BuggyButBrilliant forward.',
    portfolio: 'https://raunaksaha.vercel.app/',
  },
  {
    name: 'Abhirup',
    role: 'Marketing Head and Content Creator',
    description: 'Description coming soon. The creative force behind the visuals, design systems, and brand identity.',
    portfolio: 'https://abhirupsarkar.vercel.app/',
  },
];

export default function Creators() {
  return (
    <section className="creators" id="creators" aria-label="Meet the Creators">
      <div className="container">
        <div className="creators__header">
          <span className="creators__eyebrow">The Team</span>
          <h2 className="creators__title">Meet the Creators</h2>
          <p className="creators__subtitle">
            Two builders. One studio. Zero corporate nonsense.
          </p>
        </div>

        <div className="creators__grid">
          {CREATORS.map((creator) => (
            <a
              key={creator.name}
              href={creator.portfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="creator-card"
            >
              <div className="creator-card__avatar">
                {creator.name.charAt(0)}
              </div>
              <div className="creator-card__content">
                <h3 className="creator-card__name">{creator.name}</h3>
                <span className="creator-card__role">{creator.role}</span>
                <p className="creator-card__desc">{creator.description}</p>
              </div>
              <span className="creator-card__cta">View Portfolio →</span>
              <div className="creator-card__glow" aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
