/**
 * js/lightbox.js
 * ---------------------------------------------------------------------
 * Minimal accessible lightbox for gallery.html.
 *
 * Accessibility notes:
 *  - Opening moves focus into the dialog; closing returns focus to the
 *    gallery item that opened it.
 *  - Escape closes; Left/Right arrow keys navigate between images.
 *  - The dialog is marked role="dialog" + aria-modal so screen readers
 *    treat background content as hidden while it's open.
 *
 * Attaches to window.CPA.initLightbox â see the note at the top of
 * js/data.js for why this site uses a shared global instead of ES
 * module import/export.
 * ---------------------------------------------------------------------
 */
(function () {
  window.CPA = window.CPA || {};

  function initLightbox(projects) {
    const gallery = document.getElementById('gallery-grid');
    const lightbox = document.getElementById('lightbox');
    if (!gallery || !lightbox || !projects.length) return;

    const img = lightbox.querySelector('img');
    const caption = lightbox.querySelector('figcaption');
    const closeBtn = lightbox.querySelector('.lightbox-close');
    const prevBtn = lightbox.querySelector('.lightbox-nav.prev');
    const nextBtn = lightbox.querySelector('.lightbox-nav.next');

    let currentIndex = 0;
    let lastFocused = null;

    function show(index) {
      currentIndex = (index + projects.length) % projects.length;
      const project = projects[currentIndex];
      img.src = project.image;
      img.alt = `Preview image for ${project.title}`;
      caption.textContent = project.title;
    }

    function open(index) {
      lastFocused = document.activeElement;
      show(index);
      lightbox.classList.add('is-open');
      lightbox.setAttribute('aria-hidden', 'false');
      closeBtn.focus();
      document.addEventListener('keydown', onKeydown);
    }

    function close() {
      lightbox.classList.remove('is-open');
      lightbox.setAttribute('aria-hidden', 'true');
      document.removeEventListener('keydown', onKeydown);
      if (lastFocused) lastFocused.focus();
    }

    function onKeydown(event) {
      if (event.key === 'Escape') close();
      if (event.key === 'ArrowRight') show(currentIndex + 1);
      if (event.key === 'ArrowLeft') show(currentIndex - 1);
    }

    gallery.addEventListener('click', (event) => {
      const item = event.target.closest('[data-gallery-index]');
      if (!item) return;
      open(Number(item.dataset.galleryIndex));
    });

    closeBtn.addEventListener('click', close);
    prevBtn.addEventListener('click', () => show(currentIndex - 1));
    nextBtn.addEventListener('click', () => show(currentIndex + 1));
    lightbox.addEventListener('click', (event) => {
      if (event.target === lightbox) close();
    });
  }

  CPA.initLightbox = initLightbox;
})();
