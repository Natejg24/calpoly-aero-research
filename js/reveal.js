/**
 * js/reveal.js
 * ---------------------------------------------------------------------
 * Subtle "fade + rise" animation for elements marked data-reveal, using
 * IntersectionObserver so it costs nothing until an element actually
 * scrolls into view.
 *
 * Fails safe: if IntersectionObserver isn't supported, or this script
 * doesn't run at all, elements marked data-reveal are still fully
 * visible (see the CSS in style.css â the hidden state is only ever
 * applied by the .is-visible class transition, not required for
 * content to display).
 *
 * Attaches to window.CPA.initScrollReveal â see the note at the top of
 * js/data.js for why this site uses a shared global instead of ES
 * module import/export.
 * ---------------------------------------------------------------------
 */
(function () {
  window.CPA = window.CPA || {};

  function initScrollReveal() {
    const targets = document.querySelectorAll('[data-reveal]');
    if (!targets.length) return;

    if (!('IntersectionObserver' in window)) {
      targets.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    targets.forEach((el) => observer.observe(el));
  }

  CPA.initScrollReveal = initScrollReveal;
})();
