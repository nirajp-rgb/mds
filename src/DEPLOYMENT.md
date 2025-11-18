# GitHub Pages Deployment Guide

This guide will walk you through deploying your design system documentation to GitHub Pages.

## Prerequisites

- A GitHub account
- Git installed on your computer
- Node.js and npm installed

## Step-by-Step Deployment

### 1. Create a New GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the **"+"** icon in the top right corner and select **"New repository"**
3. Choose a repository name (e.g., `design-system-docs`)
4. Make it **Public** (required for free GitHub Pages)
5. **Do not** initialize with README, .gitignore, or license
6. Click **"Create repository"**

### 2. Initialize and Push Your Code

Open your terminal in the project directory and run:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit your changes
git commit -m "Initial commit: Design system documentation"

# Rename branch to main
git branch -M main

# Add your GitHub repository as remote
# Replace YOUR_USERNAME and YOUR_REPO with your actual values
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git

# Push to GitHub
git push -u origin main
```

### 3. Configure GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** tab
3. In the left sidebar, click **Pages**
4. Under **"Build and deployment"**:
   - Source: Select **"GitHub Actions"**
5. The workflow will automatically trigger and deploy your site

### 4. Wait for Deployment

1. Go to the **Actions** tab in your repository
2. You should see a workflow run called "Deploy to GitHub Pages"
3. Wait for it to complete (usually takes 2-5 minutes)
4. Once complete, your site will be live!

### 5. Access Your Documentation

Your documentation will be available at:

```
https://YOUR_USERNAME.github.io/YOUR_REPO/
```

For example, if your username is `johndoe` and repo is `design-system-docs`:

```
https://johndoe.github.io/design-system-docs/
```

## Automatic Updates

Once set up, your documentation will automatically redeploy whenever you push changes to the `main` branch:

```bash
# Make your changes to the code

# Stage changes
git add .

# Commit changes
git commit -m "Update button documentation"

# Push to GitHub
git push

# GitHub Actions will automatically rebuild and deploy!
```

## Troubleshooting

### Build Failed

If the GitHub Action fails:

1. Go to the **Actions** tab
2. Click on the failed workflow
3. Review the error logs
4. Common issues:
   - Missing dependencies: Run `npm install` locally to ensure package.json is correct
   - Build errors: Run `npm run build` locally to test the build

### Page Not Loading

If the page shows a 404 error:

1. Verify GitHub Pages is enabled in Settings → Pages
2. Check that the workflow completed successfully in Actions tab
3. Wait a few minutes - sometimes deployment takes time to propagate
4. Clear your browser cache and try again

### Fixing Base Path Issues

If assets aren't loading, you may need to configure the base path:

1. Create/edit `vite.config.ts`:

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/YOUR_REPO_NAME/',
})
```

2. Commit and push the changes

## Custom Domain (Optional)

To use a custom domain:

1. Go to Settings → Pages
2. Under "Custom domain", enter your domain
3. Follow the DNS configuration instructions
4. Wait for DNS propagation (can take up to 48 hours)

## Need Help?

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- Check the repository issues for common problems

---

**Congratulations!** Your design system documentation is now live and will automatically update with every push to the main branch.
