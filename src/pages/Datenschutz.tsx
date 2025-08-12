import { SEO } from "@/components/SEO";

export default function Datenschutz() {
  return (
    <main className="container py-12 md:py-16">
      <SEO
        title="Datenschutz | Praxis für Psychotherapie Schaller"
        description="Datenschutzhinweise der Praxis für Psychotherapie Schaller."
        path="/datenschutz"
      />
      <h1 className="mb-6 text-3xl font-semibold md:text-4xl">Datenschutz</h1>
      <section className="space-y-6 text-base leading-relaxed">
        <p className="text-muted-foreground">
          Der Schutz Ihrer Daten ist mir wichtig. Personenbezogene Daten werden ausschließlich zum Zweck der Kontaktaufnahme und Terminabstimmung verarbeitet und nicht an Dritte weitergegeben.
        </p>
        <h2 className="text-xl font-semibold">Kontaktformular</h2>
        <p className="text-muted-foreground">
          Die Nutzung des Formulars ist freiwillig. Mit Absenden willigen Sie in die Verarbeitung der übermittelten Angaben ein. Alternativ können Sie mir jederzeit direkt per E‑Mail schreiben.
        </p>
        <h2 className="text-xl font-semibold">Ihre Rechte</h2>
        <p className="text-muted-foreground">
          Sie haben das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung Ihrer personenbezogenen Daten.
        </p>
      </section>
    </main>
  );
}
