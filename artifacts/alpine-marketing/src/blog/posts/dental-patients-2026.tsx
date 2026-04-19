import type { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import { Callout } from "@/components/blog/Callout";
import type { BlogPostMeta } from "../types";

const SLUG = "more-dental-patients-2026";
const COMMON = {
  slug: SLUG,
  category: "Guide" as const,
  author: "Roman Siladi",
  readMinutes: 11,
  tags: ["Dental", "Local SEO", "Lead Response", "Switzerland", "GoHighLevel"],
};

const metaByLang: Record<string, BlogPostMeta> = {
  en: {
    ...COMMON,
    title: "How to Get More Dental Patients in 2026 (Without Spending More on Ads)",
    excerpt:
      "Most dental practices in Switzerland don't have a marketing problem — they have a systems problem. Here's how to close the gaps between the marketing you're already doing and the moment a patient books.",
    authorRole: "Founder, Alpine Marketing",
    date: "April 18, 2026",
  },
  de: {
    ...COMMON,
    title: "Wie Sie 2026 mehr Patienten gewinnen (ohne mehr Werbebudget)",
    excerpt:
      "Die meisten Zahnarztpraxen in der Schweiz haben kein Marketingproblem — sie haben ein Systemproblem. So schliessen Sie die Lücken zwischen Ihrem aktuellen Marketing und dem Moment, in dem ein Patient bucht.",
    authorRole: "Gründer, Alpine Marketing",
    date: "18. April 2026",
  },
  fr: {
    ...COMMON,
    title: "Comment attirer plus de patients en 2026 (sans dépenser plus en publicité)",
    excerpt:
      "La plupart des cabinets dentaires en Suisse n'ont pas un problème de marketing — ils ont un problème de système. Voici comment combler les écarts entre le marketing que vous faites déjà et le moment où un patient prend rendez-vous.",
    authorRole: "Fondateur, Alpine Marketing",
    date: "18 avril 2026",
  },
  it: {
    ...COMMON,
    title: "Come ottenere più pazienti dentali nel 2026 (senza spendere di più in pubblicità)",
    excerpt:
      "La maggior parte degli studi dentistici in Svizzera non ha un problema di marketing — ha un problema di sistema. Ecco come colmare il divario tra il marketing che già fate e il momento in cui un paziente prenota.",
    authorRole: "Fondatore, Alpine Marketing",
    date: "18 aprile 2026",
  },
  uk: {
    ...COMMON,
    title: "Як отримати більше стоматологічних пацієнтів у 2026 році (без збільшення рекламного бюджету)",
    excerpt:
      "Більшість стоматологічних клінік у Швейцарії мають не маркетингову, а системну проблему. Ось як закрити прогалини між маркетингом, який ви вже робите, і моментом запису пацієнта.",
    authorRole: "Засновник, Alpine Marketing",
    date: "18 квітня 2026",
  },
  ru: {
    ...COMMON,
    title: "Как привлечь больше стоматологических пациентов в 2026 году (без увеличения бюджета на рекламу)",
    excerpt:
      "У большинства стоматологических клиник в Швейцарии не маркетинговая, а системная проблема. Вот как закрыть пробелы между маркетингом, который вы уже делаете, и моментом записи пациента.",
    authorRole: "Основатель, Alpine Marketing",
    date: "18 апреля 2026",
  },
};

function langCode(lang: string | undefined): string {
  return (lang ?? "en").split("-")[0];
}

export function getLocalizedMeta(lang: string | undefined): BlogPostMeta {
  return metaByLang[langCode(lang)] ?? metaByLang.en;
}

export const meta: BlogPostMeta = metaByLang.en;

export default function Post() {
  const { i18n } = useTranslation();
  const code = langCode(i18n.resolvedLanguage);
  const Body = bodies[code] ?? bodies.en;
  return <Body />;
}

/* ========================================================================
   ENGLISH (original)
   ======================================================================== */
function BodyEn() {
  return (
    <>
      <p>
        Most dental practices in Switzerland don&apos;t have a marketing problem. They have a
        systems problem.
      </p>
      <p>
        They&apos;re spending money on ads. They have a Google Business Profile. Some even post on
        Instagram. But new patients aren&apos;t coming in at the rate the practice needs &mdash; and
        nobody can quite explain why.
      </p>
      <p>
        Here&apos;s why: getting more patients isn&apos;t about doing <em>more</em> marketing. It&apos;s
        about fixing the gaps between the marketing you&apos;re already doing and the moment someone
        books an appointment.
      </p>
      <p>
        This guide breaks down exactly what those gaps are, and how to close them &mdash;
        systematically.
      </p>

      <h2>Why Word-of-Mouth Alone No Longer Works</h2>
      <p>
        Ten years ago, a dental practice in Zurich or Basel could run almost entirely on referrals.
        A good reputation, a loyal patient base, and the occasional flyer in the letterbox.
      </p>
      <p>That model is broken.</p>

      <Callout variant="warning" title="The new buying behaviour">
        <p>
          <strong>71% of consumers now search for a dentist online before booking</strong> &mdash;
          even when they&apos;ve been personally referred. They&apos;re checking your Google reviews,
          looking at your website on their phone, and comparing you to three other practices before
          they make a decision.
        </p>
      </Callout>

      <p>
        The practice that wins isn&apos;t always the best dentist. It&apos;s the one that looks most
        trustworthy online and responds fastest.
      </p>
      <p>The good news: this is entirely fixable with the right system.</p>

      <h2>1. Know Exactly Who Your Ideal Patient Is</h2>
      <p>Before you change anything about your marketing, get clear on who you&apos;re trying to attract.</p>
      <p>
        Not every patient is worth the same to your practice. A patient who comes in for a CHF&nbsp;80
        cleaning twice a year is very different from one who books implants, veneers, or Invisalign.
      </p>
      <p>Ask yourself:</p>
      <ul>
        <li>What is the average treatment value of my ideal patient?</li>
        <li>Where do they live? (Within 5&nbsp;km? 10&nbsp;km?)</li>
        <li>What are they typically searching for when they find us?</li>
        <li>What&apos;s the one thing we do better than any other practice nearby?</li>
      </ul>
      <p>
        Once you know the answers, every marketing decision becomes easier. You stop trying to
        attract everyone and start building a system that attracts the right people.
      </p>

      <Callout variant="info" title="Alpine note">
        <p>
          We build what we call a <strong>Patient Profile</strong> before touching a single ad or
          piece of content for our dental clients. It saves thousands in wasted spend.
        </p>
      </Callout>

      <h2>2. Your Google Business Profile Is Your Most Important Marketing Asset</h2>
      <p>If you do nothing else from this article, optimise your Google Business Profile.</p>
      <p>
        When someone searches &quot;Zahnarzt Zürich&quot; or &quot;dentist near me,&quot; Google
        shows the local map pack <em>before</em> any website. Practices that appear in the top 3 of
        that map pack get the overwhelming majority of clicks.
      </p>
      <p>What the top-performing practices do differently:</p>
      <ul>
        <li><strong>Upload new photos every week</strong> &mdash; offices with 100+ photos get 520% more calls than those with fewer than 10</li>
        <li><strong>Respond to every review within 24 hours</strong> &mdash; both positive and negative</li>
        <li><strong>Post updates weekly</strong> &mdash; Google treats your Business Profile like a social media account</li>
        <li><strong>Use keywords in your business description</strong> &mdash; naturally include terms like &quot;dental implants Zurich&quot; or &quot;Invisalign Basel&quot;</li>
      </ul>
      <p>This costs nothing except 30 minutes per week. Most practices don&apos;t do it. That&apos;s your competitive advantage.</p>

      <h2>3. Fix the Speed Problem (This Is Where Most Patients Are Lost)</h2>
      <p>Here&apos;s what nobody tells dental practices about online leads:</p>

      <Callout variant="warning" title="The 5-minute rule">
        <p>
          If you don&apos;t follow up within <strong>5 minutes</strong> of an online enquiry, you
          lose <strong>80%</strong> of those leads.
        </p>
        <p>Not 20%. Eighty.</p>
      </Callout>

      <p>
        A potential patient fills out your contact form at 7pm on a Tuesday. Your receptionist sees
        it Wednesday morning and sends an email. By then, that person has already booked with
        someone else.
      </p>
      <p>This is the most common and most expensive problem we fix for dental practices. The solution is an automated follow-up system:</p>
      <ol>
        <li>Patient submits enquiry via website or ad</li>
        <li>Automated SMS goes out within 3 minutes: <em>&quot;Hi [Name], thanks for reaching out to [Practice Name]. We&apos;ll be in touch within the hour to confirm your appointment &mdash; is there a time that suits you best?&quot;</em></li>
        <li>If no response in 24 hours, a second automated touchpoint goes out</li>
        <li>Your receptionist only handles leads that are already warm and engaged</li>
      </ol>

      <Callout variant="highlight" title="Real result">
        <p>
          One of our clients &mdash; a general dental practice in canton Zurich &mdash; implemented
          this system and went from <strong>12 new patients per month to 31</strong>. Same ad spend.
          Same team. Just a faster, smarter follow-up system.
        </p>
      </Callout>

      <p>This is what marketing automation actually means in practice. Not a complex software stack &mdash; a system that means no lead ever goes cold.</p>

      <h2>4. Build a Reputation System (Not Just Ask for Reviews)</h2>
      <p>
        Online reviews are not optional anymore. <strong>92% of new patients read reviews before
        booking a dental appointment.</strong> A practice with 14 reviews and a 4.2-star rating
        loses to a practice with 200 reviews and a 4.7-star rating &mdash; every time.
      </p>
      <p>But here&apos;s the mistake most practices make: they ask for reviews randomly, when they remember, and only from patients who seem happy.</p>
      <p>A reputation system does it automatically:</p>
      <ul>
        <li>Patient leaves the practice after a positive appointment</li>
        <li>2 hours later, they receive an SMS: <em>&quot;We hope your visit was comfortable. If you have a moment, we&apos;d really appreciate a Google review &mdash; it helps other patients find us: [link]&quot;</em></li>
        <li>Positive reviews go to Google. If a patient had a poor experience, they&apos;re directed to a private feedback form instead of a public review</li>
      </ul>
      <p>This isn&apos;t manipulation &mdash; it&apos;s good systems thinking. And it compounds over time. Six months of automated review collection transforms a 14-review profile into a 200-review profile.</p>

      <h2>5. Social Media That Actually Brings in Patients</h2>
      <p>Most dental practices either don&apos;t post on social media, or they post generic &quot;Happy Monday!&quot; content that generates zero patients.</p>
      <p>What actually works on Instagram and Facebook for dental practices in 2026:</p>

      <h3>Before-and-after transformations</h3>
      <p>The single highest-performing content type for dental, consistently. Patients see a real result from a real person at your practice. Consent and anonymisation where needed &mdash; but these posts drive direct enquiries.</p>

      <h3>&quot;What to expect&quot; process videos</h3>
      <p>Short videos (60&ndash;90 seconds) of what happens during a cleaning, a whitening treatment, or an implant consultation. They remove fear. Fear is the #1 reason people avoid booking.</p>

      <h3>Patient testimonials on video</h3>
      <p>Filmed horizontally, natural lighting, no script. A patient talking directly to camera for 60 seconds about their experience at your practice is worth more than any ad you&apos;ll run.</p>

      <h3>The dentist as a person</h3>
      <p>A 30-second video of you explaining something simple (&quot;Why I always recommend X&quot;) builds trust faster than any promotional content. People buy from people.</p>

      <p>Post a minimum of 3 times per week. Engage with comments. Don&apos;t just schedule and disappear.</p>

      <h2>6. Run Ads That Match Patient Intent</h2>
      <p>If you&apos;re running Google Ads, the most important thing is matching your ads to what patients are actually searching.</p>

      <h3>High-intent searches to target</h3>
      <ul>
        <li>&quot;dentist near me accepting new patients&quot;</li>
        <li>&quot;dental implants [your city]&quot;</li>
        <li>&quot;Invisalign consultation [your city]&quot;</li>
        <li>&quot;emergency dentist [your city]&quot;</li>
        <li>&quot;teeth whitening [your city]&quot;</li>
      </ul>

      <h3>Low-intent searches to avoid bidding on</h3>
      <ul>
        <li>&quot;how much do dental implants cost&quot; (researching, not ready to book)</li>
        <li>&quot;dentist reviews&quot; (comparison stage, not booking stage)</li>
      </ul>

      <p>A focused Google Ads campaign targeting high-intent searches in a 10&nbsp;km radius around your practice, with a landing page that matches the search term and an automated follow-up for every enquiry, is the single most predictable way to grow new patient numbers.</p>

      <Callout variant="info" title="Budget benchmark">
        <p>
          Swiss dental practices should allocate <strong>CHF&nbsp;800&ndash;2,500/month</strong> on
          Google Ads depending on their target treatment mix. High-ticket treatments (implants,
          Invisalign) justify higher spend because the patient lifetime value is significantly
          higher.
        </p>
      </Callout>

      <h2>7. Make Your Website Do the Work</h2>
      <p>Your website has one job: convert a visitor into a booked appointment or an enquiry.</p>
      <p>Most dental websites fail at this. They look nice but they&apos;re not built to convert.</p>
      <p>The non-negotiables for 2026:</p>
      <ul>
        <li><strong>Mobile-first</strong> &mdash; 70%+ of dental searches happen on a phone</li>
        <li><strong>Click-to-call button</strong> visible immediately on mobile</li>
        <li><strong>Online booking or contact form above the fold</strong> &mdash; don&apos;t make patients scroll to find how to book</li>
        <li><strong>Social proof on the homepage</strong> &mdash; your Google rating and number of reviews, prominently displayed</li>
        <li><strong>Clear USP in the headline</strong> &mdash; not &quot;Your friendly local dentist&quot; but something specific: &quot;Zurich&apos;s highest-rated practice for Invisalign and cosmetic dentistry&quot;</li>
        <li><strong>Speed</strong> &mdash; if your website takes more than 3 seconds to load on mobile, you&apos;re losing patients before they even see it</li>
      </ul>

      <h2>The Real Answer to Getting More Dental Patients</h2>
      <p>Every strategy in this article works. But strategies without a system are just tasks on a to-do list that get pushed to next week.</p>
      <p>The practices that consistently grow &mdash; quarter after quarter, not just when the owner remembers to post on Instagram &mdash; are the ones that have a marketing system running in the background while they focus on treating patients.</p>
      <p>That system includes:</p>
      <ul>
        <li>Automated lead capture and follow-up</li>
        <li>A reputation management workflow</li>
        <li>Content publishing on a consistent schedule</li>
        <li>Ads targeting the right intent at the right time</li>
        <li>A dashboard that shows what&apos;s generating patients and what isn&apos;t</li>
      </ul>
      <p>This is exactly what we build at Alpine Marketing for dental practices in Switzerland and across Europe.</p>
      <p>We don&apos;t pitch you a 40-slide deck. We map your current funnel, identify where patients are dropping out, and build a system to fix it. Then we measure what happens.</p>

      <h2>Frequently Asked Questions</h2>

      <h3>How long does it take to see more patients from marketing?</h3>
      <p>With automated follow-up and Google Ads: 2&ndash;4 weeks. With SEO and organic content: 3&ndash;6 months. The fastest wins always come from fixing the follow-up gap first.</p>

      <h3>How much should a dental practice in Switzerland spend on marketing?</h3>
      <p>Industry benchmark is 3&ndash;5% of gross revenue. For a practice generating CHF&nbsp;500,000/year, that&apos;s CHF&nbsp;15,000&ndash;25,000/year &mdash; roughly CHF&nbsp;1,250&ndash;2,100/month.</p>

      <h3>Do I need to be on every social media platform?</h3>
      <p>No. Pick one and do it well. For dental practices, Instagram is the highest ROI platform in Switzerland. Facebook works well for the 40+ demographic. TikTok is growing for under-35.</p>

      <h3>What&apos;s the single highest-impact change I can make this week?</h3>
      <p>Set up an automated SMS follow-up for every online enquiry. If you&apos;re getting 20 enquiries per month and converting 30%, that&apos;s 6 patients. Fix your follow-up speed and you could convert 14. Same spend, double the patients.</p>

      <hr />

      <p><em>Alpine Marketing builds AI-powered marketing systems for dental practices and SMBs across Switzerland, Germany, and Austria. We speak German, French, and English.</em></p>
    </>
  );
}

/* ========================================================================
   DEUTSCH
   ======================================================================== */
function BodyDe() {
  return (
    <>
      <p>Die meisten Zahnarztpraxen in der Schweiz haben kein Marketingproblem. Sie haben ein Systemproblem.</p>
      <p>Sie geben Geld für Werbung aus. Sie haben ein Google Business Profil. Manche posten sogar auf Instagram. Doch die neuen Patienten kommen nicht in dem Tempo, das die Praxis braucht — und niemand kann genau erklären, warum.</p>
      <p>Hier ist der Grund: Mehr Patienten zu gewinnen heisst nicht, <em>mehr</em> Marketing zu machen. Es heisst, die Lücken zwischen dem Marketing, das Sie bereits machen, und dem Moment der Terminbuchung zu schliessen.</p>
      <p>Diese Anleitung zeigt genau, wo diese Lücken sind und wie Sie sie schliessen — systematisch.</p>

      <h2>Warum Mundpropaganda allein nicht mehr reicht</h2>
      <p>Vor zehn Jahren konnte eine Zahnarztpraxis in Zürich oder Basel fast vollständig von Empfehlungen leben. Ein guter Ruf, ein loyaler Patientenstamm und gelegentlich ein Flyer im Briefkasten.</p>
      <p>Dieses Modell ist gescheitert.</p>

      <Callout variant="warning" title="Das neue Kaufverhalten">
        <p><strong>71 % der Konsumenten suchen heute online nach einem Zahnarzt, bevor sie buchen</strong> — selbst wenn sie persönlich empfohlen wurden. Sie prüfen Ihre Google-Bewertungen, schauen sich Ihre Website auf dem Handy an und vergleichen Sie mit drei anderen Praxen, bevor sie eine Entscheidung treffen.</p>
      </Callout>

      <p>Die Praxis, die gewinnt, ist nicht immer die mit dem besten Zahnarzt. Es ist die, die online am vertrauenswürdigsten wirkt und am schnellsten antwortet.</p>
      <p>Die gute Nachricht: Mit dem richtigen System ist das vollständig lösbar.</p>

      <h2>1. Wissen Sie genau, wer Ihr idealer Patient ist</h2>
      <p>Bevor Sie irgendetwas an Ihrem Marketing ändern, machen Sie sich klar, wen Sie eigentlich anziehen wollen.</p>
      <p>Nicht jeder Patient ist gleich viel wert für Ihre Praxis. Jemand, der zweimal pro Jahr für eine Reinigung von CHF&nbsp;80 kommt, ist ganz anders als jemand, der Implantate, Veneers oder Invisalign bucht.</p>
      <p>Fragen Sie sich:</p>
      <ul>
        <li>Wie hoch ist der durchschnittliche Behandlungswert meines idealen Patienten?</li>
        <li>Wo wohnt er? (Im Umkreis von 5&nbsp;km? 10&nbsp;km?)</li>
        <li>Wonach sucht er typischerweise, wenn er uns findet?</li>
        <li>Was machen wir besser als jede andere Praxis in der Nähe?</li>
      </ul>
      <p>Sobald Sie die Antworten kennen, wird jede Marketingentscheidung leichter. Sie hören auf, alle ansprechen zu wollen, und beginnen ein System aufzubauen, das die Richtigen anzieht.</p>

      <Callout variant="info" title="Alpine-Hinweis">
        <p>Wir erstellen, was wir ein <strong>Patientenprofil</strong> nennen, bevor wir auch nur eine Anzeige oder ein Stück Content für unsere Dental-Kunden anfassen. Es spart Tausende in vergeudeten Ausgaben.</p>
      </Callout>

      <h2>2. Ihr Google Business Profil ist Ihr wichtigstes Marketing-Asset</h2>
      <p>Wenn Sie aus diesem Artikel nur eine Sache umsetzen, optimieren Sie Ihr Google Business Profil.</p>
      <p>Wenn jemand «Zahnarzt Zürich» oder «Zahnarzt in der Nähe» sucht, zeigt Google das lokale Map Pack <em>vor</em> jeder Website. Praxen in den Top 3 dieses Map Packs erhalten die überwältigende Mehrheit der Klicks.</p>
      <p>Was die Top-Praxen anders machen:</p>
      <ul>
        <li><strong>Wöchentlich neue Fotos hochladen</strong> — Praxen mit 100+ Fotos erhalten 520 % mehr Anrufe als solche mit weniger als 10</li>
        <li><strong>Auf jede Bewertung innerhalb von 24 Stunden antworten</strong> — positive wie negative</li>
        <li><strong>Wöchentlich Updates posten</strong> — Google behandelt Ihr Business Profil wie ein Social-Media-Konto</li>
        <li><strong>Keywords in der Beschreibung verwenden</strong> — natürlich Begriffe wie «Zahnimplantate Zürich» oder «Invisalign Basel» einbauen</li>
      </ul>
      <p>Das kostet nichts ausser 30 Minuten pro Woche. Die meisten Praxen tun es nicht. Das ist Ihr Wettbewerbsvorteil.</p>

      <h2>3. Lösen Sie das Geschwindigkeitsproblem (hier verlieren die meisten Praxen ihre Patienten)</h2>
      <p>Was niemand Zahnarztpraxen über Online-Leads sagt:</p>

      <Callout variant="warning" title="Die 5-Minuten-Regel">
        <p>Wenn Sie nicht innerhalb von <strong>5 Minuten</strong> auf eine Online-Anfrage reagieren, verlieren Sie <strong>80 %</strong> dieser Leads.</p>
        <p>Nicht 20 %. Achtzig.</p>
      </Callout>

      <p>Ein potenzieller Patient füllt am Dienstag um 19 Uhr Ihr Kontaktformular aus. Ihre Empfangskraft sieht es Mittwochmorgen und schickt eine E-Mail. Da hat diese Person bereits bei jemand anderem gebucht.</p>
      <p>Das ist das häufigste und teuerste Problem, das wir für Zahnarztpraxen lösen. Die Lösung ist ein automatisiertes Follow-up-System:</p>
      <ol>
        <li>Patient sendet Anfrage über Website oder Anzeige</li>
        <li>Automatische SMS innerhalb von 3 Minuten: <em>«Hallo [Name], danke für Ihre Anfrage bei [Praxisname]. Wir melden uns innerhalb der nächsten Stunde, um Ihren Termin zu bestätigen — gibt es eine Zeit, die Ihnen besonders passt?»</em></li>
        <li>Bei keiner Reaktion innerhalb von 24 Stunden geht ein zweiter automatisierter Touchpoint raus</li>
        <li>Ihre Empfangskraft betreut nur noch warme, engagierte Leads</li>
      </ol>

      <Callout variant="highlight" title="Echtes Ergebnis">
        <p>Einer unserer Kunden — eine allgemeine Zahnarztpraxis im Kanton Zürich — hat dieses System eingeführt und ist von <strong>12 auf 31 neue Patienten pro Monat</strong> gestiegen. Gleiches Werbebudget. Gleiches Team. Nur ein schnelleres, intelligenteres Follow-up-System.</p>
      </Callout>

      <p>Genau das bedeutet Marketing-Automatisierung in der Praxis. Kein komplexer Software-Stack — ein System, durch das kein Lead je kalt wird.</p>

      <h2>4. Bauen Sie ein Reputationssystem auf (nicht nur «Bewertungen erfragen»)</h2>
      <p>Online-Bewertungen sind nicht mehr optional. <strong>92 % der neuen Patienten lesen Bewertungen, bevor sie einen Zahnarzttermin buchen.</strong> Eine Praxis mit 14 Bewertungen und 4,2 Sternen verliert jedes Mal gegen eine mit 200 Bewertungen und 4,7 Sternen.</p>
      <p>Aber hier ist der Fehler, den die meisten machen: Sie fragen zufällig nach Bewertungen, wenn sie daran denken — und nur bei Patienten, die zufrieden wirken.</p>
      <p>Ein Reputationssystem macht das automatisch:</p>
      <ul>
        <li>Patient verlässt die Praxis nach einem positiven Termin</li>
        <li>2 Stunden später erhält er eine SMS: <em>«Wir hoffen, Ihr Besuch war angenehm. Falls Sie einen Moment Zeit haben, würden wir uns sehr über eine Google-Bewertung freuen — sie hilft anderen Patienten, uns zu finden: [Link]»</em></li>
        <li>Positive Bewertungen gehen zu Google. Hatte ein Patient eine schlechte Erfahrung, wird er auf ein privates Feedback-Formular geleitet — nicht auf eine öffentliche Bewertung</li>
      </ul>
      <p>Das ist keine Manipulation — das ist gutes Systemdenken. Und es summiert sich. Sechs Monate automatisierte Bewertungs-Sammlung verwandeln ein 14-Bewertungen-Profil in ein 200-Bewertungen-Profil.</p>

      <h2>5. Social Media, das tatsächlich Patienten bringt</h2>
      <p>Die meisten Praxen posten entweder gar nicht auf Social Media oder sie posten generischen «Happy Monday!»-Content, der null Patienten generiert.</p>
      <p>Was 2026 für Zahnarztpraxen auf Instagram und Facebook wirklich funktioniert:</p>

      <h3>Vorher-Nachher-Transformationen</h3>
      <p>Konsequent das Content-Format mit der höchsten Performance für Dental. Patienten sehen ein echtes Ergebnis bei einer echten Person in Ihrer Praxis. Mit Einwilligung und Anonymisierung wo nötig — aber diese Posts treiben direkte Anfragen.</p>

      <h3>«Was Sie erwartet»-Prozessvideos</h3>
      <p>Kurze Videos (60–90 Sekunden) über das, was bei einer Reinigung, einem Bleaching oder einer Implantatberatung passiert. Sie nehmen die Angst. Angst ist Grund Nr. 1, warum Menschen nicht buchen.</p>

      <h3>Patienten-Testimonials auf Video</h3>
      <p>Horizontal gefilmt, natürliches Licht, kein Skript. Ein Patient, der 60 Sekunden direkt in die Kamera über seine Erfahrung in Ihrer Praxis spricht, ist mehr wert als jede Anzeige, die Sie schalten.</p>

      <h3>Der Zahnarzt als Person</h3>
      <p>Ein 30-Sekunden-Video, in dem Sie etwas Einfaches erklären («Warum ich immer X empfehle»), baut Vertrauen schneller auf als jeder Werbeinhalt. Menschen kaufen von Menschen.</p>

      <p>Posten Sie mindestens 3-mal pro Woche. Reagieren Sie auf Kommentare. Planen Sie nicht einfach und verschwinden Sie.</p>

      <h2>6. Schalten Sie Anzeigen, die zur Patientenintention passen</h2>
      <p>Wenn Sie Google Ads schalten, ist das Wichtigste, dass Ihre Anzeigen zu dem passen, wonach Patienten tatsächlich suchen.</p>

      <h3>High-Intent-Suchanfragen, auf die Sie zielen sollten</h3>
      <ul>
        <li>«Zahnarzt in der Nähe nimmt neue Patienten»</li>
        <li>«Zahnimplantate [Ihre Stadt]»</li>
        <li>«Invisalign Beratung [Ihre Stadt]»</li>
        <li>«Notfall-Zahnarzt [Ihre Stadt]»</li>
        <li>«Zahnaufhellung [Ihre Stadt]»</li>
      </ul>

      <h3>Low-Intent-Suchanfragen, auf die Sie nicht bieten sollten</h3>
      <ul>
        <li>«Was kosten Zahnimplantate» (Recherche, nicht buchungsbereit)</li>
        <li>«Zahnarzt Bewertungen» (Vergleichsphase, nicht Buchungsphase)</li>
      </ul>

      <p>Eine fokussierte Google-Ads-Kampagne, die High-Intent-Suchen im 10-km-Radius um Ihre Praxis anvisiert, mit einer Landing Page passend zum Suchbegriff und einem automatisierten Follow-up für jede Anfrage, ist der mit Abstand vorhersagbarste Weg, Ihre Patientenzahlen zu steigern.</p>

      <Callout variant="info" title="Budget-Benchmark">
        <p>Schweizer Zahnarztpraxen sollten je nach Behandlungsmix <strong>CHF&nbsp;800–2'500/Monat</strong> für Google Ads einplanen. High-Ticket-Behandlungen (Implantate, Invisalign) rechtfertigen höhere Ausgaben, weil der Lifetime-Wert des Patienten deutlich höher ist.</p>
      </Callout>

      <h2>7. Lassen Sie Ihre Website die Arbeit machen</h2>
      <p>Ihre Website hat einen Job: einen Besucher in einen gebuchten Termin oder eine Anfrage zu verwandeln.</p>
      <p>Die meisten Zahnarzt-Websites scheitern daran. Sie sehen schön aus, sind aber nicht für Konversion gebaut.</p>
      <p>Die Pflicht für 2026:</p>
      <ul>
        <li><strong>Mobile-First</strong> — über 70 % der Dental-Suchen passieren am Handy</li>
        <li><strong>Click-to-Call-Button</strong>, sofort sichtbar auf Mobile</li>
        <li><strong>Online-Buchung oder Kontaktformular above the fold</strong> — zwingen Sie Patienten nicht zu scrollen, um zu buchen</li>
        <li><strong>Social Proof auf der Startseite</strong> — Ihre Google-Bewertung und Anzahl Reviews, prominent platziert</li>
        <li><strong>Klares USP in der Headline</strong> — nicht «Ihr freundlicher Zahnarzt vor Ort», sondern etwas Konkretes: «Zürichs bestbewertete Praxis für Invisalign und ästhetische Zahnheilkunde»</li>
        <li><strong>Geschwindigkeit</strong> — wenn Ihre Website länger als 3 Sekunden lädt, verlieren Sie Patienten, bevor sie sie überhaupt sehen</li>
      </ul>

      <h2>Die echte Antwort, wie Sie mehr Patienten bekommen</h2>
      <p>Jede Strategie in diesem Artikel funktioniert. Aber Strategien ohne System sind nur Aufgaben auf einer To-do-Liste, die in die nächste Woche verschoben werden.</p>
      <p>Die Praxen, die konstant wachsen — Quartal für Quartal, nicht nur wenn der Inhaber daran denkt, auf Instagram zu posten — sind diejenigen mit einem Marketing-System, das im Hintergrund läuft, während sie sich auf die Behandlung konzentrieren.</p>
      <p>Dieses System umfasst:</p>
      <ul>
        <li>Automatisierte Lead-Erfassung und Follow-up</li>
        <li>Einen Reputations-Workflow</li>
        <li>Content-Veröffentlichung in einem festen Rhythmus</li>
        <li>Anzeigen, die die richtige Intention zur richtigen Zeit ansprechen</li>
        <li>Ein Dashboard, das zeigt, was Patienten generiert und was nicht</li>
      </ul>
      <p>Genau das bauen wir bei Alpine Marketing für Zahnarztpraxen in der Schweiz und in ganz Europa.</p>
      <p>Wir präsentieren keine 40-Slide-Decks. Wir mappen Ihren aktuellen Funnel, identifizieren, wo Patienten abspringen, und bauen ein System, das das löst. Dann messen wir, was passiert.</p>

      <h2>Häufig gestellte Fragen</h2>

      <h3>Wie lange dauert es, bis Marketing mehr Patienten bringt?</h3>
      <p>Mit automatisiertem Follow-up und Google Ads: 2–4 Wochen. Mit SEO und organischem Content: 3–6 Monate. Die schnellsten Erfolge kommen immer daher, dass man zuerst die Follow-up-Lücke schliesst.</p>

      <h3>Wie viel sollte eine Schweizer Zahnarztpraxis fürs Marketing ausgeben?</h3>
      <p>Branchen-Benchmark sind 3–5 % des Bruttoumsatzes. Bei einer Praxis mit CHF&nbsp;500'000/Jahr sind das CHF&nbsp;15'000–25'000/Jahr — etwa CHF&nbsp;1'250–2'100/Monat.</p>

      <h3>Muss ich auf jeder Social-Media-Plattform sein?</h3>
      <p>Nein. Wählen Sie eine und machen Sie sie richtig. Für Zahnarztpraxen ist Instagram in der Schweiz die ROI-stärkste Plattform. Facebook funktioniert gut für die Zielgruppe 40+. TikTok wächst bei den unter 35-Jährigen.</p>

      <h3>Was ist die einzelne Massnahme mit dem grössten Effekt, die ich diese Woche umsetzen kann?</h3>
      <p>Richten Sie ein automatisiertes SMS-Follow-up für jede Online-Anfrage ein. Wenn Sie 20 Anfragen pro Monat haben und 30 % konvertieren, sind das 6 Patienten. Verbessern Sie das Tempo Ihres Follow-ups, könnten es 14 sein. Gleiche Ausgaben, doppelt so viele Patienten.</p>

      <hr />

      <p><em>Alpine Marketing baut KI-gestützte Marketing-Systeme für Zahnarztpraxen und KMU in der Schweiz, Deutschland und Österreich. Wir sprechen Deutsch, Französisch und Englisch.</em></p>
    </>
  );
}

/* ========================================================================
   FRANÇAIS
   ======================================================================== */
function BodyFr() {
  return (
    <>
      <p>La plupart des cabinets dentaires en Suisse n&apos;ont pas un problème de marketing. Ils ont un problème de système.</p>
      <p>Ils dépensent en publicité. Ils ont un Profil Google Business. Certains publient même sur Instagram. Mais les nouveaux patients n&apos;arrivent pas au rythme dont le cabinet a besoin — et personne ne sait vraiment expliquer pourquoi.</p>
      <p>Voici la raison&nbsp;: obtenir plus de patients ne consiste pas à faire <em>plus</em> de marketing. Il s&apos;agit de combler les écarts entre le marketing que vous faites déjà et le moment où quelqu&apos;un prend rendez-vous.</p>
      <p>Ce guide détaille exactement ces écarts et comment les combler — de manière systématique.</p>

      <h2>Pourquoi le bouche-à-oreille seul ne suffit plus</h2>
      <p>Il y a dix ans, un cabinet dentaire à Zurich ou Bâle pouvait fonctionner presque entièrement sur les recommandations. Une bonne réputation, une patientèle fidèle, et un flyer occasionnel dans la boîte aux lettres.</p>
      <p>Ce modèle est cassé.</p>

      <Callout variant="warning" title="Le nouveau comportement d'achat">
        <p><strong>71&nbsp;% des consommateurs cherchent désormais un dentiste en ligne avant de prendre rendez-vous</strong> — même quand ils ont été personnellement recommandés. Ils consultent vos avis Google, regardent votre site sur leur téléphone et vous comparent à trois autres cabinets avant de décider.</p>
      </Callout>

      <p>Le cabinet qui gagne n&apos;est pas toujours celui du meilleur dentiste. C&apos;est celui qui paraît le plus digne de confiance en ligne et qui répond le plus vite.</p>
      <p>La bonne nouvelle&nbsp;: c&apos;est entièrement réparable avec le bon système.</p>

      <h2>1. Sachez exactement qui est votre patient idéal</h2>
      <p>Avant de changer quoi que ce soit à votre marketing, soyez clair sur qui vous voulez attirer.</p>
      <p>Tous les patients n&apos;ont pas la même valeur pour votre cabinet. Un patient qui vient pour un détartrage à CHF&nbsp;80 deux fois par an est très différent de celui qui réserve des implants, des facettes ou Invisalign.</p>
      <p>Demandez-vous&nbsp;:</p>
      <ul>
        <li>Quelle est la valeur moyenne de traitement de mon patient idéal&nbsp;?</li>
        <li>Où habite-t-il&nbsp;? (Dans un rayon de 5&nbsp;km&nbsp;? 10&nbsp;km&nbsp;?)</li>
        <li>Que cherche-t-il typiquement quand il nous trouve&nbsp;?</li>
        <li>Qu&apos;est-ce qu&apos;on fait mieux que tout autre cabinet à proximité&nbsp;?</li>
      </ul>
      <p>Une fois les réponses claires, chaque décision marketing devient plus facile. Vous arrêtez d&apos;essayer d&apos;attirer tout le monde et commencez à construire un système qui attire les bonnes personnes.</p>

      <Callout variant="info" title="Note Alpine">
        <p>Nous construisons ce que nous appelons un <strong>Profil Patient</strong> avant de toucher la moindre annonce ou contenu pour nos clients dentaires. Cela économise des milliers de francs en dépenses gaspillées.</p>
      </Callout>

      <h2>2. Votre Profil Google Business est votre actif marketing le plus important</h2>
      <p>Si vous ne faites qu&apos;une chose de cet article, optimisez votre Profil Google Business.</p>
      <p>Quand quelqu&apos;un cherche «&nbsp;dentiste Zurich&nbsp;» ou «&nbsp;dentiste près de moi&nbsp;», Google affiche le map pack local <em>avant</em> tout site web. Les cabinets qui apparaissent dans le top 3 de ce map pack obtiennent l&apos;écrasante majorité des clics.</p>
      <p>Ce que les meilleurs cabinets font différemment&nbsp;:</p>
      <ul>
        <li><strong>Téléverser de nouvelles photos chaque semaine</strong> — les cabinets avec 100+ photos reçoivent 520&nbsp;% d&apos;appels en plus que ceux avec moins de 10</li>
        <li><strong>Répondre à chaque avis dans les 24&nbsp;heures</strong> — positifs comme négatifs</li>
        <li><strong>Publier des mises à jour chaque semaine</strong> — Google traite votre Profil comme un compte de réseau social</li>
        <li><strong>Utiliser des mots-clés dans la description</strong> — intégrez naturellement des termes comme «&nbsp;implants dentaires Zurich&nbsp;» ou «&nbsp;Invisalign Bâle&nbsp;»</li>
      </ul>
      <p>Cela ne coûte rien sauf 30&nbsp;minutes par semaine. La plupart des cabinets ne le font pas. C&apos;est votre avantage concurrentiel.</p>

      <h2>3. Réglez le problème de la vitesse (c&apos;est là que la plupart des patients sont perdus)</h2>
      <p>Voici ce que personne ne dit aux cabinets dentaires à propos des leads en ligne&nbsp;:</p>

      <Callout variant="warning" title="La règle des 5 minutes">
        <p>Si vous ne relancez pas dans les <strong>5&nbsp;minutes</strong> après une demande en ligne, vous perdez <strong>80&nbsp;%</strong> de ces leads.</p>
        <p>Pas 20&nbsp;%. Quatre-vingts.</p>
      </Callout>

      <p>Un patient potentiel remplit votre formulaire de contact à 19h un mardi. Votre réceptionniste le voit mercredi matin et envoie un email. À ce moment-là, cette personne a déjà pris rendez-vous ailleurs.</p>
      <p>C&apos;est le problème le plus fréquent et le plus coûteux que nous corrigeons pour les cabinets dentaires. La solution est un système de relance automatisé&nbsp;:</p>
      <ol>
        <li>Le patient envoie sa demande via le site ou une annonce</li>
        <li>Un SMS automatique part dans les 3&nbsp;minutes&nbsp;: <em>«&nbsp;Bonjour [Prénom], merci d&apos;avoir contacté [Nom du cabinet]. Nous reviendrons vers vous dans l&apos;heure pour confirmer votre rendez-vous — y a-t-il un horaire qui vous conviendrait particulièrement&nbsp;?&nbsp;»</em></li>
        <li>Sans réponse en 24&nbsp;heures, un deuxième point de contact automatique part</li>
        <li>Votre réceptionniste ne traite que les leads déjà chauds et engagés</li>
      </ol>

      <Callout variant="highlight" title="Résultat réel">
        <p>L&apos;un de nos clients — un cabinet dentaire généraliste dans le canton de Zurich — a mis en place ce système et est passé de <strong>12 nouveaux patients par mois à 31</strong>. Même budget pub. Même équipe. Juste un système de relance plus rapide et plus intelligent.</p>
      </Callout>

      <p>Voilà ce que signifie l&apos;automatisation marketing en pratique. Pas une stack logicielle complexe — un système qui fait qu&apos;aucun lead ne refroidit jamais.</p>

      <h2>4. Construisez un système de réputation (pas juste «&nbsp;demander des avis&nbsp;»)</h2>
      <p>Les avis en ligne ne sont plus optionnels. <strong>92&nbsp;% des nouveaux patients lisent les avis avant de prendre rendez-vous chez un dentiste.</strong> Un cabinet avec 14 avis et 4,2&nbsp;étoiles perd à chaque fois face à un cabinet avec 200 avis et 4,7&nbsp;étoiles.</p>
      <p>Mais voici l&apos;erreur de la plupart des cabinets&nbsp;: ils demandent des avis au hasard, quand ils y pensent, et seulement aux patients qui semblent contents.</p>
      <p>Un système de réputation le fait automatiquement&nbsp;:</p>
      <ul>
        <li>Le patient quitte le cabinet après un rendez-vous positif</li>
        <li>2&nbsp;heures plus tard, il reçoit un SMS&nbsp;: <em>«&nbsp;Nous espérons que votre visite s&apos;est bien passée. Si vous avez un instant, nous apprécierions vraiment un avis Google — cela aide d&apos;autres patients à nous trouver&nbsp;: [lien]&nbsp;»</em></li>
        <li>Les avis positifs vont sur Google. Si un patient a eu une mauvaise expérience, il est dirigé vers un formulaire de retour privé plutôt qu&apos;un avis public</li>
      </ul>
      <p>Ce n&apos;est pas de la manipulation — c&apos;est de la pensée systémique. Et ça s&apos;accumule. Six mois de collecte automatisée transforment un profil de 14 avis en profil de 200&nbsp;avis.</p>

      <h2>5. Des réseaux sociaux qui amènent réellement des patients</h2>
      <p>La plupart des cabinets ne publient pas du tout sur les réseaux sociaux, ou publient du contenu générique «&nbsp;Bon lundi&nbsp;!&nbsp;» qui ne génère aucun patient.</p>
      <p>Ce qui fonctionne réellement sur Instagram et Facebook pour les cabinets dentaires en 2026&nbsp;:</p>

      <h3>Transformations avant-après</h3>
      <p>Le format de contenu le plus performant pour la dentisterie, sans exception. Les patients voient un vrai résultat sur une vraie personne dans votre cabinet. Avec consentement et anonymisation si nécessaire — mais ces publications génèrent des demandes directes.</p>

      <h3>Vidéos «&nbsp;à quoi s&apos;attendre&nbsp;»</h3>
      <p>Vidéos courtes (60–90&nbsp;secondes) sur ce qui se passe pendant un détartrage, un blanchiment ou une consultation pour implants. Elles enlèvent la peur. La peur est la raison&nbsp;n°&nbsp;1 pour laquelle les gens évitent de prendre rendez-vous.</p>

      <h3>Témoignages patients en vidéo</h3>
      <p>Tournés à l&apos;horizontale, lumière naturelle, sans script. Un patient parlant 60&nbsp;secondes face caméra de son expérience dans votre cabinet vaut plus que toute publicité que vous pourriez diffuser.</p>

      <h3>Le dentiste en tant que personne</h3>
      <p>Une vidéo de 30&nbsp;secondes où vous expliquez quelque chose de simple («&nbsp;Pourquoi je recommande toujours X&nbsp;») construit la confiance plus vite que tout contenu promotionnel. Les gens achètent à des gens.</p>

      <p>Publiez au minimum 3&nbsp;fois par semaine. Engagez avec les commentaires. Ne planifiez pas et ne disparaissez pas.</p>

      <h2>6. Diffusez des annonces qui correspondent à l&apos;intention du patient</h2>
      <p>Si vous diffusez des Google Ads, le plus important est que vos annonces correspondent à ce que les patients recherchent réellement.</p>

      <h3>Recherches à forte intention à cibler</h3>
      <ul>
        <li>«&nbsp;dentiste près de moi prenant de nouveaux patients&nbsp;»</li>
        <li>«&nbsp;implants dentaires [votre ville]&nbsp;»</li>
        <li>«&nbsp;consultation Invisalign [votre ville]&nbsp;»</li>
        <li>«&nbsp;dentiste urgence [votre ville]&nbsp;»</li>
        <li>«&nbsp;blanchiment dentaire [votre ville]&nbsp;»</li>
      </ul>

      <h3>Recherches à faible intention à éviter</h3>
      <ul>
        <li>«&nbsp;combien coûtent les implants dentaires&nbsp;» (recherche, pas prêt à réserver)</li>
        <li>«&nbsp;avis dentiste&nbsp;» (phase de comparaison, pas de réservation)</li>
      </ul>

      <p>Une campagne Google Ads ciblée sur des recherches à forte intention dans un rayon de 10&nbsp;km autour de votre cabinet, avec une landing page correspondant au mot-clé et une relance automatique pour chaque demande, est de loin le moyen le plus prévisible de faire croître votre patientèle.</p>

      <Callout variant="info" title="Repère de budget">
        <p>Les cabinets dentaires suisses devraient prévoir <strong>CHF&nbsp;800–2&apos;500/mois</strong> en Google Ads selon leur mix de traitements ciblés. Les traitements à forte valeur (implants, Invisalign) justifient des dépenses plus élevées car la valeur vie du patient est nettement plus grande.</p>
      </Callout>

      <h2>7. Faites travailler votre site web</h2>
      <p>Votre site a une seule mission&nbsp;: convertir un visiteur en rendez-vous ou en demande.</p>
      <p>La plupart des sites de cabinets dentaires échouent à cela. Ils sont jolis mais ne sont pas faits pour convertir.</p>
      <p>Les non-négociables pour 2026&nbsp;:</p>
      <ul>
        <li><strong>Mobile-first</strong> — plus de 70&nbsp;% des recherches dentaires se font sur téléphone</li>
        <li><strong>Bouton click-to-call</strong> immédiatement visible sur mobile</li>
        <li><strong>Réservation en ligne ou formulaire de contact above the fold</strong> — n&apos;obligez pas les patients à scroller pour trouver comment réserver</li>
        <li><strong>Preuve sociale en page d&apos;accueil</strong> — votre note Google et le nombre d&apos;avis, mis en évidence</li>
        <li><strong>USP claire dans le titre</strong> — pas «&nbsp;Votre dentiste local sympathique&nbsp;» mais quelque chose de spécifique&nbsp;: «&nbsp;Le cabinet le mieux noté de Zurich pour Invisalign et la dentisterie esthétique&nbsp;»</li>
        <li><strong>Vitesse</strong> — si votre site met plus de 3&nbsp;secondes à charger sur mobile, vous perdez des patients avant même qu&apos;ils ne le voient</li>
      </ul>

      <h2>La vraie réponse pour avoir plus de patients dentaires</h2>
      <p>Chaque stratégie de cet article fonctionne. Mais des stratégies sans système ne sont que des tâches sur une to-do list reportées à la semaine suivante.</p>
      <p>Les cabinets qui croissent de manière constante — trimestre après trimestre, et pas seulement quand le propriétaire pense à publier sur Instagram — sont ceux qui ont un système marketing tournant en arrière-plan pendant qu&apos;ils se concentrent sur le soin des patients.</p>
      <p>Ce système comprend&nbsp;:</p>
      <ul>
        <li>Captation et relance automatisées des leads</li>
        <li>Un workflow de gestion de la réputation</li>
        <li>Une publication de contenu à un rythme constant</li>
        <li>Des annonces ciblant la bonne intention au bon moment</li>
        <li>Un tableau de bord qui montre ce qui génère des patients et ce qui n&apos;en génère pas</li>
      </ul>
      <p>C&apos;est exactement ce que nous construisons chez Alpine Marketing pour les cabinets dentaires en Suisse et à travers l&apos;Europe.</p>
      <p>Nous ne vous présentons pas un deck de 40&nbsp;slides. Nous cartographions votre tunnel actuel, identifions où les patients décrochent, et bâtissons un système pour le corriger. Ensuite, nous mesurons ce qui se passe.</p>

      <h2>Questions fréquentes</h2>

      <h3>Combien de temps faut-il pour voir plus de patients grâce au marketing&nbsp;?</h3>
      <p>Avec relance automatisée et Google Ads&nbsp;: 2–4&nbsp;semaines. Avec SEO et contenu organique&nbsp;: 3–6&nbsp;mois. Les gains les plus rapides viennent toujours de la correction de la lacune de relance en premier.</p>

      <h3>Combien un cabinet dentaire suisse devrait-il dépenser en marketing&nbsp;?</h3>
      <p>Le repère du secteur est de 3–5&nbsp;% du chiffre d&apos;affaires brut. Pour un cabinet générant CHF&nbsp;500&apos;000/an, cela représente CHF&nbsp;15&apos;000–25&apos;000/an — environ CHF&nbsp;1&apos;250–2&apos;100/mois.</p>

      <h3>Dois-je être présent sur tous les réseaux sociaux&nbsp;?</h3>
      <p>Non. Choisissez-en un et faites-le bien. Pour les cabinets dentaires, Instagram est la plateforme avec le meilleur ROI en Suisse. Facebook fonctionne bien pour les 40&nbsp;ans et plus. TikTok est en croissance pour les moins de&nbsp;35&nbsp;ans.</p>

      <h3>Quel est le changement à plus fort impact que je peux faire cette semaine&nbsp;?</h3>
      <p>Mettre en place un SMS de relance automatique pour chaque demande en ligne. Si vous recevez 20&nbsp;demandes par mois et convertissez 30&nbsp;%, cela fait 6&nbsp;patients. Améliorez votre vitesse de relance et vous pourriez convertir 14. Même dépense, deux fois plus de patients.</p>

      <hr />

      <p><em>Alpine Marketing construit des systèmes marketing pilotés par IA pour les cabinets dentaires et les PME en Suisse, en Allemagne et en Autriche. Nous parlons allemand, français et anglais.</em></p>
    </>
  );
}

/* ========================================================================
   ITALIANO
   ======================================================================== */
function BodyIt() {
  return (
    <>
      <p>La maggior parte degli studi dentistici in Svizzera non ha un problema di marketing. Ha un problema di sistema.</p>
      <p>Spendono in pubblicità. Hanno un Profilo Google Business. Alcuni pubblicano persino su Instagram. Ma i nuovi pazienti non arrivano al ritmo di cui lo studio ha bisogno — e nessuno sa spiegare bene perché.</p>
      <p>Ecco perché: ottenere più pazienti non significa fare <em>più</em> marketing. Significa colmare il divario tra il marketing che già fate e il momento in cui qualcuno prenota un appuntamento.</p>
      <p>Questa guida analizza esattamente quali sono questi divari e come colmarli — sistematicamente.</p>

      <h2>Perché il passaparola da solo non basta più</h2>
      <p>Dieci anni fa, uno studio dentistico a Zurigo o Basilea poteva vivere quasi interamente di referral. Una buona reputazione, una clientela fedele, e qualche volantino occasionale nella cassetta delle lettere.</p>
      <p>Quel modello è rotto.</p>

      <Callout variant="warning" title="Il nuovo comportamento d'acquisto">
        <p><strong>Il 71% dei consumatori oggi cerca un dentista online prima di prenotare</strong> — anche quando è stato consigliato personalmente. Controllano le recensioni Google, guardano il vostro sito sul telefono e vi confrontano con altri tre studi prima di decidere.</p>
      </Callout>

      <p>Lo studio che vince non è sempre quello con il miglior dentista. È quello che appare più affidabile online e risponde più velocemente.</p>
      <p>La buona notizia: con il sistema giusto è completamente risolvibile.</p>

      <h2>1. Sappiate esattamente chi è il vostro paziente ideale</h2>
      <p>Prima di cambiare qualsiasi cosa nel vostro marketing, fate chiarezza su chi state cercando di attirare.</p>
      <p>Non tutti i pazienti hanno lo stesso valore per il vostro studio. Un paziente che viene per una pulizia da CHF&nbsp;80 due volte all&apos;anno è molto diverso da uno che prenota impianti, faccette o Invisalign.</p>
      <p>Chiedetevi:</p>
      <ul>
        <li>Qual è il valore medio di trattamento del mio paziente ideale?</li>
        <li>Dove vive? (Entro 5&nbsp;km? 10&nbsp;km?)</li>
        <li>Cosa cerca tipicamente quando ci trova?</li>
        <li>Cosa facciamo meglio di qualsiasi altro studio nelle vicinanze?</li>
      </ul>
      <p>Una volta che conoscete le risposte, ogni decisione di marketing diventa più facile. Smettete di provare ad attirare tutti e iniziate a costruire un sistema che attira le persone giuste.</p>

      <Callout variant="info" title="Nota Alpine">
        <p>Costruiamo quello che chiamiamo un <strong>Profilo Paziente</strong> prima di toccare anche un solo annuncio o contenuto per i nostri clienti dentistici. Risparmia migliaia in spesa sprecata.</p>
      </Callout>

      <h2>2. Il vostro Profilo Google Business è il vostro asset di marketing più importante</h2>
      <p>Se da questo articolo fate solo una cosa, ottimizzate il vostro Profilo Google Business.</p>
      <p>Quando qualcuno cerca «dentista Zurigo» o «dentista vicino a me», Google mostra il map pack locale <em>prima</em> di qualsiasi sito web. Gli studi che appaiono nei primi 3 di quel map pack ricevono la stragrande maggioranza dei clic.</p>
      <p>Cosa fanno di diverso gli studi top:</p>
      <ul>
        <li><strong>Caricano nuove foto ogni settimana</strong> — gli studi con 100+ foto ricevono il 520% di chiamate in più rispetto a quelli con meno di 10</li>
        <li><strong>Rispondono a ogni recensione entro 24 ore</strong> — sia positive che negative</li>
        <li><strong>Pubblicano aggiornamenti settimanali</strong> — Google tratta il vostro Profilo come un account social</li>
        <li><strong>Usano keyword nella descrizione</strong> — includete naturalmente termini come «impianti dentali Zurigo» o «Invisalign Basilea»</li>
      </ul>
      <p>Costa nulla tranne 30 minuti a settimana. La maggior parte degli studi non lo fa. Quello è il vostro vantaggio competitivo.</p>

      <h2>3. Risolvete il problema della velocità (è qui che si perdono la maggior parte dei pazienti)</h2>
      <p>Ecco cosa nessuno dice agli studi dentistici sui lead online:</p>

      <Callout variant="warning" title="La regola dei 5 minuti">
        <p>Se non rispondete entro <strong>5 minuti</strong> da una richiesta online, perdete <strong>l&apos;80%</strong> di quei lead.</p>
        <p>Non il 20%. Ottanta.</p>
      </Callout>

      <p>Un potenziale paziente compila il vostro modulo di contatto martedì alle 19. La vostra receptionist lo vede mercoledì mattina e manda un&apos;email. A quel punto quella persona ha già prenotato altrove.</p>
      <p>È il problema più comune e più costoso che risolviamo per gli studi dentistici. La soluzione è un sistema di follow-up automatizzato:</p>
      <ol>
        <li>Il paziente invia la richiesta tramite sito o annuncio</li>
        <li>Un SMS automatico parte entro 3 minuti: <em>«Ciao [Nome], grazie per averci contattato a [Nome dello studio]. Le scriveremo entro un&apos;ora per confermare l&apos;appuntamento — c&apos;è un orario che le va meglio?»</em></li>
        <li>Se non c&apos;è risposta entro 24 ore, parte un secondo touchpoint automatico</li>
        <li>La vostra receptionist gestisce solo lead già caldi e coinvolti</li>
      </ol>

      <Callout variant="highlight" title="Risultato reale">
        <p>Uno dei nostri clienti — uno studio dentistico generale nel canton Zurigo — ha implementato questo sistema ed è passato da <strong>12 nuovi pazienti al mese a 31</strong>. Stessa spesa pubblicitaria. Stesso team. Solo un sistema di follow-up più veloce e intelligente.</p>
      </Callout>

      <p>Ecco cosa significa marketing automation in pratica. Non uno stack software complesso — un sistema in cui nessun lead si raffredda mai.</p>

      <h2>4. Costruite un sistema di reputazione (non chiedete recensioni a caso)</h2>
      <p>Le recensioni online non sono più opzionali. <strong>Il 92% dei nuovi pazienti legge le recensioni prima di prenotare un appuntamento dal dentista.</strong> Uno studio con 14 recensioni e 4,2 stelle perde sempre contro uno con 200 recensioni e 4,7 stelle.</p>
      <p>Ma ecco l&apos;errore della maggior parte degli studi: chiedono recensioni a caso, quando se ne ricordano, e solo a pazienti che sembrano contenti.</p>
      <p>Un sistema di reputazione lo fa automaticamente:</p>
      <ul>
        <li>Il paziente lascia lo studio dopo un appuntamento positivo</li>
        <li>2 ore dopo riceve un SMS: <em>«Speriamo che la sua visita sia stata piacevole. Se ha un momento, una recensione su Google sarebbe molto apprezzata — aiuta altri pazienti a trovarci: [link]»</em></li>
        <li>Le recensioni positive vanno su Google. Se un paziente ha avuto un&apos;esperienza negativa, viene indirizzato a un modulo di feedback privato anziché a una recensione pubblica</li>
      </ul>
      <p>Non è manipolazione — è buon pensiero sistemico. E si accumula nel tempo. Sei mesi di raccolta automatizzata di recensioni trasformano un profilo da 14 recensioni in uno da 200.</p>

      <h2>5. Social media che portano davvero pazienti</h2>
      <p>La maggior parte degli studi dentistici o non posta sui social, o posta contenuti generici tipo «Buon lunedì!» che generano zero pazienti.</p>
      <p>Cosa funziona davvero su Instagram e Facebook per gli studi dentistici nel 2026:</p>

      <h3>Trasformazioni prima-dopo</h3>
      <p>Il singolo formato di contenuto che performa di più per la dentistica, costantemente. I pazienti vedono un risultato reale su una persona reale del vostro studio. Con consenso e anonimizzazione dove necessario — ma questi post generano richieste dirette.</p>

      <h3>Video di processo «cosa aspettarsi»</h3>
      <p>Video brevi (60–90 secondi) su cosa succede durante una pulizia, uno sbiancamento o una consulenza per impianti. Eliminano la paura. La paura è il motivo numero 1 per cui le persone evitano di prenotare.</p>

      <h3>Testimonianze video dei pazienti</h3>
      <p>Girate in orizzontale, luce naturale, senza copione. Un paziente che parla 60 secondi direttamente in camera della sua esperienza nel vostro studio vale più di qualsiasi annuncio.</p>

      <h3>Il dentista come persona</h3>
      <p>Un video di 30 secondi in cui spiegate qualcosa di semplice («Perché consiglio sempre X») costruisce fiducia più velocemente di qualsiasi contenuto promozionale. Le persone comprano da persone.</p>

      <p>Postate almeno 3 volte a settimana. Interagite con i commenti. Non programmate e basta per poi sparire.</p>

      <h2>6. Lanciate annunci che corrispondono all&apos;intenzione del paziente</h2>
      <p>Se state usando Google Ads, la cosa più importante è abbinare i vostri annunci a ciò che i pazienti cercano davvero.</p>

      <h3>Ricerche ad alta intenzione da targetizzare</h3>
      <ul>
        <li>«dentista vicino a me che accetta nuovi pazienti»</li>
        <li>«impianti dentali [vostra città]»</li>
        <li>«consulenza Invisalign [vostra città]»</li>
        <li>«dentista urgenza [vostra città]»</li>
        <li>«sbiancamento denti [vostra città]»</li>
      </ul>

      <h3>Ricerche a bassa intenzione su cui evitare di puntare</h3>
      <ul>
        <li>«quanto costano gli impianti dentali» (ricerca, non pronto a prenotare)</li>
        <li>«recensioni dentista» (fase di confronto, non di prenotazione)</li>
      </ul>

      <p>Una campagna Google Ads focalizzata su ricerche ad alta intenzione in un raggio di 10&nbsp;km dal vostro studio, con una landing page che corrisponde alla query e un follow-up automatico per ogni richiesta, è il modo più prevedibile per far crescere il numero di nuovi pazienti.</p>

      <Callout variant="info" title="Benchmark di budget">
        <p>Gli studi dentistici svizzeri dovrebbero allocare <strong>CHF&nbsp;800–2&apos;500/mese</strong> in Google Ads a seconda del mix di trattamenti target. I trattamenti ad alto valore (impianti, Invisalign) giustificano spese maggiori perché il valore vita del paziente è significativamente più alto.</p>
      </Callout>

      <h2>7. Fate lavorare il vostro sito</h2>
      <p>Il vostro sito ha un solo compito: convertire un visitatore in un appuntamento prenotato o una richiesta.</p>
      <p>La maggior parte dei siti dentistici fallisce in questo. Sono belli ma non sono fatti per convertire.</p>
      <p>I non-negoziabili per il 2026:</p>
      <ul>
        <li><strong>Mobile-first</strong> — oltre il 70% delle ricerche dentali avviene da telefono</li>
        <li><strong>Pulsante click-to-call</strong> immediatamente visibile su mobile</li>
        <li><strong>Prenotazione online o modulo di contatto above the fold</strong> — non costringete i pazienti a scorrere per trovare come prenotare</li>
        <li><strong>Riprova sociale in homepage</strong> — il vostro punteggio Google e il numero di recensioni, ben visibili</li>
        <li><strong>USP chiara nel titolo</strong> — non «Il vostro dentista di fiducia» ma qualcosa di specifico: «Lo studio più recensito di Zurigo per Invisalign e odontoiatria estetica»</li>
        <li><strong>Velocità</strong> — se il vostro sito impiega più di 3 secondi a caricare su mobile, state perdendo pazienti prima ancora che lo vedano</li>
      </ul>

      <h2>La vera risposta per ottenere più pazienti dentistici</h2>
      <p>Ogni strategia di questo articolo funziona. Ma le strategie senza un sistema sono solo compiti su una to-do list rimandati alla settimana successiva.</p>
      <p>Gli studi che crescono in modo costante — trimestre dopo trimestre, e non solo quando il titolare si ricorda di postare su Instagram — sono quelli che hanno un sistema di marketing che gira sullo sfondo mentre loro si concentrano sulla cura dei pazienti.</p>
      <p>Quel sistema include:</p>
      <ul>
        <li>Lead capture e follow-up automatizzati</li>
        <li>Un workflow di gestione della reputazione</li>
        <li>Pubblicazione di contenuti con cadenza costante</li>
        <li>Annunci che intercettano la giusta intenzione al momento giusto</li>
        <li>Una dashboard che mostra cosa genera pazienti e cosa no</li>
      </ul>
      <p>È esattamente ciò che costruiamo in Alpine Marketing per gli studi dentistici in Svizzera e in tutta Europa.</p>
      <p>Non vi vendiamo un deck da 40 slide. Mappiamo il vostro funnel attuale, identifichiamo dove i pazienti escono e costruiamo un sistema per risolverlo. Poi misuriamo cosa succede.</p>

      <h2>Domande frequenti</h2>

      <h3>Quanto tempo ci vuole per vedere più pazienti dal marketing?</h3>
      <p>Con follow-up automatizzato e Google Ads: 2–4 settimane. Con SEO e contenuti organici: 3–6 mesi. Le vittorie più rapide arrivano sempre dal correggere prima la lacuna del follow-up.</p>

      <h3>Quanto dovrebbe spendere uno studio dentistico svizzero in marketing?</h3>
      <p>Il benchmark del settore è il 3–5% del fatturato lordo. Per uno studio che genera CHF&nbsp;500&apos;000/anno, sono CHF&nbsp;15&apos;000–25&apos;000/anno — circa CHF&nbsp;1&apos;250–2&apos;100/mese.</p>

      <h3>Devo essere su tutte le piattaforme social?</h3>
      <p>No. Sceglietene una e fatela bene. Per gli studi dentistici, Instagram è la piattaforma con il miglior ROI in Svizzera. Facebook funziona bene per gli over 40. TikTok cresce per gli under 35.</p>

      <h3>Qual è il singolo cambiamento ad alto impatto che posso fare questa settimana?</h3>
      <p>Impostare un follow-up SMS automatico per ogni richiesta online. Se ricevete 20 richieste al mese e convertite il 30%, sono 6 pazienti. Sistemate la velocità di follow-up e potreste convertirne 14. Stessa spesa, doppio dei pazienti.</p>

      <hr />

      <p><em>Alpine Marketing costruisce sistemi di marketing potenziati dall&apos;IA per studi dentistici e PMI in Svizzera, Germania e Austria. Parliamo tedesco, francese e inglese.</em></p>
    </>
  );
}

/* ========================================================================
   УКРАЇНСЬКА
   ======================================================================== */
function BodyUk() {
  return (
    <>
      <p>У більшості стоматологічних клінік у Швейцарії немає проблеми з маркетингом. У них проблема з системою.</p>
      <p>Вони витрачають гроші на рекламу. У них є Google Business Profile. Дехто навіть постить в Instagram. Але нові пацієнти не приходять у потрібному темпі — і ніхто не може толком пояснити чому.</p>
      <p>Ось чому: щоб отримати більше пацієнтів, не треба робити <em>більше</em> маркетингу. Треба закрити прогалини між маркетингом, який ви вже робите, і моментом, коли пацієнт записується.</p>
      <p>Цей гайд показує, що це за прогалини й як їх закривати — системно.</p>

      <h2>Чому самого «сарафанного радіо» вже недостатньо</h2>
      <p>Десять років тому стоматологічна клініка в Цюриху чи Базелі могла існувати майже виключно на рекомендаціях. Хороша репутація, лояльна база й час від часу флаєр у поштовій скриньці.</p>
      <p>Ця модель зламалася.</p>

      <Callout variant="warning" title="Нова поведінка покупця">
        <p><strong>71 % споживачів сьогодні шукають стоматолога онлайн перед записом</strong> — навіть якщо їх особисто порекомендували. Вони перевіряють ваші відгуки в Google, дивляться сайт на телефоні й порівнюють вас із трьома іншими клініками, перш ніж прийняти рішення.</p>
      </Callout>

      <p>Перемагає не завжди клініка з найкращим стоматологом. Перемагає та, що виглядає найдостовірніше онлайн і відповідає найшвидше.</p>
      <p>Хороша новина: з правильною системою це повністю можна виправити.</p>

      <h2>1. Точно знайте, хто ваш ідеальний пацієнт</h2>
      <p>Перш ніж щось змінювати в маркетингу, чітко визначте, кого саме ви хочете приваблювати.</p>
      <p>Не кожен пацієнт цінний однаково. Той, хто двічі на рік приходить на чистку за CHF&nbsp;80, дуже відрізняється від того, хто записується на імпланти, вініри чи Invisalign.</p>
      <p>Запитайте себе:</p>
      <ul>
        <li>Яка середня вартість лікування мого ідеального пацієнта?</li>
        <li>Де він живе? (У радіусі 5&nbsp;км? 10&nbsp;км?)</li>
        <li>Що він зазвичай шукає, коли знаходить нас?</li>
        <li>Що ми робимо краще за будь-яку іншу клініку поруч?</li>
      </ul>
      <p>Коли відповіді відомі, кожне маркетингове рішення стає простішим. Ви припиняєте намагатися догодити всім і починаєте будувати систему, яка приваблює саме тих, хто потрібен.</p>

      <Callout variant="info" title="Нотатка Alpine">
        <p>Ми створюємо те, що називаємо <strong>Профілем пацієнта</strong>, перш ніж торкатися хоч одного оголошення чи матеріалу для наших стоматологічних клієнтів. Це економить тисячі на марних витратах.</p>
      </Callout>

      <h2>2. Ваш Google Business Profile — найважливіший маркетинговий актив</h2>
      <p>Якщо з усієї статті ви зробите лише одне — оптимізуйте свій Google Business Profile.</p>
      <p>Коли хтось шукає «Zahnarzt Zürich» чи «стоматолог поруч», Google показує локальний map pack <em>раніше</em> за будь-які сайти. Клініки в топ-3 цього map pack отримують переважну більшість кліків.</p>
      <p>Що топові клініки роблять інакше:</p>
      <ul>
        <li><strong>Завантажують нові фото щотижня</strong> — клініки зі 100+ фото отримують на 520 % більше дзвінків, ніж із менш ніж 10</li>
        <li><strong>Відповідають на кожен відгук протягом 24 годин</strong> — і позитивний, і негативний</li>
        <li><strong>Публікують оновлення щотижня</strong> — Google ставиться до Business Profile, як до соцмережі</li>
        <li><strong>Використовують ключові слова в описі</strong> — природно вписують терміни на кшталт «зубні імпланти Цюрих» чи «Invisalign Базель»</li>
      </ul>
      <p>Це коштує лише 30 хвилин на тиждень. Більшість клінік цього не робить. Це і є ваша конкурентна перевага.</p>

      <h2>3. Вирішіть проблему швидкості (саме тут втрачається більшість пацієнтів)</h2>
      <p>Ось що ніхто не каже стоматологічним клінікам про онлайн-ліди:</p>

      <Callout variant="warning" title="Правило 5 хвилин">
        <p>Якщо ви не передзвонюєте протягом <strong>5 хвилин</strong> після онлайн-запиту, ви втрачаєте <strong>80 %</strong> цих лідів.</p>
        <p>Не 20 %. Вісімдесят.</p>
      </Callout>

      <p>Потенційний пацієнт заповнює форму у вівторок о 19:00. Адміністратор бачить її в середу вранці й надсилає email. На цей момент ця людина вже записалася до когось іншого.</p>
      <p>Це найпоширеніша й найдорожча проблема, яку ми вирішуємо для стоматологій. Рішення — система автоматичного фоллоу-апу:</p>
      <ol>
        <li>Пацієнт надсилає запит через сайт або рекламу</li>
        <li>Автоматичне SMS вилітає протягом 3 хвилин: <em>«Вітаємо, [Ім&apos;я]! Дякуємо, що звернулися до [Назва клініки]. Зв&apos;яжемося протягом години, щоб підтвердити запис — який час вам найзручніший?»</em></li>
        <li>Якщо за 24 години немає відповіді, автоматично йде другий touchpoint</li>
        <li>Адміністратор працює лише з лідами, що вже теплі та залучені</li>
      </ol>

      <Callout variant="highlight" title="Реальний результат">
        <p>Один із наших клієнтів — загальна стоматологія в кантоні Цюрих — впровадив цю систему й перейшов з <strong>12 нових пацієнтів на місяць до 31</strong>. Той самий рекламний бюджет. Та сама команда. Просто швидша й розумніша система фоллоу-апу.</p>
      </Callout>

      <p>Ось що насправді означає маркетингова автоматизація на практиці. Не складний софтверний стек — система, в якій жоден лід не охолоне.</p>

      <h2>4. Збудуйте систему репутації (а не просто «просіть відгуки»)</h2>
      <p>Онлайн-відгуки більше не є опцією. <strong>92 % нових пацієнтів читають відгуки перед записом до стоматолога.</strong> Клініка з 14 відгуками й рейтингом 4,2 щоразу програє клініці з 200 відгуками й 4,7 — без винятку.</p>
      <p>Але ось помилка більшості: відгуки просять випадково, коли згадають, і лише в тих, хто здається задоволеним.</p>
      <p>Система репутації робить це автоматично:</p>
      <ul>
        <li>Пацієнт виходить із клініки після позитивного візиту</li>
        <li>За 2 години отримує SMS: <em>«Сподіваємося, ваш візит був комфортним. Якщо у вас є хвилинка, ми будемо дуже вдячні за відгук у Google — це допомагає іншим пацієнтам нас знайти: [посилання]»</em></li>
        <li>Позитивні відгуки йдуть у Google. Якщо досвід був поганий — пацієнта ведуть на приватну форму, а не на публічний відгук</li>
      </ul>
      <p>Це не маніпуляція — це здорове системне мислення. І воно накопичується. Шість місяців автоматизованого збору відгуків перетворюють профіль із 14 відгуками на профіль із 200.</p>

      <h2>5. Соцмережі, які реально приводять пацієнтів</h2>
      <p>Більшість стоматологій або не постять у соцмережах узагалі, або публікують щось на кшталт «Чудового понеділка!» — це генерує нуль пацієнтів.</p>
      <p>Що дійсно працює в Instagram і Facebook для стоматологій у 2026:</p>

      <h3>Трансформації «до й після»</h3>
      <p>Постійно — найрезультативніший формат контенту для стоматології. Пацієнти бачать реальний результат на реальній людині у вашій клініці. Зі згодою й анонімізацією, де треба, — але такі пости приносять прямі запити.</p>

      <h3>Відео «що очікувати»</h3>
      <p>Короткі відео (60–90 секунд) про те, що відбувається під час чистки, відбілювання чи консультації з імплантації. Вони знімають страх. А страх — причина №1, чому люди не записуються.</p>

      <h3>Відеовідгуки пацієнтів</h3>
      <p>Знято горизонтально, природне світло, без сценарію. Пацієнт, що 60 секунд говорить у камеру про свій досвід у вашій клініці, цінніший за будь-яку рекламу.</p>

      <h3>Стоматолог як людина</h3>
      <p>30-секундне відео, де ви простими словами щось пояснюєте («Чому я завжди раджу X»), будує довіру швидше за будь-який рекламний контент. Люди купують у людей.</p>

      <p>Постіть мінімум тричі на тиждень. Реагуйте на коментарі. Не плануйте та не зникайте.</p>

      <h2>6. Запускайте рекламу, що відповідає інтенту пацієнта</h2>
      <p>Якщо ви ведете Google Ads, найважливіше — щоб ваші оголошення відповідали тому, що пацієнти реально шукають.</p>

      <h3>Запити з високим інтентом, які варто таргетити</h3>
      <ul>
        <li>«стоматолог поруч приймає нових пацієнтів»</li>
        <li>«зубні імпланти [ваше місто]»</li>
        <li>«консультація Invisalign [ваше місто]»</li>
        <li>«ургентний стоматолог [ваше місто]»</li>
        <li>«відбілювання зубів [ваше місто]»</li>
      </ul>

      <h3>Запити з низьким інтентом, на які не варто ставити</h3>
      <ul>
        <li>«скільки коштують зубні імпланти» (стадія дослідження, не запису)</li>
        <li>«відгуки про стоматолога» (стадія порівняння, не запису)</li>
      </ul>

      <p>Сфокусована Google Ads-кампанія на запити з високим інтентом у радіусі 10&nbsp;км від клініки, з лендингом під запит і автоматичним фоллоу-апом для кожної заявки, — це найпередбачуваніший спосіб збільшити кількість нових пацієнтів.</p>

      <Callout variant="info" title="Орієнтир бюджету">
        <p>Швейцарські стоматологічні клініки мають закладати <strong>CHF&nbsp;800–2&apos;500/міс.</strong> на Google Ads залежно від міксу процедур. Дорогі процедури (імпланти, Invisalign) виправдовують вищі витрати, бо lifetime-цінність пацієнта значно вища.</p>
      </Callout>

      <h2>7. Зробіть так, щоб ваш сайт працював</h2>
      <p>У сайту одна задача: перетворити відвідувача на запис або заявку.</p>
      <p>Більшість стоматологічних сайтів із цим не справляються. Вони красиві, але не побудовані для конверсії.</p>
      <p>Те, що в 2026 не обговорюється:</p>
      <ul>
        <li><strong>Mobile-first</strong> — понад 70 % стоматологічних запитів — з телефонів</li>
        <li><strong>Кнопка click-to-call</strong>, видима на мобільному одразу</li>
        <li><strong>Онлайн-запис чи форма контакту above the fold</strong> — не змушуйте скролити, щоб записатися</li>
        <li><strong>Соцпідтвердження на головній</strong> — рейтинг Google і кількість відгуків на видному місці</li>
        <li><strong>Чітке УТП у заголовку</strong> — не «Ваш дружній місцевий стоматолог», а конкретно: «Найвисокорейтинговіша клініка Цюриха з Invisalign і естетичної стоматології»</li>
        <li><strong>Швидкість</strong> — якщо сайт вантажиться більше ніж 3 секунди на мобільному, ви втрачаєте пацієнтів іще до того, як вони його побачать</li>
      </ul>

      <h2>Справжня відповідь, як отримати більше стоматологічних пацієнтів</h2>
      <p>Кожна стратегія в цій статті працює. Але стратегії без системи — це просто пункти у списку справ, що переносяться на наступний тиждень.</p>
      <p>Клініки, що зростають стабільно — квартал за кварталом, а не лише коли власник згадає про Instagram, — це ті, у яких маркетингова система працює у фоні, поки команда лікує пацієнтів.</p>
      <p>Така система включає:</p>
      <ul>
        <li>Автоматичне захоплення лідів і фоллоу-ап</li>
        <li>Воркфлоу управління репутацією</li>
        <li>Публікацію контенту в стабільному ритмі</li>
        <li>Рекламу під правильний інтент у правильний момент</li>
        <li>Дашборд, що показує, що генерує пацієнтів, а що — ні</li>
      </ul>
      <p>Саме це ми будуємо в Alpine Marketing для стоматологічних клінік у Швейцарії та по всій Європі.</p>
      <p>Ми не показуємо вам 40-слайдову презентацію. Ми мапимо вашу поточну воронку, визначаємо, де відсіюються пацієнти, і будуємо систему, що це виправляє. А далі — міряємо, що сталося.</p>

      <h2>Поширені запитання</h2>

      <h3>Скільки часу треба, щоб маркетинг приніс більше пацієнтів?</h3>
      <p>З автоматичним фоллоу-апом і Google Ads: 2–4 тижні. З SEO та органічним контентом: 3–6 місяців. Найшвидші перемоги завжди з усунення прогалини у фоллоу-апі.</p>

      <h3>Скільки швейцарська стоматологія має витрачати на маркетинг?</h3>
      <p>Галузевий бенчмарк — 3–5 % валової виручки. Для клініки з обігом CHF&nbsp;500&apos;000/рік це CHF&nbsp;15&apos;000–25&apos;000/рік — приблизно CHF&nbsp;1&apos;250–2&apos;100/міс.</p>

      <h3>Чи треба бути на кожній соцмережі?</h3>
      <p>Ні. Оберіть одну й робіть її добре. Для стоматологій у Швейцарії Instagram має найвищий ROI. Facebook добре працює на аудиторію 40+. TikTok зростає для аудиторії до 35.</p>

      <h3>Яку одну зміну з найбільшим впливом я можу зробити цього тижня?</h3>
      <p>Налаштувати автоматичне SMS-фоллоу-ап на кожен онлайн-запит. Якщо у вас 20 запитів на місяць і конверсія 30 %, це 6 пацієнтів. Виправте швидкість фоллоу-апу — і їх може стати 14. Той самий бюджет, удвічі більше пацієнтів.</p>

      <hr />

      <p><em>Alpine Marketing будує AI-маркетингові системи для стоматологічних клінік і МСБ у Швейцарії, Німеччині та Австрії. Ми говоримо німецькою, французькою й англійською.</em></p>
    </>
  );
}

/* ========================================================================
   РУССКИЙ
   ======================================================================== */
function BodyRu() {
  return (
    <>
      <p>У большинства стоматологических клиник в Швейцарии нет проблемы с маркетингом. У них проблема с системой.</p>
      <p>Они тратят деньги на рекламу. У них есть Google Business Profile. Кто-то даже публикует в Instagram. Но новые пациенты не приходят с нужной скоростью — и никто толком не может объяснить почему.</p>
      <p>Вот почему: чтобы получить больше пациентов, не нужно делать <em>больше</em> маркетинга. Нужно закрыть пробелы между маркетингом, который вы уже делаете, и моментом записи пациента.</p>
      <p>Этот гайд разбирает, какие именно это пробелы и как их закрыть — системно.</p>

      <h2>Почему одного «сарафанного радио» уже недостаточно</h2>
      <p>Десять лет назад стоматология в Цюрихе или Базеле могла существовать почти полностью на рекомендациях. Хорошая репутация, лояльная база и иногда флаер в почтовом ящике.</p>
      <p>Эта модель сломана.</p>

      <Callout variant="warning" title="Новое покупательское поведение">
        <p><strong>71 % потребителей сегодня ищут стоматолога онлайн перед записью</strong> — даже если их лично порекомендовали. Они проверяют ваши отзывы в Google, смотрят сайт с телефона и сравнивают вас с тремя другими клиниками, прежде чем принять решение.</p>
      </Callout>

      <p>Побеждает не всегда клиника с лучшим врачом. Побеждает та, что выглядит самой надёжной онлайн и отвечает быстрее всех.</p>
      <p>Хорошая новость: с правильной системой это полностью решаемо.</p>

      <h2>1. Точно знайте, кто ваш идеальный пациент</h2>
      <p>Прежде чем что-то менять в маркетинге, чётко определите, кого вы хотите привлекать.</p>
      <p>Не каждый пациент стоит вашей клинике одинаково. Тот, кто дважды в год приходит на чистку за CHF&nbsp;80, очень отличается от того, кто записывается на импланты, виниры или Invisalign.</p>
      <p>Спросите себя:</p>
      <ul>
        <li>Какова средняя стоимость лечения моего идеального пациента?</li>
        <li>Где он живёт? (В радиусе 5&nbsp;км? 10&nbsp;км?)</li>
        <li>Что он обычно ищет, когда нас находит?</li>
        <li>Что мы делаем лучше любой другой клиники поблизости?</li>
      </ul>
      <p>Когда ответы ясны, каждое маркетинговое решение становится проще. Вы перестаёте угождать всем и начинаете строить систему, которая привлекает именно нужных людей.</p>

      <Callout variant="info" title="Заметка Alpine">
        <p>Мы создаём то, что называем <strong>Профилем пациента</strong>, прежде чем коснуться хотя бы одного объявления или контента для наших стоматологических клиентов. Это экономит тысячи в напрасных тратах.</p>
      </Callout>

      <h2>2. Ваш Google Business Profile — самый важный маркетинговый актив</h2>
      <p>Если из всей статьи вы сделаете только одно — оптимизируйте Google Business Profile.</p>
      <p>Когда кто-то ищет «Zahnarzt Zürich» или «стоматолог рядом», Google показывает локальный map pack <em>раньше</em> любого сайта. Клиники в топ-3 этого map pack получают подавляющее большинство кликов.</p>
      <p>Что делают по-другому топ-клиники:</p>
      <ul>
        <li><strong>Загружают новые фото каждую неделю</strong> — клиники со 100+ фото получают на 520 % больше звонков, чем с менее чем 10</li>
        <li><strong>Отвечают на каждый отзыв в течение 24 часов</strong> — и положительный, и отрицательный</li>
        <li><strong>Публикуют обновления еженедельно</strong> — Google относится к Business Profile как к соцсети</li>
        <li><strong>Используют ключевые слова в описании</strong> — естественно вписывают термины вроде «зубные импланты Цюрих» или «Invisalign Базель»</li>
      </ul>
      <p>Это стоит лишь 30 минут в неделю. Большинство клиник этого не делает. Это и есть ваше конкурентное преимущество.</p>

      <h2>3. Решите проблему скорости (именно здесь теряется большинство пациентов)</h2>
      <p>Вот что никто не говорит стоматологиям про онлайн-лиды:</p>

      <Callout variant="warning" title="Правило 5 минут">
        <p>Если вы не перезваниваете в течение <strong>5 минут</strong> после онлайн-запроса, вы теряете <strong>80 %</strong> этих лидов.</p>
        <p>Не 20 %. Восемьдесят.</p>
      </Callout>

      <p>Потенциальный пациент заполняет форму во вторник в 19:00. Администратор видит её в среду утром и отправляет email. К этому моменту человек уже записался к кому-то другому.</p>
      <p>Это самая частая и самая дорогая проблема, которую мы решаем для стоматологий. Решение — система автоматического фоллоу-апа:</p>
      <ol>
        <li>Пациент отправляет запрос через сайт или рекламу</li>
        <li>Автоматическое SMS уходит за 3 минуты: <em>«Здравствуйте, [Имя]! Спасибо, что обратились в [Название клиники]. Свяжемся в течение часа, чтобы подтвердить запись — какое время вам удобнее?»</em></li>
        <li>Если за 24 часа нет ответа, уходит второй автоматический touchpoint</li>
        <li>Администратор работает только с уже тёплыми и вовлечёнными лидами</li>
      </ol>

      <Callout variant="highlight" title="Реальный результат">
        <p>Один из наших клиентов — общая стоматология в кантоне Цюрих — внедрил эту систему и перешёл с <strong>12 новых пациентов в месяц до 31</strong>. Тот же бюджет на рекламу. Та же команда. Просто более быстрая и умная система фоллоу-апа.</p>
      </Callout>

      <p>Вот что на практике значит маркетинговая автоматизация. Не сложный программный стек — система, в которой ни один лид не остывает.</p>

      <h2>4. Постройте систему репутации (а не просто «просите отзывы»)</h2>
      <p>Онлайн-отзывы больше не опция. <strong>92 % новых пациентов читают отзывы перед записью к стоматологу.</strong> Клиника с 14 отзывами и рейтингом 4,2 каждый раз проигрывает клинике с 200 отзывами и 4,7 — без исключений.</p>
      <p>Но вот ошибка большинства: отзывы просят случайно, когда вспомнят, и только у тех, кто кажется довольным.</p>
      <p>Система репутации делает это автоматически:</p>
      <ul>
        <li>Пациент уходит из клиники после позитивного приёма</li>
        <li>Через 2 часа получает SMS: <em>«Надеемся, ваш визит был комфортным. Если у вас есть минутка, мы будем очень благодарны за отзыв в Google — это помогает другим пациентам нас найти: [ссылка]»</em></li>
        <li>Положительные отзывы идут в Google. Если опыт был плохой — пациента ведут на приватную форму обратной связи, а не на публичный отзыв</li>
      </ul>
      <p>Это не манипуляция — это здоровое системное мышление. И оно накапливается. Шесть месяцев автоматического сбора отзывов превращают профиль с 14 отзывами в профиль с 200.</p>

      <h2>5. Соцсети, которые реально приводят пациентов</h2>
      <p>Большинство стоматологий либо не постят в соцсетях вообще, либо публикуют контент вроде «Хорошего понедельника!», который не приводит ни одного пациента.</p>
      <p>Что действительно работает в Instagram и Facebook для стоматологий в 2026:</p>

      <h3>Трансформации «до и после»</h3>
      <p>Постоянно — формат контента с самым высоким перформансом для стоматологии. Пациенты видят реальный результат на реальном человеке в вашей клинике. С согласием и анонимизацией, где нужно, — но эти посты приносят прямые запросы.</p>

      <h3>Видео «что вас ожидает»</h3>
      <p>Короткие ролики (60–90 секунд) о том, что происходит во время чистки, отбеливания или консультации по имплантам. Они снимают страх. А страх — причина №1, по которой люди не записываются.</p>

      <h3>Видеоотзывы пациентов</h3>
      <p>Сняты горизонтально, естественный свет, без сценария. Пациент, говорящий 60 секунд в камеру о своём опыте в вашей клинике, ценнее любой рекламы, которую вы запустите.</p>

      <h3>Стоматолог как человек</h3>
      <p>30-секундное видео, где вы просто что-то объясняете («Почему я всегда советую X»), строит доверие быстрее любого промо. Люди покупают у людей.</p>

      <p>Публикуйте минимум 3 раза в неделю. Реагируйте на комментарии. Не планируйте и не пропадайте.</p>

      <h2>6. Запускайте рекламу под интент пациента</h2>
      <p>Если вы ведёте Google Ads, главное — чтобы ваши объявления соответствовали тому, что пациенты реально ищут.</p>

      <h3>Запросы с высоким интентом, которые стоит таргетить</h3>
      <ul>
        <li>«стоматолог рядом принимает новых пациентов»</li>
        <li>«зубные импланты [ваш город]»</li>
        <li>«консультация Invisalign [ваш город]»</li>
        <li>«экстренный стоматолог [ваш город]»</li>
        <li>«отбеливание зубов [ваш город]»</li>
      </ul>

      <h3>Запросы с низким интентом, на которые не стоит ставить</h3>
      <ul>
        <li>«сколько стоят зубные импланты» (исследование, не запись)</li>
        <li>«отзывы о стоматологе» (стадия сравнения, не записи)</li>
      </ul>

      <p>Сфокусированная Google Ads-кампания на запросы с высоким интентом в радиусе 10&nbsp;км от клиники, с лендингом под запрос и автоматическим фоллоу-апом для каждой заявки, — это самый предсказуемый способ нарастить число новых пациентов.</p>

      <Callout variant="info" title="Бюджетный ориентир">
        <p>Швейцарские стоматологии должны закладывать <strong>CHF&nbsp;800–2&apos;500/мес.</strong> на Google Ads в зависимости от микса процедур. Дорогие процедуры (импланты, Invisalign) оправдывают более высокие траты, потому что lifetime-ценность пациента существенно выше.</p>
      </Callout>

      <h2>7. Заставьте сайт работать</h2>
      <p>У сайта одна задача: превратить посетителя в запись или заявку.</p>
      <p>Большинство стоматологических сайтов с этим не справляются. Они красивые, но не сделаны под конверсию.</p>
      <p>То, что в 2026 не обсуждается:</p>
      <ul>
        <li><strong>Mobile-first</strong> — более 70 % стоматологических запросов — с телефонов</li>
        <li><strong>Кнопка click-to-call</strong>, сразу видимая на мобильном</li>
        <li><strong>Онлайн-запись или форма контакта above the fold</strong> — не заставляйте скроллить, чтобы записаться</li>
        <li><strong>Соцдоказательства на главной</strong> — рейтинг Google и количество отзывов на видном месте</li>
        <li><strong>Чёткое УТП в заголовке</strong> — не «Ваш добрый местный стоматолог», а конкретно: «Самая высокорейтинговая клиника Цюриха по Invisalign и эстетической стоматологии»</li>
        <li><strong>Скорость</strong> — если сайт грузится дольше 3 секунд на мобильном, вы теряете пациентов ещё до того, как они его увидят</li>
      </ul>

      <h2>Настоящий ответ на вопрос, как получить больше пациентов</h2>
      <p>Каждая стратегия из этой статьи работает. Но стратегии без системы — это просто пункты в списке дел, которые переносятся на следующую неделю.</p>
      <p>Клиники, которые растут стабильно — квартал за кварталом, а не только когда владелец вспомнил про Instagram, — это те, в которых маркетинговая система работает в фоне, пока команда лечит пациентов.</p>
      <p>Эта система включает:</p>
      <ul>
        <li>Автоматический захват лидов и фоллоу-ап</li>
        <li>Воркфлоу управления репутацией</li>
        <li>Публикацию контента в стабильном ритме</li>
        <li>Рекламу под правильный интент в правильный момент</li>
        <li>Дашборд, показывающий, что генерирует пациентов, а что — нет</li>
      </ul>
      <p>Именно это мы строим в Alpine Marketing для стоматологических клиник в Швейцарии и по всей Европе.</p>
      <p>Мы не показываем вам 40-слайдовую презентацию. Мы мапим вашу текущую воронку, находим, где отваливаются пациенты, и строим систему, которая это чинит. А потом измеряем, что произошло.</p>

      <h2>Часто задаваемые вопросы</h2>

      <h3>Сколько времени нужно, чтобы маркетинг привёл больше пациентов?</h3>
      <p>С автоматическим фоллоу-апом и Google Ads: 2–4 недели. С SEO и органическим контентом: 3–6 месяцев. Самые быстрые победы всегда приходят от закрытия пробела в фоллоу-апе в первую очередь.</p>

      <h3>Сколько швейцарской стоматологии тратить на маркетинг?</h3>
      <p>Отраслевой бенчмарк — 3–5 % валовой выручки. Для клиники с оборотом CHF&nbsp;500&apos;000/год это CHF&nbsp;15&apos;000–25&apos;000/год — около CHF&nbsp;1&apos;250–2&apos;100/мес.</p>

      <h3>Нужно ли быть на каждой соцсети?</h3>
      <p>Нет. Выберите одну и делайте её хорошо. Для стоматологий в Швейцарии Instagram — платформа с лучшим ROI. Facebook хорошо работает на аудиторию 40+. TikTok растёт для аудитории до 35.</p>

      <h3>Какое одно изменение с самым большим эффектом я могу сделать на этой неделе?</h3>
      <p>Настроить автоматическое SMS-фоллоу-ап на каждый онлайн-запрос. Если у вас 20 запросов в месяц и конверсия 30 %, это 6 пациентов. Исправьте скорость фоллоу-апа — и их может стать 14. Тот же бюджет, в два раза больше пациентов.</p>

      <hr />

      <p><em>Alpine Marketing строит AI-маркетинговые системы для стоматологических клиник и МСБ в Швейцарии, Германии и Австрии. Мы говорим на немецком, французском и английском.</em></p>
    </>
  );
}

const bodies: Record<string, () => ReactElement> = {
  en: BodyEn,
  de: BodyDe,
  fr: BodyFr,
  it: BodyIt,
  uk: BodyUk,
  ru: BodyRu,
};
