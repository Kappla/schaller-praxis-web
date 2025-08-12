import { Link, NavLink, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
const navItems = [{
  to: "/#start",
  hash: "#start",
  label: "Start"
}, {
  to: "/#leistungen",
  hash: "#leistungen",
  label: "Leistungen"
}, {
  to: "/#ueber-mich",
  hash: "#ueber-mich",
  label: "Über mich"
}, {
  to: "/#praxis",
  hash: "#praxis",
  label: "Praxis & Anfahrt"
}, {
  to: "/#kontakt",
  hash: "#kontakt",
  label: "Kontakt"
}];
export default function Navbar() {
  const {
    pathname,
    hash
  } = useLocation();
  return <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2" aria-label="Praxis Schaller Startseite">
          
          <span className="text-lg font-semibold">Praxis Schaller</span>
        </Link>
        <div className="hidden gap-6 md:flex">
          {navItems.map(item => {
          const isActive = pathname === "/" && (hash === item.hash || item.hash === "#start" && (hash === "" || hash === "#start"));
          return <Link key={item.to} to={item.to} className={cn("text-sm transition-colors hover:text-foreground/80", isActive ? "text-foreground" : "text-foreground/60")}>
                {item.label}
              </Link>;
        })}
        </div>
        <div className="flex items-center gap-2">
          <Button asChild className="hidden md:inline-flex">
            <Link to="/#kontakt">Termin anfragen</Link>
          </Button>
        </div>
      </nav>
    </header>;
}