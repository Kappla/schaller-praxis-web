import { SEO } from "@/components/SEO";

export default function UeberMich() {
  return (
    <main className="container py-12 md:py-16">
      <SEO
        title="Über mich | Praxis für Psychotherapie Schaller"
        description="Lernen Sie meine therapeutische Haltung und Arbeitsweise kennen – empathisch, strukturiert, wissenschaftlich fundiert."
        path="/ueber-mich"
      />
      <h1 className="mb-6 text-3xl font-semibold md:text-4xl">Über mich</h1>
      <section className="space-y-6 text-base leading-relaxed">
        <p className="text-muted-foreground">
          Als approbierte Psychotherapeutin arbeite ich mit einem integrativen, transparenten Ansatz. Wichtig ist mir eine vertrauensvolle Zusammenarbeit auf Augenhöhe.
        </p>
        <p className="text-muted-foreground">
          Fortbildungen und Supervision sind fester Bestandteil meiner Arbeit – so bleiben Methoden aktuell und wirksam.
        </p>
      </section>
    </main>
  );
}
