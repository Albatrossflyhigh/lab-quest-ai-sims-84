
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import Index from "./pages/Index";
import Biology from "./pages/Biology";
import BiologyInterface from "./pages/BiologyInterface";
import BiologyModels from "./pages/BiologyModels";
import BiologyExperiment from "./pages/BiologyExperiment";
import BiologyBloodGroups from "./pages/BiologyBloodGroups";
import BiologyCatalaseExperiment from "./pages/BiologyCatalaseExperiment";
import BiologyPollenGermination from "./pages/BiologyPollenGermination";
import Chemistry from "./pages/Chemistry";
import ChemistryExperiment from "./pages/ChemistryExperiment";
import ChemistryLab from "./pages/ChemistryLab";
import ChemistryVirtualLab from "./pages/ChemistryVirtualLab";
import Physics from "./pages/Physics";
import PhysicsExperiment from "./pages/PhysicsExperiment";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="light" storageKey="vk-theme">
        <TooltipProvider>
          <Toaster />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/biology" element={<Biology />} />
              <Route path="/biology-interface" element={<BiologyInterface />} />
              <Route path="/biology/models" element={<BiologyModels />} />
              <Route path="/biology/:experimentId" element={<BiologyExperiment />} />
              <Route path="/biology/blood-groups" element={<BiologyBloodGroups />} />
              <Route path="/biology/catalase" element={<BiologyCatalaseExperiment />} />
              <Route path="/biology/pollen-germination" element={<BiologyPollenGermination />} />
              <Route path="/chemistry" element={<Chemistry />} />
              <Route path="/chemistry/:experimentId" element={<ChemistryExperiment />} />
              <Route path="/chemistry/lab" element={<ChemistryLab />} />
              <Route path="/chemistry/virtual-lab" element={<ChemistryVirtualLab />} />
              <Route path="/physics" element={<Physics />} />
              <Route path="/physics/:experimentId" element={<PhysicsExperiment />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
