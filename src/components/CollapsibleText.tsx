import { useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CollapsibleTextProps {
  children: ReactNode;
  collapsedHeight?: number; // in rem (converted to tailwind arbitrary value)
  moreLabel?: string;
  lessLabel?: string;
  className?: string;
}

// Simple collapsible text with a fade overlay. Avoids line-clamp plugin.
export default function CollapsibleText({
  children,
  collapsedHeight = 6, // ~approx 4 lines depending on font-size
  moreLabel = "…mehr",
  lessLabel = "weniger anzeigen",
  className,
}: CollapsibleTextProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className={cn("relative", className)}>
      <div
        className={cn(
          "transition-all",
          open ? "max-h-none" : `max-h-[${collapsedHeight}rem] overflow-hidden`
        )}
      >
        {children}
      </div>

      {!open && (
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-background to-transparent" />
      )}

      <Button
        variant="link"
        className="mt-2 p-0"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={open ? lessLabel : moreLabel}
      >
        {open ? lessLabel : moreLabel}
      </Button>
    </div>
  );
}
