# Resolution Center válasz — Guideline 4.3(a) Spam elutasításhoz

Másold be az alábbi szöveget az App Store Connect Resolution Center üzenetmezőjébe,
amikor újra beadod az appot review-ra (a build feltöltése után).

---

```
Thank you for the review. I'd like to provide some context and describe the changes
I've made in response to this feedback.

PairLingo is an independently developed app with an original, custom-written codebase
(SwiftUI + SwiftData + CloudKit). It was not built from a purchased template, and I have
not submitted any other similar apps to the App Store under this or any other developer
account.

I understand the app's original concept (a word-matching vocabulary game) is a common
category, which may have triggered an automated similarity match. To make the app's
distinct value clearer, I've made the following changes in this build:

1. Replaced the app icon with an original design — the previous icon used a generic
   stock-style illustration that may have resembled marketplace icon templates commonly
   used by repackaged apps. The new icon is a custom monogram design unique to PairLingo.

2. Revised the App Store description to clearly highlight what differentiates PairLingo
   from typical flashcard/vocabulary apps:
   - Support for genuinely arbitrary language pairs (not limited to a fixed set),
     including free-form language names via CSV import
   - A CSV import pipeline with conflict resolution: detecting likely typo-corrections,
     warning about near-duplicate group names, and letting the user resolve conflicts
     row by row (update vs. add as new)
   - No backend server of any kind — sync is handled entirely through the user's own
     private CloudKit database, so I as the developer have no technical access to any
     user's data
   - A fully localized interface (not just content) in 6 languages, switchable at runtime

I'm happy to provide the source code or answer any further questions to help confirm
this is an original submission. Thank you for your time.
```

---

## Megjegyzés

A review-válasz mezőben (App Store Connect → App → a konkrét build/verzió →
"App Review" szekció alatti üzenetváltás, vagy a Resolution Center) tudod beilleszteni.
Ha ismét belefutnál ugyanebbe az elutasításba emiatt, a lenti lépéseket érdemes
megfontolni:

- Ellenőrizd, hogy a "PairLingo" név és az app store leírás stílusa nem emlékeztet-e
  túlságosan egy már létező, hasonló nevű appra (böngéssz rá az App Store-ban).
- Ha az automatikus jegyzet nem old meg semmit, kérj emberi felülvizsgálatot az
  App Review Board-on keresztül (App Store Connect → Resolution Center →
  "Request a Review" / fellebbezési opció).
