import LegalPageTemplate from "../../components/LegalPageTemplate";
import { Link } from "wouter";

export default function LegalNoticePage() {
  return (
    <LegalPageTemplate title="Legal Notice" lastUpdated="April 2026">
      <p>
        This Legal Notice (also referred to as an Impressum) provides the mandatory legal information required under Swiss law and applicable EU regulations for the operator of this website.
      </p>

      <h2>Website Operator</h2>
      <p>
        <strong>Trading name:</strong> Alpine Marketing<br />
        <strong>Registered legal entity:</strong> Siladii Alpine Marketing<br />
        <strong>Legal form:</strong> Sole proprietorship (Einzelunternehmen)<br />
        <strong>Registered address:</strong> Zurich, Switzerland<br />
        <strong>Commercial register number:</strong> Registration pending<br />
        <strong>VAT number:</strong> Registration pending
      </p>

      <h2>Contact Details</h2>
      <p>
        <strong>Phone:</strong> <a href="tel:+41795255504">+41 79 525 55 04</a><br />
        <strong>Email:</strong> <a href="mailto:roman@alpinemarketing.ch">roman@alpinemarketing.ch</a><br />
        <strong>Website:</strong> alpinemarketing.ch
      </p>

      <h2>Authorized Representative</h2>
      <p>
        Roman — Siladii Alpine Marketing, Zurich, Switzerland
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
        Despite careful control of content, Alpine Marketing assumes no liability for the content of external links. The operators of linked sites are solely responsible for their content. For further details, see our <Link href="/legal/disclaimer">Disclaimer</Link>.
      </p>

      <h2>Jurisdiction</h2>
      <p>
        This website is operated from Switzerland. These terms are governed by the laws of Switzerland. Any disputes arising in connection with this website or these terms shall be subject to the exclusive jurisdiction of the courts of Zurich, Switzerland.
      </p>
    </LegalPageTemplate>
  );
}
