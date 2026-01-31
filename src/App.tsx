import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Empresa from "./pages/Empresa";
import Estoque from "./pages/Estoque";
import Financiamento from "./pages/Financiamento";
import VendaSeuCarro from "./pages/VendaSeuCarro";
import Seguro from "./pages/Seguro";
import Contato from "./pages/Contato";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/empresa" element={<Empresa />} />
          <Route path="/estoque" element={<Estoque />} />
          <Route path="/financiamento" element={<Financiamento />} />
          <Route path="/venda-seu-carro" element={<VendaSeuCarro />} />
          <Route path="/seguro" element={<Seguro />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
