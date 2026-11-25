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
      <a href="${esc(r.link)}"${ext(r.link)}><img src="${esc(r.cover)}" alt="${esc(r.title)} 커버"></a>
      <a class="feature-link" href="${esc(r.link)}"${ext(r.link)}>${esc(r.title)} / ${esc(r.type)} ${esc(r.year)}</a>`;
  }


})();
