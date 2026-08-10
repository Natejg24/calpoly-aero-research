# Cal Poly Experimental Aerodynamics Research Website

A static research group website styled after professional university
aerospace labs (MIT, Stanford, NASA, Georgia Tech, Caltech). Built with
plain HTML, CSS, and JavaScript â no framework, no build step, no
dependencies to install.

## Site map

| Page | File | What it is |
|---|---|---|
| Home | `index.html` | Hero, research highlights, featured projects, featured publications |
| Projects | `projects.html` | Full project archive (cards) |
| Project detail | `project.html?slug=<id>` | One template, reused for every project |
| Publications | `publications.html` | Full publication list with a live search box |
| Equipment | `equipment.html` | The physical lab apparatus behind the research |
| Gallery | `gallery.html` | Image gallery with a keyboard-accessible lightbox |
| People | `people.html` | Faculty advisor and student researchers |
| Contact | `contact.html` | Lab and department contact information |

## Run locally

Just double-click `index.html` â it opens straight in your browser, no
server or install needed. (If you're curious: the site intentionally
avoids ES module `import`/`export` syntax, which browsers block on
`file://` pages, specifically so this works for anyone on the team
without a terminal.)

If you'd rather serve it (optional, e.g. to test how it behaves over a
real network origin):

```bash
python3 -m http.server 8000
```

Open <http://localhost:8000>.

## How content is organized

**`js/data.js` is the only file most students need to edit.** It's a
single array of project objects. Add a project there and it
automatically appears on the homepage, the projects page, the
publications page, the equipment page, the gallery, and gets its own
detail page at `project.html?slug=<id>` â no HTML editing required.

```js
{
  id: 'my-new-project',        // used in the URL: project.html?slug=my-new-project
  title: 'My New Project',
  tag: 'Category Label',
  image: 'images/my-new-project.jpg',
  pdf: 'pdfs/my-new-project.pdf',
  people: 'Name One, Name Two',
  summary: 'One or two sentences for cards and publication rows.',
  overview: 'A longer paragraph for the project detail page.',
  specs: [
    { label: 'Category', value: '...' },
    { label: 'Key spec', value: '...' }
  ]
}
```

Other JS files, and what they're responsible for:

- `js/render.js` â turns a project object into HTML (cards, publication rows, equipment rows, gallery tiles)
- `js/nav.js` â mobile hamburger menu
- `js/theme.js` â dark/light mode toggle
- `js/reveal.js` â the subtle fade-in-on-scroll animation
- `js/search.js` â the publications search box
- `js/lightbox.js` â the gallery image viewer
- `js/detail.js` â fills in `project.html` from the `?slug=` URL
- `js/main.js` â wires all of the above together; loaded by every page

**`css/style.css`** is organized into numbered sections with a table
of contents at the top. Section 1 defines every color, font size, and
spacing value as a CSS variable â change a value there to re-theme the
whole site at once. Section 1b defines the dark-mode color overrides.

The **People** page (`people.html`) and **Contact** page
(`contact.html`) are the two pages with hand-written HTML content
(names, roles, addresses) rather than generated from `data.js`, since
that information doesn't fit the "project" shape. Edit those files
directly â each person is one `<article class="person-card">` block,
commented in place.
## Working as a team

See `CONTRIBUTING.md` for how research group members should make changes â
what to edit for a new project vs. a team roster update, and when to use a
Pull Request instead of pushing straight to `main`.
