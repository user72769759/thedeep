# the deep ☆ official web world

아티스트 **the deep** 홍보용 Y2K 스타일 반응형 웹사이트.
핑크 + 민트 + 레몬 옐로, 광택 버튼, 흐르는 뉴스 티커, 반짝이 커서, 88×31 배너 버튼.

## 구조
```
index.html      페이지 뼈대 (Home / Music / Video / Shows / Gallery / Profile / Guestbook / Links)
css/style.css   디자인 + 반응형 (960px 태블릿, 680px 모바일)
js/data.js      ★ 콘텐츠 — 뉴스, 앨범, 영상, 공연, 사진, 링크는 여기만 고치면 됨
js/main.js      탭 전환, 갤러리 라이트박스, 방명록, 반짝이 효과
assets/         SVG 그래픽 (커버·사진은 자리표시용 — 실제 이미지로 교체)
```

## 수정 방법
- **앨범/뉴스/공연/링크**: `js/data.js`의 값을 바꾸세요. `releases`의 첫 항목이 "최신 발매"로 노출됩니다.
- **뮤직비디오**: `videos`의 `youtubeId`에 유튜브 영상 ID를 넣으면 임베드됩니다.
- **사진**: `assets/`에 jpg/png를 넣고 `gallery`, `releases[].cover` 경로를 바꾸세요.
- **프로필 문구**: `index.html`의 `<!-- EDIT -->` 부분.

## 참고
- 방명록과 방문 수는 지금은 **각 방문자의 브라우저에만** 저장됩니다. 모두가 함께 보는 방명록은 Supabase 연결이 필요해요.
- 뉴스레터 폼은 아직 자리표시입니다.
- 빌드 과정이 없는 정적 사이트라 Cloudflare Pages에 저장소를 연결하면 그대로 배포됩니다 (build command 없음, output directory `/`).
- `prefers-reduced-motion` 설정 시 애니메이션이 꺼집니다.

## 로컬 미리보기
```
python3 -m http.server
```
→ http://localhost:8000
