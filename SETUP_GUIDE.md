# fx-991EX ClassWiz — Developer & Setup Guide

> **For the project owner** — How to set up, build, and deploy everything from the ZIP file.

---

## Table of Contents
1. [What's in the ZIP](#1-whats-in-the-zip)
2. [Prerequisites](#2-prerequisites)
3. [Initial Setup (one time)](#3-initial-setup-one-time)
4. [Run in Browser (Development)](#4-run-in-browser-development)
5. [Build Windows .exe](#5-build-windows-exe)
6. [Build Linux .AppImage](#6-build-linux-appimage)
7. [Build Android .apk](#7-build-android-apk)
8. [What You Get vs What I Build For You](#8-what-you-get-vs-what-i-build-for-you)
9. [Hosting Online — Free Options](#9-hosting-online--free-options)
10. [GitHub Pages Hosting (Recommended)](#10-github-pages-hosting-recommended)
11. [Netlify Hosting (Easiest)](#11-netlify-hosting-easiest)
12. [Vercel Hosting](#12-vercel-hosting)
13. [Self-Hosted on VPS](#13-self-hosted-on-vps)
14. [PWA — Install as App from Browser](#14-pwa--install-as-app-from-browser)
15. [Troubleshooting](#15-troubleshooting)

---

## 1. What's in the ZIP

```
fx991ex-calculator/
├── src/                        ← All React source code
│   ├── components/             ← UI components (Calculator, Keyboard, etc.)
│   │   ├── Calculator.jsx      ← Main app (853 lines) — all logic here
│   │   ├── Keyboard.jsx        ← Full 60-key keyboard
│   │   ├── Key.jsx             ← Individual key with SHIFT/ALPHA highlight
│   │   ├── keyLayout.js        ← All 60 key definitions
│   │   ├── MenuScreen.jsx      ← 12-app menu grid
│   │   ├── ModeScreens/        ← All 12 mode UIs
│   │   │   ├── ComplexMode.jsx
│   │   │   ├── BaseNMode.jsx
│   │   │   ├── MatrixMode.jsx
│   │   │   ├── VectorMode.jsx
│   │   │   ├── StatMode.jsx
│   │   │   ├── DistributionMode.jsx
│   │   │   ├── EquationMode.jsx
│   │   │   ├── SpreadsheetMode.jsx
│   │   │   └── TableRatioMode.jsx
│   │   └── ExtraConversion/
│   │       ├── EngineerConvert.jsx  ← CONV+ panel (24 categories)
│   │       └── ConstantsPanel.jsx   ← 47 physical constants
│   ├── engine/                 ← All math logic
│   │   ├── calculator.js       ← Core engine (mathjs wrapper)
│   │   ├── constants.js        ← 47 physical constants
│   │   ├── conversions.js      ← 200+ unit conversions
│   │   └── modes/              ← Mode-specific engines
│   │       ├── complex.js
│   │       ├── matrix.js
│   │       ├── vector.js
│   │       ├── statistics.js
│   │       ├── equation.js
│   │       ├── baseN.js
│   │       └── spreadsheet.js
│   ├── styles/
│   │   ├── global.css          ← Base styles
│   │   └── calculator.css      ← Full calculator styling
│   ├── App.jsx                 ← Root component
│   └── main.jsx                ← Entry point + PWA service worker
├── public/
│   ├── index.html              ← HTML entry + PWA meta tags
│   ├── manifest.json           ← PWA manifest (installable)
│   ├── sw.js                   ← Service worker (offline caching)
│   └── icons/                  ← App icons
│       ├── icon-192.png
│       └── icon-512.png
├── electron/
│   ├── main.js                 ← Electron main process (PC app)
│   └── preload.js              ← Secure context bridge
├── build-resources/
│   └── icon.svg                ← Source icon (convert to .ico/.png/.icns)
├── package.json                ← All scripts + Electron build config
├── vite.config.js              ← Vite bundler config
├── capacitor.config.json       ← Android APK config
├── USER_GUIDE.md               ← End user guide
├── SETUP_GUIDE.md              ← This file
├── BUILD.md                    ← Quick build reference
└── README.md                   ← Project overview
```

---

## 2. Prerequisites

Install these once. All are **free**.

### Required for everything:
| Tool | Version | Download |
|------|---------|----------|
| **Node.js** | 18 or newer | https://nodejs.org (choose LTS) |
| **npm** | comes with Node.js | — |

### Required for Android APK only:
| Tool | Download |
|------|----------|
| **Android Studio** | https://developer.android.com/studio |
| **JDK 17** | Included with Android Studio |

### Check your installation:
```bash
node --version    # should show v18.x.x or higher
npm --version     # should show 9.x.x or higher
```

---

## 3. Initial Setup (one time)

```bash
# 1. Extract the ZIP anywhere you like
# Example: C:\Projects\fx991ex-calculator\  (Windows)
# Example: ~/Projects/fx991ex-calculator/   (Linux/Mac)

# 2. Open terminal/command prompt in that folder

# 3. Install all dependencies (downloads ~200MB to node_modules/)
npm install
```

**What `npm install` downloads:**
- React 18 (UI framework)
- mathjs 12 (math engine)
- Vite 5 (build tool)
- Electron 28 (PC app framework)
- electron-builder (packaging tool)

---

## 4. Run in Browser (Development)

```bash
npm run dev
```

Open http://localhost:5173 in your browser.

- Hot reload: any file change → browser auto-refreshes
- No build needed — runs directly from source
- Works on Chrome, Firefox, Edge, Safari

---

## 5. Build Windows .exe

### One command:
```bash
npm run build:win
```

### What happens:
1. Vite builds the React app → `dist/` folder
2. electron-builder packages it with Electron → `dist-electron/`

### Output files:
```
dist-electron/
  fx-991EX ClassWiz Setup 1.0.0.exe      ← Installer (recommends install location)
  fx-991EX ClassWiz 1.0.0.exe            ← Portable (double-click and run, no install)
```

### Share with users:
- **Portable .exe** — share this file directly. Double-click → runs. No installation.
- **Installer .exe** — creates Start Menu shortcut, Desktop icon, can uninstall.

### Icon for Windows (.ico):
Go to https://convertio.co → upload `build-resources/icon.svg` → convert to .ico
Save as `build-resources/icon.ico`
Then rebuild.

---

## 6. Build Linux .AppImage

```bash
npm run build:linux
```

### Output:
```
dist-electron/
  fx-991EX ClassWiz-1.0.0.AppImage       ← Run directly
  fx-991EX ClassWiz_1.0.0_amd64.deb     ← Install on Debian/Ubuntu
```

### Run AppImage:
```bash
chmod +x "dist-electron/fx-991EX ClassWiz-1.0.0.AppImage"
./"dist-electron/fx-991EX ClassWiz-1.0.0.AppImage"
```

---

## 7. Build Android .apk

This takes ~10 minutes the first time (Gradle download).

### Step 1 — Install Capacitor:
```bash
npm install @capacitor/core @capacitor/cli @capacitor/android
```

### Step 2 — Initialize Capacitor (first time only):
```bash
npx cap init "fx-991EX ClassWiz" com.fx991ex.classwiz --web-dir dist
```

### Step 3 — Add Android platform (first time only):
```bash
npx cap add android
```

### Step 4 — Build and sync:
```bash
npm run cap:sync
# This does: npm run build:web + npx cap copy + npx cap sync
```

### Step 5 — Open Android Studio:
```bash
npm run cap:open
# OR: npx cap open android
```

### Step 6 — Build APK in Android Studio:
1. Wait for **Gradle sync** to complete (bottom status bar)
2. Menu: **Build → Build Bundle/APK → Build APK(s)**
3. Click **"locate"** in the notification that appears
4. Find your APK at:
   ```
   android/app/build/outputs/apk/debug/app-debug.apk
   ```

### Step 7 — Install on phone:
**Android phone:**
1. Settings → Security → Enable **"Install unknown apps"** (or "Unknown sources")
2. Transfer `app-debug.apk` to phone (USB cable, Google Drive, email, etc.)
3. Tap the file → Install

---

## 8. What You Get vs What I Build For You

| Platform | What I gave you | What you build yourself |
|----------|----------------|------------------------|
| **Web (browser)** | ✅ Full source code | `npm run build:web` → `dist/` folder |
| **Windows .exe** | ✅ Build scripts | `npm run build:win` → .exe in 5 min |
| **Linux .AppImage** | ✅ Build scripts | `npm run build:linux` → AppImage in 5 min |
| **macOS .dmg** | ✅ Build scripts | `npm run build:mac` (on Mac only) |
| **Android .apk** | ✅ Full config | `npm run cap:sync` + Android Studio → APK |

**I cannot pre-build the .exe or .apk for you** because:
- `.exe` requires building on a Windows/Linux machine with Node.js
- `.apk` requires Android Studio's Gradle system

But the build commands are all one-liners. It takes 5–10 minutes.

---

## 9. Hosting Online — Free Options

After running `npm run build:web`, the `dist/` folder contains the complete app. Upload this folder to any of these:

| Platform | Free tier | Custom domain | Ease |
|----------|-----------|---------------|------|
| **GitHub Pages** | ✅ Unlimited | ✅ (with CNAME) | ⭐⭐⭐ |
| **Netlify** | ✅ 100GB/month | ✅ Free | ⭐⭐⭐⭐⭐ |
| **Vercel** | ✅ Unlimited | ✅ Free | ⭐⭐⭐⭐⭐ |
| **Cloudflare Pages** | ✅ Unlimited | ✅ Free | ⭐⭐⭐⭐ |
| **Firebase Hosting** | ✅ 10GB/month | ✅ Free | ⭐⭐⭐ |
| **Render** | ✅ Free tier | ✅ | ⭐⭐⭐ |

**Recommendation: Netlify** — easiest, drag and drop, instant.

---

## 10. GitHub Pages Hosting (Recommended)

### One-time setup:

**Step 1 — Create a GitHub account** (free): https://github.com

**Step 2 — Create a new repository:**
- Go to https://github.com/new
- Name: `fx991ex-calculator`
- Make it **Public**
- Click "Create repository"

**Step 3 — Build for GitHub Pages:**
```bash
# If your repo is at: github.com/YourUsername/fx991ex-calculator
# Edit package.json script "build:github" to match your repo name:
#   "build:github": "cross-env VITE_BASE=/fx991ex-calculator/ vite build"
# Then:
npm run build:github
```

**Step 4 — Install gh-pages tool:**
```bash
npm install -D gh-pages
```

**Step 5 — Add deploy script to package.json scripts:**
```json
"deploy": "gh-pages -d dist"
```

**Step 6 — Deploy:**
```bash
git init
git remote add origin https://github.com/YourUsername/fx991ex-calculator.git
git add .
git commit -m "Initial commit"
git push -u origin main
npm run deploy
```

**Step 7 — Enable GitHub Pages:**
- Go to your repo → Settings → Pages
- Source: **Deploy from branch** → branch: `gh-pages` → folder: `/ (root)`
- Save

**Your app will be live at:**
`https://YourUsername.github.io/fx991ex-calculator/`

**Auto-deploy on changes:**
```bash
# Every time you make changes:
npm run build:github
npm run deploy
```

---

## 11. Netlify Hosting (Easiest — Drag & Drop)

### Option A: Drag and Drop (no account setup needed)

1. Run `npm run build:web`
2. Go to https://app.netlify.com/drop
3. Drag the **`dist/` folder** into the browser window
4. Done! You get a URL like `https://random-name-12345.netlify.app`

### Option B: Netlify with Git (auto-deploy on every push)

1. Push your code to GitHub (see step above)
2. Go to https://netlify.com → "Add new site" → "Import an existing project"
3. Connect GitHub → select your repo
4. Build settings:
   - **Build command:** `npm run build:web`
   - **Publish directory:** `dist`
5. Click Deploy
6. Your app is live at `https://your-site.netlify.app`

### Custom domain on Netlify:
- Site settings → Domain management → Add custom domain
- Free SSL certificate included

---

## 12. Vercel Hosting

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy (first time — follow prompts)
npm run build:web
vercel --prod dist
```

Or connect GitHub repo at https://vercel.com/new for auto-deploy.

---

## 13. Self-Hosted on VPS

If you have a VPS (DigitalOcean, Hostinger, etc.):

```bash
# Build
npm run build:web

# Copy dist/ folder to your server
scp -r dist/ user@your-server:/var/www/fx991ex/

# On the server — nginx config
sudo nano /etc/nginx/sites-available/fx991ex
```

```nginx
server {
    listen 80;
    server_name your-domain.com;
    root /var/www/fx991ex;
    index index.html;

    # Required for React Router (SPA)
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache static assets
    location /assets/ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Service worker must not be cached
    location /sw.js {
        add_header Cache-Control "no-cache";
    }
}
```

```bash
sudo ln -s /etc/nginx/sites-available/fx991ex /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx

# Free SSL with Let's Encrypt
sudo certbot --nginx -d your-domain.com
```

---

## 14. PWA — Install as App from Browser

When the app is hosted online (any platform), users can install it as an app:

### On Android (Chrome):
1. Open the hosted URL in Chrome
2. Tap the **"⋮" menu** → "Add to Home screen" or "Install app"
3. The calculator appears as an app icon on the home screen
4. Works fully offline after first load

### On iPhone (Safari):
1. Open the URL in Safari
2. Tap the **Share button** (square with arrow)
3. Tap **"Add to Home Screen"**
4. Name it "fx-991EX" → Add

### On PC (Chrome/Edge):
1. Open the URL
2. Look for the **install icon** (⊕) in the address bar
3. Click "Install fx-991EX ClassWiz"
4. Runs as a standalone window (no browser UI)

### PWA vs APK:
| | PWA (web install) | APK |
|--|---|---|
| Install method | From browser, 1 tap | Download .apk file |
| Storage | ~5MB | ~5MB |
| Offline | ✅ After first visit | ✅ Always |
| Updates | Auto (transparent) | Manual re-install |
| Play Store needed | ❌ No | ❌ No |

---

## 15. Troubleshooting

### `npm install` is slow or fails
```bash
# Try with legacy peer deps
npm install --legacy-peer-deps

# Or clear npm cache
npm cache clean --force
npm install
```

### `npm run build:win` fails with "electron-builder" error
```bash
# Make sure you're not inside OneDrive or Dropbox folder
# Move project to C:\Projects\ and try again

# Or build manually:
npm run build        # builds web first
npx electron-builder --win
```

### Electron shows blank white screen
```bash
# Make sure build succeeded:
ls dist/              # should have index.html

# Check electron main.js path is correct:
# In electron/main.js, the line:
# win.loadFile(path.join(__dirname, '../dist/index.html'))
# must point to your dist/index.html
```

### Android Studio: "SDK not found"
- Open Android Studio → More Actions → SDK Manager
- Install **Android SDK Platform 34** (API 34)
- Set ANDROID_HOME environment variable:
  ```bash
  # Windows: add to System Environment Variables
  ANDROID_HOME = C:\Users\YourName\AppData\Local\Android\Sdk
  
  # Linux/Mac: add to ~/.bashrc or ~/.zshrc
  export ANDROID_HOME=$HOME/Android/Sdk
  export PATH=$PATH:$ANDROID_HOME/tools:$ANDROID_HOME/platform-tools
  ```

### App works locally but not on GitHub Pages
- Make sure you used `npm run build:github` (not `build:web`)
- The VITE_BASE must match your repo name exactly
- Check: Settings → Pages → source branch is `gh-pages`

### Fonts not loading offline
The Google Fonts are cached by the service worker after first load.
For pure offline use (no internet ever), embed fonts locally:
```bash
# Download fonts and put in src/styles/fonts/
# Then change @import in global.css to local @font-face
```

### Port 5173 already in use
```bash
npm run dev -- --port 5174
```

---

## Quick Reference — All Commands

```bash
npm install                  # First time setup
npm run dev                  # Run in browser (development)
npm run build:web            # Build for web hosting
npm run build:github         # Build for GitHub Pages
npm run build:win            # Build Windows .exe
npm run build:linux          # Build Linux .AppImage
npm run build:mac            # Build macOS .dmg (on Mac only)
npm run cap:sync             # Prepare Android APK source
npm run cap:open             # Open Android Studio
```
