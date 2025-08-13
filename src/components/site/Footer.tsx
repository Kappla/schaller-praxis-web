import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mt-16 border-t">
      <div className="container grid gap-8 py-10 md:grid-cols-3">
        <div>
          <h3 className="mb-2 text-base font-semibold">Praxis für Psychotherapie Schaller</h3>
          
        </div>
        <div className="text-sm">
          <h4 className="mb-2 font-medium">Kontakt</h4>
          <address className="not-italic text-muted-foreground">
            <div>Johanna Schaller</div>
            <div>Konradinstr. 5, 81543 München</div>
            E-Mail: <a className="underline hover:no-underline" href="mailto:schaller-praxis@t-online.de">schaller-praxis@t-online.de</a>
          </address>
        </div>
        <div className="text-sm">
          <h4 className="mb-2 font-medium">Rechtliches</h4>
          <ul className="space-y-1 text-muted-foreground">
            <li><Link to="/impressum" className="underline hover:no-underline">Impressum</Link></li>
            <li><Link to="/datenschutz" className="underline hover:no-underline">Datenschutz</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t py-4">
        <div className="container text-center text-xs text-muted-foreground">© {new Date().getFullYear()} Schaller Psychotherapie. Alle Rechte vorbehalten.</div>
      </div>
    </footer>
  );
}
