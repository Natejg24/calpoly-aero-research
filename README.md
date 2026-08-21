# SEAL — SLO Experimental Aerospace Lab Website

A static research group website styled after professional university
aerospace labs (MIT, Stanford, NASA, Georgia Tech, Caltech). Built with
plain HTML, CSS, and JavaScript — no framework, no build step, no
dependencies to install.

## Access the Website
https://chintu0321.github.io/seal-aerospace-lab/

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

Just double-click `index.html` — it opens straight in your browser, no
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
detail page at `project.html?slug=<id>` — no HTML editing required.

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

- `js/render.js` — turns a project object into HTML (cards, publication rows, equipment rows, gallery tiles)
- `js/nav.js` — mobile hamburger menu
- `js/theme.js` — dark/light mode toggle
- `js/reveal.js` — the subtle fade-in-on-scroll animation
- `js/search.js` — the publications search box
- `js/lightbox.js` — the gallery image viewer
- `js/detail.js` — fills in `project.html` from the `?slug=` URL
- `js/main.js` — wires all of the above together; loaded by every page

**`css/style.css`** is organized into numbered sections with a table
of contents at the top. Section 1 defines every color, font size, and
spacing value as a CSS variable — change a value there to re-theme the
whole site at once. Section 1b defines the dark-mode color overrides.

The **People** page (`people.html`) and **Contact** page
(`contact.html`) are the two pages with hand-written HTML content
(names, roles, addresses) rather than generated from `data.js`, since
that information doesn't fit the "project" shape. Edit those files
directly — each person is one `<article class="person-card">` block,
commented in place.

## Publish it on GitHub (one-time setup)

> **First, a cleanup step.** An earlier automated attempt to initialize git
> directly in this synced folder left behind a broken, hidden `.git`
> directory (a sandbox permission quirk, not a problem with your files).
> Before starting below, delete it: in Finder, press `Cmd+Shift+.` to show
> hidden files, delete the `.git` folder inside this directory, then hide
> files again. Or in Terminal: `rm -rf .git` from inside this folder. This
> is safe — it only removes the broken git bookkeeping, not any site files.

1. **Create the repository on GitHub.** Go to <https://github.com/new>,
   name it (e.g. `seal-aerospace-lab`), leave it empty — don't add a
   README, .gitignore, or license, since this folder already has its own —
   and click **Create repository**. Copy the URL it gives you (looks like
   `https://github.com/YOUR-USERNAME/seal-aerospace-lab.git`).

2. **Push this folder to it.** Open Terminal, `cd` into this folder, then:

   ```bash
   git init
   git add -A
   git commit -m "Initial commit: SEAL research site"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/seal-aerospace-lab.git
   git push -u origin main
   ```

   No command line? Install [GitHub Desktop](https://desktop.github.com),
   choose "Add local repository," select this folder, and use its
   "Publish repository" button instead — same result, all clicks.

3. **Turn on GitHub Pages.** In the repo on GitHub: Settings → Pages →
   under "Build and deployment" choose **Deploy from a branch** → branch
   `main`, folder `/ (root)` → Save. Your site goes live in about a minute
   at:

   ```text
   https://YOUR-USERNAME.github.io/seal-aerospace-lab/
   ```

4. **Invite your research group.** Settings → Collaborators → Add people,
   using their GitHub usernames or the email they used to sign up. Once
   added, they can edit files directly on GitHub.com or clone the repo and
   push changes — see `CONTRIBUTING.md` for the workflow and what each file
   is for.

## Before going live

- Replace the placeholder lab email and room number (`contact.html`, and the footer on every page).
- Confirm names, roles, and bios on `people.html` with everyone listed.
- Ask the faculty advisor before publishing any unreleased papers or data.
- Add real `alt` text improvements if you replace any images (current images are treated as decorative project thumbnails — update `js/render.js` if an image should carry descriptive alt text instead).

## Working as a team

See `CONTRIBUTING.md` for how research group members should make changes —
what to edit for a new project vs. a team roster update, and when to use a
Pull Request instead of pushing straight to `main`.
