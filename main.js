(function () {
  var LANGUAGE_KEY = "hunny.language";
  var DEFAULT_LANGUAGE = "en";
  var TRADITIONAL_CHINESE = "zh-Hant";

  var translations = {
    en: {
      "meta.homeTitle": "Hunny — World’s first AI family companion",
      "meta.waitlistTitle": "Join the waitlist — Hunny",
      "brand.home": "Hunny home",
      "nav.primary": "Primary",
      "nav.home": "Home",
      "nav.contact": "Contact us",
      "nav.waitlist": "Waitlist",
      "nav.joinWaitlist": "Join the waitlist",
      "nav.openMenu": "Open navigation menu",
      "nav.closeMenu": "Close navigation menu",
      "language.label": "Language",
      "badge.title": "Community favorite",
      "badge.loved": "Loved by early users",
      "home.hero.title": "Stay Close to the Small Moments, Even During Work",
      "home.hero.description":
        "During busy or OT nights, Hunny talks with your child and shares quick updates so you don’t miss the little moments",
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
      "contact.lead": "Follow us or send a message — we’d love to hear from you.",
      "contact.email": "Email",
      "contact.copy": "Copy",
      "contact.copied": "Copied!",
      "footer.company": "Company",
      "footer.about": "About",
      "footer.careers": "Careers",
      "footer.resources": "Resources",
      "footer.docs": "Docs",
      "footer.tagline": "Hunny. Sweet intelligence, built for you.",
      "waitlist.kicker": "Early access",
      "waitlist.title": "Join the waitlist",
      "waitlist.lead":
        "Get early access and Hunny updates. Add your email below — we only use it for Hunny-related news.",
      "waitlist.emailPlaceholder": "you@example.com",
      "waitlist.name": "Name",
      "waitlist.optional": "(optional)",
      "waitlist.namePlaceholder": "How we should address you",
      "waitlist.leaveBlank": "Leave blank",
      "waitlist.submit": "Join the waitlist",
      "waitlist.privacy":
        "We store signups in a secure database and only use your email for Hunny-related updates. We don’t sell addresses.",
      "waitlist.back": "← Back to home",
      "waitlist.status.notConnected":
        "Waitlist is not connected yet. Add your Supabase URL and anon key in waitlist-config.js.",
      "waitlist.status.honeypot": "Thanks — you’re on the list.",
      "waitlist.status.invalidEmail": "Please enter a valid email address.",
      "waitlist.status.sending": "Sending…",
      "waitlist.status.success": "You’re on the list. We’ll be in touch.",
      "waitlist.status.already": "You’re already on the waitlist — thank you!",
      "waitlist.status.errorWithEmail": "Something went wrong. Please try again or email us.",
      "waitlist.status.error": "Something went wrong. Please try again.",
      "waitlist.status.network": "Network error. Check your connection and try again.",
    },
    "zh-Hant": {
      "meta.homeTitle": "Hunny — 全球首個 AI 家庭陪伴夥伴",
      "meta.waitlistTitle": "加入 Hunny 等候名單",
      "brand.home": "Hunny 首頁",
      "nav.primary": "主要導覽",
      "nav.home": "首頁",
      "nav.contact": "聯絡我們",
      "nav.waitlist": "等候名單",
      "nav.joinWaitlist": "加入等候名單",
      "nav.openMenu": "開啟導覽選單",
      "nav.closeMenu": "關閉導覽選單",
      "language.label": "語言",
      "badge.title": "早期用戶最愛",
      "badge.loved": "深受早期用戶喜愛",
      "home.hero.title": "就算忙於工作，也不錯過孩子的小時刻",
      "home.hero.description":
        "在忙碌或加班的晚上，Hunny 會陪孩子聊天，並傳送簡短更新給你，讓你不會錯過那些細微卻重要的小時刻。",
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
      "contact.lead": "歡迎追蹤我們，或直接傳訊息給我們。我們很想聽聽你的想法。",
      "contact.email": "電郵",
      "contact.copy": "複製",
      "contact.copied": "已複製",
      "footer.company": "公司",
      "footer.about": "關於",
      "footer.careers": "招聘",
      "footer.resources": "資源",
      "footer.docs": "文件",
      "footer.tagline": "Hunny。為你而生的溫柔智慧。",
      "waitlist.kicker": "搶先體驗",
      "waitlist.title": "加入等候名單",
      "waitlist.lead":
        "加入等候名單，搶先體驗 Hunny，並接收最新消息。你的電郵只會用於 Hunny 相關通知。",
      "waitlist.emailPlaceholder": "you@example.com",
      "waitlist.name": "稱呼",
      "waitlist.optional": "（選填）",
      "waitlist.namePlaceholder": "我們該怎麼稱呼你？",
      "waitlist.leaveBlank": "請留空",
      "waitlist.submit": "加入等候名單",
      "waitlist.privacy":
        "你的資料會安全保存於資料庫中，我們只會透過電郵向你發送 Hunny 相關更新，不會出售或分享你的電郵地址。",
      "waitlist.back": "← 回到首頁",
      "waitlist.status.notConnected":
        "等候名單功能尚未連接。請在 waitlist-config.js 填入 Supabase URL 和 anon key。",
      "waitlist.status.honeypot": "謝謝，你已成功加入等候名單。",
      "waitlist.status.invalidEmail": "請輸入有效的電郵地址。",
      "waitlist.status.sending": "傳送中…",
      "waitlist.status.success": "你已成功加入等候名單，我們會在有消息時通知你。",
      "waitlist.status.already": "你已經在等候名單中了，謝謝你的支持！",
      "waitlist.status.errorWithEmail": "發生錯誤。請再試一次，或直接電郵聯絡我們。",
      "waitlist.status.error": "發生錯誤。請再試一次。",
      "waitlist.status.network": "網絡錯誤。請檢查連線後再試一次。",
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
    if (path.indexOf("waitlist.html") !== -1) {
      var w = nav.querySelector('a[href="waitlist.html"]');
      if (w) w.setAttribute("aria-current", "page");
      return;
    }

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
