# Livenza Group — Demo Portfolio Website

A modern, responsive Single-Page Application (SPA) showcasing the **Livenza Group** corporate portfolio — a collective entity of sustainability-driven companies united under one ecosystem.

> **Live Demo:** 
https://livenza-group-demo-website.vercel.app/

---

## ✨ Features

- **Single-Page Application** — State-driven view toggling, no router needed
- **Firebase Backend** — Real-time content management powered by Firestore
- **Secure Admin Panel** — Built-in dashboard protected by Firebase Authentication
- **5 Subsidiary Companies** — Dynamic data seeded and fetched from the cloud
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
| [Firebase](https://firebase.google.com) | Backend (Firestore Database & Authentication) |
| [Tailwind CSS 3](https://tailwindcss.com) | Utility-first styling with dark mode |
| [Framer Motion](https://www.framer.com/motion/) | Animations & scroll effects |
| [Lucide React](https://lucide.dev) | Icon library |

## 📁 Project Structure

```
src/
├── data/
│   └── subsidiaries.js        # Default fallback data (used to auto-seed Firestore)
├── components/
│   ├── AdminPanel.jsx          # Secure dashboard to edit content
│   ├── AdminLogin.jsx          # Firebase Authentication UI
│   ├── Navbar.jsx              # Sticky glassmorphic navbar + dark mode toggle
│   ├── Hero.jsx                # Full-viewport hero with parallax
│   ├── TileGrid.jsx            # Responsive 2-column grid with scroll effects
│   ├── DetailView.jsx          # Company detail page with slide transitions
│   └── Footer.jsx              # Corporate footer with hidden Admin link
├── App.jsx                     # Root SPA, Firebase data syncing, routing
├── firebase.js                 # Firebase initialization & configuration
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

### Admin Panel Access
To access the content management system:
1. Ensure your Firebase configuration is correctly added in `src/firebase.js`.
2. Navigate to `http://localhost:5173/#admin` (or click the "Admin" link in the footer).
3. Log in with your Firebase Authentication credentials.
4. Any changes saved here will immediately write to Firestore and update the live site.

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
