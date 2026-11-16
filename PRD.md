# PRD: Web Portofolio Has Adhi Rian

**Versi:** 1.0
**Tanggal:** 16 November 2026
**Status:** Disetujui untuk implementasi

## 1. Ringkasan
Website portofolio bilingual (Indonesia/English) untuk recruiter, hiring manager, dan calon klien. Single-page dengan modal detail proyek. Dibangun dengan Vite + Vue 3 + Tailwind CSS, deploy ke Vercel. Identitas visual "Signal & Structure": alur bisnis bertemu arsitektur teknis.

## 2. Keputusan
| Keputusan | Nilai |
|---|---|
| Bahasa | Bilingual toggle: Indonesia (default) + English |
| Struktur | Single-page scroll + modal detail proyek |
| Tech stack | Vite + Vue 3 + Tailwind CSS |
| Aset tersedia | Foto profil, CV PDF |
| Aset belum tersedia | Screenshot proyek, logo |
| Tema | Dark default + toggle light |
| Deployment | Vercel |
| Desain | Bold/experimental, ENERGY 3 / RHYTHM 3 / MOTION 2 |

## 3. Target Pengguna
| Persona | Yang mereka cari |
|---|---|
| Recruiter teknis | Stack, kedalaman proyek, link repo/demo |
| Recruiter non-teknis | Ringkasan jelas, peran, dampak bisnis |
| Hiring manager | Pengalaman, pola kerja, komunikasi |
| Calon klien freelance | Layanan, hasil kerja, kontak cepat |

## 4. Tujuan & Metrik
- Profil dipahami < 30 detik dari hero + about.
- 4 proyek unggulan terlihat jelas, masing-masing dengan peran dan stack.
- Kontak dapat diakses dari nav dan footer.
- Target Lighthouse: Performance ≥ 95, Accessibility 100, SEO 100.
- Nol klaim, statistik, atau testimoni palsu.

## 5. Ruang Lingkup
**In scope (v1):**
- Single-page: Hero, About, Skills, Projects, Experience, Contact.
- Modal detail proyek yang aksesibel.
- Bilingual ID/EN dengan toggle dan persistensi.
- Dark/light toggle dengan persistensi.
- Responsive mobile-first.
- Animasi scroll dan micro-interaction.
- SEO dasar + Open Graph.
- Tombol unduh CV.
- Deploy Vercel.

**Out of scope (v1):**
- Blog, CMS, backend, database.
- Form kontak (pakai mailto + LinkedIn).
- Halaman terpisah per proyek.
- Analytics.
- Domain kustom (pakai subdomain Vercel dulu).
- SEO multibahasa penuh dengan hreflang dan URL terpisah.

## 6. Information Architecture
1. **Navbar:** wordmark, anchor links (About, Skills, Projects, Experience, Contact), language toggle ID/EN, theme toggle.
2. **Hero:** nama, headline, positioning line, CTA "Lihat Proyek" + "Unduh CV", foto profil.
3. **About:** ringkasan 2-3 kalimat + 3 highlight.
4. **Skills:** 5 kategori.
5. **Projects:** 4 kartu, klik untuk modal.
6. **Experience:** timeline 2 entri.
7. **Contact:** email, LinkedIn, GitHub, CV.
8. **Footer:** copyright + credit.

## 7. Konten & Aset
### Sudah tersedia
- Identitas, headline, ringkasan.
- Skills (5 kategori).
- 4 proyek: deskripsi, stack, peran, link.
- 2 pengalaman: perusahaan, peran, tanggal, bullet.
- 3 kanal kontak.
- Foto profil.
- CV PDF.

### Belum tersedia
- **Screenshot proyek:** gunakan cover ilustrasi sistem kustom, bukan skeleton atau screenshot palsu.
- **Logo:** gunakan wordmark tipografis "HAS ADHI RIAN", versi ringkas "HAS." untuk mobile.
- **Link demo SPK dan coffee exporter:** kosongkan, jangan buat tombol palsu.

### Aset yang perlu disiapkan di repo
- `public/images/profile.jpg` (foto profil, min 800x1000).
- `public/cv/has-adhi-rian-cv.pdf` (CV PDF).
- Jika nama file berbeda, sesuaikan.

## 8. Content Model
### Proyek
| Proyek | Peran | Stack | Link | Cover |
|---|---|---|---|---|
| Dawn Six | Fullstack Developer (tim) | Laravel 11, Node.js (Baileys), Vite, MySQL, REST API | Private, demo saat interview | Ilustrasi broadcast nodes |
| SPK Weighted Product | System Analyst & Fullstack Developer | PHP, MySQL, JavaScript, Bootstrap | Belum ada | Ilustrasi matriks bobot |
| Coffee Exporter Profile | Frontend Web Developer | HTML5, CSS3, JavaScript, Vercel/Netlify | Belum ada | Ilustrasi rute ekspor |
| HarmasenTech | Web Developer | HTML5, CSS3, JavaScript, Git, Vercel | https://harmasentech.web.id/ | Ilustrasi blok modular |

Catatan: tahun proyek tidak dicantumkan karena belum ada data. Jangan fabrikasi.

### Pengalaman
| Peran | Perusahaan | Periode |
|---|---|---|
| Freelance Fullstack Web Developer | HarmasenTech | Agustus 2026 - Sekarang |
| IT Research Intern | PT Elang System Solusi Indonesia | Oktober 2025 - November 2025 |

### Skills
- **Main Stack:** Laravel, Vue.js, Tailwind CSS, MySQL
- **Frontend:** HTML5, CSS3, Tailwind CSS, JavaScript, Vue.js, React.js
- **Backend:** PHP (Laravel), Node.js, Python
- **Database:** MySQL
- **Tools & Environment:** Git, Vite, REST API

## 9. Copy Direction
### Positioning line
- **ID:** "Fullstack developer yang menghubungkan analisis proses bisnis dengan eksekusi teknis end-to-end."
- **EN:** "Fullstack developer connecting business process analysis with end-to-end technical execution."

### About
- **ID:** "Lulusan Sistem Informasi yang berfokus pada pengembangan web fullstack. Saya membedah masalah bisnis menjadi alur sistem yang logis, lalu membangunnya menjadi aplikasi yang stabil dan mudah digunakan. Dari riset pengguna hingga deployment, saya menangani siklus pengembangan secara menyeluruh dengan Laravel, Node.js, Vue.js, dan MySQL."
- **EN:** "An Information Systems graduate focused on fullstack web development. I break business problems into logical system flows, then build them into stable, usable applications. From user research to deployment, I handle the full development cycle with Laravel, Node.js, Vue.js, and MySQL."

### Highlights
- **ID:**
  - "End-to-end: dari antarmuka responsif hingga arsitektur backend dan database."
  - "Business + tech: riset pengguna dan analisis proses bisnis diterjemahkan menjadi alur sistem."
  - "Deployment: Git, Vercel, VPS, dan integrasi REST API hingga produksi."
- **EN:**
  - "End-to-end: from responsive interfaces to backend architecture and databases."
  - "Business + tech: user research and business process analysis translated into system flows."
  - "Deployment: Git, Vercel, VPS, and REST API integrations through to production."

## 10. Functional Requirements
- FR-1: Nav anchor scroll ke section yang ada; active section indicator.
- FR-2: Project card membuka modal dengan konteks, peran, stack, hasil, dan link/label private.
- FR-3: Modal aksesibel: focus trap, Escape, aria-modal, labelled by title, return focus.
- FR-4: Language toggle ID/EN; persist di localStorage; update `<html lang>`; update title/meta.
- FR-5: Theme toggle dark/light; persist; default dark; update `color-scheme`.
- FR-6: Link eksternal buka tab baru + rel="noopener".
- FR-7: Email pakai mailto:.
- FR-8: Tombol unduh CV mengarah ke file PDF.
- FR-9: Semua kontrol punya accessible name, hover/active/focus/disabled state.
- FR-10: Hormati prefers-reduced-motion.
- FR-11: Mobile menu buka/tutup, Escape, focus return.

## 11. Non-Functional Requirements
- NFR-1: Mobile-first, tanpa overflow horizontal (R-03).
- NFR-2: Kontras WCAG AA: 4.5:1 teks normal, 3:1 teks besar (R-25).
- NFR-3: Keyboard navigable, focus visible (R-32).
- NFR-4: LCP ≤ 2.5s; media punya dimensi; font di-preload (R-40).
- NFR-5: Semantic HTML, landmark, alt text (R-39).
- NFR-6: SEO: title unik, meta description, OG tags, favicon.
- NFR-7: Tidak ada em dash, buzzword, statistik/testimoni palsu (R-02, R-16, R-17, R-18, R-36, R-38).
- NFR-8: Copy ID dan EN natural, bukan terjemahan mesin.
- NFR-9: Tidak ada flash theme saat load (inline script di `index.html`).

## 12. Design Direction (antislop)
- **Design Read:** developer portfolio for recruiters and hiring managers, bold/experimental editorial-technical style, dial ENERGY 3 / RHYTHM 3 / MOTION 2.
- **Konsep:** "Signal & Structure". Portofolio sebagai peta sistem: section adalah node, garis spine menghubungkan alur, tipografi besar dan satu aksen sinyal.
- **Palette dark (default):**
  - Background `#0B0B0C`
  - Surface `#151517`
  - Text `#F2EFE9`
  - Muted `#9B9B9B`
  - Accent `#FF5C35` (signal orange)
- **Palette light:**
  - Background `#F4F1EA`
  - Surface `#FFFFFF`
  - Text `#111111`
  - Muted `#5C5C5C`
  - Accent `#C43A15` (shade lebih gelap untuk kontras teks)
- **Tipografi:**
  - Display: Bricolage Grotesque (variable)
  - Body: Instrument Sans (variable)
  - Mono/label: IBM Plex Mono
- **Motif:** spine vertikal + node markers; nomor indeks proyek; treatment duotone pada foto profil; cover proyek berupa ilustrasi sistem kustom.
- **Motion:** hero stagger, scroll reveal, spine draw, modal transition, hover lift. Tidak ada animasi template di semua elemen.
- **Dilarang:** em dash, gradient biru-ungu default, glassmorphism berlebihan, fake terminal, grid background tanpa alasan, ikon generik, klaim/testimoni/statistik palsu.

## 13. Tech Stack
| Layer | Pilihan |
|---|---|
| Build | Vite |
| Framework | Vue 3 (Composition API, JavaScript) |
| Styling | Tailwind CSS v4 |
| i18n | vue-i18n |
| Modal | Headless UI Vue Dialog |
| Utilities | @vueuse/core |
| Fonts | @fontsource-variable (self-hosted) |
| Deploy | Vercel |

Catatan: JavaScript dulu, bukan TypeScript, sesuai stack Anda. Bisa dinaikkan ke TS jika diinginkan.

## 14. QA Plan
- `npm run build` + `npm run preview`.
- Lighthouse: Performance ≥ 95, Accessibility 100, SEO 100.
- axe DevTools: 0 violations.
- Keyboard: Tab semua kontrol, modal focus trap, Escape.
- Responsive: 360, 390, 768, 1024, 1440 px; no horizontal overflow.
- Reduced motion: emulasi `prefers-reduced-motion: reduce`.
- Contrast: cek palette dengan `.opencode/skills/antislop-human/contrast-check.py`.
- Click-through: nav, modal, language toggle, theme toggle, external links, CV, mailto.
- Delivery Gate antislop: PASS/FAIL report dengan bukti.

## 15. Risiko & Mitigasi
| Risiko | Mitigasi |
|---|---|
| Bilingual menambah beban copy | Semua teks di `src/locales/id.json` dan `en.json`; satu sumber kebenaran |
| Tidak ada screenshot proyek | Cover ilustrasi sistem kustom, bukan placeholder palsu |
| SEO EN terbatas di SPA | Meta tags + default ID; hreflang di luar scope v1 |
| Modal tidak aksesibel | Headless UI Dialog + QA keyboard |
| Font memicu layout shift | Self-host, font-display swap, fallback metrik mirip |
| Flash theme/locale | Inline script theme + `v-cloak` untuk locale |

## 16. Milestone
1. PRD final (selesai).
2. DESIGN.md: arah visual, palette, tipografi, dial, motif, copy deck ID/EN.
3. Setup repo: Vite + Vue + Tailwind + i18n + font.
4. Implementasi section + modal + toggle.
5. Konten ID/EN + aset.
6. QA + Delivery Gate.
7. Deploy Vercel.
