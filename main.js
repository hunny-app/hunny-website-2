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

  var emailWrap = document.querySelector(".contact-card-email-wrap");
  if (emailWrap) {
    var emailToggle = emailWrap.querySelector(".js-email-card-toggle");
    var emailBar = emailWrap.querySelector(".email-copy-bar");
    var copyEmailBtn = emailWrap.querySelector(".js-copy-email-btn");
    var contactEmail = (emailWrap.getAttribute("data-contact-email") || "").trim();

    function setEmailBarOpen(open) {
      if (!emailToggle || !emailBar) return;
      emailToggle.setAttribute("aria-expanded", open ? "true" : "false");
      if (open) emailBar.removeAttribute("hidden");
      else emailBar.setAttribute("hidden", "");
    }

    if (emailToggle && emailBar) {
      emailToggle.addEventListener("click", function () {
        var open = emailToggle.getAttribute("aria-expanded") === "true";
        setEmailBarOpen(!open);
      });
    }

    function copyEmailToClipboard(done) {
      if (!contactEmail) {
        if (done) done(false);
        return;
      }
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(contactEmail).then(
          function () {
            if (done) done(true);
          },
          function () {
            legacyCopy();
          }
        );
        return;
      }
      legacyCopy();

      function legacyCopy() {
        try {
          var ta = document.createElement("textarea");
          ta.value = contactEmail;
          ta.setAttribute("readonly", "");
          ta.style.position = "fixed";
          ta.style.left = "-9999px";
          document.body.appendChild(ta);
          ta.select();
          var ok = document.execCommand("copy");
          document.body.removeChild(ta);
          if (done) done(ok);
        } catch (e) {
          if (done) done(false);
        }
      }
    }

    if (copyEmailBtn && contactEmail) {
      var defaultCopyLabel = copyEmailBtn.textContent.trim();
      copyEmailBtn.addEventListener("click", function (e) {
        e.stopPropagation();
        copyEmailToClipboard(function (ok) {
          copyEmailBtn.textContent = ok ? "Copied!" : "Copy";
          if (ok) {
            window.setTimeout(function () {
              copyEmailBtn.textContent = defaultCopyLabel;
            }, 2000);
          }
        });
      });
    }
  }
})();
