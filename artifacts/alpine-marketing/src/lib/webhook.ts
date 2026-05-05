const PROXY_URL = "/api/webhook/contact";

export function sendWebhook(payload: Record<string, unknown>): void {
  const body = JSON.stringify({
    ...payload,
    source: "alpine-marketing-website",
    submittedAt: new Date().toISOString(),
  });
  console.log("[Alpine] Sending webhook →", PROXY_URL, JSON.parse(body));
  fetch(PROXY_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body,
  })
    .then(async (res) => {
      const text = await res.text();
      console.log(
        "[Alpine] Webhook response ←",
        res.status,
        res.ok ? "OK" : "ERROR",
        text
      );
    })
    .catch((err) => {
      console.error("[Alpine] Webhook network error ←", err);
    });
}
