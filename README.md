# Bishal Karki — Portfolio

Personal portfolio website for **Bishal Karki**, a PHP & Node.js Backend Developer.  
Live at **[bysalkarki.github.io/bishal-karki](https://bysalkarki.github.io/bishal-karki/)**

## ✨ Overview

A single-page portfolio styled as a vintage line-printer report — monospace type, sprocket-hole margins, perforated fold-lines, and green-bar listings. Built to stand apart from the typical dark-neon developer portfolio.

### Sections

- **Hero** — Batch-job banner with name, role & tagline
- **Skills** — Technical proficiencies (PHP, Node.js, Laravel, Express, etc.)
- **Experience** — Professional timeline
- **Projects** — Featured work with descriptions & links
- **About** — Background & interests
- **Contact** — Get in touch
- **Reads** — Personal reading log (available at `/reads`)

## 🛠 Tech Stack

| Layer       | Technology                              |
| ----------- | --------------------------------------- |
| Framework   | React 18 + TypeScript                   |
| Build Tool  | Vite 5                                  |
| Styling     | Tailwind CSS + shadcn/ui                |
| Animations  | Framer Motion                           |
| Routing     | React Router DOM                        |
| Font        | Courier Prime (Google Fonts)            |
| Hosting     | GitHub Pages (via GitHub Actions)       |

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+)
- npm, yarn, or bun

### Install & Run

```bash
# Clone the repo
git clone git@github.com:bysalkarki/bishal-karki.git
cd bishal-karki

# Install dependencies
npm install

# Start dev server (http://localhost:8080)
npm run dev
```

### Build for Production

```bash
npm run build    # Output in ./dist
npm run preview  # Preview the production build locally
```

## 📁 Project Structure

```
├── public/              # Static assets (favicons, 404.html, etc.)
├── src/
│   ├── components/      # Reusable UI components
│   │   ├── ui/          # shadcn/ui primitives
│   │   ├── Hero.tsx
│   │   ├── Skills.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Navigation.tsx
│   │   └── report.tsx   # Line-printer visual elements
│   ├── data/            # Static data (books, etc.)
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Utility functions
│   ├── pages/           # Route-level page components
│   │   ├── Index.tsx
│   │   ├── Reads.tsx
│   │   └── NotFound.tsx
│   ├── App.tsx          # Root component with routing
│   └── main.tsx         # Entry point
├── index.html           # HTML shell
├── vite.config.ts       # Vite configuration
├── tailwind.config.ts   # Tailwind configuration
└── .github/workflows/   # CI/CD (auto-deploy to GitHub Pages)
```

## 🌐 Deployment

Deployment is **fully automated**. Push to `main` and GitHub Actions will:

1. Install dependencies (`npm ci`)
2. Build the project (`npm run build`)
3. Deploy the `dist/` folder to GitHub Pages

No manual build step required.

## 📄 License

This project is personal portfolio source code. Feel free to use it as inspiration for your own portfolio.
