(function () {
  var grid = document.getElementById("gallery");
  if (grid && !grid.children.length) {
    var html = "";
    for (var n = 1; n <= 36; n += 1) {
      var num = (n < 10 ? "0" : "") + n;
      var file = "public/images/portfolio/" + num + ".png";
      html +=
        '<button type="button" class="portfolio-page__item" data-gallery-index="' +
        (n - 1) +
        '" data-full="' +
        file +
        '" aria-label="Atidaryti nuotrauką ' +
        n +
        '"><img src="' +
        file +
        '" alt="Portfolio nuotrauka ' +
        n +
        '" width="288" height="368" loading="lazy"></button>';
    }
    grid.innerHTML = html;
  }

  var items = Array.prototype.slice.call(document.querySelectorAll("[data-gallery-index]"));
  var lightbox = document.getElementById("lightbox");
  if (!items.length || !lightbox) return;

  var imageEl = lightbox.querySelector(".lightbox__image");
  var counterEl = lightbox.querySelector(".lightbox__counter");
  var prevBtn = lightbox.querySelector(".lightbox__nav--prev");
  var nextBtn = lightbox.querySelector(".lightbox__nav--next");
  var closeBtn = lightbox.querySelector(".lightbox__close");
  var images = items.map(function (item) {
    return item.getAttribute("data-full");
  });
  var index = 0;

  function render() {
    imageEl.src = images[index];
    counterEl.textContent = index + 1 + " / " + images.length;
  }

  function open(i) {
    index = i;
    render();
    lightbox.classList.add("is-open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
  }

  function close() {
    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
  }

  function next() {
    index = (index + 1) % images.length;
    render();
  }

  function prev() {
    index = (index - 1 + images.length) % images.length;
    render();
  }

  items.forEach(function (item) {
    item.addEventListener("click", function () {
      open(parseInt(item.getAttribute("data-gallery-index"), 10) || 0);
    });
  });

  prevBtn.addEventListener("click", prev);
  nextBtn.addEventListener("click", next);
  closeBtn.addEventListener("click", close);
  lightbox.addEventListener("click", function (e) {
    if (e.target === lightbox) close();
  });

  document.addEventListener("keydown", function (e) {
    if (!lightbox.classList.contains("is-open")) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowRight") next();
    if (e.key === "ArrowLeft") prev();
  });

  var startX = 0;
  lightbox.addEventListener("touchstart", function (e) {
    startX = e.changedTouches[0].clientX;
  }, { passive: true });
  lightbox.addEventListener("touchend", function (e) {
    var dx = e.changedTouches[0].clientX - startX;
    if (dx > 50) prev();
    if (dx < -50) next();
  });

  var params = new URLSearchParams(window.location.search);
  if (params.has("i")) {
    var start = parseInt(params.get("i"), 10);
    if (!isNaN(start) && start >= 0 && start < images.length) open(start);
  }
})();
