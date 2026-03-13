import { useState, useEffect, useRef } from 'react';
import { throttleRaf } from '../../utils/performanceHelpers';
import './header.css';

const NAV_LINKS = [
  { label: 'Home',     href: '#home' },
  { label: 'About',    href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Process',  href: '#process' },
  { label: 'FAQ',      href: '#faq' },
];

const SECTION_IDS = ['home', 'about', 'services', 'process', 'faq'];

export default function Header() {
  const [scrolled, setScrolled]       = useState(false);
  const [menuOpen, setMenuOpen]       = useState(false);
  const [activeSection, setActive]    = useState('home');
  const [contactOpen, setContactOpen] = useState(false);
  const [waOpen, setWaOpen]           = useState(false);
  const contactRef                    = useRef(null);

  // Scroll state
  useEffect(() => {
    const handleScroll = throttleRaf(() => setScrolled(window.scrollY > 80));
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Active section via IntersectionObserver
  useEffect(() => {
    const observers = [];
    SECTION_IDS.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { threshold: 0.3 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach(o => o.disconnect());
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  // Close contact dropdown on outside click
  useEffect(() => {
    const handleClick = (e) => {
      if (contactRef.current && !contactRef.current.contains(e.target)) {
        setContactOpen(false);
        setWaOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      setTimeout(() => target.scrollIntoView({ behavior: 'smooth' }), menuOpen ? 300 : 0);
    }
  };

  return (
    <>
      <header className={`header${scrolled ? ' header--scrolled' : ''}`}>
        <div className="header__inner container">
          <a href="#home" className="header__logo" onClick={e => handleNavClick(e, '#home')}>
            Buggy<span className="text-accent">But</span>Brilliant
          </a>

          <nav className="header__nav" aria-label="Primary navigation">
            {NAV_LINKS.map(link => (
              <a
                key={link.href}
                href={link.href}
                className={`header__nav-link${activeSection === link.href.slice(1) ? ' header__nav-link--active' : ''}`}
                onClick={e => handleNavClick(e, link.href)}
              >
                {link.label}
              </a>
            ))}

            {/* Contact dropdown */}
            <div className="header__contact-wrap" ref={contactRef}>
              <button
                className="header__nav-link header__contact-btn"
                onClick={() => { setContactOpen(p => !p); setWaOpen(false); }}
                aria-expanded={contactOpen}
              >
                Contact ▾
              </button>

              {contactOpen && (
                <div className="header__contact-dropdown">
                  <a
                    href="mailto:frombugs2brilliance@gmail.com"
                    className="header__contact-item"
                    onClick={() => setContactOpen(false)}
                  >
                    <span className="header__contact-icon">✉</span>
                    <span>frombugs2brilliance@gmail.com</span>
                  </a>

                  <div className="header__contact-item header__contact-wa" onClick={() => setWaOpen(p => !p)}>
                    <span className="header__contact-icon">📱</span>
                    <span>WhatsApp {waOpen ? '▴' : '▾'}</span>
                  </div>

                  {waOpen && (
                    <div className="header__wa-numbers">
                      <a href="https://wa.me/916290464921" target="_blank" rel="noopener noreferrer" className="header__wa-link">
                        +91 6290464921
                      </a>
                      <a href="https://wa.me/918017007352" target="_blank" rel="noopener noreferrer" className="header__wa-link">
                        +91 8017007352
                      </a>
                    </div>
                  )}
                </div>
              )}
            </div>
          </nav>

          <button
            className={`header__hamburger${menuOpen ? ' is-open' : ''}`}
            onClick={() => setMenuOpen(prev => !prev)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span /><span /><span />
          </button>
        </div>
      </header>

      {/* Mobile nav */}
      <div className={`header__mobile-nav${menuOpen ? ' is-open' : ''}`} aria-hidden={!menuOpen}>
        <nav>
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              className={`header__mobile-link${activeSection === link.href.slice(1) ? ' header__mobile-link--active' : ''}`}
              style={{ animationDelay: menuOpen ? `${i * 0.08}s` : '0s' }}
              onClick={e => handleNavClick(e, link.href)}
            >
              {link.label}
            </a>
          ))}
          {/* Contact in mobile nav */}
          <a href="mailto:frombugs2brilliance@gmail.com" className="header__mobile-link" style={{ animationDelay: menuOpen ? `${NAV_LINKS.length * 0.08}s` : '0s' }}>
            ✉ Email Us
          </a>
          <a href="https://wa.me/916290464921" target="_blank" rel="noopener noreferrer" className="header__mobile-link" style={{ animationDelay: menuOpen ? `${(NAV_LINKS.length + 1) * 0.08}s` : '0s' }}>
            📱 WhatsApp 1
          </a>
          <a href="https://wa.me/918017007352" target="_blank" rel="noopener noreferrer" className="header__mobile-link" style={{ animationDelay: menuOpen ? `${(NAV_LINKS.length + 2) * 0.08}s` : '0s' }}>
            📱 WhatsApp 2
          </a>
        </nav>
        <div className="header__mobile-brand">
          Buggy<span>But</span>Brilliant
        </div>
      </div>
    </>
  );
}
