# Art-is-Tree LLC — Full Code Audit & SEO/AEO Fix Report

**Date:** July 10, 2026
**Branch:** `claude/code-cleanup-k9isfi` (commit `fdb43bc`, based on latest `main`)
**Build:** `npm run build` → 33 prerendered public routes. ✅ `npm run lint` clean.

---

## 1. What was audited

Two independent audit passes were run over both the source (`src/`) and the
built static HTML (`dist/`, 33 routes):

- **Code-correctness audit** — every component/page read for runtime bugs,
  null-safety, dead code, non-deterministic output, and API hardening.
- **Functionality + link + on-page SEO/AEO audit** — every internal/external
  link, button, CTA, NAP field, `<title>`/description/canonical, `<h1>`, image
  alt, and every JSON-LD node in the built HTML.

---

## 2. HIGH-severity issues — FIXED

| # | Issue | Scope | Status |
|---|-------|-------|--------|
| 1 | `Breadcrumbs.jsx` emitted an **HTML-entity-escaped (unparseable)** BreadcrumbList JSON-LD **and** hardcoded the wrong domain `artistreeva.com` | 11 pages | ✅ Removed the duplicate block (a valid copy is emitted globally by `BreadcrumbListSchema`); wrong domain gone |
| 2 | **Two `<h1>` per page** — the current breadcrumb crumb rendered as a second `<h1>`, styled `text-white` (invisible on the gray bar) | 11 pages | ✅ Changed to a visible `<span>` (brand green), single `<h1>` restored |
| 3 | Every page emitted a LocalBusiness named **"Art-is-Tree LLC - undefined"** (`LocationPagesSchema` mounted globally with no `cityName`) | all 33 pages | ✅ Component removed from global layout and deleted |

**Verified in build:** `"Art-is-Tree LLC - undefined"` → **0 pages** (was 33);
`artistreeva.com` → **0 files** (was 11); pages with 2× `<h1>` → **0** (was 11).

## 3. MEDIUM — Schema consolidation — FIXED

Before: home page carried **4 LocalBusiness + 2 AggregateRating** nodes with no
stable identity; other money pages emitted a bare rating-only LocalBusiness that
**collided on the same `@id`** as the full node.

Fixes:
- Removed the redundant **static LocalBusiness** hardcoded in `index.html`
  (it shipped on every prerendered page with no `@id`).
- Deleted `AggregateRatingSchema` (it duplicated `LocalBusinessSchema`'s `@id`
  and rating). About / Services / Testimonials now render the **full**
  `LocalBusinessSchema`; Home / Contact drop the duplicate rating node.
- Gave `LocalBusiness` and `Organization` a **stable site-wide `@id`**
  (`…/#localbusiness`, `…/#organization`) so every page references one entity.

**Verified in build:** every page now emits exactly **1 AggregateRating** and
**1 canonical LocalBusiness** (nested `provider` references inside `Service`
nodes are intentional and standard).

## 4. LOW — Links / consistency — FIXED

| Issue | Fix |
|-------|-----|
| Nav admin link `/admin/debug-google-places` → 404 (real route `/admin/debug-places`) | Corrected (all admin debug links) |
| `Navigation.jsx` Instagram used non-www `instagram.com/artistreeva` | Normalized to `www.instagram.com/artistreeva` (matches Footer/constants) |
| `GalleryPage` used a `maps.app.goo.gl` short link | Standardized to the canonical `?cid=12599844776703525086` URL |

## 5. Code-correctness fixes (earlier in this batch)

- `ErrorBoundary.jsx` — removed the `|| true` that forced dev-only error detail
  into production.
- `GoogleReviewsDisplay.jsx` — null-guard on `reviewer_name` before `.charAt(0)`
  (prevented a crash on reviews with no name).
- `CaseStudySchema.jsx` + Privacy/Cookie/Terms pages — replaced
  `new Date()` output with fixed dates so prerendered HTML is **deterministic**
  (no diff churn / mismatched "last updated" on every build).
- `api/contact.js` — hardened: **honeypot** field, per-field **length caps**,
  and **email-format validation** before sending via Resend.

## 6. Verified CLEAN (no action needed)

- **NAP consistency** — name, address (2597 Nestlebrook Trl, Virginia Beach, VA
  23456), phone `(757) 319-5131`, "Open 24/7" identical everywhere.
- **Titles / descriptions / canonicals** — 33/33 present, unique, single,
  non-empty; canonicals self-referencing on the correct domain.
- **Images** — 0 missing `alt`.
- **Internal links** — all resolve to real routes; 0 placeholder/`href="#"`.
- **Profile/citation links** — all 10 profiles (Google, Yelp, Angi,
  HomeAdvisor, BBB, Birdeye, Nextdoor, Facebook, Instagram, LinkedIn) consistent
  across Footer, constants, and JSON-LD `sameAs`.
- **robots.txt / sitemap.xml / llms.txt** — well-formed; sitemap = exactly the
  33 public routes; admin + redirect routes correctly excluded.
- **301 redirects** — www→non-www and legacy paths configured in `vercel.json`.

---

## 7. Still requires YOU (host-side — I can't do these from GitHub)

These block the live site and the post-deploy verification:

1. **Vercel → Settings → Git → "Ignored Build Step"** — set to **Automatic**
   (currently cancelling every deploy: "Canceled by Ignored Build Step").
2. **Vercel → Settings → Environment Variables** — add:
   - `RESEND_API_KEY` — so the contact form actually sends.
   - `GOOGLE_PLACES_API_KEY` — so live Google reviews load.
   - (optional) `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL` for production sender.
3. Confirm the GA4 measurement ID once deployed.

## 8. Deferred / needs your decision (security)

- Admin login is still **mocked** (you noted you never had an admin page) —
  recommend removing the admin routes or wiring real auth before launch.
- Password-reset flow does client-side bcrypt against live Supabase RPCs;
  Supabase anon key is in source. Fine for now, revisit with real auth.

## 9. Blocked until deploy

- Semrush live SEO/AEO crawl, live link/tag firing verification, and Resend
  end-to-end test all require the site to be publicly deployed (items in §7).
  Once it's live, I'll run these and report back.
