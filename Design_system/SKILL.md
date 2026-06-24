---
name: sandboxvn-design
description: Use this skill to generate well-branded interfaces and assets for SandboxVN (Phần mềm quản trị tổng thể — a Vietnamese SME / ERP management platform), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `README.md` file within this skill, and explore the other available files. Key files:

- `README.md` — brand context, content fundamentals, visual foundations, iconography, index.
- `colors_and_type.css` — CSS variables (colors, type, spacing, radii, shadows, motion) + utility classes + component primitives. Import this at the top of any HTML artifact you build.
- `assets/logo-primary.png`, `assets/logo-white.png` — the SandBox lockup, color and reverse.
- `assets/modules/*.png` — 13 bespoke 3D module illustrations (Marketing, Sales, Storage, Buy, Account, Cash, Job, Customer, Employee, Report, Utilities, Setting, System). Use as-is — do not recolour, do not redraw.
- `assets/avatars/avatar-01.jpg` through `avatar-12.jpg` — portrait avatars for people fields, comments, profile chrome.
- `ui_kits/admin/` — full clickable React recreation of the SandboxVN admin shell (sidebar + topbar + workspace, with Dashboard and Customers screens). Use these JSX files as a reference for component anatomy.
- `preview/` — small preview cards for each design-system token (colors, type, spacing, components). Look here to see exactly how a token should render.

## Rules

1. **The product is Vietnamese-first.** Write UI copy in Vietnamese. Sentence case for headings. No emoji. No exclamation marks. Direct, neutral, business-formal tone. Required fields marked with red `*`.
2. **Always import `colors_and_type.css`** before writing any styles. Never invent new color hexes — pull from the token set.
3. **The brand gradient (#fd65af → #fe8377)** is reserved for primary CTAs, active tabs, the documentation header strap, and notification badges. Never use it for body or card backgrounds.
4. **Inter** is the only typeface. Loaded from Google Fonts via `colors_and_type.css`. Weights 400 / 500 / 600 / 700 / 800.
5. **Two icon systems coexist.** Phosphor (`@phosphor-icons/web` via CDN) for every UI affordance — load it with `<script src="https://unpkg.com/@phosphor-icons/web@2.1.1"></script>` and use `<i class="ph ph-<name>"></i>`. The 13 PNG module illustrations are for sidebar / feature splashes only — never mix them at small sizes.
6. **Layout primitives.** Cards: white, 5–8 px radius, hairline `#f0f0f0` border, no shadow by default. Buttons: 40 px tall, 8 px radius, 14 px Medium. Fields: 40 px tall, 8 px radius, hairline border, focus = pink border + pink ring. Status pills: 4 px radius, 12 px Medium.
7. **Don't ship the dashed purple borders** you see in the Figma file — those are documentation-only "this is a component zone" markers.
8. **No shadows on cards by default.** The system is flat. Reserve `shadow-popover` and `shadow-modal` for floating surfaces only.

## Output

If creating **visual artifacts** (slides, mocks, throwaway prototypes), copy assets out of `assets/` into your output folder and create static HTML files for the user to view. Reference `colors_and_type.css` with a relative path.

If working on **production code**, you can copy assets and read the rules here to become an expert in designing with this brand. Translate the CSS variables into your design-system framework of choice; keep the names (`fg-base`, `surface-canvas`, `brand-pink`, etc.) so the design vocabulary survives.

## If the user invokes this skill without other guidance

Ask them what they want to build — a single screen, a flow, a slide deck, a landing page, a feature spec mock. Ask a few clarifying questions about the audience and the surface (admin desktop ERP, reservation-website front-end, internal slide deck). Then act as an expert designer who outputs HTML artifacts or production code, depending on the need.
