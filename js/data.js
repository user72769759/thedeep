/* =========================================================
   the deep — 사이트 콘텐츠
   이 파일만 수정하면 뉴스/앨범/영상/공연/사진/링크가 바뀝니다.
   (모든 값은 예시입니다. 실제 정보로 바꿔주세요.)
   ========================================================= */
window.SITE = {
  ticker: [
    "☆ NEW SINGLE 'Blue Hour' OUT NOW ☆",
    "♡ 12월 단독 공연 예매 오픈 ♡",
    "♫ 방명록에 한마디 남겨주세요 ♫",
    "✿ Deep Club 뉴스레터 구독하고 미공개 데모 받기 ✿",
  ],

  news: [
    { date: "2026.11.25", text: "새 싱글 'Blue Hour' 발매!", link: "#music", isNew: true },
    { date: "2026.11.18", text: "12월 단독 공연 'Under the Surface' 예매 오픈", link: "#shows", isNew: true },
    { date: "2026.11.02", text: "'Blue Hour' 뮤직비디오 티저 공개", link: "#video" },
    { date: "2026.10.15", text: "공식 홈페이지 오픈 ☆", link: "#home" },
  ],

  // 첫 번째 항목이 '최신 발매'로 홈과 사이드바에 노출됩니다.
  releases: [
    {
      title: "Blue Hour",
      type: "Single",
      year: "2026",
      cover: "assets/cover-1.svg",
      tracks: ["Blue Hour", "Blue Hour (Inst.)"],
      links: { Spotify: "#", "Apple Music": "#", Melon: "#", YouTube: "#" },
    },
    {
      title: "Under the Surface",
      type: "EP",
      year: "2025",
      cover: "assets/cover-2.svg",
      tracks: ["Intro : Dive", "Pressure", "Glass Fish", "Low Tide", "Surface"],
      links: { Spotify: "#", "Apple Music": "#", Melon: "#" },
    },
    {
      title: "Bubble",
      type: "Single",
      year: "2024",
      cover: "assets/cover-3.svg",
      tracks: ["Bubble", "Bubble (Night ver.)"],
      links: { Spotify: "#", "Apple Music": "#" },
    },
  ],

  // youtubeId를 넣으면 실제 영상이 임베드됩니다. 비워두면 자리표시.
  videos: [
    { title: "Blue Hour — Official MV", youtubeId: "" },
    { title: "Blue Hour — Teaser", youtubeId: "" },
    { title: "Pressure — Live Session", youtubeId: "" },
    { title: "Glass Fish — Visualizer", youtubeId: "" },
  ],

  shows: [
    { date: "2026.12.20", venue: "Under the Surface 단독 공연", city: "Seoul", ticket: "#" },
    { date: "2027.01.11", venue: "Winter Bubble Fest", city: "Busan", ticket: "#" },
    { date: "2026.09.03", venue: "Club Aqua", city: "Seoul", ticket: "", soldOut: true },
  ],

  gallery: [
    { src: "assets/photo-1.svg", caption: "studio, late night" },
    { src: "assets/photo-2.svg", caption: "Blue Hour shoot" },
    { src: "assets/photo-3.svg", caption: "live @ Club Aqua" },
    { src: "assets/photo-4.svg", caption: "backstage" },
    { src: "assets/photo-5.svg", caption: "sea trip" },
    { src: "assets/photo-6.svg", caption: "CD collection" },
  ],

  // 88x31 버튼 링크
  badges: [
    { label: "INSTAGRAM", href: "#", bg: "linear-gradient(90deg,#ff7ac6,#ffb86b)", color: "#fff" },
    { label: "YOUTUBE", href: "#", bg: "#ff4d6d", color: "#fff" },
    { label: "SPOTIFY", href: "#", bg: "#3ddc84", color: "#103b22" },
    { label: "SOUNDCLOUD", href: "#", bg: "linear-gradient(180deg,#ffb35c,#ff7a2e)", color: "#fff" },
    { label: "X / TWITTER", href: "#", bg: "#1b1b1b", color: "#8eeaf0" },
    { label: "BANDCAMP", href: "#", bg: "#6fd8e0", color: "#0b4c52" },
  ],

  moods: ["🌊", "🫧", "🐚", "🌙", "💿", "🐟", "✨"],
};
