# Design System Documentation - Project Structure

This document provides an overview of the project structure and files.

## 📁 Project Structure

```
design-system-docs/
├── .github/
│   └── workflows/
│       └── deploy.yml              # GitHub Actions deployment workflow
├── components/
│   ├── docs/                       # Documentation components
│   │   ├── ButtonDocs.tsx          # Button component documentation
│   │   ├── ColorTokens.tsx         # Color tokens showcase
│   │   ├── SpacingTokens.tsx       # Spacing tokens showcase
│   │   ├── TypographyTokens.tsx    # Typography documentation
│   │   ├── BorderRadiusTokens.tsx  # Border radius showcase
│   │   └── ElevationTokens.tsx     # Elevation/shadows showcase
│   ├── figma/
│   │   └── ImageWithFallback.tsx   # Protected utility component
│   └── ui/
│       ├── button.tsx              # Button component (custom)
│       └── [other ShadCN components] # Pre-existing UI components
├── styles/
│   └── globals.css                 # Design system tokens & styles
├── App.tsx                         # Main documentation app
├── README.md                       # Project overview & quick start
├── DEPLOYMENT.md                   # GitHub Pages deployment guide
├── CONTRIBUTING.md                 # Contribution guidelines
├── PROJECT_STRUCTURE.md            # This file
└── package.json                    # Dependencies & scripts

```

## 🎨 Design System Files

### Core Files

| File | Purpose |
|------|---------|
| `/styles/globals.css` | All design tokens (colors, spacing, typography, etc.) |
| `/components/ui/button.tsx` | Button component built with design tokens |
| `/App.tsx` | Documentation site with navigation and sections |

### Documentation Components

All documentation components are located in `/components/docs/`:

- **ColorTokens.tsx** - Displays all color tokens with hex values
- **SpacingTokens.tsx** - Visual spacing scale demonstration
- **TypographyTokens.tsx** - Typography scale with live examples
- **BorderRadiusTokens.tsx** - Border radius tokens with visual examples
- **ElevationTokens.tsx** - Shadow levels demonstration
- **ButtonDocs.tsx** - Complete button component documentation

## 🎯 Design Tokens Reference

### Available Token Categories

1. **Colors**
   - Gray scale (100-900)
   - Brand colors (noon yellow, clear blue, midnight blue)
   - Semantic colors (surface, content, border)
   - Status colors (success, error, warning, info)

2. **Spacing**
   - 8 scales from 100 (4px) to 800 (48px)

3. **Typography**
   - 6 text scales (xs, sm, base, lg, xl, 2xl)
   - 3 font weights (regular, medium, semibold)
   - Archivo font family

4. **Border Radius**
   - 7 radius values (100-600 + full)
   - Semantic tokens (radius, radius-button, radius-card)

5. **Elevation**
   - 3 shadow levels (sm, md, lg)

## 🚀 Key Commands

```bash
# Development
npm install          # Install dependencies
npm run dev         # Start development server

# Production
npm run build       # Build for production
npm run preview     # Preview production build

# Deployment
git push            # Auto-deploys to GitHub Pages (after setup)
```

## 📄 Documentation Files

### README.md
- Project overview
- Quick start guide
- Technology stack
- GitHub Pages setup overview

### DEPLOYMENT.md
- Step-by-step GitHub Pages deployment
- Troubleshooting guide
- Custom domain setup
- Auto-deployment information

### CONTRIBUTING.md
- How to add new components
- How to add new design tokens
- Code style guidelines
- Accessibility requirements
- Pull request process

## 🔧 Configuration Files

### .github/workflows/deploy.yml
GitHub Actions workflow that automatically:
- Builds the project on push to main
- Deploys to GitHub Pages
- Handles all deployment steps

### package.json
Dependencies include:
- React 18
- Tailwind CSS v4
- TypeScript
- Vite (build tool)
- Lucide React (icons, if needed)

## 🎨 Design System Features

### Design Tokens
- ✅ 50+ color tokens
- ✅ 8 spacing scales
- ✅ 6 typography scales  
- ✅ 7 border radius options
- ✅ 3 elevation levels
- ✅ Archivo font family

### Components
- ✅ Button (primary, secondary, outline)
- ✅ 3 sizes for all variants (sm, md, lg)
- ✅ Accessible with keyboard navigation
- ✅ Full TypeScript support

### Documentation
- ✅ Interactive component showcase
- ✅ Visual token galleries
- ✅ Code examples
- ✅ Props API documentation
- ✅ Usage guidelines
- ✅ Accessibility notes

## 🌐 Live Site Structure

When deployed, the site includes:

1. **Overview** - Introduction and getting started
2. **Design Tokens**
   - Colors
   - Spacing
   - Typography
   - Border Radius
   - Elevation
3. **Components**
   - Button (more can be added)
4. **Resources**
   - Getting Started guide
   - Guidelines

## 📝 Notes

- **Protected Files**: `/components/figma/ImageWithFallback.tsx` should not be modified
- **ShadCN Components**: Pre-existing components in `/components/ui/` (except button.tsx)
- **Design System First**: All new components should use design tokens from globals.css
- **Typography**: HTML elements have predefined styles; avoid Tailwind typography classes

## 🔄 Update Workflow

1. Make changes locally
2. Test with `npm run dev`
3. Build with `npm run build`
4. Commit and push to GitHub
5. GitHub Actions automatically deploys to Pages

## 🎯 Next Steps

To extend the design system:

1. Add new components to `/components/ui/`
2. Create documentation in `/components/docs/`
3. Update `/App.tsx` navigation
4. Add new design tokens to `/styles/globals.css`
5. Follow guidelines in `CONTRIBUTING.md`

---

**Last Updated**: November 2024
**Version**: 1.0.0
