# fx-991EX ClassWiz Emulator — User Guide

> **Version 1.0** | Works on: Windows PC, Linux, Android, any web browser | 100% Offline

---

## Table of Contents
1. [Getting Started](#1-getting-started)
2. [Calculator Layout](#2-calculator-layout)
3. [Basic Calculations](#3-basic-calculations)
4. [SHIFT and ALPHA Keys](#4-shift-and-alpha-keys)
5. [All 12 Calculator Modes (MENU)](#5-all-12-calculator-modes)
6. [Trig, Log, Powers](#6-trig-log-powers)
7. [Calculus: ∫, d/dx, Σ](#7-calculus)
8. [Variables & Memory](#8-variables--memory)
9. [SOLVE — Equation Solver](#9-solve--equation-solver)
10. [Unit Converter (CONV+)](#10-unit-converter-conv)
11. [Physical Constants](#11-physical-constants)
12. [Display Formats & SETUP](#12-display-formats--setup)
13. [Keyboard Shortcuts (PC)](#13-keyboard-shortcuts-pc)
14. [Tips & Tricks](#14-tips--tricks)

---

## 1. Getting Started

When you open the app you see the calculator in **CALC mode** (basic calculation).

- The **green LCD screen** at the top shows your expression and result
- Below the screen is the full keyboard
- At the very bottom is the **CONV+** button — extra engineering converter

**First calculation:** Type `2+3` then press `=` → you see `5`

---

## 2. Calculator Layout

```
┌─────────────────────────────────────────┐
│  CASIO          fx-991EX     ClassWiz   │
│  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓ (solar cell) ▓▓▓▓▓▓▓  │
│ ┌─────────────────────────────────────┐ │
│ │ S  A    DEG              [LCD]      │ │
│ │ 2+3                                 │ │
│ │                                   5 │ │
│ └─────────────────────────────────────┘ │
│ [SHIFT][ALPHA][ ◄ ][ ► ][ ▲ ][ ▼ ][MENU][ON] │
│ [CALC ][∫dx  ][↑  ][↓  ][x⁻¹][logₐ]    │
│ [a b/c][√x   ][x² ][xʸ ][log][ln  ]    │
│ [(-) ][°'"  ][hyp][sin][cos][tan ]     │
│ [RCL ][ENG  ][ ( ][ ) ][S⇔D][M+  ]    │
│ [ 7  ][ 8   ][ 9 ][DEL][CLR ]         │
│ [ 4  ][ 5   ][ 6 ][ × ][ ÷ ]         │
│ [ 1  ][ 2   ][ 3 ][ + ][ − ]         │
│ [ 0  ][ .   ][Exp][Ans][ = ]         │
│ ┌───────────────────────────────────┐  │
│ │         CONV+  (Engineering)      │  │
│ └───────────────────────────────────┘  │
└─────────────────────────────────────────┘
```

**Status bar icons (top of LCD):**
- `S` — SHIFT mode active (yellow glow)
- `A` — ALPHA mode active (red glow)
- `H` — HYP mode active (sinh/cosh/tanh)
- `M` — Memory M has a stored value
- `DEG` / `RAD` / `GRAD` — current angle unit
- `FIX 2` / `SCI 2` — current display format

---

## 3. Basic Calculations

### Arithmetic
| Input | Result |
|-------|--------|
| `5+3=` | 8 |
| `10-4=` | 6 |
| `6×7=` | 42 |
| `15÷4=` | 3.75 |
| `2^10=` | 1024 |
| `sqrt(144)=` | 12 |

### Fractions
Type fractions as `(3/4)` → press `=` → shows `0.75`
Press **S⇔D** to toggle between decimal and fraction display.

### Percentage
`15+20%` means 15 + 20% of 15 = 18

### Negative numbers
Use the **(-)**  key (not the minus key) for negative input:
`(-) 5 = ` → −5

### Scientific notation
`1.5 Exp 3` means 1.5 × 10³ = 1500

---

## 4. SHIFT and ALPHA Keys

### SHIFT key (yellow functions)
Press **SHIFT** once — the `S` appears in the status bar and the yellow labels above each key become active. Press the next key to use its yellow function.

Examples:
| Press | Action |
|-------|--------|
| SHIFT + sin | sin⁻¹ (arcsine) |
| SHIFT + log | 10ˣ |
| SHIFT + ln  | eˣ |
| SHIFT + x²  | x³ |
| SHIFT + √x  | ³√x (cube root) |
| SHIFT + CALC | SOLVE dialog |
| SHIFT + ∫dx  | d/dx dialog |
| SHIFT + ↑    | Σ summation dialog |
| SHIFT + RCL  | STO (store variable) |
| SHIFT + −    | History panel |
| SHIFT + MENU | SETUP panel |

### ALPHA key (red functions)
Press **ALPHA** once — red labels become active. Used to insert variable names.

Examples:
| Press | Inserts |
|-------|---------|
| ALPHA + sin | B |
| ALPHA + cos | C |
| ALPHA + tan | D |
| ALPHA + (-)  | A |
| ALPHA + 1   | F |
| ALPHA + S⇔D | x |

### HYP key
Press **hyp** to toggle hyperbolic mode.
Then press sin/cos/tan → gives sinh/cosh/tanh.
Press again for inverse: SHIFT + sin in HYP mode → asinh.

---

## 5. All 12 Calculator Modes

Press **MENU** to see the 12-app grid. Tap any icon to enter that mode.

| # | Mode | What it does |
|---|------|-------------|
| 1 | **Calculate** | Basic scientific calculations (default) |
| 2 | **Complex** | Complex number arithmetic (a+bi) |
| 3 | **Base-N** | Binary/Octal/Decimal/Hex conversion + logic |
| 4 | **Matrix** | Matrix operations up to 4×4 |
| 5 | **Vector** | 3D vector operations |
| 6 | **Statistics** | 1-var and 2-var statistics, regression |
| 7 | **Distribution** | Normal, Binomial, Poisson, t, χ², F, etc. |
| 8 | **Spreadsheet** | 5 columns × 45 rows spreadsheet |
| 9 | **Table** | Generate f(x) table for any expression |
| 10 | **Equation** | Solve polynomial and linear systems |
| 11 | **Inequality** | Solve quadratic/cubic inequalities |
| 12 | **Ratio** | Solve proportions a:b = c:? |

Press **ON** or **MENU → 1 (Calculate)** to return to basic mode.

---

### Mode 2: Complex Numbers
- Enter values like `3+4i` and `1-2i` in fields A and B
- Tap operation buttons: A+B, A-B, A×B, A÷B
- |A| = magnitude (modulus), arg(A) = argument (angle)
- Check "Polar form" to show result as r∠θ°

### Mode 3: Base-N
- Select input base: DEC, BIN, OCT, or HEX
- Enter value A (and B for logic operations)
- CONVERT A → shows all 4 base representations at once
- Logic ops: AND, OR, XOR, XNOR, NOT

### Mode 4: Matrix
- Select size: 2×2, 3×3, or 4×4 (for both A and B)
- Fill in matrix values
- Operations: det(A), A⁻¹, Aᵀ, Ref, Rref, A², A+B, A-B, A×B

### Mode 5: Vector
- Enter 3 components for vectors A and B
- Operations: A+B, A-B, A·B (dot), A×B (cross), |A|, |B|, unit vector Â, angle θ
- k field: scalar for k·A multiplication

### Mode 6: Statistics
- **1-VAR:** Enter comma-separated values in X field
  - Results: n, Σx, Σx², mean (x̄), σx, sx, min, Q1, median, Q3, max
- **2-VAR:** Enter X and Y data (same count)
  - Results: linear regression y = a + bx, correlation r, r²

### Mode 7: Distribution
Select distribution type, fill parameters, press CALCULATE:
- **Normal:** PDF (at x), CDF (probability up to x), Inverse CDF
- **Binomial:** PMF and CDF for k successes in n trials with probability p
- **Poisson:** PMF and CDF for k events with rate λ
- **t-Distribution:** CDF for t-statistic with df degrees of freedom
- **Chi²:** CDF for χ² value with df degrees of freedom
- **Geometric:** PMF and CDF
- **Hypergeometric:** PMF

### Mode 8: Spreadsheet
- 5 columns (A–E) × 45 rows
- Click a cell to select it
- Type a value or formula in the formula bar at top
- Formulas start with `=`:  `=SUM(A1:A5)`,  `=MEAN(B1:B10)`,  `=A1+B1`
- Functions: SUM, MEAN, MAX, MIN, COUNT, PRODUCT
- Scroll rows with ▲▼ buttons

### Mode 9: Table
- Enter expression: e.g. `x^2+2*x+1`
- Set Start, End, Step
- Press GENERATE → table of x and f(x) values

### Mode 10: Equation
- **Quadratic:** ax²+bx+c=0 → up to 2 roots (real or complex)
- **Cubic:** ax³+bx²+cx+d=0 → 3 roots
- **Quartic:** ax⁴+bx³+cx²+dx+e=0 → up to 4 roots
- **Linear System:** Enter coefficient matrix with RHS, select 2×2/3×3/4×4
- **Inequality:** ax²+bx+c > 0 (or <, >=, <=)

### Mode 11 and 12
- **Inequality:** Quadratic and cubic inequality solution sets
- **Ratio:** Leave one of a, b, c, d blank, press SOLVE

---

## 6. Trig, Log, Powers

### Angle units
Click **DEG**, **RAD**, or **GRAD** in the strip above the keyboard.

| Function | Key | SHIFT version |
|----------|-----|---------------|
| sin(x) | sin | SHIFT+sin = sin⁻¹ |
| cos(x) | cos | SHIFT+cos = cos⁻¹ |
| tan(x) | tan | SHIFT+tan = tan⁻¹ |
| sinh(x) | hyp then sin | HYP+SHIFT+sin = asinh |
| log₁₀(x) | log | SHIFT+log = 10ˣ |
| ln(x) | ln | SHIFT+ln = eˣ |
| x² | x² | SHIFT+x² = x³ |
| xʸ | xʸ | — |
| √x | √x | SHIFT+√x = ³√x |
| logₐ(b) | Type: `log(b,a)` | — |

---

## 7. Calculus

### Numerical Integration ∫
Press **∫dx** key → dialog opens:
- f(x): expression e.g. `x^2`
- Variable: `x`
- Lower limit a, Upper limit b
- Press **INTEGRATE** → result

Example: ∫₀¹ x² dx = 0.3333...

### Derivative d/dx
Press **SHIFT + ∫dx** → dialog opens:
- f(x): expression
- At x = value
- Press **DIFFERENTIATE** → f'(x) at that point

Example: d/dx(x³) at x=2 = 12

### Summation Σ
Press **SHIFT + ↑** → dialog opens:
- f(k): expression e.g. `k^2`
- Variable: `k`
- From and To bounds
- Press **CALCULATE Σ**

Example: Σ(k=1 to 10) k² = 385

---

## 8. Variables & Memory

### Storing a value
1. Calculate or type a value
2. Press **SHIFT + RCL** → STO dialog opens
3. Tap a variable: **A, B, C, D, E, F, M, x, y**
4. Value is stored — shows in small text on LCD

### Recalling a value
1. Press **RCL** → dialog shows all variables with their current values
2. Tap any variable → its value is inserted into input

### Using variables in expressions
In CALC mode, type the variable name directly using ALPHA:
- ALPHA + sin → inserts `B`
- Type expression like `A^2 + B^2` then `=`

### M+ / M−
- **M+** adds current expression result to memory M
- **SHIFT + M+** (M−) subtracts from M
- **RCL → M** recalls the M value
- M icon appears in status bar when M ≠ 0

### Answer memory
- **Ans** = result of last calculation
- **PreAns** (SHIFT + +) = result before last

---

## 9. SOLVE — Equation Solver

Press **SHIFT + CALC** → SOLVE dialog:

1. The current expression in the input is used as f(variable)
2. Choose which variable to solve for (default: x)
3. Enter an initial guess (closer to solution = faster/better)
4. Press **SOLVE**

**Example:**
- Type `x^2 - 5*x + 6` in input
- Press SHIFT + CALC
- Variable: x, Guess: 1
- Result: x = 2  (or x = 3 with different guess)

**Note:** SOLVE finds ONE root near your initial guess. Use different guesses to find other roots.

---

## 10. Unit Converter (CONV+)

Press the **CONV+** button at the bottom of the keyboard.

24 categories available:
- Length, Area, Volume, Mass, **Force**, **Pressure**, **Energy**, **Power**
- Temperature, Speed, Frequency, **Torque**, **Stress/Modulus**
- **Dynamic Viscosity**, **Kinematic Viscosity**, Angle
- Data Size, Electrical (Voltage/Current/Resistance/Capacitance/Inductance)
- **Magnetic Flux Density**

**How to use:**
1. Search or select a category (e.g. "Force")
2. Type your value
3. Select FROM unit (e.g. kN) and TO unit (e.g. lbf)
4. Press **CONVERT**

**Temperature** is handled specially (not linear) — e.g. 100°C → 212°F ✓

---

## 11. Physical Constants

Press **SHIFT + ENG** → Constants browser opens.

47 built-in constants from CODATA:
- Universal: speed of light (c), Planck (h), Boltzmann (k), Avogadro (Nₐ), Gas constant (R)...
- Atomic: electron mass, proton mass, Bohr radius, fine structure constant...
- Gravity: G, standard gravity (g = 9.80665 m/s²)
- Electromagnetic: elementary charge, permittivity, Coulomb constant...

Search by name or symbol. Click any constant → its value is inserted into your expression.

---

## 12. Display Formats & SETUP

Press **SHIFT + MENU** → SETUP panel:

| Format | Example |
|--------|---------|
| Normal (auto) | 3.14159265 |
| Fixed 2 decimal | 3.14 |
| Fixed 4 decimal | 3.1416 |
| Scientific ×10² | 3.14×10⁰ |
| Scientific ×10⁴ | 3.1416×10⁰ |

**S⇔D key:** Toggle between decimal and fraction display (when result has a clean fraction form).

---

## 13. Keyboard Shortcuts (PC)

When using the PC app or browser version, your physical keyboard works:

| Key | Action |
|-----|--------|
| `0`–`9` | Digits |
| `+` `-` `*` `/` | Operators |
| `^` | Power |
| `(` `)` | Parentheses |
| `%` | Percent |
| `Enter` or `=` | Calculate |
| `Backspace` | Delete last character |
| `Escape` | Clear input |
| `s` | Insert sin( |
| `c` | Insert cos( |
| `t` | Insert tan( |
| `l` | Insert ln( |
| `q` | Insert sqrt( |
| `p` | Insert π |

---

## 14. Tips & Tricks

**Implicit multiplication:** `2π` = 2×π, `3sin(30)` = 3×sin(30°) — all work automatically.

**Chained calculations:** After pressing `=`, start typing a new number — it replaces the result. Or type an operator like `+5=` to add 5 to the last result using Ans.

**History:** Press **SHIFT + −** to open history panel. Tap any entry to reload that calculation.

**Fraction results:** When the result is a clean fraction (e.g. 1/3), press **S⇔D** to toggle fraction display.

**Degree/Radian reminder:** Check the status bar! `DEG` = degrees mode. `sin(90)` in DEG = 1. In RAD, `sin(π/2)` = 1.

**Complex numbers in CALC mode:** Type expressions like `sqrt(-1)` — returns error (use Complex mode for full complex support).

**Spreadsheet formulas:**
- `=SUM(A1:A5)` → sum of A1 through A5
- `=A1*B1` → multiply two cells
- `=MEAN(B1:B10)` → average

**Large factorials:** Maximum is 69! (69 factorial). 70! overflows.

**Table mode expression syntax:** Use `x` as the variable. Examples:
- `sin(x)` — sine wave
- `x^3 - 2*x` — cubic
- `1/(1+exp(-x))` — sigmoid function
