# PairLingo — App Store metaadatok

Ez a dokumentum az App Store Connect kitöltéséhez tartalmaz kész szövegjavaslatokat.
Másold be a megfelelő mezőkbe App Store Connectben.

## Alapadatok

- **App neve:** PairLingo
- **Alcím (subtitle, max 30 karakter):**
  - magyar: `Bármilyen nyelvpár tanulása`
  - angol: `Any Language Pair, Your Words`
- **Kategória:** Education (Oktatás) — másodlagos: Games / Word (opcionális)
- **Ár:** Ingyenes (javaslat; állítsd be igény szerint)

## Leírás (magyar)

```
A PairLingo nem egy sablon szókártya-app — bármilyen nyelvpárt megtanulhatsz vele,
a saját tempódban, a saját szavaiddal.

Amiben tényleg más, mint a hasonló appok:

🌍 VALÓBAN TETSZŐLEGES NYELVPÁR
Nem csak angol-magyar. Bármelyik két nyelvet kombinálhatod — spanyol-japán, német-orosz,
vagy bármi mást, amit tanulsz. 24 nyelv közül választhatsz kézi szóhozzáadásnál, de a
CSV-importnál gyakorlatilag korlátlan a lehetőség.

📥 OKOS CSV-IMPORT, NEM CSAK "FELTÖLTÉS"
A legtöbb hasonló app egyszerűen beolvassa a fájlt. A PairLingo felismeri, ha egy szó
fordítása megváltozott (elgépelés-javítás), figyelmeztet a hasonló nevű duplikált
csoportokra, és soronként rád bízza, mit tegyen az ütköző szavakkal — frissítsen, vagy
vegye fel újként.

🔒 IGAZI ADATVÉDELEM, NEM CSAK ÍGÉRET
Nincs backend szerver. Nincs fiókregisztráció. Nincs hirdetés, nincs nyomkövető kód.
A szavaid a saját iCloud-fiókodban szinkronizálódnak a te eszközeid között — a
fejlesztőnek fizikai lehetősége sincs hozzáférni az adataidhoz.

🎯 CÉLZOTT ISMÉTLÉS
A rendszer megjegyzi, mely szavaknál hibázol gyakrabban, és külön "Tanulandó szavak"
módban rákérdez ezekre — pont azt gyakorlod, amire tényleg szükséged van.

🌐 VALÓDI TÖBBNYELVŰ FELÜLET
Nemcsak a tananyag, maga az alkalmazás kezelőfelülete is 6 nyelven érhető el (magyar,
angol, német, spanyol, francia, olasz) — azonnal váltható, újraindítás nélkül.

TOVÁBBI FUNKCIÓK
• Kézi szóhozzáadás, csoportkezelés (szerkesztés, törlés, átnevezés, összevonás)
• Statisztika: napi gyakorlási sorozat, csoportonkénti pontosság
• 6 letisztult, matt színtéma
• Beépített súgó
• Mellékelt kész szólista: 350 szavas B2 (felső-középfokú) angol-magyar alapszókészlet

A PairLingo-t egy fejlesztő írta, egyedi kódbázissal — nem sablonból vásárolt appról van szó.
```

## Description (English)

```
PairLingo isn't a template flashcard app — it's built to learn any language pair, at
your own pace, with your own words.

What actually sets it apart:

🌍 TRULY ANY LANGUAGE PAIR
Not just English-Hungarian. Combine any two languages — Spanish-Japanese, German-Russian,
whatever you're learning. Pick from 24 curated languages for manual entry, or import a CSV
for virtually unlimited language combinations.

📥 SMART CSV IMPORT, NOT JUST "UPLOAD"
Most similar apps just read the file. PairLingo detects when a word's translation changed
(typo fix), warns you about accidentally-duplicated groups with similar names, and lets you
decide row by row how to resolve conflicts — update the existing word, or add it as new.

🔒 REAL PRIVACY, NOT JUST A PROMISE
No backend server. No account required. No ads, no tracking code. Your words sync across
your own devices through your own iCloud account — the developer has no technical way to
access your data, even if they wanted to.

🎯 TARGETED REVIEW
The app remembers which words trip you up most often and quizzes you on those separately
in a dedicated "Words to review" mode — so you practice exactly what you need.

🌐 A GENUINELY MULTILINGUAL INTERFACE
Not just the content — the app's own interface is available in 6 languages (English,
Hungarian, German, Spanish, French, Italian), switchable instantly with no relaunch.

MORE FEATURES
• Manual word entry, group management (edit, delete, rename, merge)
• Stats: daily practice streak, per-group accuracy
• 6 clean, matte color themes
• Built-in help
• Includes a ready-made word list: a 350-word B2 (upper-intermediate) English-Hungarian set

PairLingo is built by an independent developer with an original codebase — not a
purchased template.
```

## Kulcsszavak (keywords, max 100 karakter, vesszővel elválasztva, App Store Connect mezőben)

```
nyelvtanulás,szótanulás,nyelvpár,memória,szópárosító,vocabulary,language pair,csv import,quiz
```

## Support URL

```
https://pairlingo.hu/support.html
```

## Marketing URL (opcionális)

```
https://pairlingo.hu/
```

## Privacy Policy URL

```
https://pairlingo.hu/privacy.html
```

Megjegyzés: a fenti egyedi domain (`pairlingo.hu`) a GitHub Pages `CNAME` fájlon keresztül van
beállítva — amíg a DNS-rekordok nincsenek beállítva/nem terjedtek el, a
`https://alabalint.github.io/pairlingo-legal/` cím is működik ideiglenes alternatívaként.

---

## App Privacy kérdőív — útmutató

App Store Connect → App Privacy szekcióban a kérdésekre az alábbi válaszok indokoltak a
jelenlegi kódbázis alapján ([docs/ARCHITECTURE.md](https://github.com/alabalint/PairLingo/blob/main/docs/ARCHITECTURE.md)):

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
