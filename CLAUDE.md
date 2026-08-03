# Art-is-Tree LLC — Working Rules

This is a live business. The site and the ad account bring in real leads that pay
real bills. A change that "looks cleaner" but costs a ranking costs money.

---

## 1. The word "audit" means STOP AND READ

When the owner says **audit**, **review**, **check**, **go over**, or **look at**,
that is a **read-only instruction**. It is not permission to change anything.

An audit is:

1. **Slow down.** There is no time pressure. There has never been time pressure.
2. **Read every single line.** Not a grep, not a sample, not the first three
   matches. The actual file, top to bottom.
3. **Use logical reasoning.** Ask *why is this here?* before asking *should this
   change?* Assume the thing you are looking at was put there on purpose by
   someone who knew more about this business than you do.
4. **Report findings. Change nothing.** Present what you found and wait.

An audit is **not**:

- A license to "fix while I'm in here"
- A batch of edits followed by a summary
- Anything that ends in a commit

**If you are auditing and you find something you want to change, write it down
and ask.** The answer is frequently "no, that's deliberate."

---

## 2. Never fill a gap with an assumption

If you do not know something, you do not know it. Say so.

Do not reason backwards from a conclusion to invent the evidence for it. Do not
describe a system's behavior you have not observed. Do not report a status you
have not verified. Do not treat "I would have done it this way" as evidence for
"this is why it was done."

Real failures from this project, all from filling gaps:

- Told the owner to raise the LSA budget. Budget was 4.8% utilized. LSA is
  lead-supply limited, not budget limited.
- Blamed junk search terms on Performance Max. The search terms report contained
  zero PMax rows.
- Said the GBP/LSA link was unresolved after reading 5 emails out of 12. It had
  been resolved days earlier — and that fix was what took LSA from 3 conversions
  in 21 days to 14 in 9.
- Recommended blocking `crepe myrtle` and `bush removal` as negative keywords.
  Both are services this company actively sells and bids on.
- Assumed recent changes were the established baseline. Some of what looked
  "wrong" was work the owner had done days before, on purpose.

**The Google Ads change-history API only returns the current day.** You cannot
tell new from established through it. Ask.

---

## 3. Meta descriptions and titles are AEO, not filler

The long, entity-dense meta descriptions on the case studies and service pages
are **deliberate**. They are built for local SEO and Answer Engine Optimization.
Neighborhood names, regulatory citations, and the brand give answer engines
specific, attributable entities to pull.

**Never trim a title or description to hit a character count.** Google truncates
the *display*; it still indexes the whole string. A 190-character description
that contains `Great Neck`, `Broad Bay Island`, `co-dominant union`, and
`Art-is-Tree LLC` outperforms a tidy 155-character one that contains none of them.

Words that must never be removed to "make it fit":

| Category | Examples |
|---|---|
| Brand | `Art-is-Tree`, `Art-is-Tree LLC` |
| Neighborhoods | `Great Neck`, `Broad Bay Island`, `Kempsville` |
| Cities served | `Virginia Beach`, `Norfolk`, `Chesapeake`, `Portsmouth`, `Hampton Roads` |
| Seasonal / local | `Hurricane`, `storm damage`, `24/7` |
| Trust signals | `Licensed`, `insured`, `BBB A+`, `5-Star`, `Free estimates` |
| Regulatory terms | `minimum approach distances`, `ANSI Z133`, `ANSI A300`, `CBPA`, `RPA buffer` |
| Arboriculture terms | `co-dominant union`, `spikeless pruning`, `emerald ash borer` |

`Free estimates` is the phrase people search. Not `Free quotes`.

Because brand names, neighborhoods, and technical terms naturally sit at the
**end** of a sentence, any edit that shortens from the end deletes exactly the
words worth keeping. This has already happened once — commit `a8ff1f4`, reverted
in `52e05e9`, 14 keyword losses across 14 files.

---

## 4. Show the work before it ships

"Let me review before posting" covers **every** part of the change, not the part
that is convenient to paste in chat.

In `a8ff1f4` the titles were shown and approved. The 17 rewritten descriptions
went to production unseen. That is the whole reason that commit had to be
reverted.

If a change touches titles **and** descriptions, show both. If it touches 14
files, show 14 files.

---

## 5. Deploy procedure

Develop on the feature branch. Deploy by cherry-pick — never merge, never push
the branch to `main`:

```sh
git fetch origin main -q
git checkout -B deploy-tmp origin/main
git cherry-pick <SHA>
git push origin HEAD:main
git checkout <feature-branch>
git branch -D deploy-tmp
git diff --stat origin/main..HEAD   # must be empty
```

Always `npm run build` and confirm the strings you changed appear in `dist/`
before committing. `scripts/check-prerender.mjs` runs post-build and must pass.

**HTML entity trap:** raw JSX source contains `&amp;` where the rendered page has
`&`. Any length or content check must run `html.unescape()` first, or `&` counts
as 5 characters and every audit result is wrong.

---

## 6. Google Ads API — destructive semantics

These are not theoretical. Each one has already caused damage on this account.

- **`campaign_update.targeting` REPLACES the whole object.** Send `languages`,
  `negative_keywords`, and `location_details` together every time, or the omitted
  ones are wiped.
- **`campaign_update.extensions` REPLACES the whole object.** Send `calls`,
  `images`, and `lead_forms` together every time. Sending only `lead_forms` once
  dropped the call extension and 20 image assets from a live campaign.
- **`add_keywords` / `remove_keywords` are safe.** They append and remove without
  touching targeting. Prefer them.
- **Google Ads cannot edit an ad in place.** Any edit removes and recreates it.
  The new ad comes back **PAUSED**, with a new ID and zero performance history.
  Re-enable explicitly with `platform_settings: {status: "ENABLED"}` and expect
  the learning period to restart.
- **Negative keywords do not match apostrophes, plurals, or close variants.**
  `mike's tree service` [EXACT] does not block `mikes tree service`.
- Every negative added should be balanced with positives. Google rewards a
  campaign that adds intent, not one that only subtracts.

---

## 7. Secrets

- Never write an API key, token, or credential into a file in this repo.
- `CRM_ACCESS_TOKEN` / `VITE_CRM_ACCESS_TOKEN` live in Vercel env vars only.
  Keep it that way.
- Never print a secret into chat. Name the variable and where it lives.
- Never handle the owner's Google account password. That account controls ad
  spend, Gmail, and the Business Profile.
- If a key appears in conversation, flag it as exposed and recommend rotation.

---

## 8. Stack facts

- React 18 + Vite + `vite-react-ssg`, prerendering ~40 routes
- `<Head>` from `vite-react-ssg`; page meta via the `LocalSEOMeta` component
- GA4 via **gtag.js loaded directly — not GTM**. Measurement ID `G-TLDWNQZZ81`
- Consent Mode v2, opt-out model
- Deployed on Vercel from `main`
- Review count lives in `src/constants/seoMetadata.js` and is mirrored in
  `src/hooks/useReviewStats.js`, `FAQPage.jsx`,
  `case-studies/ChooseTreeServiceCaseStudy.jsx`, and `public/llms.txt`.
  Update all of them together.
