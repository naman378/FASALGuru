import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HighResInsights from "./pages/HighResInsights";
import YieldEstimator from "./pages/YieldEstimator";
import EMandi from "./pages/EMandi";
import CropDisease from "./pages/CropDisease";
import SoilAnalysis from "./pages/SoilAnalysis";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Insurance from "./pages/Insurance"; // ✅ ADD THIS

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* MAIN HOME PAGE */}
          <Route path="/" element={<Index />} />

          {/* ✅ ADD YOUR INSURANCE PAGE ROUTE */}
          <Route path="/insurance" element={<Insurance />} />
          <Route path="/highres-insights" element={<HighResInsights />} />
          <Route path="/yield-estimator" element={<YieldEstimator />} />
          <Route path="/e-mandi" element={<EMandi />} />
          <Route path="/crop-disease" element={<CropDisease />} />
          <Route path="/soil-analysis" element={<SoilAnalysis />} />

          {/* CATCH-ALL ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
