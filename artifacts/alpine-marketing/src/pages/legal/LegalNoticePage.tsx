import LegalPageTemplate from "../../components/LegalPageTemplate";

export default function LegalNoticePage() {
  return (
    <LegalPageTemplate title="Legal Notice" lastUpdated="April 2026">
      <p>
        This Legal Notice (also referred to as an Impressum) provides the mandatory legal information required under Swiss law and applicable EU regulations for the operator of this website.
      </p>

      <h2>Website Operator</h2>
      <p>
        <strong>Trading name:</strong> Alpine Marketing<br />
        <strong>Registered legal entity:</strong> [Legal entity name — placeholder]<br />
        <strong>Legal form:</strong> [e.g. GmbH, Einzelfirma — placeholder]<br />
        <strong>Registered address:</strong> [Full address — Zurich, Switzerland — placeholder]<br />
        <strong>Commercial register number:</strong> [CHE-xxx.xxx.xxx — placeholder]<br />
        <strong>VAT number:</strong> [CHE-xxx.xxx.xxx MWST — placeholder]
      </p>

      <h2>Contact Details</h2>
      <p>
        <strong>Email:</strong> <a href="mailto:info@alpinemarketing.ch">info@alpinemarketing.ch</a><br />
        <strong>Phone:</strong> [placeholder]<br />
        <strong>Website:</strong> alpinemarketing.ch
      </p>

      <h2>Authorized Representative</h2>
      <p>
        [Name of authorized representative — placeholder]
      </p>

      <h2>Content Responsibility</h2>
      <p>
        The content of this website has been created with care. However, Alpine Marketing does not guarantee the accuracy, completeness, or timeliness of the information provided. We reserve the right to modify, supplement, or delete content without prior notice.
      </p>

      <h2>Copyright</h2>
      <p>
        All content published on this website — including text, images, graphics, and design — is protected by copyright law. Reproduction, distribution, or use of any content without prior written consent is prohibited unless expressly permitted by law.
      </p>

      <h2>Disclaimer of Liability</h2>
      <p>
        Despite careful control of content, Alpine Marketing assumes no liability for the content of external links. The operators of linked sites are solely responsible for their content. For further details, see our <a href="/legal/disclaimer">Disclaimer</a>.
      </p>

      <h2>Jurisdiction</h2>
      <p>
        This website is operated from Switzerland. Swiss law applies. [Jurisdiction clause to be reviewed by legal counsel for cross-border service delivery.]
      </p>
    </LegalPageTemplate>
  );
}
