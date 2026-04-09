import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import CookieConsent from "@/components/CookieConsent";

import Home from "@/pages/Home";
import ServicesPage from "@/pages/ServicesPage";
import AboutPage from "@/pages/AboutPage";
import ContactPage from "@/pages/ContactPage";
import BookAuditPage from "@/pages/BookAuditPage";
import ThankYouPage from "@/pages/ThankYouPage";

import PrivacyPage from "@/pages/legal/PrivacyPage";
import CookiesPage from "@/pages/legal/CookiesPage";
import TermsPage from "@/pages/legal/TermsPage";
import DisclaimerPage from "@/pages/legal/DisclaimerPage";
import AccessibilityPage from "@/pages/legal/AccessibilityPage";
import PrivacyChoicesPage from "@/pages/legal/PrivacyChoicesPage";
import DataRequestsPage from "@/pages/legal/DataRequestsPage";
import SecurityPage from "@/pages/legal/SecurityPage";
import LegalNoticePage from "@/pages/legal/LegalNoticePage";

import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/services" component={ServicesPage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/book-audit" component={BookAuditPage} />
      <Route path="/thank-you" component={ThankYouPage} />

      {/* Legal pages */}
      <Route path="/legal/privacy" component={PrivacyPage} />
      <Route path="/legal/cookies" component={CookiesPage} />
      <Route path="/legal/terms" component={TermsPage} />
      <Route path="/legal/disclaimer" component={DisclaimerPage} />
      <Route path="/legal/accessibility" component={AccessibilityPage} />
      <Route path="/legal/privacy-choices" component={PrivacyChoicesPage} />
      <Route path="/legal/data-requests" component={DataRequestsPage} />
      <Route path="/legal/security" component={SecurityPage} />
      <Route path="/legal/notice" component={LegalNoticePage} />

      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
          <CookieConsent />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
