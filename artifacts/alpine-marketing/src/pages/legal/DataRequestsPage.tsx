import { useState } from "react";
import LegalPageTemplate from "../../components/LegalPageTemplate";

const REQUEST_TYPES = [
  { value: "access",      label: "Access — I want to know what data you hold about me" },
  { value: "deletion",    label: "Deletion — I want you to delete my personal data" },
  { value: "correction",  label: "Correction — I want to correct inaccurate data" },
  { value: "objection",   label: "Objection — I want to object to a specific processing activity" },
  { value: "portability", label: "Portability — I want a copy of my data in a portable format" },
  { value: "optout",      label: "Opt-out — I want to opt out of marketing communications" },
];

export default function DataRequestsPage() {
  const [submitted, setSubmitted] = useState(false);
  const [type, setType] = useState("");
  const [email, setEmail] = useState("");
  const [details, setDetails] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!type || !email) return;
    setSubmitted(true);
  };

  return (
    <LegalPageTemplate title="Data Requests" lastUpdated="April 2026">
      <p>
        You have the right to make requests regarding your personal data held by Alpine Marketing. Use this form to submit a request. We will verify your identity before processing any request that could affect personal data.
      </p>

      <h2>Your Rights</h2>
      <ul>
        <li><strong>Access:</strong> Receive a copy of the personal data we hold about you.</li>
        <li><strong>Deletion:</strong> Request erasure of your personal data where no legal obligation requires us to retain it.</li>
        <li><strong>Correction:</strong> Request correction of inaccurate or incomplete personal data.</li>
        <li><strong>Objection:</strong> Object to processing based on legitimate interests or for direct marketing.</li>
        <li><strong>Portability:</strong> Receive your data in a structured, machine-readable format.</li>
        <li><strong>Opt-out:</strong> Opt out of marketing communications at any time.</li>
      </ul>

      <h2>Identity Verification</h2>
      <p>
        To protect your data, we will verify your identity before processing any request. We may ask for information that allows us to confirm you are the data subject or an authorized representative. We will not process a request if we cannot verify identity.
      </p>

      <h2>Response Time</h2>
      <p>
        We aim to respond to all verified requests within 30 days. In complex or high-volume circumstances, this may be extended by a further 60 days, in which case we will notify you. [Response timeframe subject to applicable law.]
      </p>

      {!submitted ? (
        <form onSubmit={handleSubmit} className="not-prose mt-8 space-y-5 bg-card border border-white/8 rounded-xl p-6">
          <h3 className="text-white font-bold text-lg mb-4">Submit a Data Request</h3>

          <div>
            <label className="block text-sm font-medium text-white mb-1.5">Request type *</label>
            <select
              value={type}
              onChange={e => setType(e.target.value)}
              required
              className="w-full h-10 px-3 rounded-md bg-background border border-white/10 text-sm text-white focus:outline-none focus:ring-1 focus:ring-primary"
            >
              <option value="">Select...</option>
              {REQUEST_TYPES.map(r => (
                <option key={r.value} value={r.value}>{r.label}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-1.5">Your email address *</label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              placeholder="The email address associated with your data"
              className="w-full h-10 px-3 rounded-md bg-background border border-white/10 text-sm text-white focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-1.5">Additional details</label>
            <textarea
              value={details}
              onChange={e => setDetails(e.target.value)}
              placeholder="Any additional context that helps us locate your data or understand your request..."
              rows={4}
              className="w-full px-3 py-2 rounded-md bg-background border border-white/10 text-sm text-white focus:outline-none focus:ring-1 focus:ring-primary resize-none"
            />
          </div>

          <p className="text-xs text-muted-foreground">
            By submitting this form, you understand that we may contact you to verify your identity before fulfilling the request.
          </p>

          <button
            type="submit"
            className="px-6 py-2.5 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-primary/90 transition-colors"
          >
            Submit Request
          </button>
        </form>
      ) : (
        <div className="not-prose mt-8 bg-secondary/10 border border-secondary/20 rounded-xl p-6">
          <p className="text-secondary font-bold mb-2">✓ Request received</p>
          <p className="text-sm text-muted-foreground">
            We'll review your request and may contact you at the email address provided to verify your identity. We aim to respond within 30 days.
          </p>
        </div>
      )}
    </LegalPageTemplate>
  );
}
