/* =========================================================
   the deep — 사이트 콘텐츠
   이 파일만 수정하면 뉴스/앨범/영상/공연/사진/링크가 바뀝니다.
   (모든 값은 예시입니다. 실제 정보로 바꿔주세요.)
   ========================================================= */
window.SITE = {
  ticker: [
    "☆ QUEST PRE-SAVE NOW ☆",
    "♫ rollercoaster MV OUT NOW ♫",
    "♡ TOUR MERCH 판매 중 ♡",
    "✿ 방명록에 한마디 남겨주세요 ✿",
  ],

  // ★ 메인 링크 버튼 (Home의 Quick Links + Links 페이지)
  links: [
    { label: "QUEST PRE SAVE", icon: "💿", href: "https://open.spotify.com/intl-ko/album/49BDGWBRg6COeKCzZmTNcL?si=02f5b14a60664b77&nd=1&dlsi=e8d5ecc45f8e4152", hot: true },
    { label: "rollercoaster MV", icon: "🎢", href: "https://www.youtube.com/watch?si=1QNYl4Ic7zeMxyI0&v=15ejN62aGrI&feature=youtu.be", hot: true },
    { label: "TOUR MERCH", icon: "👕", href: "https://merchjungle.com/collections/the-deep?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAcGRvZgJzcnRjBmFwcF9pZA85MzY2MTk3NDMzOTI0NTkAAafuC0o-3X09tgsPhC98BJR-7VUA3eqEFfqxfkGF_B6eQaXzFRyasAyZP3REJw_aem_c27AeGCh2oo0fhmBnSmLlA" },
    { label: "INTERVIEW · DAZED", icon: "📰", href: "https://www.dazeddigital.com/music/article/69150/1/the-deep-k-pop-antihero-south-korea-kpop-bitch-interview" },
    { label: "WOOKIPOP INTERVIEW", icon: "🎙️", href: "https://www.youtube.com/watch?v=GkZdX8l9ABg&t=124s" },
    { label: "VLOG", icon: "📹", href: "https://www.youtube.com/@deep_and_deepies/videos" },
    { label: "YOUTUBE", icon: "▶", href: "https://www.youtube.com/@TheDeep" },
    { label: "INSTAGRAM", icon: "📷", href: "https://www.instagram.com/thedeeeep/" },
    { label: "TIKTOK", icon: "♪", href: "https://www.tiktok.com/@thedeeeep" },
  ],

  news: [
    { date: "2026.11.25", text: "QUEST 프리세이브 오픈!", link: "#music", isNew: true },
    { date: "2026.11.18", text: "12월 단독 공연 'Under the Surface' 예매 오픈", link: "#shows", isNew: true },
    { date: "2026.11.02", text: "rollercoaster 뮤직비디오 공개", link: "#video" },
    { date: "2026.10.15", text: "공식 홈페이지 오픈 ☆", link: "#home" },
  ],

  // 첫 번째 항목이 '최신 발매'로 홈과 사이드바에 노출됩니다.
  releases: [
    {
      title: "QUEST",
      type: "Pre-save",
      year: "Coming soon",
      cover: "assets/cover-1.svg",
      tracks: ["(발매 후 공개)"],
      links: { "Spotify Pre-save": "https://open.spotify.com/intl-ko/album/49BDGWBRg6COeKCzZmTNcL?si=02f5b14a60664b77&nd=1&dlsi=e8d5ecc45f8e4152" },
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
    { title: "rollercoaster — Official MV", youtubeId: "15ejN62aGrI" },
    { title: "WOOKIPOP Interview", youtubeId: "GkZdX8l9ABg", start: 124 },
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
    { label: "YOUTUBE", href: "https://www.youtube.com/@TheDeep", bg: "#ff4d6d", color: "#fff" },
    { label: "INSTAGRAM", href: "https://www.instagram.com/thedeeeep/", bg: "linear-gradient(90deg,#ff7ac6,#ffb86b)", color: "#fff" },
    { label: "TIKTOK", href: "https://www.tiktok.com/@thedeeeep", bg: "#1b1b1b", color: "#8eeaf0" },
    { label: "VLOG", href: "https://www.youtube.com/@deep_and_deepies/videos", bg: "#6fd8e0", color: "#0b4c52" },
  ],

  moods: ["🌊", "🫧", "🐚", "🌙", "💿", "🐟", "✨"],
};
