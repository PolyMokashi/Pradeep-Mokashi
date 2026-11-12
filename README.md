# Pradeep Mokashi Portfolio

This repository contains the Vite-powered React frontend. The SQLite API and
local portfolio media are in the separate
[Portfolio_Backend repository](https://github.com/PolyMokashi/Portfolio_Backend).

## Run locally

Requires Node.js and npm.

1. Start the backend by following the
   [backend README](https://github.com/PolyMokashi/Portfolio_Backend#readme).
   Vite proxies `/api` and `/media` to `http://127.0.0.1:5000` by default.
   Set `PORTFOLIO_BACKEND_URL` to use a different local API URL.
2. Install dependencies and start the frontend:

   ```sh
   npm install
   npm start
   ```

Open `http://localhost:5173`. Set `VITE_GTM_ID` in `.env` to enable Google Tag
Manager.

## Deploy

Deploy the backend separately, then configure Vercel rewrites for `/api/*` and
`/media/*` to the backend URL. Use `npm run build` as the build command and
`dist` as the output directory.

## Scripts

- `npm start` — start the Vite development server.
- `npm test` — run Vitest.
- `npm run build` — create a production build in `dist/`.
- `npm run preview` — preview the production build locally.
