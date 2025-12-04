import { useState } from "react";
import Preloader from "@/components/preloader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Timeline from "@/components/Timeline";
import Prizes from "@/components/Prizes";
import Sponsors from "@/components/Sponsors";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {/* Preloader */}
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}

      {/* Black background behind preloader */}
      {isLoading && (
        <div className="fixed inset-0 bg-black z-[50]" />
      )}

      {/* Full website only after preloader finishes */}
      {!isLoading && (
        <div className="min-h-screen bg-background">
          <Navbar />
          <Hero isReady={!isLoading} />
          <About />
          <Timeline />
          <Prizes />
          <Sponsors />
          <FAQ />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  );
};

export default Index;
