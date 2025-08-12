import { SEO } from "@/components/SEO";
import heroImg from "@/assets/site-hero.jpg";
import ambient from "@/assets/site-portrait.jpg";
import { Button } from "@/components/ui/button";

import { Link } from "react-router-dom";
import ContactForm from "@/components/ContactForm";
import CollapsibleText from "@/components/CollapsibleText";
const Index = () => {
  return (
    <main>
      <SEO
        title="Praxis für Psychotherapie Schaller | Einfühlsame Unterstützung"
        description="Psychotherapeutische Praxis Schaller – Hilfe bei Angst, Depression, Stress und Lebenskrisen. Vertraulich, wirksam, auf Augenhöhe."
        path="/"
      />

      <section id="start" className="ambient-gradient scroll-mt-24 md:scroll-mt-28">
        <div className="container grid gap-8 py-14 md:grid-cols-2 md:py-20">
          <div className="flex flex-col justify-center">
            <h1 className="mb-2 text-4xl font-bold tracking-tight md:text-5xl">Praxis für Psychotherapie München – Johanna Schaller</h1>
            <p className="text-sm text-muted-foreground">Psychoanalyse und Tiefenpsychologisch fundierte Psychotherapie</p>
            <p className="mt-2 text-sm text-muted-foreground">Aktuell keine Neuaufnahmen möglich – ausschließlich Sprechstunden!</p>
            <p className="mb-6 text-lg text-muted-foreground leading-relaxed md:text-xl">
              In meiner Praxis im Münchner Westend/Schwanthalerhöhe biete ich psychoanalytische und tiefenpsychologisch fundierte Psychotherapie für privat Versicherte und Selbstzahler*innen oder für Gesetzlich Versicherte im Kostenerstattungsverfahren an. Als approbierte Psychologische Psychotherapeutin behandle ich Erwachsene jeden Alters mit verschiedenen psychischen Beschwerden. Gerne begleite ich Sie in belastenden Lebensphasen und unterstütze Sie dabei, einen passenden Weg aus schwierigen Situationen zu finden. Im Folgenden finde Sie wesentliche Informationen zum Therapieangebot, dem Ablauf und zu meiner Person.
            </p>
            <div className="flex gap-3">
              <Button asChild>
                <Link to="/#kontakt">Termin anfragen</Link>
              </Button>
              <Button asChild variant="secondary">
                <Link to="/#leistungen">Leistungen</Link>
              </Button>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg border bg-card">
            <img src={heroImg} alt="Heller, ruhiger Praxisraum für Psychotherapie" className="h-full w-full object-cover" loading="eager" />
          </div>
        </div>
      </section>

      <section id="leistungen" className="scroll-mt-24 md:scroll-mt-28">
        <div className="container py-14 md:py-20">
          <h2 className="mb-8 text-center text-3xl font-semibold md:text-4xl">Leistungen</h2>
          <article className="mx-auto max-w-3xl space-y-8">
            <section>
              <h3 className="text-2xl font-semibold">Behandlung bei</h3>
              <ul className="mt-4 space-y-3 text-muted-foreground">
                <li><strong>Essstörung:</strong> Anorexie, Bulimie, Binge Eating Disorder</li>
                <li><strong>Persönlichkeitsstörung:</strong> Histrionischer, zwanghafter, ängstlicher und abhängiger Typ</li>
                <li><strong>Angststörung:</strong> Panikattacken, Prüfungsängste, Phobien, soziale Ängste, generalisierte Angststörung</li>
                <li><strong>Körperbezogene Störung:</strong> Körperliche Beschwerden ohne ausreichende medizinische Ursache, verbunden mit Leidensdruck und Einschränkungen (Schmerzen, Störungen des Gastrointestinaltrakts, des Schlafs, der Sexualität). Psychische Faktoren spielen eine zentrale Rolle; Hypochondrie (Angst vor körperlicher Erkrankung)</li>
                <li><strong>Depression:</strong> Beschwerden wie Niedergeschlagenheit, Kraftlosigkeit, Verlust des Selbstvertrauens, Schuldgefühle, vermindertes Konzentrationsvermögen, Schlafstörung, Sinnlosigkeitsgefühle, mangelnder Appetit, Unruhe</li>
                <li><strong>Psychische Krisen:</strong> Reaktionen auf belastende Lebensumstände oder Traumata und Schwierigkeiten, sich an Veränderungen anzupassen</li>
                <li><strong>Zwangsstörung:</strong> Zwangsgedanken oder Zwangshandlungen (z. B. Wasch- oder Kontrollzwang, übertriebene Ordentlichkeit)</li>
              </ul>
            </section>
            <section>
              <h3 className="text-2xl font-semibold">Therapie</h3>
                <CollapsibleText collapsedHeight={16} moreLabel="alles anzeigen">
                  <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed">
                    <div>
                      <h4 className="font-medium">Kurzzeittherapie</h4>
                      <p>Die Kurzzeittherapie umfasst bis zu 24 Sitzungen und ist auf ein viertel bis dreiviertel Jahr ausgerichtet. Sie dient vor allem der Bewältigung akuter Krisen und umgrenzter Belastungen oder der Klärung, ob eine längerfristige, intensivere Psychotherapie sinnvoll ist.</p>
                    </div>
                    <div>
                      <h4 className="font-medium">Analytische Psychotherapie</h4>
                      <p>Die analytische Psychotherapie ist längerfristig angelegt (2–4 Jahre) und findet 2–3 Mal pro Woche statt. Oft liegt die Patientin/der Patient auf der Couch, um die Selbstreflexion zu vertiefen, alternativ kann die Therapie auch modifiziert im Sitzen erfolgen.</p>
                      <p>Die hohe Frequenz ermöglicht eine intensive Auseinandersetzung mit verschiedenen innerseelischen Konfliktbereichen, tieferliegenden Persönlichkeitsstrukturen und Beziehungsmustern. Die therapeutische Beziehung dient als Spiegel und Erfahrungsraum, um alte Muster zu erkennen und neue Wege zu entwickeln.</p>
                    </div>
                    <div>
                      <h4 className="font-medium">Akuttherapie</h4>
                      <p>Die Akuttherapie (12 Sitzungen) wurde als Sonderform eingeführt, um eine schnelle Behandlung zu ermöglichen und einer Chronifizierung entgegenzuwirken.</p>
                    </div>
                    <div>
                      <h4 className="font-medium">Tiefenpsychologisch fundierte Psychotherapie</h4>
                      <p>Die Tiefenpsychologisch fundierte Psychotherapie findet meist 1–2 Mal pro Woche im Sitzen statt und dauert je nach Bedarf zwischen 1–2 Jahren.</p>
                      <p>Im Unterschied zur Analytischen Psychotherapie ist sie zeitlich begrenzter. Ziel ist es, innere Spannungen und wiederkehrende Muster zu verstehen und gezielt zu bearbeiten – besonders, wenn sie aktuelle Schwierigkeiten verursachen. Dabei steht nicht die tiefgreifende Veränderung der Persönlichkeit im Fokus, sondern die Lösung konkreter belastender Themen.</p>
                    </div>
                  </div>
                </CollapsibleText>
            </section>
            <section>
              <h3 className="text-2xl font-semibold">Verfahren</h3>
                <CollapsibleText collapsedHeight={12} moreLabel="alles anzeigen">
                  <div className="space-y-4 leading-relaxed text-muted-foreground">
                    <p>Analytische und tiefenpsychologisch fundierte Psychotherapie gehören neben der Verhaltenstherapie und der Systemischen Therapie zu den anerkannten Richtlinienverfahren, die wissenschaftlich fundiert sind und vom Bundesausschuss der Ärzte und Krankenkassen als Behandlungsverfahren anerkannt werden. Diese Verfahren werden in der Regel von den Krankenkassen übernommen.</p>
                    <p>Beide Verfahren gehören zur psychodynamischen Psychotherapie und basieren auf den theoretischen Konzepten der Psychoanalyse. Dieser Ansatz geht davon aus, dass psychische Probleme und Störungen häufig mit der eigenen Lebensgeschichte in Verbindung stehen und insbesondere im Kontext vergangener und gegenwärtiger Beziehungserfahrungen betrachtet werden.</p>
                    <p>Unsere Persönlichkeit und psychischen Strukturen werden maßgeblich durch Beziehungen geformt. Die verinnerlichten Beziehungserfahrungen prägen unser Selbstbild, unsere Wahrnehmung der Welt und unser Handeln – auch in herausfordernden Lebenssituationen oder Konflikten. Oft zeigt sich, dass Reaktionsmuster, die einst sinnvoll und hilfreich waren, im späteren Leben hinderlich werden können. Sie können zu psychischen Beschwerden führen und das eigene Erleben sowie Beziehungen belasten.</p>
                    <p>In der gemeinsamen Arbeit geht es darum, diese verinnerlichten Muster bewusst zu machen, ein tieferes Verständnis für sich selbst bzw. des Verhaltens und Erlebens zu entwickeln. Ziel der Behandlung ist es, rigide Beziehungs- und Selbstmuster aufzubrechen und eine flexiblere, lebendigere psychische Struktur zu fördern. Voraussetzung für eine psychodynamische Psychotherapie ist das Interesse, sich mit dem eigenen Innenleben auseinanderzusetzen, die Hintergründe der eigenen Symptome verstehen zu wollen und an persönlicher Entwicklung zu arbeiten. So kann Veränderung im Hier und Jetzt ermöglicht und neue Wege aus belastenden Situationen gefunden werden.</p>
                    <p>Die Dauer der Behandlung hängt von der Schwere und dem Verlauf der Problematik aber auch den individuellen Zielen ab und lässt sich daher nicht genau vorhersagen. Grundsätzlich ist es sinnvoll, sich darauf einzustellen, dass die Sitzungen über einen längeren Zeitraum Teil des Alltags sein können. In manchen Fällen zeigen sich bereits in einer Kurzzeit- oder Akuttherapie spürbare Fortschritte. Falls erforderlich, kann die Therapie in eine Langzeitbehandlung umgewandelt werden.</p>
                  </div>
                </CollapsibleText>
            </section>
            <section>
              <h3 className="text-2xl font-semibold">Ablauf / Kosten</h3>
              <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed">
                <div>
                  <h4 className="font-medium">Ablauf</h4>
                  <p>Für Anfragen kontaktieren Sie mich gerne telefonisch oder per E-Mail/Kontaktformular mit einer kurzen Schilderung Ihres Anliegens. Ich melde mich schnellstmöglich zurück.</p>
                  <p>In einem persönlichen Erstgespräch können Sie mich kennenlernen, während ich mir ein Bild von Ihrem Anliegen mache. Gemeinsam besprechen wir die weitere Vorgehensweise und klären die Indikation. Zusätzlich finden bis zu vier Probe-Sitzungen (Probatorik) statt, in denen Ihr Anliegen ausführlich besprochen, eine diagnostische Einschätzung vorgenommen und die Therapie geplant wird. Diese Zeit ermöglicht es Ihnen, mich und meine Arbeitsweise kennenzulernen sowie ein Gefühl dafür zu bekommen, ob Sie sich eine gemeinsame Zusammenarbeit vorstellen können.</p>
                </div>
                <div>
                  <h4 className="font-medium">Private Krankenversicherung – Beihilfe</h4>
                  <CollapsibleText collapsedHeight={10} moreLabel="alles anzeigen">
                    <p>Falls eine Therapie sinnvoll erscheint, kann ein Antrag gestellt und die Behandlung begonnen werden. Eine Überweisung von einem Arzt oder einer Ärztin ist nicht erforderlich. Die Abrechnung erfolgt gemäß der Gebührenordnung für Psychotherapeut*innen (GOP). Die Gesamtkosten richten sich nach den erbrachten Leistungen und der Komplexität des Behandlungsanliegens. In der Regel werden die Kosten von den privaten Krankenkassen bzw. der Beihilfe zumindest anteilig übernommen. Informieren Sie sich am besten vor Therapiebeginn bei Ihrer Kasse über eine Kostenübernahme, erfragen Sie den Leistungsumfang (maximale Anzahl an Therapiesitzungen/Jahr) und die durch die Kasse anerkannten psychotherapeutischen Verfahren. Die Beihilfestellen übernehmen die Kosten für eine Psychotherapie. Nach der anfänglichen Probatorik (5 Sitzungen) muss seitens der Psychotherapeut*in ein Antrag bei der Beihilfestelle eingereicht werden, den ich gerne für Sie erstelle. Die benötigten Formulare erhalten Sie bei Ihrer zuständigen Beihilfestelle.</p>
                  </CollapsibleText>
                </div>
                <div>
                  <h4 className="font-medium">Gesetzliche Krankenkasse – Kostenerstattung</h4>
                  <CollapsibleText collapsedHeight={12} moreLabel="alles anzeigen">
                    <p>Da ich eine Privatpraxis führe, ist eine Abrechnung mit gesetzlichen Krankenkassen in der Regel nicht möglich. In manchen Fällen kann eine Therapie jedoch über das Kostenerstattungsverfahren übernommen werden. Bitte erkundigen Sie sich direkt bei Ihrer Krankenkasse nach den Voraussetzungen.</p>
                    <p>Gesetzliche Krankenkassen sind verpflichtet, eine rechtzeitige und wohnortnahe psychotherapeutische Versorgung sicherzustellen. Ist dies aufgrund unzumutbar langer Wartezeiten (&gt; 3 Monate) nicht möglich, können Versicherte eine Behandlung in einer Privatpraxis selbst organisieren und die Kostenerstattung bei ihrer Krankenkasse beantragen (§ 13 Abs. 3 SGB V). Dafür müssen sie nachweisen, dass sie sich vergeblich um einen Therapieplatz bei kassenzugelassenen Therapeut*innen bemüht haben und dringend eine Behandlung brauchen. Eine vorherige psychotherapeutische Sprechstunde (bei Therapeut*innen mit GKV-Zulassung) ist verpflichtend, es sei denn, es gab in den letzten 12 Monaten eine stationäre Behandlung wegen einer psychischen Erkrankung.</p>
                    <p>Der Antrag auf Kostenerstattung muss immer vor Beginn der Psychotherapie und von Ihnen selbst gestellt werden. Die behandelnde Psychotherapeut*in kann das Antragsverfahren unterstützend begleiten. In der Regel besteht kein Erstattungsanspruch für Kosten, die vor der Entscheidung der Krankenkasse über den Kostenübernahmeantrag anfallen.</p>
                  </CollapsibleText>
                </div>
                <div>
                  <h4 className="font-medium">Selbstzahler*innen</h4>
                  <CollapsibleText collapsedHeight={12} moreLabel="alles anzeigen">
                    <p>Als Selbstzahler*in kommen Sie selbst für die Kosten auf. Somit entfallen die Formalitäten mit und die Vorgaben von den Krankenkassen. Es werden keine Daten an die Kassen weitergeleitet. Über die Anzahl der Stunden entscheiden Sie selbst. Die Abrechnung erfolgt gemäß der Gebührenordnung für Psychotherapeuten (GOP). Ich stelle Ihnen eine Rechnung mit Aufschlüsselung der verwendeten Ziffern und den damit verbundenen Honoraren.</p>
                    <p>Es kann verschiedene Gründe geben, eine Psychotherapie selbst zu finanzieren – etwa bei einem geplanten Wechsel in eine private Krankenversicherung, dem Abschluss einer Berufs- oder Lebensversicherung oder in manchen Fällen einer bevorstehenden Verbeamtung. Auch eine fehlende Indikation, also das Nichtvorliegen einer behandlungsbedürftigen psychischen Erkrankung nach ICD, kann ein Grund sein.</p>
                  </CollapsibleText>
                </div>
              </div>
            </section>
          </article>
        </div>
      </section>

      <section id="praxis" className="border-y bg-secondary/40 scroll-mt-24 md:scroll-mt-28">
        <div className="container grid items-center gap-8 py-14 md:grid-cols-2 md:py-20">
          <div>
            <h2 className="mb-4 text-3xl font-semibold md:text-4xl">Praxis & Anfahrt</h2>
            <p className="text-muted-foreground leading-relaxed">
              Die Praxis liegt im Münchner Westend/Schwanthalerhöhe und ist am besten mit öffentlichen Verkehrsmitteln zu erreichen. Die Räumlichkeiten befinden sich im Hochparterre und sind nicht barrierefrei zugänglich.
            </p>
          </div>
          <div className="overflow-hidden rounded-lg border">
            <img src={ambient} alt="Beruhigender, natürlicher Hintergrund in Salbei- und Türkistönen" className="h-full w-full object-cover" loading="lazy" />
          </div>
        </div>
      </section>

      <section id="ueber-mich" className="scroll-mt-24 md:scroll-mt-28">
        <div className="container py-14 md:py-20">
          <h2 className="mb-6 text-3xl font-semibold md:text-4xl">Über mich</h2>
          <CollapsibleText collapsedHeight={16} moreLabel="alles anzeigen">
            <h3 className="text-xl font-semibold">Qualifikation</h3>
            <ul className="mt-2 list-disc pl-5 text-muted-foreground">
              <li>Approbation zur Psychologischen Psychotherapeutin gemäß § 2 des Psychotherapeutengesetz und Eintrag im Arztregister</li>
              <li>Psychotherapeutische Ausbildung mit Schwerpunkt Analytische Psychotherapie und Tiefenpsychologisch fundierte Psychotherapie bei der Münchner Arbeitsgemeinschaft für Psychoanalyse e.V.</li>
              <li>Psychologiestudium an den Universitäten Salzburg und Wien</li>
            </ul>
            <h3 className="mt-6 text-xl font-semibold">Berufliche Tätigkeiten</h3>
            <ul className="mt-2 list-disc pl-5 text-muted-foreground">
              <li>Ambulante Praxistätigkeit seit 2021</li>
              <li>Klinikum Harlaching, Abteilung Psychosomatik</li>
              <li>Schön Klinik München Harlaching, Abteilung Tagesklinik für multimodale Schmerztherapie</li>
              <li>Klinikum Innenstadt der Universität München (LMU) in der Nußbaumstraße, Abteilung Psychiatrie und Psychotherapie</li>
            </ul>
            <h3 className="mt-6 text-xl font-semibold">Mitgliedschaften</h3>
            <ul className="mt-2 list-disc pl-5 text-muted-foreground">
              <li>Münchner Arbeitsgemeinschaft für Psychoanalyse (MAP) e.V.</li>
              <li>Deutsche Gesellschaft für Psychoanalyse, Psychotherapie, Psychosomatik und Tiefenpsychologie (DGPT) e.V. (außerordentliches Mitglied)</li>
              <li>Psychotherapeutenkammer Bayern (PTK)</li>
            </ul>
          </CollapsibleText>
        </div>
      </section>

      <section id="kontakt" className="border-t scroll-mt-24 md:scroll-mt-28">
        <div className="container grid gap-8 py-14 md:grid-cols-2 md:py-20">
          <div>
            <h2 className="mb-3 text-3xl font-semibold md:text-4xl">Kontakt</h2>
            <p className="mb-6 max-w-prose text-muted-foreground">
              Schreiben Sie mir Ihr Anliegen und Ihre Terminwünsche. Ich melde mich zeitnah bei Ihnen zurück.
            </p>
            <div className="space-y-2 text-muted-foreground">
              <p><strong>Telefon:</strong> <a className="underline" href="tel:015205396561">0152 05396561</a></p>
              <p><strong>E‑Mail:</strong> <a className="underline" href="mailto:schaller-praxis@t-online.de">schaller-praxis@t-online.de</a></p>
              <p><strong>Adresse:</strong> Schrenkstr. 7, 80339 München</p>
              <p className="text-sm">Die Praxis liegt im Münchner Westend/Schwanthalerhöhe. Die Räumlichkeiten befinden sich im Hochparterre und sind nicht barrierefrei.</p>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              Mit Absenden des Formulars stimmen Sie der Verarbeitung Ihrer Angaben gemäß Datenschutz zu.
            </p>
          </div>
          <div>
            <ContactForm />
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
            <Link to="/#kontakt">Kontakt aufnehmen</Link>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default Index;
