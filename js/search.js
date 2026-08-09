/**
 * js/search.js
 * ---------------------------------------------------------------------
 * Live filter for the publications list. Matches against title, tag,
 * and contributor names (see the data-search attribute rendered onto
 * each row by js/render.js).
 *
 * Purely client-side substring matching â no build step, no external
 * search service, appropriate for a list of a few dozen publications
 * at most.
 *
 * Attaches to window.CPA.initPublicationSearch â see the note at the
 * top of js/data.js for why this site uses a shared global instead of
 * ES module import/export.
 * ---------------------------------------------------------------------
 */
(function () {
  window.CPA = window.CPA || {};

  function initPublicationSearch() {
    const input = document.getElementById('pub-search-input');
    const list = document.getElementById('publications');
    const meta = document.getElementById('pub-search-meta');
    const empty = document.getElementById('pub-empty');
    if (!input || !list) return;

    const filter = () => {
      const query = input.value.trim().toLowerCase();
      const rows = Array.from(list.querySelectorAll('[data-search]'));
      let visibleCount = 0;

      rows.forEach((row) => {
        const matches = row.dataset.search.includes(query);
        row.style.display = matches ? '' : 'none';
        if (matches) visibleCount += 1;
      });

      if (meta) {
        meta.textContent = query
          ? `Showing ${visibleCount} of ${rows.length} publications matching "${input.value.trim()}"`
          : `Showing all ${rows.length} publications`;
      }
      if (empty) empty.classList.toggle('is-visible', visibleCount === 0);
    };

    input.addEventListener('input', filter);
    filter();
  }

  CPA.initPublicationSearch = initPublicationSearch;
})();
