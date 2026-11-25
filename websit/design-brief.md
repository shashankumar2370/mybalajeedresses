# Design Brief: BALAJEE DRESSES (School & Family Apparel)

A comprehensive design specification establishing the visual identity, typography, spacing system, component styling, and responsive foundation to convey dependability, warmth, and institutional trust to parents and families.

---

## 1. Colour Palette

| Role | Name | Hex Code | Visual Application |
| :--- | :--- | :--- | :--- |
| **Primary** | Oxford Navy | `#1B365D` | Headers, primary buttons, brand accents, and active states |
| **Accent** | Warm Honey Gold | `#E5A93C` | Badges, highlight tags, secondary CTAs, and star ratings |
| **Dark Text** | Slate Charcoal | `#1F2937` | Headings, body copy, and high-contrast labels |
| **Neutral 1** | Pure Off-White | `#F9FAFB` | Main page canvas and clean section backgrounds |
| **Neutral 2** | Soft Platinum | `#E5E7EB` | Card borders, form outlines, dividers, and subtle surface fills |

> **Palette Rationale:**  
> This palette pairs authoritative Oxford Navy with warm Honey Gold against crisp neutrals to project academic dependability, institutional trust, and a welcoming atmosphere for parents.

---

## 2. Type Scale

- **Heading Font:** `Outfit` (Google Font) — geometric, approachable, and crisp.
- **Body Font:** `Plus Jakarta Sans` (Google Font) — clean, highly legible, and modern.

| Element | Desktop Size | Mobile Size | Weight | Line Height | Letter Spacing |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **h1** | `2.5rem` (40px) | `2.0rem` (32px) | 700 (Bold) | 1.2 | -0.5px |
| **h2** | `1.875rem` (30px) | `1.5rem` (24px) | 700 (Bold) | 1.25 | -0.3px |
| **h3** | `1.375rem` (22px) | `1.25rem` (20px) | 600 (Semi-Bold) | 1.3 | 0px |
| **Body** | `1.0rem` (16px) | `0.9375rem` (15px) | 400 / 500 (Regular/Medium) | 1.6 | 0px |
| **Small** | `0.875rem` (14px) | `0.8125rem` (13px) | 500 / 600 (Medium/Semi-Bold) | 1.5 | +0.2px |

---

## 3. Spacing Scale

Built upon a consistent 8-point / 4-point harmonic layout grid:

| Token | Size (rem / px) | Recommended Usage |
| :--- | :--- | :--- |
| **`space-2xs`** | `0.25rem` (4px) | Badge interior padding, icon micro-spacing |
| **`space-xs`** | `0.5rem` (8px) | Compact button vertical padding, label margins |
| **`space-sm`** | `0.75rem` (12px) | Form input internal padding, subtitle bottom margin |
| **`space-md`** | `1.0rem` (16px) | Standard container padding on mobile, card body spacing |
| **`space-lg`** | `1.5rem` (24px) | Card internal padding, grid column gaps |
| **`space-xl`** | `2.0rem` (32px) | Subsection separation, desktop grid gaps |
| **`space-2xl`** | `3.0rem` (48px) | Inter-block spacing, section header bottom margins |
| **`space-3xl`** | `4.0rem` (64px) | Vertical padding for standard sections |
| **`space-4xl`** | `5.0rem` (80px) | Vertical padding for hero and major banner sections |

---

## 4. Component Styles

### A. Buttons
- **Primary Action:** Solid Oxford Navy (`#1B365D`) fill with crisp white text, `8px` rounded corners, bold typography, and a subtle drop shadow. On hover, the button elevates `2px` with a slightly deepened shade and expanded glow shadow.
- **Accent / WhatsApp CTA:** High-contrast Emerald Green (`#25D366`) or Warm Honey Gold (`#E5A93C`) fill with an integrated left-aligned icon, medium radius, and smooth hover zoom transition.
- **Outline / Ghost:** Transparent background enclosed by a `1.5px` border in the primary navy or accent color, transitioning to a solid fill on mouse hover.
- **Touch Target:** Minimum height of `48px` across mobile devices to ensure effortless thumb interaction.

### B. Cards
- **Structure:** Clean white background (`#FFFFFF`) with `12px` rounded corners, framed by a delicate `1px` soft platinum border (`#E5E7EB`).
- **Elevation:** Subtle ambient shadow (`0 4px 16px rgba(0, 0, 0, 0.05)`) at rest, transitioning smoothly to a deeper elevation (`0 10px 24px rgba(0, 0, 0, 0.1)`) with a `4px` upward lift on hover.
- **Layout:** Featured image at the top with a category badge overlay, followed by generous internal padding (`24px`), bold title, concise description, and an anchored bottom CTA button.

### C. Form Fields
- **Input Geometry:** Generous `48px` height with `8px` border radius, padded with `12px 16px` internal spacing.
- **Visual State:** Light neutral background (`#F9FAFB`) with a `1.5px` soft platinum border (`#E5E7EB`) at rest.
- **Focus State:** Background turns pure white (`#FFFFFF`) with the border transitioning to Oxford Navy (`#1B365D`) accompanied by a subtle `3px` focus ring (`rgba(27, 54, 93, 0.15)`).
- **Labels & Validation:** Clear, dark charcoal labels above each field with helpful inline validation states (red for required/invalid, green for verified).

---

## 5. Mobile-First Breakpoints

| Breakpoint Name | Min-Width | Target Devices | Layout Behavior |
| :--- | :--- | :--- | :--- |
| **Base (Mobile)** | `< 576px` | Smartphones (portrait) | Single-column fluid stack, hamburger menu, sticky bottom conversion bar |
| **`sm` (Large Mobile)** | `576px` | Phablets & landscape phones | 2-column category grids, expanded button widths |
| **`md` (Tablet)** | `768px` | iPads & Android tablets | 2-to-3 column grids, horizontal CTA groupings, expanded typography |
| **`lg` (Desktop)** | `992px` | Laptops & standard screens | Full horizontal navigation bar, multi-column feature showcases |
| **`xl` (Wide Desktop)** | `1200px` | Large desktop monitors | Max-width content container (`1240px`) with centered layout margins |
