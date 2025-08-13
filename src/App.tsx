import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Navbar from "./components/site/Navbar";
import AddressBanner from "./components/site/AddressBanner";
import Footer from "./components/site/Footer";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Leistungen from "./pages/Leistungen";
import UeberMich from "./pages/UeberMich";
import Praxis from "./pages/Praxis";
import Kontakt from "./pages/Kontakt";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";
function ScrollToHash() {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.slice(1));
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [location.hash]);
  return null;
}

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Navbar />
      <AddressBanner />
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/leistungen" element={<Leistungen />} />
        <Route path="/ueber-mich" element={<UeberMich />} />
        <Route path="/praxis" element={<Praxis />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/datenschutz" element={<Datenschutz />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
