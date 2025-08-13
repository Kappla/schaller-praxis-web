import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <main className="flex min-h-screen items-center justify-center">
      <SEO
        title="Seite nicht gefunden | Praxis für Psychotherapie Schaller"
        description="Die angeforderte Seite konnte nicht gefunden werden. Zurück zur Startseite der Praxis für Psychotherapie Schaller."
        path={location.pathname}
      />
      <div className="container text-center">
        <div className="mx-auto max-w-md">
          <h1 className="mb-4 text-6xl font-bold text-primary">404</h1>
          <h2 className="mb-4 text-2xl font-semibold">Seite nicht gefunden</h2>
          <p className="mb-8 text-muted-foreground">
            Die von Ihnen gesuchte Seite existiert nicht oder wurde verschoben.
          </p>
          <Button asChild>
            <Link to="/">Zur Startseite</Link>
          </Button>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
