(function () {
  var STORAGE_KEY = "pairlingo-site-lang";

  function detectDefault() {
    var stored = null;
    try { stored = localStorage.getItem(STORAGE_KEY); } catch (e) {}
    if (stored === "hu" || stored === "en") return stored;
    return (navigator.language || "en").toLowerCase().indexOf("hu") === 0 ? "hu" : "en";
  }

  function applyLang(lang) {
    document.documentElement.setAttribute("lang", lang);
    document.querySelectorAll(".lang-switch button").forEach(function (btn) {
      btn.classList.toggle("active", btn.getAttribute("data-set-lang") === lang);
    });
    document.querySelectorAll("[data-lang]").forEach(function (el) {
      el.classList.toggle("lang-hidden", el.getAttribute("data-lang") !== lang);
    });
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
  }

  applyLang(detectDefault());

  document.addEventListener("click", function (event) {
    var btn = event.target.closest("[data-set-lang]");
    if (!btn) return;
    applyLang(btn.getAttribute("data-set-lang"));
  });
})();
