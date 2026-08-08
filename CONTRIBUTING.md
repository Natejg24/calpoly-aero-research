# Contributing to the lab website

This guide is for research group members who want to update the site â add a
project, fix a typo, swap a photo, update someone's title. No web development
experience required for most changes.

## Before you touch anything: preview it

Every page works by double-clicking `index.html` to open it in your browser â
no server, no install. Click around, and when something looks off after your
edit, that's how you'll check it.

## The two ways to make a change

**Small text edits (typo, email address, a sentence in a bio):**
Do this directly on GitHub.com â click the file, click the pencil icon, edit,
and commit. No download required.

**Anything bigger (new project, new image, new page section):**
1. Clone the repo (or use GitHub Desktop if you don't want the command line:
   <https://desktop.github.com>).
2. Create a branch for your change: `git checkout -b add-new-project`.
3. Edit the files (see "Where things live" below).
4. Preview by opening `index.html` in your browser.
5. Commit and push your branch, then open a Pull Request on GitHub so
   someone else can glance at it before it goes live. Once merged into
   `main`, GitHub Pages republishes automatically within a minute or two.

## Where things live

- **Add or update a research project** â edit `js/data.js`. It's one array;
  each project is an object with a title, tag, image, PDF, contributors, and
  a spec list. Copy an existing entry and change the values. The comment at
  the top of the file explains every field. Once you save it, the project
  automatically appears on the homepage, Projects page, Publications page,
  Equipment page, Gallery, and gets its own detail page â you don't need to
  touch any HTML.
- **Add the project's image and PDF** â drop them in `images/` and `pdfs/`,
  then reference those filenames in the `js/data.js` entry.
- **Update the team roster** â edit `people.html` directly. Each person is
  one `<article class="person-card">` block â copy one, change the name,
  role, and bio.
- **Update contact info** â edit `contact.html`.
- **Change colors, fonts, spacing** â edit `css/style.css`. It's organized
  into numbered, commented sections; section 1 has every color and font
  size as a variable, so changing one value re-themes the whole site.

## Ground rules

- Keep facts (specs, names, titles) traceable to something real â a report,
  an official title, a name someone actually goes by. Don't guess numbers.
- Don't commit unpublished data or a paper the faculty advisor hasn't
  cleared for public release.
- If you're not sure whether a change is safe to make directly, open a Pull
  Request instead of pushing straight to `main` â it costs nothing and
  gives someone a chance to catch a mistake before it's live.

Questions: reach out to Nate.
