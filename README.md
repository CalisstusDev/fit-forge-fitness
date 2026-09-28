# FITFORGE

A responsive fitness and food lifestyle website built with Next.js App Router, TypeScript, Tailwind CSS 4, Framer Motion, Supabase Auth, and Resend.

## Run locally

```powershell
npm install
Copy-Item .env.example .env.local
npm run dev
```

Open http://localhost:3000.

## Authentication setup

1. Create a Supabase project and copy its project URL and anon/public key into `.env.local` as `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`.
2. In Supabase Authentication settings, enable email/password sign-in. The site implements email/password only and includes no social sign-in.
3. Add local and production callback URLs, including `/auth/callback?next=%2Fdashboard`, to Supabase's redirect URL allowlist.
4. Configure email confirmation according to your deployment. New accounts use the callback route to exchange a confirmation code into an SSR session.

The dashboard verifies the current Supabase user on the server and redirects unauthenticated visitors to `/login`. Auth is not mocked; without Supabase environment variables the forms explain that setup is required.

## Contact and newsletter email delivery

1. Create a Resend account, verify a sending domain, and create an API key.
2. Set `RESEND_API_KEY` and `CONTACT_FROM_EMAIL` in `.env.local` and in the production hosting environment. The from address must use a sender/domain verified in Resend.
3. Contact form submissions are validated server-side and sent to `gabrielgabriel9727@gmail.com`. The visitor's email is set as reply-to. The endpoint returns an explicit configuration or delivery error if Resend is missing or rejects the request.
4. Newsletter submissions send a subscription request notification to the same inbox. The recipient must add the address to their mailing list and manage consent/unsubscribe records; no mailing-list provider is configured in this project.

Do not commit `.env.local` or expose the Resend key in browser code. `.env.example` contains names and safe sample values only.

## Pages

Home, About, Programs, Nutrition, Gallery, Contact, Login, Sign Up, Dashboard, Privacy, and Terms. The shared header, footer, and FITFORGE guide chatbot are available site-wide. The gallery randomizes 18 distinct image entries per visit and supports category filters.

## Checks

```powershell
npm run lint
npx tsc --noEmit
npm run build
```

External imagery is served from Unsplash URLs. A production launch should use approved brand photography and review fitness safety copy, privacy terms, account retention, and email delivery settings.
