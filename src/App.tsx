
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Projects from "./pages/Projects";
import CompletedProjects from "./pages/CompletedProjects";
import ChurchMapPage from "./pages/ChurchMapPage";
import Churches from "./pages/Churches"; 
import ChurchDetail from "./pages/ChurchDetail";
import AboutUs from "./pages/About";
import SearchResults from "./pages/SearchResults";
import ProjectDetail from "./pages/ProjectDetail";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/completed" element={<CompletedProjects />} />
          <Route path="/map" element={<ChurchMapPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/churches" element={<Churches />} />
          <Route path="/churches/:id" element={<ChurchDetail />} />
          <Route path="/search" element={<SearchResults />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
