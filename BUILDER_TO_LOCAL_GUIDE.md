# Builder.io to Local System Setup Guide

## 📁 Download Complete Project from Builder.io

### Step 1: Download Project Files

1. **In Builder.io Interface**:

   - Look for a "Download" or "Export" button in the top menu
   - Or go to Project Settings → Export/Download
   - Download as ZIP file

2. **Alternative: Use Builder CLI** (if available):
   ```bash
   npx @builder.io/cli@latest pull
   ```

### Step 2: Extract and Setup Locally

1. **Extract the ZIP file** to your desired location
2. **Navigate to project folder**:

   ```bash
   cd new_project
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

### Step 3: Verify Local Setup

1. **Test local development**:

   ```bash
   npm run dev
   ```

2. **Check if it runs on**: `http://localhost:8080` or similar

## 🚀 Deploy to GitHub Pages

Once you have the project locally, follow these steps:

### Step 1: Initialize Git Repository

```bash
git init
git add .
git commit -m "Initial portfolio commit from Builder.io"
```

### Step 2: Create GitHub Repository

1. Go to GitHub.com
2. Create new repository named: `new_project`
3. Don't initialize with README (since you already have files)

### Step 3: Connect and Push

```bash
git remote add origin https://github.com/harshujjwal/new_project.git
git branch -M main
git push -u origin main
```

### Step 4: Deploy to GitHub Pages

```bash
npm run deploy
```

### Step 5: Configure GitHub Pages

1. Go to your repository: https://github.com/harshujjwal/new_project
2. Navigate to: **Settings** → **Pages**
3. Set **Source** to: **Deploy from a branch**
4. Select **Branch**: `gh-pages`
5. Select **Folder**: `/ (root)`
6. Click **Save**

## ✅ Final Result

Your portfolio will be live at: **https://harshujjwal.github.io/new_project**

## 🔧 If You Need Manual File Creation

If download doesn't work, you can manually recreate the project:

1. **Create new folder**: `new_project`
2. **Copy our configurations** (I can provide all files)
3. **Set up from scratch** with the exact same structure

## 📞 Project Structure Verification

Your downloaded project should have:

```
new_project/
├── public/
│   └── assets/
│       └── profile/
│           └── profile.jpg
├── src/
│   ├── components/
│   │   ├── ui/
│   │   └── portfolio/
│   ├── lib/
│   ├── pages/
│   └── ...
├── package.json
├── vite.config.ts
├── README.md
└── DEPLOYMENT.md
```

## 🆘 Troubleshooting

**If download doesn't include our GitHub Pages config:**

1. Update `package.json` with homepage and deploy scripts
2. Update `vite.config.ts` with base path
3. Update `App.tsx` with basename
4. All our configurations are ready to copy!

## 💡 Quick Setup Commands

After download and extraction:

```bash
cd new_project
npm install
npm run build  # Test build
npm run deploy # Deploy to GitHub Pages
```

That's it! Your portfolio will be live on GitHub Pages.
