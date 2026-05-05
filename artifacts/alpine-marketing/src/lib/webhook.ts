const WEBHOOK_URL =
  "https://api.inflowave.io/api/workflows/webhook/db26ab29-82d7-4cc8-94c4-f7c41c8f76fc";

export function sendWebhook(payload: Record<string, unknown>): void {
  fetch(WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...payload, source: "alpine-marketing-website", submittedAt: new Date().toISOString() }),
  }).catch(() => {});
}
