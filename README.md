# Portofolio Has Adhi Rian

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen)](https://hasadhirian.vercel.app)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Vue 3](https://img.shields.io/badge/Vue-3.5-42b883?logo=vue.js&logoColor=white)]()
[![Vite](https://img.shields.io/badge/Vite-8-646cff?logo=vite&logoColor=white)]()
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06b6d4?logo=tailwindcss&logoColor=white)]()

Website portofolio bilingual (Indonesia/Inggris) untuk **Has Adhi Rian**, Fullstack Developer. Single-page application dengan modal detail proyek, tema gelap/terang, dan toggle bahasa. Dibangun dengan performa dan aksesibilitas sebagai prioritas utama.

## ✨ Fitur Utama

- 🌙 **Tema Gelap/Terang** — Default gelap, toggle persisten di `localStorage`
- 🌐 **Bilingual (ID/EN)** — Locale lookup ringan tanpa `vue-i18n`, default Bahasa Indonesia
- 📱 **Mobile-first & Responsif** — Breakpoint 360px, 390px, 768px, 1024px, 1440px
- ♿ **Aksesibilitas AA** — Semantic HTML, focus management, skip link, reduced motion, kontras WCAG AA
- 🚀 **Performa Tinggi** — SSR + prerender HTML, CSS inlined, font fallback metrik, Lighthouse ≥ 95
- 🎨 **Desain "Signal & Structure"** — ENERGY 3 / RHYTHM 3 / MOTION 2, identitas visual khas

## 🛠 Stack Teknologi

| Kategori         | Teknologi                                                                                   |
| ---------------- | ------------------------------------------------------------------------------------------- |
| **Framework**    | Vue 3 (Composition API, `<script setup>`), JavaScript                                       |
| **Build Tool**   | Vite 8 (SSR + client hydration)                                                             |
| **Styling**      | Tailwind CSS v4 (`@tailwindcss/vite`)                                                       |
| **i18n**         | Custom locale lookup di `src/i18n.js` (tanpa runtime `vue-i18n`)                            |
| **Modal & Menu** | Headless UI Vue (Dialog, FocusTrap)                                                         |
| **Fonts**        | Self-hosted via `@fontsource-variable`: Bricolage Grotesque, Instrument Sans, IBM Plex Mono |
| **Icons**        | SVG inline kustom (bukan library ikon)                                                      |
| **Deploy**       | Vercel (static output `dist/`)                                                              |

## 📊 Performa & Kualitas (Build Terakhir)

| Metric                     | Mobile    | Desktop |
| -------------------------- | --------- | ------- |
| **Lighthouse Performance** | 97–98     | 100     |
| **Accessibility**          | 100       | 100     |
| **Best Practices**         | 100       | 100     |
| **SEO**                    | 100       | 100     |
| **LCP**                    | ~1.9 s    | ~0.4 s  |
| **TBT**                    | 70–170 ms | ~10 ms  |
| **CLS**                    | 0         | 0       |

- axe-core 4.10.3: **0 violations** (7 skenario: dark, light, modal, mobile, wide)
- Tap target audit 500px: **0 elemen < 44px**
- Horizontal overflow: **0** di semua breakpoint

## 🚀 Menjalankan Secara Lokal

```bash
# Install dependensi
npm install

# Development server (HMR)
npm run dev

# Build produksi (SSR + prerender + inline CSS + hydration)
npm run build

# Preview build produksi
npm run preview
```

> `npm run build` merender HTML awal lewat SSR, menyuntikkannya ke `dist/index.html`, dan menginline CSS. Browser lalu melakukan hidrasi Vue, jadi konten sudah terlihat sebelum JavaScript selesai dimuat. Font memakai fallback dengan metrik yang disesuaikan agar teks tidak bergeser saat font selesai dimuat (CLS = 0).

## 📁 Struktur Project

```text
├── index.html              # Document shell, meta tags, boot script
├── vite.config.js          # Vite config (Tailwind, SSR entry)
├── package.json
├── .gitignore
├── AGENTS.md               # Panduan agent (stack, struktur, aturan konten)
├── PRD.md                  # Product Requirements Document v1.0
├── DESIGN.md               # Design direction (Signal & Structure)
├── f.txt                   # Brief asli (jangan diubah)
├── public/
│   ├── cv/has-adhi-rian-cv.pdf
│   ├── images/profile.jpg
│   ├── favicon.svg
│   ├── og-image.png
│   └── robots.txt
├── scripts/
│   └── prerender.js        # Inject SSR HTML + inline CSS ke dist/index.html
└── src/
    ├── entry-client.js     # Client hydration entry
    ├── entry-server.js     # SSR entry (renderToString)
    ├── App.vue             # Page shell, metadata updates
    ├── i18n.js             # Custom locale lookup (id/en)
    ├── style.css           # Tailwind import + CSS variables
    ├── components/         # Section, modal, toggle, cover, icons
    │   ├── HeroSection.vue
    │   ├── AboutSection.vue
    │   ├── SkillsSection.vue
    │   ├── ProjectsSection.vue
    │   ├── ProjectCover.vue
    │   ├── ProjectModal.vue
    │   ├── ExperienceSection.vue
    │   ├── ContactSection.vue
    │   ├── SiteHeader.vue
    │   ├── SiteFooter.vue
    │   ├── SpineRail.vue
    │   ├── ScrollProgress.vue
    │   ├── SectionHeading.vue
    │   ├── AppIcon.vue
    │   ├── LanguageToggle.vue
    │   └── ThemeToggle.vue
    ├── composables/        # Logic reusable
    │   ├── useTheme.js
    │   ├── useLocale.js
    │   ├── useContent.js
    │   ├── useReveal.js
    │   ├── useActiveSection.js
    │   └── useScrollProgress.js
    ├── data/
    │   └── content.js      # Profile, nav, projects, experience, skills, contact
    ├── locales/
    │   ├── id.json         # Semua copy Bahasa Indonesia
    │   └── en.json         # Semua copy English
    └── styles/
        ├── base.css        # Tokens, reset, typography, reveal
        ├── fonts.css       # @font-face + metric fallbacks
        ├── layout.css      # Header, nav, spine rail, footer
        ├── sections.css    # Hero, about, skills, projects, exp, contact
        ├── components.css  # Modal, cards, buttons, forms
        └── contact.css     # Contact section specific
```

## ✏️ Mengubah Konten

| Aksi                    | File                                                                                    |
| ----------------------- | --------------------------------------------------------------------------------------- |
| **Edit teks bilingual** | `src/locales/id.json` & `src/locales/en.json` (struktur key harus sama)                 |
| **Tambah/edit proyek**  | `src/data/content.js` → `projectOrder`, `projectMeta`, lalu `projects.items` di locales |
| **Edit pengalaman**     | `src/data/content.js` → `experienceOrder`, `experienceMeta`                             |
| **Edit skill**          | `src/data/content.js` → `skillGroups`                                                   |
| **Edit link kontak**    | `src/data/content.js` → `profile`, `contactChannels`                                    |
| **Cover proyek**        | `src/components/ProjectCover.vue` (SVG ilustrasi sistem, **bukan screenshot**)          |

> ⚠️ Cover proyek adalah ilustrasi SVG kustom yang diberi label "Ilustrasi" di UI. Jangan diganti screenshot palsu.

## 🖼 Aset yang Perlu Diganti Sebelum Deploy Produksi

1. `public/images/profile.jpg` — Foto profil asli (rasio 4:5, disarankan 800×1000)
2. `public/cv/has-adhi-rian-cv.pdf` — CV asli
3. `public/og-image.png` — Gambar Open Graph (1200×630)
4. Setelah punya domain: ubah `og:image` & `twitter:image` di `index.html` jadi URL absolut
5. Setelah foto & CV diganti: perbarui `hero.portraitAlt`, `hero.portraitCaption`, `hero.portraitTag` di kedua locale, dan hapus `contact.cvNote`

File placeholder saat ini diberi label jujur agar tidak dikira aset final.

## 🌐 Deploy ke Vercel

1. Push repo ke GitHub
2. Import di [Vercel Dashboard](https://vercel.com/new)
3. Framework Preset: **Vite**
4. Build Command: `npm run build`
5. Output Directory: `dist`
6. Deploy — tidak ada environment variable yang dibutuhkan

## ♿ Aksesibilitas

- Modal & mobile menu: Headless UI Dialog (focus trap, Escape, return focus)
- Skip link ke `#main`
- Fokus terlihat (`:focus-visible` outline accent) di kedua tema
- Animasi mengikuti `prefers-reduced-motion: reduce`
- Semua kontrol punya accessible name (`aria-label`, visually hidden text)
- Semua gambar punya `alt` (kosong jika dekoratif)
- Landmark: `header`, `nav`, `main`, `footer`
- Kontras palette dicek dengan WCAG AA (rasio terendah 4.70:1)

## 📄 Dokumen Pendukung

| File        | Deskripsi                                                         |
| ----------- | ----------------------------------------------------------------- |
| `PRD.md`    | Product Requirements Document v1.0 (kebutuhan, konten, QA plan)   |
| `DESIGN.md` | Design direction: Signal & Structure, palette, tipografi, dials   |
| `AGENTS.md` | Panduan untuk AI agent (stack, struktur, aturan konten, perintah) |

## 📜 Lisensi

MIT License — lihat file [LICENSE](LICENSE).

---

**Dibangun dengan antislop** — filter desain anti-AI-slop yang memastikan setiap keputusan visual punya alasan, bukan default generik.
