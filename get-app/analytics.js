(function (document, window) {
  if (window.posthog && window.posthog.__loaded) return;

  const posthog = (window.posthog = window.posthog || []);
  if (posthog.__SV) return;

  posthog._i = [];
  posthog.init = function (token, config, name) {
    function stub(target, method) {
      const parts = method.split(".");
      if (parts.length === 2) {
        target = target[parts[0]];
        method = parts[1];
      }
      target[method] = function () {
        target.push([method].concat(Array.prototype.slice.call(arguments)));
      };
    }

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.crossOrigin = "anonymous";
    script.async = true;
    script.src = config.api_host.replace(".i.posthog.com", "-assets.i.posthog.com") + "/static/array.js";
    document.head.appendChild(script);

    const instance = name ? (posthog[name] = []) : posthog;
    name = name || "posthog";
    instance.people = instance.people || [];
    instance.toString = function (detail) {
      let label = "posthog";
      if (name) label += "." + name;
      if (!detail) label += " (stub)";
      return label;
    };
    instance.people.toString = function () {
      return instance.toString(1) + ".people (stub)";
    };

    const methods = [
      "init",
      "capture",
      "register",
      "register_once",
      "register_for_session",
      "unregister",
      "opt_out_capturing",
      "has_opted_out_capturing",
      "opt_in_capturing",
      "reset",
      "identify",
      "setPersonProperties",
      "people.set",
    ];

    for (const method of methods) stub(instance, method);
    posthog._i.push([token, config, name]);
  };
  posthog.__SV = 1;
})(document, window);

(function (document, posthog) {
  "use strict";

  let analyticsClient = posthog;
  let redirectStarted = false;
  const projectToken = "phc_B4PXaBoC3wiRgRKkqCokDtQYrKWxwaA2FNSFftrSaftb";
  const storeUrls = {
    app_store: "https://apps.apple.com/app/id6784933624",
    google_play: "https://play.google.com/store/apps/details?id=com.hunnychild.app&pli=1",
  };
  const allowedCampaignParameters = [
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_content",
    "utm_term",
  ];

  function cleanUrl(value) {
    if (!value) return "";

    try {
      const url = new URL(value, window.location.origin);
      const clean = new URL(url.origin + url.pathname);

      for (const key of allowedCampaignParameters) {
        const parameterValue = url.searchParams.get(key);
        if (parameterValue) clean.searchParams.set(key, parameterValue.slice(0, 120));
      }

      return clean.toString();
    } catch (_error) {
      return "";
    }
  }

  function referrerDomain() {
    if (!document.referrer) return "";

    try {
      return new URL(document.referrer).hostname;
    } catch (_error) {
      return "";
    }
  }

  function campaignProperties() {
    const parameters = new URLSearchParams(window.location.search);
    const properties = {
      page: "get_app",
      referrer_domain: referrerDomain(),
    };

    for (const key of allowedCampaignParameters) {
      const value = parameters.get(key);
      if (value) properties[key] = value.slice(0, 120);
    }

    return properties;
  }

  function sanitizeEvent(event) {
    if (!event || !event.properties) return event;

    event.properties.$current_url = cleanUrl(event.properties.$current_url);
    event.properties.$referrer = referrerDomain();
    event.properties.$geoip_disable = true;
    event.properties.$ip = "0.0.0.0";

    return event;
  }

  function detectedStore() {
    const userAgent = navigator.userAgent || "";
    const isAndroid = /Android/i.test(userAgent);
    const isIOS = /iPhone|iPad|iPod/i.test(userAgent);
    const isIPadOS = navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1;

    if (isAndroid) return "google_play";
    if (isIOS || isIPadOS) return "app_store";
    return "";
  }

  const automaticStore = detectedStore();

  function redirectToStore(store) {
    if (!store || redirectStarted) return;
    redirectStarted = true;

    analyticsClient.capture(
      "get_app_store_click",
      {
        ...campaignProperties(),
        store: store,
        method: "automatic_redirect",
      },
      { transport: "sendBeacon", send_instantly: true },
    );

    window.setTimeout(function () {
      window.location.replace(storeUrls[store]);
    }, 100);
  }

  posthog.init(projectToken, {
    api_host: "https://us.i.posthog.com",
    ui_host: "https://us.posthog.com",
    defaults: "2026-05-30",
    autocapture: false,
    capture_pageview: false,
    capture_pageleave: false,
    capture_exceptions: false,
    capture_performance: false,
    request_batching: false,
    disable_session_recording: true,
    disable_persistence: true,
    person_profiles: "never",
    respect_dnt: true,
    before_send: sanitizeEvent,
    loaded: function (analytics) {
      analyticsClient = analytics;
      analytics.capture("get_app_page_view", campaignProperties());
      redirectToStore(automaticStore);
    },
  });

  if (automaticStore) {
    window.setTimeout(function () {
      redirectToStore(automaticStore);
    }, 900);
  }

  document.addEventListener("click", function (event) {
    const storeLink = event.target.closest("[data-analytics-store]");
    if (!storeLink) return;

    analyticsClient.capture("get_app_store_click", {
      ...campaignProperties(),
      store: storeLink.dataset.analyticsStore,
      method: "manual_fallback",
    });
  });
})(document, window.posthog);
