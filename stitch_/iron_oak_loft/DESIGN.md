# Design System Specification: Industrial Elegance & Biophilic Structure

## 1. Overview & Creative North Star: "The Modern Artisan"
This design system rejects the sterile, "out-of-the-box" SaaS aesthetic in favor of a bespoke, editorial experience tailored for a premium Business Park. The Creative North Star is **"The Modern Artisan"**—a philosophy that balances the raw, structural honesty of industrial design (charcoal, brick) with the warmth of natural materials (oak) and the precision of high-end architectural drafting.

Instead of a rigid, boxed-in grid, we utilize **intentional asymmetry** and **tonal layering**. Elements should feel like they are placed on a curator's desk: some overlapping, some floating with generous breathing room, and all connected through a sophisticated hierarchy of light and texture rather than crude lines.

---

## 2. Colors & Materiality
The palette is grounded in the tactile reality of a renovated loft. We move beyond flat hex codes to treat color as "material."

### Color Roles
- **Primary (`#16342d`):** Deep Forest Green. Used for high-intent actions and "Eco-Friendly" touchpoints. It represents growth and sustainability.
- **Secondary (`#7c5730`):** Warm Oak. Use this for interactive elements that require a "human" or "crafted" touch.
- **Tertiary (`#5c150b`):** Aged Brick. A sophisticated accent for status or highlighting heritage features of the park.
- **Neutral/Surface:** A range from `surface-container-lowest` (`#ffffff`) to `on-surface` (`#1b1c1c`), mimicking light hitting different textures of concrete and plaster.

### Visual Rules
*   **The "No-Line" Rule:** 1px solid borders are strictly prohibited for sectioning. Define boundaries through background shifts—e.g., a `surface-container-low` section sitting directly on a `surface` background.
*   **Surface Hierarchy & Nesting:** Treat the UI as physical layers. An inner card should be `surface-container-lowest` to "pop" against a `surface-container-low` page section.
*   **The "Glass & Gradient" Rule:** For floating navigation or gaming modals, use Glassmorphism. Apply `surface` colors at 80% opacity with a `20px` backdrop-blur. 
*   **Signature Textures:** Use subtle linear gradients from `primary` to `primary-container` on major CTAs to simulate the depth of forest foliage.

---

## 3. Typography: Editorial Sophistication
We pair the historical authority of a serif with the functional clarity of a modern sans-serif.

*   **Headings (Newsreader):** A sophisticated serif that mirrors high-end architectural journals. Use `display-lg` for hero statements to establish an immediate "LOFT" vibe.
*   **Body & UI (Manrope):** A clean, geometric sans-serif. It provides the industrial "blueprint" feel—highly legible and modern.
*   **Hierarchy as Identity:** Use extreme scale contrast. A `display-md` headline paired with a `label-sm` metadata tag creates an editorial look that feels designed, not just "inputted."

---

## 4. Elevation & Depth: Tonal Layering
Depth in this system is organic, not synthetic. We avoid the "heavy shadow" look of early Material Design.

*   **The Layering Principle:** Achieve lift by stacking surface tiers. A `surface-container-highest` element should only exist inside a `surface-container` parent to indicate a "pressed" or "elevated" functional area.
*   **Ambient Shadows:** When a float is required (e.g., a primary booking card), use a diffused shadow: `box-shadow: 0 12px 40px rgba(27, 28, 28, 0.06)`. The shadow must be a tinted version of `on-surface`, never pure black.
*   **The "Ghost Border" Fallback:** If a container needs definition on a complex background, use `outline-variant` at 15% opacity. It should be felt, not seen.

---

## 5. Components

### Buttons
- **Primary:** Forest Green (`primary`). Use `xl` (0.75rem) roundedness. No border. Text is `on-primary`.
- **Secondary:** Warm Oak (`secondary`). Transparent background with a `ghost border` and `on-surface` text.
- **Gaming Accent:** Only in the gaming section, use a 1px `tertiary` (Brick) glow effect (`box-shadow: 0 0 10px #5c150b`) to mimic neon.

### High-Quality Cards
- **Structure:** No dividers. Use `spacing-6` (2rem) of internal padding.
- **Visuals:** Use `surface-container-low` backgrounds. On hover, shift to `surface-container-lowest` and apply an ambient shadow.

### Interactive Calendars
- **Logic:** Days are mapped to a clean grid using `Manrope`. 
- **Active State:** Use a soft `primary-fixed` circle behind the date.
- **Aesthetic:** The calendar should feel like a minimalist wall planner, using white space (`spacing-3`) instead of grid lines to separate days.

### Form Fields
- **Input:** `surface-container-high` background with a bottom-only `outline` at 20% opacity. 
- **Focus:** The bottom border transitions to `primary` (Forest Green) and thickens to 2px.

### Lists & Navigation
- **Rule:** Forbid divider lines. Use `spacing-4` to separate list items. Use a `surface-variant` background on hover to indicate interactivity.

---

## 6. Do's and Don'ts

### Do
*   **Do** use asymmetrical layouts. Let an image bleed off the edge of the grid while text stays centered.
*   **Do** lean into "Eco-Friendly" through whitespace. If a section feels crowded, double the spacing value.
*   **Do** use the `secondary` (Oak) tone for elements the user touches most, like sliders or toggle handles.

### Don't
*   **Don't** use 100% black. Always use `on-surface` (`#1b1c1c`) for text to maintain the charcoal industrial feel.
*   **Don't** use sharp 90-degree corners. Even in an industrial system, the `DEFAULT` (0.25rem) radius makes the space feel inhabited and premium.
*   **Don't** use standard "blue" for links. Use `primary` or `secondary` to maintain the earthy, loft-inspired palette.

---

## 7. Spacing & Rhythm
The system uses a 0.35rem base unit. To achieve the "Premium" feel, always favor the larger end of the scale (`spacing-12` to `spacing-24`) for section vertical margins. This mimics the high ceilings and open floor plans of a luxury business park.