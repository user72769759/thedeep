# the deep ☆ official web world

아티스트 **the deep** 홍보용 웹사이트. 2000년대 '창(window)' 틀 — 제목 표시줄, 섹션별 작은 창, 픽셀 폰트(갈무리)·픽셀 아이콘.

## 구조
홈 화면 한 장짜리 사이트예요.
```
index.html      화면 전체 + 링크 버튼 (id="quick-links")
css/style.css   디자인 + 반응형 (960px 태블릿, 680px 모바일)
js/data.js      흐르는 문구, 최신 발매, 뉴스
js/main.js      위 데이터 표시, 방문 수, 반짝이 효과
assets/         로고, 커버, 파비콘 / assets/px/ 픽셀 아이콘
```

## 수정 방법
- **링크 버튼**: `index.html`의 각 `panel` 안 `<a class="linkbtn">`. 아이콘은 `assets/px/` 중에서 고르세요.
- **최신 발매 / 뉴스 / 흐르는 문구**: `js/data.js`.

## 참고
- 방문 수는 **각 방문자의 브라우저에만** 저장됩니다.
- 뉴스레터 폼은 아직 자리표시입니다.
- Cloudflare Workers 배포 설정은 `wrangler.jsonc`(정적 파일 전체 배포), 제외 목록은 `.assetsignore`에 있어요. 빌드 명령 없이 `npx wrangler deploy`로 배포됩니다.
- `prefers-reduced-motion` 설정 시 애니메이션이 꺼집니다.

## 로컬 미리보기
```
python3 -m http.server
```
→ http://localhost:8000
