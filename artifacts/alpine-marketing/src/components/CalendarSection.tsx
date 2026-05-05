import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { CheckCircle2, Clock, Video, Zap, Shield } from "lucide-react";
import { sendWebhook } from "../lib/webhook";

const CALENDAR_ORIGIN = "https://app.inflowave.io";
const CALENDAR_SRC =
  "https://app.inflowave.io/book/f910d8c6-bf13-422c-a58a-810e0205f50c/discovery-call";

const TRUST_ICONS = [Clock, Video, Zap];

export default function CalendarSection() {
  const { t } = useTranslation();
  const benefits = t("booking.benefits", { returnObjects: true }) as string[];
  const trust = t("booking.trust", { returnObjects: true }) as string[];
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    function handleMessage(event: MessageEvent) {
      if (!event.origin.includes("inflowave.io")) return;
      const data =
        typeof event.data === "string"
          ? (() => { try { return JSON.parse(event.data); } catch { return null; } })()
          : event.data;
      if (!data) return;
      const isBooking =
        data.type === "booking" ||
        data.event === "booking_confirmed" ||
        data.event === "appointment_scheduled" ||
        data.status === "booked" ||
        JSON.stringify(data).toLowerCase().includes("booked") ||
        JSON.stringify(data).toLowerCase().includes("confirmed");

      if (isBooking) {
        sendWebhook({
          form: "calendar-booking",
          event: "appointment_booked",
          raw: data,
          notifyEmail: "roman@alpinemarketing.ch",
        });
      }
    }
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <section
      id="book-call"
      className="py-28 bg-[#07070F] border-t border-white/5 relative overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-primary/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[300px] bg-secondary/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <motion.span
            initial={{ opacity: 0, y: -8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-primary font-bold tracking-widest text-xs uppercase mb-5 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10"
          >
            {t("booking.eyebrow")}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold mb-5 leading-[1.1]"
          >
            {t("booking.title")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            {t("booking.subtitle")}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="bg-card border border-white/8 rounded-2xl p-7">
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-5">
                {t("booking.benefitsLabel")}
              </p>
              <ul className="space-y-4">
                {benefits.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-white/85 text-sm leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              {trust.map((item, i) => {
                const Icon = TRUST_ICONS[i] ?? Shield;
                return (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/8 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </div>
                );
              })}
            </div>

            <div className="border-t border-white/8 pt-6">
              <p className="text-xs text-muted-foreground leading-relaxed">
                {t("booking.social")}
              </p>
              <div className="flex items-center gap-1 mt-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 fill-amber-400" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="text-xs text-muted-foreground ml-2">5.0 · Swiss clients</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-3"
          >
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_60px_rgba(8,145,178,0.12)] bg-card">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
              <div className="px-6 py-4 border-b border-white/8 flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                <div className="w-2.5 h-2.5 rounded-full bg-secondary/70" />
                <span className="ml-3 text-xs text-muted-foreground font-medium">
                  {t("booking.calendarTitle")}
                </span>
              </div>
              <iframe
                ref={iframeRef}
                src={CALENDAR_SRC}
                style={{ width: "100%", height: "700px", border: "none" }}
                title={t("booking.calendarTitle")}
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
