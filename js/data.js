/* =========================================================
   the deep — 홈 화면 콘텐츠
   링크 버튼은 index.html의 id="quick-links"에 직접 들어 있어요.
   ========================================================= */
window.SITE = {
  ticker: [
    "☆ QUEST PRE-SAVE NOW ☆",
    "♫ rollercoaster MV OUT NOW ♫",
    "♡ TOUR MERCH 판매 중 ♡",
  ],

  // 홈의 'Newest Release'와 왼쪽 사이드바에 노출
  release: {
    title: "QUEST",
    type: "Pre-save",
    year: "Coming soon",
    cover: "assets/cover-1.svg",
    link: "https://open.spotify.com/intl-ko/album/49BDGWBRg6COeKCzZmTNcL?si=02f5b14a60664b77&nd=1&dlsi=e8d5ecc45f8e4152",
  },

  // link는 비워두면 글자만 표시돼요 (예시 항목 — 실제 소식으로 바꿔주세요)
  news: [
    { date: "2026.11.25", text: "QUEST 프리세이브 오픈!", link: "https://open.spotify.com/intl-ko/album/49BDGWBRg6COeKCzZmTNcL?si=02f5b14a60664b77&nd=1&dlsi=e8d5ecc45f8e4152", isNew: true },
    { date: "2026.11.18", text: "12월 단독 공연 'Under the Surface' 예매 오픈", link: "", isNew: true },
    { date: "2026.11.02", text: "rollercoaster 뮤직비디오 공개", link: "https://www.youtube.com/watch?si=1QNYl4Ic7zeMxyI0&v=15ejN62aGrI&feature=youtu.be" },
    { date: "2026.10.15", text: "공식 홈페이지 오픈 ☆", link: "" },
  ],

  moods: ["🌊", "🫧", "🐚", "🌙", "💿", "🐟", "✨"],
};
