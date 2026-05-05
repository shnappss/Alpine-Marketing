import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLocation } from "wouter";
import { useTranslation } from "react-i18next";
import { sendWebhook } from "../lib/webhook";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../components/ui/form";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Button } from "../components/ui/button";

export default function BookAuditPage() {
  const { t } = useTranslation();
  const [, navigate] = useLocation();

  const formSchema = z.object({
    name: z.string().min(2, t("bookAuditPage.form.validation.name")),
    email: z.string().email(t("bookAuditPage.form.validation.email")),
    company: z.string().min(2, t("bookAuditPage.form.validation.company")),
    website: z.string().url(t("bookAuditPage.form.validation.website")).optional().or(z.literal("")),
    monthlyLeads: z.string().min(1, t("bookAuditPage.form.validation.monthlyLeads")),
    challenge: z.string().min(20, t("bookAuditPage.form.validation.challenge")),
    privacyConsent: z.boolean().refine(v => v === true, t("bookAuditPage.form.validation.consent")),
    marketingConsent: z.boolean().optional(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "", email: "", company: "", website: "",
      monthlyLeads: "", challenge: "",
      privacyConsent: false, marketingConsent: false,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    sendWebhook({ form: "book-audit", ...values });
    navigate("/thank-you");
  }

  const whatYouGet = t("bookAuditPage.whatYouGet", { returnObjects: true }) as string[];

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      <Nav />
      <main className="flex-1 pt-28 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-5xl mx-auto">

            <div>
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                className="text-primary font-bold tracking-widest text-sm uppercase mb-4 block"
              >
                {t("bookAuditPage.eyebrow")}
              </motion.p>
              <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl font-bold mb-6"
              >
                {t("bookAuditPage.title")}
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                className="text-muted-foreground text-lg mb-8 leading-relaxed"
              >
                {t("bookAuditPage.subtitle")}
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
                className="space-y-4 mb-10"
              >
                <p className="text-sm font-bold uppercase tracking-wider text-muted-foreground">{t("bookAuditPage.whatYouGetLabel")}</p>
                {whatYouGet.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <p className="text-white/80 text-sm">{item}</p>
                  </div>
                ))}
              </motion.div>

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
                className="bg-card border border-white/8 rounded-xl p-6"
              >
                <p className="text-sm font-semibold text-white mb-2">{t("bookAuditPage.whoForLabel")}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{t("bookAuditPage.whoForBody")}</p>
              </motion.div>
            </div>

            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}
              className="bg-card border border-white/10 rounded-2xl p-8 md:p-10"
            >
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <FormField control={form.control} name="name" render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("bookAuditPage.form.fullName")} *</FormLabel>
                        <FormControl><Input placeholder={t("bookAuditPage.form.fullNamePh")} {...field} className="bg-background border-white/10" /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <FormField control={form.control} name="email" render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("bookAuditPage.form.workEmail")} *</FormLabel>
                        <FormControl><Input placeholder={t("bookAuditPage.form.workEmailPh")} {...field} className="bg-background border-white/10" /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <FormField control={form.control} name="company" render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("bookAuditPage.form.company")} *</FormLabel>
                        <FormControl><Input placeholder={t("bookAuditPage.form.companyPh")} {...field} className="bg-background border-white/10" /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <FormField control={form.control} name="website" render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("bookAuditPage.form.website")}</FormLabel>
                        <FormControl><Input placeholder={t("bookAuditPage.form.websitePh")} {...field} className="bg-background border-white/10" /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                  </div>

                  <FormField control={form.control} name="monthlyLeads" render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("bookAuditPage.form.monthlyLeads")} *</FormLabel>
                      <FormControl>
                        <select
                          {...field}
                          className="w-full h-10 px-3 rounded-md bg-background border border-white/10 text-sm text-white focus:outline-none focus:ring-1 focus:ring-primary"
                        >
                          <option value="">{t("bookAuditPage.form.leadsDefault")}</option>
                          <option value="<20">{t("bookAuditPage.form.leadsOptions.lt20")}</option>
                          <option value="20-100">{t("bookAuditPage.form.leadsOptions.20to100")}</option>
                          <option value="100-500">{t("bookAuditPage.form.leadsOptions.100to500")}</option>
                          <option value="500+">{t("bookAuditPage.form.leadsOptions.500plus")}</option>
                        </select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />

                  <FormField control={form.control} name="challenge" render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("bookAuditPage.form.challenge")} *</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder={t("bookAuditPage.form.challengePh")}
                          className="min-h-[90px] bg-background border-white/10"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />

                  <FormField control={form.control} name="privacyConsent" render={({ field }) => (
                    <FormItem>
                      <div className="flex items-start gap-3">
                        <input
                          type="checkbox"
                          id="privacy-consent"
                          checked={field.value}
                          onChange={e => field.onChange(e.target.checked)}
                          className="mt-1 accent-primary flex-shrink-0"
                        />
                        <label htmlFor="privacy-consent" className="text-xs text-muted-foreground leading-relaxed cursor-pointer">
                          <span className="text-white font-medium">{t("bookAuditPage.form.requiredLabel")} </span>
                          {t("bookAuditPage.form.privacyPrefix")}
                          <a href="/legal/privacy" target="_blank" rel="noopener" className="text-primary underline">{t("bookAuditPage.form.privacyLink")}</a>
                          {t("bookAuditPage.form.privacySuffix")}
                        </label>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )} />

                  <FormField control={form.control} name="marketingConsent" render={({ field }) => (
                    <FormItem>
                      <div className="flex items-start gap-3">
                        <input
                          type="checkbox"
                          id="marketing-consent"
                          checked={!!field.value}
                          onChange={e => field.onChange(e.target.checked)}
                          className="mt-1 accent-primary flex-shrink-0"
                        />
                        <label htmlFor="marketing-consent" className="text-xs text-muted-foreground leading-relaxed cursor-pointer">
                          <span className="text-white/60">{t("bookAuditPage.form.optionalLabel")} </span>
                          {t("bookAuditPage.form.marketingText")}
                        </label>
                      </div>
                    </FormItem>
                  )} />

                  <Button
                    type="submit"
                    className="w-full h-12 text-base font-bold bg-primary hover:bg-primary/90 text-white shadow-[0_0_20px_rgba(8,145,178,0.3)] transition-all"
                    data-testid="button-submit-audit"
                  >
                    {t("bookAuditPage.form.submit")} <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>

                  <p className="text-[11px] text-muted-foreground text-center">
                    {t("bookAuditPage.form.footer")}
                  </p>
                </form>
              </Form>
            </motion.div>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
