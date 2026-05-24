# Dristi

This repository contains a React + Vite marketing website for **Shreya Psyllium Industries**, located in the `Shreya-Psyllium` folder.

## Overview

The site presents Shreya Psyllium Industries as a premium manufacturer and exporter of psyllium products. It includes:

- A branded landing page with animated hero content
- About, products, certifications, exports, and contact sections
- Tailwind CSS v4 styling with a custom color palette and typography
- Framer Motion transitions and scroll-based reveal animations
- Business contact details, a WhatsApp CTA, and an embedded Google Map

## Tech Stack

- React 19
- Vite 7
- Tailwind CSS 4 via `@tailwindcss/vite`
- Framer Motion

## Project Structure

```text
.
├── README.md
└── Shreya-Psyllium
    ├── public/
    ├── src/
    │   ├── components/
    │   ├── App.jsx
    │   ├── index.css
    │   └── main.jsx
    ├── index.html
    ├── package.json
    └── vite.config.js
```

## Getting Started

### Prerequisites

- Node.js 18+ recommended
- npm

### Install dependencies

```bash
cd Shreya-Psyllium
npm install
```

### Start the development server

```bash
npm run dev
```

### Create a production build

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

## Available Scripts

Inside `Shreya-Psyllium/package.json`:

- `npm run dev` starts the Vite dev server
- `npm run build` creates the production build
- `npm run preview` previews the production build locally

## Notes

- The contact form in [`Shreya-Psyllium/src/App.jsx`](/Users/maulik/Documents/Dristi/Shreya-Psyllium/src/App.jsx) is currently presentational only and does not submit data to a backend.
- Several product and showcase images are loaded from external URLs, so those sections depend on third-party image availability.
- The About section references `/src/assets/Untitled 24.png` and `/src/assets/Untitled 22.png`, but there is no `src/assets` directory in the current repository. Those image paths will need to be added or updated for the section to render as intended.

## Customization

Most content can be updated directly in [`Shreya-Psyllium/src/App.jsx`](/Users/maulik/Documents/Dristi/Shreya-Psyllium/src/App.jsx), including:

- Navigation labels
- Product cards
- Certifications
- Business details
- Contact information

Global styling, colors, and fonts are defined in [`Shreya-Psyllium/src/index.css`](/Users/maulik/Documents/Dristi/Shreya-Psyllium/src/index.css).
