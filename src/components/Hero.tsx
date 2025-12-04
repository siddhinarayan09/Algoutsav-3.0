import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const [glitch, setGlitch] = useState(false);

  useEffect(() => {
    setGlitch(true);
    setTimeout(() => setGlitch(false), 800); // glitch only on load
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="relative z-20 container mx-auto px-4 text-center">

        {/* Outer fade animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {/* Apply glitch ONLY on logo */}
          <div className={glitch ? "glitch" : ""}>
            <div className="hero-logo-container">
              <img
                src="https://res.cloudinary.com/dwh7xuupf/image/upload/v1764769922/au_imp_vssnsn.png"
                alt="Algoutsav 2026"
                className="hero-logo"
              />
            </div>
          </div>

          {/* Subtitle */}
          <motion.p
            className="font-cinzel font-semibold text-base sm:text-lg md:text-xl text-neon-red -mt-16 mb-10 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            Step into the Upside Down of competitive programming, with Algoutsav 3.0!
          </motion.p>

          {/* Buttons — unaffected by glitch */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <button
              className="button-49"
              data-text="Register now"
              onClick={() =>
                window.open(
                  "https://unstop.com/hackathons/algoutsav-2026-nit-rourkela-1600696",
                  "_blank"
                )
              }
            >
              Register Now
            </button>

            <button
  className="button-49"
  data-text="Event Brochure"
  onClick={() => {
    const link = document.createElement("a");
    link.href = "/Algoutsav-event-brochure.pdf";     
    link.download = "Algoutsav-Brochure.pdf"; 
    link.click();
  }}
>
  Event Brochure
</button>

          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
