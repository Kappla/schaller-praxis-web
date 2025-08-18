import { useState, useEffect } from "react";
import { X } from "lucide-react";

export default function AddressBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Check if banner was previously dismissed
    const dismissed = localStorage.getItem('address-banner-dismissed');
    if (dismissed) {
      setIsDismissed(true);
      return;
    }

    // Check if current date is before September 19, 2025
    const currentDate = new Date();
    const switchDate = new Date('2025-09-19');
    
    if (currentDate < switchDate) {
      setIsVisible(true);
    }
  }, []);

  const handleDismiss = () => {
    setIsDismissed(true);
    localStorage.setItem('address-banner-dismissed', 'true');
  };

  if (!isVisible || isDismissed) {
    return null;
  }

  return (
    <div className="sticky top-16 z-30 bg-primary/10 border-b border-primary/20 backdrop-blur-sm">
      <div className="container flex items-center justify-between py-3 text-sm">
        <div className="flex-1 text-center">
          <p className="text-primary">
            <strong>Hinweis:</strong> Diese Webseite zeigt bereits die neue Praxisadresse (Konradinstr. 5, 81543 München), 
            gültig ab 19. September 2025. Bis dahin gilt weiterhin: Schrenkstr. 7, 80339 München.
          </p>
        </div>
        <button
          onClick={handleDismiss}
          className="ml-4 text-primary hover:text-primary/80 transition-colors"
          aria-label="Banner schließen"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
}