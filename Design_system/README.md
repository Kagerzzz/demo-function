# SandboxVN Design System

> Design system for **SandboxVN** — a comprehensive Vietnamese SME (small-and-medium enterprise) management platform. _Phần mềm quản trị tổng thể._

The product is an all-in-one ERP/CRM suite covering Marketing, Sales, Storage, Purchase, Accounting, Cash, Jobs, Customers, Employees, Reports, Utilities, Settings, and System administration — plus a reservation-booking website (*Website đặt chỗ*) targeted at restaurant and service-business chains in Vietnam.

The visual identity is built around a **bold pink → coral gradient**, a soft "powder-blue" canvas, a typographic system in Inter, and a library of **3D-rendered claymation-style module icons** that give the otherwise-utilitarian admin UI a friendly, playful personality.

## Sources

| Source | Path |
|---|---|
| Figma file (virtual mount) | `designsystem.fig` → `/Page-1/` (12 frames: Color, Typography, System, Button, Field, Calendar, Icon-subnav, Icon, Icon-navi, Table, Status, People-demo) |
| Brand title in file | "SandboxVN Design system" |

No codebase or live URL was provided. Everything in this system was reconstructed from the Figma pseudocode + screenshots.

---

## Content fundamentals

**Language.** The product is **Vietnamese-first**. Every label, button, status, and microcopy in the source Figma is Vietnamese. English appears only in code-side identifiers (token names, component names) — never in user-facing copy. Always assume Vietnamese UI unless explicitly asked otherwise.

**Tone.** Direct, neutral, business-formal. No exclamation marks, no second-person addressing, no marketing slang. Microcopy is descriptive ("Thêm" / "Hủy" — Add / Cancel) rather than persuasive ("Add to your list now!"). Section headers describe an object, never a feeling: _Khách hàng_, _Báo cáo_, _Phòng ban_ — Customers, Reports, Department.

**Casing.** Vietnamese sentence case for headings (only the first word capitalised) — *Tạo nhân viên mới*, not *Tạo Nhân Viên Mới*. Proper nouns keep their natural capitalisation. **Avoid ALL CAPS** — it doesn't carry the diacritics well.

**Person.** No first or second person. The UI talks _about_ the object, not _to_ the user. "Tạo nhân viên mới" (Create new employee), never "Tạo nhân viên của bạn" (Create your employee).

**Required-field marker.** Red asterisk `*` (`#ff4b4b`) to the right of the label, separated by a small space: `Tài khoản *`. Never use the word "required."

**Emoji.** Never used in UI chrome. Personality comes from the 3D module illustrations, not emoji.

**Numbers & quantities.** Use Vietnamese formatting: `1.250.000` (period thousand-sep, comma decimal). Currency suffix `đ`. Pagination reads `1 - 10 of 250 items` and `10 / trang` (10 per page).

**Sample microcopy from the system.**

| Vietnamese | English (for non-VN readers) |
|---|---|
| `Phòng ban` | Department |
| `Tài khoản *` | Account (required) |
| `Sắp xếp theo` | Sort by |
| `Chọn giờ` | Pick a time |
| `Hôm nay` / `Hôm qua` | Today / Yesterday |
| `7 ngày trước` / `Tháng trước` | Last 7 days / Last month |
| `Thông báo hệ thống` | System notifications |
| `Website đặt chỗ` | Reservation website |
| `Chi nhánh Cầu Giấy` | Cầu Giấy Branch |
| `Admin đơn vị` | Unit Admin |
| `Tạo nhân viên mới` | Create new employee |
| `Thêm` / `Hủy` | Add / Cancel |
| `1 - 10 of 250 items` | (kept English in source file) |
| `10 / trang` | 10 per page |

The header strap inside every Figma frame reads "SandboxVN Design system" — that wording is the canonical product name. Use **SandboxVN** (one word, capital S, capital B, "VN" suffix) in body copy; the lockup logo writes it as **SandBox** with a small **VN** chip.

---

## Visual foundations

### Brand mark & gradient

The signature gradient is **pink → coral**, from `#fd65af` (top) to `#fe8377` (bottom):
- Used full-bleed on **page-header bars** (140px tall, with the white logo on the left and a 40px page title + 32px system label on the right).
- Used as the **fill of primary CTAs** (e.g. _Thêm_ / Add).
- Used as the **fill of active tabs** and active page-pills.
- Used as the **fill of unread notification badges** (the small `4` chip next to the bell).
- Never use it on body backgrounds, never on cards. Reserved for primary-action surfaces and the brand strap.

### Palette

| Group | Token | Hex |
|---|---|---|
| **Brand** | brand | linear-gradient `#fd65af → #fe8377` |
|  | brand-pink | `#fd65af` |
|  | brand-coral | `#fe8377` |
| **Text** | fg-base | `#3a3a4c` (deep slate-navy — primary text) |
|  | fg-secondary | `#9a9ab4` (cool grey — labels, captions, disabled) |
|  | fg-on-brand | `#ffffff` |
| **Stroke** | stroke-base | `#f0f0f0` |
|  | stroke-medium | `#dfdfdf` |
| **Surface** | surface-canvas | `#dce5ee` (powder blue — the "studio" background behind the white app shell) |
|  | surface-card | `#ffffff` |
|  | surface-muted | `#f8f8f8` |
|  | surface-table-header | `#f1f2f3` |
|  | surface-highlight | `#e8eff6` |
|  | surface-pink | `#ffedf6` |
| **Positive accents** | purple | `#ad56f4` on `#e6e5ff` |
|  | blue-2 (teal) | `#00aed0` on `#ddfbfb` |
|  | blear (cyan) | `#16c3c3` on `#ddfbfb` |
|  | blue | `#0069e1` on `#e7f5ff` |
|  | green | `#068b00` on `#e6ffea` |
|  | dark-purple | `#b20089` on `#ffe1f8` |
| **Negative accents** | red | `#ff4b4b` on `#ffefef` |
|  | yellow | `#cc9900` on `#fef7e4` |
|  | orange | linear `#fe9129 → #f04c04` on `#ffe0ca` |

**Color vibe of imagery.** The avatar photos are warm — warm skin tones on warm pink/peach/terracotta studio backdrops. The module illustrations are saturated 3D claymation with soft pink highlights. No b&w. No grain. No filters. Backgrounds in product are flat / cool blue-grey to let the warm imagery pop.

### Typography

The only typeface in the entire system is **Inter** (Regular 400, Medium 500, Semi Bold 600, Bold 700, Extra Bold 800). All line-heights are `100%` — Figma sets them tight; we relax to `1.2` for paragraph text in HTML but keep `1` for headings & UI.

| Token | Size | Weight | Use |
|---|---|---|---|
| `--font-display` | 36 px / 800 | Extra Bold | Page hero ("Lorem ipsum" sample) |
| `--font-page` | 24 px / 500 | Medium | Page section titles |
| `--font-h-section` | 32 px / 700 | Bold | Group headings on guideline pages |
| `--font-large-strong` | 18 px / 700 | Bold | Card titles |
| `--font-large` | 18 px / 400 | Regular | Sub-headers |
| `--font-base-strong` | 14 px / 700 | Bold | Strong inline |
| `--font-base-medium` | 14 px / 500 | Medium | Default UI text (nav, buttons, labels) |
| `--font-base` | 14 px / 400 | Regular | Body |
| `--font-small-medium` | 12 px / 500 | Medium | Captions, chips, table cells |
| `--font-small` | 12 px / 400 | Regular | Meta |
| `--font-xsmall` | 10 px / 400 | Regular | Counter badges |
| `--font-tiny` | 8 px / 400 | Regular | Edge cases |

Letter-spacing: ~`0.005em` (5/1000 em) on body sizes — barely perceptible.

### Spacing & layout

- **Grid unit:** 4 px. Every gap, padding, and offset in the source aligns to multiples of 4.
- **Frame padding:** content sits inside a `420 px` guideline-rail on the left + a `40 px / 100 px` padding on the right.
- **Card padding:** `40 px` top/bottom, `100 px` left/right on full guideline frames; `20 px` on inner cards; `16 px` inside row cells.
- **Component padding:** Buttons `0 12 px` × `12 px` gap-icon; Fields `4 12 px`; Status chips `6 16 px`.

### Border radii

- `2 px` — outer document frames (very subtle)
- `4 px` — chips, pill tags inside fields, status pills
- `5 px` — _container_ radius for dashed-bordered demo boxes
- `8 px` — buttons, input fields, sidebar module tiles
- `20 px` — avatar containers (effectively full-circle on 40 px avatars)
- `40 / 41 px` — pagination pills, full-pill counter badges
- `99 px` — small remove-x dots
- Border radius is **never** mixed inconsistently inside one component; a card and its buttons can use different radii (8 vs 5) and that's intentional.

### Borders

Single-pixel borders only. Two stroke colors: `#f0f0f0` (light) and `#dfdfdf` (medium). The system also uses **dashed purple `1 px dashed #8a38f5`** as a documentation-only border to demarcate component zones in the design file — **do not ship that to real UI**. Real product cards are bordered with `stroke-base` or have no border and a subtle shadow.

### Shadows

The Figma file is largely flat — only one shadow style appears, used sparingly on popovers/menus. Use:

```
shadow-card:   0 1px 2px rgba(58, 58, 76, 0.06)
shadow-popover: 0 8px 24px rgba(58, 58, 76, 0.12)
shadow-modal:  0 16px 48px rgba(58, 58, 76, 0.18)
```

No inner shadows. No coloured glows. No neumorphism.

### Backgrounds

- **App canvas:** `#dce5ee` (powder blue). Flat. No texture, no gradient, no pattern.
- **Card / panel:** flat white.
- **Brand strap:** the only gradient surface.
- No hand-drawn illustrations, no repeating patterns, no large photographic hero backgrounds anywhere in product chrome. Photography lives only inside avatar circles and product-detail cells.
- No noise / no grain.

### Animation & interactions

The Figma file documents states but not transitions; treat all motion as a thin layer on top of an otherwise static UI.

- **Easing:** `cubic-bezier(0.2, 0, 0, 1)` (standard "easeOut") for everything UI.
- **Duration:** 120 ms for hover-color changes, 180 ms for press / size changes, 240 ms for popover open, 320 ms for modal open.
- **Hover state:** brand-gradient buttons darken ~5% via `filter: brightness(0.96)`; ghost buttons get the `surface-pink` background; sidebar tiles get a `surface-highlight` background.
- **Press state:** buttons shrink to `scale(0.98)`; never invert color. Press never changes the underlying color, only the brightness/scale.
- **Focus:** 2 px outer ring in `brand-pink` at 40% opacity, offset 2 px. Form fields swap their border to `brand-pink` solid.
- **No bounces. No spring. No floating elements. No parallax.** This is utility software.

### Cards

A "card" in SandboxVN is a **flat white rectangle with a 1 px hairline border** (`#f0f0f0`) — usually no shadow, no radius beyond 5–8 px, no header strip. Sections inside a card are separated by hairlines, not by gaps + shadows. The few card patterns are:

- **Guideline card** — white, 5 px radius, hairline border; used for documentation panels.
- **Sidebar module tile** — 100 × 77 px, 8 px radius, transparent off-state with a coloured 3D illustration centred over a small label. Active state swaps to a `surface-pink` background.
- **Popover / dropdown** — white, 5 px radius, `shadow-popover`, no border.

### Transparency & blur

Almost no transparency. The Figma's only transparent surface is the 10%-white border applied to the outermost dark `#444` design-file backdrops (a documentation device — don't ship). Real UI is fully opaque. No backdrop blur anywhere.

### Layout rules

- **Top nav:** 50 px tall, white, bottom hairline `#f0f0f0`. Holds the hamburger left, then notification, reservation-site link, branch picker, profile chip — pushed right.
- **Left sidebar:** 120 px wide, white, full-height; contains a 65 px logo block then a column of 14 module tiles separated by 1 px `#dfdfdf` rules. Each tile is centred icon + 12 px label.
- **Page-header strap:** **only on documentation pages**, not on actual product screens. In product, the title sits inline at the top of the workspace area.
- **Main work area:** light powder-blue (`#dce5ee`) gutters with content panels stacked vertically.

### Iconography motifs

Two parallel icon systems live in this design system. They are **not** interchangeable:

1. **Phosphor Icons** (`phosphor-icons`) — the line-icon set used for every interaction icon (carets, X, pencil, bell, plus, search, etc.). The Figma frame literally says "Icon from phospho icon." Stroke weight is **Regular** (`1.5 px` stroke at 20 px viewbox). Always monochrome — `#3a3a4c` for primary, `#9a9ab4` for secondary/disabled, `#ffffff` on brand-gradient surfaces.
2. **3D module illustrations** — soft, saturated 3D-claymation renders used only in the **left sidebar** to identify modules (megaphone for Marketing, factory for Sales, etc.) and as oversized "feature graphics" inside empty states or feature splashes. These are PNGs at ~26 × 26 in chrome and up to ~120 × 120 as feature art.

See `ICONOGRAPHY` below for the full breakdown.

---

## Iconography

### Phosphor (line system)

- **Library:** [Phosphor Icons](https://phosphoricons.com) — the entire `Regular` weight family.
- **Loading:** Use the official CDN `<script src="https://unpkg.com/@phosphor-icons/web"></script>` and reference via `<i class="ph ph-magnifying-glass"></i>`. We rely on this CDN rather than bundling icons because Phosphor ships ~1,500 glyphs and the design file pulls from across the entire library (arrows, brand logos, commerce, math&finance, office, security, etc.).
- **Sizing:** `16 px` inside small chips, `20 px` inside buttons & sidebar items, `24 px` inside the top nav.
- **Color:** always `currentColor`; let parent set `color: var(--fg-base)` etc.
- **Categories present:** Arrows/*, Math&finance/*, Office&editing/*, Brand/*, Commerce/*, Security/*, People/*, Time/*, Development/* — i.e. the full Phosphor taxonomy.

### 3D module illustrations

The colourful 3D renders are the brand's distinctive visual signature. They sit on the sidebar tiles and inside feature splash panels.

- **Source:** PNG, transparent background, 1:1 aspect.
- **Stored in:** `assets/modules/*.png`.
- **Don't recolour them.** Each illustration is bespoke; do not apply CSS filters / masks.
- **Don't redraw them as SVG.** Always copy the PNG.
- **Don't pair multiple at small sizes** — they're individually saturated and become noisy in clusters. Use sparingly as identifiers.

### Avatars

- **Source:** AI-rendered portrait photography (warm tones, peach studio backdrops).
- **Stored in:** `assets/avatars/avatar-*.jpg`.
- 40 × 40 circle in nav, 32 × 32 in tables, 24 × 24 in compact field chips, 20 × 20 in inline mentions.

### Emoji & unicode

Not used. Personality comes from the 3D module renders. The only "icon-like" unicode glyph in the source is the asterisk `*` for required-field markers.

### Logos

- `assets/logo-primary.png` — full lock-up: rainbow gradient "**SandBox**" wordmark + orange-coral frame + small "SME management software" caption. Use on white backgrounds.
- `assets/logo-white.png` — solid-white version of the lock-up. Use on the pink/coral brand strap and other dark/coloured backgrounds.

---

## Index

```
README.md                  # this file
SKILL.md                   # SKILL frontmatter for Claude Code agents
colors_and_type.css        # CSS variables + base type styles + utility classes
preview/                   # design-system preview cards (registered for the Design System tab)
assets/
  logo-primary.png         # full SandBox lockup (color, on light)
  logo-white.png           # white lockup (on brand gradient / dark)
  photo-sample.jpg         # sample portrait photo (warm peach studio)
  avatar-sample.jpg        # alias of avatar-12 used in early frames
  modules/*.png            # 13 3D module illustrations (Marketing, Sales, Storage, …)
  avatars/avatar-*.jpg     # 12 portrait avatars (warm peach studio)
fonts/                     # (Inter is loaded from Google Fonts via CDN — see colors_and_type.css)
ui_kits/
  admin/                   # full SandboxVN ERP shell (sidebar + topbar + workspace)
slides/                    # (not present — no slide template was provided)
```
