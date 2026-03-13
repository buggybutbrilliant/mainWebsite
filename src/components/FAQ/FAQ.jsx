import { useState } from 'react';
import './faq.css';

const FAQS = [
  {
    q: 'How much does a project cost?',
    a: 'Our pricing is flexible and depends on the scope. Websites start from ₹1,599. Poster design starts from ₹499 per poster. Video editing starts from ₹1,000 per video. Custom packages are available — just reach out and we will give you a clear quote with no hidden charges.'
  },
  {
    q: 'How long does it take to complete a project?',
    a: 'Timelines depend on complexity. A basic website takes 3–7 days. A full custom website takes 2–4 weeks. Poster design is usually delivered within 24–48 hours. Video editing takes 2–5 days. Rush delivery is available for urgent projects.'
  },
  {
    q: 'How many revisions are included?',
    a: 'Every project includes at least 2 rounds of revisions. We work closely with you throughout the process so major changes are rare. Additional revisions beyond the included rounds are available at a small charge.'
  },
  {
    q: 'What is the payment structure?',
    a: 'We typically work on a 30% advance and 70% on delivery model. For smaller projects under ₹2,000 full payment upfront is required. We accept UPI, bank transfer, and other common payment methods.'
  },
  {
    q: 'Do you provide support after delivery?',
    a: 'Yes. All website projects include 30 days of free support after delivery for bug fixes and minor adjustments. Extended maintenance packages are available on request.'
  },
  {
    q: 'Do you offer white-label services?',
    a: 'Yes we do. If you are an agency or freelancer who needs reliable execution without your client knowing, we offer white-label website development, design, and video editing. Everything is delivered under your brand.'
  },
  {
    q: 'Will I own everything after the project is done?',
    a: 'Absolutely. Once the final payment is made, all deliverables — source files, code, designs — belong to you completely. No licensing fees, no strings attached.'
  },
  {
    q: 'Can I see examples of your previous work?',
    a: 'Yes — check out our Services section on this page where we have shared samples of our website templates, poster designs, and more. You can also reach out directly and we will share relevant case studies.'
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section className="faq" id="faq" aria-label="Frequently Asked Questions">
      <div className="container">
        <div className="faq__header">
          <span className="faq__eyebrow">FAQ</span>
          <h2 className="faq__title">Questions You Probably Have</h2>
          <p className="faq__subtitle">
            Everything you need to know before getting started.
          </p>
        </div>

        <div className="faq__list">
          {FAQS.map((item, i) => (
            <div
              key={i}
              className={`faq__item${open === i ? ' faq__item--open' : ''}`}
            >
              <button
                className="faq__question"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span>{item.q}</span>
                <span className="faq__icon" aria-hidden="true">
                  {open === i ? '−' : '+'}
                </span>
              </button>
              <div className="faq__answer">
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
