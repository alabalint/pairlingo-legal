# PairLingo — weboldal & App Store dokumentumok

Ez a nyilvános repó a [PairLingo](https://github.com/alabalint/PairLingo) iOS alkalmazás
marketing weboldalát, valamint az App Store-beadásához szükséges publikus dokumentumokat
tartalmazza:

- [`index.html`](index.html) — a marketing landing page (funkciók, képernyőképek), kétnyelvű
  (magyar/angol, jobb felül váltható) — App Store Connect "Marketing URL"
- [`support.html`](support.html) — támogatási / kapcsolat oldal, GYIK (App Store Connect
  "Support URL")
- [`privacy.html`](privacy.html) — adatvédelmi szabályzat, magyar és angol nyelven
  (App Store Connect "Privacy Policy URL")
- [`assets/`](assets) — közös design rendszer (`style.css`), nyelvváltó szkript (`lang.js`),
  app ikon
- [`app-store-metadata.md`](app-store-metadata.md) — App Store leírás, kulcsszavak, valamint
  útmutató az App Privacy és korhatár-besorolási kérdőívekhez
- [`screenshots/`](screenshots) — App Store / weboldal screenshotok

A három HTML oldal (`index.html`, `support.html`, `privacy.html`) egységes design-rendszert
használ (`assets/style.css`), és mindegyik a jobb felső sarokban lévő HU/EN gombbal váltható
nyelvre — a választás `localStorage`-ban megjegyződik.

## GitHub Pages

A repó GitHub Pages-en keresztül publikus URL-en érhető el, miután a Pages be van kapcsolva
(Settings → Pages → Source: `main` branch, `/` root).
