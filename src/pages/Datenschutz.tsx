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
        <p>
          Verantwortlich für die Datenverarbeitung:<br />
          <strong>Johanna Schaller (M.Sc.)</strong><br />
          Psychologische Psychotherapeutin<br />
          Konradinstr. 5<br />
          81543 München<br />
          Telefon: <a href="tel:+4915205396561">+49 (0) 152 05396561</a><br />
          E-Mail: <a href="mailto:schaller-praxis@t-online.de">
            schaller-praxis@t-online.de
          </a>
        </p>

        <h2 className="text-xl font-semibold">Verarbeitung personenbezogener Daten</h2>
        <p className="text-muted-foreground">
          Es werden ausschließlich die personenbezogenen Daten verarbeitet, die Sie mir
          freiwillig per E-Mail übermitteln. Diese werden nur zur Bearbeitung Ihrer Anfrage
          und Terminabstimmung genutzt und nicht an Dritte weitergegeben.
          Rechtsgrundlage ist Art. 6 Abs. 1 lit. a und lit. b DSGVO.
        </p>

        <h2 className="text-xl font-semibold">Speicherdauer</h2>
        <p className="text-muted-foreground">
          Ihre Daten werden gelöscht, sobald sie für den Zweck der Kontaktaufnahme nicht mehr
          erforderlich sind, sofern keine gesetzlichen Aufbewahrungspflichten bestehen.
        </p>

        <h2 className="text-xl font-semibold">Cookies und lokale Speicherung</h2>
        <p className="text-muted-foreground">
          Diese Website verwendet technisch notwendige Cookies und lokale Speicherung (localStorage) 
          für folgende Zwecke:
        </p>
        <ul className="list-disc pl-6 text-muted-foreground">
          <li>Speicherung der Sidebar-Einstellungen (Cookie: sidebar:state, 7 Tage)</li>
          <li>Merken, ob Hinweise bereits ausgeblendet wurden (localStorage)</li>
        </ul>
        <p className="text-muted-foreground">
          Diese Cookies sind für die Funktionalität der Website erforderlich und werden ohne 
          Ihre gesonderte Einwilligung gesetzt (Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO).
        </p>

        <h2 className="text-xl font-semibold">Google Maps</h2>
        <p className="text-muted-foreground">
          Zur Darstellung der Praxisadresse nutzen wir Google Maps. Beim Laden der Karte 
          können Cookies von Google gesetzt und Ihre IP-Adresse an Google übertragen werden. 
          Weitere Informationen finden Sie in der 
          <a href="https://policies.google.com/privacy" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
            Datenschutzerklärung von Google
          </a>.
        </p>

        <h2 className="text-xl font-semibold">Ihre Rechte</h2>
        <p className="text-muted-foreground">
          Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der
          Verarbeitung sowie ein Beschwerderecht bei der zuständigen
          Datenschutzaufsichtsbehörde.
        </p>
      </section>
    </main>
  );
}