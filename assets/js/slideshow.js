(function () {
  var img = document.getElementById("sights-img");
  var cap = document.getElementById("sights-cap");
  var count = document.getElementById("sights-count");
  var stage = document.getElementById("sights-stage");
  var prevBtn = document.getElementById("sights-prev");
  var nextBtn = document.getElementById("sights-next");
  var slides = [];
  var i = 0;

  function render() {
    var s = slides[i];
    if (!s) return;
    img.src = s.src;
    img.alt = s.cap;
    cap.textContent = s.cap;
    count.textContent = (i + 1) + " / " + slides.length;
  }
  function go(delta) {
    if (!slides.length) return;
    i = (i + delta + slides.length) % slides.length;
    render();
  }
  if (stage) stage.addEventListener("click", function () { go(1); });
  if (nextBtn) nextBtn.addEventListener("click", function (e) { e.stopPropagation(); go(1); });
  if (prevBtn) prevBtn.addEventListener("click", function (e) { e.stopPropagation(); go(-1); });

  fetch("data/slides.json")
    .then(function (r) { return r.json(); })
    .then(function (data) { slides = data; render(); })
    .catch(function () { /* keep the static first-slide markup already in the page */ });
})();
