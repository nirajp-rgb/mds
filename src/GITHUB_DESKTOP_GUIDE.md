# 📱 GitHub Desktop Deployment Guide

Easy step-by-step guide to publish your design system documentation using GitHub Desktop.

---

## Step 1: Open GitHub Desktop

If you don't have GitHub Desktop installed:
- Download from: https://desktop.github.com/
- Install and sign in with your GitHub account

---

## Step 2: Add Your Project to GitHub Desktop

### Option A: If this folder is already a git repository
1. In GitHub Desktop, click **File** → **Add Local Repository**
2. Click **Choose...** and select this project folder
3. Click **Add Repository**

### Option B: If this is a new project (recommended)
1. In GitHub Desktop, click **File** → **Add Local Repository**
2. Click **Choose...** and select this project folder
3. If you see "This directory does not appear to be a Git repository", click **Create a repository**
4. Fill in:
   - **Name**: mds
   - **Description**: Design system documentation with tokens and components
   - Leave other options as default
5. Click **Create Repository**

---

## Step 3: Review Your Changes

You should see all your files listed in the "Changes" tab on the left side:
- ✅ App.tsx
- ✅ styles/globals.css
- ✅ components/ui/button.tsx
- ✅ components/docs/ (all files)
- ✅ .github/workflows/deploy.yml
- ✅ package.json
- ✅ And all other files...

**This is normal!** These are all the files that will be uploaded to GitHub.

---

## Step 4: Commit Your Changes

1. At the bottom left, you'll see:
   - **Summary** field (required)
   - **Description** field (optional)

2. In the **Summary** field, type:
   ```
   Initial commit: Design system documentation
   ```

3. Click the blue **Commit to main** button

---

## Step 5: Publish to GitHub

1. Click the blue **Publish repository** button at the top

2. A dialog will appear. Make sure:
   - **Name**: mds
   - **Description**: Design system documentation with design tokens, component library, and interactive examples
   - ⚠️ **UNCHECK** "Keep this code private" (GitHub Pages requires public repos on free accounts)
   - **Organization**: Leave as "None" or select your account

3. Click **Publish Repository**

4. Wait for the upload to complete (you'll see a progress bar)

---

## Step 6: Enable GitHub Pages

1. After publishing, click **Repository** → **View on GitHub** in GitHub Desktop
   - Or go directly to: https://github.com/nirajp-rgb/mds

2. Click the **Settings** tab (⚙️ icon at the top)

3. In the left sidebar, click **Pages**

4. Under "Build and deployment":
   - **Source**: Select **GitHub Actions** from the dropdown

5. The page will refresh and show "GitHub Pages source saved"

---

## Step 7: Wait for Deployment

1. Click the **Actions** tab at the top of your repository

2. You should see a workflow run called "Deploy to GitHub Pages"
   - 🟡 Yellow circle = Building...
   - ✅ Green checkmark = Deployed successfully!
   - ❌ Red X = Failed (check the logs)

3. Wait 2-3 minutes for the build to complete

---

## Step 8: Visit Your Live Site! 🎉

Your design system documentation is now live at:

### **https://nirajp-rgb.github.io/mds/**

---

## 🔄 Making Updates Later

After your initial deployment, updating is super easy:

1. Make changes to your files in Figma Make or your code editor
2. Go to GitHub Desktop
3. You'll see the changed files in the "Changes" tab
4. Add a commit message (e.g., "Added new component" or "Updated colors")
5. Click **Commit to main**
6. Click **Push origin** (the button at the top right)
7. GitHub Actions will automatically rebuild and deploy your site!

---

## ✅ Checklist

- [ ] GitHub Desktop installed and signed in
- [ ] Project added to GitHub Desktop
- [ ] All files committed with message "Initial commit: Design system documentation"
- [ ] Repository published to GitHub (public)
- [ ] GitHub Pages enabled with "GitHub Actions" source
- [ ] Workflow completed successfully in Actions tab
- [ ] Site is live at https://nirajp-rgb.github.io/mds/

---

## 🐛 Troubleshooting

### "This directory does not appear to be a Git repository"
✅ Click "Create a repository" and follow the steps

### "Repository already exists"
✅ The repo was already created on GitHub. Instead of "Publish repository", click "Push origin"

### "Failed to publish repository"
✅ Make sure you're signed in to GitHub Desktop
✅ Check your internet connection
✅ Try clicking "Push origin" instead

### Build fails in GitHub Actions
✅ Go to the Actions tab and click on the failed workflow
✅ Check the error logs
✅ Common issue: Make sure package.json exists and is valid

### Site shows 404 error
✅ Make sure GitHub Pages source is set to "GitHub Actions"
✅ Wait a few minutes for the first deployment
✅ Check that the workflow completed successfully

---

## 🎯 What You've Built

Your documentation site includes:

- 🎨 **50+ Design Tokens** - Colors, spacing, typography, border radius, elevation
- 🧩 **Custom Button Component** - 3 variants × 3 sizes, fully documented
- 📱 **Responsive Documentation** - Beautiful, mobile-friendly interface
- 🚀 **Auto-Deploy** - Push changes and they go live automatically
- ♿ **Accessible** - WCAG 2.1 AA compliant
- 🎯 **Customizable** - All styling via CSS custom properties

---

## 📚 Next Steps

1. ✅ Visit your live site and explore the documentation
2. ✅ Customize colors in `styles/globals.css` to match your brand
3. ✅ Add more components following the button pattern
4. ✅ Share the site with your team
5. ✅ Update documentation as you add features

---

**Need Help?** Check the other documentation files:
- `README.md` - Project overview
- `DEPLOYMENT.md` - Detailed deployment information
- `CONTRIBUTING.md` - How to add new components
- `PROJECT_STRUCTURE.md` - Complete file reference

---

**Built with ❤️ using React, Tailwind CSS, and your custom design tokens**
