# Temperament

**The Nature of Music.** Music theory you can see and hear.

A hands-on music-theory companion for serious young musicians, built on a piano
keyboard, on the phone they already carry. Nine sections: the circle of fifths,
keys and chords, the modes, ear training, an eleven-lesson jazz course, the
mathematics of the overtone series and temperament, a history of Western music
theory, a 122-question quiz bank, and an about page.

Free to explore in any browser. A one-time $29 individual license unlocks
Jazz lessons 4–11, unlimited Ear Training Challenge rounds, and the rest of
the Quiz, and turns the app into an installable, offline-capable PWA. Studio, Department, and Institution licenses are
available for programs and schools; see `pricing.html`. A classroom license
is delivered as a single access link (`#access=CODE`) that activates every
device it is opened on; the card that handles it lives in `index.html`.

**Live site:** https://temperament.currancrafts.com

---

## What's in this folder

Ten files, all meant to sit at the root of the `CurranCrafts/Temperament`
repository, replacing what's there now (the `.bak` copies beside them are
local backups and are never published):

- `index.html` — the app itself.
- `pricing.html` — the four license tiers. Individual ($29) checks out
  through Lemon Squeezy and is live with real money. Studio, Department,
  and Institution are `mailto:` links until their Lemon Squeezy products
  exist (Paddle is no longer used anywhere in this project).
- `terms.html` — Terms and Conditions, naming Lemon Squeezy as Merchant of
  Record.
- `privacy.html` — Privacy Policy.
- `refund.html` — Refund Policy.
- `manifest.webmanifest`, `sw.js` — PWA install + offline support. The
  worker is network-first with a cache fallback, so a deploy reaches
  online users without a cache-version bump.
- `apple-touch-icon.png`, `icon-192.png`, `icon-512.png` — PWA icons.

## Publishing an update

The site is served from whatever sits at the root of this repository, so the
interactive app must be named exactly `index.html`. To publish:

1. In the Cortex vault, the current master of the app is
   `Vault/10_projects/Nature's Signal/temperament.html`. This `_publish`
   folder's `index.html` should always be a byte-identical copy of that
   master.
2. Copy the changed files from this folder into the local clone at
   `~/Documents/GitHub/Temperament`, then commit and push with GitHub
   Desktop. (GitHub's web uploader — Add file → Upload files, dragging in
   the changed files at once — is the fallback when the local clone isn't
   reachable.)
3. Pages redeploys in about a minute.

Do not upload a `.zip`. GitHub stores it as a zip file and never unpacks it,
so nothing is replaced and the site does not change.

**Not part of this folder, and never belongs in the `Temperament` repo:**
`src/index.js` is the Cloudflare licensing Worker's source
(`_work/temperament-licensing-worker/` in this project folder) — a separate
service deployed with `npx wrangler deploy`, not a website file. If it ever
ends up in the GitHub repo clone, it's inert there (GitHub Pages just serves
it as an unused static file) but it doesn't belong and isn't part of this
publish set.

---

Created by Matthew Curran with the use of Artificial Intelligence.
Temperament is a Curran Crafts product. Made in New York.
