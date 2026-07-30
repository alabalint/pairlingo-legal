# WordMatch — App Store metaadatok

Ez a dokumentum az App Store Connect kitöltéséhez tartalmaz kész szövegjavaslatokat.
Másold be a megfelelő mezőkbe App Store Connectben.

## Alapadatok

- **App neve:** WordMatch
- **Alcím (subtitle, max 30 karakter):** Szópárosító nyelvtanulás
- **Kategória:** Education (Oktatás) — másodlagos: Games / Word (opcionális)
- **Ár:** Ingyenes (javaslat; állítsd be igény szerint)

## Leírás (magyar)

```
Tanulj bármilyen nyelvpárt egyszerűen, szórakoztatva!

A WordMatch egy natív, letisztult szópárosító alkalmazás: a szavak két kevert oszlopban
jelennek meg, neked kell megtalálnod a hozzájuk tartozó párokat. A rendszer megjegyzi,
mely szavaknál hibázol gyakrabban, és külön "Tanulandó szavak" módban külön rákérdez ezekre
— így pont azt gyakorlod, amire tényleg szükséged van.

FUNKCIÓK
• Tetszőleges nyelvpár — nem csak angol-magyar, bármilyen két nyelv kombinálható
• CSV-importálás okos ütközéskezeléssel: elgépelés-javítás, duplikátumszűrés, csoportcsere
• Kézi szóhozzáadás, csoportkezelés (szerkesztés, törlés, átnevezés)
• Statisztika: napi gyakorlási sorozat, csoportonkénti pontosság
• 6 letisztult, matt színtéma
• Az app felülete 6 nyelven elérhető: magyar, angol, német, spanyol, francia, olasz
• iCloud-szinkronizáció — a szavaid automatikusan elérhetők minden eszközödön
• Nincs hirdetés, nincs nyomkövetés, nincs fiókregisztráció
• Mellékelt kész szólista: 350 szavas B2 (felső-középfokú) angol-magyar alapszókészlet

Az adataid mindig a tiéd maradnak: nincs szerver, nincs adatgyűjtés — minden a
készülékeden és a saját iCloud-fiókodban tárolódik.
```

## Description (English)

```
Learn any language pair, made simple and fun.

WordMatch is a clean, native word-matching app: words appear shuffled in two columns, and
your job is to find the matching pairs. The app remembers which words trip you up most
often and quizzes you on those separately in a dedicated "Words to review" mode — so you
practice exactly what you need.

FEATURES
• Any language pair — not limited to English-Hungarian, combine any two languages
• Smart CSV import with conflict handling: typo fixes, duplicate detection, group replace
• Manual word entry, group management (edit, delete, rename)
• Stats: daily practice streak, per-group accuracy
• 6 clean, matte color themes
• App interface available in 6 languages: Hungarian, English, German, Spanish, French, Italian
• iCloud sync — your words are automatically available on all your devices
• No ads, no tracking, no account required
• Includes a ready-made word list: a 350-word B2 (upper-intermediate) English-Hungarian set

Your data stays yours: no server, no data collection — everything lives on your device and
your own iCloud account.
```

## Kulcsszavak (keywords, max 100 karakter, vesszővel elválasztva, App Store Connect mezőben)

```
nyelvtanulás,szavak,szótanulás,memória,szópárosító,angol,vocabulary,flashcard,language,quiz
```

## Support URL

```
https://alabalint.github.io/wordmatch-legal/
```

## Marketing URL (opcionális)

```
https://alabalint.github.io/wordmatch-legal/
```

## Privacy Policy URL

```
https://alabalint.github.io/wordmatch-legal/privacy.html
```

---

## App Privacy kérdőív — útmutató

App Store Connect → App Privacy szekcióban a kérdésekre az alábbi válaszok indokoltak a
jelenlegi kódbázis alapján ([docs/ARCHITECTURE.md](https://github.com/alabalint/WordMatch/blob/main/docs/ARCHITECTURE.md)):

- **"Do you or your third-party partners collect data from this app?"** → **No** (Nem gyűjt
  adatot). Indoklás: nincs saját szerver, nincs analitika/hirdetés SDK; a CloudKit-szinkron a
  felhasználó saját privát iCloud-adatbázisába megy, amihez a fejlesztőnek nincs hozzáférése —
  ez Apple szerint nem minősül "adatgyűjtésnek" a fejlesztő oldaláról.
- Ha az űrlap mégis rákérdez a helyileg/CloudKitben tárolt tartalomra (szavak, statisztika),
  és muszáj valamit jelölni: **"Data Not Linked to You"** és **"Data Not Used to Track You"**
  jelölhető, mivel az adat nem hagyja el a felhasználó saját Apple-ökoszisztémáját, és nem
  köthető a fejlesztő által azonosítható felhasználói profilhoz.

## Korhatár-besorolás — útmutató

Az alkalmazás nem tartalmaz erőszakot, felnőtt tartalmat, szerencsejátékot, közösségi
funkciókat vagy felhasználók közötti kommunikációt. A kérdőívben minden kategóriára **"None"**
jelölhető, ami **4+** korhatár-besorolást eredményez.
