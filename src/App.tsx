import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Commercial from "./pages/services/Commercial";
import Residential from "./pages/services/Residential";
import Partitioning from "./pages/services/Partitioning";
import Ceilings from "./pages/services/Ceilings";
import Electrical from "./pages/services/Electrical";
import Kitchen from "./pages/services/Kitchen";
import Windows from "./pages/services/Windows";
import Outdoor from "./pages/services/Outdoor";
import Flooring from "./pages/services/Flooring";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services/commercial" element={<Commercial />} />
          <Route path="/services/residential" element={<Residential />} />
          <Route path="/services/partitioning-walling-doors" element={<Partitioning />} />
          <Route path="/services/ceilings-roofing" element={<Ceilings />} />
          <Route path="/services/electrical-plumbing" element={<Electrical />} />
          <Route path="/services/kitchen-cupboards" element={<Kitchen />} />
          <Route path="/services/windows-coverings" element={<Windows />} />
          <Route path="/services/outdoor-fixtures" element={<Outdoor />} />
          <Route path="/services/flooring-decking" element={<Flooring />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
