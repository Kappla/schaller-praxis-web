import { SEO } from "@/components/SEO";

export default function Impressum() {
  return (
    <main className="container py-12 md:py-16">
      <SEO
        title="Impressum | Praxis für Psychotherapie Schaller"
        description="Impressum der Praxis für Psychotherapie Schaller."
        path="/impressum"
      />
      <h1 className="mb-6 text-3xl font-semibold md:text-4xl">Impressum</h1>
      <section className="space-y-6 text-base leading-relaxed">
        <p className="text-muted-foreground"><strong>Verantwortlich:</strong><br/>Praxis für Psychotherapie Schaller</p>
        <p className="text-muted-foreground">
          Angaben gemäß § 5 TMG. Detaillierte Praxisanschrift und berufsrechtliche Angaben werden nachgereicht. Bitte kontaktieren Sie mich bis dahin per E‑Mail.
        </p>
        <h2 className="text-xl font-semibold">Kontakt</h2>
        <p className="text-muted-foreground">E‑Mail: <a className="underline" href="mailto:schaller-praxis@t-online.de">schaller-praxis@t-online.de</a></p>
        <h2 className="text-xl font-semibold">Haftungsausschluss</h2>
        <p className="text-muted-foreground">
          Inhalte dieser Website wurden sorgfältig erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte wird keine Haftung übernommen.
        </p>
      </section>
    </main>
  );
}
