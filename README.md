# Dilawar Portfolio

Mobile portfolio for **Muhammad Dilawar Qayoum**, React Native developer (Android & iOS).

## Next.js website

A full web portfolio lives in `website/`:

```bash
cd website
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Pages: Home, Work, Experience, CV, Contact.

### Deploy on Vercel

The website is in `website/`, not the Expo app at the repo root. In Vercel:

1. Project → **Settings → General → Root Directory**
2. Set Root Directory to `website`
3. Redeploy

If Root Directory stays empty, Visit may download Expo `index.ts` instead of opening the site.

## Run the React Native app

```bash
npm install
npx expo start
```

Then open iOS Simulator, Android emulator, or Expo Go.

## What’s inside

- **Home** — intro, stats, featured work
- **Work** — all shipped apps with category filters
- **Career** — experience timeline + education
- **Skills** — stack grouped by area
- **Contact** — call, email, location
- **CV screen** — shareable resume from Home → View full CV

Projects include Rico Live, ZevoLive, PrimeLive, WaveLive, MaxLive, Bysim (travel eSIM), Jom Guitar, Varsik, AI Hybrid, Axcel SMS, BanoLive, Quba Foundation, KindnessHub, and earlier Lime / internship work.

## Printable CV

- [`cv/Muhammad_Dilawar_Qayoum_CV.html`](cv/Muhammad_Dilawar_Qayoum_CV.html) — open in a browser and print / Save as PDF
- [`cv/Muhammad_Dilawar_Qayoum_CV.md`](cv/Muhammad_Dilawar_Qayoum_CV.md) — Markdown version
