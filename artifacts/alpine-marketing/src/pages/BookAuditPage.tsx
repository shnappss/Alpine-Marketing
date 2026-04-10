import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLocation } from "wouter";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../components/ui/form";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Button } from "../components/ui/button";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid work email is required"),
  company: z.string().min(2, "Company name is required"),
  website: z.string().url("Enter a valid URL (include https://)").optional().or(z.literal("")),
  monthlyLeads: z.string().min(1, "Please select an option"),
  challenge: z.string().min(20, "Please describe your challenge — at least a sentence"),
  privacyConsent: z.boolean().refine(v => v === true, "You must agree to continue"),
  marketingConsent: z.boolean().optional(),
});

const WHAT_YOU_GET = [
  "A map of where your current funnel loses leads and revenue",
  "An honest assessment of which gaps are worth fixing first",
  "A sense of what a systematized engine would look like for your business",
];

export default function BookAuditPage() {
  const [, navigate] = useLocation();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "", email: "", company: "", website: "",
      monthlyLeads: "", challenge: "",
      privacyConsent: false, marketingConsent: false,
    },
  });

  function onSubmit() {
    navigate("/thank-you");
  }

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      <Nav />
      <main className="flex-1 pt-28 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-5xl mx-auto">

            {/* Left — context */}
            <div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-primary font-bold tracking-widest text-sm uppercase mb-4 block"
              >
                Free Funnel Audit
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl font-bold mb-6"
              >
                See exactly where your system leaks.
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-muted-foreground text-lg mb-8 leading-relaxed"
              >
                In a 30-minute audit call, we review your acquisition setup and show you the gaps — before asking for anything in return.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="space-y-4 mb-10"
              >
                <p className="text-sm font-bold uppercase tracking-wider text-muted-foreground">What you get:</p>
                {WHAT_YOU_GET.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <p className="text-white/80 text-sm">{item}</p>
                  </div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="bg-card border border-white/8 rounded-xl p-6"
              >
                <p className="text-sm font-semibold text-white mb-2">Who this is for:</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Service businesses generating leads but converting too few. Companies spending on ads but unsure what's actually working. SMBs ready to build a system, not buy another tactic.
                </p>
              </motion.div>
            </div>

            {/* Right — form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-card border border-white/10 rounded-2xl p-8 md:p-10"
            >
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <FormField control={form.control} name="name" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name *</FormLabel>
                        <FormControl><Input placeholder="Jane Smith" {...field} className="bg-background border-white/10" /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <FormField control={form.control} name="email" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Work Email *</FormLabel>
                        <FormControl><Input placeholder="jane@company.com" {...field} className="bg-background border-white/10" /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <FormField control={form.control} name="company" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company *</FormLabel>
                        <FormControl><Input placeholder="Acme GmbH" {...field} className="bg-background border-white/10" /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <FormField control={form.control} name="website" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Website</FormLabel>
                        <FormControl><Input placeholder="https://acme.com" {...field} className="bg-background border-white/10" /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                  </div>

                  <FormField control={form.control} name="monthlyLeads" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Monthly leads (approx.) *</FormLabel>
                      <FormControl>
                        <select
                          {...field}
                          className="w-full h-10 px-3 rounded-md bg-background border border-white/10 text-sm text-white focus:outline-none focus:ring-1 focus:ring-primary"
                        >
                          <option value="">Select...</option>
                          <option value="<20">Fewer than 20</option>
                          <option value="20-100">20–100</option>
                          <option value="100-500">100–500</option>
                          <option value="500+">500+</option>
                        </select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />

                  <FormField control={form.control} name="challenge" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Biggest acquisition challenge *</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="E.g. We generate leads but conversion is low and we don't know where they drop off..."
                          className="min-h-[90px] bg-background border-white/10"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />

                  {/* Consent — required */}
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
                          <span className="text-white font-medium">Required: </span>
                          I have read the{" "}
                          <a href="/legal/privacy" target="_blank" rel="noopener" className="text-primary underline">Privacy Notice</a>
                          {" "}and agree that Alpine Marketing may process my information to respond to my request.
                        </label>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )} />

                  {/* Consent — optional marketing */}
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
                          <span className="text-white/60">Optional: </span>
                          I would like to receive marketing updates, insights, and offers by email.
                        </label>
                      </div>
                    </FormItem>
                  )} />

                  <Button
                    type="submit"
                    className="w-full h-12 text-base font-bold bg-primary hover:bg-primary/90 text-white shadow-[0_0_20px_rgba(8,145,178,0.3)] transition-all"
                    data-testid="button-submit-audit"
                  >
                    Request My Free Audit <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>

                  <p className="text-[11px] text-muted-foreground text-center">
                    Submitting this form does not commit you to any purchase. You will hear from us within 1 business day.
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
