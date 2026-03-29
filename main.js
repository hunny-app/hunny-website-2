(function () {
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  var header = document.querySelector(".site-header");
  function onScroll() {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 10);
  }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  var reduced =
    window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var revealEls = document.querySelectorAll(".reveal-on-scroll");
  if (reduced) {
    revealEls.forEach(function (el) {
      el.classList.add("is-visible");
    });
  } else {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -6% 0px", threshold: 0.06 }
    );
    revealEls.forEach(function (el) {
      io.observe(el);
    });
  }

  var comingSoonDialog = document.getElementById("comingSoonDialog");
  var comingSoonTriggers = document.querySelectorAll("a.js-coming-soon");
  if (comingSoonDialog && comingSoonDialog.showModal) {
    comingSoonTriggers.forEach(function (a) {
      a.addEventListener("click", function (e) {
        e.preventDefault();
        comingSoonDialog.showModal();
      });
    });

    var closeComingSoonBtns = comingSoonDialog.querySelectorAll(".js-close-coming-soon");
    closeComingSoonBtns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        comingSoonDialog.close();
      });
    });

    comingSoonDialog.addEventListener("click", function (e) {
      if (e.target === comingSoonDialog) comingSoonDialog.close();
    });

    function openComingSoonFromHash() {
      var h = (location.hash || "").replace(/^#/, "");
      if (h === "app" || h === "try" || h === "coming-soon") {
        comingSoonDialog.showModal();
        if (history.replaceState) {
          history.replaceState(null, "", location.pathname + location.search);
        }
      }
    }
    openComingSoonFromHash();
  }
})();
