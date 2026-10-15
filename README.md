# Success Global Eduhouse frontend

A responsive React and Vite website for Success Global Eduhouse Pvt. Ltd. The current build is frontend-only and is structured to connect to a Laravel API later.

## Run locally

```bash
npm install
npm run dev
```

Create a production build with `npm run build` and preview it with `npm run preview`.

## Project structure

- `src/components` — reusable navigation, footer, form and section components
- `src/pages` — Home, About, Services, Destinations, Contact and 404 routes
- `src/data/site.js` — editable site copy, service, destination, founder and FAQ content
- `src/api/client.js` — API integration boundary for consultation submissions
- `src/assets` — optimised brand assets
- `src/styles` — design tokens, global rules and responsive page styles
- `public` — favicon, sitemap and robots metadata

## Connect the Laravel API

Copy `.env.example` to `.env` and set `VITE_API_URL` to the Laravel API base URL. The form sends JSON to `POST {VITE_API_URL}/consultations` with `fullName`, `phone`, `email`, `destination` and `message`.

If `VITE_API_URL` is unset, the form opens the visitor's mail app with the consultation request prepared for `eduhousesuccessglobal@gmail.com`.

## Before production launch

Replace the `.example` hostname in `public/sitemap.xml` and `public/robots.txt` with the confirmed production domain. Add the final Google Maps embed on the Contact page when its place URL is available.
