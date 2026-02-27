import { useState } from 'react';
import './contact-form.css';

export default function ContactForm({ onClose }) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(data).toString(),
    });
    setSubmitted(true);
  };

  return (
    <div className="cf-backdrop" onClick={(e) => { if (e.target.classList.contains('cf-backdrop')) onClose(); }}>
      <div className="cf-modal" role="dialog" aria-modal="true">
        <button className="cf-close" onClick={onClose} aria-label="Close">✕</button>
        {submitted ? (
          <div className="cf-success">
            <span className="cf-success__icon">✓</span>
            <h3 className="cf-success__title">We got it.</h3>
            <p className="cf-success__desc">We'll reach out within 24 hours. Talk soon.</p>
            <button className="cf-success__btn" onClick={onClose}>Close</button>
          </div>
        ) : (
          <>
            <div className="cf-header">
              <span className="cf-eyebrow">Start a Project</span>
              <h2 className="cf-title">Let's build something real.</h2>
              <p className="cf-subtitle">Fill this out and we'll get back to you within 24 hours.</p>
            </div>
            <form
              name="project-inquiry"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              className="cf-form"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="form-name" value="project-inquiry" />
              <p hidden><label>Don't fill this out: <input name="bot-field" /></label></p>

              <div className="cf-section">
                <h4 className="cf-section__title">About You</h4>
                <div className="cf-row">
                  <div className="cf-field">
                    <label className="cf-label" htmlFor="cf-name">Your name <span className="cf-required">*</span></label>
                    <input className="cf-input" id="cf-name" name="name" type="text" placeholder="e.g. Rahul Sharma" required />
                  </div>
                  <div className="cf-field">
                    <label className="cf-label" htmlFor="cf-email">Email address <span className="cf-required">*</span></label>
                    <input className="cf-input" id="cf-email" name="email" type="email" placeholder="you@example.com" required />
                  </div>
                </div>
                <div className="cf-field" style={{ marginTop: '0.75rem' }}>
                  <label className="cf-label" htmlFor="cf-phone">Phone number <span className="cf-optional">(optional)</span></label>
                  <input className="cf-input" id="cf-phone" name="phone" type="tel" placeholder="+91 XXXXX XXXXX" />
                </div>
              </div>

              <div className="cf-section">
                <h4 className="cf-section__title">Service Needed <span className="cf-required">*</span></h4>
                <div className="cf-chips">
                  {['Website Development', 'Poster / Graphic Design', 'Video Editing', 'Multiple Services'].map(s => (
                    <label key={s} className="cf-chip">
                      <input type="radio" name="service" value={s} required />
                      <span>{s}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="cf-section">
                <h4 className="cf-section__title">Project Details <span className="cf-required">*</span></h4>
                <textarea className="cf-textarea" name="details" rows="4" placeholder="Goals, ideas, references, or anything you already have in mind..." required />
              </div>

              <div className="cf-section">
                <h4 className="cf-section__title">Estimated Budget</h4>
                <div className="cf-chips">
                  {['₹5k – ₹15k', '₹15k – ₹50k', '₹50k – ₹1L', '₹1L+', 'Not sure yet'].map(b => (
                    <label key={b} className="cf-chip">
                      <input type="radio" name="budget" value={b} />
                      <span>{b}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="cf-section">
                <h4 className="cf-section__title">Timeline</h4>
                <div className="cf-chips">
                  {['ASAP', '1–2 weeks', '1 month', 'Flexible'].map(t => (
                    <label key={t} className="cf-chip">
                      <input type="radio" name="timeline" value={t} />
                      <span>{t}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="cf-section">
                <h4 className="cf-section__title">Additional Notes</h4>
                <textarea className="cf-textarea" name="notes" rows="3" placeholder="Anything else you'd like us to know..." />
              </div>

              <button type="submit" className="cf-submit">Start the Project →</button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
