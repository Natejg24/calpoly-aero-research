/**
 * js/nav.js
 * ---------------------------------------------------------------------
 * Accessible mobile navigation toggle.
 *
 * Behavior:
 *  - Click the hamburger button to open/close the menu.
 *  - aria-expanded on the button always reflects the menu's state.
 *  - Escape closes the menu and returns focus to the toggle button.
 *  - Clicking a link inside the menu closes it (useful on mobile,
 *    since the menu overlays the content).
 *  - Clicking anywhere outside the open menu closes it.
 *
 * Attaches to window.SEAL.initNav — see the note at the top of
 * js/data.js for why this site uses a shared global instead of ES
 * module import/export.
 * ---------------------------------------------------------------------
 */
(function () {
  window.SEAL = window.SEAL || {};

  function initNav() {
    const toggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('.nav');
    if (!toggle || !nav) return;

    const closeMenu = () => {
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    };

    const openMenu = () => {
      nav.classList.add('is-open');
      toggle.setAttribute('aria-expanded', 'true');
    };

    toggle.addEventListener('click', () => {
      const isOpen = nav.classList.contains('is-open');
      isOpen ? closeMenu() : openMenu();
    });

    nav.addEventListener('click', (event) => {
      if (event.target.tagName === 'A') closeMenu();
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && nav.classList.contains('is-open')) {
        closeMenu();
        toggle.focus();
      }
    });

    document.addEventListener('click', (event) => {
      const clickedInsideNav = nav.contains(event.target) || toggle.contains(event.target);
      if (!clickedInsideNav && nav.classList.contains('is-open')) closeMenu();
    });
  }

  SEAL.initNav = initNav;
})();
