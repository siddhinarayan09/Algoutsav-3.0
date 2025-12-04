import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import heroBg from "@/assets/bg.jpg";
import { motion } from "framer-motion";
import LightRays from "./components/LightRays";

const queryClient = new QueryClient();

const App = () => (
  <>
    <div className="fixed inset-0 z-0">
      <img
        src={heroBg}
        alt="Stranger Things themed dark forest"
        className="w-full h-full object-cover opacity-90"
      />
     <div className="fixed inset-0 bg-gradient-to-b from-black/75 via-black/65 to-black/80" />
      {/* Animated Particles */}
      <div className="absolute inset-0 z-10">
        {/* Small bright particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-neon-red rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Larger subtle particles */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={`large-${i}`}
            className="absolute w-3 h-3 bg-neon-red rounded-full blur-sm"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0.5, 0.2, 0.05],
            }}
            transition={{
              duration: 5 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
        <div style={{ width: "100%", height: "100vh", position: "relative" }}>
          <LightRays
            raysOrigin="top-center"
            raysColor="#A81F03"
            raysSpeed={0.8}
            lightSpread={1.5}
            rayLength={5.2}
            followMouse={true}
            mouseInfluence={0.01}
            noiseAmount={0.1}
            distortion={0.1}
            className="custom-rays"
          />
        </div>
      </div>
    </div>

    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </>
);

export default App;
