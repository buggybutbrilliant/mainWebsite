import { useState, useEffect } from 'react';
import './scroll-to-top.css';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollUp = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <button
      className={`stt${visible ? ' stt--visible' : ''}`}
      onClick={scrollUp}
      aria-label="Scroll to top"
    >
      ↑
    </button>
  );
}
