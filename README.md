# SOSA Personalized Job Support (Next.js + Tailwind)

Deployed on Vercel with optional email notifications via Resend.

## One-Click Deploy
1) Push this repo to GitHub
2) Import to Vercel → Deploy (no environment variables required for basic functionality)

## Email Notifications (Optional)
- If you set `RESEND_API_KEY` in Vercel and optionally `LEADS_TO` (defaults to `syed@sosaconsult.com`), the contact form will email you.
- Uses sender `Leads <onboarding@resend.dev>` which works without domain verification for testing.

## Local Dev
```bash
npm i
npm run dev
```
