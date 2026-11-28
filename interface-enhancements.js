/* ANVESH DIRECTORATE — interactive interface enhancements v4.0 */
(() => {
  "use strict";
  const SELECTOR = "select.input-control, select";
  let selectCounter = 0;

  function enhanceSelect(select) {
    if (select.dataset.customized === "true" || !select.parentNode) return;
    select.dataset.customized = "true";
    const wrapper = document.createElement("div");
    wrapper.className = "custom-select";
    wrapper.style.width = select.style.width || "100%";
    if (select.style.minWidth) wrapper.style.minWidth = select.style.minWidth;
    const id = `anvesh-select-${++selectCounter}`;
    const trigger = document.createElement("button");
    trigger.type = "button";
    trigger.className = "custom-select-trigger";
    trigger.id = `${id}-trigger`;
    trigger.setAttribute("aria-haspopup", "listbox");
    trigger.setAttribute("aria-expanded", "false");
    const label = document.createElement("span");
    label.className = "custom-select-label";
    const chevron = document.createElement("span");
    chevron.className = "custom-select-chevron";
    chevron.setAttribute("aria-hidden", "true");
    trigger.append(label, chevron);

    const menu = document.createElement("div");
    menu.className = "custom-select-menu";
    menu.id = `${id}-menu`;
    menu.setAttribute("role", "listbox");
    menu.setAttribute("aria-labelledby", trigger.id);
    menu.hidden = true;

    const originalClass = select.className;
    select.classList.add("custom-select-native");
    select.setAttribute("tabindex", "-1");
    select.setAttribute("aria-hidden", "true");
    select.parentNode.insertBefore(wrapper, select);
    wrapper.append(trigger, menu, select);

    let activeIndex = Math.max(0, select.selectedIndex);
    let typeBuffer = "";
    let typeTimer = null;

    function options() {
      return Array.from(select.options).map((option, index) => ({
        option, index, text: option.textContent.trim(), disabled: option.disabled || option.parentElement?.disabled
      }));
    }
    function sync() {
      const selected = select.options[select.selectedIndex];
      label.textContent = selected ? selected.textContent.trim() : "SELECT AN OPTION";
      trigger.disabled = select.disabled;
      trigger.setAttribute("aria-label", `${select.getAttribute("aria-label") || select.name || "Select"}: ${label.textContent}`);
      menu.querySelectorAll(".custom-select-option").forEach((button, index) => {
        const opt = select.options[index];
        if (!opt) return;
        button.setAttribute("aria-selected", String(index === select.selectedIndex));
        button.disabled = !!(opt.disabled || opt.parentElement?.disabled);
      });
    }
    function close(focus = false) {
      wrapper.classList.remove("open");
      trigger.setAttribute("aria-expanded", "false");
      menu.hidden = true;
      if (focus) trigger.focus();
    }
    function open() {
      if (select.disabled) return;
      document.querySelectorAll(".custom-select.open").forEach(el => {
        if (el !== wrapper) {
          el.classList.remove("open");
          const t = el.querySelector(".custom-select-trigger");
          const m = el.querySelector(".custom-select-menu");
          if (t) t.setAttribute("aria-expanded", "false");
          if (m) m.hidden = true;
        }
      });
      render();
      menu.hidden = false;
      wrapper.classList.add("open");
      trigger.setAttribute("aria-expanded", "true");
      const current = menu.querySelector(`[data-index="${select.selectedIndex}"]:not(:disabled)`) ||
        menu.querySelector(".custom-select-option:not(:disabled)");
      if (current) {
        activeIndex = Number(current.dataset.index);
        setActive();
      }
    }
    function setActive() {
      menu.querySelectorAll(".custom-select-option").forEach(el => el.classList.toggle("is-active", Number(el.dataset.index) === activeIndex));
      const active = menu.querySelector(`[data-index="${activeIndex}"]`);
      if (active) active.scrollIntoView({ block: "nearest" });
    }
    function choose(index) {
      const option = select.options[index];
      if (!option || option.disabled || option.parentElement?.disabled) return;
      select.selectedIndex = index;
      select.dispatchEvent(new Event("change", { bubbles: true }));
      select.dispatchEvent(new Event("input", { bubbles: true }));
      sync();
      close(true);
    }
    function render() {
      menu.replaceChildren();
      const opts = options();
      if (!opts.length) {
        const empty = document.createElement("div");
        empty.className = "custom-select-empty";
        empty.textContent = "NO OPTIONS AVAILABLE";
        menu.append(empty);
        return;
      }
      opts.forEach(({ option, index, text, disabled }) => {
        const item = document.createElement("button");
        item.type = "button";
        item.className = "custom-select-option";
        item.dataset.index = String(index);
        item.setAttribute("role", "option");
        item.setAttribute("aria-selected", String(index === select.selectedIndex));
        item.textContent = text || "—";
        item.disabled = !!disabled;
        item.addEventListener("mouseenter", () => { activeIndex = index; setActive(); });
        item.addEventListener("click", () => choose(index));
        menu.append(item);
      });
    }
    trigger.addEventListener("click", () => wrapper.classList.contains("open") ? close() : open());
    trigger.addEventListener("keydown", event => {
      const available = options().filter(o => !o.disabled);
      const move = direction => {
        if (!wrapper.classList.contains("open")) open();
        const indices = available.map(o => o.index);
        if (!indices.length) return;
        let position = indices.indexOf(activeIndex);
        position = Math.max(0, Math.min(indices.length - 1, position + direction));
        activeIndex = indices[position]; setActive(); event.preventDefault();
      };
      if (["ArrowDown","ArrowUp","Enter"," ","Home","End"].includes(event.key)) event.preventDefault();
      if (event.key === "ArrowDown") move(1);
      else if (event.key === "ArrowUp") move(-1);
      else if (event.key === "Home" && wrapper.classList.contains("open")) { activeIndex = available[0]?.index ?? 0; setActive(); }
      else if (event.key === "End" && wrapper.classList.contains("open")) { activeIndex = (available.length ? available[available.length - 1].index : 0); setActive(); }
      else if (event.key === "Enter" || event.key === " ") {
        if (!wrapper.classList.contains("open")) open(); else choose(activeIndex);
      } else if (event.key === "Escape") close(true);
      else if (event.key.length === 1 && !event.ctrlKey && !event.metaKey) {
        typeBuffer += event.key.toLocaleLowerCase();
        clearTimeout(typeTimer); typeTimer = setTimeout(() => typeBuffer = "", 650);
        const match = available.find(o => o.text.toLocaleLowerCase().startsWith(typeBuffer));
        if (match) { activeIndex = match.index; if (!wrapper.classList.contains("open")) open(); setActive(); }
      }
    });
    select.addEventListener("change", sync);
    new MutationObserver(() => { render(); sync(); }).observe(select, { childList: true, subtree: true, attributes: true });
    sync();
  }

  function revealEnhancements() {
    const candidates = document.querySelectorAll(
      ".case-card,.agent-card,.evidence-card,.division-card,.status-card,.classified-status-panel,.section-heading,.hero-copy,.portal-stage"
    );
    if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("anv-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -30px 0px" });
    candidates.forEach((el, index) => {
      if (el.dataset.anvReveal) return;
      // Only stage scroll-reveal on currently visible views; hidden views reveal on switchView()
      const parentView = el.closest(".app-view");
      if (parentView && !parentView.classList.contains("active-view")) {
        el.dataset.anvReveal = "true";
        el.classList.add("anv-reveal", "anv-visible");
        return;
      }
      el.dataset.anvReveal = "true";
      el.classList.add("anv-reveal");
      el.style.setProperty("--reveal-delay", `${Math.min(index % 5, 4) * 55}ms`);
      observer.observe(el);
    });
  }

  function boot() {
    document.querySelectorAll(SELECTOR).forEach(enhanceSelect);
    revealEnhancements();
    const observer = new MutationObserver(records => {
      let changed = false;
      records.forEach(record => record.addedNodes.forEach(node => {
        if (node.nodeType !== 1) return;
        if (node.matches?.(SELECTOR)) enhanceSelect(node);
        node.querySelectorAll?.(SELECTOR).forEach(enhanceSelect);
        changed = true;
      }));
      if (changed) revealEnhancements();
    });
    observer.observe(document.body, { childList: true, subtree: true });
    document.addEventListener("pointerdown", event => {
      if (!event.target.closest(".custom-select")) {
        document.querySelectorAll(".custom-select.open").forEach(wrapper => {
          wrapper.classList.remove("open");
          const trigger = wrapper.querySelector(".custom-select-trigger");
          const menu = wrapper.querySelector(".custom-select-menu");
          if (trigger) trigger.setAttribute("aria-expanded", "false");
          if (menu) menu.hidden = true;
        });
      }
    });
    document.addEventListener("keydown", event => {
      if (event.key === "Escape") {
        document.querySelectorAll(".custom-select.open").forEach(wrapper => {
          wrapper.classList.remove("open");
          const trigger = wrapper.querySelector(".custom-select-trigger");
          const menu = wrapper.querySelector(".custom-select-menu");
          if (trigger) trigger.setAttribute("aria-expanded", "false");
          if (menu) menu.hidden = true;
        });
      }
    });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot, { once: true });
  else boot();
})();
