<!-- antislop:start -->
## antislop
For UI, copy, people, mobile layout, or code comments work, read these installed skill files directly (use these paths even if a same-named global skill exists):
- Core filter, always on: `antislop`: `.opencode/skills/antislop/SKILL.md`
- UI / visual: `antislop-ui`: `.opencode/skills/antislop-ui/SKILL.md`
- Code comments: `antislop-code`: `.opencode/skills/antislop-code/SKILL.md`
- Mobile / responsive: `antislop-layoutmobile`: `.opencode/skills/antislop-layoutmobile/SKILL.md`
- People: `antislop-human`: `.opencode/skills/antislop-human/SKILL.md`
Before starting, follow the core's "Two Usage Modes" section in strict order: explicit session instruction first, then global preference, then ask. A session instruction always wins. For a resolved mode, say `antislop active: <mode> (session override).` or `antislop active: <mode> (global preference).` once before presenting findings or making edits, using the actual mode and source. Acknowledging the user's request without naming the source does not replace this notice.
Only an explicit choice of antislop during or after selects a session mode. A request to review, audit, or avoid file edits does not select a mode; read the global preference in that case. Another skill's mode does not select antislop's mode.
If the mode is unresolved, ask during/after and end the response; wait for the answer before any UI review, planning, or concept. For read-only tasks, put the active-mode notice only at the start of the final answer, never in progress messages. For editing tasks, announce before the first edit and omit it from the final answer.
To update antislop later: `npx antislop-ai --update`, or run `npx antislop-ai` and pick Overwrite them.
<!-- antislop:end -->

# Project Guide

## Commands

- `npm install`: install dependencies.
- `npm run dev`: start the Vite dev server.
- `npm run build`: production build to `dist/`, including prerendered HTML and hydration.
- `npm run preview`: serve the production build locally.

## Stack

- Vite 8
- Vue 3 with the Composition API (JavaScript, not TypeScript)
- Tailwind CSS v4 through `@tailwindcss/vite`
- A small locale lookup in `src/i18n.js` for Indonesian and English copy
- Headless UI Vue for the project modal and mobile menu
- Self-hosted fonts through `@fontsource`

## Structure

- `index.html`: document shell, meta tags, and the theme and locale boot script.
- `src/entry-client.js`: mounts the prerendered HTML with Vue hydration.
- `src/entry-server.js`: renders the app to HTML during the build.
- `scripts/prerender.js`: injects the rendered HTML and inlines the CSS into `dist/index.html`.
- `src/App.vue`: page shell, metadata updates on locale change.
- `src/components/`: section and control components.
- `src/composables/`: theme, locale, reveal, active section, and scroll progress logic.
- `src/data/content.js`: shared data such as links, project metadata, skills, and experience metadata.
- `src/locales/id.json` and `src/locales/en.json`: all visible bilingual copy.
- `src/styles/`: tokens and shared primitives in `base.css`, layout, sections, components, and contact styles.
- `public/images/profile.jpg`: profile photo.
- `public/cv/has-adhi-rian-cv.pdf`: CV file.
- `public/og-image.png`: Open Graph image.

## Content Rules

- Keep Indonesian and English locale keys in sync.
- Project copy lives under `projects.items` in both locale files. Shared project data lives in `src/data/content.js`.
- Do not invent project years, screenshots, logos, statistics, testimonials, or client names.
- Project covers are system illustrations. They are labeled as illustrations in the UI.
- Do not use em dashes in site copy.
- Use `v-reveal` for scroll reveals and respect `prefers-reduced-motion`.

## Before Deploy

1. Replace `public/images/profile.jpg` with the real profile photo. Keep the 4:5 ratio.
2. Update `hero.portraitAlt`, `hero.portraitCaption`, and `hero.portraitTag` in both locale files.
3. Replace `public/cv/has-adhi-rian-cv.pdf` with the real CV and remove `contact.cvNote` in both locale files.
4. Replace `public/og-image.png` if the design changes.
5. Set the deployed URL in the Open Graph image meta tag. Scrapers need an absolute URL.
