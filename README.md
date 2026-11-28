# ANVESH Multiverse — ANVESH Directorate Digital Archive (v2.0 Upgrade)

> **"INVESTIGATE. VERIFY. UNDERSTAND."**
> *Every anomaly leaves evidence. Every investigation brings us closer to the truth.*

This repository contains the complete redesigned website and interactive anomaly archive for **ANVESH Multiverse — ANVESH Directorate** (a fictional mystery, analog horror, and multiverse storytelling project).

---

## 1. Project Audit Summary (Starter v1.0 → Upgraded v2.0)

### What Was Found in the Starter Project (`ANVESH_Directorate_Website_Starter.zip`)
- **Architecture:** Vanilla HTML5 (`index.html`), CSS3 (`styles.css`), JavaScript (`script.js`), and a custom SVG emblem (`assets/anvesh-mark.svg`).
- **Issues Identified & Fixed:**
  1. **Duplicate Font Loading:** `styles.css` re-imported Google Fonts via `@import url(...)` even though `index.html` already loaded them via `<link>`, causing render-blocking network overhead. Removed the redundant `@import`.
  2. **Missing Pages & Navigation Depth:** Only a single landing page existed. Added all **13 required views/pages** (`Homepage`, `About ANVESH`, `Directorate Structure`, `Case Archives`, `Individual Case Details`, `Case Solution Access`, `Transmissions`, `Contact`, `Privacy Policy`, `Terms of Use`, `Fictional Disclaimer`, and custom `404`, `403`, and `500` error pages).
  3. **Limited Case Archive:** Expanded the 3 static placeholder cards (`ANV-DIG-001`, `ANV-MEM-002`/`ANV-ENT-002`, `ANV-ENV-003`) into a **7-case searchable and filterable database** covering all 6 classifications (`DIG`, `ENT`, `ENV`, `SUP`, `TMP`, `CLS`) while preserving the original 3 cases and quick-note preview drawer.
  4. **Incomplete Divisions & Process:** Expanded from 4 divisions to all **6 Directorate Divisions** and from 3 steps to the full **6-Stage Investigation Process**.
  5. **Accessibility & UX Gaps:** Added visible `:focus-visible` keyboard outlines, skip-to-content link, semantic ARIA live regions, descriptive image `alt` attributes, and the always-accessible **Safe Exit / Neutral View** control.
  6. **Missing SEO & Deployment Config:** Added Open Graph, Twitter Card, JSON-LD `CreativeWorkSeries` schema, `robots.txt`, `sitemap.xml`, `netlify.toml`, `_redirects`, and a serverless validation function (`netlify/functions/validate-code.js`).

---

## 2. Key Features Included

- **Always-Visible Safe Exit / Opt-Out (`#safe-exit-btn`):** Present in the top sticky bar on every page. One click disables scanlines, ambient glow, particle animations, radar sweeps, and synthesized audio, switching to a calm daylight-neutral reader layout. Automatically respects `prefers-reduced-motion: reduce`.
- **Searchable & Filterable Case Archive:** Filter by Classification (`DIG`, `ENT`, `ENV`, `SUP`, `TMP`, `CLS`), Priority (`CRITICAL`, `HIGH`, `ELEVATED`), Status (`UNDER REVIEW`, `OPEN INVESTIGATION`, `CONTAINED`, `RESOLVED`, `RESTRICTED`), or free-text search.
- **Case Solution Access (`ANV-SOL-001`, `ANV-SOL-002`, `ANV-SOL-003`):** Interactive verification terminal with demo pills and a server-side Netlify Function (`netlify/functions/validate-code.js`) for genuine secret code protection.
- **Three Built-In Easter Eggs:**
  1. Type `ALPHA` or `ANVESH` on your keyboard (outside input fields) to unlock the restricted **Origin Dossier (`ANV-CLS-000`)**.
  2. Click the `09.71 MHz [CALIBRATE]` button in the Hero monitor 3 times to intercept a parallel timeline transmission (`IND-01-PRIME`).
  3. Enter `ALPHA-00` in the Case Solution Access terminal or click the `ARCHIVE ENTRY 000` seal.

---

## 3. Hosting & Deployment Guide (Netlify, Cloudflare Pages, GitHub Pages)

### Option A: Deploying to Netlify (Recommended)
1. Push this project folder to a GitHub/GitLab repository, or drag-and-drop the folder into the Netlify Drop dashboard.
2. **Build Settings:**
   - **Build command:** *(Leave blank — static vanilla architecture requires no build step)*
   - **Publish directory:** `.` (root directory)
   - **Functions directory:** `netlify/functions` (configured automatically via `netlify.toml`)
3. **Environment Variables (Optional for Secret Creator Codes):**
   - In Netlify Dashboard → **Site configuration → Environment variables**, set:
     - `ANVESH_LIVE_SECRET_CODE` = your secret creator crossover code
     - `ANVESH_LIVE_SECRET_TEXT` = the declassified explanation returned by the server
4. **Custom Domain & HTTPS:**
   - Go to **Domain management → Add a domain**, point your DNS `A` / `CNAME` records to Netlify, and enable automatic Let's Encrypt HTTPS provisioning.

### Option B: Cloudflare Pages & GitHub Pages Alternatives
- **Cloudflare Pages:** Excellent alternative. Supports static publishing from `.`, automatic HTTPS, custom `404.html` handling, and `_redirects`. If server-side solution code validation is needed, move `netlify/functions/validate-code.js` to `/functions/api/validate-code.js` (Cloudflare Pages Functions).
- **GitHub Pages:** Suitable for the frontend static archive (`index.html`, `404.html`, `styles.css`, `script.js`, `assets/`), with free HTTPS. However, GitHub Pages does **not** support serverless backend functions (`validate-code.js`) or native form handling (`data-netlify="true"`), so client-side code validation must be used when hosting on GitHub Pages.


---

## 4. v5.0 Cyberpunk Architectural & Multi-Sensory Upgrade

1. **Cyberpunk CSS Frameworks (`Cybercore CSS` + `augmented-ui`):**
   - Linked minified CDNs (`cybercore.min.css` and `augmented-ui.min.css`) and added local `@layer cybercore, augmented, anvesh;` fallback definitions using `color-mix()` and inverted CSS Space Toggles.
   - Applied `.cyber-glitch` chromatic aberration to primary headers, `.cyber-neon-border` to status/case/agent cards, `.cyber-datastream` to `.portal-stage` and `.multiverse-map-box`, and `data-augmented-ui="tl-clip br-clip border"` tactical chamfered geometry across buttons, cards, and dossiers.
2. **Iconographic Modernization (`Font Awesome`):**
   - Replaced all OS-dependent Unicode emojis across `index.html`, `403.html`, `404.html`, `500.html`, and `script.js` with scalable vector `<i>` tags that inherit parent neon colors and hover `text-shadow` glows.
3. **Auditory Immersion (`Howler.js` & `audio.js`):**
   - Compiled an optimized VBR MP3 & Ogg Vorbis audio sprite (`assets/audio/ui-sounds.mp3` at `208 KB` and `assets/audio/ui-sounds.ogg` at `170 KB`, well under the 1MB ceiling) from the supplied `Beep.mp3` and `Binary Code` SFX assets.
   - Integrated full streaming playback for `ANVESH Directorate: Case File 01`, `Case File 02`, `Behind the Glass`, and `The Redacted Ledger` via the global **Cyber-Audio Deck** and individual Case/Evidence views.
   - Enforced first-interaction audio unlock and immediate muting when `#safe-exit-btn` (`body.safe-exit-active`) is toggled.
4. **4K Visual Scenery, Uploaded Agent/Branding Assets & Matrix Digital Rain:**
   - Integrated 4K (`3840x2160` @ `300 DPI`) cyberpunk cityscape and server-rack textures (`assets/hero-portal.jpg`, `assets/cyber-texture.jpg`), looping `assets/matrix-rain.gif` (`opacity: 0.15; mix-blend-mode: screen`) on `.radar-overlay`, `#view-404`, and `#view-403`, and `loading="lazy"` on below-the-fold media.
   - Integrated the uploaded Agent character sheets (`ALPHA-00`, `ALPHA-01`, `ALPHA-02`), tactical triad banner (`assets/agents-tactical-trio.jpg`), key art banner (`assets/anvesh-keyart-banner.jpg`), 3D emblem (`assets/anvesh-emblem-3d.jpg`), and branding stinger video (`assets/anvesh-intro-stinger.mp4`).
