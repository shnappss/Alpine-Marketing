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

      <h2>3. Script and Vendor Details</h2>
      <p>[Vendor table — to be completed with specific scripts, vendors, cookie names, durations, and data destination. This list will be maintained and updated whenever a new tracking vendor is added.]</p>

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
        Questions about our cookie practices: <a href="mailto:privacy@alpinemarketing.ch">privacy@alpinemarketing.ch</a>
      </p>
    </LegalPageTemplate>
  );
}
