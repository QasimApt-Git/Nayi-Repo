# COSY AIRCONDITIONERS — Developer's Guide
## Module Description & Code Structure

---

## Project Folder Structure

```
COSY_AC_Project/
│
├── index.html          ← Main single-page website
│
├── css/
│   └── style.css       ← All styles (variables, navbar, hero, cards, etc.)
│
├── js/
│   └── app.js          ← All JavaScript (filter, compare, contact)
│
└── docs/
    ├── USER_GUIDE.md           ← User manual
    ├── DEVELOPER_GUIDE.md      ← This file
    ├── samsung-windfree-elite.html  ← Product detail page (Samsung)
    ├── samsung-classic.html         ← Product detail page
    ├── lg-dual-inverter-pro.html    ← Product detail page
    ├── daikin-streamer.html         ← Product detail page
    ├── whirlpool-magicool.html      ← Product detail page
    ├── haier-cleancool.html         ← Product detail page
    └── gree-fairy.html              ← Product detail page
```

---

## index.html — Sections

| Section ID  | Purpose                                      |
|-------------|----------------------------------------------|
| `#home`     | Hero section with AC animation and stats bar |
| `#brands`   | Brand filter buttons + brand logo cards      |
| `#products` | Product grid (filterable)                    |
| `#compare`  | Product comparison tool                      |
| `#contact`  | Contact form and company address             |

---

## css/style.css — Module Breakdown

| CSS Section         | What it controls                              |
|---------------------|-----------------------------------------------|
| `:root` variables   | Colors, fonts, border-radius, transitions     |
| `#mainNav`          | Fixed top navbar, brand logo, nav links       |
| `.hero-section`     | Full-screen hero, grid bg, glowing orbs       |
| `.ac-unit-display`  | Animated AC unit visual (vent bars, display)  |
| `.stats-bar`        | Stats numbers at bottom of hero               |
| `.btn-brand`        | Brand filter pill buttons                     |
| `.brand-logo-card`  | Clickable brand cards                         |
| `.product-card`     | Product card with hover effects               |
| `.compare-table`    | Side-by-side comparison table                 |
| `.contact-*`        | Contact info and form cards                   |
| `.footer-section`   | Footer layout                                 |

---

## js/app.js — Functions

### `initBrandFilter()`
- Reads `data-brand` attribute from filter buttons and product items
- On button click → adds `.hidden` class to non-matching products
- Also handles brand logo card clicks → calls click on matching filter button

### `compareProducts()`
- Reads selected values from `#compareA` and `#compareB` dropdowns
- Looks up product data from the `products` object
- Builds a table row for each feature in `compareFields` array
- Shows the result div by removing `d-none` class

### `sendMsg()`
- Shows a success message (`#msgSuccess`) for 5 seconds
- In production, replace with an actual form submission (fetch/AJAX)

### `initNavbarScroll()`
- Listens to `window.scroll`
- Changes navbar background opacity when user scrolls past 50px

### `initTempAnimation()`
- Cycles through temperature values on the hero AC display
- Uses `setInterval` every 2 seconds with a fade effect

### `initScrollReveal()`
- Uses `IntersectionObserver` to fade in cards as they enter viewport
- Applies to: `.product-card`, `.brand-logo-card`, `.contact-*`

---

## Adding a New Product

1. In `index.html`, copy any `.product-item` div block inside `#productGrid`
2. Set `data-brand="yourbrand"` on the wrapper div
3. Update the icon, name, specs, description, price
4. Add the product to the `products` object in `app.js` with all fields
5. Add the product as an `<option>` in both compare dropdowns
6. Create a detail HTML file in `/docs/` (copy an existing one as template)

## Adding a New Brand

1. Add a new filter button in `#brandFilters` with `data-brand="newbrand"`
2. Add a brand logo card in `#brandCards` with `data-brand="newbrand"`
3. Tag new product items with `data-brand="newbrand"`

---

## Libraries Used

| Library        | Version | Purpose                      |
|----------------|---------|------------------------------|
| Bootstrap      | 5.3.2   | Layout, grid, components     |
| Bootstrap Icons| 1.11.0  | All icons                    |
| Google Fonts   | —       | Orbitron + Rajdhani fonts    |

No backend or database is used. All data is stored in `app.js`.
