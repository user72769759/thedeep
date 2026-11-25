# the deep ☆ official web world

아티스트 **the deep** 홍보용 Y2K 스타일 반응형 웹사이트.
핑크 + 민트 + 레몬 옐로, 광택 버튼, 흐르는 뉴스 티커, 반짝이 커서, 88×31 배너 버튼.

## 구조
홈 화면 한 장짜리 사이트예요.
```
index.html      화면 전체 + 링크 버튼 (id="quick-links")
css/style.css   디자인 + 반응형 (960px 태블릿, 680px 모바일)
js/data.js      흐르는 문구, 최신 발매, 뉴스
js/main.js      위 데이터 표시, 방문 수, 반짝이 효과
assets/         SVG 그래픽 (커버는 자리표시용 — 실제 이미지로 교체)
```

## 수정 방법
- **링크 버튼**: `index.html`의 `id="quick-links"`(기본), `id="interviews"`, `id="social"` 안에서 고치세요.
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
