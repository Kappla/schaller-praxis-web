import { FormEvent, useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function ContactForm() {
  const [accepted, setAccepted] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = (data.get("name") as string) || "";
    const phone = (data.get("phone") as string) || "";
    const subject = "Kontaktanfrage via Webseite";
    const message = (data.get("message") as string) || "";

    const body = `Name: ${name}%0D%0ATelefon: ${phone}%0D%0A%0D%0ANachricht:%0D%0A${encodeURIComponent(message)}`;
    const mailto = `mailto:schaller-praxis@t-online.de?subject=${encodeURIComponent(subject)}&body=${body}`;
    window.location.href = mailto;
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1 block text-sm font-medium">Ihr Name</label>
          <Input id="name" name="name" required aria-required="true" />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1 block text-sm font-medium">Telefon (optional)</label>
          <Input id="phone" name="phone" type="tel" />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-medium">Ihre Nachricht</label>
        <Textarea id="message" name="message" rows={6} required aria-required="true" />
      </div>
      <div className="flex items-start gap-2">
        <input
          id="privacy"
          type="checkbox"
          className="mt-1"
          checked={accepted}
          onChange={(e) => setAccepted(e.target.checked)}
          required
          aria-required="true"
        />
        <label htmlFor="privacy" className="text-sm text-muted-foreground">
          Ich habe die Datenschutzhinweise gelesen und bin mit der Verarbeitung meiner Angaben zur Kontaktaufnahme einverstanden.
        </label>
      </div>
      <Button type="submit" disabled={!accepted}>Nachricht via Email-Programm senden</Button>
      <div className="text-xs text-muted-foreground">Hinweis: Ihr E‑Mail‑Programm öffnet sich zum Versand.</div>
    </form>
  );
}
