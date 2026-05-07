# Hosting Guide — fx-991EX ClassWiz

## কোন ফাইল কোন platform এর জন্য

| ফাইল | কোথায় কাজ করে |
|------|--------------|
| `public/_redirects` | Netlify — SPA routing |
| `public/_headers` | Netlify + Cloudflare Pages — cache rules |
| `public/404.html` | GitHub Pages — SPA redirect trick |
| `public/index.html` | সব জায়গায় — redirect decoder script আছে |
| `vercel.json` | Vercel — routing + cache config |
| `netlify.toml` | Netlify — build command + redirect + cache |

---

## Platform 1: Netlify (সবচেয়ে সহজ — recommended)

### Option A: Drag & Drop (account লাগে না)
```
1. npm run build:web          ← dist/ folder তৈরি হবে
2. https://app.netlify.com/drop খোলো
3. dist/ folder টা browser এ drag করো
4. Done! URL পাবে যেমন: https://amazing-name-123.netlify.app
```

### Option B: GitHub connect (auto-deploy)
```
1. Code GitHub এ push করো
2. https://app.netlify.com → "Add new site" → "Import from Git"
3. Build command:  npm run build:web
4. Publish dir:    dist
5. Deploy!
```

**netlify.toml আছে** — Netlify নিজেই সব config বুঝে নেবে।

---

## Platform 2: Vercel

### CLI দিয়ে:
```bash
npm install -g vercel
npm run build:web
vercel dist --prod
```

### GitHub connect:
```
https://vercel.com/new → Import repo → Framework: Vite
Build command: npm run build:web
Output dir: dist
```

**vercel.json আছে** — routing automatic।

---

## Platform 3: GitHub Pages

### Setup (একবার):
```bash
# 1. GitHub এ repo তৈরি করো: github.com/new
# 2. Repo name ধরো: fx991ex-calculator

# 3. package.json এ VITE_BASE ঠিক করো:
#    "build:github": "cross-env VITE_BASE=/fx991ex-calculator/ vite build"
#    (repo name এর সাথে মিলিয়ে দাও)

# 4. Deploy করো:
npm install
npm run deploy
# এটা automatically: build করবে + gh-pages branch এ push করবে
```

### GitHub Settings:
```
Repo → Settings → Pages → Source: gh-pages branch → / (root) → Save
```

**URL হবে:** `https://username.github.io/fx991ex-calculator/`

### পরের বার update করতে:
```bash
npm run deploy    # build + push একসাথে হয়ে যাবে
```

---

## Platform 4: Cloudflare Pages (সবচেয়ে fast CDN)

```
1. https://pages.cloudflare.com → Create a project
2. Connect to Git (GitHub/GitLab)
3. Build settings:
   Framework preset: Vite
   Build command:    npm run build:web
   Build output dir: dist
4. Deploy!
```

**`_redirects` এবং `_headers` ফাইল আছে** — Cloudflare নিজেই পড়বে।

---

## Platform 5: Firebase Hosting

```bash
npm install -g firebase-tools
firebase login
firebase init hosting
# Public dir: dist
# Single-page app: YES
# GitHub auto-deploy: optional

npm run build:web
firebase deploy
```

---

## Platform 6: Nginx (নিজের server)

```bash
# Build করো
npm run build:web

# dist/ folder server এ copy করো
scp -r dist/ user@server:/var/www/fx991ex/

# Nginx config:
```

```nginx
server {
    listen 80;
    server_name example.com;
    root /var/www/fx991ex;
    index index.html;

    # SPA routing — সব request index.html এ যাবে
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache: assets immutable
    location /assets/ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Cache: service worker কখনো cache করবে না
    location /sw.js {
        add_header Cache-Control "no-cache, no-store, must-revalidate";
        expires 0;
    }

    # Cache: icons
    location /icons/ {
        expires 7d;
        add_header Cache-Control "public";
    }
}
```

```bash
# SSL (free):
sudo certbot --nginx -d example.com
```

---

## Build command summary

| Platform | Build command | Publish folder |
|----------|--------------|----------------|
| Netlify (drag) | `npm run build:web` | `dist/` |
| Netlify (git) | auto (netlify.toml পড়ে) | `dist` |
| Vercel | `npm run build:web` | `dist` |
| GitHub Pages | `npm run deploy` | auto (gh-pages) |
| Cloudflare Pages | `npm run build:web` | `dist` |
| নিজের server | `npm run build:web` | `dist/` → scp |

---

## Important: `dist/` folder এর ভেতরে কী থাকবে

```
dist/
  index.html          ← main entry (Vite এটা ঠিকঠাক বানায়)
  manifest.json       ← PWA manifest
  sw.js               ← Service worker
  404.html            ← GitHub Pages redirect
  _redirects          ← Netlify redirect
  _headers            ← Netlify/Cloudflare cache
  icons/
    icon-192.png
    icon-512.png
  assets/
    index-[hash].js   ← compiled React app
    index-[hash].css  ← compiled CSS
    mathjs-[hash].js  ← math engine (separate chunk)
    react-[hash].js   ← React (separate chunk)
```

`dist/` folder build হলে এটাই হল তোমার **complete app** — যেকোনো static file host এ upload করলেই কাজ করবে।
