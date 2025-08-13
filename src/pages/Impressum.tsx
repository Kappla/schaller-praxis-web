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
        <div>
          <h2 className="text-xl font-semibold mb-3">Angaben gemäß § 5 TMG</h2>
          <div className="text-muted-foreground space-y-1">
            <p>Johanna Schaller</p>
            <p>Konradinstr. 5</p>
            <p>81543 München</p>
          </div>
        </div>
        
        <div>
          <h2 className="text-xl font-semibold mb-3">Kontakt</h2>
          <div className="text-muted-foreground space-y-1">
            <p>Telefon: <a className="underline" href="tel:+4915205396561">+49 (0) 152 05396561</a></p>
            <p>E‑Mail: <a className="underline" href="mailto:schaller-praxis@t-online.de">schaller-praxis@t-online.de</a></p>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">Berufsrechtliche Angaben</h2>
          <div className="text-muted-foreground space-y-1">
            <p><strong>Berufsbezeichnung:</strong> Psychologische Psychotherapeutin (verliehen in Deutschland)</p>
            <p><strong>Zuständige Kammer:</strong> Psychotherapeutenkammer Bayern</p>
            <p><strong>Zuständige Aufsichtsbehörde:</strong> Bayerisches Staatsministerium für Gesundheit und Pflege, Haidenauplatz 1, 81667 München</p>
            <p><strong>Berufsrechtliche Regelungen:</strong> <a className="underline" href="https://www.ptk-bayern.de" target="_blank" rel="noopener noreferrer">Psychotherapeutenkammer Bayern</a></p>
          </div>
        </div>
        <h2 className="text-xl font-semibold">Haftungsausschluss</h2>
        <p className="text-muted-foreground">
          Inhalte dieser Website wurden sorgfältig erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte wird keine Haftung übernommen.
        </p>
      </section>
    </main>
  );
}
