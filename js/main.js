(() => {
  const S = window.SITE;
  const $ = (sel, root = document) => root.querySelector(sel);
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const store = {
    get(k, d) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch { return d; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} },
  };
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const ext = (href) => (/^https?:/.test(href) ? ' target="_blank" rel="noopener"' : "");

  /* ---------- ticker ---------- */
  $("#ticker").innerHTML = S.ticker.map((t) => `<span>${esc(t)}</span>`).join("");

  /* ---------- newest release ---------- */
  const r = S.release;
  if (r) {
    $("#promo-title").textContent = `${r.title} (${r.type})`;
    $(".promo-cover img").src = r.cover;
    $("#player-track").textContent = `${r.title} — the deep`;
    $("#feature").innerHTML = `
      <a href="${esc(r.link)}"${ext(r.link)}><img src="${esc(r.cover)}" alt="${esc(r.title)} 커버"></a>
      <a class="feature-link" href="${esc(r.link)}"${ext(r.link)}>${esc(r.title)} / ${esc(r.type)} ${esc(r.year)}</a>`;
  }

  /* ---------- news ---------- */
  $("#news-list").innerHTML = S.news.map((n) => `
    <li><time>${esc(n.date)}</time>
      ${n.link ? `<a class="ylink" href="${esc(n.link)}"${ext(n.link)}>${esc(n.text)}</a>` : `<span class="ylink">${esc(n.text)}</span>`}
      ${n.isNew ? '<span class="new">NEW!</span>' : ""}</li>`).join("");

  /* ---------- visit counter (this browser) ---------- */
  const visits = store.get("thedeep:visits", 0) + 1;
  store.set("thedeep:visits", visits);
  $("#visit-count").textContent = String(visits).padStart(6, "0");

  /* ---------- newsletter (placeholder) ---------- */
  $("#club-form").addEventListener("submit", (e) => {
    e.preventDefault();
    $("#club-msg").textContent = "♡ 뉴스레터는 곧 열려요!";
    e.target.reset();
  });

  /* ---------- small things ---------- */
  $("#mood").textContent = S.moods[new Date().getDate() % S.moods.length];
  $("#year").textContent = new Date().getFullYear();

  // sparkle cursor trail (mouse only, motion allowed)
  if (!reduceMotion && window.matchMedia("(pointer: fine)").matches) {
    const glyphs = ["✦", "✧", "☆", "♡", "·"];
    let last = 0;
    document.addEventListener("mousemove", (e) => {
      const now = performance.now();
      if (now - last < 45) return;
      last = now;
      const s = document.createElement("span");
      s.className = "sparkle";
      s.textContent = glyphs[(Math.random() * glyphs.length) | 0];
      s.style.left = `${e.clientX + 6}px`;
      s.style.top = `${e.clientY + 6}px`;
      s.style.color = Math.random() > 0.5 ? "#fff56a" : "#ffffff";
      document.body.appendChild(s);
      setTimeout(() => s.remove(), 800);
    });
  }
})();
