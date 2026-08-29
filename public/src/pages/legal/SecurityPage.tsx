import LegalPageTemplate from "../../components/LegalPageTemplate";

export default function SecurityPage() {
  return (
    <LegalPageTemplate title="Security & Data Processing" lastUpdated="April 2026">
      <p>
        This page explains Alpine Marketing's approach to data security and our role as a data controller and/or processor across our services. Given that we operate CRM, automation, and marketing platforms on behalf of our clients, we take our data responsibilities seriously.
      </p>

      <h2>1. Controller vs. Processor Roles</h2>
      <p>
        Alpine Marketing acts in different capacities depending on the context:
      </p>
      <ul>
        <li>
          <strong>Data Controller:</strong> When we collect and use data directly — for example, when you fill in a contact form on this site, subscribe to email updates, or book an audit. In this role, we determine the purpose and means of processing.
        </li>
        <li>
          <strong>Data Processor:</strong> When we manage CRM systems, marketing automation platforms, and lead databases on behalf of our clients. In this role, we process data strictly according to our clients' instructions. The client remains the data controller.
        </li>
      </ul>
      <p>
        Where we act as a processor, we require a Data Processing Agreement (DPA) with our clients. DPAs are available on request.
      </p>

      <h2>2. Data Security Practices</h2>
      <p>We implement the following security measures as standard:</p>
      <ul>
        <li>Access to client and prospect data is restricted on a strict need-to-know basis using role-based access controls</li>
        <li>All connections to platforms we manage use encrypted protocols (HTTPS/TLS 1.2 or higher)</li>
        <li>Data at rest is protected via encryption at the infrastructure and platform level (AES-256 where applicable)</li>
        <li>We require all sub-processors to maintain appropriate technical and organizational security measures</li>
        <li>Data is not stored longer than necessary for the purpose it was collected</li>
        <li>We conduct periodic reviews of access rights and platform configurations</li>
        <li>Staff with access to personal data receive appropriate data protection guidance</li>
      </ul>

      <h2>3. Sub-Processors and Vendor Categories</h2>
      <p>
        We use the following categories of sub-processors to deliver our services. A full list including DPA and transfer mechanism details is available on request.
      </p>
      <ul>
        <li><strong>CRM platform:</strong> GoHighLevel (lead management, pipeline automation, SMS/email/WhatsApp messaging)</li>
        <li><strong>AI and automation:</strong> Anthropic (Claude AI for lead qualification and response), n8n (workflow automation)</li>
        <li><strong>Hosting / infrastructure:</strong> Cloudflare (CDN, DNS, DDoS protection, edge delivery)</li>
        <li><strong>Email delivery:</strong> Mailgun (transactional email delivery for system notifications)</li>
        <li><strong>Analytics:</strong> Plausible Analytics (privacy-first, cookieless, consent-not-required — no personal data transferred to third parties)</li>
        <li><strong>Advertising platforms:</strong> Meta Business (ad delivery and conversion tracking, consent-gated), Google Ads, LinkedIn Campaign Manager</li>
      </ul>

      <h2>4. International Transfers</h2>
      <p>
        Some of our sub-processors are based outside Switzerland and the EEA. Where such transfers occur, we rely on appropriate safeguards such as Standard Contractual Clauses (SCCs) approved by the European Commission, or equivalent mechanisms under Swiss law (revDSG Art. 16). Each sub-processor listed above operates under their own DPA which includes the applicable transfer mechanism.
      </p>

      <h2>5. Data Processing Agreements</h2>
      <p>
        Clients who wish to enter into a Data Processing Agreement with Alpine Marketing may request one by emailing <a href="mailto:roman@alpinemarketing.ch">roman@alpinemarketing.ch</a>. We aim to issue DPAs within 5 business days of a signed client agreement.
      </p>

      <h2>6. Incident Reporting</h2>
      <p>
        In the event of a personal data breach that is likely to result in risk to individuals' rights and freedoms, we will notify the relevant supervisory authority within 72 hours of becoming aware, as required by GDPR Art. 33 and revDSG Art. 24. Affected data subjects will be notified without undue delay where the breach is likely to result in a high risk to their rights and freedoms.
      </p>
      <p>
        To report a suspected security incident: <a href="mailto:roman@alpinemarketing.ch">roman@alpinemarketing.ch</a>
      </p>

      <h2>7. Contact</h2>
      <p>
        Security and data processing enquiries:<br />
        <a href="mailto:roman@alpinemarketing.ch">roman@alpinemarketing.ch</a><br />
        <a href="tel:+41795255504">+41 79 525 55 04</a><br />
        Siladii Alpine Marketing, Zurich, Switzerland
      </p>
    </LegalPageTemplate>
  );
}
