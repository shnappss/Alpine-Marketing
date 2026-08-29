import LegalPageTemplate from "../../components/LegalPageTemplate";
import { Link } from "wouter";

export default function CookiesPage() {
  return (
    <LegalPageTemplate title="Cookie Notice" lastUpdated="April 2026">
      <p>
        This Cookie Notice explains what cookies and similar technologies we use on this website, why we use them, and how you can control them.
      </p>

      <h2>1. What Are Cookies?</h2>
      <p>
        Cookies are small text files stored on your device when you visit a website. Similar technologies include local storage, session storage, and tracking pixels. They are used to make websites function, remember preferences, and gather analytics data.
      </p>

      <h2>2. Cookie Categories</h2>

      <h3>Strictly Necessary</h3>
      <p>
        These cookies are required for the website to function and cannot be disabled. They include session management and security tokens. They do not track you for advertising purposes.
      </p>

      <h3>Preference Cookies</h3>
      <p>
        These remember your choices and settings — such as your cookie consent preferences. They improve your experience but are not essential to the site's operation.
      </p>
      <p><strong>Legal basis:</strong> Your consent</p>

      <h3>Analytics Cookies</h3>
      <p>
        These help us understand how visitors use the site — which pages are visited, how long, and from where. Analytics scripts are <strong>not loaded before you give consent</strong>. We use them only to improve the site, not to build advertising profiles.
      </p>
      <p><strong>Legal basis:</strong> Your consent</p>

      <h3>Marketing Cookies</h3>
      <p>
        These are used to deliver relevant advertising. Marketing tracking pixels (e.g. Meta Pixel, LinkedIn Insight Tag) are <strong>never loaded before explicit consent</strong> in our default strict mode. If you are in the EU or Switzerland, no marketing cookie will be set without your prior, informed, and freely given consent.
      </p>
      <p><strong>Legal basis:</strong> Your consent</p>

      <h2>3. Cookies and Scripts We Use</h2>
      <p>The following table lists the cookies and tracking technologies currently deployed on this site:</p>

      <div className="not-prose overflow-x-auto my-4">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-white/10 text-left">
              <th className="py-2 pr-4 text-white font-semibold">Name / Vendor</th>
              <th className="py-2 pr-4 text-white font-semibold">Category</th>
              <th className="py-2 pr-4 text-white font-semibold">Purpose</th>
              <th className="py-2 pr-4 text-white font-semibold">Duration</th>
              <th className="py-2 text-white font-semibold">Data Destination</th>
            </tr>
          </thead>
          <tbody className="text-muted-foreground">
            <tr className="border-b border-white/5">
              <td className="py-2 pr-4">am_cookie_consent</td>
              <td className="py-2 pr-4">Strictly Necessary</td>
              <td className="py-2 pr-4">Stores your cookie preference choices</td>
              <td className="py-2 pr-4">1 year</td>
              <td className="py-2">Local (browser only)</td>
            </tr>
            <tr className="border-b border-white/5">
              <td className="py-2 pr-4">Plausible Analytics</td>
              <td className="py-2 pr-4">Analytics</td>
              <td className="py-2 pr-4">Privacy-first, cookieless page view analytics. No personal data stored or shared.</td>
              <td className="py-2 pr-4">Session only</td>
              <td className="py-2">EU (Ireland)</td>
            </tr>
            <tr className="border-b border-white/5">
              <td className="py-2 pr-4">Meta Pixel</td>
              <td className="py-2 pr-4">Marketing</td>
              <td className="py-2 pr-4">Conversion tracking for Meta (Facebook/Instagram) ad campaigns. Loaded only with consent.</td>
              <td className="py-2 pr-4">180 days</td>
              <td className="py-2">USA (Meta Platforms)</td>
            </tr>
            <tr className="border-b border-white/5">
              <td className="py-2 pr-4">LinkedIn Insight Tag</td>
              <td className="py-2 pr-4">Marketing</td>
              <td className="py-2 pr-4">B2B conversion tracking for LinkedIn ad campaigns. Loaded only with consent.</td>
              <td className="py-2 pr-4">90 days</td>
              <td className="py-2">USA (LinkedIn/Microsoft)</td>
            </tr>
            <tr>
              <td className="py-2 pr-4">Google Ads Tag</td>
              <td className="py-2 pr-4">Marketing</td>
              <td className="py-2 pr-4">Conversion tracking for Google Search and Display campaigns. Loaded only with consent.</td>
              <td className="py-2 pr-4">90 days</td>
              <td className="py-2">USA (Google LLC)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>4. How to Manage Your Preferences</h2>
      <p>
        You can change your cookie preferences at any time by visiting our{" "}
        <Link href="/legal/privacy-choices">Privacy Choices</Link> page. You can also use the cookie settings panel that appears when you first visit the site.
      </p>
      <p>
        You can also manage cookies at the browser level using your browser's settings, developer tools, or third-party browser extensions. Note that blocking all cookies may affect the functionality of some parts of this site.
      </p>

      <h2>5. Changes to This Notice</h2>
      <p>
        We will update this Cookie Notice when we add or remove tracking scripts or change how we use cookies. The "last updated" date at the top of the page reflects the most recent revision.
      </p>

      <h2>6. Contact</h2>
      <p>
        Questions about our cookie practices: <a href="mailto:roman@alpinemarketing.ch">roman@alpinemarketing.ch</a>
      </p>
    </LegalPageTemplate>
  );
}
