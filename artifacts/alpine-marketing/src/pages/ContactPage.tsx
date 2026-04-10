import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "../hooks/use-toast";
import { Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../components/ui/form";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Button } from "../components/ui/button";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  company: z.string().min(2, "Company name is required"),
  serviceInterest: z.string().optional(),
  message: z.string().min(10, "Message is required"),
  privacyConsent: z.boolean().refine(v => v === true, "You must agree to continue"),
  marketingConsent: z.boolean().optional(),
});

export default function ContactPage() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", company: "", serviceInterest: "", message: "", privacyConsent: false, marketingConsent: false },
  });

  function onSubmit() {
    toast({ title: "Message received", description: "We'll be in touch within 1 business day." });
    form.reset();
  }

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      <Nav />
      <main className="flex-1 pt-28 pb-20">
        <div className="container mx-auto px-4 md:px-6">

          <div className="text-center max-w-2xl mx-auto mb-16">
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="text-primary font-bold tracking-widest text-sm uppercase mb-4 block"
            >
              Get In Touch
            </motion.p>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
              className="text-5xl font-bold mb-4"
            >
              Let's talk systems.
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              className="text-muted-foreground text-lg"
            >
              Use the form below for general enquiries. If you'd like a structured funnel review, use the{" "}
              <a href="/book-audit" className="text-primary underline">Book Audit</a> page.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-5xl mx-auto">
            {/* Contact info */}
            <div className="lg:col-span-2 space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-white text-sm mb-1">Email</p>
                  <a href="mailto:roman@alpinemarketing.ch" className="text-muted-foreground hover:text-white transition-colors text-sm">
                    roman@alpinemarketing.ch
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-white text-sm mb-1">Phone &amp; Location</p>
                  <a href="tel:+41795255504" className="text-muted-foreground hover:text-white transition-colors text-sm block">
                    +41 79 525 55 04
                  </a>
                  <p className="text-muted-foreground text-sm">Zurich, Switzerland</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-white text-sm mb-1">Response time</p>
                  <p className="text-muted-foreground text-sm">Within 1 business day</p>
                  <p className="text-muted-foreground text-xs mt-1">Siladii Alpine Marketing</p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3 bg-card border border-white/10 rounded-2xl p-8">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <FormField control={form.control} name="name" render={({ field }) => (
                      <FormItem><FormLabel>Name *</FormLabel>
                        <FormControl><Input placeholder="Jane Smith" {...field} className="bg-background border-white/10" /></FormControl>
                        <FormMessage /></FormItem>
                    )} />
                    <FormField control={form.control} name="email" render={({ field }) => (
                      <FormItem><FormLabel>Email *</FormLabel>
                        <FormControl><Input placeholder="jane@company.com" {...field} className="bg-background border-white/10" /></FormControl>
                        <FormMessage /></FormItem>
                    )} />
                  </div>
                  <FormField control={form.control} name="company" render={({ field }) => (
                    <FormItem><FormLabel>Company *</FormLabel>
                      <FormControl><Input placeholder="Acme GmbH" {...field} className="bg-background border-white/10" /></FormControl>
                      <FormMessage /></FormItem>
                  )} />
                  <FormField control={form.control} name="serviceInterest" render={({ field }) => (
                    <FormItem><FormLabel>Service interest</FormLabel>
                      <FormControl>
                        <select {...field} className="w-full h-10 px-3 rounded-md bg-background border border-white/10 text-sm text-white focus:outline-none focus:ring-1 focus:ring-primary">
                          <option value="">Select (optional)</option>
                          <option>Performance Marketing</option>
                          <option>CRM + Automation</option>
                          <option>Reporting & Analytics</option>
                          <option>Content Funnels</option>
                          <option>Full-system audit</option>
                        </select>
                      </FormControl>
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="message" render={({ field }) => (
                    <FormItem><FormLabel>Message *</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Tell us about your situation..." className="min-h-[100px] bg-background border-white/10" {...field} />
                      </FormControl>
                      <FormMessage /></FormItem>
                  )} />

                  <FormField control={form.control} name="privacyConsent" render={({ field }) => (
                    <FormItem>
                      <div className="flex items-start gap-3">
                        <input type="checkbox" id="pc" checked={field.value} onChange={e => field.onChange(e.target.checked)} className="mt-1 accent-primary flex-shrink-0" />
                        <label htmlFor="pc" className="text-xs text-muted-foreground leading-relaxed cursor-pointer">
                          <span className="text-white font-medium">Required: </span>
                          I have read the{" "}
                          <a href="/legal/privacy" className="text-primary underline">Privacy Notice</a>
                          {" "}and consent to my information being processed to respond to this enquiry.
                        </label>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )} />

                  <FormField control={form.control} name="marketingConsent" render={({ field }) => (
                    <FormItem>
                      <div className="flex items-start gap-3">
                        <input type="checkbox" id="mc" checked={!!field.value} onChange={e => field.onChange(e.target.checked)} className="mt-1 accent-primary flex-shrink-0" />
                        <label htmlFor="mc" className="text-xs text-muted-foreground leading-relaxed cursor-pointer">
                          <span className="text-white/60">Optional: </span>
                          I'd like to receive email updates and insights from Alpine Marketing.
                        </label>
                      </div>
                    </FormItem>
                  )} />

                  <Button type="submit" className="w-full h-12 font-bold bg-primary hover:bg-primary/90 text-white shadow-[0_0_20px_rgba(61,128,204,0.3)] transition-all">
                    Send Message <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
