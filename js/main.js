(() => {
  const S = window.SITE;
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const store = {
    get(k, d) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch { return d; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} },
  };
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- ticker ---------- */
  $("#ticker").innerHTML = S.ticker.map((t) => `<span>${esc(t)}</span>`).join("");

  /* ---------- newest release ---------- */
  const latest = S.releases[0];
  if (latest) {
    $("#promo-title").textContent = `${latest.title} (${latest.type})`;
    $(".promo-cover img").src = latest.cover;
    $("#player-track").textContent = `${latest.title} — the deep`;
    $("#feature").innerHTML = `
      <a href="#music" data-tab="music" data-album="0"><img src="${esc(latest.cover)}" alt="${esc(latest.title)} 커버"></a>
      <a class="feature-link" href="#music" data-tab="music" data-album="0">${esc(latest.title)} / ${esc(latest.type)} ${esc(latest.year)}</a>`;
  }

  /* link buttons, badges, pre-save button are static HTML in index.html */

  /* ---------- news ---------- */
  $("#news-list").innerHTML = S.news.map((n) => `
    <li><time>${esc(n.date)}</time>
      <a class="ylink" href="${esc(n.link)}" data-tab="${esc(n.link.slice(1))}">${esc(n.text)}</a>
      ${n.isNew ? '<span class="new">NEW!</span>' : ""}</li>`).join("");

  /* ---------- music ---------- */
  $("#albums").innerHTML = S.releases.map((r, i) => `
    <button class="album" data-album="${i}" aria-controls="tracklist">
      <img src="${esc(r.cover)}" alt="${esc(r.title)} 커버" loading="lazy">
      <span>${esc(r.title)}</span><small>${esc(r.type)} · ${esc(r.year)}</small>
    </button>`).join("");

  function showAlbum(i) {
    const r = S.releases[i];
    if (!r) return;
    const tl = $("#tracklist");
    tl.innerHTML = `
      <h3>☆ ${esc(r.title)} <small>(${esc(r.type)}, ${esc(r.year)})</small></h3>
      <ol>${r.tracks.map((t) => `<li>${esc(t)}</li>`).join("")}</ol>
      <div class="stream">${Object.entries(r.links).map(([k, v]) => `<a class="btn-gloss" href="${esc(v)}" target="_blank" rel="noopener">${esc(k)}</a>`).join("")}</div>`;
    tl.hidden = false;
    $$(".album").forEach((b) => b.setAttribute("aria-pressed", b.dataset.album === String(i)));
  }
  $("#albums").addEventListener("click", (e) => {
    const b = e.target.closest(".album");
    if (b) { showAlbum(+b.dataset.album); $("#tracklist").scrollIntoView({ behavior: "smooth", block: "nearest" }); }
  });
  showAlbum(0);

  /* ---------- video ---------- */
  $("#videos").innerHTML = S.videos.map((v) => `
    <div class="video">
      <div class="video-frame">${v.youtubeId
        ? `<iframe src="https://www.youtube-nocookie.com/embed/${esc(v.youtubeId)}${v.start ? `?start=${+v.start}` : ""}" title="${esc(v.title)}" loading="lazy" allow="accelerometer; encrypted-media; picture-in-picture" allowfullscreen></iframe>`
        : '<span class="play">▶</span>'}</div>
      <p>${esc(v.title)}</p>
    </div>`).join("");

  /* ---------- shows ---------- */
  $("#shows-body").innerHTML = S.shows.map((s) => `
    <tr><td>${esc(s.date)}</td><td>${esc(s.venue)}</td><td>${esc(s.city)}</td>
      <td>${s.soldOut ? '<span class="soldout">SOLD OUT</span>'
        : s.ticket ? `<a class="ylink" href="${esc(s.ticket)}" target="_blank" rel="noopener">예매하기 ▶</a>` : "TBA"}</td></tr>`).join("");

  /* ---------- gallery + lightbox ---------- */
  $("#gallery").innerHTML = S.gallery.map((g, i) => `
    <button data-i="${i}" aria-label="${esc(g.caption)} 크게 보기"><img src="${esc(g.src)}" alt="${esc(g.caption)}" loading="lazy"></button>`).join("");
  const lb = $("#lightbox");
  let lastFocus = null;
  function openLb(i) {
    const g = S.gallery[i];
    lastFocus = document.activeElement;
    $("#lb-img").src = g.src; $("#lb-img").alt = g.caption; $("#lb-cap").textContent = g.caption;
    lb.hidden = false; $(".lb-close").focus();
  }
  function closeLb() { lb.hidden = true; lastFocus?.focus(); }
  $("#gallery").addEventListener("click", (e) => { const b = e.target.closest("button"); if (b) openLb(+b.dataset.i); });
  lb.addEventListener("click", (e) => { if (e.target === lb || e.target.closest(".lb-close")) closeLb(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !lb.hidden) closeLb(); });

  /* ---------- tabs / routing ---------- */
  const pages = $$(".page").map((p) => p.dataset.page);
  const nav = $(".tabs");
  function go(tab, { focus = false } = {}) {
    if (!pages.includes(tab)) tab = "home";
    $$(".page").forEach((p) => (p.hidden = p.dataset.page !== tab));
    $$(".tabs a").forEach((a) => (a.dataset.tab === tab ? a.setAttribute("aria-current", "page") : a.removeAttribute("aria-current")));
    document.title = `${tab === "home" ? "Home" : tab[0].toUpperCase() + tab.slice(1)} ☆ the deep`;
    nav.classList.remove("open");
    $(".menu-toggle").setAttribute("aria-expanded", "false");
    if (focus) { $("#main").focus({ preventScroll: true }); $("#main").scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" }); }
  }
  document.addEventListener("click", (e) => {
    const a = e.target.closest("[data-tab]");
    if (!a || a.classList.contains("album")) return;
    e.preventDefault();
    const tab = a.dataset.tab;
    history.pushState(null, "", `#${tab}`);
    go(tab, { focus: true });
    if (a.dataset.album) showAlbum(+a.dataset.album);
  });
  window.addEventListener("popstate", () => go(location.hash.slice(1)));
  go(location.hash.slice(1));
  window.scrollTo(0, 0);

  $(".menu-toggle").addEventListener("click", (e) => {
    const open = nav.classList.toggle("open");
    e.currentTarget.setAttribute("aria-expanded", String(open));
  });

  /* ---------- visit counter (this browser) ---------- */
  const visits = store.get("thedeep:visits", 0) + 1;
  store.set("thedeep:visits", visits);
  $("#visit-count").textContent = String(visits).padStart(6, "0");

  /* ---------- guestbook (local only) ---------- */
  const gbKey = "thedeep:guestbook";
  const renderGb = () => {
    const items = store.get(gbKey, []);
    $("#gb-list").innerHTML = items.length
      ? items.map((m) => `<li><span class="who">${esc(m.icon)} ${esc(m.name)}</span><span class="when">${esc(m.date)}</span><p>${esc(m.msg)}</p></li>`).join("")
      : '<li><span class="who">☆ the deep</span><p>첫 번째 방명록의 주인공이 되어주세요!</p></li>';
  };
  $("#gb-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const f = new FormData(e.target);
    const items = store.get(gbKey, []);
    const d = new Date();
    items.unshift({
      name: f.get("name").trim(), msg: f.get("msg").trim(), icon: f.get("icon"),
      date: `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, "0")}.${String(d.getDate()).padStart(2, "0")}`,
    });
    store.set(gbKey, items.slice(0, 50));
    e.target.reset();
    renderGb();
  });
  renderGb();

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
