import { Callout, StatRow } from "@/components/blog/Callout";
import type { BlogPostMeta } from "../types";

export const meta: BlogPostMeta = {
  slug: "salesforce-true-cost-smb-switzerland",
  title: "The True Cost of Salesforce for Swiss SMBs (And What to Use Instead)",
  excerpt:
    "Salesforce starts at CHF 25 per user. By month six, most Swiss SMBs are paying ten times that — and still don't have a working pipeline. Here's the real math, and the modern stack that out-performs it for a fraction of the cost.",
  category: "CRM & Automation",
  author: "Roman Siladi",
  authorRole: "Founder, Alpine Marketing",
  date: "April 18, 2026",
  readMinutes: 9,
  tags: ["CRM", "Salesforce", "GoHighLevel", "SMB", "Switzerland"],
};

export default function Post() {
  return (
    <>
      <Callout variant="info" title="TL;DR">
        <p>
          Salesforce&apos;s sticker price hides three layers of cost most SMBs only discover in
          month four: forced edition upgrades, mandatory add-ons, and the consultant tax. For a
          5-person Swiss team the real all-in is <strong>CHF 2,500&ndash;6,000 per month</strong> —
          not the CHF 125 the pricing page implies. A modern stack built on GoHighLevel + n8n +
          Claude delivers more pipeline outcomes for under CHF 600/month, with no admin on payroll.
        </p>
      </Callout>

      <p>
        Salesforce is the default answer when a growing business asks &quot;what CRM should we
        use?&quot; It is the largest, most recognised, most documented CRM on the planet. For
        enterprises with a dedicated revenue operations team, it is genuinely powerful.
      </p>
      <p>
        For Swiss SMBs &mdash; the 5-to-50-person businesses we work with every week &mdash; it is
        almost always the wrong choice. Not because the software is bad, but because the
        <em>economics</em> are structured against you.
      </p>
      <p>
        Below is the unvarnished breakdown of what Salesforce actually costs a small business once
        you account for the things the sales rep skips on the demo call.
      </p>

      <h2>1. The Pricing Page Is a Trapdoor</h2>
      <p>
        Salesforce publishes per-user, per-month pricing that looks competitive at first glance:
      </p>

      <table>
        <thead>
          <tr>
            <th>Edition</th>
            <th>Advertised Price</th>
            <th>What You Actually Need</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Starter Suite</td>
            <td>CHF 25 / user / month</td>
            <td>Too basic for any sales team beyond contact storage</td>
          </tr>
          <tr>
            <td>Professional</td>
            <td>CHF 80 / user / month</td>
            <td>No real automation, no API access, no custom objects</td>
          </tr>
          <tr>
            <td>Enterprise</td>
            <td>CHF 165 / user / month</td>
            <td>The minimum viable tier for an actual sales operation</td>
          </tr>
          <tr>
            <td>Unlimited</td>
            <td>CHF 330 / user / month</td>
            <td>What the AE will push for &quot;future-proofing&quot;</td>
          </tr>
        </tbody>
      </table>

      <p>
        Most teams sign on Professional, then discover within 90 days that they need workflow
        automation, lead routing, or an API integration with their booking system. None of that is
        available below Enterprise. The forced upgrade alone <strong>doubles</strong> your bill.
      </p>

      <Callout variant="warning" title="Real example">
        <p>
          A 5-seat Zürich agency we audited last quarter started on Professional at
          CHF 400/month. Six weeks in, they needed lead-source attribution and conditional
          email automations. The upgrade to Enterprise pushed them to CHF 825/month &mdash; before
          a single add-on.
        </p>
      </Callout>

      <h2>2. The Add-Ons That Aren&apos;t Optional</h2>
      <p>
        Salesforce&apos;s real revenue model is the marketplace of paid extensions. Features that
        feel like they should be table stakes are sold separately:
      </p>

      <ul>
        <li>
          <strong>CPQ (Configure, Price, Quote):</strong> CHF 75 / user / month
        </li>
        <li>
          <strong>Pardot / Marketing Cloud Account Engagement:</strong> from CHF 1&apos;250 / month flat
        </li>
        <li>
          <strong>Sales Engagement (cadences, dialer):</strong> CHF 50 / user / month
        </li>
        <li>
          <strong>Einstein AI features:</strong> CHF 50&ndash;75 / user / month
        </li>
        <li>
          <strong>Additional data storage:</strong> CHF 125 / month per 500 MB
        </li>
        <li>
          <strong>Premier Support:</strong> 30% of net license fees
        </li>
      </ul>

      <p>
        A 5-person team that needs marketing automation, AI lead scoring, and decent support is
        looking at <strong>CHF 2,000&ndash;3,500/month</strong> &mdash; not the CHF 125 the
        Starter pricing page implies. And we still haven&apos;t hired anyone to run it.
      </p>

      <h2>3. The Consultant Tax</h2>
      <h3>You Cannot Set It Up Yourself</h3>
      <p>
        This is the cost that catches every SMB off guard. Salesforce is extraordinarily powerful
        but equally complex. Configuring custom objects, validation rules, permission sets, flows
        and integrations is specialist work. You will need outside help.
      </p>
      <p>The going rates in Switzerland and DACH:</p>

      <ul>
        <li>
          <strong>Implementation consultant:</strong> CHF 180&ndash;320/hour, 40&ndash;100 hours for
          initial setup &rarr; CHF 7,000&ndash;32,000
        </li>
        <li>
          <strong>Ongoing admin (part-time):</strong> CHF 60&ndash;120/hour, ~20 hours/month
        </li>
        <li>
          <strong>Full-time Salesforce admin:</strong> CHF 95,000&ndash;130,000/year
        </li>
        <li>
          <strong>Custom development projects:</strong> CHF 6,000&ndash;25,000 per significant change
        </li>
      </ul>

      <p>
        For most small teams, <strong>the consultant cost exceeds the software cost in year one.</strong>
      </p>

      <h3>The Complexity Spiral</h3>
      <p>Salesforce complexity is self-reinforcing:</p>

      <ol>
        <li>The platform is too complex for the in-house team to manage.</li>
        <li>You hire a consultant to configure it.</li>
        <li>The consultant builds custom flows that only they understand.</li>
        <li>You become dependent on the consultant for every change.</li>
        <li>Every modification is billable.</li>
      </ol>

      <p>
        SMBs who wanted a simple way to track leads end up with an enterprise system that requires
        permanent specialised support to keep it from breaking.
      </p>

      <h2>4. The Real Twelve-Month Bill</h2>
      <p>
        Here is what a typical 5-person Swiss SMB actually pays in the first year on Salesforce:
      </p>

      <StatRow
        stats={[
          { value: "CHF 9.9k",  label: "Enterprise Licenses (5 users)", accent: "teal" },
          { value: "CHF 24k",   label: "Add-Ons & Marketing Cloud",     accent: "amber" },
          { value: "CHF 18k",   label: "Implementation + Admin",        accent: "red" },
        ]}
      />

      <p>
        That is roughly <strong>CHF 52,000 in year one</strong> &mdash; and you still need to build
        the actual ad pipeline, the booking flow, and the response automations on top of it.
      </p>

      <h2>5. What Swiss SMBs Actually Need</h2>
      <p>Before committing to Salesforce, ask honestly: do you actually need&hellip;</p>

      <ul>
        <li>Custom objects with complex parent-child relationships?</li>
        <li>Multi-currency, multi-language territory management for global ops?</li>
        <li>Custom Apex code and Lightning components?</li>
        <li>SOX-compliant audit trails?</li>
      </ul>

      <p>
        For an SMB &mdash; especially one driven by paid acquisition and a single-country sales
        motion &mdash; the answer is almost certainly <em>no</em>. What you actually need is:
      </p>

      <ul>
        <li>A CRM that records every lead and every conversation in one place.</li>
        <li>Fast follow-up: SMS, email, WhatsApp triggered the moment a lead comes in.</li>
        <li>Booking and reminders that don&apos;t require a human.</li>
        <li>Honest reporting on CAC and Lifetime Gross Profit &mdash; not vanity dashboards.</li>
      </ul>

      <h2>6. The Modern Alternative</h2>
      <p>
        At Alpine Marketing we deploy a stack that does all of the above for a small fraction of
        the Salesforce all-in:
      </p>

      <ul>
        <li>
          <strong>GoHighLevel</strong> as the CRM, sequences, calendar and pipeline tracker
          (CHF&nbsp;~290/month, unlimited users).
        </li>
        <li>
          <strong>n8n</strong> for custom automations and integrations into anything you already
          use (self-hosted: CHF&nbsp;0; cloud: CHF&nbsp;~20/month).
        </li>
        <li>
          <strong>Claude (Anthropic)</strong> for AI lead triage and response drafting
          (CHF&nbsp;~80&ndash;200/month depending on volume).
        </li>
        <li>
          <strong>Plausible</strong> for privacy-friendly attribution (CHF&nbsp;~9/month).
        </li>
      </ul>

      <Callout variant="highlight" title="Side by side">
        <p>
          A 5-person Swiss SMB on the modern stack: <strong>~CHF&nbsp;420&ndash;600/month
          all-in</strong>, configured in two weeks, with no permanent admin role required. Same
          stack on Salesforce: ~CHF&nbsp;52,000 in year one.
        </p>
      </Callout>

      <h2>The Bottom Line</h2>
      <p>
        Salesforce is not bad software &mdash; it is enterprise software priced and structured for
        enterprises. If you have a revenue ops team, a dedicated admin and over CHF&nbsp;5M ARR,
        it is a defensible choice. Below that, you are paying for complexity you cannot use, and
        funding the consultants who make it run.
      </p>
      <p>
        For Swiss SMBs that want predictable customer acquisition cost, fast lead response, and
        honest pipeline reporting, the modern stack wins on every axis: <strong>cost, speed of
        deployment, and the metric that actually matters &mdash; Lifetime Gross Profit
        per franc spent.</strong>
      </p>
    </>
  );
}
