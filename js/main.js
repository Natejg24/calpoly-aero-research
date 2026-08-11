/**
 * js/main.js
 * ---------------------------------------------------------------------
 * Entry point loaded by every page. It must be the LAST script tag on
 * the page, after data.js, render.js, nav.js, theme.js, reveal.js,
 * search.js, lightbox.js, and detail.js — each of those files attaches
 * its piece to the shared `window.SEAL` global, and main.js wires them
 * together:
 *
 *   <script src="js/data.js"></script>
 *   <script src="js/render.js"></script>
 *   <script src="js/nav.js"></script>
 *   <script src="js/theme.js"></script>
 *   <script src="js/reveal.js"></script>
 *   <script src="js/search.js"></script>
 *   <script src="js/lightbox.js"></script>
 *   <script src="js/detail.js"></script>
 *   <script src="js/main.js"></script>
 *
 * WHY PLAIN SCRIPTS INSTEAD OF ES MODULES (import/export)?
 * Module scripts (<script type="module">) are only allowed to load
 * from http:// or https:// origins. If someone double-clicks index.html
 * in Finder/Explorer, the browser opens it as a file:// URL, and every
 * module import silently fails — the page loads, but every dynamically
 * generated section (project cards, publication rows, equipment specs,
 * gallery) stays empty, with no visible error unless you open DevTools.
 * That's exactly the "I don't see all the publications" symptom. Plain
 * scripts have no such restriction, so this site works identically
 * whether it's double-clicked, served locally, or published to GitHub
 * Pages.
 *
 * Each render/init function below is safe to call on every page — they
 * all check for the DOM elements they need and simply do nothing if
 * those elements aren't present. That's what lets this one file run
 * unmodified on the homepage, projects page, publications page, etc.,
 * with each page only "lighting up" the pieces relevant to it.
 * ---------------------------------------------------------------------
 */
document.addEventListener('DOMContentLoaded', () => {
  const projects = SEAL.projects;
  const render = SEAL.render;

  // Global, present on every page.
  SEAL.initNav();
  SEAL.initThemeToggle();

  // Keeps the footer copyright year correct without anyone needing to
  // remember to update eight HTML files every January.
  const yearEl = document.getElementById('copyright-year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // Homepage: three featured projects + three featured publications.
  render.renderInto('featured-projects', projects.slice(0, 3), render.projectCardHtml);
  render.renderInto('featured-publications', projects.slice(0, 3), render.publicationRowHtml);

  // Projects archive page.
  render.renderInto('all-projects', projects, render.projectCardHtml);

  // Publications page.
  render.renderInto('publications', projects, render.publicationRowHtml);
  SEAL.initPublicationSearch();

  // Equipment / facilities page.
  render.renderInto('equipment-list', projects, render.equipmentRowHtml);

  // Gallery page.
  render.renderInto('gallery-grid', projects, render.galleryItemHtml);
  SEAL.initLightbox(projects);

  // Project detail page (project.html?slug=...).
  SEAL.renderProjectDetail();

  // Run scroll-reveal last, after any dynamic content above has been
  // inserted into the DOM, so newly added [data-reveal] elements are
  // picked up by the observer.
  SEAL.initScrollReveal();
});
