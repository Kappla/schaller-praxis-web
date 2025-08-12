import { SEO } from "@/components/SEO";
import ContactForm from "@/components/ContactForm";

export default function Kontakt() {
  return (
    <main className="container py-12 md:py-16">
      <SEO
        title="Kontakt | Praxis für Psychotherapie Schaller"
        description="Kontaktieren Sie mich unverbindlich – teilen Sie Ihr Anliegen und Terminwünsche mit."
        path="/kontakt"
      />
      <h1 className="mb-6 text-3xl font-semibold md:text-4xl">Kontakt</h1>
      <p className="mb-8 max-w-2xl text-muted-foreground">
        Schreiben Sie mir über das Formular oder direkt per E‑Mail an
        {" "}
        <a className="underline" href="mailto:schaller-praxis@t-online.de">schaller-praxis@t-online.de</a>.
      </p>
      <ContactForm />
    </main>
  );
}
