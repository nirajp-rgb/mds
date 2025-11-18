# Quick Deployment Instructions

Your design system documentation is ready to be pushed to GitHub! Follow these simple steps:

## Option 1: Using Git Command Line (Recommended)

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit your changes
git commit -m "Initial commit: Design system documentation"

# Add your GitHub repository as remote
git remote add origin https://github.com/nirajp-rgb/mds.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Option 2: Using GitHub Desktop

1. Open GitHub Desktop
2. Click "Add" → "Add Existing Repository"
3. Select this project folder
4. Click "Publish repository" or "Push origin"

## Step 3: Enable GitHub Pages

After pushing your code:

1. Go to https://github.com/nirajp-rgb/mds/settings/pages
2. Under "Source", select **GitHub Actions**
3. The workflow will automatically deploy your site

Your documentation will be live at:
**https://nirajp-rgb.github.io/mds/**

## What's Included

✅ All design tokens (colors, spacing, typography, border radius, elevation)
✅ Interactive token galleries
✅ Button component with documentation
✅ Responsive documentation site
✅ GitHub Actions workflow for auto-deployment
✅ Complete markdown documentation

## Troubleshooting

If you encounter any issues:

1. **"remote origin already exists"**: Run `git remote remove origin` then try again
2. **Permission denied**: Make sure you're logged into GitHub and have access to the repository
3. **Build fails**: Check the Actions tab in your GitHub repository for error details

## Next Steps

After deployment:
1. Visit your live site: https://nirajp-rgb.github.io/mds/
2. Customize design tokens in `styles/globals.css`
3. Add more components following the button pattern
4. Update the README with your team's information

---

Need help? Check out the other documentation files:
- `README.md` - Project overview
- `DEPLOYMENT.md` - Detailed deployment guide
- `CONTRIBUTING.md` - How to add components
- `PROJECT_STRUCTURE.md` - File reference
