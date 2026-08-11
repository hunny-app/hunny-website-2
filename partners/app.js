const endpoint = "https://iecozllarwniggzbifnr.supabase.co/functions/v1/affiliate-program";
const tokenKey = "hunnyPartnerDashboardToken";

async function callProgram(payload) {
  const response = await fetch(endpoint, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(payload),
  });
  const body = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(body.error || "Please try again.");
  return body.data;
}

function visitorId() {
  const key = "hunnyPartnerVisitor";
  let value = localStorage.getItem(key);
  if (!value) {
    value = crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random()}-${Math.random()}`;
    localStorage.setItem(key, value);
  }
  return value;
}

async function loadDashboard(token) {
  const status = document.querySelector("#dashboard-status");
  try {
    const data = await callProgram({ action: "dashboard", token });
    localStorage.setItem(tokenKey, token);
    history.replaceState(null, "", `${location.pathname}#dashboard=${token}`);
    document.querySelector("#apply-card").classList.add("hidden");
    document.querySelector("#dashboard-card").classList.remove("hidden");
    document.querySelector("#partner-code").textContent = data.code;
    document.querySelector("#partner-link").value = data.trackedLink;
    for (const key of ["clicks", "joined", "paid"]) {
      document.querySelector(`#${key}`).textContent = Number(data[key] || 0).toLocaleString();
    }
    document.querySelector("#pending").textContent = `CA$${(Number(data.pendingCents || 0) / 100).toFixed(2)}`;
    document.querySelector("#earnings").textContent = `CA$${(Number(data.availableCents || 0) / 100).toFixed(2)}`;
    const payout = document.querySelector("#payout");
    payout.disabled = data.canRequestPayout !== true;
    payout.textContent = data.canRequestPayout === true
      ? "Request payout"
      : `Payout at CA$${(Number(data.minimumPayoutCents || 1000) / 100).toFixed(2)}`;
    status.textContent = "";
  } catch (error) {
    localStorage.removeItem(tokenKey);
    history.replaceState(null, "", location.pathname);
    status.textContent = error.message;
    document.querySelector("#apply-card").classList.remove("hidden");
    document.querySelector("#dashboard-card").classList.add("hidden");
  }
}

document.querySelector("#apply-form").addEventListener("submit", async (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const button = form.querySelector("button[type=submit]");
  const status = document.querySelector("#apply-status");
  const values = Object.fromEntries(new FormData(form));
  button.disabled = true;
  status.textContent = "Creating your link…";
  try {
    const data = await callProgram({
      action: "apply",
      displayName: values.displayName,
      email: values.email,
      profileUrl: values.profileUrl,
      website: values.website,
      acceptTerms: values.acceptTerms === "on",
    });
    if (data?.alreadyRegistered) throw new Error("That email is already registered. Contact Hunny support for access.");
    localStorage.setItem(tokenKey, data.dashboardToken);
    await loadDashboard(data.dashboardToken);
  } catch (error) {
    status.textContent = error.message.replaceAll("_", " ");
  } finally {
    button.disabled = false;
  }
});

document.querySelector("#copy-link").addEventListener("click", async () => {
  await navigator.clipboard.writeText(document.querySelector("#partner-link").value);
  document.querySelector("#dashboard-status").textContent = "Link copied.";
});
document.querySelector("#refresh").addEventListener("click", () => {
  const token = localStorage.getItem(tokenKey);
  if (token) void loadDashboard(token);
});
document.querySelector("#payout").addEventListener("click", async () => {
  const token = localStorage.getItem(tokenKey);
  const button = document.querySelector("#payout");
  const status = document.querySelector("#dashboard-status");
  if (!token) return;
  button.disabled = true;
  status.textContent = "Requesting payout…";
  try {
    const data = await callProgram({ action: "payout", token });
    status.textContent = `CA$${(Number(data.amountCents || 0) / 100).toFixed(2)} payout requested.`;
    await loadDashboard(token);
  } catch (error) {
    status.textContent = error.message.replaceAll("_", " ");
    await loadDashboard(token);
  }
});
document.querySelector("#forget").addEventListener("click", () => {
  localStorage.removeItem(tokenKey);
  history.replaceState(null, "", location.pathname);
  location.reload();
});

const referralCode = new URLSearchParams(location.search).get("ref")?.replace(/[^a-z0-9]/gi, "").toUpperCase();
if (referralCode) {
  document.querySelector("#headline").textContent = "A parent invited you to Hunny";
  document.querySelector("#subhead").textContent = "Build small moments of connection with your child.";
  document.querySelector("#program").classList.add("hidden");
  document.querySelector("#referral-card").classList.remove("hidden");
  document.querySelector("#referral-code").textContent = referralCode;
  void callProgram({
    action: "click",
    code: referralCode,
    visitorId: visitorId(),
    campaign: new URLSearchParams(location.search).get("utm_campaign") || "partner_link",
    referrerDomain: document.referrer ? new URL(document.referrer).hostname : "",
  }).catch(() => undefined);
} else {
  const hashToken = new URLSearchParams(location.hash.slice(1)).get("dashboard");
  const savedToken = hashToken || localStorage.getItem(tokenKey);
  if (savedToken) void loadDashboard(savedToken);
}
