import { useState } from 'react';
import './legal.css';

const POLICIES = {
  privacy: {
    title: 'Privacy Policy',
    content: `At BuggyButBrilliant, we respect your privacy. When you contact us or submit a form on this website, we collect only the information you provide — such as your name, email, phone number, and project details. This information is used solely to respond to your inquiry and deliver your project. We do not sell, share, or rent your personal information to any third party. We may store your contact details to follow up on ongoing projects. Our website may use basic analytics to understand visitor behavior — no personally identifiable information is collected through analytics. By using this website you agree to this privacy policy.`
  },
  terms: {
    title: 'Terms and Conditions',
    content: `By engaging BuggyButBrilliant for any service, you agree to the following terms. All projects require a 30% advance payment before work begins, with the remaining 70% due upon delivery. Timelines are estimates and may vary based on client responsiveness and scope changes. All deliverables remain the property of BuggyButBrilliant until full payment is received. Upon full payment, all rights to deliverables transfer to the client. BuggyButBrilliant reserves the right to showcase completed work in our portfolio unless the client requests otherwise in writing. We are not liable for any indirect or consequential damages arising from the use of our deliverables.`
  },
  refund: {
    title: 'Refund Policy',
    content: `Refunds are handled on a case-by-case basis. If a project is cancelled before contract is signed, the full advance is refundable. If work has already started, no refund may be issued based on the amount of work completed. No refunds are issued after the final delivery has been approved by the client. If you are unsatisfied with a delivery, we will first attempt to resolve the issue through revisions. `
  }
};

export default function Legal() {
  const [active, setActive] = useState(null);

  return (
    <section className="legal" id="legal" aria-label="Legal">
      <div className="container">
        <div className="legal__header">
          <span className="legal__eyebrow">Transparency</span>
          <h2 className="legal__title">Legal and Policies</h2>
          <p className="legal__subtitle">
            We believe in full transparency. Click any policy to read it.
          </p>
        </div>

        <div className="legal__cards">
          {Object.entries(POLICIES).map(([key, policy]) => (
            <div key={key} className={`legal__card${active === key ? ' legal__card--open' : ''}`}>
              <button
                className="legal__card-header"
                onClick={() => setActive(active === key ? null : key)}
              >
                <span className="legal__card-title">{policy.title}</span>
                <span className="legal__card-icon">{active === key ? '−' : '+'}</span>
              </button>
              <div className="legal__card-body">
                <p>{policy.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
