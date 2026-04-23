# Umbrellish Brand Book & Design System
*Extracted from landing page codebase - January 2025*

---

## 1. Brand Colors

### Primary Brand Colors
```css
--color-brand-orange: #F78140    /* Primary CTA, accents, interactive elements */
--color-brand-black: #0A0A0A     /* Main background */
--color-brand-charcoal: #1F1F1F  /* Secondary dark surfaces */
--color-brand-light: #F5F5F5     /* Light text (rarely used) */
```

### Usage
- **#F78140 (Brand Orange)**: Primary color for CTAs, hover states, links, icons, accents, gradients, glows
- **#0A0A0A (Brand Black)**: Main background color, body background
- **#1F1F1F (Brand Charcoal)**: Card backgrounds, layered surfaces
- **#F5F5F5 (Brand Light)**: Alternative light text (minimal use in dark theme)

### Neutral Grays (Tailwind Zinc Scale)
- `zinc-50`: Very light gray (almost white)
- `zinc-700`: Border color (#3F3F46)
- `zinc-800`: Card borders, dividers (#27272A)
- `zinc-900`: Card backgrounds (#18181B)
- `zinc-950`: Dark overlays, subtle backgrounds (#09090B)
- `gray-300`: Body text (#D1D5DB)
- `gray-400`: Secondary text (#9CA3AF)
- `gray-500`: Placeholder text (#6B7280)
- `gray-600`: Muted text (#4B5563)

### Accent Colors
**Purple Accents** (used in SocialProof, gradients):
- `purple-400`: #C084FC
- `purple-500`: #A855F7
- `purple-600`: #9333EA

**Blue Accents** (used in SocialProof, Roadmap):
- `blue-400`: #60A5FA
- `blue-500`: #3B82F6
- `blue-600`: #2563EB

**Green Accents** (success states):
- `green-300`: #86EFAC
- `green-400`: #4ADE80
- `green-500`: #22C55E

**Red Accents** (error states):
- `red-400`: #F87171

**Slate Accents** (Roadmap future vision):
- `slate-400`: #94A3B8
- `slate-500`: #64748B
- `slate-600`: #475569

**Orange Variations**:
- `orange-500`: #F97316 (hover state for brand-orange)
- `orange-600`: #EA580C (gradient endpoints)

---

## 2. Typography

### Font Families
```css
Primary (Body): 'Space Grotesk', sans-serif
Display (Logo): 'Norwester', sans-serif
```

**Space Grotesk**:
- Variable font: weights 300-700
- File: `/fonts/SpaceGrotesk-Variable.ttf`
- Usage: All body copy, headings, UI elements
- Font smoothing: `-webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;`

**Norwester**:
- Weight: Normal
- File: `/fonts/norwester.otf`
- Usage: Logo, potentially large display type (not heavily used in current site)

### Font Sizes & Hierarchy

**Hero Headlines** (largest):
- Mobile: `text-6xl` (3.75rem / 60px)
- Desktop: `text-9xl` (8rem / 128px)
- Leading: `leading-[0.95]` (95% line-height for tight display)

**Section Headings**:
- Small: `text-4xl` (2.25rem / 36px)
- Medium: `text-5xl` (3rem / 48px)
- Large: `text-6xl` (3.75rem / 60px)
- Responsive: `text-4xl md:text-5xl lg:text-6xl`

**Subheadings**:
- `text-2xl` (1.5rem / 24px) - card titles, step titles
- `text-3xl` (1.875rem / 30px) - larger card headings
- `text-xl` (1.25rem / 20px) - section descriptions
- Responsive: `text-xl md:text-2xl`

**Body Text**:
- Base: `text-base` (1rem / 16px)
- Large: `text-lg` (1.125rem / 18px)
- Subtext: `text-sm` (0.875rem / 14px)
- Micro: `text-xs` (0.75rem / 12px) - badges, labels

**Number Display** (stats):
- `text-5xl md:text-6xl` (3rem-3.75rem / 48-60px)

**Leading (Line Height)**:
- Tight: `leading-[0.95]` (hero headings)
- Relaxed: `leading-relaxed` (1.625 / 162.5%)
- Default: Browser default (~1.5)

**Font Weights**:
- Regular: `font-normal` (400)
- Medium: `font-medium` (500)
- Semibold: `font-semibold` (600)
- Bold: `font-bold` (700)

**Text Colors**:
- Primary: `text-white` (#FFFFFF)
- Secondary: `text-gray-300` (#D1D5DB)
- Tertiary: `text-gray-400` (#9CA3AF)
- Muted: `text-gray-500` (#6B7280)
- Brand accent: `text-brand-orange` (#F78140)

---

## 3. Spacing & Layout

### Container Widths
```css
max-w-4xl: 56rem (896px)   /* Centered content sections, CTA */
max-w-6xl: 72rem (1152px)  /* Video demo container */
max-w-7xl: 80rem (1280px)  /* Main content sections */
max-w-[1600px]: 1600px     /* Header container */
```

### Section Spacing
```css
Vertical padding (sections):
  Mobile: py-24 (6rem / 96px)
  Desktop: md:py-32 (8rem / 128px)

Compact sections (Whitepaper, Footer):
  py-16 md:py-20 (4rem-5rem / 64-80px)

Horizontal padding:
  Mobile: px-6 (1.5rem / 24px)
  Tablet: md:px-12 (3rem / 48px)
  Desktop: lg:px-16 (4rem / 64px)
```

### Internal Spacing (Gaps)
```css
gap-3: 0.75rem (12px)   /* Tight spacing - icon + text */
gap-4: 1rem (16px)      /* Form elements */
gap-5: 1.25rem (20px)   /* Header icons */
gap-6: 1.5rem (24px)    /* Footer, social links */
gap-8: 2rem (32px)      /* Cards, grid items */
gap-12: 3rem (48px)     /* Section internal spacing */
gap-16: 4rem (64px)     /* Large section spacing */
```

### Margin Bottom (Content Separation)
```css
mb-3: 0.75rem (12px)    /* Tight - titles to descriptions */
mb-4: 1rem (16px)       /* Status badges */
mb-6: 1.5rem (24px)     /* Headings to body */
mb-8: 2rem (32px)       /* Subheadings */
mb-12: 3rem (48px)      /* Forms, large separations */
mb-16: 4rem (64px)      /* Section headers to content */
mb-20: 5rem (80px)      /* HowItWorks header */
```

### Padding (Elements)
```css
Buttons (CTA):
  Primary: px-8 py-4 (2rem x 1rem / 32px x 16px)
  Large: px-8 py-5 (2rem x 1.25rem / 32px x 20px)
  Compact: px-6 py-4 (1.5rem x 1rem / 24px x 16px)

Cards:
  Standard: p-8 (2rem / 32px)
  Medium: p-10 md:p-12 (2.5rem-3rem / 40-48px)
  Large (CTA): p-12 md:p-16 (3rem-4rem / 48-64px)

Input fields:
  px-6 py-5 (1.5rem x 1.25rem / 24px x 20px)

Badges/Pills:
  px-3 py-1 (0.75rem x 0.25rem / 12px x 4px)
  px-8 py-4 (2rem x 1rem / 32px x 16px) - larger badges
```

### Border Radius
```css
rounded-lg: 0.5rem (8px)     /* Small elements */
rounded-xl: 0.75rem (12px)   /* Buttons, inputs */
rounded-2xl: 1rem (16px)     /* Cards, containers */
rounded-3xl: 1.5rem (24px)   /* Large cards (CTA, Whitepaper) */
rounded-full: 9999px         /* Circular elements, badges, pills */
```

### Breakpoints
```css
Mobile (base): 0px
md (tablet): 768px
lg (desktop): 1024px
xl: 1280px
2xl: 1536px
```

**Usage Pattern**:
```css
/* Mobile-first responsive design */
text-4xl md:text-5xl lg:text-6xl
px-6 md:px-12 lg:px-16
py-24 md:py-32
```

### Grid Systems
```css
Features grid:
  grid-cols-1 md:grid-cols-2 lg:grid-cols-3
  gap-6 md:gap-8

HowItWorks/Roadmap timeline:
  grid-cols-1 md:grid-cols-2 lg:grid-cols-4
  gap-8 lg:gap-4

SocialProof stats:
  grid-cols-1 md:grid-cols-3
  gap-8
```

---

## 4. Components & UI Patterns

### Buttons

#### Primary CTA Button
```tsx
className="px-8 py-4 bg-brand-orange text-black font-bold rounded-xl
hover:bg-orange-500 hover:scale-105 active:scale-95
transition-all duration-200 shadow-lg shadow-brand-orange/20
hover:shadow-brand-orange/40"
```
- Background: `#F78140` (brand-orange)
- Text: Black (`text-black`)
- Font: Bold
- Padding: `32px 16px`
- Radius: `12px`
- Hover: Lighten to `orange-500`, scale to 105%, increase shadow glow
- Active: Scale to 95%
- Transition: 200ms all properties

#### Large Primary CTA (FinalCTA)
```tsx
className="w-full sm:w-auto px-8 py-5 bg-brand-orange text-black
font-bold rounded-xl hover:bg-orange-500 disabled:opacity-50
transition-all duration-200 hover:scale-105 active:scale-95
shadow-lg shadow-brand-orange/20 hover:shadow-brand-orange/40"
```
- Padding: `32px 20px` (larger vertical)
- Full width on mobile, auto on desktop

#### Icon Button (Social Links)
```tsx
className="text-gray-400 hover:text-brand-orange transition-all
duration-300 hover:scale-110"
```
- Default: Gray-400
- Hover: Brand-orange, scale 110%
- Transition: 300ms
- Icon sizes: `w-6 h-6` (24px) or `w-7 h-7 md:w-9 md:h-9` (28-36px)

#### Loading State
```tsx
{status === 'loading' ? (
  <span className="flex items-center gap-2">
    <div className="w-5 h-5 border-2 border-black border-t-transparent
    rounded-full animate-spin" />
    Joining...
  </span>
) : 'Get Early Access'}
```

### Cards

#### Standard Feature Card
```tsx
className="group relative p-8 rounded-2xl bg-zinc-900/50 border
border-zinc-800 hover:border-brand-orange/50 transition-all duration-300"

/* Glow effect on hover */
<div className="absolute inset-0 rounded-2xl bg-gradient-to-br
from-brand-orange/0 to-brand-orange/0
group-hover:from-brand-orange/10 group-hover:to-transparent
transition-all duration-300" />
```
- Background: Semi-transparent zinc-900 (50% opacity)
- Border: zinc-800, changes to brand-orange/50 on hover
- Padding: 32px
- Radius: 16px
- Hover: Gradient glow appears, border color changes
- Lift on hover: `whileHover={{ y: -5 }}`

#### Stats Card (SocialProof)
```tsx
className="relative p-8 rounded-2xl bg-gradient-to-br
from-brand-orange/10 to-orange-600/5 border border-brand-orange/20"
```
- Gradient background: brand-orange with opacity
- Border: Semi-transparent brand-orange
- Padding: 32px
- Radius: 16px
- Variants: Orange, purple, blue gradients

#### Premium Card (Whitepaper, CTA)
```tsx
className="relative p-10 md:p-12 rounded-3xl bg-gradient-to-br
from-zinc-900/80 to-zinc-950/80 border-2 border-zinc-800
hover:border-brand-orange/50 transition-all duration-500 group"

/* Glow effect */
<div className="absolute inset-0 rounded-3xl bg-gradient-to-br
from-brand-orange/5 to-purple-500/5 opacity-0 group-hover:opacity-100
transition-opacity duration-500" />
```
- Larger padding: 40-48px
- Larger radius: 24px
- Thicker border: 2px
- Multi-color gradient glow on hover

#### Roadmap Card
```tsx
className="relative bg-zinc-900/50 border border-{color}/40 rounded-2xl
p-6 transition-all duration-300 hover:shadow-2xl h-full flex flex-col"
```
- Equal height cards: `h-full flex flex-col`
- Dynamic border colors per phase
- Shadow on hover

### Form Elements

#### Email Input
```tsx
className="flex-1 w-full px-6 py-5 rounded-xl bg-black/60 text-white
placeholder:text-gray-500 border border-zinc-700
focus:border-brand-orange focus:outline-none disabled:opacity-50
text-base transition-colors"
```
- Background: Semi-transparent black (60% opacity)
- Border: zinc-700, changes to brand-orange on focus
- Padding: `24px 20px`
- Radius: 12px
- Focus state: Orange border, no outline
- Placeholder: Gray-500

#### Hero Email Form (Inline)
```tsx
<div className="flex items-center gap-0 max-w-lg bg-zinc-900
rounded-lg overflow-hidden border border-zinc-800">
  <input className="flex-1 px-6 py-4 bg-transparent text-white
  placeholder:text-gray-600 focus:outline-none" />
  <button className="px-6 md:px-8 py-4 bg-brand-orange text-black
  font-semibold transition-all duration-200 hover:bg-orange-500" />
</div>
```
- Container background: zinc-900
- Input: Transparent background, no gap between input and button
- Button: Attached to right, no rounding

### Badges & Pills

#### Status Badge (Roadmap)
```tsx
className="inline-flex items-center gap-2 px-3 py-1 rounded-full
bg-brand-orange/20 border border-brand-orange/30"

/* Animated pulse dot */
<motion.div
  animate={{ opacity: [1, 0.5, 1] }}
  transition={{ duration: 1.5, repeat: Infinity }}
  className="w-2 h-2 rounded-full bg-brand-orange"
/>
<span className="text-xs font-bold text-brand-orange uppercase">
  Current
</span>
```
- Rounded pill shape
- Semi-transparent background
- Animated pulse dot for active states
- Uppercase text, extra small, bold

#### Trust Badge
```tsx
className="inline-flex items-center gap-3 px-8 py-4 rounded-full
bg-zinc-900 border border-zinc-800"
```
- Icon + text combo
- Larger padding
- Full rounding

#### Growing Waitlist Indicator (Hero)
```tsx
<div className="flex items-center gap-2">
  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
  <span className="text-sm text-green-400">Growing daily</span>
</div>
```

### Icons

#### Standard Icon Size
```tsx
className="w-6 h-6"  /* 24x24px - social, UI icons */
className="w-8 h-8"  /* 32x32px - feature icons */
className="w-12 h-12" /* 48x48px - step icons */
```

#### Icon Colors
- Default: `text-brand-orange`
- Hover: `hover:text-brand-orange` (from gray-400)
- Context-specific: purple-400, blue-400, green-400

#### Icon Containers
```tsx
/* Feature card icon */
className="inline-flex items-center justify-center w-16 h-16
rounded-xl bg-brand-orange/10 text-brand-orange mb-6
group-hover:scale-110 transition-transform duration-300"

/* Whitepaper document icon */
className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br
from-brand-orange/20 to-orange-600/20 border border-brand-orange/30
flex items-center justify-center group-hover:scale-110
transition-transform duration-500"
```

### Number Badges (HowItWorks, Roadmap)

#### Step Number Badge
```tsx
className="w-20 h-20 rounded-full bg-gradient-to-br
from-brand-orange to-orange-600 flex items-center justify-center
text-2xl font-bold text-black shadow-lg shadow-brand-orange/20
group-hover:shadow-brand-orange/40 transition-shadow duration-300"

/* Pulse effect on hover */
<div className="absolute inset-0 rounded-full bg-brand-orange
opacity-0 group-hover:opacity-20 group-hover:scale-150
transition-all duration-500" />
```
- Size: 80x80px
- Gradient background
- Text: Black, 2xl, bold
- Shadow glow
- Expanding pulse on hover

#### Version Badge (Roadmap)
```tsx
<motion.div
  animate={phase.active ? { scale: [1, 1.05, 1] } : {}}
  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
  className="w-20 h-20 rounded-full bg-gradient-to-br
  from-brand-orange to-orange-600 flex flex-col items-center
  justify-center shadow-xl shadow-brand-orange/30"
>
  <span className="text-2xl font-bold text-black">β</span>
</motion.div>
```
- Breathing animation on active phase
- Gradient varies per phase (orange, purple, blue, slate)

### Video Container (MacBook Mockup)

```tsx
{/* Screen Container */}
<div className="relative bg-zinc-900 rounded-t-2xl p-3 shadow-2xl">
  {/* Screen Bezel */}
  <div className="relative bg-black rounded-lg overflow-hidden
  border-2 border-zinc-800">
    <video src="/app-demo.mp4" autoPlay loop muted playsInline
    className="w-full h-auto" />
  </div>
</div>

{/* Laptop Base */}
<div className="relative h-4 bg-gradient-to-b from-zinc-800 to-zinc-900
rounded-b-2xl shadow-lg">
  {/* Notch */}
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-2
  bg-zinc-700 rounded-b-lg" />
</div>

{/* Desk Shadow */}
<div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-4/5 h-8
bg-black/20 blur-2xl rounded-full" />
```
- Realistic laptop frame with screen, base, notch
- Video: autoPlay, loop, muted, playsInline
- Depth shadow beneath

---

## 5. Visual Style & Aesthetic

### Core Aesthetic
**Dark Futuristic Premium** - The design combines a sophisticated dark theme with glowing accents, creating a premium, tech-forward feel. Think high-end fintech meets cyberpunk elegance.

### Background Treatment

#### Base Layer
```css
Background color: #0A0A0A (pure black)
Body: font-smoothing antialiased
```

#### Gradient Overlays (Background.tsx)
```tsx
/* Top gradient - subtle gray */
background: radial-gradient(ellipse at top, rgba(40, 40, 40, 0.6) 0%,
transparent 50%)

/* Center warm glow - orange tint */
background: radial-gradient(ellipse at center, rgba(50, 35, 28, 0.4) 0%,
transparent 50%)

/* Vignette - dark edges */
background: radial-gradient(circle at center, transparent 40%,
rgba(0, 0, 0, 0.6) 100%)
```

#### Noise Texture
```css
/* SVG noise overlay for grain effect */
.noise-texture::before {
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400'...");
  opacity: 0.03;
  pointer-events: none;
}
```

### Gradient Patterns

#### Card Backgrounds
```tsx
/* Standard feature card */
bg-gradient-to-br from-brand-orange/0 to-brand-orange/0
group-hover:from-brand-orange/10 group-hover:to-transparent

/* Stats cards */
bg-gradient-to-br from-brand-orange/10 to-orange-600/5  /* Orange */
bg-gradient-to-br from-purple-500/10 to-purple-600/5    /* Purple */
bg-gradient-to-br from-blue-500/10 to-blue-600/5        /* Blue */

/* Premium cards */
bg-gradient-to-br from-zinc-900/80 to-zinc-950/80       /* Background */
bg-gradient-to-br from-brand-orange/5 to-purple-500/5   /* Glow overlay */
```

#### Button Gradients
```tsx
bg-gradient-to-r from-brand-orange to-orange-600
```

#### Number Badge Gradients
```tsx
bg-gradient-to-br from-brand-orange to-orange-600   /* Active/Orange */
bg-gradient-to-br from-purple-500 to-purple-600     /* Purple */
bg-gradient-to-br from-blue-500 to-blue-600         /* Blue */
bg-gradient-to-br from-slate-500 to-slate-600       /* Gray */
```

#### Section Background Gradients
```tsx
/* Top fade */
bg-gradient-to-b from-zinc-950/50 to-transparent

/* Center emphasis */
bg-gradient-to-b from-transparent via-zinc-950/50 to-transparent

/* CTA multi-color */
bg-gradient-to-br from-brand-orange/20 via-purple-500/10 to-blue-500/10
```

### Glow & Shadow Effects

#### Shadow Patterns
```tsx
/* Standard card shadow */
shadow-2xl

/* Button shadows */
shadow-lg shadow-brand-orange/20
hover:shadow-2xl hover:shadow-brand-orange/40

/* Number badge shadows */
shadow-lg shadow-brand-orange/20
shadow-xl shadow-brand-orange/30
```

#### Glow Overlays (on hover)
```tsx
/* Subtle glow */
<div className="absolute inset-0 rounded-2xl bg-gradient-to-br
from-brand-orange/5 to-purple-500/5 opacity-0
group-hover:opacity-100 transition-opacity duration-500" />

/* Feature card glow */
<div className="absolute inset-0 rounded-2xl bg-gradient-to-br
from-brand-orange/0 to-brand-orange/0
group-hover:from-brand-orange/10 group-hover:to-transparent
transition-all duration-300" />
```

#### Animated Background Orbs (FinalCTA)
```tsx
<div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/20
rounded-full blur-3xl animate-pulse" />

<div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/20
rounded-full blur-3xl animate-pulse"
style={{ animationDelay: '1s' }} />
```

### Border Treatments

#### Standard Borders
```css
border border-zinc-800              /* Default card border */
border border-zinc-700              /* Input border */
border-2 border-zinc-800            /* Premium card border */
```

#### Accent Borders
```tsx
border border-brand-orange/20       /* Stats card */
border border-brand-orange/30       /* CTA card, badges */
border border-brand-orange/50       /* Hover state */
```

#### Gradient Borders (via hover)
```tsx
/* Before hover */
border border-zinc-800

/* On hover */
hover:border-brand-orange/50
transition-all duration-300-500
```

### Depth & Layering

#### Z-Index Hierarchy
```tsx
z-50   /* Back to top button, header (fixed) */
z-10   /* Content above overlays */
z-0    /* Base layer, background images */
-z-10  /* Background component (behind everything) */
```

#### Opacity Layering
```tsx
/* Card backgrounds */
bg-zinc-900/50   /* 50% opacity */
bg-zinc-900/80   /* 80% opacity */
bg-black/60      /* 60% opacity */

/* Glow effects */
from-brand-orange/5   /* 5% opacity */
from-brand-orange/10  /* 10% opacity */
from-brand-orange/20  /* 20% opacity */
```

---

## 6. Animation & Interactions

### Animation Library
**Framer Motion** - Used throughout for all animations

### Common Animation Patterns

#### Fade In On Scroll
```tsx
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.6 }}
```
- Starts invisible, 20px below
- Fades in and slides up
- Only plays once
- 600ms duration

#### Staggered Entry (lists, grids)
```tsx
{items.map((item, index) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
  />
))}
```
- Each item delayed by 100ms * index
- Creates cascade effect

#### Hero Large Fade In
```tsx
initial={{ opacity: 0, y: 30 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
```
- Larger vertical movement (30px)
- Longer duration (800ms)
- Custom easing curve
- Delayed start (200ms)

### Hover Interactions

#### Card Lift
```tsx
whileHover={{ y: -5 }}
transition={{ duration: 0.3 }}
```
- Moves up 5px on hover
- 300ms smooth transition

#### Scale Up (buttons, icons)
```tsx
/* Buttons */
hover:scale-105 active:scale-95
transition-all duration-200

/* Icons */
group-hover:scale-110
transition-transform duration-300
```
- Buttons: 105% on hover, 95% on click
- Icons: 110% on parent hover

#### Glow Reveal
```tsx
<div className="opacity-0 group-hover:opacity-100
transition-opacity duration-500" />
```
- Glow overlay fades in on hover
- 500ms smooth transition

#### Border Color Change
```tsx
border border-zinc-800 hover:border-brand-orange/50
transition-all duration-300
```
- Border changes from gray to orange
- 300ms transition

### Special Animations

#### Pulsing Elements (live indicators)
```tsx
/* CSS pulse */
className="animate-pulse"

/* Framer Motion pulse */
<motion.div
  animate={{ opacity: [1, 0.5, 1] }}
  transition={{ duration: 1.5, repeat: Infinity }}
/>
```

#### Breathing Badge (active roadmap phase)
```tsx
<motion.div
  animate={{ scale: [1, 1.05, 1] }}
  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
/>
```

#### Social Icon Bounce (Header)
```tsx
<motion.a
  animate={{ scale: [1, 1.15, 1] }}
  transition={{
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut",
    delay: 1  /* Second icon delayed */
  }}
/>
```

#### Number Counter (SocialProof)
```tsx
const [count, setCount] = useState(8247)

useEffect(() => {
  const interval = setInterval(() => {
    setCount((prev) => prev + 1)
  }, 3000)
  return () => clearInterval(interval)
}, [])

/* Animate on change */
<motion.span
  key={count}
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.3 }}
>
  {count.toLocaleString()}
</motion.span>
```

#### Expanding Pulse on Hover
```tsx
<div className="absolute inset-0 rounded-full bg-brand-orange
opacity-0 group-hover:opacity-20 group-hover:scale-150
transition-all duration-500" />
```

#### Loading Spinner
```tsx
<div className="w-5 h-5 border-2 border-black border-t-transparent
rounded-full animate-spin" />
```

### Easing Curves

#### Custom Ease-Out (smooth deceleration)
```tsx
ease: [0.16, 1, 0.3, 1]
```
- Used for: Hero animations, major section reveals
- Creates smooth, natural motion

#### Standard Easings
```tsx
ease: "easeInOut"  /* Breathing, pulsing */
transition: default /* Most hover effects */
```

### Transition Durations

```tsx
duration: 0.2 (200ms)  /* Fast - button hovers, quick feedback */
duration: 0.3 (300ms)  /* Standard - icon scales, border changes */
duration: 0.6 (600ms)  /* Medium - fade-ins, standard reveals */
duration: 0.8 (800ms)  /* Slow - hero elements, major reveals */
duration: 1.5 (1500ms) /* Very slow - pulse effects */
duration: 2.0 (2000ms) /* Breathing, continuous animations */
```

### Scroll Behavior

#### Viewport Trigger Settings
```tsx
viewport={{ once: true }}  /* Default - animate once */
viewport={{ amount: 0.3 }} /* Trigger when 30% visible */
```

#### Back to Top Button
```tsx
/* Appears after scrolling 300px */
useEffect(() => {
  const toggleVisibility = () => {
    if (window.scrollY > 300) setIsVisible(true)
    else setIsVisible(false)
  }
  window.addEventListener('scroll', toggleVisibility)
  return () => window.removeEventListener('scroll', toggleVisibility)
}, [])

/* Smooth scroll to top */
window.scrollTo({ top: 0, behavior: 'smooth' })
```

---

## 7. Copy & Voice

### Brand Voice Characteristics

**Powerful & Confident**: The copy doesn't ask, it declares. "You tell. Umbrellish does." is a command, not a suggestion.

**User-Empowering**: Positions the user as boss, in control. "You are the boss - Umbrellish is at your service."

**Technical but Accessible**: Uses terms like "intent execution layer" and "agentic AI" but explains them in plain language.

**Future-Focused**: Frequent use of "future" framing: "Ready for the Future of DeFi?" "Building the future of blockchain interaction"

**Action-Oriented**: Strong verbs - "Transform," "Execute," "Analyze," "Receive"

**No Fluff**: Direct, concise. Avoids marketing jargon and unnecessary qualifiers.

### Headline Patterns

#### Primary Headlines (Hero)
```
"You tell. Umbrellish does."
```
- Two-part structure
- User first, product second
- Period for emphasis, not exclamation
- Extremely short (4 words)

#### Section Headlines
```
"See It In Action"
"How It Works"
"Why Umbrellish?"
"Your Pocket. Every Protocol."
"Ready for the Future of DeFi?"
```
- Question format for engagement ("Why?", "Ready?")
- Contrast pairs ("Your Pocket" vs "Every Protocol")
- Active voice
- 2-6 words typically

#### Subheadlines
```
"The ultimate interface for all the blockchain applications.
No more complexity, no more fragmentation. You are the boss -
Umbrellish is at your service."

"From intent to execution in four seamless steps.
Magic you can trust."

"The entire blockchain ecosystem, unified in a mobile-first interface.
Speak your intent—Umbrellish handles the complexity."
```
- 2-3 short sentences
- Benefit-focused
- Uses em-dashes for emphasis
- Contrast statements ("You X - Umbrellish Y")

### Call-to-Action Copy

#### Primary CTAs
```
"Get Early Access"
"Read the Whitepaper"
"Access"           /* Ultra minimal hero CTA */
```
- Action verb first
- Clear value ("Early Access")
- No weak words ("Learn more", "Click here")

#### Loading States
```
"Requesting..."
"Joining..."
```
- Present continuous tense
- Implies action in progress

#### Success Messages
```
"Access requested. We'll be in touch."
"Welcome to the future! Check your email."
```
- Confirmation first
- Clear next step
- Enthusiastic but not over-the-top

### Feature Descriptions

**Pattern**: Benefit statement + technical detail

```
"Intelligent Execution"
"AI-powered planning analyzes optimal execution paths across protocols,
delivering precision, speed, and cost reduction for every transaction."

"Non-Custodial"
"You stay in complete control. We never hold your assets -
all execution requires your signature via your connected wallet."
```

- Lead with user benefit
- Follow with how it works
- Specific, not vague
- Trust-building language ("complete control", "requires your signature")

### Step Descriptions (HowItWorks)

**Pattern**: Direct instruction + benefit

```
01 - "You Tell"
"Express your intent in plain language. Swap tokens, provide liquidity,
earn yield—just say it."

04 - "You Receive"
"Your intent is fulfilled. Tokens received, liquidity provided,
yield earned. All in seconds."
```

- Second person ("You")
- Concrete examples
- Emphasis on simplicity and speed

### Social Proof Copy

```
"8,247+ Users Waiting"
"Growing daily"
"$2.5M Funding Goal - Community Backed"
"20+ Protocols Supported - DeFi Ecosystem"
"Community Powered"
```

- Numbers for credibility
- Present continuous ("Growing", "Waiting")
- Community emphasis
- Specific metrics

### Microcopy

#### Form Placeholders
```
"Enter your email to request access"
"Enter your email"
```
- Clear, actionable
- Lowercase for friendliness

#### Status Indicators
```
"Encrypted"
"Waitlist: Open"
"All systems operational"
```
- Single words or short phrases
- Reassuring

#### Badges/Labels
```
"Current" | "Next" | "Planned" | "Vision"  /* Roadmap */
"β" | "V1" | "V2" | "V3"  /* Version labels */
```
- Uppercase for labels ("CURRENT")
- Single words
- Clear progression

### Tone Guidelines

**DO:**
- Use short, punchy sentences
- Lead with user benefits
- Be specific with numbers and facts
- Use active voice
- Emphasize user control
- Be confident, not arrogant
- Use em-dashes for emphasis
- Address user directly ("You")

**DON'T:**
- Use exclamation marks excessively (rare, only in success states)
- Use vague marketing speak ("revolutionary", "game-changing")
- Oversell or hype
- Use complex jargon without explanation
- Use passive voice
- Apologize or hedge ("might", "could", "maybe")
- Use corporate-speak

---

## 8. Logo & Brand Assets

### Logo
```
File: /public/logo.svg
Format: SVG
Usage: Header (fixed top)
Sizes:
  Mobile: w-32 h-8 (128px x 32px)
  Desktop: w-48 h-12 (192px x 48px)
Alt text: "Umbrellish"
```

**Implementation**:
```tsx
<Image
  src="/logo.svg"
  alt="Umbrellish"
  fill
  style={{ objectFit: 'contain' }}
  priority
/>
```

### Image Assets

#### Hero Background
```
File: /public/hero-image.jpg
Usage: Full-screen hero background
Cache-busting: ?v=${Date.now()}
Background size: 100% 100% (full cover)
Overlay: bg-black/40 for text readability
```

#### Mobile Showcase
```
File: /public/mobile-showcase.png
Usage: Phone mockup image showing mobile app
Display:
  - Desktop: Background image positioned right
  - Mobile: Centered image below text
Max width: max-w-lg (512px) on mobile
Cache-busting: ?v=${Date.now()}
```

#### App Demo Video
```
File: /public/app-demo.mp4
Format: MP4
Size: 1.3MB (compressed for web)
Usage: MacBook mockup video player
Attributes: autoPlay, loop, muted, playsInline
Container: MacBook frame mockup
```

#### Whitepaper PDF
```
File: /public/umbrellish-whitepaper.pdf
Size: 62KB
Link behavior: Opens in new tab (target="_blank")
Security: rel="noopener noreferrer"
Icon: Document icon (SVG) with orange accent
```

### Font Files
```
/public/fonts/norwester.otf
  - Format: OpenType
  - Weight: Normal
  - Usage: Display font (logo, potentially headings)

/public/fonts/SpaceGrotesk-Variable.ttf
  - Format: TrueType Variable
  - Weights: 300-700
  - Usage: All body text, headings, UI
```

### Social Media Assets

#### SVG Icons (embedded in code)
- X (Twitter) logo: 24x24px SVG path
- Telegram logo: 24x24px SVG path

#### Social Links
```
X: https://x.com/umbrellish
Telegram: https://t.me/umbrellish_chat
```

### Icon System

All icons are SVG, inline in components:
- Feature icons: 32x32px (stroke-based)
- UI icons: 24x24px (fill or stroke)
- Large icons: 48x48px (step/process icons)

**No external icon library** - all custom SVG paths

### Color Usage in Assets

**Logo**: Likely uses brand-orange (#F78140) - displayed on dark background

**Hero Image**: Dark, moody background compatible with black theme

**Mobile Showcase**: Shows app UI with brand colors

**Video**: Shows actual app demo (auto-playing)

---

## 9. Responsive Behavior

### Mobile-First Approach
All designs start with mobile (320px+) and scale up using Tailwind's `md:` and `lg:` prefixes.

### Breakpoint Strategy

#### Mobile (base, < 768px)
- Single column layouts
- Stacked elements
- Full-width buttons
- Larger touch targets (44px minimum)
- Reduced font sizes
- Smaller padding/margins
- Hidden decorative elements

#### Tablet (md: 768px+)
- 2-column grids
- Horizontal navigation elements
- Inline forms (email + button)
- Increased font sizes
- More padding

#### Desktop (lg: 1024px+)
- 3-4 column grids
- Maximum layout width
- Largest font sizes
- Decorative connecting lines
- Background positioned images
- Hover states fully enabled

### Typography Responsive Patterns

```tsx
/* Hero headline */
text-6xl md:text-7xl lg:text-8xl xl:text-9xl

/* Section headings */
text-4xl md:text-5xl lg:text-6xl

/* Body text */
text-base md:text-lg

/* Subheadings */
text-xl md:text-2xl
```

### Spacing Responsive Patterns

```tsx
/* Section padding */
py-24 md:py-32
px-6 md:px-12 lg:px-16

/* Grid gaps */
gap-6 md:gap-8
gap-8 lg:gap-4

/* Margins */
mb-6 md:mb-8
mb-8 md:mb-12
```

### Grid Responsive Patterns

```tsx
/* Feature grid: 1 col → 2 col → 3 col */
grid-cols-1 md:grid-cols-2 lg:grid-cols-3

/* Timeline: 1 col → 2 col → 4 col */
grid-cols-1 md:grid-cols-2 lg:grid-cols-4

/* Stats: 1 col → 3 col */
grid-cols-1 md:grid-cols-3
```

### Layout Shifts

#### Mobile Showcase
- **Desktop**: Text left, image background right
- **Mobile**: Text top, image centered below

#### Header
- **Desktop**: Logo left, icons right (inline)
- **Mobile**: Same layout, smaller logo

#### Forms
- **Desktop**: Inline (input + button horizontal)
- **Mobile**: Stacked (input above button)

```tsx
/* Desktop inline */
<div className="flex flex-col sm:flex-row items-center gap-4">
  <input className="flex-1 w-full" />
  <button className="w-full sm:w-auto" />
</div>
```

#### Footer
- **Desktop**: Copyright left, icons right
- **Mobile**: Centered, stacked

```tsx
<div className="flex flex-col md:flex-row items-center
justify-between gap-6">
  <div className="text-gray-400 text-sm">© 2025...</div>
  <div className="flex items-center gap-6">...</div>
</div>
```

### Visibility Toggles

```tsx
/* Show on desktop only */
className="hidden lg:block"

/* Show on mobile only */
className="md:hidden"

/* Hide on mobile, show on tablet+ */
className="hidden md:block"
```

**Examples**:
- Timeline connecting lines: `hidden lg:block`
- Mobile showcase image (duplicate): `md:hidden` (mobile) and `hidden md:block` (desktop background)
- Arrow icons between steps: `hidden lg:block`

### Touch Optimization (Mobile)

#### Button Sizes
```tsx
/* Minimum touch target: 44x44px */
py-4  /* 16px + text = ~44px height */
px-6  /* Sufficient width */
```

#### Icon Sizes
```tsx
/* Mobile: Larger icons for easier tapping */
w-7 h-7 md:w-9 md:h-9
```

#### Hover States
- CSS `:hover` still works on mobile (tap and hold)
- No special mobile hover handling needed
- Framer Motion hover states work on tap

### Video Responsive
```tsx
/* Video scales to container */
className="w-full h-auto"

/* MacBook mockup scales proportionally */
className="max-w-6xl mx-auto"
```

---

## 10. Technical Implementation Notes

### Framework Stack
- **Next.js 14+** (App Router)
- **React 18+**
- **TypeScript**
- **Tailwind CSS 4.x**
- **Framer Motion** (animations)

### CSS Architecture

#### Tailwind Configuration
```ts
// tailwind.config.ts
theme: {
  extend: {
    colors: {
      'brand-orange': '#F78140',
      'brand-black': '#0A0A0A',
      'brand-charcoal': '#1F1F1F',
      'brand-light': '#F5F5F5',
    },
    fontFamily: {
      norwester: ['Norwester', 'sans-serif'],
      'space-grotesk': ['Space Grotesk', 'sans-serif'],
    },
  },
}
```

#### Global Styles
```css
/* app/globals.css */
body {
  background-color: var(--color-brand-black);
  color: var(--color-brand-light);
  font-family: var(--font-space-grotesk);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

#### Custom Utilities
```css
.noise-texture {
  position: relative;
}
.noise-texture::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml...");
  pointer-events: none;
  z-index: 1;
}
```

### Component Patterns

#### All Components are Client Components
```tsx
'use client'  // Every component file starts with this
```

#### Animation Wrapper Pattern
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
  {/* Content */}
</motion.div>
```

#### Responsive Class Pattern
```tsx
className="text-4xl md:text-5xl lg:text-6xl
px-6 md:px-12 lg:px-16
py-24 md:py-32"
```

### Image Optimization

#### Next.js Image Component
```tsx
import Image from 'next/image'

<Image
  src="/logo.svg"
  alt="Umbrellish"
  fill
  style={{ objectFit: 'contain' }}
  priority  // For above-fold images
/>
```

#### Cache Busting
```tsx
backgroundImage: `url(/hero-image.jpg?v=${Date.now()})`
src={`/mobile-showcase.png?v=${Date.now()}`}
```

### Performance Optimizations

#### Font Loading
```css
font-display: swap;  /* Prevent FOIT (flash of invisible text) */
```

#### Animation Performance
- Uses `transform` and `opacity` (GPU-accelerated)
- `will-change` implicit via Framer Motion
- `once: true` prevents re-animations

#### Video Optimization
```tsx
<video
  src="/app-demo.mp4"
  autoPlay
  loop
  muted        // Required for autoplay
  playsInline  // Prevents fullscreen on iOS
/>
```

### Accessibility

#### Semantic HTML
- Sections use `<section>`, `<header>`, `<footer>`
- Proper heading hierarchy (h1 → h2 → h3)
- Form labels and required attributes

#### ARIA Labels
```tsx
aria-label="Follow us on X"
aria-label="Back to top"
```

#### Focus States
```tsx
focus:border-brand-orange
focus:outline-none
```

#### Color Contrast
- White text (#FFFFFF) on black (#0A0A0A): 21:1 (WCAG AAA)
- Gray-300 (#D1D5DB) on black: 15.7:1 (WCAG AAA)
- Gray-400 (#9CA3AF) on black: 11.6:1 (WCAG AAA)
- Brand-orange (#F78140) on black: 4.9:1 (WCAG AA)

### Browser Compatibility
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Tailwind CSS autoprefixer handles vendor prefixes
- Framer Motion supports IE11+ (with polyfills)
- CSS Grid and Flexbox (IE11+ with fallbacks)

---

## 11. Usage Guidelines

### When to Use Brand Orange (#F78140)

**Primary Uses**:
- All CTA buttons (primary actions)
- Hover states for links and icons
- Active/current state indicators
- Number badges and version badges
- Gradient accents
- Border highlights on hover
- Shadow glows

**Avoid Using For**:
- Large text blocks (readability)
- Backgrounds without sufficient contrast
- Multiple buttons in close proximity (use hierarchy)

### When to Use Gradients

**Appropriate Contexts**:
- Premium cards (CTA, Whitepaper)
- Background overlays (subtle, < 10% opacity)
- Button backgrounds (brand-orange to orange-600)
- Number badges (creates depth)
- Stat cards (accent color variations)
- Hover glow effects

**Avoid**:
- Body text backgrounds
- Small UI elements
- More than 2-3 colors per gradient
- High contrast gradients (jarring)

### Typography Hierarchy

**Always Follow**:
1. Hero headline (largest): text-6xl to text-9xl
2. Section headlines: text-4xl to text-6xl
3. Card/feature titles: text-2xl to text-3xl
4. Body text: text-base to text-xl
5. Microcopy: text-sm to text-xs

**Never**:
- Skip heading levels (h1 → h3)
- Use display fonts for body text
- Mix too many sizes in one section

### Spacing Consistency

**Maintain**:
- Section padding: Always `py-24 md:py-32`
- Horizontal padding: Always `px-6 md:px-12 lg:px-16`
- Card padding: Standard `p-8`, Premium `p-12`
- Grid gaps: Consistent within sections

### Animation Guidelines

**Do**:
- Use `viewport={{ once: true }}` for scroll animations
- Stagger grid/list items by 100-200ms
- Keep transitions under 1 second (except continuous animations)
- Use custom easing `[0.16, 1, 0.3, 1]` for premium feel

**Don't**:
- Overuse animations (not every element needs motion)
- Animate on every interaction (reserve for meaningful actions)
- Use jarring movements (no large rotations or extreme scales)
- Block user interaction during animations

### Copy Guidelines

**Maintain Voice**:
- Direct, confident statements
- User-focused ("You tell", "You receive")
- Technical accuracy with simple explanations
- Future-oriented framing

**Avoid**:
- Excessive punctuation (!!!!)
- Marketing clichés ("revolutionary", "game-changing")
- Vague promises ("amazing", "incredible")
- Corporate jargon

### Component Reuse

**Established Patterns**:
- Primary CTA button style (orange gradient, scale on hover)
- Card structure (rounded-2xl, border, padding, hover glow)
- Icon containers (rounded background, scale on hover)
- Form inputs (transparent background, orange focus)
- Badge/pill style (rounded-full, semi-transparent background)

**When Creating New Components**:
- Reference existing components for styling
- Maintain border radius consistency (xl, 2xl, 3xl, full)
- Use established color palette
- Follow spacing scale
- Include hover states
- Add Framer Motion animations

---

## 12. Brand Checklist

Use this checklist when creating new pages or components:

### Visual
- [ ] Background: Pure black (#0A0A0A) with gradient overlays
- [ ] Brand orange (#F78140) used for CTAs and accents
- [ ] Subtle noise texture applied
- [ ] Gradients use < 20% opacity unless intentional
- [ ] Border radius follows scale (xl, 2xl, 3xl, full)
- [ ] Shadows include color glow (brand-orange/20-40)

### Typography
- [ ] Space Grotesk font for all text
- [ ] Hierarchy maintained (hero → sections → cards → body)
- [ ] Responsive font sizes (mobile → tablet → desktop)
- [ ] Line heights appropriate (tight for display, relaxed for body)
- [ ] Color contrast meets WCAG AA minimum

### Spacing
- [ ] Section padding: py-24 md:py-32
- [ ] Horizontal padding: px-6 md:px-12 lg:px-16
- [ ] Container max-width defined
- [ ] Grid gaps consistent with established patterns
- [ ] Margins follow spacing scale

### Interactions
- [ ] Framer Motion for scroll animations
- [ ] Hover states on interactive elements
- [ ] Scale animations use 105-110% range
- [ ] Transitions 200-500ms for most effects
- [ ] `viewport={{ once: true }}` for scroll animations

### Responsive
- [ ] Mobile-first approach (base styles then md:, lg:)
- [ ] Tested at 320px, 768px, 1024px, 1280px+
- [ ] Touch targets minimum 44x44px
- [ ] Grid adapts (1 col → 2 col → 3-4 col)
- [ ] Hidden/visible elements appropriate per breakpoint

### Copy
- [ ] Direct, confident tone
- [ ] User-focused language ("You", benefits-first)
- [ ] Technical terms explained simply
- [ ] CTAs clear and action-oriented
- [ ] No marketing clichés

### Accessibility
- [ ] Semantic HTML (section, header, footer, nav)
- [ ] ARIA labels on icon buttons
- [ ] Focus states visible
- [ ] Color contrast sufficient
- [ ] Form inputs have labels/placeholders

### Performance
- [ ] Images optimized (< 500KB for photos)
- [ ] Fonts use font-display: swap
- [ ] Videos compressed (< 5MB)
- [ ] Animations use transform/opacity (GPU)
- [ ] No layout shift (CLS)

---

*End of Brand Book*

**Document Version**: 1.0
**Last Updated**: January 14, 2026
**Project**: Umbrellish Landing Page
**Extracted By**: Claude Sonnet 4.5

---

## Quick Reference Card

**Primary Color**: #F78140
**Background**: #0A0A0A
**Font**: Space Grotesk (300-700)
**Border Radius**: xl (12px), 2xl (16px), 3xl (24px)
**Section Padding**: py-24 md:py-32
**Animation**: Framer Motion, 0.6s fade + slide
**Voice**: Direct, confident, user-empowering
**Assets**: /public/logo.svg, /fonts/SpaceGrotesk-Variable.ttf
