# Master Design System Prompt
## Umbrellish Landing Page - Complete Design Template

> **Purpose:** This document is a comprehensive reverse-engineering of the Umbrellish landing page design system. Use it as a template to recreate this exact aesthetic on any website by replacing colors, fonts, and content while maintaining the spacing, layout, and animation patterns that make this design beautiful.

---

## Table of Contents

1. [Design System Foundation](#design-system-foundation)
2. [Layout Foundation](#layout-foundation)
3. [Component Breakdowns](#component-breakdowns)
4. [Background Layer System](#background-layer-system)
5. [Animation Playbook](#animation-playbook)
6. [Implementation Guide](#implementation-guide)
7. [Quick Reference Charts](#quick-reference-charts)

---

# 1. Design System Foundation

## 1.1 Color System Template

### Primary Brand Color
```
Placeholder: [BRAND_PRIMARY]
Current Value: #F78140 (Orange)
Usage: CTA buttons, hover states, badges, accent text, borders on hover
```

### Background Colors
```
[BG_PRIMARY]: #0A0A0A (Pure black - main background)
[BG_SECONDARY]: #1F1F1F (Charcoal - card backgrounds)
[BG_CARD]: rgba(39, 39, 42, 0.5) (Zinc-900 at 50% - semi-transparent cards)
[BG_CARD_DARK]: rgba(9, 9, 11, 0.5) (Zinc-950 at 50% - darker cards)
```

### Text Color Hierarchy
```
[TEXT_PRIMARY]: #FFFFFF (White - headings, prominent text)
[TEXT_SECONDARY]: #D4D4D8 (Gray-300 - secondary emphasis)
[TEXT_TERTIARY]: #A1A1AA (Gray-400 - descriptions, low emphasis)
[TEXT_MUTED]: #71717A (Gray-500 - very subtle text, muted copy)
[TEXT_PLACEHOLDER]: #52525B (Gray-600 - input placeholders)
```

### Semantic Colors

**Success States:**
```
[COLOR_SUCCESS]: #22C55E (Green-500)
[COLOR_SUCCESS_TEXT]: #86EFAC (Green-300 - light success text)
[COLOR_SUCCESS_BG]: rgba(34, 197, 94, 0.1) (10% opacity)
[COLOR_SUCCESS_BORDER]: rgba(34, 197, 94, 0.2) (20% opacity)
```

**Error States:**
```
[COLOR_ERROR]: #F87171 (Red-400)
[COLOR_ERROR_BG]: rgba(248, 113, 113, 0.1)
```

**Info/Analysis States:**
```
[COLOR_INFO]: #A78BFA (Purple-400)
[COLOR_INFO_LIGHT]: #D8B4FE (Purple-300)
[COLOR_INFO_BG]: rgba(168, 139, 250, 0.1)
[COLOR_INFO_BORDER]: rgba(168, 139, 250, 0.2)
```

**Protocol/Data States:**
```
[COLOR_DATA]: #60A5FA (Blue-400)
[COLOR_DATA_BG]: rgba(96, 165, 250, 0.1)
[COLOR_DATA_BORDER]: rgba(96, 165, 250, 0.2)
```

### Neutral Scale
```
Zinc-950: #09090B (Darkest cards/backgrounds)
Zinc-900: #18181B (Dark cards)
Zinc-800: #27272A (Borders, dividers)
Zinc-700: #3F3F46 (Secondary borders)

Gray-300: #D4D4D8 (Secondary text)
Gray-400: #A1A1AA (Tertiary text, descriptions)
Gray-500: #71717A (Muted text)
Gray-600: #52525B (Placeholders)
```

### Opacity Levels Guide
```
/5  (5%):  Very subtle gradient backgrounds
/10 (10%): Feature backgrounds, badge backgrounds
/20 (20%): Border opacity, gradient accents
/30 (30%): Medium border emphasis
/40 (40%): Hero overlay, significant overlays
/50 (50%): Card backgrounds, hover effects
/60 (60%): Input field backgrounds
/70 (70%): Dark button hover states
```

### Border Colors
```
Default borders: border-zinc-800 (#27272A)
Hover borders: border-[BRAND_PRIMARY]/50 (50% opacity)
Focus borders: border-[BRAND_PRIMARY] (full opacity)
Secondary borders: border-zinc-700 (#3F3F46)
Transparent borders: border-white/10 (10% white)
```

---

## 1.2 Typography System Template

### Font Families
```
[FONT_DISPLAY]: Space Grotesk (Variable weight 300-700)
  Current: Space Grotesk loaded from /fonts/SpaceGrotesk-Variable.ttf
  Usage: All headings and body text

[FONT_BODY]: Space Grotesk (Variable weight 300-700)
  Current: Space Grotesk
  Usage: All body text, UI elements

Alternative Display Font (if needed):
  Norwester (loaded from /fonts/norwester.otf)
  Usage: Bold, distinctive headings (not used in current implementation)
```

### Text Size Scale with Responsive Breakpoints

#### Hero/Display Headings (H1)
```
Mobile (base):   text-6xl    = 3.75rem  = 60px
Tablet (md):     text-7xl    = 4.5rem   = 72px
Desktop (lg):    text-8xl    = 6rem     = 96px
Large (xl):      text-9xl    = 8rem     = 128px

Line Height: leading-[0.95] = 95% of font size (tight for drama)
Font Weight: font-bold = 700
Example: Hero headline "Umbrellish does."
```

#### Section Headings (H2)
```
Mobile (base):   text-4xl    = 2.25rem  = 36px
Tablet (md):     text-5xl    = 3rem     = 48px
Desktop (lg):    text-6xl    = 3.75rem  = 60px

Line Height: Default
Font Weight: font-bold = 700
Example: "Why Umbrellish?", "How It Works"
```

#### Card/Component Titles (H3)
```
Fixed size:      text-xl     = 1.25rem  = 20px
Font Weight: font-bold = 700
Margin below: mb-3 = 0.75rem = 12px
Example: Feature card titles like "Agentic AI"
```

#### Step Numbers/Large Display
```
Fixed size:      text-2xl    = 1.5rem   = 24px
Font Weight: font-bold = 700
Usage: Timeline step numbers, large badges
```

#### Large Stats/Numbers
```
Mobile (base):   text-5xl    = 3rem     = 48px
Tablet (md):     text-6xl    = 3.75rem  = 60px

Font Weight: font-bold = 700
Usage: Stats like "8247+", "$2.5M"
```

### Paragraph/Body Text Scale

#### Hero Subheading
```
Mobile (base):   text-base   = 1rem     = 16px
Tablet (md):     text-lg     = 1.125rem = 18px
Desktop (lg):    text-xl     = 1.25rem  = 20px

Line Height: leading-relaxed = 1.625
Color: [TEXT_TERTIARY] (Gray-400)
Max Width: max-w-2xl = 42rem = 672px
```

#### Section Descriptions
```
Mobile (base):   text-lg     = 1.125rem = 18px
Tablet (md):     text-xl     = 1.25rem  = 20px

Line Height: Default
Color: [TEXT_TERTIARY] (Gray-400)
Max Width: max-w-3xl = 48rem = 768px (centered)
```

#### Feature Card Descriptions
```
Fixed size:      text-base   = 1rem     = 16px
Line Height: leading-relaxed = 1.625
Color: [TEXT_TERTIARY] (Gray-400)
```

#### Small Text (Labels, Footer)
```
Fixed size:      text-sm     = 0.875rem = 14px
Line Height: Default
Color: [TEXT_TERTIARY] or [TEXT_MUTED]
```

#### Form Inputs
```
Mobile (base):   text-sm     = 0.875rem = 14px
Tablet (md):     text-base   = 1rem     = 16px

Placeholder: placeholder:text-[TEXT_PLACEHOLDER]
```

### Font Weight Usage
```
font-bold (700):      Headings, CTA buttons, emphasis
font-semibold (600):  Secondary buttons, subheadings
font-medium (500):    Labels, badges, medium emphasis
font-normal (400):    Body text (default)
```

### Text Color by Hierarchy
```
Primary headings:     text-white
Subheadings:         text-gray-500 or text-[TEXT_SECONDARY]
Body paragraphs:     text-gray-400 or text-[TEXT_TERTIARY]
Muted text:          text-gray-500 or text-[TEXT_MUTED]
Placeholders:        placeholder:text-gray-600
Accent text:         text-[BRAND_PRIMARY]
Success text:        text-[COLOR_SUCCESS_TEXT]
Error text:          text-[COLOR_ERROR]
```

---

## 1.3 Spacing Scale

### Base Unit System
```
Base unit: 4px (Tailwind spacing unit)

Scale:
1  = 4px
2  = 8px
3  = 12px
4  = 16px
6  = 24px
8  = 32px
10 = 40px
12 = 48px
16 = 64px
20 = 80px
24 = 96px
32 = 128px
```

### Section Padding (Vertical)

**Standard Sections:**
```
Mobile (base):   py-24  = 6rem   = 96px
Tablet (md):     py-32  = 8rem   = 128px

Usage: Features, HowItWorks, IntentDemo, SocialProof, FinalCTA
Example: className="py-24 md:py-32"
```

**Shorter Sections:**
```
Mobile (base):   py-16  = 4rem   = 64px
Tablet (md):     py-24  = 6rem   = 96px

Usage: Carousel section
Example: className="py-16 md:py-24"
```

**Footer:**
```
Vertical: py-12 = 3rem = 48px
```

### Section Padding (Horizontal)

**Standard Pattern (Most Sections):**
```
Mobile (base):   px-6   = 1.5rem  = 24px  ←— 24px from edge —→
Tablet (md):     px-12  = 3rem    = 48px  ←— 48px from edge —→
Desktop (lg):    px-16  = 4rem    = 64px  ←— 64px from edge —→

Usage: All sections except Hero
Example: className="px-6 md:px-12 lg:px-16"
```

**Hero Section:**
```
Mobile (base):   px-6   = 1.5rem  = 24px
Tablet (md):     px-12  = 3rem    = 48px
Desktop (lg):    px-16  = 4rem    = 64px
Large (xl):      px-24  = 6rem    = 96px  ←— Extra space on large screens —→

Example: className="px-6 md:px-12 lg:px-16 xl:px-24"
```

### Content Container Max-Widths
```
max-w-4xl   = 56rem  = 896px   → Hero, FinalCTA
max-w-5xl   = 64rem  = 1024px  → IntentDemo
max-w-6xl   = 72rem  = 1152px  → Carousel
max-w-7xl   = 80rem  = 1280px  → Features, HowItWorks, SocialProof, Footer
max-w-[1600px] = 1600px        → Header

Pattern: <div className="max-w-7xl mx-auto">
```

### Internal Component Spacing

**Card Padding:**
```
Feature cards:    p-8         = 2rem    = 32px (all sides)
Demo widget:      p-8 md:p-12 = 32/48px (responsive)
CTA card:         p-12 md:p-16 = 48/64px (large padding)
Stat cards:       p-8         = 32px
Footer:           p-12        = 48px vertical
```

**Input/Button Padding:**
```
Email input:      px-6 py-4   = 24px horizontal, 16px vertical
CTA button:       px-6 md:px-8 py-4 = 24-32px horizontal, 16px vertical
Large CTA button: px-8 py-5   = 32px horizontal, 20px vertical
```

### Margin Between Major Elements

**Hero Section:**
```
Title to subtitle:    mb-8 md:mb-12  = 32/48px
Subtitle to form:     mb-10 md:mb-12 = 40/48px
Form to indicators:   mb-8           = 32px
```

**Section Headers:**
```
Heading to description: mb-6  = 24px
Header block to content: mb-16 md:mb-20 = 64/80px
```

**Card Content:**
```
Icon to title:        mb-6  = 24px
Title to description: mb-3  = 12px
```

### Gap Values (Flex/Grid)

**Feature Grid:**
```
gap-6 md:gap-8 = 24px → 32px between cards
```

**HowItWorks Steps:**
```
gap-8 lg:gap-4 = 32px mobile, 16px desktop (tighter when 4-column)
```

**Stats Grid:**
```
gap-8 = 32px between stat cards
```

**Icon Groups:**
```
gap-5 md:gap-6 = 20px → 24px between icons
```

**Status Indicators:**
```
gap-6 = 24px between indicator elements
gap-2 = 8px for small elements (dots, icons)
gap-3 = 12px for badges
```

---

## 1.4 Border Radius Scale

### Radius System
```
rounded-lg   = 0.5rem  = 8px  → Small elements (inputs, small buttons)
rounded-xl   = 0.75rem = 12px → Medium elements (input groups, badges)
rounded-2xl  = 1rem    = 16px → Cards, containers
rounded-3xl  = 1.5rem  = 24px → Large containers (CTA, demo widget)
rounded-full = 9999px  → Circular elements (badges, dots, avatars)
```

### Usage Guide
```
Buttons (primary):     rounded-lg or rounded-xl
Input fields:          rounded-lg or rounded-xl
Feature cards:         rounded-2xl
Section containers:    rounded-3xl
Step badges:           rounded-full
Indicator dots:        rounded-full
Pills/badges:          rounded-full
Card hover borders:    Same as card (rounded-2xl)
```

### Border Thickness
```
Default: border (1px)
Usage: Almost all borders are 1px
Exception: Loading spinners use border-2 (2px)
```

---

## 1.5 Animation Timing System

### Duration Scale
```
duration-200  = 200ms  → Fast interactions (button hover, color change)
duration-300  = 300ms  → Standard interactions (icon scale, card hover)
duration-500  = 500ms  → Moderate transitions (staggered cards)
duration-600  = 600ms  → Section entrances (scroll triggers)
duration-800  = 800ms  → Hero elements (main headline)
duration-1200 = 1200ms → Large animations (background fade)
```

### Easing Functions
```
Primary (Custom): cubic-bezier(0.16, 1, 0.3, 1)
  Usage: All Framer Motion animations
  Style: Apple-style smooth, elegant ease-out

Standard: ease-in-out
  Usage: Continuous loops (pulse, breathing)

Linear: linear
  Usage: Spinners, constant rotations
```

### Stagger Delays
```
Short stagger:  0.1s (100ms)  → Feature cards
Medium stagger: 0.2s (200ms)  → Timeline steps
Hero stagger:   0.2s (200ms)  → Headline elements
```

### Continuous Animation Timing
```
Pulse:         2s infinite → Icon breathing effects
Spin:          1s infinite → Loading spinners
Scale pulse:   2s infinite → Social icon pulse
```

### Hover Transition Standard
```
transition-colors duration-200     → Color changes only
transition-all duration-200        → Multiple properties
transition-transform duration-300  → Scale/movement only
```

---

# 2. Layout Foundation

## 2.1 Container Strategy

### The Standard Pattern
```html
<section className="relative py-24 md:py-32 px-6 md:px-12 lg:px-16">
  <div className="max-w-7xl mx-auto">
    <!-- Content here -->
  </div>
</section>
```

**Breakdown:**
- `relative`: Establishes positioning context
- `py-24 md:py-32`: Vertical section spacing
- `px-6 md:px-12 lg:px-16`: Horizontal edge spacing
- `max-w-7xl mx-auto`: Constrains width and centers content

### Container Width by Component

| Component | Max Width | Pixels | Reason |
|-----------|-----------|--------|--------|
| Hero | max-w-4xl | 896px | Focus content, left-aligned |
| Carousel | max-w-6xl | 1152px | Large media display |
| Features | max-w-7xl | 1280px | Wide grid layout (3 columns) |
| HowItWorks | max-w-7xl | 1280px | 4-column timeline |
| IntentDemo | max-w-5xl | 1024px | Focused demo widget |
| SocialProof | max-w-7xl | 1280px | 3-column stats |
| FinalCTA | max-w-4xl | 896px | Focused conversion |
| Footer | max-w-7xl | 1280px | Full-width footer content |
| Header | max-w-[1600px] | 1600px | Very wide for branding |

### Centering Technique
```
mx-auto = margin-left: auto; margin-right: auto;
```
Always paired with max-width to center constrained content.

---

## 2.2 Responsive Breakpoints

### Tailwind Default Breakpoints
```
Mobile (base):    < 768px   (no prefix needed)
Tablet (md):      ≥ 768px   (md: prefix)
Desktop (lg):     ≥ 1024px  (lg: prefix)
Large Desktop (xl): ≥ 1280px (xl: prefix)
```

### Mobile-First Approach
```
Write base styles for mobile first, then add breakpoint modifiers:

className="text-4xl md:text-5xl lg:text-6xl"
           ^^^^^^   ^^^^^^^^^^^   ^^^^^^^^^^^
           Mobile   Tablet        Desktop
```

### Common Responsive Patterns

**Text Sizing:**
```
text-4xl → text-5xl → text-6xl   (Headings)
text-base → text-lg → text-xl     (Body/subheadings)
text-sm → text-base               (Form inputs)
```

**Spacing:**
```
py-24 → py-32         (Section vertical padding)
px-6 → px-12 → px-16  (Section horizontal padding)
p-8 → p-12            (Card padding)
gap-6 → gap-8         (Grid gaps)
mb-8 → mb-12          (Margins)
```

**Layout:**
```
grid-cols-1 → grid-cols-2 → grid-cols-3  (Features: 1→2→3)
grid-cols-1 → grid-cols-2 → grid-cols-4  (Steps: 1→2→4)
flex-col → flex-row                       (Form stacking)
hidden → lg:block                         (Desktop-only elements)
```

---

## 2.3 Grid Systems

### Features Grid (3-Column)
```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
  {/* 6 feature cards */}
</div>
```

**Behavior:**
- Mobile: 1 column (stacked)
- Tablet: 2 columns (3 rows of 2)
- Desktop: 3 columns (2 rows of 3)
- Gap: 24px → 32px

### Timeline Grid (4-Column)
```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
  {/* 4 step cards */}
</div>
```

**Behavior:**
- Mobile: 1 column (stacked)
- Tablet: 2 columns (2 rows of 2)
- Desktop: 4 columns (1 row of 4)
- Gap: 32px → 16px (tighter for 4-column)

### Stats Grid (3-Column)
```jsx
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
  {/* 3 stat cards */}
</div>
```

**Behavior:**
- Mobile: 1 column (stacked)
- Tablet/Desktop: 3 columns (1 row of 3)
- Gap: 32px consistent

### Result Data Grid (2-to-3 Column)
```jsx
<div className="grid grid-cols-2 md:grid-cols-3 gap-4">
  {/* Data items */}
</div>
```

**Behavior:**
- Mobile: 2 columns
- Desktop: 3 columns
- Gap: 16px consistent

---

## 2.4 Z-index Layering Rules

### Standard Stack
```
-z-10 or z-0:  Background layer (fixed full-screen background)
relative (z-0): Default content layer
z-10:          Foreground content (Hero content over background)
z-50:          Header (fixed navigation, always on top)
```

### Example: Hero Section
```jsx
<main className="relative"> {/* Creates stacking context */}
  <div className="absolute inset-0 z-0"> {/* Background image */}
    {/* Background content */}
  </div>

  <div className="relative z-10"> {/* Foreground content */}
    {/* Text and CTA - sits above background */}
  </div>
</main>
```

### When to Use Z-index
- **Background layers:** z-0 or negative
- **Fixed header:** z-50 (above all content)
- **Layered content:** z-10 for foreground over background
- **Most components:** No explicit z-index needed (default stacking)

---

# 3. Component Breakdowns

## 3.1 Hero Section Template

### Overall Structure
```jsx
<main className="relative flex items-center min-h-screen px-6 md:px-12 lg:px-16 xl:px-24 overflow-hidden">
  {/* Background Layer (z-0) */}
  <motion.div className="absolute inset-0 z-0">
    <div className="absolute inset-0 bg-no-repeat" style={{ backgroundImage: 'url(...)' }} />
    <div className="absolute inset-0 bg-black/40" /> {/* Dark overlay */}
  </motion.div>

  {/* Content Layer (z-10) */}
  <div className="max-w-4xl w-full relative z-10">
    {/* Headline, subtitle, form, indicators */}
  </div>
</main>
```

### Layout Measurements

**Container:**
```
Min Height:      min-h-screen (100vh - full viewport)
Positioning:     flex items-center (vertical center)
Horizontal Padding:
  Mobile:   px-6  = 24px from edges
  Tablet:   px-12 = 48px from edges
  Desktop:  px-16 = 64px from edges
  XL:       px-24 = 96px from edges

Content Max-Width: max-w-4xl = 896px
Alignment: Left-aligned (not centered)
```

### Headline Typography
```jsx
<motion.h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold mb-8 md:mb-12 leading-[0.95]">
  <motion.div className="text-gray-500 mb-2">
    [HEADLINE_PART_1]  {/* e.g., "You tell." */}
  </motion.div>
  <motion.div className="text-white">
    [HEADLINE_PART_2]  {/* e.g., "Umbrellish does." */}
  </motion.div>
</motion.h1>
```

**Specifications:**
```
Font Size Progression:
  Mobile: 60px  (text-6xl)
  Tablet: 72px  (text-7xl)
  Desktop: 96px (text-8xl)
  XL: 128px     (text-9xl)

Line Height: 95% of font size (leading-[0.95])
  Creates dramatic, tight spacing

Font Weight: Bold (700)

Colors:
  Part 1: text-[TEXT_MUTED] (gray-500) - softer
  Part 2: text-[TEXT_PRIMARY] (white) - emphasis

Spacing:
  Between parts: mb-2 = 8px
  Below headline: mb-8 (32px) on mobile, mb-12 (48px) on desktop
```

### Subheading
```jsx
<motion.p className="text-gray-400 text-base md:text-lg lg:text-xl max-w-2xl mb-10 md:mb-12 leading-relaxed">
  [SUBHEADING_TEXT]
</motion.p>
```

**Specifications:**
```
Font Size:
  Mobile: 16px (text-base)
  Tablet: 18px (text-lg)
  Desktop: 20px (text-xl)

Color: text-[TEXT_TERTIARY] (gray-400)
Line Height: leading-relaxed (1.625)
Max Width: max-w-2xl = 672px (constrains line length)

Spacing Below:
  Mobile: mb-10 = 40px
  Desktop: mb-12 = 48px
```

### CTA Form (Input + Button)
```jsx
<motion.form className="mb-8">
  <div className="flex items-center gap-0 max-w-lg bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800">
    <input
      type="email"
      placeholder="[PLACEHOLDER_TEXT]"
      className="flex-1 px-6 py-4 bg-transparent text-white placeholder:text-gray-600 focus:outline-none text-sm md:text-base"
    />
    <button
      type="submit"
      className="px-6 md:px-8 py-4 bg-[BRAND_PRIMARY] text-black font-semibold hover:bg-orange-500 transition-all duration-200 flex items-center gap-2 text-sm md:text-base"
    >
      <span>[BUTTON_TEXT]</span>
      <svg className="w-4 h-4">{/* Arrow icon */}</svg>
    </button>
  </div>
</motion.form>
```

**Specifications:**

Container:
```
Max Width: max-w-lg = 512px
Background: bg-[BG_SECONDARY] (zinc-900)
Border: border border-zinc-800 (1px gray border)
Border Radius: rounded-lg (8px)
Layout: flex items-center gap-0 (no gap - joined appearance)
Overflow: overflow-hidden (clips button into container)
```

Input Field:
```
Flex: flex-1 (grows to fill space)
Padding: px-6 py-4 = 24px horizontal, 16px vertical
Background: bg-transparent
Text Color: text-white
Placeholder: placeholder:text-[TEXT_PLACEHOLDER] (gray-600)
Font Size: text-sm (14px) → text-base (16px)
Focus: focus:outline-none (no blue outline)
```

Button:
```
Padding:
  Horizontal: px-6 (24px) → px-8 (32px) on desktop
  Vertical: py-4 (16px) - matches input height

Background: bg-[BRAND_PRIMARY] (your brand color)
Text Color: text-black (high contrast on bright button)
Font Weight: font-semibold (600)
Font Size: text-sm (14px) → text-base (16px)

Hover: hover:bg-orange-500 (slightly darker)
Transition: transition-all duration-200 (smooth)

Icon: w-4 h-4 (16px arrow)
Icon Spacing: gap-2 (8px from text)
```

Form Spacing Below:
```
mb-8 = 32px to status indicators
```

### Status Indicators
```jsx
<motion.div className="flex items-center gap-6 text-sm text-gray-500">
  <div className="flex items-center gap-2">
    <svg className="w-4 h-4">{/* Lock icon */}</svg>
    <span>[SECURITY_TEXT]</span>  {/* e.g., "Encrypted" */}
  </div>
  <div className="flex items-center gap-2">
    <div className="w-2 h-2 rounded-full bg-green-500"></div>
    <span>[STATUS_LABEL]: <span className="text-[BRAND_PRIMARY]">[STATUS_VALUE]</span></span>
  </div>
</motion.div>
```

**Specifications:**
```
Layout: flex items-center gap-6 (24px between indicators)
Text Size: text-sm (14px)
Text Color: text-[TEXT_MUTED] (gray-500)

Icon Size: w-4 h-4 (16px)
Icon Spacing: gap-2 (8px from text)

Status Dot: w-2 h-2 rounded-full (8px circle)
Accent Text: text-[BRAND_PRIMARY]
```

### Background Layer
```jsx
<motion.div
  className="absolute inset-0 z-0"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
>
  <div
    className="absolute inset-0 bg-no-repeat"
    style={{
      backgroundImage: 'url([HERO_IMAGE_PATH])',
      backgroundSize: '100% 100%'
    }}
  />
  <div className="absolute inset-0 bg-black/40" />
</motion.div>
```

**Specifications:**
```
Positioning: absolute inset-0 (full coverage)
Z-index: z-0 (behind content)

Image Layer:
  Background Size: 100% 100% (stretch to fill)
  Background Repeat: bg-no-repeat

Overlay:
  Background: bg-black/40 (40% black)
  Purpose: Darkens image for text readability

Animation:
  Fade in from opacity 0 to 1
  Duration: 1200ms
  Easing: cubic-bezier(0.16, 1, 0.3, 1)
```

### Animation Sequence

**Timeline:**
```
0ms    → Background fades in
200ms  → "You tell." slides in from left
400ms  → "Umbrellish does." slides in from left
600ms  → Subheading fades + slides up
800ms  → Form fades + slides up
1000ms → Status indicators fade in
```

**Code:**
```jsx
// Background
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}

// Headline (container)
initial={{ opacity: 0, y: 30 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}

// Headline part 1 ("You tell.")
initial={{ opacity: 0, x: -20 }}
animate={{ opacity: 1, x: 0 }}
transition={{ duration: 0.8, delay: 0.2 }}

// Headline part 2 ("Umbrellish does.")
initial={{ opacity: 0, x: -20 }}
animate={{ opacity: 1, x: 0 }}
transition={{ duration: 0.8, delay: 0.4 }}

// Subheading
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8, delay: 0.6 }}

// Form
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8, delay: 0.8 }}

// Status indicators
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
transition={{ duration: 0.8, delay: 1 }}
```

---

## 3.2 Features/Card Grid Section Template

### Overall Structure
```jsx
<section className="relative py-24 md:py-32 px-6 md:px-12 lg:px-16">
  <div className="max-w-7xl mx-auto">
    {/* Section Header */}
    <motion.div className="text-center mb-16 md:mb-20">
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
        [SECTION_HEADING]
      </h2>
      <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
        [SECTION_DESCRIPTION]
      </p>
    </motion.div>

    {/* Features Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {/* Feature cards */}
    </div>
  </div>
</section>
```

### Section Header Specifications
```
Alignment: text-center
Spacing Below: mb-16 (64px) → mb-20 (80px)

Heading:
  Size: text-4xl (36px) → text-5xl (48px) → text-6xl (60px)
  Weight: font-bold (700)
  Color: text-white
  Spacing: mb-6 (24px below)

Description:
  Size: text-lg (18px) → text-xl (20px)
  Color: text-[TEXT_TERTIARY] (gray-400)
  Max Width: max-w-3xl mx-auto = 768px centered
```

### Grid Configuration
```
Grid Columns:
  Mobile: grid-cols-1 (stacked)
  Tablet: grid-cols-2 (2 columns, 3 rows)
  Desktop: grid-cols-3 (3 columns, 2 rows)

Gap:
  Mobile: gap-6 = 24px
  Desktop: gap-8 = 32px
```

### Feature Card Structure
```jsx
<motion.div
  className="group relative p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-[BRAND_PRIMARY]/50 transition-all duration-300"
  whileHover={{ y: -5 }}
>
  {/* Glow effect overlay */}
  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[BRAND_PRIMARY]/0 to-[BRAND_PRIMARY]/0 group-hover:from-[BRAND_PRIMARY]/10 group-hover:to-transparent transition-all duration-300" />

  <div className="relative">
    {/* Icon container */}
    <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-[BRAND_PRIMARY]/10 text-[BRAND_PRIMARY] mb-6 group-hover:scale-110 transition-transform duration-300">
      <svg className="w-8 h-8">{/* Icon */}</svg>
    </div>

    {/* Title */}
    <h3 className="text-xl font-bold text-white mb-3">
      [FEATURE_TITLE]
    </h3>

    {/* Description */}
    <p className="text-gray-400 leading-relaxed">
      [FEATURE_DESCRIPTION]
    </p>
  </div>
</motion.div>
```

### Card Specifications

**Container:**
```
Position: relative (for absolute children)
Group: group (enables group-hover children)
Padding: p-8 = 32px all sides
Border Radius: rounded-2xl = 16px
Background: bg-zinc-900/50 (semi-transparent dark)
Border: border border-zinc-800 (1px gray)

Hover Effects:
  Border: hover:border-[BRAND_PRIMARY]/50 (brand color at 50%)
  Transition: transition-all duration-300 (smooth)
  Y-axis lift: whileHover={{ y: -5 }} (5px up)
```

**Glow Effect Layer:**
```
Position: absolute inset-0 (full coverage)
Border Radius: rounded-2xl (matches card)
Background: Gradient from transparent to transparent
Hover: Gradient changes to brand color (10%) at top, transparent at bottom
Transition: transition-all duration-300

Code:
  from-[BRAND_PRIMARY]/0 to-[BRAND_PRIMARY]/0  → Default
  group-hover:from-[BRAND_PRIMARY]/10 group-hover:to-transparent  → Hover
```

**Icon Container:**
```
Display: inline-flex items-center justify-center
Size: w-16 h-16 = 64px × 64px
Border Radius: rounded-xl = 12px
Background: bg-[BRAND_PRIMARY]/10 (brand color at 10%)
Text Color: text-[BRAND_PRIMARY] (icons inherit this)
Spacing Below: mb-6 = 24px

Hover: group-hover:scale-110 (scales to 110%)
Transition: transition-transform duration-300
```

**Icon:**
```
Size: w-8 h-8 = 32px × 32px
Color: Inherits from parent (brand color)
```

**Title (H3):**
```
Size: text-xl = 20px
Weight: font-bold (700)
Color: text-white
Spacing Below: mb-3 = 12px
```

**Description:**
```
Size: text-base = 16px (default, not specified)
Color: text-[TEXT_TERTIARY] (gray-400)
Line Height: leading-relaxed = 1.625
Max Width: None (fills card width)
```

### Animation Pattern
```jsx
// Card entrance (staggered)
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5, delay: index * 0.1 }}
  whileHover={{ y: -5 }}
>
```

**Specifications:**
```
Initial: opacity 0, 20px down
Animate: opacity 1, back to position
Trigger: When scrolled into view
Once: Only animates first time
Duration: 500ms per card
Stagger: 100ms delay between cards (multiply by index)

Hover: Y-axis lifts 5px up
```

---

## 3.3 Numbered Steps/Timeline Section Template

### Overall Structure
```jsx
<section className="relative py-24 md:py-32 px-6 md:px-12 lg:px-16 bg-gradient-to-b from-transparent via-zinc-950/50 to-transparent">
  <div className="max-w-7xl mx-auto">
    {/* Section Header */}
    <motion.div className="text-center mb-20">
      <h2>[SECTION_HEADING]</h2>
      <p>[SECTION_DESCRIPTION]</p>
    </motion.div>

    {/* Timeline Container */}
    <div className="relative">
      {/* Connecting Line (Desktop only) */}
      <div className="hidden lg:block absolute top-[80px] left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[BRAND_PRIMARY]/20 to-transparent" />

      {/* Steps Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
        {/* Step cards */}
      </div>
    </div>
  </div>
</section>
```

### Section Background
```
Background: bg-gradient-to-b from-transparent via-zinc-950/50 to-transparent
Purpose: Subtle vertical gradient creates depth
```

### Connecting Line (Desktop Only)
```
Visibility: hidden lg:block (only shows on desktop)
Position: absolute top-[80px] (80px from top - aligns with badge centers)
Width: left-0 right-0 (full width)
Height: h-1 = 4px
Background: bg-gradient-to-r from-transparent via-[BRAND_PRIMARY]/20 to-transparent
Purpose: Connects step badges horizontally
```

### Grid Configuration
```
Columns:
  Mobile: grid-cols-1 (stacked)
  Tablet: grid-cols-2 (2×2 grid)
  Desktop: grid-cols-4 (1×4 horizontal)

Gap:
  Mobile/Tablet: gap-8 = 32px
  Desktop: gap-4 = 16px (tighter when horizontal)
```

### Step Card Structure
```jsx
<motion.div className="relative">
  <div className="relative group">
    {/* Number Badge */}
    <div className="flex items-center justify-center mb-6">
      <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-[BRAND_PRIMARY] to-orange-600 shadow-lg shadow-[BRAND_PRIMARY]/20 group-hover:shadow-[BRAND_PRIMARY]/40 transition-all duration-500 flex items-center justify-center">
        <span className="text-2xl font-bold text-black">[STEP_NUMBER]</span>

        {/* Pulse effect */}
        <div className="absolute inset-0 rounded-full bg-[BRAND_PRIMARY] opacity-0 group-hover:opacity-20 group-hover:scale-150 transition-all duration-500" />
      </div>
    </div>

    {/* Icon */}
    <div className="flex justify-center mb-6">
      <svg className="w-12 h-12 text-[BRAND_PRIMARY] group-hover:scale-110 transition-transform duration-300">
        {/* Icon */}
      </svg>
    </div>

    {/* Content */}
    <div className="text-center">
      <h3 className="text-2xl font-bold text-white mb-3">[STEP_TITLE]</h3>
      <p className="text-gray-400">[STEP_DESCRIPTION]</p>
    </div>

    {/* Arrow (Desktop only, except last step) */}
    <div className="hidden lg:block absolute top-[40px] right-[-20px]">
      <svg className="w-8 h-8 text-[BRAND_PRIMARY]/40">{/* Right arrow */}</svg>
    </div>
  </div>
</motion.div>
```

### Number Badge Specifications
```
Container:
  Display: flex items-center justify-center
  Spacing: mb-6 = 24px below

Badge:
  Size: w-20 h-20 = 80px × 80px
  Shape: rounded-full (perfect circle)
  Background: bg-gradient-to-br from-[BRAND_PRIMARY] to-orange-600
  Shadow: shadow-lg shadow-[BRAND_PRIMARY]/20
  Hover Shadow: group-hover:shadow-[BRAND_PRIMARY]/40
  Transition: transition-all duration-500

Number:
  Size: text-2xl = 24px
  Weight: font-bold (700)
  Color: text-black (high contrast on bright badge)

Pulse Effect:
  Position: absolute inset-0 (covers badge)
  Shape: rounded-full
  Background: bg-[BRAND_PRIMARY]
  Default: opacity-0 (invisible)
  Hover: opacity-20 scale-150 (20% visible, 150% size)
  Transition: transition-all duration-500
```

### Icon Specifications
```
Container: flex justify-center mb-6 (centered, 24px below)
Size: w-12 h-12 = 48px × 48px
Color: text-[BRAND_PRIMARY]
Hover: group-hover:scale-110 (10% larger)
Transition: transition-transform duration-300
```

### Title & Description
```
Container: text-center

Title (H3):
  Size: text-2xl = 24px
  Weight: font-bold (700)
  Color: text-white
  Spacing: mb-3 = 12px below

Description:
  Size: text-base = 16px (default)
  Color: text-[TEXT_TERTIARY] (gray-400)
```

### Arrow Connector
```
Visibility: hidden lg:block (desktop only)
Position: absolute top-[40px] right-[-20px]
  (40px from top aligns with badge center)
  (-20px right puts it between steps)
Size: w-8 h-8 = 32px × 32px
Color: text-[BRAND_PRIMARY]/40 (40% opacity)
Not shown on last step
```

### Animation
```jsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, delay: index * 0.2 }}
>
```

**Specifications:**
```
Entrance: Fade + slide up
Stagger: 200ms delay between steps (longer than cards)
Duration: 600ms per step
Trigger: On scroll into view
Once: Only first time
```

---

## 3.4 Interactive Demo Section Template

### Overall Structure
```jsx
<section className="relative py-24 md:py-32 px-6 md:px-12 lg:px-16">
  <div className="max-w-5xl mx-auto">
    {/* Section Header */}
    <motion.div className="text-center mb-12">
      <h2>[SECTION_HEADING]</h2>
      <p>[SECTION_DESCRIPTION]</p>
    </motion.div>

    {/* Demo Widget */}
    <motion.div className="relative p-8 md:p-12 rounded-3xl bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 shadow-2xl">
      {/* Input section */}
      {/* Analysis section (conditional) */}
      {/* Result section (conditional) */}
      {/* Indicator dots */}
    </motion.div>
  </div>
</section>
```

### Demo Widget Container
```
Padding: p-8 (32px) → p-12 (48px) on desktop
Border Radius: rounded-3xl = 24px
Background: bg-gradient-to-br from-zinc-900 to-zinc-950
Border: border border-zinc-800
Shadow: shadow-2xl (deep shadow)
Max Width: max-w-5xl = 1024px
```

### Input Section
```jsx
<div className="mb-8">
  <label className="block text-sm font-medium text-gray-400 mb-3">
    [INPUT_LABEL]
  </label>

  <div className="relative">
    <div className="flex items-center gap-3 px-6 py-5 rounded-xl bg-black/40 border border-zinc-700">
      <svg className="w-6 h-6 text-[BRAND_PRIMARY]">{/* Icon */}</svg>

      <AnimatePresence mode="wait">
        <motion.span
          key={currentIntent}
          className="text-lg text-white"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
        >
          [DYNAMIC_TEXT]
        </motion.span>
      </AnimatePresence>
    </div>
  </div>
</div>
```

**Specifications:**

Label:
```
Display: block
Size: text-sm = 14px
Weight: font-medium (500)
Color: text-[TEXT_TERTIARY] (gray-400)
Spacing: mb-3 = 12px below
```

Input Container:
```
Layout: flex items-center gap-3 (center items, 12px gap)
Padding: px-6 py-5 = 24px horizontal, 20px vertical
Border Radius: rounded-xl = 12px
Background: bg-black/40 (40% black)
Border: border border-zinc-700
```

Icon:
```
Size: w-6 h-6 = 24px × 24px
Color: text-[BRAND_PRIMARY]
```

Text:
```
Size: text-lg = 18px
Color: text-white
Animation: Fade + slide (y: 10 to 0)
```

### Analysis Section (Conditional)
```jsx
<AnimatePresence>
  {analyzing && (
    <motion.div
      className="mb-8"
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
    >
      <div className="p-6 rounded-xl bg-purple-500/10 border border-purple-500/20">
        {/* Header with spinner */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 rounded-full border-2 border-purple-400 border-t-transparent animate-spin" />
          <span className="text-purple-300 font-medium">[ANALYZING_TEXT]</span>
        </div>

        {/* Analysis items */}
        <div className="space-y-2 ml-11">
          {analysisSteps.map((step) => (
            <motion.div
              className="flex items-center gap-2 text-sm text-gray-400"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
              <span>{step}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )}
</AnimatePresence>
```

**Specifications:**

Container:
```
Padding: p-6 = 24px all sides
Border Radius: rounded-xl = 12px
Background: bg-purple-500/10 (purple at 10%)
Border: border border-purple-500/20 (purple at 20%)
Spacing: mb-8 = 32px below
Animation: Height 0 → auto (expands smoothly)
```

Loading Spinner:
```
Size: w-8 h-8 = 32px × 32px
Shape: rounded-full
Border: border-2 (2px thick)
Colors: border-purple-400 (main) + border-t-transparent (transparent top)
Animation: animate-spin (continuous rotation)
```

Status Text:
```
Size: text-base = 16px (default)
Color: text-purple-300
Weight: font-medium (500)
Spacing: gap-3 = 12px from spinner
```

Analysis Items:
```
Layout: space-y-2 = 8px vertical spacing
Margin: ml-11 (44px left - aligns with text, not spinner)

Item:
  Display: flex items-center gap-2
  Size: text-sm = 14px
  Color: text-[TEXT_TERTIARY] (gray-400)

Dot:
  Size: w-1.5 h-1.5 = 6px × 6px
  Shape: rounded-full
  Color: bg-green-400
```

### Result Section (Conditional)
```jsx
<AnimatePresence>
  {showResult && (
    <motion.div
      className="mb-8"
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
    >
      <div className="p-6 rounded-xl bg-green-500/10 border border-green-500/20">
        {/* Header with checkmark */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
            <svg className="w-5 h-5 text-black">{/* Checkmark */}</svg>
          </div>
          <span className="text-green-300 font-medium">[SUCCESS_TEXT]</span>
        </div>

        {/* Result data grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-lg bg-black/20">
            <div className="text-sm text-gray-400 mb-1">[DATA_LABEL]</div>
            <div className="text-lg font-semibold text-white">[DATA_VALUE]</div>
          </div>
          {/* More data items */}
        </div>
      </div>
    </motion.div>
  )}
</AnimatePresence>
```

**Specifications:**

Container:
```
Padding: p-6 = 24px
Border Radius: rounded-xl = 12px
Background: bg-green-500/10 (green at 10%)
Border: border border-green-500/20 (green at 20%)
Animation: Height 0 → auto
```

Checkmark Badge:
```
Size: w-8 h-8 = 32px × 32px
Shape: rounded-full
Background: bg-green-500 (solid green)
Display: flex items-center justify-center

Checkmark Icon:
  Size: w-5 h-5 = 20px × 20px
  Color: text-black (contrast on green)
```

Result Grid:
```
Grid: grid-cols-2 md:grid-cols-3
Gap: gap-4 = 16px

Data Item:
  Padding: p-4 = 16px
  Border Radius: rounded-lg = 8px
  Background: bg-black/20 (20% black)

Label:
  Size: text-sm = 14px
  Color: text-[TEXT_TERTIARY] (gray-400)
  Spacing: mb-1 = 4px below

Value:
  Size: text-lg = 18px
  Weight: font-semibold (600)
  Color: text-white
```

### Indicator Dots
```jsx
<div className="flex justify-center gap-2 mt-8">
  {intents.map((_, index) => (
    <button
      className={`w-2 h-2 rounded-full transition-all duration-300 ${
        index === currentIndex
          ? 'bg-[BRAND_PRIMARY] w-8'
          : 'bg-white/30 hover:bg-white/50'
      }`}
    />
  ))}
</div>
```

**Specifications:**
```
Container: flex justify-center gap-2 mt-8
  (Centered, 8px gap, 32px top margin)

Dot:
  Default Size: w-2 h-2 = 8px × 8px
  Active Width: w-8 = 32px (expands horizontally)
  Shape: rounded-full
  Default Color: bg-white/30
  Hover Color: bg-white/50
  Active Color: bg-[BRAND_PRIMARY]
  Transition: transition-all duration-300 (smooth expansion)
```

---

## 3.5 Stats/Social Proof Section Template

### Overall Structure
```jsx
<section className="relative py-24 md:py-32 px-6 md:px-12 lg:px-16 bg-gradient-to-b from-zinc-950/50 to-transparent">
  <div className="max-w-7xl mx-auto">
    {/* Stats Grid */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
      {/* 3 stat cards */}
    </div>

    {/* Trust Badge */}
    <motion.div className="text-center">
      {/* Badge content */}
    </motion.div>
  </div>
</section>
```

### Grid Configuration
```
Columns:
  Mobile: grid-cols-1 (stacked)
  Tablet/Desktop: grid-cols-3 (1 row of 3)

Gap: gap-8 = 32px consistent
Spacing below: mb-16 = 64px to trust badge
```

### Stat Card Template (3 Variations)

**Card 1 - Waitlist (Brand Color):**
```jsx
<motion.div className="relative p-8 rounded-2xl bg-gradient-to-br from-[BRAND_PRIMARY]/10 to-orange-600/5 border border-[BRAND_PRIMARY]/20">
  <div className="text-center">
    <div className="text-5xl md:text-6xl font-bold text-[BRAND_PRIMARY] mb-3">
      [NUMBER]+
    </div>
    <div className="text-gray-400 font-medium">[STAT_LABEL]</div>
    <div className="mt-4 flex items-center justify-center gap-2">
      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
      <span className="text-sm text-green-400">[STATUS_TEXT]</span>
    </div>
  </div>
</motion.div>
```

**Card 2 - Funding (Purple):**
```jsx
<motion.div className="relative p-8 rounded-2xl bg-gradient-to-br from-purple-500/10 to-purple-600/5 border border-purple-500/20">
  <div className="text-center">
    <div className="text-5xl md:text-6xl font-bold text-purple-400 mb-3">
      [AMOUNT]
    </div>
    <div className="text-gray-400 font-medium">[STAT_LABEL]</div>
    <div className="mt-4 text-sm text-gray-500">
      [SUBCOPY]
    </div>
  </div>
</motion.div>
```

**Card 3 - Protocols (Blue):**
```jsx
<motion.div className="relative p-8 rounded-2xl bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-500/20">
  <div className="text-center">
    <div className="text-5xl md:text-6xl font-bold text-blue-400 mb-3">
      [NUMBER]+
    </div>
    <div className="text-gray-400 font-medium">[STAT_LABEL]</div>
    <div className="mt-4 text-sm text-gray-500">
      [SUBCOPY]
    </div>
  </div>
</motion.div>
```

### Card Specifications

**Container:**
```
Padding: p-8 = 32px all sides
Border Radius: rounded-2xl = 16px
Content: text-center (all content centered)

Background Pattern (gradient from theme color):
  from-[THEME_COLOR]/10 to-[THEME_COLOR_DARK]/5

Border:
  border border-[THEME_COLOR]/20

Theme Colors:
  Card 1: [BRAND_PRIMARY] (orange)
  Card 2: purple-500/purple-400
  Card 3: blue-500/blue-400
```

**Number Display:**
```
Size: text-5xl (48px) → text-6xl (60px)
Weight: font-bold (700)
Color: Themed (orange/purple/blue)
Spacing: mb-3 = 12px below

Format: Can include symbols like "$" or "+"
```

**Label:**
```
Size: text-base = 16px (default)
Color: text-[TEXT_TERTIARY] (gray-400)
Weight: font-medium (500)
```

**Status Indicator (Card 1 only):**
```
Container: mt-4 flex items-center justify-center gap-2
  (16px top margin, centered, 8px gap)

Pulse Dot:
  Size: w-2 h-2 = 8px × 8px
  Shape: rounded-full
  Color: bg-green-500
  Animation: animate-pulse (continuous pulse)

Status Text:
  Size: text-sm = 14px
  Color: text-green-400
```

**Subcopy (Cards 2 & 3):**
```
Spacing: mt-4 = 16px top margin
Size: text-sm = 14px
Color: text-gray-500
```

### Trust Badge
```jsx
<motion.div className="text-center">
  <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-zinc-900 border border-zinc-800">
    <svg className="w-6 h-6 text-[BRAND_PRIMARY]">{/* Badge icon */}</svg>
    <span className="text-gray-300 font-medium">
      [TRUST_MESSAGE]
    </span>
  </div>
</motion.div>
```

**Specifications:**
```
Container: inline-flex items-center gap-3
Padding: px-8 py-4 = 32px horizontal, 16px vertical
Shape: rounded-full (pill shape)
Background: bg-zinc-900
Border: border border-zinc-800

Icon:
  Size: w-6 h-6 = 24px × 24px
  Color: text-[BRAND_PRIMARY]

Text:
  Size: text-base = 16px (default)
  Color: text-gray-300
  Weight: font-medium (500)
```

### Animation
```jsx
// Stat cards (staggered)
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, delay: index * 0.1 }}
>

// Trust badge
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, delay: 0.3 }}
>
```

---

## 3.6 Final CTA Section Template

### Overall Structure
```jsx
<section className="relative py-24 md:py-32 px-6 md:px-12 lg:px-16">
  <div className="max-w-4xl mx-auto">
    <motion.div className="relative p-12 md:p-16 rounded-3xl bg-gradient-to-br from-[BRAND_PRIMARY]/20 via-purple-500/10 to-blue-500/10 border border-[BRAND_PRIMARY]/30 overflow-hidden">
      {/* Animated orb 1 */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[BRAND_PRIMARY]/20 rounded-full blur-3xl animate-pulse" />

      {/* Animated orb 2 */}
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      {/* Content */}
      <div className="relative z-10 text-center">
        <motion.h2>[HEADING]</motion.h2>
        <motion.p>[DESCRIPTION]</motion.p>

        {/* Form or success message */}

        {/* Social links */}
      </div>
    </motion.div>
  </div>
</section>
```

### CTA Container Specifications
```
Padding: p-12 (48px) → p-16 (64px) on desktop
Border Radius: rounded-3xl = 24px
Background: Multi-color gradient
  from-[BRAND_PRIMARY]/20 via-purple-500/10 to-blue-500/10
Border: border border-[BRAND_PRIMARY]/30
Overflow: overflow-hidden (clips orbs)
Max Width: max-w-4xl = 896px
```

### Animated Orbs
```
Purpose: Floating background glow effect

Orb 1 (Top-right):
  Position: absolute top-0 right-0
  Size: w-64 h-64 = 256px × 256px
  Shape: rounded-full
  Color: bg-[BRAND_PRIMARY]/20
  Blur: blur-3xl (very blurred)
  Animation: animate-pulse (breathing effect)

Orb 2 (Bottom-left):
  Position: absolute bottom-0 left-0
  Size: w-64 h-64 = 256px × 256px
  Shape: rounded-full
  Color: bg-purple-500/20
  Blur: blur-3xl
  Animation: animate-pulse with delay
  Delay: style={{ animationDelay: '1s' }}
```

### Heading & Description
```
Container: relative z-10 text-center (above orbs, centered)

Heading (H2):
  Size: text-4xl (36px) → text-5xl (48px) → text-6xl (60px)
  Weight: font-bold (700)
  Color: text-white
  Spacing: mb-6 = 24px below

Description:
  Size: text-lg (18px) → text-xl (20px)
  Color: text-gray-300
  Max Width: max-w-2xl mx-auto = 672px centered
  Spacing: mb-12 = 48px below
```

### CTA Form
```jsx
<motion.form className="max-w-xl mx-auto mb-8">
  <div className="flex flex-col sm:flex-row items-center gap-4">
    <input
      type="email"
      placeholder="[PLACEHOLDER]"
      className="flex-1 w-full px-6 py-5 rounded-xl bg-black/60 border border-zinc-700 focus:border-[BRAND_PRIMARY] focus:outline-none text-white placeholder:text-gray-500 disabled:opacity-50"
    />

    <button
      type="submit"
      className="w-full sm:w-auto px-8 py-5 bg-[BRAND_PRIMARY] text-black font-bold rounded-xl hover:bg-orange-500 hover:scale-105 active:scale-95 shadow-lg shadow-[BRAND_PRIMARY]/20 hover:shadow-[BRAND_PRIMARY]/40 transition-all duration-200 flex items-center justify-center gap-2"
    >
      {loading ? (
        <>
          <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
          <span>[LOADING_TEXT]</span>
        </>
      ) : (
        <span>[BUTTON_TEXT]</span>
      )}
    </button>
  </div>
</motion.form>
```

**Specifications:**

Form Container:
```
Max Width: max-w-xl mx-auto = 576px centered
Spacing: mb-8 = 32px below
```

Form Layout:
```
Display: flex flex-col sm:flex-row items-center gap-4
  Mobile: Stacked (column)
  Desktop: Horizontal (row)
  Gap: 16px between input and button
```

Input:
```
Flex: flex-1 w-full (grows to fill, full width mobile)
Padding: px-6 py-5 = 24px horizontal, 20px vertical
Border Radius: rounded-xl = 12px
Background: bg-black/60 (60% black - semi-transparent)
Border: border border-zinc-700
Focus: focus:border-[BRAND_PRIMARY] focus:outline-none
Text: text-white
Placeholder: placeholder:text-gray-500
Disabled: disabled:opacity-50
```

Button:
```
Width: w-full sm:w-auto (full mobile, auto desktop)
Padding: px-8 py-5 = 32px horizontal, 20px vertical
Border Radius: rounded-xl = 12px
Background: bg-[BRAND_PRIMARY]
Text Color: text-black
Font Weight: font-bold (700)

Hover:
  Background: hover:bg-orange-500
  Scale: hover:scale-105 (5% larger)
  Shadow: hover:shadow-[BRAND_PRIMARY]/40

Active:
  Scale: active:scale-95 (5% smaller - pressed effect)

Shadow:
  Default: shadow-lg shadow-[BRAND_PRIMARY]/20
  Hover: shadow-[BRAND_PRIMARY]/40

Transition: transition-all duration-200

Layout: flex items-center justify-center gap-2
```

Loading Spinner:
```
Size: w-5 h-5 = 20px × 20px
Border: border-2 (2px thick)
Colors: border-black + border-t-transparent
Shape: rounded-full
Animation: animate-spin
Spacing: gap-2 = 8px from text
```

### Success Message
```jsx
<motion.div className="text-center mb-8">
  <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-green-500/20 border border-green-500/50 mb-4">
    <svg className="w-6 h-6 text-green-400">{/* Checkmark */}</svg>
    <span className="text-green-300 text-lg font-medium">[SUCCESS_MESSAGE]</span>
  </div>
  <p className="text-gray-400">[FOLLOW_UP_TEXT]</p>
</motion.div>
```

**Specifications:**
```
Container: inline-flex items-center gap-3
Padding: px-8 py-4 = 32px horizontal, 16px vertical
Shape: rounded-full (pill)
Background: bg-green-500/20 (20% green)
Border: border border-green-500/50 (50% green)
Spacing: mb-4 = 16px below

Icon:
  Size: w-6 h-6 = 24px × 24px
  Color: text-green-400

Text:
  Size: text-lg = 18px
  Color: text-green-300
  Weight: font-medium (500)

Follow-up:
  Size: text-base = 16px (default)
  Color: text-[TEXT_TERTIARY] (gray-400)
```

### Social Links
```jsx
<motion.div className="mt-12 flex items-center justify-center gap-6">
  <span className="text-gray-400">[SOCIAL_PROMPT]</span>

  <a href="[X_URL]" className="text-gray-400 hover:text-[BRAND_PRIMARY] transition-colors">
    <svg className="w-6 h-6">{/* X icon */}</svg>
  </a>

  <a href="[TELEGRAM_URL]" className="text-gray-400 hover:text-[BRAND_PRIMARY] transition-colors">
    <svg className="w-6 h-6">{/* Telegram icon */}</svg>
  </a>
</motion.div>
```

**Specifications:**
```
Container: flex items-center justify-center gap-6
  (Centered, 24px gaps)
Spacing: mt-12 = 48px above

Prompt Text:
  Size: text-base = 16px (default)
  Color: text-[TEXT_TERTIARY] (gray-400)

Icons:
  Size: w-6 h-6 = 24px × 24px
  Color: text-gray-400
  Hover: hover:text-[BRAND_PRIMARY]
  Transition: transition-colors
```

---

## 3.7 Header Template

### Structure
```jsx
<motion.header className="fixed top-0 left-0 right-0 z-50 px-6 py-6 md:px-12 md:py-8 lg:px-16">
  <div className="max-w-[1600px] mx-auto">
    <div className="flex items-center justify-between">
      {/* Logo */}
      <div className="relative w-32 h-8 md:w-48 md:h-12">
        <Image src="/logo.svg" alt="[BRAND_NAME]" fill style={{ objectFit: 'contain' }} priority />
      </div>

      {/* Social Links */}
      <div className="flex items-center gap-5 md:gap-6">
        <motion.a href="[X_URL]" animate={{ scale: [1, 1.15, 1] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
          <svg className="w-7 h-7 md:w-9 md:h-9">{/* X icon */}</svg>
        </motion.a>

        <motion.a href="[TELEGRAM_URL]" animate={{ scale: [1, 1.15, 1] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}>
          <svg className="w-7 h-7 md:w-9 md:h-9">{/* Telegram icon */}</svg>
        </motion.a>
      </div>
    </div>
  </div>
</motion.header>
```

### Specifications

**Container:**
```
Position: fixed top-0 left-0 right-0
Z-index: z-50 (always on top)
Padding:
  Horizontal: px-6 → px-12 → px-16
  Vertical: py-6 → py-8
Max Width: max-w-[1600px] mx-auto
Layout: flex items-center justify-between
```

**Logo:**
```
Container: relative (for Next.js Image)
Size:
  Mobile: w-32 h-8 (128px × 32px)
  Desktop: w-48 h-12 (192px × 48px)
Image: fill with object-fit contain
Priority: Load immediately
```

**Social Icons:**
```
Container: flex items-center gap-5 md:gap-6
  (20px → 24px gap)

Icon Size:
  Mobile: w-7 h-7 (28px × 28px)
  Desktop: w-9 h-9 (36px × 36px)

Color: text-gray-400
Hover: hover:text-[BRAND_PRIMARY]
Transition: transition-colors duration-200

Pulse Animation:
  Scale: [1, 1.15, 1] (0% → 15% → 0%)
  Duration: 2s
  Repeat: Infinite
  Easing: easeInOut
  Delay: 0s for first icon, 1s for second (alternating)
```

---

## 3.8 Footer Template

### Structure
```jsx
<footer className="relative border-t border-zinc-800 py-12 px-6 md:px-12 lg:px-16">
  <div className="max-w-7xl mx-auto">
    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
      {/* Copyright */}
      <div className="flex items-center gap-3">
        <div className="text-gray-400 text-sm">
          © [YEAR] [BRAND_NAME]. All rights reserved.
        </div>
      </div>

      {/* Links */}
      <div className="flex items-center gap-8">
        <a href="[X_URL]" className="text-gray-400 hover:text-[BRAND_PRIMARY] transition-colors text-sm">
          [X_LABEL]
        </a>
        <a href="[TELEGRAM_URL]" className="text-gray-400 hover:text-[BRAND_PRIMARY] transition-colors text-sm">
          [TELEGRAM_LABEL]
        </a>
      </div>
    </div>
  </div>
</footer>
```

### Specifications
```
Border: border-t border-zinc-800 (top border only)
Padding: py-12 px-6 md:px-12 lg:px-16
  (48px vertical, responsive horizontal)
Max Width: max-w-7xl mx-auto

Layout:
  flex flex-col md:flex-row items-center justify-between gap-6
  Mobile: Stacked (column)
  Desktop: Horizontal (row) with space-between

Copyright:
  Size: text-sm = 14px
  Color: text-[TEXT_TERTIARY] (gray-400)

Links:
  Gap: gap-8 = 32px between links
  Size: text-sm = 14px
  Color: text-gray-400
  Hover: hover:text-[BRAND_PRIMARY]
  Transition: transition-colors
```

---

# 4. Background Layer System

## 4.1 Fixed Background Component

### Structure
```jsx
<div className="fixed inset-0 -z-10 overflow-hidden bg-black">
  {/* Gradient Layer 1 - Top glow */}
  <div
    className="absolute inset-0"
    style={{
      background: 'radial-gradient(ellipse at top, rgba(40, 40, 40, 0.6) 0%, transparent 50%)'
    }}
  />

  {/* Gradient Layer 2 - Center warm glow */}
  <div
    className="absolute inset-0"
    style={{
      background: 'radial-gradient(ellipse at center, rgba(50, 35, 28, 0.4) 0%, transparent 50%)'
    }}
  />

  {/* Noise Texture Layer */}
  <div className="absolute inset-0 opacity-20">
    {/* SVG noise filter */}
  </div>

  {/* Vignette Layer */}
  <div
    className="absolute inset-0"
    style={{
      background: 'radial-gradient(circle at center, transparent 40%, rgba(0, 0, 0, 0.6) 100%)'
    }}
  />
</div>
```

### Layer Specifications

**Container:**
```
Position: fixed inset-0 (covers viewport, doesn't scroll)
Z-index: -z-10 (behind all content)
Overflow: overflow-hidden (clips layers)
Base Color: bg-black (#000000)
```

**Layer 1 - Top Glow:**
```
Type: Radial gradient
Center: Top of viewport
Colors:
  Inner (0%): rgba(40, 40, 40, 0.6) - Gray at 60%
  Outer (50%): transparent
Purpose: Subtle top lighting
```

**Layer 2 - Center Warm Glow:**
```
Type: Radial gradient
Center: Center of viewport
Colors:
  Inner (0%): rgba(50, 35, 28, 0.4) - Warm brown at 40%
  Outer (50%): transparent
Purpose: Warm ambient glow (complements orange brand)
```

**Layer 3 - Noise Texture:**
```
Opacity: opacity-20 (20%)
Type: SVG fractal noise filter
Purpose: Adds subtle grain/texture for depth
Note: Can use CSS background-image with noise texture PNG
```

**Layer 4 - Vignette:**
```
Type: Radial gradient
Center: Center of viewport
Colors:
  Inner (40%): transparent - center stays bright
  Outer (100%): rgba(0, 0, 0, 0.6) - Dark edges
Purpose: Darkens edges, focuses attention on center
```

### Layering Strategy
```
All layers use: position: absolute; inset: 0;
  (Overlaps each other, combines through transparency)

Blend Mode: Normal (default) - layers stack naturally
Z-order: Bottom to top as listed (CSS order)
```

---

# 5. Animation Playbook

## 5.1 Entrance Animations

### Fade + Slide Up (Most Common)
```jsx
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.6 }}
```

**Usage:**
- Section headers
- Cards on scroll
- Content blocks

**Timing:**
- Duration: 600ms
- Delay: Often staggered (multiply by index)
- Easing: Default (cubic-bezier(0.16, 1, 0.3, 1))

### Fade + Slide from Left (Hero Elements)
```jsx
initial={{ opacity: 0, x: -20 }}
animate={{ opacity: 1, x: 0 }}
transition={{ duration: 0.8, delay: [DELAY] }}
```

**Usage:**
- Hero headline parts
- Side-entering elements

**Timing:**
- Duration: 800ms
- Delay: Staggered (0.2s increments)

### Scale In (Success States)
```jsx
initial={{ opacity: 0, scale: 0.95 }}
animate={{ opacity: 1, scale: 1 }}
transition={{ duration: 0.8 }}
```

**Usage:**
- Success messages
- Confirmation dialogs
- Modal-like content

**Timing:**
- Duration: 800ms
- No delay typically

### Height Animation (Expanding Sections)
```jsx
initial={{ opacity: 0, height: 0 }}
animate={{ opacity: 1, height: 'auto' }}
exit={{ opacity: 0, height: 0 }}
```

**Usage:**
- Accordion-style reveals
- Analysis/result sections in demo
- Conditional content

**Timing:**
- Duration: 300-500ms (faster than other animations)
- Use AnimatePresence wrapper

---

## 5.2 Scroll-Triggered Animations

### Standard Pattern
```jsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
```

**Configuration:**
```
whileInView: Triggers when element enters viewport
viewport={{ once: true }}: Only animates first time (doesn't repeat)
Threshold: Default (~10% visible)
```

### Staggered Cards Pattern
```jsx
{items.map((item, index) => (
  <motion.div
    key={item.id}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
```

**Timing:**
```
Base duration: 500ms
Stagger delay: 100ms per item
Formula: index * 0.1
Result: Cards animate in sequence
```

---

## 5.3 Hover Effects

### Card Lift
```jsx
<motion.div
  whileHover={{ y: -5 }}
  transition={{ duration: 0.3 }}
>
```

**Specifications:**
```
Movement: -5px up (y-axis)
Duration: 300ms
Easing: Default smooth
```

### Icon Scale
```jsx
<svg className="... group-hover:scale-110 transition-transform duration-300">
```

**Specifications:**
```
Scale: 110% (1.1x)
Duration: 300ms
Trigger: Parent group hover
```

### Color Transition
```jsx
<a className="text-gray-400 hover:text-[BRAND_PRIMARY] transition-colors duration-200">
```

**Specifications:**
```
Property: color only (transition-colors)
Duration: 200ms
States: Default → Brand color
```

### Border Glow
```jsx
<div className="border border-zinc-800 hover:border-[BRAND_PRIMARY]/50 transition-all duration-300">
```

**Specifications:**
```
Property: border-color
Duration: 300ms
States: Zinc-800 → Brand at 50%
```

### Button Scale + Shadow
```jsx
<button className="hover:scale-105 active:scale-95 shadow-lg hover:shadow-[BRAND_PRIMARY]/40 transition-all duration-200">
```

**Specifications:**
```
Hover Scale: 105% (1.05x)
Active Scale: 95% (0.95x - pressed effect)
Shadow: Enhances from 20% to 40% opacity
Duration: 200ms
Properties: All (scale + shadow)
```

### Gradient Glow (Card Hover)
```jsx
<div className="absolute inset-0 bg-gradient-to-br from-[BRAND_PRIMARY]/0 to-[BRAND_PRIMARY]/0 group-hover:from-[BRAND_PRIMARY]/10 group-hover:to-transparent transition-all duration-300" />
```

**Specifications:**
```
Default: Transparent gradient
Hover: Brand color 10% at top, transparent at bottom
Duration: 300ms
Effect: Subtle top-left glow
```

---

## 5.4 Continuous Animations

### Pulse (Breathing Effect)
```jsx
<div className="animate-pulse">
```

**Specifications:**
```
Duration: ~2s (Tailwind default)
Effect: Opacity oscillates
Usage: Status indicators, background orbs
```

### Spin (Loading)
```jsx
<div className="animate-spin">
```

**Specifications:**
```
Duration: ~1s (Tailwind default)
Effect: 360° rotation
Usage: Loading spinners
```

### Scale Pulse (Social Icons)
```jsx
<motion.a
  animate={{ scale: [1, 1.15, 1] }}
  transition={{
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut"
  }}
>
```

**Specifications:**
```
Scale Range: 100% → 115% → 100%
Duration: 2s per cycle
Repeat: Infinite
Easing: easeInOut (smooth in/out)
Stagger: Add delay for alternating effect
```

---

## 5.5 Animation Timing Reference

### Duration Values
```
200ms: Fast interactions (button hover, color change)
300ms: Standard interactions (icon scale, border change)
500ms: Moderate transitions (card entrance)
600ms: Section entrances (scroll-based)
800ms: Hero elements (important content)
1200ms: Large background changes
2000ms: Continuous loops (pulse, breathing)
```

### Easing Functions
```
Custom (Primary):
  cubic-bezier(0.16, 1, 0.3, 1)
  Character: Apple-style smooth deceleration
  Usage: All Framer Motion animations

Standard:
  ease-in-out
  Usage: Continuous loops, Tailwind animations

Linear:
  linear
  Usage: Spinners, constant motion
```

### Stagger Timing
```
Fast: 0.1s (100ms) - Card grids
Medium: 0.2s (200ms) - Timeline steps, Hero elements
Formula: delay: index * [STAGGER_VALUE]
```

---

# 6. Implementation Guide

## 6.1 Tailwind Configuration

### Custom Colors Setup
```js
// tailwind.config.ts
export default {
  theme: {
    extend: {
      colors: {
        'brand-primary': '[BRAND_PRIMARY_COLOR]',    // e.g., #F78140
        'brand-black': '[BG_PRIMARY_COLOR]',         // e.g., #0A0A0A
        'brand-charcoal': '[BG_SECONDARY_COLOR]',    // e.g., #1F1F1F
        'brand-light': '[TEXT_PRIMARY_COLOR]',       // e.g., #F5F5F5
      },
    },
  },
}
```

### Custom Fonts Setup
```js
// tailwind.config.ts
import type { Config } from 'tailwindcss'

export default {
  theme: {
    extend: {
      fontFamily: {
        sans: ['[FONT_BODY]', 'sans-serif'],      // e.g., Space Grotesk
        display: ['[FONT_DISPLAY]', 'sans-serif'], // e.g., Norwester
      },
    },
  },
} satisfies Config
```

### Font Files
```css
/* app/globals.css */
@font-face {
  font-family: '[FONT_BODY]';
  src: url('/fonts/[FONT_BODY_FILE].ttf') format('truetype');
  font-weight: 300 700; /* Variable font range */
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: '[FONT_DISPLAY]';
  src: url('/fonts/[FONT_DISPLAY_FILE].otf') format('opentype');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}
```

---

## 6.2 Framer Motion Setup

### Installation
```bash
npm install framer-motion
```

### Basic Usage Pattern
```jsx
import { motion } from 'framer-motion'

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  {/* Content */}
</motion.div>
```

### AnimatePresence for Conditional Content
```jsx
import { AnimatePresence } from 'framer-motion'

<AnimatePresence mode="wait">
  {show && (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
    >
      {/* Content */}
    </motion.div>
  )}
</AnimatePresence>
```

---

## 6.3 Customization Workflow

### Step 1: Replace Colors
1. Choose your brand color: `[BRAND_PRIMARY]`
2. Update `tailwind.config.ts` with your color
3. Find-and-replace all instances of:
   - `bg-brand-orange` → `bg-brand-primary`
   - `text-brand-orange` → `text-brand-primary`
   - `border-brand-orange` → `border-brand-primary`

### Step 2: Replace Fonts
1. Add your font files to `/public/fonts/`
2. Update `globals.css` with your font-face declarations
3. Update `tailwind.config.ts` fontFamily
4. Replace `[FONT_BODY]` and `[FONT_DISPLAY]` throughout

### Step 3: Replace Content
1. Search for placeholders:
   - `[HEADLINE_TEXT]`
   - `[SUBHEADING_TEXT]`
   - `[BUTTON_TEXT]`
   - `[FEATURE_TITLE]`
   - etc.
2. Replace with your content
3. Maintain text length similar to original for layout balance

### Step 4: Adjust Spacing (Optional)
1. Find-and-replace spacing values if needed:
   - `py-24 md:py-32` → Your values
   - `px-6 md:px-12` → Your values
2. Keep ratios consistent (e.g., if reducing by 25%, reduce all)

### Step 5: Modify Animations (Optional)
1. Adjust duration values:
   - `duration: 0.6` → Your timing
2. Adjust easing:
   - `ease: [0.16, 1, 0.3, 1]` → Your easing
3. Keep stagger ratios consistent

---

# 7. Quick Reference Charts

## 7.1 Spacing Reference

| Context | Mobile (base) | Tablet (md) | Desktop (lg) | XL |
|---------|---------------|-------------|--------------|-----|
| **Section Vertical Padding** |
| Standard sections | py-24 (96px) | py-32 (128px) | py-32 | py-32 |
| Shorter sections | py-16 (64px) | py-24 (96px) | py-24 | py-24 |
| Footer | py-12 (48px) | py-12 | py-12 | py-12 |
| **Section Horizontal Padding** |
| Most sections | px-6 (24px) | px-12 (48px) | px-16 (64px) | px-16 |
| Hero section | px-6 (24px) | px-12 (48px) | px-16 (64px) | px-24 (96px) |
| **Card Padding** |
| Feature cards | p-8 (32px) | p-8 | p-8 | p-8 |
| Demo widget | p-8 (32px) | p-12 (48px) | p-12 | p-12 |
| CTA card | p-12 (48px) | p-16 (64px) | p-16 | p-16 |
| Stat cards | p-8 (32px) | p-8 | p-8 | p-8 |
| **Margins** |
| Hero title → subtitle | mb-8 (32px) | mb-12 (48px) | mb-12 | mb-12 |
| Hero subtitle → form | mb-10 (40px) | mb-12 (48px) | mb-12 | mb-12 |
| Hero form → indicators | mb-8 (32px) | mb-8 | mb-8 | mb-8 |
| Section header → content | mb-16 (64px) | mb-20 (80px) | mb-20 | mb-20 |
| Heading → description | mb-6 (24px) | mb-6 | mb-6 | mb-6 |
| Icon → title | mb-6 (24px) | mb-6 | mb-6 | mb-6 |
| Title → description | mb-3 (12px) | mb-3 | mb-3 | mb-3 |
| **Gaps** |
| Feature grid | gap-6 (24px) | gap-8 (32px) | gap-8 | gap-8 |
| Timeline grid | gap-8 (32px) | gap-8 (32px) | gap-4 (16px) | gap-4 |
| Stats grid | gap-8 (32px) | gap-8 | gap-8 | gap-8 |
| Icon groups | gap-5 (20px) | gap-6 (24px) | gap-6 | gap-6 |
| Form elements | gap-4 (16px) | gap-4 | gap-4 | gap-4 |
| **Input/Button Padding** |
| Email input | px-6 py-4 (24×16px) | - | - | - |
| Small button | px-6 py-4 (24×16px) | px-8 py-4 (32×16px) | - | - |
| Large button | px-8 py-5 (32×20px) | px-8 py-5 | - | - |

---

## 7.2 Color Reference

| Element Type | Color | Hex/Value | Usage |
|--------------|-------|-----------|--------|
| **Primary** |
| Brand accent | [BRAND_PRIMARY] | #F78140 | Buttons, hover states, accents |
| Brand at 10% | bg-[BRAND_PRIMARY]/10 | rgba(247,129,64,0.1) | Icon backgrounds, subtle fills |
| Brand at 20% | border-[BRAND_PRIMARY]/20 | rgba(247,129,64,0.2) | Borders, dividers |
| Brand at 50% | hover:border-[BRAND_PRIMARY]/50 | rgba(247,129,64,0.5) | Hover borders |
| **Backgrounds** |
| Main background | bg-black | #000000 | Page background |
| Secondary background | bg-[BG_SECONDARY] | #1F1F1F | Card backgrounds |
| Card background | bg-zinc-900/50 | rgba(24,24,27,0.5) | Semi-transparent cards |
| Dark card | bg-zinc-950 | #09090B | Darker card elements |
| Input background | bg-black/60 | rgba(0,0,0,0.6) | Form inputs |
| **Text** |
| Primary text | text-white | #FFFFFF | Headlines, important text |
| Secondary text | text-gray-300 | #D4D4D8 | Subheadings |
| Tertiary text | text-gray-400 | #A1A1AA | Body text, descriptions |
| Muted text | text-gray-500 | #71717A | Labels, subtle text |
| Placeholder | placeholder:text-gray-600 | #52525B | Input placeholders |
| **Borders** |
| Default border | border-zinc-800 | #27272A | Standard borders |
| Secondary border | border-zinc-700 | #3F3F46 | Input borders |
| Hover border | hover:border-[BRAND_PRIMARY]/50 | - | Interactive borders |
| **Semantic** |
| Success | bg-green-500 | #22C55E | Success states |
| Success text | text-green-400 | #4ADE80 | Success text |
| Success bg | bg-green-500/10 | rgba(34,197,94,0.1) | Success backgrounds |
| Error | text-red-400 | #F87171 | Error states |
| Info | text-purple-400 | #A78BFA | Analysis states |
| Info bg | bg-purple-500/10 | rgba(168,139,250,0.1) | Analysis backgrounds |
| Data | text-blue-400 | #60A5FA | Protocol stats |

---

## 7.3 Typography Reference

| Component | Element | Mobile | Tablet (md) | Desktop (lg) | XL | Weight | Color |
|-----------|---------|--------|-------------|--------------|-----|--------|-------|
| **Hero** |
| Main headline | H1 | 60px (text-6xl) | 72px (text-7xl) | 96px (text-8xl) | 128px (text-9xl) | Bold (700) | White + Gray-500 |
| Subheading | P | 16px (text-base) | 18px (text-lg) | 20px (text-xl) | - | Normal (400) | Gray-400 |
| **Sections** |
| Section heading | H2 | 36px (text-4xl) | 48px (text-5xl) | 60px (text-6xl) | - | Bold (700) | White |
| Section description | P | 18px (text-lg) | 20px (text-xl) | - | - | Normal (400) | Gray-400 |
| **Cards** |
| Card title | H3 | 20px (text-xl) | - | - | - | Bold (700) | White |
| Card description | P | 16px (text-base) | - | - | - | Normal (400) | Gray-400 |
| **Steps** |
| Step number | Span | 24px (text-2xl) | - | - | - | Bold (700) | Black |
| Step title | H3 | 24px (text-2xl) | - | - | - | Bold (700) | White |
| Step description | P | 16px (text-base) | - | - | - | Normal (400) | Gray-400 |
| **Stats** |
| Stat number | Div | 48px (text-5xl) | 60px (text-6xl) | - | - | Bold (700) | Themed |
| Stat label | Div | 16px (text-base) | - | - | - | Medium (500) | Gray-400 |
| **Forms** |
| Input text | Input | 14px (text-sm) | 16px (text-base) | - | - | Normal (400) | White |
| Button text | Button | 14px (text-sm) | 16px (text-base) | - | - | Semibold (600) | Black/White |
| Label | Label | 14px (text-sm) | - | - | - | Medium (500) | Gray-400 |
| **UI** |
| Small text | Span | 14px (text-sm) | - | - | - | Normal (400) | Gray-400/500 |
| Footer text | Div/A | 14px (text-sm) | - | - | - | Normal (400) | Gray-400 |

---

## 7.4 Animation Reference

| Animation Type | Duration | Delay | Easing | Usage |
|----------------|----------|-------|--------|-------|
| **Entrance Animations** |
| Hero background | 1200ms | 0ms | cubic-bezier(0.16,1,0.3,1) | Background fade-in |
| Hero headline | 800ms | 0ms | cubic-bezier(0.16,1,0.3,1) | Main headline |
| Hero line 1 | 800ms | 200ms | cubic-bezier(0.16,1,0.3,1) | "You tell." |
| Hero line 2 | 800ms | 400ms | cubic-bezier(0.16,1,0.3,1) | "Umbrellish does." |
| Hero subheading | 800ms | 600ms | cubic-bezier(0.16,1,0.3,1) | Subtitle |
| Hero form | 800ms | 800ms | cubic-bezier(0.16,1,0.3,1) | CTA form |
| Hero indicators | 800ms | 1000ms | cubic-bezier(0.16,1,0.3,1) | Status badges |
| Section header | 600ms | 0ms | cubic-bezier(0.16,1,0.3,1) | On scroll |
| Feature cards | 500ms | index×100ms | cubic-bezier(0.16,1,0.3,1) | Staggered cards |
| Timeline steps | 600ms | index×200ms | cubic-bezier(0.16,1,0.3,1) | Numbered steps |
| Stat cards | 600ms | index×100ms | cubic-bezier(0.16,1,0.3,1) | Stats display |
| **Hover Effects** |
| Card lift | 300ms | 0ms | default | Y-axis movement |
| Icon scale | 300ms | 0ms | default | Icon size change |
| Color change | 200ms | 0ms | default | Text/border color |
| Border glow | 300ms | 0ms | default | Border color change |
| Button scale | 200ms | 0ms | default | Scale up/down |
| Gradient glow | 300ms | 0ms | default | Card glow effect |
| Badge pulse | 500ms | 0ms | default | Step badge hover |
| **Continuous Animations** |
| Pulse | 2000ms | Varies | ease-in-out | Breathing effect |
| Spin | 1000ms | 0ms | linear | Loading spinner |
| Icon pulse | 2000ms | 0-1000ms | ease-in-out | Social icon breathing |
| **Height Animations** |
| Analysis expand | 300ms | 0ms | default | Section reveals |
| Result expand | 500ms | 0ms | default | Result section |
| **State Changes** |
| Success message | 800ms | 0ms | default | Form success |
| Intent switch | 300ms | 0ms | default | Demo text change |

---

## 7.5 Component Checklist

Use this checklist when implementing each section:

### Hero Section
- [ ] Full viewport height (min-h-screen)
- [ ] Background image with 40% overlay
- [ ] Responsive padding (px-6 → px-24)
- [ ] Max-width: 896px (max-w-4xl)
- [ ] Headline: 60px → 128px progression
- [ ] Headline line-height: 95%
- [ ] Two-part headline with staggered animation
- [ ] Subheading: 16px → 20px, max-width 672px
- [ ] Input + button joined (gap-0)
- [ ] Button: brand color bg, black text
- [ ] Status indicators with green pulse dot
- [ ] Animation delays: 0→200→400→600→800→1000ms

### Feature Cards
- [ ] Grid: 1→2→3 columns
- [ ] Gap: 24px → 32px
- [ ] Card padding: 32px all sides
- [ ] Card border-radius: 16px
- [ ] Semi-transparent background (zinc-900/50)
- [ ] Icon container: 64×64px, 12px radius
- [ ] Icon size: 32×32px
- [ ] Title: 20px bold
- [ ] Description: 16px gray-400
- [ ] Hover: Y-lift 5px, border color change
- [ ] Icon scale on hover: 110%
- [ ] Stagger animation: 100ms between cards

### Timeline Steps
- [ ] Grid: 1→2→4 columns
- [ ] Badge: 80×80px circle, gradient
- [ ] Number: 24px bold black
- [ ] Icon: 48×48px below badge
- [ ] Title: 24px bold
- [ ] Connecting line (desktop): 4px height, brand/20
- [ ] Arrows between steps (desktop)
- [ ] Pulse effect on badge hover
- [ ] Stagger: 200ms between steps

### CTA Section
- [ ] Padding: 48px → 64px
- [ ] Border-radius: 24px
- [ ] Multi-color gradient background
- [ ] Animated orbs with pulse
- [ ] Form: stacked → row layout
- [ ] Input: 60% black bg, brand border on focus
- [ ] Button: brand bg, scale effects
- [ ] Shadow: brand color glow
- [ ] Success state with green badge

### Header
- [ ] Fixed position, z-50
- [ ] Logo: 128×32px → 192×48px
- [ ] Icons: 28×28px → 36×36px
- [ ] Icon pulse animation: scale 1→1.15→1
- [ ] Staggered pulse (1s delay)

### Footer
- [ ] Top border only (zinc-800)
- [ ] Padding: 48px vertical
- [ ] Layout: column → row
- [ ] Text: 14px gray-400
- [ ] Links: hover to brand color

---

## Final Notes

### Design Philosophy
This design system emphasizes:
1. **Generous spacing** - Breathing room creates elegance
2. **Strong hierarchy** - Clear visual levels guide the eye
3. **Subtle motion** - Animations enhance, don't distract
4. **High contrast** - Dark backgrounds make content pop
5. **Brand focus** - Orange accent creates energy

### Customization Tips
1. **Keep ratios** - If you scale spacing, scale everything proportionally
2. **Test responsiveness** - Check all breakpoints thoroughly
3. **Animation subtlety** - Less is more; don't overuse motion
4. **Color restraint** - Stick to your palette; avoid adding random colors
5. **Content length** - Maintain similar text lengths for layout balance

### Common Pitfalls to Avoid
1. Don't mix spacing systems - Stick to the 16px base scale
2. Don't skip hover states - They're crucial for interactivity
3. Don't forget z-index layers - Background must be behind content
4. Don't over-animate - Every animation should have purpose
5. Don't ignore mobile - Always start mobile-first

---

**END OF MASTER-PROMPT DOCUMENT**

This document contains all the specifications needed to recreate the Umbrellish landing page aesthetic on any project. Simply replace the placeholder values with your brand's colors, fonts, and content while maintaining the spacing, layout, and animation patterns documented here.
