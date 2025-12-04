import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Medal, Crown, Star, Gift } from "lucide-react";
import { ScrollVelocityContainer, ScrollVelocityRow } from "./ui/scroll-based-velocity";

type PrizeItem = {
  rank: string;
  amount: string;
  description?: string;
  icon?: any;
};

// Single prize row inside the Team/Individual box (now a motion.div with explicit whileHover)
const PrizeRow = ({ item }: { item: PrizeItem }) => {
  const Icon = item.icon ?? Gift;

  return (
    <motion.div
      whileHover={{
        scale: 1.02,
        boxShadow: "0 8px 30px rgba(228,28,36,0.18)",
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="
        flex items-center gap-4 
        bg-background/30 border border-neon-red/20 rounded-lg p-4 
        transition-all
      "
    >
      <motion.div
        whileHover={{ scale: 1.08 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="flex-shrink-0"
      >
        <div
          className="
            w-12 h-12 flex items-center justify-center rounded-full 
            bg-neon-red/10 border border-neon-red/40
          "
        >
          <Icon className="text-neon-red" size={22} />
        </div>
      </motion.div>

      <div className="flex-1">
        <div className="flex items-baseline justify-between">
          <div className="font-semibold text-foreground">{item.rank}</div>
          <div className="font-bold text-neon-red text-lg lg:text-2xl">
            {item.amount}
          </div>
        </div>

        {item.description && (
          <div className="text-sm text-muted-foreground mt-1">
            {item.description}
          </div>
        )}
      </div>
    </motion.div>
  );
};

// Box: either Team or Individual (motion.div with whileHover glow & scale)
const PrizeBox = ({
  title,
  items,
  isInView,
}: {
  title: string;
  items: PrizeItem[];
  isInView: boolean;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7 }}
      whileHover={{
        scale: 1.02,
        boxShadow: "0 20px 60px rgba(228,28,36,0.18)",
      }}
      className="
        bg-card border border-neon-red/30 rounded-2xl p-6 lg:p-8 shadow-lg 
        relative overflow-hidden
        transition-all
      "
    >
      {/* Radial hover glow (visual, still controlled by CSS classes) */}
      <div
        className="
          absolute inset-0 bg-gradient-radial from-neon-red/20 via-transparent to-transparent 
          opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none
        "
      />

      {/* VHS hover overlay (visual) */}
      <div className="absolute inset-0 vhs-effect opacity-0 hover:opacity-20 transition-opacity pointer-events-none" />

      <div className="relative z-10">
        <h3 className="text-xl lg:text-2xl font-semibold font-cinzel text-foreground mb-4">
          {title}
        </h3>

        <div className="space-y-4">
          {items.map((it, i) => (
            <PrizeRow key={i} item={it} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Prizes = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const prizePool = {
    icon: Trophy,
    amount: "₹2 Lakhs+",
  };

  const teamItems: PrizeItem[] = [
    { rank: "1st Place", amount: "₹50,000", description: "Champion team", icon: Crown },
    { rank: "2nd Place", amount: "₹40,000", description: "Runner-up team", icon: Medal },
    { rank: "3rd Place", amount: "₹35,000", description: "Third place team", icon: Star },
  ];

  const individualItems: PrizeItem[] = [
    { rank: "1st Place", amount: "₹30,000", description: "Top individual performer", icon: Crown },
    { rank: "2nd Place", amount: "₹25,000", description: "Second best individual", icon: Medal },
    { rank: "3rd Place", amount: "₹20,000", description: "Third best individual", icon: Star },
  ];

  return (
    <section id="prizes" className="py-30 sm:py-32 bg-background relative overflow-hidden">
      {/* Neon background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-20 top-1/4 w-96 h-96 bg-neon-red/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -right-20 bottom-1/4 w-96 h-96 bg-neon-red/10 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="font-cinzel text-4xl sm:text-5xl md:text-6xl font-bold text-neon-red mb-3">
            Prizes & Rewards
          </h2>
          <div className="w-24 h-1 bg-neon-red mx-auto animate-glow-pulse mb-4" />
          
        </motion.div>

        {/* Prize Pool Highlight (explicit hover via Framer Motion) */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.97 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.7 }}
          whileHover={{
            scale: 1.02,
            boxShadow: "0 30px 80px rgba(228,28,36,0.22)",
          }}
          className="
            bg-card border-2 border-neon-red rounded-3xl p-6 
            mb-12 shadow-xl relative overflow-hidden
          "
          style={{ width: "500px", justifyContent: "centre", marginLeft: "auto", marginRight: "auto" , paddingLeft: "7%"}}
        >
          {/* Glow */}
          <div className="absolute inset-0 bg-gradient-radial from-neon-red/20 to-transparent opacity-0 hover:opacity-100 transition-opacity" />

          {/* VHS */}
          <div className="absolute inset-0 vhs-effect opacity-0 hover:opacity-20 transition-opacity" />

          <div className="relative z-10 flex items-center gap-6">
            <div className="w-20 h-20 rounded-full bg-neon-red/10 border border-neon-red/40 flex items-center justify-center animate-pulse">
              <Trophy className="text-neon-red" size={38} />
            </div>
            <div>
              <div className="text-sm text-muted-foreground font-cinzel">Prize Pool</div>
              <div className="font-cinzel font-bold text-3xl text-neon-red">
                {prizePool.amount}
              </div>
            </div>
          </div>
        </motion.div>

        {/* TWO BOXES SIDE BY SIDE */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          <PrizeBox title="Team Contest (Prizes Worth)" items={teamItems} isInView={isInView} />
          <PrizeBox title="Individual Contest (Prizes Worth)" items={individualItems} isInView={isInView} />
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-10 max-w-3xl mx-auto"
        >
          <div className="bg-card/50 border border-neon-red/20 rounded-lg p-4 backdrop-blur-sm">
            <p className="text-muted-foreground text-sm">
              Prizes include AlgoUtsav merch and goodies. Additional spot prizes for all finalists will be announced.
            </p>
          </div>
        </motion.div>
      </div>
      <ScrollVelocityContainer className="absolute left-0 w-screen font-cinzel text-xl md:text-2xl font-bold text-neon-red mt-12">
        <ScrollVelocityRow baseVelocity={5} direction={1}>
          Prizes worth upto 2 Lakhs! &nbsp; • &nbsp;
        </ScrollVelocityRow>
        <ScrollVelocityRow baseVelocity={5} direction={-1}>
          Electronics, merchandise, goodies and much more for winners & finalists! &nbsp; • &nbsp;
        </ScrollVelocityRow>
      </ScrollVelocityContainer>
    </section>
  );
};

export default Prizes;
