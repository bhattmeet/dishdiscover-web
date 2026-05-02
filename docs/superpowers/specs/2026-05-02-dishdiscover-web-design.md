# DishDiscover Web — Design Spec

**Date:** 2026-05-02  
**Status:** Approved  
**Project:** `dishdiscover-web` — standalone Next.js website for Privacy Policy, Terms & Conditions, and Home page

---

## 1. Goal

Build a modern, professional marketing + legal website for the DishDiscover Android app. The site serves two purposes:
1. Google Play Store requirement — host Privacy Policy and Terms & Conditions at public URLs
2. Marketing — present DishDiscover attractively to prospective users

---

## 2. Tech Stack

| Layer | Choice | Reason |
|---|---|---|
| Framework | Next.js 14 (App Router) | TypeScript-first, static export, best-in-class metadata/font/image APIs |
| Language | TypeScript | User requirement, type safety |
| Styling | Tailwind CSS + CSS custom properties | Utility-first, consistent design tokens |
| Font | Inter via `next/font/google` | Modern, highly legible, no decorative excess |
| Images | `next/image` | Automatic optimization for logos |
| Deployment | Vercel or any static host (`output: 'export'`) | One-command deploy, free tier |

---

## 3. Design System

### Colors (no gradients — solid only)

```css
--green-950: #021a0a   /* deepest dark */
--green-900: #052e16   /* hero background, app section bg */
--green-800: #0D6F36   /* primary brand, buttons, accents */
--green-700: #10924A   /* hover states */
--green-100: #dcfce7   /* light tint, callout backgrounds */
--accent:    #4ade80   /* stat values, highlights */
--white:     #ffffff
--gray-50:   #f9fafb   /* card backgrounds */
--gray-100:  #f3f4f6
--gray-600:  #4b5563   /* body text */
--gray-900:  #111827   /* headings on white */
```

### Typography — Inter

| Role | Weight | Size | Notes |
|---|---|---|---|
| Display | 700 | 3.5–4rem | Hero headline, tracking -0.02em |
| Heading | 700 | 1.5–2.25rem | Section titles |
| Label | 600 | 0.75rem | Uppercase eyebrow, tracking 0.1em |
| Body | 400 | 1rem | Line-height 1.7 |

### Spacing
- 4pt grid throughout
- Section padding: `py-16` desktop, `py-10` mobile
- Card gaps: `gap-4`, `gap-6`, `gap-8`

### Border Radius
- Cards: `rounded-2xl` (16px)
- Buttons / pills: `rounded-lg` (8px)
- Hero logo card: `rounded-3xl` (24px)

### Shadows
- Cards: `shadow-sm`
- Floating quick-link cards: `shadow-lg`
- Hero logo card: `shadow-xl`

---

## 4. Project Structure

```
dishdiscover-web/
├── app/
│   ├── layout.tsx              # Root layout: font, metadata, Header, Footer
│   ├── page.tsx                # Home page
│   ├── privacy/
│   │   └── page.tsx            # Privacy Policy
│   └── terms/
│       └── page.tsx            # Terms & Conditions
├── components/
│   ├── Header.tsx              # Sticky header, transparent-over-hero → white on scroll
│   ├── Footer.tsx              # Dark bg, logo, 3-col links
│   ├── Hero.tsx                # Dark solid hero, logo card, headline, CTAs
│   ├── QuickLinks.tsx          # 3 floating white cards (Privacy, Terms, Contact)
│   ├── StatsBar.tsx            # 4-stat white bar
│   ├── FeaturesGrid.tsx        # 6-card feature grid
│   ├── AppSection.tsx          # Dark green download section
│   └── legal/
│       ├── LegalHero.tsx       # Dark header with page title + last-updated badge
│       ├── LegalSidebar.tsx    # Sticky TOC with IntersectionObserver active tracking
│       └── LegalContent.tsx    # Section cards with numbered badges + callout boxes
├── public/
│   └── assets/
│       ├── app_logo_light.svg  # Dark text logo — for light backgrounds
│       ├── app_logo_dark.svg   # Light text logo — for dark backgrounds
│       └── app_logo.png        # PNG app icon
├── styles/
│   └── globals.css             # CSS custom properties + base resets
├── next.config.ts
├── tailwind.config.ts
└── tsconfig.json
```

---

## 5. Pages

### 5.1 Home (`/`)

**Header**
- Sticky; transparent when at top of page, white bg after scrolling past hero
- Logo: `app_logo_dark.svg` (white text) when transparent over hero; swap to `app_logo_light.svg` (dark text) after scroll — controlled by `scrolled` state
- Nav links (Home, Privacy Policy, Terms) + "Get the App" CTA right; link/text color white over hero, `gray-900` after scroll
- CTA links to Google Play Store

**Hero**
- Background: solid `#052e16`
- Centered white card (`rounded-3xl`, `shadow-xl`, white bg) containing `app_logo_light.svg` at ~200px width
- Headline: "Your Culinary Journey Starts Here" — white, display weight
- Subtitle: "Explore thousands of recipes from every cuisine, share your own creations, and connect with food lovers around the world." — `text-green-100`, body weight
- Two CTAs: primary (solid `#0D6F36` bg, white text, Google Play icon) + ghost (white border, white text, "Privacy & Legal")

**Quick-link Cards** (float over hero with negative top margin)
- 3 white `rounded-2xl shadow-lg` cards in a responsive grid
- Privacy Policy (green icon), Terms & Conditions (blue icon), Contact Us (green icon)
- Each: icon, title, description, "Read →" CTA

**Stats Bar**
- White bg, centered 4-column layout
- Values: `1000+` Recipes, `30+` Cuisines, `Free` To Download, `4.5★` Rating
- Stat values: `text-green-800`, bold; labels: `text-gray-500`

**Features Grid**
- Section label ("Features"), heading ("Everything a food lover needs"), subtitle
- 6 cards, 3-col desktop / 2-col tablet / 1-col mobile:
  1. Discover Recipes (green, search icon)
  2. Share Your Creations (blue, upload icon)
  3. Follow Food Lovers (purple, users icon)
  4. Meal Planning (orange, calendar icon)
  5. Achievements & Badges (yellow, star icon)
  6. Smart Notifications (green, bell icon)

**App Section**
- Background: solid `#0D6F36`
- App icon (`app_logo.png`) + app name + description + Google Play badge
- White text throughout

**Footer**
- Background: `#052e16`
- Logo (`app_logo_dark.svg`) + tagline "Cook. Share. Inspire."
- 3-column links: App (Google Play), Legal (Privacy, Terms), Support (Contact)
- Bottom bar: copyright + last updated date

### 5.2 Privacy Policy (`/privacy`)

- **LegalHero**: solid `#052e16` bg, "Privacy Policy" title, last-updated badge, breadcrumb
- **Two-column layout** (desktop): sticky TOC sidebar (left ~280px) + scrollable content (right)
- **TOC sidebar** (`LegalSidebar`): numbered section links, active section highlighted in `#0D6F36`; collapses on mobile
- **Content** (`LegalContent`): 15 sections, each as a white card with:
  - Numbered badge (solid `#0D6F36`)
  - Section title
  - Body text
  - Callout boxes where relevant: info (blue), warning (yellow), success (green), security (green shield)
- **Rights grid**: 6-card grid highlighting user rights
- **Contact card**: email contact with response time note
- Metadata: title "Privacy Policy — DishDiscover", description

### 5.3 Terms & Conditions (`/terms`)

- Same layout as Privacy Policy
- Blue accent theme (badge color `#2563eb`) to visually distinguish from Privacy
- 19 sections
- Metadata: title "Terms & Conditions — DishDiscover"

---

## 6. Component Details

### Header — scroll behavior
```tsx
// useEffect + scroll listener:
// scrollY > 80 → scrolled: true → white bg + shadow, app_logo_light.svg, dark nav text
// scrollY <= 80 → scrolled: false → transparent bg, app_logo_dark.svg, white nav text
```

### LegalSidebar — active TOC tracking
```tsx
// IntersectionObserver watches each section[id]
// threshold: 0.3 — section is "active" when 30% visible
// Updates activeSection state → applies active styles to matching TOC link
```

### Callout box variants
```tsx
type CalloutVariant = 'info' | 'warning' | 'success' | 'security'
// Each has: left border color, bg tint, icon, label
```

---

## 7. SEO & Metadata

Each page exports `generateMetadata` (or `metadata` const):

```ts
// layout.tsx — base
title: { template: '%s — DishDiscover', default: 'DishDiscover — Discover & Share Recipes' }
description: '...'
openGraph: { ... }

// page.tsx overrides
privacy/page.tsx → title: 'Privacy Policy'
terms/page.tsx   → title: 'Terms & Conditions'
```

---

## 8. Responsiveness

| Breakpoint | Behavior |
|---|---|
| Mobile (`< 768px`) | Single column, TOC collapses to anchor list above content |
| Tablet (`768–1024px`) | 2-col feature grid, TOC hidden |
| Desktop (`> 1024px`) | Full layout, sticky TOC sidebar visible |

---

## 9. Assets

Logos copied from Flutter project at build time (or committed to `public/assets/`):
- `app_logo_light.svg` — dark green text on transparent bg → use on white/light surfaces
- `app_logo_dark.svg` — white text on transparent bg → use on dark surfaces  
- `app_logo.png` — square icon → app info section

---

## 10. Out of Scope

- No authentication
- No API routes
- No database
- No Apple App Store link (Google Play only)
- No i18n
- No blog or additional pages
