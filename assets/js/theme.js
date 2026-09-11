(function () {
  var root = document.documentElement;
  var KEY = "cs-theme";
  var btn = document.getElementById("tt");
  function stored() { try { return localStorage.getItem(KEY); } catch (e) { return null; } }
  function apply(t) {
    if (t === "dark" || t === "light") { root.setAttribute("data-theme", t); }
    else { root.removeAttribute("data-theme"); }
    try { t ? localStorage.setItem(KEY, t) : localStorage.removeItem(KEY); } catch (e) {}
  }
  var s = stored();
  if (s) apply(s);
  btn.addEventListener("click", function () {
    var attr = root.getAttribute("data-theme");
    var isDark = attr === "dark" || (!attr && window.matchMedia("(prefers-color-scheme: dark)").matches);
    apply(isDark ? "light" : "dark");
  });
})();
