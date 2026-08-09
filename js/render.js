/**
 * js/render.js
 * ---------------------------------------------------------------------
 * Pure "data in, HTML string out" functions used to build the repeating
 * pieces of UI on the site: project cards, publication rows, equipment
 * rows, and gallery tiles.
 *
 * Keeping these separate from data.js (the content) and from the page
 * scripts (the "what happens on this specific page" logic) means a
 * student can restyle a card's markup in exactly one place and have it
 * apply everywhere that card type is used.
 *
 * Everything here attaches to window.CPA.render â see the note at the
 * top of js/data.js for why this site uses a shared global instead of
 * ES module import/export.
 * ---------------------------------------------------------------------
 */
(function () {
  window.CPA = window.CPA || {};

  /** Escapes text before it's dropped into innerHTML, since a couple of
   * fields (people, titles) could theoretically contain HTML-sensitive
   * characters like `&` or `<`. Cheap insurance, not full sanitization. */
  function escapeHtml(value) {
    return String(value)
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;');
  }

  /** Research/project card used on the homepage and projects.html.
   * Links through to project.html?slug=<id> for the full write-up. */
  function projectCardHtml(project) {
    return `
      <article class="project-card" data-reveal>
        <a class="card-media" href="project.html?slug=${encodeURIComponent(project.id)}" aria-hidden="true" tabindex="-1">
          <img src="${project.image}" alt="" loading="lazy" width="306" height="396">
        </a>
        <div class="card-body">
          <span class="tag">${escapeHtml(project.tag)}</span>
          <h3><a class="text-link" style="color:inherit;border:none;" href="project.html?slug=${encodeURIComponent(project.id)}">${escapeHtml(project.title)}</a></h3>
          <p class="summary">${escapeHtml(project.summary)}</p>
          <p class="people">${escapeHtml(project.people)}</p>
          <div class="card-actions">
            <a class="text-link" href="project.html?slug=${encodeURIComponent(project.id)}">
              <span>Read project</span><span class="icon" aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </article>`;
  }

  /** Publication row used on publications.html and the homepage's
   * "Featured Publications" section. Shows the report's exact published
   * title (not the shorter project nickname used elsewhere) since this
   * is meant to read like a real citation list. Includes a direct PDF
   * download button since publications are meant to be read, not just
   * browsed. */
  function publicationRowHtml(project) {
    return `
      <article class="pub-row" data-reveal
        data-search="${escapeHtml(`${project.title} ${project.paperTitle} ${project.tag} ${project.people}`).toLowerCase()}">
        <div class="pub-thumb">
          <img src="${project.image}" alt="" loading="lazy" width="96" height="128">
        </div>
        <div class="pub-body">
          <span class="tag">${escapeHtml(project.tag)}</span>
          <h3>${escapeHtml(project.paperTitle)}</h3>
          <p class="summary">${escapeHtml(project.summary)}</p>
          <p class="people">${escapeHtml(project.people)}</p>
        </div>
        <div class="pub-action">
          <a class="button secondary" href="${project.pdf}" target="_blank" rel="noopener">
            Download PDF
          </a>
        </div>
      </article>`;
  }

  /** Equipment/facility row used on equipment.html â same underlying
   * project data, framed around the physical apparatus and its specs
   * rather than the research findings. */
  function equipmentRowHtml(project) {
    // Label first (small, muted caption), value below (bold) â matches
    // the same label/value convention used in the project detail page's
    // meta row, so both "spec sheet" treatments read consistently.
    const specs = project.specs
      .map((spec) => `<div><span class="spec-label">${escapeHtml(spec.label)}</span><strong>${escapeHtml(spec.value)}</strong></div>`)
      .join('');
    return `
      <article class="equipment-row" data-reveal>
        <div class="equip-media">
          <img src="${project.image}" alt="" loading="lazy" width="280" height="360">
        </div>
        <div class="equip-body">
          <span class="tag">${escapeHtml(project.tag)}</span>
          <h3>${escapeHtml(project.title)}</h3>
          <p>${escapeHtml(project.summary)}</p>
          <div class="spec-list">${specs}</div>
        </div>
      </article>`;
  }

  /** Gallery tile used on gallery.html. Rendered as a <button> (not a
   * link) because clicking it opens the in-page lightbox rather than
   * navigating anywhere. */
  function galleryItemHtml(project, index) {
    return `
      <button type="button" class="gallery-item" data-reveal data-gallery-index="${index}"
        aria-label="Open larger view of ${escapeHtml(project.title)}">
        <span class="thumb-frame">
          <img src="${project.image}" alt="" loading="lazy" width="306" height="396">
        </span>
        <span class="caption"><p>${escapeHtml(project.title)}</p></span>
      </button>`;
  }

  /** Renders a list of projects into a container using the given
   * per-item render function. No-ops safely if the container isn't on
   * the current page, so page scripts don't need to guard every call. */
  function renderInto(containerId, items, itemRenderer) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = items.map(itemRenderer).join('');
  }

  CPA.render = {
    projectCardHtml,
    publicationRowHtml,
    equipmentRowHtml,
    galleryItemHtml,
    renderInto
  };
})();
