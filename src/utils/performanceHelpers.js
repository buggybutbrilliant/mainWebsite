/**
 * performanceHelpers.js
 * Utility functions for performance-critical operations
 */

/**
 * Detects if the user prefers reduced motion
 * @returns {boolean}
 */
export function prefersReducedMotion() {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Throttles a function to run at most once per animation frame
 * Ideal for scroll and resize event listeners
 * @param {Function} callback
 * @returns {Function}
 */
export function throttleRaf(callback) {
  let rafId = null;
  return function (...args) {
    if (rafId) return;
    rafId = requestAnimationFrame(() => {
      callback.apply(this, args);
      rafId = null;
    });
  };
}

/**
 * Throttles a function by time interval
 * @param {Function} fn
 * @param {number} limit — milliseconds
 * @returns {Function}
 */
export function throttle(fn, limit = 100) {
  let lastCall = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastCall >= limit) {
      lastCall = now;
      fn.apply(this, args);
    }
  };
}

/**
 * Creates an IntersectionObserver for scroll-triggered animations
 * @param {Function} onIntersect — called with (entry, observer)
 * @param {Object} options
 * @returns {IntersectionObserver}
 */
export function createScrollObserver(onIntersect, options = {}) {
  const defaults = {
    threshold: 0.15,
    rootMargin: '0px 0px -60px 0px',
  };
  return new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        onIntersect(entry, observer);
      }
    });
  }, { ...defaults, ...options });
}

/**
 * Lazily loads an image by swapping data-src to src
 * @param {HTMLImageElement} img
 */
export function lazyLoadImage(img) {
  if (img.dataset.src) {
    img.src = img.dataset.src;
    img.removeAttribute('data-src');
  }
}
