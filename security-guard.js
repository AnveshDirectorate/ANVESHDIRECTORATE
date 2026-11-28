/* ==========================================================================
   ANVESH DIRECTORATE — ASSET SHIELD & DEVTOOLS CLEARANCE GUARD v1.0
   - Blocks right-click, drag, and mobile long-press save on images/videos
   - Detects DevTools shortcuts & inspection state, requiring Directorate key
   ========================================================================== */
(() => {
  "use strict";

  const SESSION_KEY = "anvesh_devtools_clearance_v1";
  const TARGET_HASH = "d4a6abe97294e3649cfc048c1b516458701a1d71be863ee5e49fc9ac4448b9f3";
  let lockVisible = false;
  let unlocked = false;

  try {
    unlocked = window.sessionStorage.getItem(SESSION_KEY) === "granted";
  } catch (e) {}

  async function sha256Hex(str) {
    if (window.crypto && window.crypto.subtle) {
      const buf = new TextEncoder().encode(str);
      const hashBuf = await window.crypto.subtle.digest("SHA-256", buf);
      return Array.from(new Uint8Array(hashBuf)).map(b => b.toString(16).padStart(2, "0")).join("");
    }
    // Fallback simple check for non-HTTPS local previews
    let h = 0;
    for (let i = 0; i < str.length; i++) h = ((h << 5) - h + str.charCodeAt(i)) | 0;
    return String(h);
  }

  function buildLockOverlay() {
    let el = document.getElementById("anvesh-security-lock");
    if (el) return el;
    el = document.createElement("div");
    el.id = "anvesh-security-lock";
    el.className = "anv-security-lock";
    el.setAttribute("role", "dialog");
    el.setAttribute("aria-modal", "true");
    el.setAttribute("aria-labelledby", "anv-sec-title");
    el.innerHTML = `
      <div class="anv-sec-card">
        <div class="anv-sec-badge"><i class="fa-solid fa-shield-halved" aria-hidden="true"></i> DIRECTORATE SECURITY PROTOCOL</div>
        <h2 id="anv-sec-title">INSPECTION ACCESS RESTRICTED</h2>
        <p class="anv-sec-desc">Developer tools or source inspection detected. Enter your authorized <strong>ANVESH Directorate Clearance Key</strong> to unlock debugging access, or close DevTools to continue browsing.</p>
        <form id="anv-sec-form" autocomplete="off">
          <input id="anv-sec-input" type="password" class="input-control" placeholder="Enter Directorate Unlock Key..." required>
          <div class="anv-sec-actions">
            <button type="submit" class="btn btn-primary" style="flex:1">VERIFY KEY ↗</button>
            <button type="button" id="anv-sec-dismiss" class="btn btn-ghost">RETURN TO SITE</button>
          </div>
        </form>
        <p id="anv-sec-msg" class="anv-sec-msg" aria-live="polite"></p>
      </div>
    `;
    document.body.appendChild(el);

    const form = el.querySelector("#anv-sec-form");
    const input = el.querySelector("#anv-sec-input");
    const msg = el.querySelector("#anv-sec-msg");
    const dismissBtn = el.querySelector("#anv-sec-dismiss");

    form.addEventListener("submit", async e => {
      e.preventDefault();
      const val = (input.value || "").trim().toUpperCase();
      const digest = await sha256Hex(val);
      if (digest === TARGET_HASH) {
        unlocked = true;
        try { window.sessionStorage.setItem(SESSION_KEY, "granted"); } catch (err) {}
        msg.style.color = "#34d399";
        msg.textContent = "CLEARANCE VERIFIED — DEBUGGER ACCESS UNLOCKED.";
        setTimeout(() => {
          el.classList.remove("is-open");
          lockVisible = false;
        }, 450);
      } else {
        msg.style.color = "#ff4d64";
        msg.textContent = "INVALID CLEARANCE KEY. ACCESS DENIED.";
        input.value = "";
        input.focus();
      }
    });

    dismissBtn.addEventListener("click", () => {
      // Allow dismissing if DevTools is not docked wide open
      const wDiff = Math.abs(window.outerWidth - window.innerWidth);
      const hDiff = Math.abs(window.outerHeight - window.innerHeight);
      if (wDiff < 250 && hDiff < 250) {
        el.classList.remove("is-open");
        lockVisible = false;
      } else {
        msg.style.color = "#fbbf24";
        msg.textContent = "CLOSE DEVELOPER TOOLS OR ENTER THE CLEARANCE KEY TO RESUME.";
      }
    });

    return el;
  }

  function triggerLockout(reason) {
    if (unlocked) return;
    const el = buildLockOverlay();
    if (!lockVisible) {
      lockVisible = true;
      el.classList.add("is-open");
      const msg = el.querySelector("#anv-sec-msg");
      if (msg && reason) {
        msg.style.color = "#94a3b8";
        msg.textContent = reason;
      }
      setTimeout(() => {
        const inp = el.querySelector("#anv-sec-input");
        if (inp) inp.focus();
      }, 80);
    }
  }

  // 1. Block DevTools & View-Source keyboard shortcuts unless unlocked
  document.addEventListener("keydown", e => {
    if (unlocked) return;
    const key = (e.key || "").toUpperCase();
    const ctrlOrMeta = e.ctrlKey || e.metaKey;
    const isDevShortcut =
      key === "F12" ||
      (ctrlOrMeta && e.shiftKey && ["I", "J", "C", "K"].includes(key)) ||
      (ctrlOrMeta && key === "U") ||
      (ctrlOrMeta && key === "S");
    if (isDevShortcut) {
      e.preventDefault();
      e.stopPropagation();
      triggerLockout("SHORTCUT INTERCEPTED // CLEARANCE KEY REQUIRED");
    }
  }, true);

  // 2. Viewport heuristic + subtle debugger timing trap (desktop only to avoid mobile false positives)
  const isTouchMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  if (!isTouchMobile) {
    window.setInterval(() => {
      if (unlocked) return;
      const wDiff = window.outerWidth - window.innerWidth;
      const hDiff = window.outerHeight - window.innerHeight;
      if (wDiff > 260 || hDiff > 260) {
        triggerLockout("DEVTOOLS PANEL DETECTED // ENTER CLEARANCE KEY");
        return;
      }
      const t0 = performance.now();
      // eslint-disable-next-line no-debugger
      (function () { debugger; })();
      if (performance.now() - t0 > 120) {
        triggerLockout("DEBUGGER BREAKPOINT DETECTED // ENTER CLEARANCE KEY");
      }
    }, 1800);
  }

  // 3. Site-Wide Asset Protection (Right-Click, Drag, Mobile Long-Press Save on Images/Videos)
  function protectMediaElements(root = document) {
    root.querySelectorAll("img").forEach(img => {
      img.setAttribute("draggable", "false");
      img.classList.add("anv-protected-media");
    });
    root.querySelectorAll("video").forEach(vid => {
      vid.setAttribute("draggable", "false");
      vid.setAttribute("controlsList", "nodownload noplaybackrate");
      vid.setAttribute("disablePictureInPicture", "true");
      vid.classList.add("anv-protected-media");
    });
  }

  document.addEventListener("contextmenu", e => {
    if (unlocked) return;
    const tag = (e.target && e.target.tagName) ? e.target.tagName.toLowerCase() : "";
    if (tag === "input" || tag === "textarea") return;
    e.preventDefault();
  }, true);

  document.addEventListener("dragstart", e => {
    if (unlocked) return;
    if (e.target && e.target.closest("img, video, svg, canvas, .case-thumb, .directorate-banner-card")) {
      e.preventDefault();
    }
  }, true);

  // Suppress mobile long-press context save on images & videos while preserving taps/scrolling
  let longPressTimer = null;
  document.addEventListener("touchstart", e => {
    if (unlocked) return;
    const media = e.target && e.target.closest("img, video, .case-thumb, .directorate-banner-card");
    if (!media) return;
    clearTimeout(longPressTimer);
    longPressTimer = setTimeout(() => {
      // Clear any accidental text/image selection triggered by long-press
      if (window.getSelection) {
        try { window.getSelection().removeAllRanges(); } catch (err) {}
      }
    }, 350);
  }, { passive: true });

  document.addEventListener("touchend", () => clearTimeout(longPressTimer), { passive: true });
  document.addEventListener("touchmove", () => clearTimeout(longPressTimer), { passive: true });

  function initShield() {
    protectMediaElements(document);
    const mo = new MutationObserver(records => {
      records.forEach(r => r.addedNodes.forEach(n => {
        if (n.nodeType === 1) protectMediaElements(n);
      }));
    });
    mo.observe(document.body, { childList: true, subtree: true });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initShield, { once: true });
  } else {
    initShield();
  }
})();
