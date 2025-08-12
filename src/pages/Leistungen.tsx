import { SEO } from "@/components/SEO";

export default function Leistungen() {
  return (
    <main className="container py-12 md:py-16">
      <SEO
        title="Leistungen | Praxis für Psychotherapie Schaller"
        description="Therapieangebote: Unterstützung bei Angst, Depression, Stress, Lebenskrisen und persönlicher Entwicklung. Individuell und wirksam."
        path="/leistungen"
      />
      <h1 className="mb-6 text-3xl font-semibold md:text-4xl">Leistungen</h1>
      <section className="space-y-6 text-base leading-relaxed">
        <p className="text-muted-foreground">
          In meiner Praxis begleite ich Sie mit anerkannten Verfahren und einem ressourcenorientierten, wertschätzenden Ansatz.
        </p>
        <h2 className="text-xl font-semibold">Schwerpunkte</h2>
        <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
          <li>Angststörungen und Panik</li>
          <li>Depressive Episoden und Erschöpfung</li>
          <li>Stress, innere Unruhe und Überforderung</li>
          <li>Selbstwert, Orientierung, Lebenskrisen</li>
        </ul>
        <h2 className="text-xl font-semibold">Ablauf</h2>
        <p className="text-muted-foreground">
          Zu Beginn klären wir Ihr Anliegen und Ihre Ziele. Darauf aufbauend entwickeln wir einen individuellen Plan. Die Sitzungen finden in der Regel wöchentlich oder zweiwöchentlich statt.
        </p>
      </section>
    </main>
  );
}
