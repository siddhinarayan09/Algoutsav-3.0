import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ScrollVelocityContainer, ScrollVelocityRow } from "./ui/scroll-based-velocity";

const Sponsors = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Placeholder sponsor logos (using text as placeholders)
  const sponsors = [
    { name: "Algozenith", src: "https://res.cloudinary.com/dwh7xuupf/image/upload/v1764849789/algozenith_hgwztq.png" },
    { name: "Ask Senior", src: "https://res.cloudinary.com/dwh7xuupf/image/upload/v1764849829/senior_bqh8ie.jpg" },
    { name: "Fastech", src: "https://res.cloudinary.com/dwh7xuupf/image/upload/v1764849813/fastech_k8uxpk.png"  },
    { name: "ICFDR", src: "" }
  ];

  return (
    <section id="sponsors" className="py-20 sm:py-32  relative overflow-hidden">
      {/* Fog Effect */}
      <div className="absolute inset-0 bg-gradient-radial from-neon-red/5 via-transparent to-transparent opacity-30" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-cinzel text-4xl sm:text-5xl md:text-6xl font-bold text-neon-red mb-4">
            Our Sponsors
          </h2>
          <div className="w-24 h-1 bg-neon-red mx-auto animate-glow-pulse mb-6" />
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Past Sponsors who have supported our mission to foster programming talent.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 lg:gap-8 max-w-6xl mx-auto">
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              className="bg-card h-52 w-52 border-2 border-neon-red/30 rounded-lg p-6 aspect-square flex flex-col items-center justify-center hover-glow transition-all group relative overflow-hidden"
              whileHover={{ scale: 1.08 }}
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-radial from-neon-red/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 text-center">
                {/* Sponsor Logo */}
                <img src={sponsor.src} alt={sponsor.name} className="h-40 w-40 mb-2 mx-auto" />
                
                {/* Sponsor Name */}
                
              </div>

              {/* VHS Effect */}
              <div className="absolute inset-0 vhs-effect opacity-0 group-hover:opacity-50 transition-opacity" />
            </motion.div>
          ))}
        </div>

        {/* Become a Sponsor CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-card/50 border border-neon-red/30 rounded-lg p-8 max-w-2xl mx-auto backdrop-blur-sm hover-glow">
            <h3 className="font-cinzel text-2xl font-bold text-foreground mb-4">
              Interested in Sponsoring?
            </h3>
            <p className="text-muted-foreground mb-6">
              Join us in empowering the next group of passionate programmers.
            </p>
            <a
              href="mailto:algoutsav3.0.nitrkl@gmail.com"
              className="inline-block bg-neon-red text-primary-foreground hover:bg-neon-red/90 font-semibold px-8 py-3 rounded-lg transition-all hover:shadow-[0_0_20px_rgba(228,28,36,0.6)]"
            >
              Contact Us
            </a>
          </div>
        </motion.div>
      </div>
      <ScrollVelocityContainer className="absolute left-0 w-screen font-cinzel text-xl md:text-2xl font-bold text-neon-red mt-12">
          <ScrollVelocityRow baseVelocity={5} direction={1}>
            Support our initiative by sponsoring AlgoUtsav! &nbsp; • &nbsp;
          </ScrollVelocityRow>
          <ScrollVelocityRow baseVelocity={5} direction={-1}>
            Contact on our mail or our socials &nbsp; • &nbsp;
          </ScrollVelocityRow>
        </ScrollVelocityContainer>
    </section>
  );
};

export default Sponsors;
