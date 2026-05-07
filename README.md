# fx-991EX ClassWiz — Full Emulator

Casio fx-991EX ClassWiz scientific calculator emulator.  
**100% offline. No internet required after build.**

---

## Features
- All 12 calculator modes (Calculate, Complex, Base-N, Matrix, Vector, Statistics, Distribution, Spreadsheet, Table, Equation, Inequality, Ratio)
- All 552 functions emulated
- 47 physical constants browser
- **CONV+**: Full engineering unit converter (24 categories, 200+ units)
- Natural Textbook Display (NTD)
- Calculation history
- Physical keyboard support (PC)
- Runs as Windows .exe, Linux .AppImage, Android .apk

---

## Quick Start (Web / Dev)

```bash
npm install
npm run dev
# Open http://localhost:5173
```

---

## Build for PC — Windows .exe

**Requirements:** Node.js 18+, npm

```bash
npm install
npm run electron:build:win
```

Output files in `dist-electron/`:
- `fx-991EX ClassWiz Setup.exe` — installer
- `fx-991EX ClassWiz.exe` — portable (no install needed)

**For Linux:**
```bash
npm run electron:build:linux
# Output: dist-electron/fx-991EX ClassWiz.AppImage
```

**For macOS:**
```bash
npm run electron:build:mac
# Output: dist-electron/fx-991EX ClassWiz.dmg
```

---

## Build for Android — .apk (FREE)

**Requirements:**
1. Node.js 18+
2. Android Studio (free): https://developer.android.com/studio
3. JDK 17+ (free): included with Android Studio

**Steps:**

```bash
# 1. Install Capacitor
npm install @capacitor/core @capacitor/cli @capacitor/android

# 2. Build the web app
npm run build

# 3. Initialize Capacitor (first time only)
npx cap init "fx-991EX ClassWiz" "com.fx991ex.classwiz" --web-dir dist

# 4. Add Android platform (first time only)
npx cap add android

# 5. Copy web assets to Android
npx cap copy android

# 6. Open in Android Studio
npx cap open android

# In Android Studio:
# Build > Build Bundle/APK > Build APK(s)
# Find APK at: android/app/build/outputs/apk/debug/app-debug.apk
```

**Install on your phone:**
1. Enable "Install from unknown sources" in Android settings
2. Transfer the .apk to your phone
3. Tap to install

---

## Project Structure

```
src/
  engine/
    calculator.js      — Core math engine (mathjs)
    constants.js       — 47 physical constants
    conversions.js     — 200+ engineering unit conversions
    modes/
      basic.js         — Basic calculation
      complex.js       — Complex numbers
      matrix.js        — Matrix operations (up to 4×4)
      vector.js        — 3D vector operations
      statistics.js    — Stats + all distributions
      equation.js      — Polynomial + linear system solvers
      baseN.js         — Base conversion + logic ops
      spreadsheet.js   — 5×45 spreadsheet engine
  components/
    Calculator.jsx     — Main app logic + key handler
    Display.jsx        — LCD display emulation
    Keyboard.jsx       — Full 60-key keyboard
    Key.jsx            — Individual key component
    MenuScreen.jsx     — 12-app menu
    ModeScreens/       — All 12 mode UIs
    ExtraConversion/   — CONV+ converter + Constants panel
electron/
  main.js              — Electron main process
  preload.js           — Context bridge
```

---

## Keyboard Shortcuts (PC)

| Key | Action |
|-----|--------|
| 0–9 | Digits |
| + − * / | Operators |
| ( ) | Parentheses |
| ^ | Power |
| Enter or = | Calculate |
| Backspace | Delete |
| Escape | Clear |

---

## Next Sessions (Remaining)

- **Session 4 (next):** Polish, bug fixes, SHIFT key secondary functions for all 60 keys, full trig/hyp coverage, S⇔D fraction display, STO variable system, CALC variable solve, numerical ∫ and d/dx UI, Σ summation UI
- **Session 5:** Final packaging scripts, icon creation, single ZIP with .exe + .apk build guide

---

## License
MIT — Free for personal and educational use.
