(function () {
  document.querySelectorAll(".svc-card__row").forEach(function (row) {
    row.addEventListener("click", function () {
      var details = row.nextElementSibling;
      while (details && !details.classList.contains("svc-card__details")) {
        details = details.nextElementSibling;
      }
      if (!details) return;
      var open = details.classList.toggle("is-open");
      var icon = row.querySelector(".svc-card__icon");
      if (icon) icon.src = open ? "public/images/icon-minus.svg" : "public/images/icon-plus.svg";
      row.setAttribute("aria-expanded", open ? "true" : "false");
    });
  });
})();
