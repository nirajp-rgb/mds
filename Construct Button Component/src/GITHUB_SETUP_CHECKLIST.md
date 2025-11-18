# GitHub Pages Setup Checklist

Use this checklist to deploy your design system documentation to GitHub Pages.

## ✅ Pre-Deployment Checklist

- [ ] Node.js and npm are installed
- [ ] Git is installed on your computer
- [ ] You have a GitHub account
- [ ] All files are present in your project

## 📋 Step-by-Step Checklist

### Step 1: Create GitHub Repository

- [ ] Go to https://github.com and sign in
- [ ] Click the "+" icon → "New repository"
- [ ] Enter repository name: ________________
- [ ] Set visibility to **Public**
- [ ] **Do NOT** initialize with README
- [ ] Click "Create repository"
- [ ] Copy the repository URL: ________________

### Step 2: Initialize Local Repository

Open terminal in your project directory and run these commands:

- [ ] `git init`
- [ ] `git add .`
- [ ] `git commit -m "Initial commit: Design system documentation"`
- [ ] `git branch -M main`
- [ ] `git remote add origin YOUR_REPO_URL` (replace with your URL)
- [ ] `git push -u origin main`

**Troubleshooting:**
- If push fails due to authentication, you may need to set up a Personal Access Token
- Go to GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)
- Generate new token with 'repo' scope
- Use token as password when pushing

### Step 3: Configure GitHub Pages

- [ ] Go to your repository on GitHub
- [ ] Click "Settings" tab
- [ ] Click "Pages" in left sidebar
- [ ] Under "Build and deployment", select Source: **GitHub Actions**
- [ ] Wait for the page to refresh

### Step 4: Monitor Deployment

- [ ] Click "Actions" tab in your repository
- [ ] Wait for "Deploy to GitHub Pages" workflow to appear
- [ ] Watch the workflow run (usually 2-5 minutes)
- [ ] Verify workflow completes with green checkmark ✓

### Step 5: Access Your Site

- [ ] Your site URL: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`
- [ ] Fill in your URL: ________________________________
- [ ] Visit the URL in your browser
- [ ] Verify the documentation loads correctly
- [ ] Test navigation between sections
- [ ] Check that all components display properly

## 🎉 Post-Deployment

- [ ] Bookmark your documentation URL
- [ ] Share the URL with your team
- [ ] Add the URL to your repository description
- [ ] Add the URL to your README.md if desired

### Update Repository Settings

- [ ] Go to repository main page
- [ ] Click gear icon ⚙️ next to "About"
- [ ] Add description: "Design system documentation and component library"
- [ ] Add website URL: your GitHub Pages URL
- [ ] Add topics: design-system, documentation, react, tailwind
- [ ] Save changes

## 🔄 Making Updates

After initial setup, updates are automatic:

- [ ] Make changes to your code locally
- [ ] Test with `npm run dev`
- [ ] Commit: `git add . && git commit -m "Description of changes"`
- [ ] Push: `git push`
- [ ] GitHub Actions automatically rebuilds and deploys
- [ ] Wait 2-3 minutes and refresh your site

## 🐛 Troubleshooting

### Workflow Failed
- [ ] Go to Actions tab
- [ ] Click on failed workflow
- [ ] Review error logs
- [ ] Common fix: Run `npm install` and `npm run build` locally
- [ ] Ensure all dependencies are in package.json

### 404 Error on Site
- [ ] Verify GitHub Pages is enabled (Settings → Pages)
- [ ] Check workflow completed successfully (Actions tab)
- [ ] Wait 5 minutes (propagation delay)
- [ ] Clear browser cache
- [ ] Try incognito/private browsing mode

### Assets Not Loading
- [ ] May need to configure base path in vite.config
- [ ] Check browser console for errors
- [ ] Verify file paths are correct

## 📞 Need Help?

Resources:
- [ ] Read DEPLOYMENT.md for detailed instructions
- [ ] Check [GitHub Pages Docs](https://docs.github.com/en/pages)
- [ ] Check [GitHub Actions Docs](https://docs.github.com/en/actions)
- [ ] Open an issue in your repository

## ✨ Optional Enhancements

- [ ] Add custom domain (Settings → Pages → Custom domain)
- [ ] Enable "Enforce HTTPS"
- [ ] Add repository badges to README
- [ ] Set up branch protection rules
- [ ] Add collaborators (Settings → Collaborators)

## 📊 Success Criteria

Your deployment is successful when:
- [ ] GitHub Actions workflow completes without errors
- [ ] Documentation site loads at your GitHub Pages URL
- [ ] All sections are visible and navigable
- [ ] Components display correctly
- [ ] Design tokens showcase properly
- [ ] No console errors in browser
- [ ] Site is responsive on mobile/desktop

---

## Quick Reference

**My Repository Info:**
- Repository Name: ________________
- GitHub Username: ________________
- Repository URL: ________________
- GitHub Pages URL: ________________

**Important Commands:**
```bash
# Push updates
git add .
git commit -m "Update message"
git push

# Local development
npm run dev

# Local build test
npm run build
```

**Important Links:**
- Repository: https://github.com/YOUR_USERNAME/YOUR_REPO
- Live Site: https://YOUR_USERNAME.github.io/YOUR_REPO/
- Actions: https://github.com/YOUR_USERNAME/YOUR_REPO/actions
- Settings: https://github.com/YOUR_USERNAME/YOUR_REPO/settings

---

**Date Completed**: ________________
**Deployed By**: ________________
**Notes**: ________________

🎊 **Congratulations on deploying your design system documentation!** 🎊
