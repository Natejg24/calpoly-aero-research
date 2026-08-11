/**
 * js/theme.js
 * ---------------------------------------------------------------------
 * Dark / light mode toggle.
 *
 * The INITIAL theme (light, dark, or "match the OS setting") is chosen
 * by a tiny inline script in the <head> of every page — see the
 * comment in index.html for why that has to run before this file
 * (it prevents a flash of the wrong theme on page load).
 *
 * This module only wires up the button click and keeps localStorage in
 * sync so the choice persists across pages and future visits.
 *
 * Attaches to window.SEAL.initThemeToggle — see the note at the top of
 * js/data.js for why this site uses a shared global instead of ES
 * module import/export.
 * ---------------------------------------------------------------------
 */
(function () {
  window.SEAL = window.SEAL || {};
  const STORAGE_KEY = 'seal-theme';

  function initThemeToggle() {
    const button = document.querySelector('.theme-toggle');
    if (!button) return;

    button.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem(STORAGE_KEY, next);
      button.setAttribute('aria-pressed', String(next === 'dark'));
    });

    // Reflect the theme the inline head script already applied so the
    // button's aria-pressed state is correct on first render.
    const active = document.documentElement.getAttribute('data-theme') === 'dark';
    button.setAttribute('aria-pressed', String(active));
  }

  SEAL.initThemeToggle = initThemeToggle;
})();
