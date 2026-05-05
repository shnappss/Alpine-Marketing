import { Router } from "express";

const router = Router();

const INFLOWAVE_URL =
  "https://api.inflowave.io/api/workflows/webhook/db26ab29-82d7-4cc8-94c4-f7c41c8f76fc";

router.post("/webhook/contact", async (req, res) => {
  try {
    const response = await fetch(INFLOWAVE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(req.body),
    });
    const text = await response.text();
    req.log.info({ status: response.status, body: text }, "webhook forwarded");
    res.status(response.status).send(text);
  } catch (err) {
    req.log.error({ err }, "webhook proxy error");
    res.status(502).json({ error: "Failed to reach webhook endpoint" });
  }
});

export default router;
