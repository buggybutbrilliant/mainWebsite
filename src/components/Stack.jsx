import './stack.css';

const tools = [
  { name: 'React', category: 'frontend' },
  { name: 'Vite', category: 'frontend' },
  { name: 'JavaScript', category: 'frontend' },
  { name: 'HTML / CSS', category: 'frontend' },
  { name: 'Node.js', category: 'backend' },
  { name: 'Express', category: 'backend' },
  { name: 'Supabase', category: 'backend' },
  { name: 'Firebase', category: 'backend' },
  { name: 'Figma', category: 'design' },
  { name: 'Photoshop', category: 'design' },
  { name: 'After Effects', category: 'motion' },
  { name: 'Da Vinci Resolve', category: 'motion' },
  { name: 'Premiere Pro', category: 'motion' },
  { name: 'Git', category: 'devops' },
  { name: 'Vercel', category: 'devops' },
  { name: 'Netlify', category: 'devops' },
  { name: 'Lighthouse', category: 'performance' },
];

export default function Stack() {
  return (
    <section className="section stack" id="stack">
      <div className="container">
        <span className="section-label">Technologies</span>
        <h2 className="stack__heading">Our Stack</h2>
        <p className="stack__subheading">
          Not a resume. A confidence statement. Every tool in this list
          has shipped something real.
        </p>

        <div className="stack__chips">
          {tools.map(tool => (
            <span className={`chip chip--${tool.category}`} key={tool.name}>
              {tool.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
