/* ==========================================================================
   ANVESH DIRECTORATE — HOWLER.JS CYBERPUNK AUDIO & TELEMETRY ENGINE v5.0
   - Implements Howler.js audio sprites (< 1MB VBR MP3 & Ogg Vorbis)
   - Routes through Web Audio API with StereoPanner spatial positioning
   - Manages full Case Audio Logs (Case 01, Case 02) & Atmospheric Soundtracks
   - Strictly enforces browser autoplay gesture unlock & #safe-exit-btn killswitch
   ========================================================================== */
(() => {
  "use strict";

  const SPRITE_MAP = {
    hover:     [0, 220],
    click:     [500, 380],
    nav:       [1200, 450],
    calibrate: [2000, 1250],
    decrypt:   [3500, 1350],
    error:     [5200, 950],
    glitch:    [6500, 1150],
    ambient:   [8000, 5400, true]
  };

  const TRACK_CATALOG = {
    "case-01": {
      id: "case-01",
      title: "BGM 01 // ARCHIVE SIGNAL THEME (SOUNDTRACK)",
      src: ["assets/audio/case-file-01.mp3"],
      cover: "assets/case-audio-01-cover.jpg",
      caseId: "ANV-DIG-001"
    },
    "case-02": {
      id: "case-02",
      title: "BGM 02 // VAULT B4 AMBIENCE (SOUNDTRACK)",
      src: ["assets/audio/case-file-02.mp3"],
      cover: "assets/case-audio-02-cover.jpg",
      caseId: "ANV-ENT-002"
    },
    "behind-the-glass": {
      id: "behind-the-glass",
      title: "BGM 03 // BEHIND THE GLASS (SOUNDTRACK)",
      src: ["assets/audio/behind-the-glass.mp3"],
      cover: "assets/case-mem-002.jpg",
      caseId: "ANV-ENT-002"
    },
    "the-redacted-ledger": {
      id: "the-redacted-ledger",
      title: "BGM 04 // THE REDACTED LEDGER (SOUNDTRACK)",
      src: ["assets/audio/the-redacted-ledger.mp3"],
      cover: "assets/anvesh-emblem-3d.jpg",
      caseId: "ANV-CLS-006"
    },
    "binary-telemetry": {
      id: "binary-telemetry",
      title: "SIGINT // BINARY DATA STREAM TELEMETRY",
      src: ["assets/audio/binary-telemetry.mp3"],
      cover: "assets/case-dig-001.jpg",
      caseId: "ANV-DIG-001"
    }
  };


  const SFX_FILES = {
    radar:  "assets/audio/radar-ping.mp3",
    glitch: "assets/audio/sfx-glitch.mp3",
    type:   "assets/audio/sfx-type.mp3",
    pop:    "assets/audio/sfx-pop.mp3",
    notif:  "assets/audio/sfx-notif.mp3",
    click:  "assets/audio/sfx-click.mp3"
  };

  function playSfx(name, vol = 0.55) {
    if (isSafeExitActive()) return;
    const src = SFX_FILES[name];
    if (!src) {
      playSprite(name, 0);
      return;
    }
    try {
      const a = new Audio(src);
      a.volume = Math.max(0.05, Math.min(1.0, vol));
      a.play().catch(() => playSynthFallback(name === "radar" ? "calibrate" : "click", 0));
    } catch (e) {
      playSynthFallback("click", 0);
    }
  }

  let unlocked = false;
  let uiSpriteHowl = null;
  let spriteLoaded = false;
  let ambientId = null;
  let ambientActive = false;
  let currentTrackKey = null;
  let currentTrackHowl = null;
  let trackHowls = {};
  let synthCtx = null;
  let synthAmbientInterval = null;
  let lastHoverTime = 0;

  function isSafeExitActive() {
    return document.body.classList.contains("safe-exit-active");
  }

  function getSynthCtx() {
    if (isSafeExitActive()) return null;
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return null;
    if (!synthCtx) synthCtx = new AudioCtx();
    if (synthCtx.state === "suspended") {
      synthCtx.resume().catch(() => {});
    }
    return synthCtx;
  }

  // Web Audio API node routing fallback (also provides spatial stereo panning when offline/inlined)
  function playSynthFallback(spriteName, pan = 0) {
    if (isSafeExitActive()) return;
    try {
      const ctx = getSynthCtx();
      if (!ctx) return;
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const panner = ctx.createStereoPanner ? ctx.createStereoPanner() : null;
      if (panner) {
        panner.pan.setValueAtTime(Math.max(-1, Math.min(1, pan)), now);
        osc.connect(gain);
        gain.connect(panner);
        panner.connect(ctx.destination);
      } else {
        osc.connect(gain);
        gain.connect(ctx.destination);
      }

      if (spriteName === "hover") {
        osc.type = "sine";
        osc.frequency.setValueAtTime(1480, now);
        osc.frequency.exponentialRampToValueAtTime(2100, now + 0.045);
        gain.gain.setValueAtTime(0.018, now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.05);
        osc.start(now);
        osc.stop(now + 0.055);
      } else if (spriteName === "click") {
        osc.type = "triangle";
        osc.frequency.setValueAtTime(880, now);
        osc.frequency.exponentialRampToValueAtTime(1320, now + 0.09);
        gain.gain.setValueAtTime(0.045, now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.11);
        osc.start(now);
        osc.stop(now + 0.12);
      } else if (spriteName === "nav") {
        osc.type = "sine";
        osc.frequency.setValueAtTime(620, now);
        osc.frequency.exponentialRampToValueAtTime(1240, now + 0.14);
        gain.gain.setValueAtTime(0.04, now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.16);
        osc.start(now);
        osc.stop(now + 0.17);
      } else if (spriteName === "calibrate") {
        osc.type = "sine";
        osc.frequency.setValueAtTime(528, now);
        osc.frequency.exponentialRampToValueAtTime(971, now + 0.18);
        osc.frequency.exponentialRampToValueAtTime(1420, now + 0.36);
        osc.frequency.exponentialRampToValueAtTime(440, now + 0.55);
        gain.gain.setValueAtTime(0.065, now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.58);
        osc.start(now);
        osc.stop(now + 0.6);
      } else if (spriteName === "decrypt") {
        osc.type = "triangle";
        osc.frequency.setValueAtTime(587.33, now);
        osc.frequency.setValueAtTime(880, now + 0.12);
        osc.frequency.setValueAtTime(1174.66, now + 0.24);
        gain.gain.setValueAtTime(0.06, now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.45);
        osc.start(now);
        osc.stop(now + 0.46);
      } else if (spriteName === "error") {
        osc.type = "sawtooth";
        osc.frequency.setValueAtTime(165, now);
        osc.frequency.linearRampToValueAtTime(110, now + 0.32);
        gain.gain.setValueAtTime(0.07, now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.36);
        osc.start(now);
        osc.stop(now + 0.38);
      } else if (spriteName === "glitch") {
        osc.type = "square";
        osc.frequency.setValueAtTime(310, now);
        osc.frequency.setValueAtTime(1420, now + 0.06);
        osc.frequency.setValueAtTime(220, now + 0.12);
        osc.frequency.setValueAtTime(971, now + 0.18);
        gain.gain.setValueAtTime(0.05, now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.26);
        osc.start(now);
        osc.stop(now + 0.28);
      }
    } catch (e) {}
  }

  function initHowlerEngine() {
    if (unlocked || isSafeExitActive()) return;
    unlocked = true;

    if (window.Howl) {
      try {
        uiSpriteHowl = new window.Howl({
          src: ["assets/audio/ui-sounds.ogg", "assets/audio/ui-sounds.mp3"],
          sprite: SPRITE_MAP,
          volume: 0.42,
          preload: true,
          onload: () => {
            spriteLoaded = true;
          },
          onloaderror: () => {
            spriteLoaded = false;
          }
        });
      } catch (e) {
        spriteLoaded = false;
      }
    }
  }

  function playSprite(name, pan = 0) {
    if (isSafeExitActive()) return;
    if (!unlocked) initHowlerEngine();

    if (uiSpriteHowl && spriteLoaded) {
      try {
        const id = uiSpriteHowl.play(name);
        if (typeof uiSpriteHowl.stereo === "function" && pan !== 0) {
          uiSpriteHowl.stereo(Math.max(-1, Math.min(1, pan)), id);
        }
        return;
      } catch (e) {}
    }
    playSynthFallback(name, pan);
  }

  function updateDeckStatus(text, isPlaying = false) {
    const labelEl = document.getElementById("cyber-deck-status");
    const waveEl = document.getElementById("cyber-deck-wave");
    if (labelEl) labelEl.textContent = text;
    if (waveEl) waveEl.classList.toggle("is-playing", Boolean(isPlaying));
  }

  function stopAllTracks() {
    if (currentTrackHowl) {
      try { currentTrackHowl.stop(); } catch (e) {}
    }
    if (ambientId !== null && uiSpriteHowl) {
      try { uiSpriteHowl.stop(ambientId); } catch (e) {}
      ambientId = null;
    }
    if (synthAmbientInterval) {
      clearInterval(synthAmbientInterval);
      synthAmbientInterval = null;
    }
    ambientActive = false;
    currentTrackKey = null;
    document.querySelectorAll("[data-play-track]").forEach(btn => {
      btn.classList.remove("active-track");
      btn.setAttribute("aria-pressed", "false");
    });
    const ambBtn = document.getElementById("deck-ambient-btn");
    if (ambBtn) ambBtn.setAttribute("aria-pressed", "false");
    updateDeckStatus(isSafeExitActive() ? "AUDIO MUTED (SAFE EXIT ACTIVE)" : "STANDBY // SELECT AUDIO STREAM", false);
  }

  function playTrack(trackKey) {
    if (isSafeExitActive()) {
      updateDeckStatus("AUDIO MUTED (SAFE EXIT ACTIVE)", false);
      return;
    }
    if (!unlocked) initHowlerEngine();

    const meta = TRACK_CATALOG[trackKey];
    if (!meta) return;

    // Toggle off if already playing this track
    if (currentTrackKey === trackKey && currentTrackHowl && currentTrackHowl.playing()) {
      stopAllTracks();
      return;
    }

    stopAllTracks();
    currentTrackKey = trackKey;

    document.querySelectorAll("[data-play-track]").forEach(btn => {
      const match = btn.getAttribute("data-play-track") === trackKey;
      btn.classList.toggle("active-track", match);
      btn.setAttribute("aria-pressed", String(match));
    });

    updateDeckStatus(`STREAMING: ${meta.title}`, true);

    if (window.Howl) {
      if (!trackHowls[trackKey]) {
        trackHowls[trackKey] = new window.Howl({
          src: meta.src,
          html5: true,
          volume: 0.68,
          onend: () => {
            updateDeckStatus(`COMPLETED: ${meta.title}`, false);
            currentTrackKey = null;
          },
          onloaderror: () => {
            // Fallback telemetry pulse in sandboxed environments without external audio file server
            playSynthFallback("calibrate", 0);
            updateDeckStatus(`SYNTHESIZED STREAM: ${meta.title}`, true);
          }
        });
      }
      currentTrackHowl = trackHowls[trackKey];
      try {
        currentTrackHowl.play();
      } catch (e) {
        playSynthFallback("calibrate", 0);
      }
    } else {
      playSynthFallback("calibrate", 0);
    }
  }

  function toggleAmbientTelemetry() {
    if (isSafeExitActive()) {
      updateDeckStatus("AUDIO MUTED (SAFE EXIT ACTIVE)", false);
      return;
    }
    if (!unlocked) initHowlerEngine();

    if (ambientActive) {
      stopAllTracks();
      return;
    }

    stopAllTracks();
    ambientActive = true;
    const ambBtn = document.getElementById("deck-ambient-btn");
    if (ambBtn) ambBtn.setAttribute("aria-pressed", "true");
    updateDeckStatus("RADAR SONAR PING ACTIVE // 09.71 MHz", true);
    playSfx("radar", 0.65);
    synthAmbientInterval = window.setInterval(() => {
      if (isSafeExitActive() || !ambientActive) {
        clearInterval(synthAmbientInterval);
        synthAmbientInterval = null;
        return;
      }
      playSfx("radar", 0.58);
    }, 3200);
  }

  function applySafeExitAudioMute(safeActive) {
    if (window.Howler) {
      try { window.Howler.mute(Boolean(safeActive)); } catch (e) {}
    }
    if (safeActive) {
      stopAllTracks();
      if (synthCtx) {
        try { synthCtx.close(); } catch (e) {}
        synthCtx = null;
      }
    } else {
      updateDeckStatus("STANDBY // HOWLER.JS WEB AUDIO READY", false);
    }
  }

  function bindGlobalAudioEvents() {
    // First user interaction unlocks Web Audio & Howler context
    const unlockHandler = () => {
      if (!unlocked && !isSafeExitActive()) {
        initHowlerEngine();
      }
    };
    window.addEventListener("pointerdown", unlockHandler, { passive: true });
    window.addEventListener("keydown", unlockHandler, { passive: true });

    // Subtle spatial hover ticks on interactive cyber elements
    document.addEventListener("mouseover", e => {
      if (isSafeExitActive() || !unlocked) return;
      const now = performance.now();
      if (now - lastHoverTime < 85) return;
      const el = e.target.closest(".btn, .nav-link, .case-card, .agent-card, .division-card, .code-pill, .link-chip");
      if (!el) return;
      lastHoverTime = now;
      const rect = el.getBoundingClientRect();
      const pan = ((rect.left + rect.width / 2) / Math.max(1, window.innerWidth)) * 2 - 1;
      playSprite("hover", pan * 0.5);
    }, { passive: true });

    // Tactical click, navigation, and deck controls
    document.addEventListener("click", e => {
      const trackBtn = e.target.closest("[data-play-track]");
      if (trackBtn) {
        e.preventDefault();
        playTrack(trackBtn.getAttribute("data-play-track"));
        return;
      }

      if (e.target.closest("#deck-ambient-btn")) {
        e.preventDefault();
        toggleAmbientTelemetry();
        return;
      }

      if (e.target.closest("#deck-stop-btn")) {
        e.preventDefault();
        stopAllTracks();
        return;
      }

      const stingerBtn = e.target.closest("[data-toggle-stinger]");
      if (stingerBtn) {
        e.preventDefault();
        const vidWrap = document.getElementById("portal-stinger-wrap");
        const vid = document.getElementById("portal-stinger-video");
        if (vidWrap && vid) {
          const isHidden = vidWrap.hidden;
          vidWrap.hidden = !isHidden;
          if (isHidden && !isSafeExitActive()) {
            vid.muted = false;
            vid.currentTime = 0;
            vid.play().catch(() => {});
            stingerBtn.innerHTML = `<i class="fa-solid fa-radar" aria-hidden="true"></i> RETURN TO RADAR VIEW`;
          } else {
            vid.pause();
            stingerBtn.innerHTML = `<i class="fa-solid fa-film" aria-hidden="true"></i> PLAY BRANDING STINGER`;
          }
        }
        return;
      }

      if (isSafeExitActive()) return;

      const navBtn = e.target.closest("[data-nav], [data-open-dossier], [data-open-agent], [data-open-reality], [data-open-evidence], [data-open-doc]");
      if (navBtn) {
        const navVal = navBtn.getAttribute("data-nav");
        if (navVal === "403") {
          playSprite("error", 0);
        } else if (navVal === "404" || navVal === "500") {
          playSprite("glitch", 0);
        } else {
          playSprite("nav", 0);
        }
        return;
      }

      if (e.target.closest(".portal-stage, #freq-trigger, #play-signal-btn")) {
        playSfx("radar", 0.62);
        return;
      }
      if (e.target.closest(".btn, .code-pill, .access-link, .custom-select-trigger")) {
        playSfx("pop", 0.42);
      }
    });

    // Observe body.safe-exit-active changes to immediately mute/kill all audio
    const bodyObserver = new MutationObserver(() => {
      applySafeExitAudioMute(isSafeExitActive());
    });
    bodyObserver.observe(document.body, { attributes: true, attributeFilter: ["class"] });
  }

  window.AnveshAudio = {
    playSfx,
    playSprite,
    playTrack,
    stopAllTracks,
    toggleAmbientTelemetry,
    applySafeExitAudioMute
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bindGlobalAudioEvents, { once: true });
  } else {
    bindGlobalAudioEvents();
  }
})();
