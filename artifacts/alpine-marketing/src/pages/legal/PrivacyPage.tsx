import LegalPageTemplate from "../../components/LegalPageTemplate";

export default function PrivacyPage() {
  return (
    <LegalPageTemplate title="Privacy Notice" lastUpdated="April 2026">
      <p>
        This Privacy Notice explains how Alpine Marketing ("we", "us", "our") collects, uses, and protects personal data when you visit this website or contact us. We process personal data in accordance with the Swiss Federal Act on Data Protection (revDSG), the EU General Data Protection Regulation (GDPR) where applicable, and other relevant laws.
      </p>

      <h2>1. Controller Identity</h2>
      <p>
        <strong>Trading name:</strong> Alpine Marketing<br />
        <strong>Registered legal entity:</strong> Siladii Alpine Marketing<br />
        <strong>Address:</strong> Zurich, Switzerland<br />
        <strong>Phone:</strong> <a href="tel:+41795255504">+41 79 525 55 04</a><br />
        <strong>Email:</strong> <a href="mailto:roman@alpinemarketing.ch">roman@alpinemarketing.ch</a><br />
        <strong>Data Protection contact:</strong> <a href="mailto:roman@alpinemarketing.ch">roman@alpinemarketing.ch</a>
      </p>

      <h2>2. Personal Data We Collect</h2>
      <p>We may collect the following categories of personal data:</p>
      <ul>
        <li><strong>Contact and identity data:</strong> name, email address, company name, phone number (if provided)</li>
        <li><strong>Communication data:</strong> messages, enquiry content, service interests</li>
        <li><strong>Technical data:</strong> IP address, browser type, referring URLs, session data (strictly necessary cookies only, unless consent is given)</li>
        <li><strong>Marketing preferences:</strong> consent status, opt-in/opt-out records with timestamps</li>
        <li><strong>Attribution data:</strong> UTM parameters and source tracking where you have consented to analytics cookies</li>
      </ul>

      <h2>3. Purposes and Legal Bases</h2>
      <ul>
        <li><strong>Responding to enquiries and audit requests</strong> — Legal basis: performance of a pre-contractual step at your request; or legitimate interests (responding to business enquiries)</li>
        <li><strong>Operating the website (strictly necessary cookies)</strong> — Legal basis: legitimate interest in providing a functioning website</li>
        <li><strong>Email marketing communications</strong> — Legal basis: your explicit consent (opt-in checkbox). You may withdraw at any time.</li>
        <li><strong>Analytics and performance measurement</strong> — Legal basis: your consent (via cookie settings). No analytics scripts load before consent in strict mode.</li>
        <li><strong>Legal and regulatory compliance</strong> — Legal basis: legal obligation</li>
      </ul>

      <h2>4. Recipients and Service Providers</h2>
      <p>
        We may share your personal data with trusted service providers acting as data processors on our behalf, including: CRM platform providers (GoHighLevel), email and communication tools (Mailgun), analytics platforms (consent-gated, Plausible Analytics), and hosting/infrastructure providers (Cloudflare). A full list of sub-processors is available on request.
      </p>
      <p>
        We do not sell personal data to third parties for their own marketing purposes.
      </p>

      <h2>5. International Data Transfers</h2>
      <p>
        Some of our service providers are located outside Switzerland and the EEA. Where we transfer data internationally, we rely on appropriate safeguards including Standard Contractual Clauses (SCCs) approved by the European Commission, and equivalent mechanisms under Swiss law (revDSG Art. 16). GoHighLevel, Anthropic, and n8n each operate under their own DPAs which include SCCs or equivalent transfer mechanisms.
      </p>

      <h2>6. Retention</h2>
      <p>
        We retain personal data only as long as necessary for the purpose it was collected, or as required by law:
      </p>
      <ul>
        <li><strong>Enquiry and contact data:</strong> up to 24 months from last contact, unless a contract is entered into</li>
        <li><strong>Contractual and billing records:</strong> 10 years in accordance with Swiss commercial law (OR Art. 958f)</li>
        <li><strong>Marketing consent records:</strong> duration of the marketing relationship plus 3 years for compliance documentation</li>
        <li><strong>Analytics data:</strong> aggregated data retained up to 13 months; session-level data anonymized or deleted within 26 months</li>
      </ul>

      <h2>7. Your Rights</h2>
      <p>
        Depending on your jurisdiction, you may have the right to: access your personal data; correct inaccurate data; request deletion ("right to be forgotten"); object to processing; restrict processing; data portability; and withdraw consent at any time without affecting the lawfulness of prior processing.
      </p>
      <p>
        To exercise your rights, visit our <a href="/legal/data-requests">Data Requests</a> page or email <a href="mailto:roman@alpinemarketing.ch">roman@alpinemarketing.ch</a>. We will respond within 30 days.
      </p>

      <h2>8. Complaints</h2>
      <p>
        If you believe your data rights have been violated, you have the right to lodge a complaint with the relevant supervisory authority — in Switzerland, the Federal Data Protection and Information Commissioner (FDPIC); in the EU, your local Data Protection Authority.
      </p>

      <h2>9. Automated Decision-Making</h2>
      <p>
        We do not use fully automated decision-making processes that produce legal or similarly significant effects.
      </p>

      <h2>10. Updates to This Notice</h2>
      <p>
        We may update this Privacy Notice from time to time. The "last updated" date at the top of this page will reflect any changes. We recommend reviewing this page periodically.
      </p>
    </LegalPageTemplate>
  );
}
