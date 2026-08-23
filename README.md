# Temperament

**The Nature of Western Music Theory.** Music theory you can see and hear.

A hands-on music-theory companion for serious young musicians, built on a piano
keyboard, on the phone they already carry. Nine sections: the circle of fifths,
keys and chords, the modes, ear training, a seven-lesson jazz course, the
mathematics of the overtone series and temperament, a history of Western music
theory, a ninety-six question quiz bank, and an about page.

Free to explore in any browser. A one-time $19 individual license unlocks the
rest of the Jazz sequence, the Chord Quality ear-training lesson, and the full
Quiz, and turns the app into an installable, offline-capable PWA. Studio,
Department, and Institution licenses are available for programs and schools;
see `pricing.html`.

**Live site:** https://temperament.currancrafts.com

---

## What's in this folder

Five files, all meant to sit at the root of the `CurranCrafts/Temperament`
repository, replacing what's there now:

- `index.html` — the app itself. Includes the updated About panel (a
  scannable features list replaces the old one-paragraph "how to use it")
  and a footer linking to the four pages below.
- `pricing.html` — the four license tiers.
- `terms.html` — Terms and Conditions, including the required Paddle
  Merchant-of-Record disclosure.
- `privacy.html` — Privacy Policy.
- `refund.html` — Refund Policy.

These five pages are what Paddle's domain review expects to find: a clear
product description, pricing, and the three legal documents, all reachable
from navigation. The checkout button on `pricing.html` currently points to a
`mailto:` link as an interim measure; it gets wired to real Paddle checkout
once the licensing Worker is built.

## Publishing an update

The site is served from whatever sits at the root of this repository, so the
interactive app must be named exactly `index.html`. To publish:

1. In the Cortex vault, the current master of the app is
   `Vault/10_projects/Nature's Signal/temperament.html`. This `_publish`
   folder's `index.html` should always be a copy of that master (with the
   About panel and footer changes noted above).
2. On GitHub, open the `CurranCrafts/Temperament` repository, choose **Add
   file → Upload files**, and drag in all five files from this folder at
   once. GitHub's uploader accepts multiple files in a single commit and
   replaces any file with a matching name, so this one step updates the app
   and adds the four new pages together.
3. Commit the changes. Pages redeploys in about a minute.

Do not upload a `.zip`. GitHub stores it as a zip file and never unpacks it,
so nothing is replaced and the site does not change.

---

Created by Matthew Curran with the use of Artificial Intelligence.
Temperament is a Curran Crafts product. Made in New York.
