# VessPay - Official Website

This is the official website for VessPay, a premium African fintech platform focused on secure payments, wallets, FX, and global money movement.

## Tech Stack
- **Framework**: Next.js 15 (App Router)
- **Styling**: Vanilla CSS Modules (no Tailwind dependency, though naming conventions are similar)
- **Fonts**: Inter (Body), Outfit (Headings) via `next/font/google`
- **Icons**: Lucide React

## Getting Started

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run Development Server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view the site.

3. **Build for Production**:
   ```bash
   npm run build
   npm start
   ```

## Project Structure
- `src/app`: App Router pages and layouts.
- `src/components`: Reusable UI components (Navbar, Footer, Hero, etc.).
- `src/styles`: (Optional) global styles if not in `app`.

## Design System
- **Theme**: Premium African Fintech / "Forest Green & Gold".
- **Colors**: Forest Green (`#1E4D2B`), Gold (`#D4AF37`), Kente Accents.
- **Typography**: Clean, readable sans-serifs with tracking-tight headings.

## Key Features
- **Responsive**: Mobile-first design.
- **Performance**: Static generation for fast load times.
- **Accessibility**: Semantic HTML and accessible contrast ratios.
