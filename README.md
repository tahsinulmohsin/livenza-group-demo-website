# Livenza Group — Demo Portfolio Website

A modern, responsive Single-Page Application (SPA) showcasing the **Livenza Group** corporate portfolio — a collective entity of sustainability-driven companies united under one ecosystem.

> **Live Demo:** [Deployed on Vercel](#) *(link updated after deployment)*

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2A%2Agithub.com%2Ftahsinulmohsin%2Flivenza-group-demo-website)

---

## ✨ Features

- **Single-Page Application** — State-driven view toggling, no router needed
- **5 Subsidiary Companies** — Real data sourced from [livenzagroup.com](https://livenzagroup.com)
- **Dark Mode** — Toggle with system preference detection & localStorage persistence
- **Scroll Animations** — Parallax backgrounds, staggered reveals, 3D tile perspectives
- **Glassmorphic Navbar** — Frosted glass effect with animated back navigation
- **Fully Responsive** — Mobile-first design with touch-friendly targets
- **SEO Optimized** — Meta tags, Open Graph, semantic HTML

## 🏢 Companies Featured

| Company | Sector |
|---------|--------|
| **Noor Autos — BYD** | Automotive — EV Mobility |
| **Expo Accessories Ltd.** | RMG & Packaging Manufacturing |
| **Greenery Energy Solutions Ltd.** | Clean Energy & Industrial Solutions — BD |
| **Greenery Import Export Ltd.** | Clean Energy & Industrial Solutions — Canada |
| **Greenery Mart** | Industrial Retail — Worker-Centric Stores |

## 🛠 Tech Stack

| Technology | Purpose |
|------------|---------|
| [React 19](https://react.dev) | UI framework (functional components, hooks) |
| [Vite 6](https://vite.dev) | Build tool & dev server |
| [Tailwind CSS 3](https://tailwindcss.com) | Utility-first styling with dark mode |
| [Framer Motion](https://www.framer.com/motion/) | Animations & scroll effects |
| [Lucide React](https://lucide.dev) | Icon library |

## 📁 Project Structure

```
src/
├── data/
│   └── subsidiaries.js        # Structured data for all 5 companies
├── components/
│   ├── Navbar.jsx              # Sticky glassmorphic navbar + dark mode toggle
│   ├── Hero.jsx                # Full-viewport hero with parallax
│   ├── TileGrid.jsx            # Responsive 2-column grid with scroll effects
│   ├── DetailView.jsx          # Company detail page with slide transitions
│   └── Footer.jsx              # Corporate footer
├── App.jsx                     # Root SPA with view state management
├── main.jsx                    # React 18 entry point
└── index.css                   # Global styles, Tailwind directives, animations
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

```bash
# Clone the repository
git clone https://github.com/tahsinulmohsin/livenza-group-demo-website.git
cd livenza-group-demo-website

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at **http://localhost:5173/**

### Production Build

```bash
npm run build
npm run preview
```

## 🎨 Brand Colors

| Token | Hex | Usage |
|-------|-----|-------|
| Primary | `#1C2539` | Headings, navbar, buttons |
| Dark | `#20282D` | Hover states, footer |
| Subtext | `#5D666F` | Body text, descriptions |
| Dark BG | `#0B0F1A` | Dark mode background |

## 📄 License

This project is a demo/portfolio website for presentation purposes.  
All brand assets and content belong to **Livenza Group**.

---

Built with ❤️ for Livenza Group
