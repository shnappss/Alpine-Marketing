import LegalPageTemplate from "../../components/LegalPageTemplate";

export default function AccessibilityPage() {
  return (
    <LegalPageTemplate title="Accessibility Statement" lastUpdated="April 2026">
      <p>
        Alpine Marketing is committed to making this website accessible to the widest possible audience, including people with disabilities.
      </p>

      <h2>1. Our Commitment</h2>
      <p>
        We aim to design and build this site in a way that is inclusive, usable, and perceivable by all visitors. We use semantic HTML, sufficient colour contrast, visible focus states, keyboard navigation support, and descriptive alt text as standard practice.
      </p>

      <h2>2. Design Target</h2>
      <p>
        We aim for conformance with the Web Content Accessibility Guidelines (WCAG) 2.1, Level AA. This is a design target, not a certified compliance claim. We continue to work toward it as the site evolves.
      </p>

      <h2>3. Known Limitations</h2>
      <p>
        [Placeholder: List any known accessibility gaps here once a formal review is completed. Examples might include: complex SVG animations that may not convey full information to screen reader users; video content without captions.]
      </p>

      <h2>4. Contact for Accessibility Issues</h2>
      <p>
        If you experience any difficulty accessing content on this site, or if you have suggestions for improvement, please contact us:
      </p>
      <p>
        Email: <a href="mailto:info@alpinemarketing.ch">info@alpinemarketing.ch</a><br />
        Subject line: Accessibility Issue
      </p>
      <p>
        We aim to respond to accessibility enquiries within [X business days — to be determined].
      </p>

      <h2>5. Third-Party Content</h2>
      <p>
        Some parts of this site may include embedded content from third-party providers (e.g. calendar booking tools, video players). We cannot fully control the accessibility of third-party embedded content, but we choose providers with a stated commitment to accessibility where possible.
      </p>

      <h2>6. Updates</h2>
      <p>
        We review and update this Accessibility Statement as part of our ongoing website development. The "last updated" date reflects the most recent review.
      </p>
    </LegalPageTemplate>
  );
}
