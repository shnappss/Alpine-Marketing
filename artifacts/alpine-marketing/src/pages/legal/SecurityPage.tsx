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
      <p>[Placeholder: This section will be completed following an internal security review. It will cover access controls, encryption in transit and at rest, data minimization practices, and incident response procedures.]</p>
      <ul>
        <li>Access to client and prospect data is restricted on a need-to-know basis</li>
        <li>All connections to platforms we manage use encrypted protocols (HTTPS/TLS)</li>
        <li>We require service providers to maintain appropriate security standards</li>
        <li>Data is not stored longer than necessary for the purpose it was collected</li>
      </ul>

      <h2>3. Sub-Processors and Vendor Categories</h2>
      <p>
        We use the following categories of sub-processors to deliver our services. A full list is available on request.
      </p>
      <ul>
        <li><strong>CRM platform:</strong> GoHighLevel (lead management, pipeline automation, messaging)</li>
        <li><strong>AI and automation:</strong> Anthropic (Claude AI for lead qualification), n8n (workflow automation)</li>
        <li><strong>Analytics:</strong> [Placeholder — analytics provider, if and when deployed with consent]</li>
        <li><strong>Hosting / infrastructure:</strong> [Placeholder — hosting provider details]</li>
        <li><strong>Email delivery:</strong> [Placeholder — email delivery provider]</li>
      </ul>

      <h2>4. International Transfers</h2>
      <p>
        Some of our sub-processors are based outside Switzerland and the EEA. Where such transfers occur, we rely on appropriate safeguards such as Standard Contractual Clauses (SCCs) approved by the European Commission, or equivalent mechanisms under Swiss law.
      </p>

      <h2>5. Data Processing Agreements</h2>
      <p>
        Clients who wish to enter into a Data Processing Agreement with Alpine Marketing may request one by emailing <a href="mailto:privacy@alpinemarketing.ch">privacy@alpinemarketing.ch</a>.
      </p>

      <h2>6. Incident Reporting</h2>
      <p>
        In the event of a personal data breach that is likely to result in risk to individuals' rights and freedoms, we will notify the relevant supervisory authority and affected data subjects as required by applicable law, within the timeframes prescribed. [Security incident contact: privacy@alpinemarketing.ch — placeholder pending legal review.]
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
