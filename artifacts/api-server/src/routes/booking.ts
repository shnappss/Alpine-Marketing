import { Router } from "express";
import nodemailer from "nodemailer";

const router = Router();

router.post("/booking-notification", async (req, res) => {
  const { name, email, date, time, raw } = req.body ?? {};

  const smtpHost = process.env.SMTP_HOST;
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const smtpPort = parseInt(process.env.SMTP_PORT ?? "587", 10);

  if (!smtpHost || !smtpUser || !smtpPass) {
    req.log.warn("SMTP not configured — booking notification skipped");
    res.status(202).json({ queued: false, reason: "smtp_not_configured" });
    return;
  }

  try {
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: { user: smtpUser, pass: smtpPass },
    });

    await transporter.sendMail({
      from: `"Alpine Marketing" <${smtpUser}>`,
      to: "roman@alpinemarketing.ch",
      subject: `📅 New Discovery Call Booked${name ? ` — ${name}` : ""}`,
      html: `
        <div style="font-family:sans-serif;max-width:520px;margin:0 auto;color:#111;">
          <h2 style="color:#0891b2;margin-bottom:4px;">New Discovery Call Booked</h2>
          <p style="color:#666;margin-top:0;">via Alpine Marketing website calendar</p>
          <hr style="border:none;border-top:1px solid #eee;margin:20px 0;">
          ${name  ? `<p><strong>Name:</strong> ${name}</p>`  : ""}
          ${email ? `<p><strong>Email:</strong> ${email}</p>` : ""}
          ${date  ? `<p><strong>Date:</strong> ${date}</p>`  : ""}
          ${time  ? `<p><strong>Time:</strong> ${time}</p>`  : ""}
          ${raw   ? `<details><summary style="cursor:pointer;color:#0891b2;">Raw event data</summary><pre style="background:#f5f5f5;padding:12px;border-radius:6px;font-size:12px;overflow:auto;">${JSON.stringify(raw, null, 2)}</pre></details>` : ""}
          <hr style="border:none;border-top:1px solid #eee;margin:20px 0;">
          <p style="font-size:12px;color:#999;">Sent by Alpine Marketing website — alpine-marketing-website</p>
        </div>`,
    });

    req.log.info({ to: "roman@alpinemarketing.ch" }, "booking notification sent");
    res.json({ sent: true });
  } catch (err) {
    req.log.error({ err }, "booking notification email failed");
    res.status(500).json({ error: "email_send_failed" });
  }
});

export default router;
