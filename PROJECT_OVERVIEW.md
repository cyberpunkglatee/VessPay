# VessPay — Comprehensive Project Overview

## 🏗️ Platform Identity

**VessPay** is a B2B2C Hybrid Fintech Platform operating in direct sponsorship alliance with Ecobank Ghana / Ecobank Group. The platform serves two audiences through one product:

- **Engine A — Consumer Wallet**: A multi-currency holding and local spending wallet for African remote workers, diaspora, and travelers. Hold foreign currency, shield cash from inflation, and spend locally across 33 African countries without a local SIM.
- **Engine B — Enterprise Payout API**: A unified 33-country payout API for global B2B HR systems (payroll, EOR, contractor payments). Single integration, instant settlement, automated compliance.

**Core Insight**: Both engines feed into the **same wallet product**. A remote worker paid by an international company via the API receives the same Borderless Multi-Country Wallet as a diaspora traveler who signed up directly.

## 🏗️ Technology Stack
- **Framework**: Next.js 16.1.7 (App Router)
- **Language**: JavaScript (ESM)
- **Styling**: Tailwind CSS 3.4 with custom design tokens
- **Animation**: Framer Motion 12.x
- **Icons**: Lucide React
- **State Management**: React hooks (useState, useEffect)
- **Build Tool**: Turbopack (Next.js built-in)

### Key Dependencies
- `next`: 16.1.7 - React framework with SSR capabilities
- `react`: 19.2.3 - Core React library
- `react-dom`: 19.2.3 - DOM-specific React methods
- `framer-motion`: 12.38.0 - Animation library
- `lucide-react`: 0.563.0 - Icon library
- `clsx`: 2.1.1 - Conditional classnames
- `tailwind-merge`: 3.5.0 - Tailwind class merging

## 📁 Project Structure

```
www.vesspay.com/
├── public/                 # Static assets
│   ├── assets/            # Brand elements & security graphics
│   ├── audiences/         # Target audience imagery
│   ├── mockups/           # Feature mockups and visual assets
│   └── various SVG files
├── src/
│   ├── app/              # Next.js App Router pages
│   │   ├── about/        # About page (founder, Ecobank alliance, roadmap)
│   │   ├── blog/         # Blog page
│   │   ├── contact/      # Contact page
│   │   ├── docs/
│   │   │   └── api/      # Developer API documentation page
│   │   ├── download/     # App download / waitlist page
│   │   ├── features/     # Features (Platform/Business/Individual tabs)
│   │   ├── how-it-works/ # How it works explanation
│   │   ├── legal/        # Legal pages (privacy, terms, regulatory)
│   │   ├── pricing/      # Pricing (Consumer Wallet + Enterprise API tiers)
│   │   ├── who-its-for/  # Target audiences page
│   │   ├── globals.css   # Global styles and design tokens
│   │   ├── layout.js     # Root layout component
│   │   └── page.js       # Homepage
│   ├── components/       # Reusable React components
│   │   ├── AppMockup.js              # Multi-currency wallet phone mockup
│   │   ├── AudiencePanels.js         # 4-panel audience targeting
│   │   ├── CTASection.js             # Dual CTA (waitlist + enterprise)
│   │   ├── CookieBanner.js           # GDPR cookie banner
│   │   ├── DualEngineSection.js      # Two-column ecosystem showcase (NEW)
│   │   ├── FAQAccordion.js           # FAQ component
│   │   ├── FeaturesGrid.js           # Platform capabilities grid
│   │   ├── FeaturesSection.js        # Legacy features section
│   │   ├── Footer.js                 # Site footer (B2B2C columns)
│   │   ├── Hero.js                   # Legacy hero (unused)
│   │   ├── HeroSection.js            # Main hero with B2B2C positioning
│   │   ├── HowItWorksSection.js      # Tabbed individual/business flows
│   │   ├── IdentitySection.js        # Brand identity section
│   │   ├── KenteDivider.js           # Cultural divider component
│   │   ├── Navbar.js                 # Navigation (dual CTAs)
│   │   ├── PageHero.js               # Reusable page hero
│   │   ├── StatsBar.js               # Animated statistics counter
│   │   ├── TrustMarquee.js           # Scrolling trust signals
│   │   ├── WhatsAppButton.js         # WhatsApp integration
│   │   └── *.module.css files        # Component-specific styles
│   └── lib/
│       └── utils.js      # Utility functions (cn)
├── .gitignore
├── MAINTENANCE.md
├── PROJECT_OVERVIEW.md
├── README.md
├── eslint.config.mjs
├── jsconfig.json
├── next.config.mjs
├── package.json
├── postcss.config.mjs
└── tailwind.config.mjs
```

## 🎨 Design System

### Color Palette
- **Primary**: Forest Green (#1a3a2a) and Gold (#c9a84c)
- **Deep Background**: #0a1f12
- **Surface**: White at 3-5% opacity for glassmorphism cards
- **Border**: White at 5-6% opacity
- **Typography**: Inter (body), Outfit (headings), Playfair Display (serif accents)

### Key Design Principles
1. **Luxury Fintech Aesthetic**: Premium feel with African cultural elements
2. **Mobile-First**: Responsive design optimized for all devices
3. **Dual-Audience**: Clear visual pathways for enterprise and consumer users
4. **Accessibility**: WCAG compliant with proper ARIA attributes

## ⚙️ Core Website Sections

### Homepage Flow
1. **HeroSection** — "The Borderless Financial Ecosystem for Africa and the Diaspora" with dual CTAs
2. **TrustMarquee** — Scrolling trust signals (Ecobank, Multi-Currency, API, etc.)
3. **DualEngineSection** — Two-column interactive block showing Wallet + API sides
4. **HowItWorksSection** — Tabbed flows for individuals and businesses
5. **FeaturesGrid** — Platform capabilities (API, Wallet, FX Engine, Settlement)
6. **AudiencePanels** — 4 audience panels (Diaspora, Remote Workers, EOR, Fintech)
7. **StatsBar** — 33 Countries, 160+ Currency Pairs, 99.9% Uptime, 1B+ GHS
8. **CTASection** — Dual layout: consumer waitlist form + enterprise API CTA

### Sub-Pages
- **/features** — 3-tab feature showcase (Platform, Business, Individual)
- **/pricing** — Dual-tier pricing (Consumer Wallet + Enterprise API)
- **/docs/api** — Developer API documentation with code examples
- **/about** — Founder story, Ecobank alliance, roadmap
- **/how-it-works** — Detailed how-it-works flow
- **/who-its-for** — Target audience deep-dives
- **/legal/** — Privacy, Terms, Regulatory

## 🌐 Target Audiences & Value Propositions

### Consumer (Engine A — Wallet)
| Audience | Value Proposition |
|----------|------------------|
| Diaspora & Travelers | Borderless wallet, spend locally, no SIM required |
| Remote Workers | Get paid globally, hold USD, shield from inflation |

### Enterprise (Engine B — API)
| Audience | Value Proposition |
|----------|------------------|
| EOR & HR Platforms | Single API, 33 countries, automated payroll |
| Fintech Partners | White-label wallet infrastructure, wholesale FX |

## 🚀 Development Workflow

### Available Scripts
```bash
npm run dev      # Start development server
npm run build    # Create production build
npm run start    # Start production server
npm run lint     # Run ESLint for code quality
```

### Git Integration
- **Repository**: https://github.com/cyberpunkglatee/VessPay.git
- **Branch Strategy**: Main branch with feature-based development
- **Deployment**: Vercel (vesspay.vercel.app)

## 🛡️ Security & Compliance

### Data Protection
- **GDPR Compliance**: Cookie banner and privacy policy
- **Data Encryption**: HTTPS enforcement
- **Privacy by Design**: Minimal data collection principles

### Financial Compliance
- **Ecobank Sponsorship**: Regulated banking infrastructure
- **Regulatory Pages**: Dedicated sections for legal compliance
- **Transparency**: Clear terms of service and pricing disclosure

---

*Last Updated: August 4, 2026*
*Project Status: Active Development — B2B2C Platform Pivot*
*Version: 0.2.0*