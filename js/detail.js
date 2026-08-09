/**
 * js/detail.js
 * ---------------------------------------------------------------------
 * Populates project.html from the ?slug=<project-id> URL parameter.
 * One HTML template serves every project â add a project to
 * js/data.js and it automatically gets a working detail page at
 * project.html?slug=<id>, with no new HTML file required.
 *
 * Attaches to window.CPA.renderProjectDetail â see the note at the top
 * of js/data.js for why this site uses a shared global instead of ES
 * module import/export.
 * ---------------------------------------------------------------------
 */
(function () {
  window.CPA = window.CPA || {};

  function renderProjectDetail() {
    const root = document.getElementById('project-detail');
    if (!root) return;

    const params = new URLSearchParams(window.location.search);
    const project = CPA.getProjectById(params.get('slug'));

    if (!project) {
      root.innerHTML = `
        <div class="detail-body">
          <h1>Project not found</h1>
          <p class="overview">We couldn't find a project matching that link. It may have been renamed or removed.</p>
          <a class="button" href="projects.html">Back to all projects</a>
        </div>`;
      document.title = 'Project not found | Cal Poly Experimental Aerodynamics';
      return;
    }

    document.title = `${project.title} | Cal Poly Experimental Aerodynamics`;

    const specs = project.specs
      .map((spec) => `<div><dt>${spec.label}</dt><dd>${spec.value}</dd></div>`)
      .join('');

    root.innerHTML = `
      <div class="detail-media">
        <img src="${project.image}" alt="Preview of ${project.title}" width="306" height="396">
      </div>
      <div class="detail-body">
        <span class="tag">${project.tag}</span>
        <h1>${project.title}</h1>
        <p class="citation">
          Published as <em>&ldquo;${project.paperTitle}&rdquo;</em> &mdash; ${project.people}.
        </p>
        <div class="meta-row">${specs}</div>
        <p class="overview">${project.overview}</p>
        <p class="people"><strong>Contributors:</strong> ${project.people}</p>
        <div class="actions">
          <a class="button" href="${project.pdf}" target="_blank" rel="noopener">Download PDF report</a>
          <a class="button secondary" href="projects.html">Back to all projects</a>
        </div>
      </div>`;
  }

  CPA.renderProjectDetail = renderProjectDetail;
})();
