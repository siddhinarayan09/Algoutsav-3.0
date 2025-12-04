import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ScrollVelocityContainer, ScrollVelocityRow } from "./ui/scroll-based-velocity";
import { Button } from "./ui/button";
import { ChartLine, Medal, Sparkles, Trophy, Users } from "lucide-react";
import { NumberTicker } from "./ui/number-ticker";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Users,
      start: 1000,
      number: 2250,
      description: "Participants",
    },
    {
      icon: ChartLine,
      start: 100,
      number: 330,
      description: "Colleges represented",
    },
    {
      icon: Medal,
      start: 0,
      number: 130,
      description: "Teams in Offline Finals",
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-cinzel text-4xl sm:text-5xl md:text-6xl font-bold text-neon-red mb-4">
            About the Event
          </h2>
          <div className="w-24 h-1 bg-neon-red mx-auto animate-glow-pulse" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="space-y-6 text-center"
        >
          <p className="text-foreground text-2xl leading-relaxed">
            <span className="text-neon-red font-semibold">AlgoUtsav</span> returns with its 3rd edition, and this time it's bigger and better than ever! 
            <span className="text-neon-red font-semibold"> AlgoUtsav 3.0</span> is a national-level competitive programming contest organized by the Algorithmic and Programming Society (APS) of NIT Rourkela, under the Technical Society of Student Activity Centre (SAC), NIT Rourkela. The event is designed to challenge and inspire programmers from across India to showcase their skills and push their problem solving abilities to their limits..
          </p>

          <Button size="lg" variant="outline" onClick={() => window.open("https://chat.whatsapp.com/CWSSQsaQ4R56i095LfAZS5/")} className="font-cinzel text-lg text-neon-red border-red-800">
            <img src="https://res.cloudinary.com/dwh7xuupf/image/upload/v1764849842/WhatsApp_icon_jglfyq.png" alt="WhatsApp Icon" className="h-7 w-7 cursor-pointer" />
            Join our Whatsapp Community and stay updated
          </Button>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-20"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
              className="bg-card border border-neon-red/30 rounded-lg p-6 hover-glow transition-all group flex justify-start flex-col items-center"
            >
              <feature.icon className="text-neon-red" size={28} />
              <div className="my-2">
                <NumberTicker 
                  startValue={feature.start}
                  value={feature.number} 
                  className="text-6xl font-medium font-cinzel tracking-tighter whitespace-pre-wrap text-neon-red"
                />
                <span className="text-neon-red text-6xl font-medium font-cinzel">+</span>
              </div>
              <h3 className="text-lg font-cinzel font-semibold text-foreground mb-2">
                {feature.description}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <ScrollVelocityContainer className="absolute left-0 w-screen font-cinzel text-xl md:text-2xl font-bold text-neon-red mt-12">
        <ScrollVelocityRow baseVelocity={5} direction={1}>
          AlgoUtsav 3.0 - NIT Rourkela's Flagship Competitive Programming Contest &nbsp; • &nbsp;
        </ScrollVelocityRow>
        <ScrollVelocityRow baseVelocity={5} direction={-1}>
          AlgoUtsav 3.0 - NIT Rourkela's Flagship Competitive Programming Contest &nbsp; • &nbsp;
        </ScrollVelocityRow>
      </ScrollVelocityContainer>
    </section>
  );
};

export default About;
