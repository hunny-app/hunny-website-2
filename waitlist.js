(function initWaitlistForm() {
  const form = document.getElementById("waitlistForm");
  if (!form) {
    return;
  }

  const emailInput = document.getElementById("waitlistEmail");
  const nameInput = document.getElementById("waitlistName");
  const hpInput = document.getElementById("waitlistHp");
  const submitBtn = document.getElementById("waitlistSubmit");
  const statusEl = document.getElementById("waitlistStatus");
  let activeStatusKey = "";
  let activeStatusIsError = false;

  if (hpInput) {
    hpInput.value = "";
  }

  function t(key, fallback) {
    return window.HunnyI18n && window.HunnyI18n.t ? window.HunnyI18n.t(key) || fallback : fallback;
  }

  function setStatus(message, isError) {
    if (!statusEl) {
      return;
    }
    statusEl.textContent = message;
    statusEl.classList.toggle("waitlist-status--error", Boolean(isError));
    statusEl.hidden = !message;
  }

  function setStatusKey(key, isError) {
    activeStatusKey = key;
    activeStatusIsError = Boolean(isError);
    setStatus(t(key, ""), isError);
  }

  function clearStatus() {
    activeStatusKey = "";
    activeStatusIsError = false;
    setStatus("", false);
  }

  window.addEventListener("hunny:languagechange", () => {
    if (activeStatusKey) {
      setStatus(t(activeStatusKey, ""), activeStatusIsError);
    }
  });

  function isValidEmail(value) {
    const v = value.trim();
    if (!v || v.length > 254) {
      return false;
    }
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    clearStatus();

    const cfg = window.HUNNY_WAITLIST || {};
    const url = (cfg.supabaseUrl || "").replace(/\/$/, "");
    const key = cfg.supabaseAnonKey || "";

    if (!url || !key) {
      setStatusKey("waitlist.status.notConnected", true);
      return;
    }

    if (hpInput && hpInput.value) {
      setStatusKey("waitlist.status.honeypot", false);
      form.reset();
      return;
    }

    const email = emailInput ? emailInput.value : "";
    const name = nameInput ? nameInput.value : "";

    if (!isValidEmail(email)) {
      setStatusKey("waitlist.status.invalidEmail", true);
      if (emailInput) {
        emailInput.focus();
      }
      return;
    }

    const payload = {
      email: email.trim().toLowerCase(),
      name: name.trim() ? name.trim() : null,
    };

    if (submitBtn) {
      submitBtn.disabled = true;
    }
    setStatusKey("waitlist.status.sending", false);

    try {
      const res = await fetch(`${url}/rest/v1/waitlist_signups`, {
        method: "POST",
        headers: {
          apikey: key,
          Authorization: `Bearer ${key}`,
          "Content-Type": "application/json",
          Prefer: "return=minimal",
        },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setStatusKey("waitlist.status.success", false);
        form.reset();
        return;
      }

      if (res.status === 409) {
        setStatusKey("waitlist.status.already", false);
        return;
      }

      const text = await res.text().catch(() => "");
      setStatusKey(text ? "waitlist.status.errorWithEmail" : "waitlist.status.error", true);
    } catch {
      setStatusKey("waitlist.status.network", true);
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
      }
    }
  });
})();
