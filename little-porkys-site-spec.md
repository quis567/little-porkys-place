# Portfolio Site 7 — Little Porky's Place (Food Truck / BBQ Catering)

## Overview
A single-page website for **Little Porky's Place**, a BBQ food truck offering catering, parties, and special events. Built in plain HTML/CSS/JS (no frameworks). This is a portfolio piece for TruePath Studios.

The reference template is [websitedemos.net/food-truck-04](https://websitedemos.net/food-truck-04/?customize=template) — use its general layout and flow as a starting point but execute it at a significantly higher level with better design, animations, and a unique feature.

The aesthetic is **smoky, bold, and rustic-premium** — dark backgrounds, warm BBQ tones (amber, smoke, char), western/rustic typography, and a fun personality driven by the Little Porky mascot character.

---

## Assets Provided
- **Food truck hero image:** A high-quality AI-enhanced photo of the Little Porky's Place trailer at a 3/4 angle, twilight setting, dramatic lighting. The background will be removed (transparent PNG) before handoff.
- **Branding from the truck:** The truck features a cartoon pig mascot in a chef hat, western-style typography, and the services listed: BBQ's, Parties, Catering, Special Events
- **Website:** littleporkiesplace.com
- **Phone:** 631.667.3976

---

## The Signature Feature: Smoke & Sizzle Parallax

Every TruePath portfolio site has one standout interactive feature. For this site:

### Animated Smoke Effect
- A **CSS/JS animated smoke effect** that rises from behind the food truck in the hero section
- The smoke is built using multiple semi-transparent, blurred, white/gray `<div>` elements (or SVG shapes) that float upward with randomized drift, opacity fade, and scale
- The smoke should feel organic — varying speeds, sizes, opacity levels, and slight horizontal drift
- Use `@keyframes` with randomized `animation-delay` and `animation-duration` on each smoke particle for natural variation
- The smoke rises from the bottom/back of the food truck image, creating the illusion that the smoker is running
- On scroll, the smoke should parallax slightly (move slower than the page) for depth
- Keep it performant — use `transform` and `opacity` only, limit to ~10-15 particles max

### Sizzle Interaction
- When the user hovers over (desktop) or taps (mobile) the food truck image, a brief burst of extra smoke puffs out and a subtle sizzle sound effect plays (optional — include an audio file reference but make it toggleable)
- Add a very subtle orange/amber glow behind the truck on hover, like the fire is flaring up

---

## Site Structure (Single Page)

### Header / Nav
- **Centered logo** at top — the Little Porky's pig mascot with "LITTLE PORKY'S PLACE" text
- Nav links below or flanking the logo: Home, Menu, Find Us, About, Contact
- On mobile: hamburger menu
- Sticky on scroll — shrinks down with a dark smoky background + backdrop blur
- Style: dark background (#1A1210 range), cream/white text, subtle amber accents

### Hero Section
- Full-viewport height, dark smoky background gradient (near-black at top fading to dark brown)
- Large ghost text in the background (like the template's "food truck" watermark): "BBQ" or "LITTLE PORKY'S" in massive faded letters
- **The food truck image** (transparent PNG) prominently displayed, slightly right of center — similar positioning to the template
- Left side: headline text
  - Small label: "WELCOME TO"
  - Large headline: **"Little Porky's Place"** in a bold western/rustic font
  - Subtext: "Slow-smoked BBQ that comes to you. Catering, parties, and events."
  - CTA button: "See Our Menu" (amber/gold button)
- **Smoke animation rising from behind the truck** (the signature feature)
- A subtle "SCROLL" indicator at the bottom with a small animated arrow

### Daily Specials / Featured Items Section
- Horizontal scrolling row of 4 featured menu items (similar to the template's specials row)
- Each item: circular or rounded photo placeholder, item name, price, short description
- Cards float on a slightly lighter dark background
- On hover: card lifts with a warm glow shadow
- Section title: "Pit Favorites" or "Off the Smoker"
- Example items: Pulled Pork Sandwich $12, Brisket Plate $16, Smoked Wings $10, Porky's Sampler $22

### Full Menu Section
- Section title: "Our Menu"
- Organized by category with tab-style filters or stacked sections:
  - **Sandwiches** (Pulled Pork, Brisket, Smoked Chicken, The Porky Deluxe)
  - **Plates** (comes with 2 sides — Brisket Plate, Rib Plate, Combo Plate)
  - **Sides** (Mac & Cheese, Coleslaw, Cornbread, Baked Beans, Collard Greens)
  - **Drinks** (Sweet Tea, Lemonade, Craft Sodas)
- Each menu item: photo placeholder (rounded rectangle), name, short description, price
- Grid layout: 2 columns on desktop, 1 on mobile
- All items are placeholder content — use realistic BBQ menu items and prices
- Style the prices in the amber accent color

### Location & Schedule Section
- Section title: "Find the Truck" or "Where We'll Be"
- A schedule layout showing upcoming locations with dates, area name, address, and hours
- Use a card-style layout for each date block (similar to template but styled darker/rustier)
- Placeholder locations (Long Island area since the phone number is 631):
  - Smithtown, Huntington, Babylon, Islip, Bay Shore, Patchogue
- Include a placeholder for an embedded Google Map (gray box with "Map" text)
- Fun copy: "Follow the smoke. Find the pork."

### About Section
- Split layout: large photo placeholder on one side (the chef/owner), text on the other
- Headline: "The Story Behind the Smoke"
- Placeholder story text — 2-3 paragraphs about passion for BBQ, family recipe, hitting the road, etc.
- Include the mascot illustration somewhere in this section as a decorative element
- Stats row at bottom: "5,000+ Sandwiches Served", "50+ Events Catered", "1 Obsession: BBQ"
  - Animated count-up on scroll (IntersectionObserver)

### Catering / Book Us Section
- Section title: "Book Little Porky's"
- Subtext: "BBQ's • Parties • Catering • Special Events" (matching what's on the truck)
- 3-4 cards for event types:
  - **Private Parties** — "Backyard BBQ? We'll bring the smoke."
  - **Corporate Events** — "Feed the whole office right."
  - **Weddings** — "Love, vows, and pulled pork."
  - **Festivals & Fairs** — "We show up. Crowds show up."
- Each card: icon placeholder, title, short tagline, "Inquire" button
- Below cards: a simple contact form (Name, Email, Event Date, Event Type dropdown, Message, Submit)

### Contact Section
- Phone: 631.667.3976
- Website: littleporkiesplace.com
- Email: placeholder
- Social icons: Instagram, Facebook
- Simple and clean — no need for another form here, just info

### Footer
- The food truck image again (smaller, centered) — callback to the template's footer truck
- Tagline: "IT'S TRUCKING GOOD!" or "Follow the Smoke."
- Logo, social icons, copyright
- Dark background, minimal

---

## Design Tokens

### Colors
- **Primary Dark:** `#1A1210` (main background — almost black with warm brown undertone)
- **Dark Brown:** `#2C1E14` (cards, secondary backgrounds)
- **Amber/Gold:** `#D4932A` (accent — buttons, prices, highlights, hover glows)
- **Warm Red:** `#C0392B` (secondary accent — sparingly, for alerts or special badges)
- **Cream:** `#F5E6D0` (primary text on dark backgrounds)
- **Smoke White:** `#E8E0D8` (secondary text, smoke particles)
- **Charcoal:** `#3A2A20` (borders, subtle dividers)

### Typography
- **Display/Headlines:** A bold western or rustic serif — try `Alfa Slab One`, `Smokum`, `Teko`, or `Bebas Neue` from Google Fonts. Should feel like BBQ joint signage.
- **Body:** A clean readable sans — `DM Sans`, `Outfit`, or `Work Sans`
- **Accent/Labels:** The display font in uppercase with wide letter-spacing for section labels and small headers
- Headlines should be big and punchy — 4-6rem for hero, 2-3rem for section titles

### Textures & Details
- Subtle wood grain or dark leather texture as a CSS background pattern on certain sections (very subtle, almost invisible)
- Thin amber accent lines as section dividers
- A subtle paper/parchment texture on menu cards for a rustic feel
- Rounded corners on cards (8-12px) — not too sharp, not too pill-shaped
- The overall feel should be like walking into a premium BBQ joint — dark, warm, inviting

---

## Animations & Interactions

| Animation | Trigger | Duration | Easing |
|-----------|---------|----------|--------|
| Smoke particles rising | Page load, continuous | 4-8s per particle (varied) | linear with slight ease |
| Smoke burst on truck hover | Hover/tap on truck image | 1s | ease-out |
| Amber glow on truck hover | Hover/tap on truck image | 0.5s | ease-in-out |
| Menu cards fade-in | IntersectionObserver | 0.6s staggered | ease-out |
| Stat counter count-up | IntersectionObserver | 2s | ease-out |
| Specials row scroll | Horizontal drag/scroll | Momentum-based | ease-out |
| Nav background transition | Scroll past hero | 0.3s | ease |

---

## File Structure
```
/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── main.js         (smoke animation, scroll triggers, counters, interactions)
└── assets/
    └── images/
        ├── truck.png    (transparent PNG of the food truck — provided)
        └── ...          (placeholder images)
```

---

## Performance & Responsiveness

- Smoke animation must stay under 15 particles for performance
- All animations GPU-accelerated (transform, opacity only)
- Mobile: reduce smoke to 5-8 particles, simplify hover effects to tap
- Mobile: hero text stacks above truck image, truck scales down
- Mobile: menu grid goes single column
- Mobile: horizontal specials row becomes swipeable
- Lazy-load all images below the fold
- No external JS libraries — vanilla JS only
- Smooth scroll for all anchor nav links

---

## What NOT to Do
- Don't make this look like a generic food truck template — the dark/smoky aesthetic and smoke animation should set it apart immediately
- Don't use a light/white theme — this is a dark, warm, smoky site
- Don't skip the smoke animation — it's the centerpiece feature
- Don't make the menu section boring — each item should feel appetizing with warm styling
- Don't use lorem ipsum anywhere — all placeholder text should be realistic BBQ-related copy
- Don't forget the personality — the Little Porky mascot and fun copy ("Follow the smoke", "It's trucking good") give this brand character
