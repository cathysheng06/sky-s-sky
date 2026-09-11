(function () {
  var pageWork = document.getElementById("page-work");
  var pageLife = document.getElementById("page-life");
  function locate(id) {
    if (id === "life") return "life";
    if (id === "work") return "work";
    var el = document.getElementById(id);
    if (!el) return null;
    if (pageLife.contains(el)) return "life";
    if (pageWork.contains(el)) return "work";
    return null;
  }
  function go(id, updateHash) {
    var where = locate(id);
    if (where) {
      pageLife.hidden = where !== "life";
      pageWork.hidden = where !== "work";
    }
    var target = document.getElementById(id === "life" ? "writing" : id);
    if (target) { target.scrollIntoView({ block: "start" }); }
    else { window.scrollTo(0, 0); }
    if (updateHash !== false) { history.replaceState(null, "", "#" + id); }
  }
  document.addEventListener("click", function (e) {
    var a = e.target.closest('a[href^="#"]');
    if (!a) return;
    var id = a.getAttribute("href").slice(1);
    if (!id) return;
    e.preventDefault();
    go(id);
  });
  go(location.hash.replace("#", "") || "work", false);
})();
