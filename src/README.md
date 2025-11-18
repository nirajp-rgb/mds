# Design System Documentation

A comprehensive design system built with React, Tailwind CSS, and custom design tokens. This project provides a complete documentation site for your design system, ready to deploy to GitHub Pages.

![Design System](https://img.shields.io/badge/Design%20System-v1.0.0-blue)
![React](https://img.shields.io/badge/React-18-61dafb)
![Tailwind](https://img.shields.io/badge/Tailwind-v4-38bdf8)
![TypeScript](https://img.shields.io/badge/TypeScript-Ready-3178c6)

## ✨ Features

- 🎨 **50+ Design Tokens** - Colors, spacing, typography, and more
- 🧩 **Component Library** - Production-ready React components
- 📱 **Responsive Documentation** - Beautiful, mobile-friendly docs
- 🚀 **Auto-Deploy** - GitHub Actions for automatic deployment
- ♿ **Accessible** - WCAG 2.1 AA compliant components
- 🎯 **Customizable** - Easy to modify via CSS custom properties

## 🚀 Quick Start

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The documentation site will be available at `http://localhost:5173`

## 📦 Deploy to GitHub Pages

**Choose your path:**

1. **📋 Use the Interactive Checklist** (Recommended for first-time users)
   - Open `GITHUB_SETUP_CHECKLIST.md`
   - Follow the step-by-step checklist
   - Check off items as you complete them

2. **📖 Read the Detailed Guide**
   - Open `DEPLOYMENT.md`
   - Complete walkthrough with troubleshooting
   - Includes custom domain setup

3. **⚡ Quick Deploy** (For experienced users)
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Design system documentation"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```
   Then enable GitHub Pages in your repository settings (Settings → Pages → Source: GitHub Actions).

Your site will be live at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

**Note:** The GitHub Actions workflow is already configured in `.github/workflows/deploy.yml`

## 🎨 What's Included

### Design Tokens

All design tokens are defined in `/styles/globals.css` as CSS custom properties:

- **🎨 Colors**: 50+ tokens including gray scale, brand colors, semantic colors, and status colors
- **📏 Spacing**: 8 spacing scales from 4px to 48px (100-800)
- **✍️ Typography**: Archivo font family with 6 text scales and 3 font weights
- **⬜ Border Radius**: 7 radius tokens plus semantic aliases
- **💫 Elevation**: 3 shadow levels for depth and hierarchy

### Components

Built with design tokens and fully documented:

- **Button**: 3 variants (primary, secondary, outline) × 3 sizes (sm, md, lg)
- _More components can be added following the patterns_

### Documentation Site

Interactive documentation includes:

- **Overview** - Introduction and design principles
- **Token Galleries** - Visual showcases of all design tokens
- **Component Docs** - Live examples with code snippets
- **Props API** - Complete TypeScript interface documentation
- **Usage Examples** - Real-world implementation patterns
- **Accessibility Notes** - WCAG compliance information

## 📁 Project Structure

```
design-system-docs/
├── .github/workflows/deploy.yml    # Auto-deployment setup
├── components/
│   ├── docs/                       # Documentation pages
│   │   ├── ButtonDocs.tsx
│   │   ├── ColorTokens.tsx
│   │   ├── SpacingTokens.tsx
│   │   ├── TypographyTokens.tsx
│   │   ├── BorderRadiusTokens.tsx
│   │   └── ElevationTokens.tsx
│   └── ui/
│       └── button.tsx              # Custom button component
├── styles/
│   └── globals.css                 # Design system tokens
├── App.tsx                         # Documentation site
├── README.md                       # This file
├── DEPLOYMENT.md                   # Detailed deployment guide
├── GITHUB_SETUP_CHECKLIST.md       # Interactive setup checklist
├── CONTRIBUTING.md                 # Contribution guidelines
└── PROJECT_STRUCTURE.md            # Complete file reference
```

See `PROJECT_STRUCTURE.md` for detailed file descriptions.

## 🎯 Usage

### Using Design Tokens

```tsx
// In your components
<div className="p-[var(--spacing-400)] bg-[var(--mds-color-surface-primary_1)]">
  <h1>Uses design system typography automatically</h1>
  <p className="text-[var(--mds-color-content-secondary_1)]">
    Secondary text color
  </p>
</div>
```

### Using Components

```tsx
import { Button } from "./components/ui/button";

function MyApp() {
  return (
    <div>
      <Button variant="primary" size="md">
        Get Started
      </Button>
      <Button variant="outline" size="sm">
        Learn More
      </Button>
    </div>
  );
}
```

## 🛠️ Tech Stack

- **React 18** - UI framework
- **Tailwind CSS v4** - Utility-first CSS framework
- **TypeScript** - Type safety (implicit through React)
- **Vite** - Build tool and dev server
- **Archivo Font** - Typography from Google Fonts

## 🔄 Making Updates

After initial deployment, updates are automatic:

```bash
# Make your changes
# Test locally
npm run dev

# Commit and push
git add .
git commit -m "Add new component"
git push

# GitHub Actions automatically rebuilds and deploys!
```

## 🤝 Contributing

Want to add new components or tokens? Check out `CONTRIBUTING.md` for:

- Component creation guidelines
- Design token best practices
- Code style requirements
- Pull request process

## 📚 Documentation Files

- **README.md** (this file) - Project overview
- **DEPLOYMENT.md** - Complete GitHub Pages setup guide
- **GITHUB_SETUP_CHECKLIST.md** - Step-by-step deployment checklist
- **CONTRIBUTING.md** - How to add components and tokens
- **PROJECT_STRUCTURE.md** - Detailed file reference

## 🐛 Troubleshooting

Having issues? Check:

1. `DEPLOYMENT.md` for deployment troubleshooting
2. `GITHUB_SETUP_CHECKLIST.md` for setup verification
3. GitHub Actions tab for build errors
4. Browser console for runtime errors

## 📝 License

MIT License - feel free to use this design system in your projects.

## 🌟 Next Steps

1. ✅ Deploy to GitHub Pages (see `GITHUB_SETUP_CHECKLIST.md`)
2. ✅ Customize design tokens in `styles/globals.css`
3. ✅ Add more components following the button pattern
4. ✅ Share with your team
5. ✅ Contribute improvements back to the project

---

**Built with ❤️ using React, Tailwind CSS, and custom design tokens**

Need help? Open an issue or check the documentation files!
