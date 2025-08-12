import { SEO } from "@/components/SEO";

export default function Praxis() {
  return (
    <main className="container py-12 md:py-16">
      <SEO
        title="Praxis & Anfahrt | Praxis für Psychotherapie Schaller"
        description="Ruhige Praxisräume mit guter Erreichbarkeit. Termine nach Vereinbarung."
        path="/praxis"
      />
      <h1 className="mb-6 text-3xl font-semibold md:text-4xl">Praxis & Anfahrt</h1>
      <section className="space-y-6 text-base leading-relaxed">
        <p className="text-muted-foreground">
          Die Praxis bietet eine ruhige, geschützte Atmosphäre. Öffentliche Verkehrsmittel und Parkmöglichkeiten sind gut erreichbar. Genauere Informationen erhalten Sie mit der Terminbestätigung.
        </p>
        <p className="text-muted-foreground">
          Termine sind nach Vereinbarung möglich.
        </p>
      </section>
    </main>
  );
}
