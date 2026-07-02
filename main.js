(function () {
  var LANGUAGE_KEY = "hunny.language";
  var DEFAULT_LANGUAGE = "en";
  var TRADITIONAL_CHINESE = "zh-Hant";

  var translations = {
    en: {
      "meta.homeTitle": "Hunny — World’s first AI family companion",
      "brand.home": "Hunny home",
      "nav.primary": "Primary",
      "nav.home": "Home",
      "nav.contact": "Contact us",
      "nav.openMenu": "Open navigation menu",
      "nav.closeMenu": "Close navigation menu",
      "language.label": "Language",
      "badge.title": "Community favorite",
      "badge.loved": "Loved by early users",
      "home.hero.title": "Stay Close to the Small Moments, Even During Work",
      "home.hero.description":
        "During busy or OT nights, Hunny talks with your child and shares quick updates so you don’t miss the little moments",
      "home.hero.appStoreKicker": "Download on the",
      "home.hero.appStoreName": "App Store",
      "home.hero.playStoreKicker": "GET IT ON",
      "home.hero.playStoreName": "Google Play",
      "home.highlightsLabel": "Product highlights",
      "home.feature.eyebrow": "What Hunny Does",
      "home.feature.boardTitle": "A simple way to stay close to their day.",
      "home.feature.friendTitle": "A playful companion when you’re busy",
      "home.feature.friendBody":
        "Hunny keeps your child engaged while you focus.",
      "home.feature.summaryTitle": "See What Mattered Today",
      "home.feature.summaryBody":
        "Get a quick summary of what your child shared, felt, or wanted to show you.",
      "home.feature.topicTitle": "Know What To Ask Tonight",
      "home.feature.topicBody":
        "Get simple suggestions that help you ask better than “How was your day?”",
      "home.feature.topicAlt": "Hunny AI chat screen suggesting thoughtful family conversation prompts.",
      "home.play.eyebrow": "Play Together",
      "home.play.title": "Small ways to play, big ways to stay close.",
      "home.play.drawTogether": "Draw Together",
      "home.play.loveNotes": "Love Notes",
      "home.play.snapGame": "Snap Game",
      "home.trust.eyebrow": "Trust",
      "home.trust.title": "Built for trust, not surveillance.",
      "home.trust.noCameras": "No cameras",
      "home.trust.noLocation": "No location tracking",
      "home.trust.noDiagnosis": "No medical diagnosis",
      "home.trust.noNotifications": "No constant notifications",
      "home.trust.foot": "Just conversations → turned into signals.",
      "home.stats.hiddenTitle": "Families and connection",
      "home.stats.workingParents": "Of families with children rely on working parents",
      "home.stats.questionNum": "1 Question",
      "home.stats.questionLabel": "Can change a child’s whole day",
      "home.stats.combinedNote":
        "Time is precious. Meaningful connection matters more than ever — Hunny helps parents ask better ones.",
      "contact.eyebrow": "Get in touch",
      "contact.title": "Contact us",
      "contact.email": "Email",
      "contact.copy": "Copy",
      "contact.copied": "Copied!",
      "footer.company": "Company",
      "footer.home": "Home",
      "footer.support": "Support",
      "footer.accountDeletion": "Account deletion",
      "footer.legal": "Legal",
      "footer.privacy": "Privacy Policy",
      "footer.terms": "Terms",
      "footer.resources": "Resources",
      "footer.docs": "Docs",
      "footer.tagline": "Hunny. Sweet intelligence, built for you.",
    },
    "zh-Hant": {
      "meta.homeTitle": "Hunny — 全球首個 AI 家庭陪伴夥伴",
      "brand.home": "Hunny 首頁",
      "nav.primary": "主要導覽",
      "nav.home": "首頁",
      "nav.contact": "聯絡我們",
      "nav.openMenu": "開啟導覽選單",
      "nav.closeMenu": "關閉導覽選單",
      "language.label": "語言",
      "badge.title": "早期用戶最愛",
      "badge.loved": "深受早期用戶喜愛",
      "home.hero.title": "就算忙於工作，也不錯過孩子的小時刻",
      "home.hero.description":
        "在忙碌或加班的晚上，Hunny 會陪孩子聊天，並傳送簡短更新給你，讓你不會錯過那些細微卻重要的小時刻。",
      "home.hero.appStoreKicker": "Download on the",
      "home.hero.appStoreName": "App Store",
      "home.hero.playStoreKicker": "GET IT ON",
      "home.hero.playStoreName": "Google Play",
      "home.highlightsLabel": "產品亮點",
      "home.feature.eyebrow": "Hunny 能做什麼",
      "home.feature.boardTitle": "用簡單的方式，陪你貼近孩子的一天。",
      "home.feature.friendTitle": "在你忙碌時，成為孩子輕鬆互動的陪伴",
      "home.feature.friendBody":
        "當你需要專心時，Hunny 會陪孩子聊天、玩耍，讓他們自然投入其中。",
      "home.feature.summaryTitle": "看見今天真正重要的事",
      "home.feature.summaryBody":
        "快速了解孩子今天分享了什麼、在意什麼、感受如何，或想讓你知道哪些事。",
      "home.feature.topicTitle": "今晚更知道該聊什麼",
      "home.feature.topicBody":
        "Hunny 會整理出簡單貼心的提問建議，幫你問得比「今天過得怎麼樣？」更深入。",
      "home.feature.topicAlt": "Hunny AI 對話畫面，提供貼心的家庭對話建議。",
      "home.play.eyebrow": "一起玩，心更近",
      "home.play.title": "就算不在身邊，也能一起玩、一起分享。",
      "home.play.drawTogether": "一起畫畫",
      "home.play.loveNotes": "愛心留言",
      "home.play.snapGame": "Snap Game",
      "home.trust.eyebrow": "信任",
      "home.trust.title": "為信任而設計，不為監視而生。",
      "home.trust.noCameras": "不使用鏡頭",
      "home.trust.noLocation": "不追蹤定位",
      "home.trust.noDiagnosis": "不做醫療診斷",
      "home.trust.noNotifications": "不會不停推送通知",
      "home.trust.foot": "只是把對話轉化成清楚易懂的訊號。",
      "home.stats.hiddenTitle": "家庭與連結",
      "home.stats.workingParents": "有孩子的家庭，大多仰賴在職父母共同支撐",
      "home.stats.questionNum": "一個問題",
      "home.stats.questionLabel": "足以改變孩子的一整天",
      "home.stats.combinedNote":
        "時間很珍貴。有意義的連結比以往更重要，Hunny 幫助父母問出更好的問題。",
      "contact.eyebrow": "聯絡我們",
      "contact.title": "聯絡我們",
      "contact.email": "電郵",
      "contact.copy": "複製",
      "contact.copied": "已複製",
      "footer.company": "公司",
      "footer.home": "首頁",
      "footer.support": "支援",
      "footer.accountDeletion": "帳戶刪除",
      "footer.legal": "法律",
      "footer.privacy": "私隱政策",
      "footer.terms": "條款",
      "footer.resources": "資源",
      "footer.docs": "文件",
      "footer.tagline": "Hunny。為你而生的溫柔智慧。",
    },
  };

  function supportsLanguage(language) {
    return Boolean(translations[language]);
  }

  function readSavedLanguage() {
    try {
      var saved = window.localStorage && window.localStorage.getItem(LANGUAGE_KEY);
      return supportsLanguage(saved) ? saved : null;
    } catch (e) {
      return null;
    }
  }

  function writeSavedLanguage(language) {
    try {
      if (window.localStorage) window.localStorage.setItem(LANGUAGE_KEY, language);
    } catch (e) {
      return;
    }
  }

  function hasTraditionalChineseLocale() {
    var languages = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || ""];
    return languages.some(function (locale) {
      var normalized = String(locale || "").toLowerCase();
      return (
        normalized === "zh-hk" ||
        normalized === "zh-tw" ||
        normalized === "zh-mo" ||
        normalized.indexOf("zh-hant") === 0
      );
    });
  }

  function hasHongKongOrTaiwanTimezone() {
    try {
      var timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      return timezone === "Asia/Hong_Kong" || timezone === "Asia/Taipei";
    } catch (e) {
      return false;
    }
  }

  function getInitialLanguage() {
    var saved = readSavedLanguage();
    if (saved) return saved;
    if (hasTraditionalChineseLocale() || hasHongKongOrTaiwanTimezone()) return TRADITIONAL_CHINESE;
    return DEFAULT_LANGUAGE;
  }

  function t(key, language) {
    var lang = supportsLanguage(language) ? language : currentLanguage;
    return (translations[lang] && translations[lang][key]) || translations[DEFAULT_LANGUAGE][key] || "";
  }

  function translateAttributeMap(el, language) {
    var attrMap = el.getAttribute("data-i18n-attr");
    if (!attrMap) return;
    attrMap.split(",").forEach(function (pair) {
      var separator = pair.indexOf(":");
      if (separator === -1) return;
      var attr = pair.slice(0, separator).trim();
      var key = pair.slice(separator + 1).trim();
      var value = t(key, language);
      if (attr && value) el.setAttribute(attr, value);
    });
  }

  function formatLocalizedHtml(key, value, language) {
    if (key === "home.hero.title" && language === "en") {
      return value.replace("During Work", '<span class="hero-heading-emphasis">During Work</span>');
    }
    return null;
  }

  function applyLanguage(language, persist) {
    var nextLanguage = supportsLanguage(language) ? language : DEFAULT_LANGUAGE;
    currentLanguage = nextLanguage;
    document.documentElement.lang = nextLanguage;
    document.documentElement.setAttribute("data-language", nextLanguage);

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      var value = t(key, nextLanguage);
      if (!value) return;

      var formattedHtml = formatLocalizedHtml(key, value, nextLanguage);
      if (formattedHtml !== null) {
        el.innerHTML = formattedHtml;
        return;
      }
      el.textContent = value;
    });

    document.querySelectorAll("[data-i18n-attr]").forEach(function (el) {
      translateAttributeMap(el, nextLanguage);
    });

    document.querySelectorAll("[data-lang-toggle]").forEach(function (button) {
      button.setAttribute("aria-checked", nextLanguage === TRADITIONAL_CHINESE ? "true" : "false");
    });

    if (persist) writeSavedLanguage(nextLanguage);
    window.dispatchEvent(new CustomEvent("hunny:languagechange", { detail: { language: nextLanguage } }));
  }

  var hasLocalizedContent = Boolean(document.querySelector("[data-i18n], [data-i18n-attr], [data-lang-toggle]"));
  var currentLanguage = hasLocalizedContent ? getInitialLanguage() : DEFAULT_LANGUAGE;

  window.HunnyI18n = {
    applyLanguage: applyLanguage,
    getLanguage: function () {
      return currentLanguage;
    },
    t: function (key) {
      return t(key, currentLanguage);
    },
  };

  if (hasLocalizedContent) {
    applyLanguage(currentLanguage, false);
  }

  document.querySelectorAll("[data-lang-toggle]").forEach(function (button) {
    button.addEventListener("click", function () {
      var nextLanguage = currentLanguage === TRADITIONAL_CHINESE ? DEFAULT_LANGUAGE : TRADITIONAL_CHINESE;
      applyLanguage(nextLanguage, true);
    });
  });

  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  var header = document.querySelector(".site-header");
  function onScroll() {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 10);
  }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  function updatePrimaryNavCurrent() {
    var nav = document.querySelector(".nav-main__list");
    if (!nav) return;

    nav.querySelectorAll("a").forEach(function (a) {
      a.removeAttribute("aria-current");
    });

    var path = window.location.pathname || "";
    var contactLink = nav.querySelector('a[href="#contact"]');
    if (!contactLink) return;

    var hash = (window.location.hash || "").toLowerCase();
    if (hash === "#contact") {
      contactLink.setAttribute("aria-current", "page");
      return;
    }

    var homeLink = nav.querySelector('a[href="#top"]');
    if (homeLink) homeLink.setAttribute("aria-current", "page");
  }

  updatePrimaryNavCurrent();
  window.addEventListener("hashchange", updatePrimaryNavCurrent);

  var navToggle = document.querySelector("[data-nav-toggle]");
  var navClose = document.querySelector("[data-nav-close]");
  var navOverlay = document.querySelector("[data-nav-overlay]");
  var navMain = document.querySelector(".nav-main");
  var navLinks = navMain ? navMain.querySelectorAll("a") : [];

  function isMobileNav() {
    return Boolean(window.matchMedia && window.matchMedia("(max-width: 1100px)").matches);
  }

  function setNavOpen(open) {
    if (!navToggle || !navMain || !navOverlay) return;
    var mobile = isMobileNav();
    var isOpen = mobile && Boolean(open);
    document.body.classList.toggle("nav-open", isOpen);
    navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    if (mobile) {
      navMain.setAttribute("aria-hidden", isOpen ? "false" : "true");
      navOverlay.setAttribute("aria-hidden", isOpen ? "false" : "true");
    } else {
      navMain.removeAttribute("aria-hidden");
      navOverlay.setAttribute("aria-hidden", "true");
    }
  }

  if (navToggle && navMain && navOverlay) {
    setNavOpen(false);

    navToggle.addEventListener("click", function () {
      var isOpen = navToggle.getAttribute("aria-expanded") === "true";
      setNavOpen(!isOpen);
    });

    if (navClose) {
      navClose.addEventListener("click", function () {
        setNavOpen(false);
      });
    }

    navOverlay.addEventListener("click", function () {
      setNavOpen(false);
    });

    navLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        if (isMobileNav()) setNavOpen(false);
      });
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") setNavOpen(false);
    });

    window.addEventListener("resize", function () {
      setNavOpen(false);
    });
  }

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

  function initAutoScroller(scroller) {
    if (!scroller || reduced) return;

    var items = Array.prototype.slice.call(scroller.children);
    if (items.length < 2) return;

    var paused = false;
    var resumeTimer = 0;

    function canScroll() {
      return scroller.scrollWidth - scroller.clientWidth > 8;
    }

    function getPositions() {
      var base = items[0].offsetLeft;
      return items.map(function (item) {
        return item.offsetLeft - base;
      });
    }

    function getCurrentIndex(positions) {
      var current = scroller.scrollLeft;
      var bestIndex = 0;
      var bestDistance = Infinity;
      positions.forEach(function (left, index) {
        var distance = Math.abs(current - left);
        if (distance < bestDistance) {
          bestDistance = distance;
          bestIndex = index;
        }
      });
      return bestIndex;
    }

    function pauseTemporarily(delay) {
      paused = true;
      window.clearTimeout(resumeTimer);
      resumeTimer = window.setTimeout(function () {
        paused = false;
      }, delay || 2600);
    }

    ["pointerdown", "touchstart", "wheel", "focusin"].forEach(function (eventName) {
      scroller.addEventListener(eventName, function () {
        pauseTemporarily(3200);
      }, { passive: true });
    });

    scroller.addEventListener("mouseenter", function () {
      paused = true;
    });

    scroller.addEventListener("mouseleave", function () {
      pauseTemporarily(900);
    });

    window.setInterval(function () {
      if (paused || !canScroll() || document.hidden) return;

      var positions = getPositions();
      var currentIndex = getCurrentIndex(positions);
      var nextIndex = (currentIndex + 1) % positions.length;
      var maxLeft = scroller.scrollWidth - scroller.clientWidth;
      var nextLeft = nextIndex === 0 ? 0 : Math.min(positions[nextIndex], maxLeft);

      scroller.scrollTo({
        left: nextLeft,
        behavior: "smooth",
      });
    }, 3300);
  }

  window.setTimeout(function () {
    initAutoScroller(document.querySelector(".feature-board__scene"));
    initAutoScroller(document.querySelector(".connection-play__grid"));
  }, 700);

  function initHeroVideoLoop() {
    var visual = document.querySelector(".hero-visual");
    if (!visual) return;

    var videos = Array.prototype.slice.call(visual.querySelectorAll(".hero-video"));
    if (videos.length < 2) return;

    var activeIndex = 0;
    var swapping = false;
    var fadeMs = 550;
    var leadSeconds = 0.62;

    videos.forEach(function (video, index) {
      video.muted = true;
      video.playsInline = true;
      video.loop = false;
      video.currentTime = 0;
      if (index !== activeIndex) video.pause();
    });

    function playVideo(video) {
      var playPromise = video.play();
      if (playPromise && typeof playPromise.catch === "function") {
        playPromise.catch(function () {});
      }
    }

    function activate(index) {
      videos.forEach(function (video, videoIndex) {
        video.classList.toggle("hero-video--primary", videoIndex === index);
        video.classList.toggle("hero-video--secondary", videoIndex !== index);
      });
    }

    function swapVideos() {
      if (swapping) return;
      swapping = true;

      var current = videos[activeIndex];
      var nextIndex = activeIndex === 0 ? 1 : 0;
      var next = videos[nextIndex];

      try {
        next.currentTime = 0;
      } catch (error) {}
      playVideo(next);
      visual.classList.add("is-crossfading");

      window.setTimeout(function () {
        current.pause();
        try {
          current.currentTime = 0;
        } catch (error) {}

        activeIndex = nextIndex;
        activate(activeIndex);
        visual.classList.remove("is-crossfading");
        swapping = false;
      }, fadeMs);
    }

    videos.forEach(function (video) {
      video.addEventListener("timeupdate", function () {
        if (!Number.isFinite(video.duration) || video.duration <= 0) return;
        if (video !== videos[activeIndex]) return;
        if (video.duration - video.currentTime <= leadSeconds) {
          swapVideos();
        }
      });

      video.addEventListener("ended", function () {
        if (video === videos[activeIndex]) swapVideos();
      });
    });

    activate(activeIndex);
    playVideo(videos[activeIndex]);
  }

  initHeroVideoLoop();

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
      copyEmailBtn.addEventListener("click", function (e) {
        e.stopPropagation();
        copyEmailToClipboard(function (ok) {
          copyEmailBtn.textContent = ok ? window.HunnyI18n.t("contact.copied") : window.HunnyI18n.t("contact.copy");
          if (ok) {
            window.setTimeout(function () {
              copyEmailBtn.textContent = window.HunnyI18n.t("contact.copy");
            }, 2000);
          }
        });
      });
    }
  }
})();
