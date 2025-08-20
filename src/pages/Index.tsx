import { SEO } from "@/components/SEO";
import heroImg from "@/assets/site-hero.jpg";
import ambient from "@/assets/site-portrait.jpg";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ContactForm from "@/components/ContactForm";
import CollapsibleText from "@/components/CollapsibleText";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
const Index = () => {
  return <main>
      <SEO title="Praxis für Psychotherapie Schaller" description="Psychotherapeutische Schaller Psychotherapie – Hilfe bei Angst, Depression, Stress und Lebenskrisen." path="/" />

      <section id="start" className="relative isolate scroll-mt-24 md:scroll-mt-28">
        <div className="relative min-h-[60vh]">
          <img src={heroImg} alt="Heller, ruhiger Praxisraum für Psychotherapie" className="absolute inset-0 h-full w-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-foreground/20 md:bg-foreground/25 mix-blend-multiply" aria-hidden="true" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 to-background/20" aria-hidden="true" />
          <div className="relative z-10 flex min-h-[60vh] items-center">
            <div className="container py-16 text-center md:py-24">
              <h1 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
                <span className="block text-slate-50">Praxis für Psychotherapie</span>
                <span className="block text-slate-50">München</span>
                <span className="block text-slate-50">Johanna Schaller</span>
              </h1>
              <p className="mt-3 text-sm text-slate-50">Psychoanalyse und Tiefenpsychologisch fundierte Psychotherapie</p>
              <div className="mt-6 flex justify-center gap-3">
                <Button asChild size="lg">
                  <Link to="/#kontakt">Kontakt aufnehmen</Link>
                </Button>
                <Button asChild variant="secondary" size="lg">
                  <Link to="/#leistungen">Leistungen</Link>
                </Button>
              </div>
              <p className="mx-auto mt-4 inline-block rounded-full border bg-secondary/60 px-4 py-1 text-xs text-foreground/80">
                Aktuell keine Neuaufnahmen möglich – ausschließlich Sprechstunden!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="welcome-title" className="border-t bg-secondary/40">
        <div className="container py-14 md:py-20">
          <h2 id="welcome-title" className="mb-6 text-3xl font-semibold md:text-4xl">Herzlich Willkommen!</h2>
          <p className="text-muted-foreground leading-relaxed">
            In meiner Praxis in München Untergiesing biete ich psychoanalytische und tiefenpsychologisch fundierte Psychotherapie für privat sowie gesetzlich Versicherte und Selbstzahler*innen an. Als approbierte Psychologische Psychotherapeutin behandle ich Erwachsene jeden Alters mit verschiedenen psychischen Beschwerden. Gerne begleite ich Sie in belastenden Lebensphasen und unterstütze Sie dabei, einen passenden Weg aus schwierigen Situationen zu finden. Im Folgenden finde Sie wesentliche Informationen zum Therapieangebot, dem Ablauf und zu meiner Person.
          </p>
        </div>
      </section>

      <section id="leistungen" className="scroll-mt-24 md:scroll-mt-28">
        <div className="container py-14 md:py-20">
          <h2 className="mb-8 text-center text-3xl font-semibold md:text-4xl">Leistungen</h2>
          <article className="mx-auto max-w-3xl">
            <Accordion type="multiple" className="w-full space-y-4">
              <AccordionItem value="behandlung">
                <AccordionTrigger className="text-left">
                  <div>
                    <span className="block text-xl font-semibold">Behandlung bei</span>
                    <span className="block text-sm text-muted-foreground">Essstörung, Persönlichkeitsstörung, Angststörung, Körperbezogene Störung, Depression, Krisen und Zwangsstörung.</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="mt-2 space-y-3 text-muted-foreground">
                    <li><strong>Essstörung:</strong> Anorexie, Bulimie, Binge Eating Disorder</li>
                    <li><strong>Persönlichkeitsstörung:</strong> Histrionischer, zwanghafter, ängstlicher und abhängiger Typ</li>
                    <li><strong>Angststörung:</strong> Panikattacken, Prüfungsängste, Phobien, soziale Ängste, generalisierte Angststörung</li>
                    <li><strong>Körperbezogene Störung:</strong> Körperliche Beschwerden ohne ausreichende medizinische Ursache, verbunden mit Leidensdruck und Einschränkungen (Schmerzen, Störungen des Gastrointestinaltrakts, des Schlafs, der Sexualität). Psychische Faktoren spielen eine zentrale Rolle; Hypochondrie (Angst vor körperlicher Erkrankung)</li>
                    <li><strong>Depression:</strong> Beschwerden wie Niedergeschlagenheit, Kraftlosigkeit, Verlust des Selbstvertrauens, Schuldgefühle, vermindertes Konzentrationsvermögen, Schlafstörung, Sinnlosigkeitsgefühle, mangelnder Appetit, Unruhe</li>
                    <li><strong>Psychische Krisen:</strong> Reaktionen auf belastende Lebensumstände oder Traumata und Schwierigkeiten, sich an Veränderungen anzupassen</li>
                    <li><strong>Zwangsstörung:</strong> Zwangsgedanken oder Zwangshandlungen (z. B. Wasch- oder Kontrollzwang, übertriebene Ordentlichkeit)</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="therapie">
                <AccordionTrigger className="text-left">
                  <div>
                    <span className="block text-xl font-semibold">Therapie</span>
                    <span className="block text-sm text-muted-foreground">Akut-, Kurzzeit-, tiefenpsychologisch fundierte und analytische Verfahren.</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="mt-2 space-y-4 text-muted-foreground leading-relaxed">
                    <div>
                      <h4 className="font-medium">Akuttherapie</h4>
                      <p>Die Akuttherapie (12 Sitzungen) wurde als Sonderform eingeführt, um eine schnelle Behandlung zu ermöglichen und einer Chronifizierung entgegenzuwirken.</p>
                    </div>
                    <div>
                      <h4 className="font-medium">Kurzzeittherapie</h4>
                      <p>Die Kurzzeittherapie umfasst bis zu 24 Sitzungen und ist auf ein viertel bis dreiviertel Jahr ausgerichtet. Sie dient vor allem der Bewältigung akuter Krisen und umgrenzter Belastungen oder der Klärung, ob eine längerfristige, intensivere Psychotherapie sinnvoll ist.</p>
                    </div>
                    <div>
                      <h4 className="font-medium">Tiefenpsychologisch fundierte Psychotherapie</h4>
                      <p>Die Tiefenpsychologisch fundierte Psychotherapie findet meist 1–2 Mal pro Woche im Sitzen statt und dauert je nach Bedarf zwischen 1–2 Jahren.</p>
                      <p>Im Unterschied zur Analytischen Psychotherapie ist sie zeitlich begrenzter. Ziel ist es, innere Spannungen und wiederkehrende Muster zu verstehen und gezielt zu bearbeiten – besonders, wenn sie aktuelle Schwierigkeiten verursachen. Dabei steht nicht die tiefgreifende Veränderung der Persönlichkeit im Fokus, sondern die Lösung konkreter belastender Themen.</p>
                    </div>
                    <div>
                      <h4 className="font-medium">Analytische Psychotherapie</h4>
                      <p>Die analytische Psychotherapie ist längerfristig angelegt (2–4 Jahre) und findet 2–3 Mal pro Woche statt. Oft liegt die Patientin/der Patient auf der Couch, um die Selbstreflexion zu vertiefen, alternativ kann die Therapie auch modifiziert im Sitzen erfolgen.</p>
                      <p>Die hohe Frequenz ermöglicht eine intensive Auseinandersetzung mit verschiedenen innerseelischen Konfliktbereichen, tieferliegenden Persönlichkeitsstrukturen und Beziehungsmustern. Die therapeutische Beziehung dient als Spiegel und Erfahrungsraum, um alte Muster zu erkennen und neue Wege zu entwickeln.</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="verfahren">
                <AccordionTrigger className="text-left">
                  <div>
                    <span className="block text-xl font-semibold">Verfahren</span>
                    <span className="block text-sm text-muted-foreground">Psychodynamische Psychotherapie – wissenschaftlich anerkannt.</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4 leading-relaxed text-muted-foreground">
                    <p>Analytische und tiefenpsychologisch fundierte Psychotherapie gehören neben der Verhaltenstherapie und der Systemischen Therapie zu den anerkannten Richtlinienverfahren, die wissenschaftlich fundiert sind und vom Bundesausschuss der Ärzte und Krankenkassen als Behandlungsverfahren anerkannt werden. Diese Verfahren werden in der Regel von den Krankenkassen übernommen.</p>
                    <p>Beide Verfahren gehören zur psychodynamischen Psychotherapie und basieren auf den theoretischen Konzepten der Psychoanalyse. Dieser Ansatz geht davon aus, dass psychische Probleme und Störungen häufig mit der eigenen Lebensgeschichte in Verbindung stehen und insbesondere im Kontext vergangener und gegenwärtiger Beziehungserfahrungen betrachtet werden.</p>
                    <p>Unsere Persönlichkeit und psychischen Strukturen werden maßgeblich durch Beziehungen geformt. Die verinnerlichten Beziehungserfahrungen prägen unser Selbstbild, unsere Wahrnehmung der Welt und unser Handeln – auch in herausfordernden Lebenssituationen oder Konflikten. Oft zeigt sich, dass Reaktionsmuster, die einst sinnvoll und hilfreich waren, im späteren Leben hinderlich werden können. Sie können zu psychischen Beschwerden führen und das eigene Erleben sowie Beziehungen belasten.</p>
                    <p>In der gemeinsamen Arbeit geht es darum, diese verinnerlichten Muster bewusst zu machen, ein tieferes Verständnis für sich selbst bzw. des Verhaltens und Erlebens zu entwickeln. Ziel der Behandlung ist es, rigide Beziehungs- und Selbstmuster aufzubrechen und eine flexiblere, lebendigere psychische Struktur zu fördern. Voraussetzung für eine psychodynamische Psychotherapie ist das Interesse, sich mit dem eigenen Innenleben auseinanderzusetzen, die Hintergründe der eigenen Symptome verstehen zu wollen und an persönlicher Entwicklung zu arbeiten. So kann Veränderung im Hier und Jetzt ermöglicht und neue Wege aus belastenden Situationen gefunden werden.</p>
                    <p>Die Dauer der Behandlung hängt von der Schwere und dem Verlauf der Problematik aber auch den individuellen Zielen ab und lässt sich daher nicht genau vorhersagen. Grundsätzlich ist es sinnvoll, sich darauf einzustellen, dass die Sitzungen über einen längeren Zeitraum Teil des Alltags sein können. In manchen Fällen zeigen sich bereits in einer Kurzzeit- oder Akuttherapie spürbare Fortschritte. Falls erforderlich, kann die Therapie in eine Langzeitbehandlung umgewandelt werden.</p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="ablauf">
                <AccordionTrigger className="text-left">
                  <div>
                    <span className="block text-xl font-semibold">Ablauf / Kosten</span>
                    <span className="block text-sm text-muted-foreground">Von der Anfrage bis zur Kostenklärung.</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="mt-2 space-y-4 text-muted-foreground leading-relaxed">
                    <div>
                      <h4 className="font-medium">Ablauf</h4>
                      <p>Für Anfragen kontaktieren Sie mich gerne telefonisch oder per E-Mail/Kontaktformular mit einer kurzen Schilderung Ihres Anliegens. Ich melde mich schnellstmöglich zurück.</p>
                      <p>In einem persönlichen Erstgespräch können Sie mich kennenlernen, während ich mir ein Bild von Ihrem Anliegen mache. Gemeinsam besprechen wir die weitere Vorgehensweise und klären die Indikation. Zusätzlich finden bis zu vier Probe-Sitzungen (Probatorik) statt, in denen Ihr Anliegen ausführlich besprochen, eine diagnostische Einschätzung vorgenommen und die Therapie geplant wird. Diese Zeit ermöglicht es Ihnen, mich und meine Arbeitsweise kennenzulernen sowie ein Gefühl dafür zu bekommen, ob Sie sich eine gemeinsame Zusammenarbeit vorstellen können.</p>
                    </div>
                    <div>
                      <h4 className="font-medium">Gesetzliche Krankenkasse</h4>
                      <p>Als Vertragspsychotherapeutin kann ich regulär mit allen gesetzlichen Krankenkassen abrechnen. Die Kosten für eine Psychotherapie werden von den gesetzlichen Kassen in der Regel vollständig übernommen. Eine ärztliche Überweisung ist hierfür nicht erforderlich.</p>
                    </div>
                    <div>
                      <h4 className="font-medium">Private Krankenversicherung – Beihilfe</h4>
                      <p>Falls eine Therapie sinnvoll erscheint, kann ein Antrag gestellt und die Behandlung begonnen werden. Eine Überweisung von einem Arzt oder einer Ärztin ist nicht erforderlich. Die Abrechnung erfolgt gemäß der Gebührenordnung für Psychotherapeut*innen (GOP). Die Gesamtkosten richten sich nach den erbrachten Leistungen und der Komplexität des Behandlungsanliegens. In der Regel werden die Kosten von den privaten Krankenkassen bzw. der Beihilfe zumindest anteilig übernommen. Informieren Sie sich am besten vor Therapiebeginn bei Ihrer Kasse über eine Kostenübernahme, erfragen Sie den Leistungsumfang (maximale Anzahl an Therapiesitzungen/Jahr) und die durch die Kasse anerkannten psychotherapeutischen Verfahren. Die Beihilfestellen übernehmen die Kosten für eine Psychotherapie. Nach der anfänglichen Probatorik (5 Sitzungen) muss seitens der Psychotherapeut*in ein Antrag bei der Beihilfestelle eingereicht werden, den ich gerne für Sie erstelle. Die benötigten Formulare erhalten Sie bei Ihrer zuständigen Beihilfestelle.</p>
                    </div>
                    <div>
                      <h4 className="font-medium">Selbstzahler*innen</h4>
                      <p>Als Selbstzahler*in kommen Sie selbst für die Kosten auf. Somit entfallen die Formalitäten mit und die Vorgaben von den Krankenkassen. Es werden keine Daten an die Kassen weitergeleitet. Über die Anzahl der Stunden entscheiden Sie selbst. Die Abrechnung erfolgt gemäß der Gebührenordnung für Psychotherapeuten (GOP). Ich stelle Ihnen eine Rechnung mit Aufschlüsselung der verwendeten Ziffern und den damit verbundenen Honoraren.</p>
                      <p>Es kann verschiedene Gründe geben, eine Psychotherapie selbst zu finanzieren – etwa bei einem geplanten Wechsel in eine private Krankenversicherung, dem Abschluss einer Berufs- oder Lebensversicherung oder in manchen Fällen einer bevorstehenden Verbeamtung. Auch eine fehlende Indikation, also das Nichtvorliegen einer behandlungsbedürftigen psychischen Erkrankung nach ICD, kann ein Grund sein.</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </article>
        </div>
      </section>

      <section id="ueber-mich" className="scroll-mt-24 md:scroll-mt-28">
          <div className="container grid items-start gap-8 py-14 md:grid-cols-2 md:py-20">
            <div>
              <h2 className="mb-6 text-3xl font-semibold md:text-4xl">Über mich</h2>
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
          </div>
          <div className="overflow-hidden rounded-lg border h-96">
            <img src={ambient} alt="Portrait von Johanna Schaller, Psychotherapeutin in München" className="h-full w-full object-cover" loading="lazy" />
          </div>
        </div>
      </section>

      <section id="praxis" className="border-y bg-secondary/40 scroll-mt-24 md:scroll-mt-28">
        <div className="container py-14 md:py-20">
          <div>
            <h2 className="mb-4 text-3xl font-semibold md:text-4xl">Praxis & Anfahrt</h2>
            <p className="text-muted-foreground leading-relaxed">
              Die Praxis liegt in München Untergiesing und ist am besten mit öffentlichen Verkehrsmitteln zu erreichen. Die Räumlichkeiten sind nicht barrierefrei zugänglich.
            </p>
            <div className="mt-6 overflow-hidden rounded-lg border">
              <iframe title="Karte: Konradinstr. 5, 81543 München" src="https://www.google.com/maps?q=Konradinstr.+5,+81543+M%C3%BCnchen&hl=de&z=16&output=embed" className="h-[380px] w-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
            </div>
            <p className="mt-2 text-sm text-foreground">Adresse: Konradinstr. 5, 81543 München</p>
          </div>
        </div>
      </section>

      <section id="kontakt" className="border-t scroll-mt-24 md:scroll-mt-28">
        <div className="container grid gap-8 py-14 md:grid-cols-2 md:py-20">
          <div>
            <h2 className="mb-3 text-3xl font-semibold md:text-4xl">Kontakt</h2>
            <p className="mb-6 max-w-prose text-muted-foreground">
              Schreiben Sie mir Ihr Anliegen. Ich melde mich zeitnah bei Ihnen zurück.
            </p>
            <div className="space-y-2 text-muted-foreground">
              <p><strong>Telefon:</strong> <a className="underline" href="tel:015205396561">0152 05396561</a></p>
              <p><strong>E‑Mail:</strong> <a className="underline" href="mailto:schaller-praxis@t-online.de">schaller-praxis@t-online.de</a></p>
              <p><strong>Adresse:</strong> Konradinstr. 5, 81543 München</p>
              
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

    </main>;
};
export default Index;
