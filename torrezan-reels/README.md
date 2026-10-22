# Torrezan Seguros — Reels "Por que ter seguro" (HyperFrames)

- `index.html` — composição raiz (1080×1920, 30 fps, 55 s): hospeda cada cena + fio dourado de continuidade + guia da zona segura.
- `compositions/` — uma cena por arquivo (`s1-hook`, `s6-cta` prontas; `s2`–`s5` pendentes de aprovação).
- `assets/tz.css` — tokens de marca, esfera, vidro, texto dourado extrudado. `assets/components/` — escudo, carro, wordmark (provisório), ícones.
- Guia da zona segura (y 270–1250, margem lateral 88): `npx hyperframes render --variables '{"guides":true}'` ou defina `"default":true` em `index.html`. Desligado por padrão.
- `preview.html` — montagem curta (cena 1 + cena 6) para prévia. `keyframes/` e `previews/` — material para aprovação.
- Comandos: `npx hyperframes check`, `npx hyperframes snapshot --at 0,2,50,54`, `npx hyperframes render -o ../TZ_REELS_por-que-ter-seguro_v1.mp4`.
