// Lists the CSV files in the dedicated, public pairlingo-wordlists repo's
// word-lists/ folder, using GitHub's public, read-only Contents API — no
// auth, no token, no server of ours involved. This is a separate repo from
// the (private) PairLingo app source, specifically so this page can work for
// anonymous visitors: the private repo's API/upload URLs 404 for anyone
// without access, which a public repo doesn't. Renders everything via
// textContent/DOM APIs (never innerHTML with API-derived strings), so
// nothing the API returns can inject markup into this page.
(function () {
  var API_URL = "https://api.github.com/repos/alabalint/pairlingo-wordlists/contents/word-lists";
  var BROWSE_URL = "https://github.com/alabalint/pairlingo-wordlists/tree/main/word-lists";

  var statusEl = document.getElementById("wordlist-status");
  var groupsEl = document.getElementById("wordlist-groups");

  // The same 24 curated languages PairLingo itself offers (see
  // Sources/PairLingo/Models/SupportedLanguage.swift) — used to spot a
  // language pair in a filename and to show its name in both site languages.
  // "chinese"/"mandarin" are both accepted as filename tokens for the same
  // language.
  var LANGUAGE_NAMES = {
    english: { en: "English", hu: "Angol" },
    spanish: { en: "Spanish", hu: "Spanyol" },
    chinese: { en: "Chinese (Mandarin)", hu: "Kínai (mandarin)" },
    mandarin: { en: "Chinese (Mandarin)", hu: "Kínai (mandarin)" },
    hindi: { en: "Hindi", hu: "Hindi" },
    french: { en: "French", hu: "Francia" },
    arabic: { en: "Arabic", hu: "Arab" },
    portuguese: { en: "Portuguese", hu: "Portugál" },
    russian: { en: "Russian", hu: "Orosz" },
    german: { en: "German", hu: "Német" },
    japanese: { en: "Japanese", hu: "Japán" },
    korean: { en: "Korean", hu: "Koreai" },
    italian: { en: "Italian", hu: "Olasz" },
    turkish: { en: "Turkish", hu: "Török" },
    vietnamese: { en: "Vietnamese", hu: "Vietnámi" },
    polish: { en: "Polish", hu: "Lengyel" },
    dutch: { en: "Dutch", hu: "Holland" },
    ukrainian: { en: "Ukrainian", hu: "Ukrán" },
    romanian: { en: "Romanian", hu: "Román" },
    swedish: { en: "Swedish", hu: "Svéd" },
    greek: { en: "Greek", hu: "Görög" },
    czech: { en: "Czech", hu: "Cseh" },
    hungarian: { en: "Hungarian", hu: "Magyar" },
    hebrew: { en: "Hebrew", hu: "Héber" },
    thai: { en: "Thai", hu: "Thai" }
  };

  // lang.js sets <html lang="hu|en"> synchronously on page load and re-runs
  // its own [data-lang] toggling on every future language-switch click (it
  // re-queries the live DOM each time, so it will find elements we add here
  // too) — but that initial pass already happened before this fetch
  // resolved, so newly-created bilingual pairs need their own first pass.
  function currentLang() {
    return document.documentElement.getAttribute("lang") === "hu" ? "hu" : "en";
  }

  function makeBilingualSpan(lang, text) {
    var span = document.createElement("span");
    span.setAttribute("data-lang", lang);
    if (lang !== currentLang()) span.classList.add("lang-hidden");
    if (text) span.textContent = text;
    return span;
  }

  function setStatus(hu, en) {
    statusEl.innerHTML = "";
    statusEl.appendChild(makeBilingualSpan("hu", hu));
    statusEl.appendChild(makeBilingualSpan("en", en));
  }

  function formatSize(bytes) {
    if (bytes < 1024) return bytes + " B";
    return Math.round(bytes / 1024) + " KB";
  }

  // Suggested filename pattern is "{level-or-topic}_{language1}_{language2}.csv"
  // (see the pairlingo-wordlists README) — but the topic prefix, case and any
  // trailing suffix (e.g. "..._500_extra.csv") vary, so instead of assuming a
  // fixed position, this just looks for exactly two recognized language names
  // anywhere among the "_"/"-"-separated tokens. A file that doesn't yield
  // exactly two falls into the "Other" group rather than being mis-grouped.
  function languagePairOf(filename) {
    var base = filename.replace(/\.csv$/i, "");
    var tokens = base.toLowerCase().split(/[^a-z]+/).filter(Boolean);
    var seenCanonical = {};
    var matched = [];
    tokens.forEach(function (token) {
      var info = LANGUAGE_NAMES[token];
      if (info && !seenCanonical[info.en]) {
        seenCanonical[info.en] = true;
        matched.push(info);
      }
    });
    return matched.length === 2 ? matched : null;
  }

  // Groups by language pair, keyed on a language-neutral (English-name)
  // order so the same pair always collapses into one group regardless of
  // which language happens to come first in a given filename. The *display*
  // order within each heading is resolved separately per site language in
  // `groupHeadingText`, since alphabetical order in English and Hungarian
  // doesn't always agree (e.g. "Chinese"/"Kínai" vs "Dutch"/"Holland").
  function groupFiles(files) {
    var byKey = {};
    var other = [];
    files.forEach(function (file) {
      var pair = languagePairOf(file.name);
      if (!pair) {
        other.push(file);
        return;
      }
      var ordered = pair.slice().sort(function (a, b) { return a.en.localeCompare(b.en); });
      var key = ordered[0].en + "|" + ordered[1].en;
      if (!byKey[key]) byKey[key] = { langs: pair, files: [] };
      byKey[key].files.push(file);
    });

    var groups = Object.keys(byKey).sort().map(function (key) { return byKey[key]; });
    groups.forEach(function (group) {
      group.files.sort(function (a, b) { return a.name.localeCompare(b.name); });
    });
    other.sort(function (a, b) { return a.name.localeCompare(b.name); });
    return { groups: groups, other: other };
  }

  function groupHeadingText(langs, lang) {
    var ordered = langs.slice().sort(function (a, b) { return a[lang].localeCompare(b[lang], lang); });
    return ordered[0][lang] + " ↔ " + ordered[1][lang];
  }

  // A <details>/<summary> párost használja a nyitás/csukásra — ingyen ad
  // billentyűzet- és képernyőolvasó-támogatást, JS-állapot nélkül; alapból
  // csukva van (nincs `open` attribútum), a felhasználó koppintására nyílik.
  function makeGroupSection(langs, files) {
    var details = document.createElement("details");
    details.className = "wordlist-group";

    var summary = document.createElement("summary");
    summary.className = "wordlist-group-heading";

    var label = document.createElement("span");
    label.className = "wordlist-group-label";
    if (langs) {
      label.appendChild(makeBilingualSpan("hu", groupHeadingText(langs, "hu")));
      label.appendChild(makeBilingualSpan("en", groupHeadingText(langs, "en")));
    } else {
      label.appendChild(makeBilingualSpan("hu", "Egyéb"));
      label.appendChild(makeBilingualSpan("en", "Other"));
    }
    summary.appendChild(label);

    var chevron = document.createElement("span");
    chevron.className = "wordlist-group-chevron";
    chevron.setAttribute("aria-hidden", "true");
    summary.appendChild(chevron);

    details.appendChild(summary);
    details.appendChild(makeTable(files));
    return details;
  }

  function makeTable(files) {
    var table = document.createElement("table");
    table.className = "wordlist-table";
    var tbody = document.createElement("tbody");

    files.forEach(function (file) {
      var row = document.createElement("tr");

      var nameCell = document.createElement("td");
      var link = document.createElement("a");
      link.className = "wl-download";
      link.href = file.download_url;
      link.setAttribute("download", file.name);
      link.textContent = file.name;
      nameCell.appendChild(link);

      var sizeCell = document.createElement("td");
      sizeCell.className = "wl-size";
      sizeCell.textContent = formatSize(file.size);

      row.appendChild(nameCell);
      row.appendChild(sizeCell);
      tbody.appendChild(row);
    });

    table.appendChild(tbody);
    return table;
  }

  function renderGroups(files) {
    groupsEl.innerHTML = "";
    var grouped = groupFiles(files);

    grouped.groups.forEach(function (group) {
      groupsEl.appendChild(makeGroupSection(group.langs, group.files));
    });

    if (grouped.other.length > 0) {
      groupsEl.appendChild(makeGroupSection(null, grouped.other));
    }
  }

  fetch(API_URL, { headers: { Accept: "application/vnd.github+json" } })
    .then(function (res) {
      if (!res.ok) throw new Error("GitHub API " + res.status);
      return res.json();
    })
    .then(function (entries) {
      var files = (Array.isArray(entries) ? entries : [])
        .filter(function (e) {
          return e && e.type === "file" && typeof e.name === "string" && /\.csv$/i.test(e.name);
        });

      if (files.length === 0) {
        setStatus(
          "Egyelőre nincs megosztott szókészlet.",
          "No shared word lists yet."
        );
        return;
      }

      renderGroups(files);
      statusEl.textContent = "";
    })
    .catch(function () {
      statusEl.innerHTML = "";

      var huSpan = makeBilingualSpan("hu");
      huSpan.appendChild(document.createTextNode("A lista most nem tölthető be. "));
      var huLink = document.createElement("a");
      huLink.href = BROWSE_URL;
      huLink.target = "_blank";
      huLink.rel = "noopener";
      huLink.textContent = "Böngészd a mappát a GitHubon.";
      huSpan.appendChild(huLink);

      var enSpan = makeBilingualSpan("en");
      enSpan.appendChild(document.createTextNode("Couldn't load the list right now. "));
      var enLink = document.createElement("a");
      enLink.href = BROWSE_URL;
      enLink.target = "_blank";
      enLink.rel = "noopener";
      enLink.textContent = "Browse the folder on GitHub.";
      enSpan.appendChild(enLink);

      statusEl.appendChild(huSpan);
      statusEl.appendChild(enSpan);
    });
})();
