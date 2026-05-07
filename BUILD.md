# Quick Build Reference — fx-991EX ClassWiz

> Full instructions: see **SETUP_GUIDE.md**

## One-time setup
```bash
npm install
```

## Commands
| Goal | Command | Output location |
|------|---------|----------------|
| Run in browser | `npm run dev` | http://localhost:5173 |
| Build for web | `npm run build:web` | `dist/` |
| Build for GitHub Pages | `npm run build:github` | `dist/` |
| Build Windows .exe | `npm run build:win` | `dist-electron/*.exe` |
| Build Linux AppImage | `npm run build:linux` | `dist-electron/*.AppImage` |
| Build macOS dmg | `npm run build:mac` | `dist-electron/*.dmg` |
| Sync Android assets | `npm run cap:sync` | `android/` |
| Open Android Studio | `npm run cap:open` | — |

## APK — inside Android Studio
Build → Build Bundle/APK → Build APK(s)
Output: `android/app/build/outputs/apk/debug/app-debug.apk`

## Hosting (fastest — drag & drop)
1. `npm run build:web`
2. Drag `dist/` folder to https://app.netlify.com/drop
3. Done — live URL instantly
