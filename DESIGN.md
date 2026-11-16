# DESIGN.md: Has Adhi Rian Portfolio

**Design Read:** developer portfolio for recruiters and hiring managers, bold/experimental editorial-technical style.
**Dial:** ENERGY 3 / RHYTHM 3 / MOTION 2.

## Concept: Signal & Structure
The portfolio is a system map, not a template landing page. Sections are nodes in a flow. A spine line connects the narrative. The visual language combines editorial typography with technical diagram cues. The concept reflects the owner's positioning: business process analysis translated into working software.

## Palette
Verified with the antislop contrast checker.

### Dark (default)
| Token | Value | Use |
|---|---|---|
| `--bg` | `#0B0B0C` | Page background |
| `--surface` | `#151517` | Cards, modal |
| `--surface-2` | `#1E1E21` | Raised rows, tags |
| `--text` | `#F2EFE9` | Body and headings |
| `--muted` | `#9B9B9B` | Secondary text |
| `--line` | `#2A2A2E` | Borders, dividers |
| `--accent` | `#FF5C35` | Key moments only |
| `--accent-ink` | `#0B0B0C` | Text on accent |

### Light
| Token | Value | Use |
|---|---|---|
| `--bg` | `#F4F1EA` | Page background |
| `--surface` | `#FFFFFF` | Cards, modal |
| `--surface-2` | `#EAE6DD` | Raised rows, tags |
| `--text` | `#111111` | Body and headings |
| `--muted` | `#5C5C5C` | Secondary text |
| `--line` | `#D4CEC2` | Borders, dividers |
| `--accent` | `#C43A15` | Key moments only |
| `--accent-ink` | `#FFFFFF` | Text on accent |

**Reason:** one warm signal accent against a neutral editorial base. The accent marks the focal action, active state, and section index only. It is not spread across every tag, card, or icon.

## Typography
| Role | Family | Reason |
|---|---|---|
| Display | Bricolage Grotesque Variable | Expressive, variable, editorial character without the default Inter or Space Grotesk look |
| Body | Instrument Sans Variable | Highly readable at long and short lengths, quiet enough to let the display type lead |
| Label / mono | IBM Plex Mono | Technical documentation voice that matches the system-map concept |

**Scale:** fluid `clamp()` for display sizes. Body stays at 16px minimum, 18px on large screens. Line length capped at 68ch.

## Layout
- 12-column editorial grid on desktop, single column on mobile, two states in between.
- Container: `max-width: 1400px`, mobile padding 20px, desktop 48px.
- Section padding: 64px mobile, 112px tablet, 160px desktop. Varied by section importance, not uniform.
- Spine rail: fixed left rail on `lg`, with numbered section markers and a scroll progress fill. On mobile, a thin top progress line replaces it.
- Asymmetry: hero splits 7/5, projects alternate 5/7 and 7/5, contact is a full-width statement.
- Radius scale: 2px tags, 4px buttons, 8px modal. No pill-shaped defaults.
- Shadow: modal only, as an elevation marker. Cards sit flat with a border.

## Identity Motif
- **Spine + nodes:** a single vertical line with section nodes. It is wayfinding and the visual signature.
- **Project index numbers:** large mono numerals (`01` to `04`) anchor each project.
- **System covers:** each project gets a custom SVG composition based on its function:
  - Dawn Six: broadcast nodes and waves.
  - SPK: weighted decision matrix.
  - Coffee exporter: origin and route lines.
  - HarmasenTech: modular web blocks.
- **Portrait treatment:** duotone with the accent, plus a subtle halftone overlay. The treatment unifies the photo with the palette.

## Motion
MOTION 2 means purposeful transitions, not wallpaper.
- Hero lines reveal in a short stagger on load.
- Section headers and key blocks reveal on scroll with a small translate and opacity change.
- Spine progress fills with scroll.
- Project cards lift slightly on hover and show a visible active state.
- Modal opens with a short scale and fade.
- All non-essential motion is disabled under `prefers-reduced-motion: reduce`.
- No endless pulses, floating elements, or template fade-ups on every element.

## Components
- **Navbar:** solid background, 1px bottom border, compact height. Wordmark left, anchors center, toggles right. Mobile: labeled "Menu" button opens a full-screen panel.
- **Buttons:** rectangular with 4px radius. Primary uses accent fill, secondary uses border and text. No arrows by default.
- **Tags:** 2px radius, border, no fill. Accent is not used on every tag.
- **Project cards:** flat surface, 1px border, index numeral, title, role, stack, one-line context, and a real "Lihat detail" button. The button stretches over the card as a hit area.
- **Modal:** Headless UI Dialog, solid surface, max-width 900px, full-screen on mobile. Close button has a visible label and icon. Focus trap and Escape are native to the component.
- **Timeline:** spine line on the left, year/period in mono, role and company in display/body, bullets below.
- **Contact:** oversized email link, social links with icon and text, CV download.

## Copy Rules
- No em dash. Use commas, colons, periods, or parentheses.
- No AI marketing buzzwords.
- No invented statistics, testimonials, clients, or project years.
- CTAs are specific: "Lihat Proyek", "Unduh CV", "Minta Demo", "Buka Situs Live".
- Indonesian is the default voice. English is a natural translation, not a word-for-word conversion.

## Deliberate Anti-Slop Choices
- No blue-purple gradient, glow, or glassmorphism.
- No background grid. The spine and node motif is structural, not decorative texture.
- No fake terminal window. The technical voice comes from typography and diagrams.
- No Lucide icon set. Icons are custom SVG or omitted.
- No "Trusted By" bar, fake statistics, or testimonials.
- No bento grid, 3-step "How It Works", or 3-tier pricing.
- No skeleton screenshot used as a product shot. Project covers are honest illustrations.
- No dark mode by default without a reason: the dark stage makes the accent and portrait treatment the focal point, and a working light theme is shipped.

## Accessibility
- All text pairings pass WCAG AA, verified with the contrast checker.
- Focus indicator: 2px accent outline with 2px offset, visible in both themes.
- Every control is keyboard reachable. Modal and mobile menu trap focus, close on Escape, and return focus.
- Tap targets are at least 44x44px.
- `html lang` updates with the language toggle.
- Images have `alt`. Decorative SVG has `aria-hidden="true"`.
- Motion respects `prefers-reduced-motion`.
- Skip link to main content.
