import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Recipes from "./pages/Recipes";
import Finances from "./pages/Finances";
import Videos from "./pages/Videos";
import Community from "./pages/Community";
import Statistics from "./pages/Statistics";
import Settings from "./pages/Settings";
import Promotion from "./pages/Promotion";
import Packages from "./pages/Packages";
import Creator from "./pages/Creator";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/finances" element={<Finances />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/community" element={<Community />} />
          <Route path="/stats" element={<Statistics />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/promotion" element={<Promotion />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/creator" element={<Creator />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
