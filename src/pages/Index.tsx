import { SEO } from "@/components/SEO";
import heroImg from "@/assets/site-hero.jpg";
import ambient from "@/assets/site-portrait.jpg";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <main>
      <SEO
        title="Praxis für Psychotherapie Schaller | Einfühlsame Unterstützung"
        description="Psychotherapeutische Praxis Schaller – Hilfe bei Angst, Depression, Stress und Lebenskrisen. Vertraulich, wirksam, auf Augenhöhe."
        path="/"
      />

      <section className="ambient-gradient">
        <div className="container grid gap-8 py-14 md:grid-cols-2 md:py-20">
          <div className="flex flex-col justify-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">Einfühlsame Psychotherapie für Ihre seelische Gesundheit</h1>
            <p className="mb-6 text-lg text-muted-foreground md:text-xl">
              Gemeinsam schaffen wir Raum für Veränderung – professionell, vertraulich und in Ihrem Tempo.
            </p>
            <div className="flex gap-3">
              <Button asChild>
                <Link to="/kontakt">Termin anfragen</Link>
              </Button>
              <Button asChild variant="secondary">
                <Link to="/leistungen">Leistungen</Link>
              </Button>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg border bg-card">
            <img src={heroImg} alt="Heller, ruhiger Praxisraum für Psychotherapie" className="h-full w-full object-cover" loading="eager" />
          </div>
        </div>
      </section>

      <section>
        <div className="container py-14 md:py-20">
          <h2 className="mb-8 text-center text-3xl font-semibold md:text-4xl">Wobei ich Sie unterstützen kann</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { title: "Angst & Panik", desc: "Werkzeuge zur Bewältigung von Ängsten entwickeln und Sicherheit zurückgewinnen." },
              { title: "Depression & Erschöpfung", desc: "Den inneren Kompass stärken und neue Energie finden." },
              { title: "Stress & Überforderung", desc: "Grenzen wahrnehmen, regulieren und Resilienz aufbauen." },
            ].map((item) => (
              <Card key={item.title} className="transition-transform duration-200 hover:-translate-y-0.5">
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y bg-secondary/40">
        <div className="container grid items-center gap-8 py-14 md:grid-cols-2 md:py-20">
          <div>
            <h2 className="mb-4 text-3xl font-semibold md:text-4xl">Ein sicherer Ort für Ihre Themen</h2>
            <p className="text-muted-foreground">
              Vertrauen, Transparenz und eine wertschätzende Atmosphäre stehen im Mittelpunkt meiner Arbeit. In einem strukturierten, individuellen Prozess begleite ich Sie dabei, neue Perspektiven zu gewinnen.
            </p>
          </div>
          <div className="overflow-hidden rounded-lg border">
            <img src={ambient} alt="Beruhigender, natürlicher Hintergrund in Salbei- und Türkistönen" className="h-full w-full object-cover" loading="lazy" />
          </div>
        </div>
      </section>

      <section>
        <div className="container py-14 text-center md:py-20">
          <h2 className="mb-3 text-3xl font-semibold md:text-4xl">Bereit für den ersten Schritt?</h2>
          <p className="mx-auto mb-6 max-w-2xl text-muted-foreground">
            Schreiben Sie mir Ihr Anliegen und Ihre Terminwünsche. Ich melde mich zeitnah bei Ihnen zurück.
          </p>
          <Button asChild size="lg">
            <Link to="/kontakt">Kontakt aufnehmen</Link>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default Index;
