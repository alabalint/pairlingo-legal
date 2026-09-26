// Lists the CSV files in the PairLingo repo's custom-word-lists/ folder, using
// GitHub's public, read-only Contents API — no auth, no token, no server of
// ours involved. Renders everything via textContent/DOM APIs (never
// innerHTML with API-derived strings), so nothing the API returns can inject
// markup into this page.
(function () {
  var API_URL = "https://api.github.com/repos/alabalint/PairLingo/contents/custom-word-lists";
  var BROWSE_URL = "https://github.com/alabalint/PairLingo/tree/main/custom-word-lists";

  var statusEl = document.getElementById("wordlist-status");
  var tableEl = document.getElementById("wordlist-table");

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

  function renderList(files) {
    tableEl.innerHTML = "";
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
      tableEl.appendChild(row);
    });
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
        })
        .sort(function (a, b) { return a.name.localeCompare(b.name); });

      if (files.length === 0) {
        setStatus(
          "Egyelőre nincs megosztott szókészlet.",
          "No shared word lists yet."
        );
        return;
      }

      renderList(files);
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
