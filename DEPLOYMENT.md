# GitHub Pages Deployment Guide

## Portfolio Deployment to GitHub Pages

Your portfolio is now configured for deployment to: **https://harshujjwal.github.io/new_project**

## ✅ Configurations Applied

### 1. Package.json Updates

- ✅ Added homepage: `"homepage": "https://harshujjwal.github.io/new_project"`
- ✅ Installed gh-pages: `gh-pages` added to devDependencies
- ✅ Added deployment scripts:
  - `"predeploy": "npm run build"`
  - `"deploy": "gh-pages -d dist"`

### 2. Vite Configuration

- ✅ Updated `vite.config.ts` with: `base: "/new_project/"`
- ✅ This ensures all assets load correctly from the subdirectory

### 3. React Router Configuration

- ✅ Updated `App.tsx` with: `<BrowserRouter basename="/new_project">`
- ✅ This ensures routing works correctly on GitHub Pages

## 🚀 Deployment Commands

### Build and Deploy

```bash
npm run build
npm run deploy
```

### Or use the combined approach

```bash
npm run deploy
```

(This automatically runs the build first via predeploy script)

## 📋 GitHub Repository Setup Steps

1. **Create Repository**

   - Go to GitHub and create a new repository named: `new_project`
   - Initialize with README if desired

2. **Push Your Code**

   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/harshujjwal/new_project.git
   git push -u origin main
   ```

3. **Deploy to GitHub Pages**

   ```bash
   npm run deploy
   ```

4. **Configure GitHub Pages**
   - Go to your repository: https://github.com/harshujjwal/new_project
   - Navigate to: Settings → Pages
   - Set Source to: **Deploy from a branch**
   - Select Branch: **gh-pages**
   - Select Folder: **/ (root)**
   - Click Save

## 🌐 Final Result

After completing these steps, your portfolio will be live at:
**https://harshujjwal.github.io/new_project**

## 🔄 Future Updates

To update your deployed portfolio:

1. Make changes to your code
2. Commit and push to main branch
3. Run: `npm run deploy`

The deployment process will automatically build and update the live site.

## ✅ All Features Ready for Deployment

- ✅ Professional profile photo (rectangular format)
- ✅ LinkedIn integration
- ✅ Real project links (Real Estate, IoT projects)
- ✅ Updated experience timeline
- ✅ Corrected certifications
- ✅ Contact form with all social links
- ✅ Fully responsive design
- ✅ GitHub Pages optimized routing
- ✅ Production-ready build configuration
