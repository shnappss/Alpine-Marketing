import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      <Nav />
      <main className="flex-1 flex items-center justify-center pt-20 pb-20">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-2xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-20 h-20 rounded-full bg-secondary/15 border border-secondary/30 flex items-center justify-center mx-auto mb-8">
              <CheckCircle2 className="w-10 h-10 text-secondary" />
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Request received.
            </h1>
            <p className="text-xl text-muted-foreground mb-4 leading-relaxed">
              We'll review your details and be in touch within <strong className="text-white">1 business day</strong> to confirm your audit time.
            </p>
            <p className="text-muted-foreground mb-10">
              In the meantime, no action is needed on your side. This submission does not commit you to any purchase.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-all"
              >
                See Client Results <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-8 py-3.5 border border-white/20 text-white rounded-lg font-semibold hover:bg-white/5 transition-colors"
              >
                Back to Home
              </Link>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
