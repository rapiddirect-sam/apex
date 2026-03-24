# Visitor Tracking Reuse + Production Release Guide

This guide helps you:
- Reuse the cookie-based visitor tracking module on other websites
- Deploy to production and verify tracking + contact form end-to-end

---

## Part 1: Reuse on another website (step by step)

### 1) Copy the tracking module

Copy this file into the new project:
- `src/lib/visitorTracking.ts`

### 2) Add a hook wrapper in the new project

Create `src/hooks/useVisitTracking.ts` (or equivalent) and initialize tracking on route change.

You can follow the current project pattern:
- Use `trackVisitorVisit(pathname, window.location.search, config)`
- Use `getVisitData(config)` when submitting forms

### 3) Configure only the cookie domain

Set environment variable in the new project:

```bash
NEXT_PUBLIC_TRACKING_COOKIE_DOMAIN=.yourdomain.com
```

Notes:
- Production should use root domain with leading dot (for subdomain sharing), e.g. `.example.com`
- Local development can use `localhost` or leave blank and rely on fallback

### 4) Ensure tracker is mounted globally

Mount tracker once in app root layout (or root app shell), similar to:
- `src/components/VisitTracker.tsx`
- Included in root layout before page content

### 5) Send tracking data with your form/API payload

When form is submitted, append:
- `landingPage`
- `landingTime`
- `referrer`
- `lastVisitPage`
- `visitPath`
- `trafficChannel`
- `adKeyword`
- `extraInfo`

### 6) Extend backend schema and output

On server side:
- Accept the tracking object in schema validation
- Store it, email it, or send it to your CRM

---

## Part 2: Release to production + test checklist

## A. Pre-release checks (local)

Run:

```bash
npm run lint
npm run build
```

If both pass, code is production-ready from static checks perspective.

## B. Configure production environment variables

At minimum, set these in your hosting platform:

```bash
NEXT_PUBLIC_TRACKING_COOKIE_DOMAIN=.apexbatch.com
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=...
RECAPTCHA_SECRET_KEY=...
RESEND_API_KEY=...
```

If missing:
- Form submit may fail (reCAPTCHA/Resend)
- Tracking domain may not match expected cookie scope

## C. Deploy to production

Use your normal flow (Git push + platform auto deploy, or manual deploy).

If using Vercel:
1. Push branch to remote
2. Open Vercel project
3. Confirm latest commit is selected
4. Verify env vars in Production environment
5. Trigger deploy (or let auto-deploy run)
6. Wait for status `Ready`

## D. Production verification (must do)

### 1) Channel attribution test

Open:

```text
https://apexbatch.com/?traffic_channel=google&ad_keyword=cnc+parts&extra_info=spring_campaign
```

Then navigate 2-3 pages inside the site.

### 2) Cookie verification in browser

In DevTools > Application > Cookies, confirm these exist:
- `traffic_channel`
- `ad_keyword`
- `extra_info`
- `landing_page`
- `landing_time`
- `referrer`
- `last_visit_page`
- `visit_path`
- `visit_path_times`

### 3) Contact form end-to-end

Submit a test lead via contact form and confirm received email includes:
- Referrer
- Landing Page / Landing Time
- Last Visit Page
- Traffic Channel / Ad Keyword / Extra Info
- Pages Visited list

### 4) Session behavior check

Close browser and reopen:
- Session cookies (`last_visit_page`, `visit_path`) should reset
- Persistent cookies (`landing_page`, channel cookies) should remain until expiry

---

## Troubleshooting quick notes

- Cookies not written in production:
  - Check `NEXT_PUBLIC_TRACKING_COOKIE_DOMAIN` matches your real domain
  - Confirm site is served on the expected host/subdomain

- Tracking exists but not in email:
  - Check frontend payload includes `tracking`
  - Check backend schema accepts all new fields

- Form blocked:
  - Verify reCAPTCHA keys and domain binding
  - Check rate limit or anti-bot logic in contact API
