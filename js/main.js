(() => {
  const S = window.SITE;
  const $ = (sel, root = document) => root.querySelector(sel);
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const ext = (href) => (/^https?:/.test(href) ? ' target="_blank" rel="noopener"' : "");

  /* ---------- ticker ---------- */
  $("#ticker").innerHTML = S.ticker.map((t) => `<span>${esc(t)}</span>`).join("");

  /* ---------- newest release ---------- */
  const r = S.release;
  if (r) {
    $("#feature").innerHTML = `
      <a class="cover" href="${esc(r.link)}"${ext(r.link)}><img src="${esc(r.cover)}" alt="${esc(r.title)} 커버"></a>
      <div class="info">
        <p class="info-title">${esc(r.title)}</p>
        <dl>
          <dt>Artist</dt><dd>the deep</dd>
          <dt>Status</dt><dd>${esc(r.year)}</dd>
        </dl>
        <a class="linkbtn hot" href="${esc(r.link)}"${ext(r.link)}><img class="px" src="assets/px/disc.svg" alt="" width="24" height="24"><span>${esc(r.type.toUpperCase())}</span><span class="lb-arrow" aria-hidden="true">▶</span></a>
      </div>`;
  }
})();

