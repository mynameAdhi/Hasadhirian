# Portofolio Has Adhi Rian

Website portofolio bilingual untuk Has Adhi Rian, fullstack developer. Satu halaman dengan modal detail proyek, tema gelap dan terang, serta toggle Bahasa Indonesia dan English.

## Stack

- Vite 8
- Vue 3, Composition API, JavaScript
- Tailwind CSS v4
- Locale lookup internal di `src/i18n.js` dengan `id.json` dan `en.json`
- Headless UI Vue untuk modal dan menu mobile
- Font self-hosted: Bricolage Grotesque, Instrument Sans, IBM Plex Mono

## Menjalankan

```bash
npm install
npm run dev
```

Build produksi:

```bash
npm run build
npm run preview
```

`npm run build` merender HTML awal lewat SSR, menyuntikkannya ke `dist/index.html`, dan menginline CSS. Browser lalu melakukan hidrasi Vue, jadi konten sudah terlihat sebelum JavaScript selesai dimuat. Font memakai fallback dengan metrik yang disesuaikan agar teks tidak bergeser saat font selesai dimuat.

## Struktur

```text
src/
  components/     Section, modal, toggle, cover proyek
  composables/    Tema, locale, reveal, active section, scroll progress
  data/           Link, metadata proyek, skill, pengalaman
  locales/        id.json dan en.json
  styles/         Token, layout, section, komponen, kontak
  App.vue
  entry-client.js
  entry-server.js
  i18n.js
scripts/
  prerender.js
public/
  cv/             File CV
  images/         Foto profil
  favicon.svg
  og-image.png
  robots.txt
```

## Mengubah Konten

- Semua teks yang terlihat ada di `src/locales/id.json` dan `src/locales/en.json`. Jaga struktur key tetap sama di kedua file.
- Link, metadata proyek, daftar skill, dan metadata pengalaman ada di `src/data/content.js`.
- Untuk menambah proyek, tambahkan id ke `projectOrder`, metadata ke `projectMeta`, lalu isi `projects.items` di kedua locale.
- Cover proyek adalah ilustrasi SVG di `src/components/ProjectCover.vue`, bukan screenshot. Jangan menggantinya dengan screenshot palsu.

## Aset yang Harus Diganti Sebelum Deploy

1. `public/images/profile.jpg`: foto profil asli, rasio 4:5.
2. `public/cv/has-adhi-rian-cv.pdf`: CV asli.
3. `public/og-image.png`: gambar Open Graph.
4. Setelah punya domain, ubah `og:image` dan `twitter:image` di `index.html` menjadi URL absolut.
5. Setelah mengganti foto dan CV, perbarui teks placeholder di kedua file locale dan hapus `contact.cvNote`.

File placeholder saat ini diberi label jelas agar tidak dikira aset final.

## Deploy ke Vercel

1. Push repositori ke GitHub.
2. Import repositori di Vercel.
3. Framework preset: Vite.
4. Build command: `npm run build`.
5. Output directory: `dist`.

Tidak ada environment variable yang dibutuhkan.

## Aksesibilitas

- Modal memakai Headless UI Dialog: focus trap, Escape, dan pengembalian fokus.
- Menu mobile memakai Dialog yang sama.
- Skip link menuju konten utama.
- Fokus terlihat di kedua tema.
- Animasi mengikuti `prefers-reduced-motion`.
- Kontras palette sudah dicek dengan aturan WCAG AA.

## Dokumen

- `PRD.md`: kebutuhan produk, konten, dan rencana QA.
- `DESIGN.md`: arah visual, palette, tipografi, dan aturan komponen.
