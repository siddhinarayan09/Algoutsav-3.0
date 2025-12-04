import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader = ({ onComplete }: PreloaderProps) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [isGlitching, setIsGlitching] = useState(false);
  const [isExpanding, setIsExpanding] = useState(false);

  useEffect(() => {
    let currentProgress = 0;
    let isPaused = false;

    const animate = () => {
      if (isPaused) return;

      const increment = currentProgress < 67 ? 1 : 1.5;
      currentProgress += increment;

      {/*six-seven :p*/}
      if (currentProgress >= 67 && currentProgress < 68 && !isPaused) {
        isPaused = true;
        setProgress(67);
        setIsGlitching(true);
        
        setTimeout(() => {
          setIsGlitching(false);
          setIsExpanding(true);
          isPaused = false;
          requestAnimationFrame(step);
        }, 500);
        return;
      }

      if (currentProgress >= 100) {
        setProgress(100);
        setTimeout(() => {
          setIsExiting(true);
          setTimeout(onComplete, 300); // Faster exit
        }, 100);
        return;
      }

      setProgress(currentProgress);
      requestAnimationFrame(step);
    };

    const step = () => {
      setTimeout(animate, 25); // Faster frame rate
    };

    requestAnimationFrame(step);
    return () => {
      currentProgress = 100;
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] bg-background flex items-center justify-center overflow-hidden"
        >
          {/* VHS Scanlines Effect */}
          <div className="absolute inset-0 vhs-effect pointer-events-none" />

          {/* Glitch Overlay */}
          <AnimatePresence>
            {isGlitching && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 z-50 pointer-events-none"
              >
                {/* Horizontal glitch bars */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute left-0 right-0 bg-neon-red/20"
                    style={{ 
                      height: Math.random() * 10 + 2,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      x: [0, Math.random() * 40 - 20, 0, Math.random() * -30, 0],
                      opacity: [0, 1, 0.5, 1, 0],
                    }}
                    transition={{
                      duration: 0.3,
                      repeat: 2,
                      ease: "easeInOut",
                    }}
                  />
                ))}
                {/* Color shift overlay */}
                <motion.div
                  className="absolute inset-0"
                  animate={{
                    background: [
                      "transparent",
                      "rgba(228, 28, 36, 0.1)",
                      "rgba(0, 255, 255, 0.05)",
                      "rgba(228, 28, 36, 0.1)",
                      "transparent",
                    ],
                  }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Glowing Background Orb - fades out when expanding */}
          <motion.div
            className="absolute w-[600px] h-[600px] rounded-full"
            style={{
              background: "radial-gradient(circle, hsl(var(--neon-red) / 0.4) 0%, transparent 70%)",
            }}
            animate={{
              scale: isExpanding ? 0 : [1, 1.2, 1],
              opacity: isExpanding ? 0 : [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: isExpanding ? 0.3 : 2,
              repeat: isExpanding ? 0 : Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Content Container - fades out when expanding */}
          <motion.div 
            className="relative w-full h-full flex flex-col justify-between p-6 sm:p-10 lg:p-16"
            animate={{
              opacity: isExpanding ? 0 : 1,
              filter: isGlitching ? "blur(2px)" : "blur(0px)",
            }}
            transition={{ duration: 0.4 }}
          >
            {/* Top Section - Logo & Tagline */}
            <motion.div 
              className="flex flex-col gap-2"
              animate={{
                x: isGlitching ? [0, -5, 5, -3, 0] : 0,
              }}
              transition={{ duration: 0.2, repeat: isGlitching ? 3 : 0 }}
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="font-cinzel text-sm sm:text-base tracking-[0.3em] text-neon-red uppercase"
                style={{ textShadow: "var(--text-shadow-glow)" }}
              >
                Algoutsav 3.0
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="font-mono text-xs sm:text-sm text-muted-foreground tracking-wider max-w-xs"
              >
                ENTER THE CONTEST
                <br />
                FROM THE UPSIDE DOWN.
              </motion.p>
            </motion.div>

            {/* Bottom Section - Location & Progress */}
            <motion.div 
              className="flex justify-between items-end"
              animate={{
                x: isGlitching ? [0, 3, -3, 2, 0] : 0,
              }}
              transition={{ duration: 0.15, repeat: isGlitching ? 4 : 0 }}
            >
              {/* Location Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="font-mono text-xs text-muted-foreground tracking-wider"
              >
                <p className="text-foreground/80">INDIA:ROURKELA</p>
                <p>22° 15' 32.4" N / 84° 54' 14.4" E</p>
                <p className="mt-2 text-neon-red">{">"} NIT ROURKELA</p>
              </motion.div>

              {/* Progress Percentage */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-right"
              >
                <motion.span
                  className="font-mono text-4xl sm:text-5xl lg:text-6xl font-light text-foreground"
                  style={{
                    textShadow: progress >= 67 ? "var(--text-shadow-glow)" : "none",
                  }}
                  animate={{
                    color: isGlitching ? ["hsl(var(--foreground))", "hsl(var(--neon-red))", "hsl(var(--foreground))"] : "hsl(var(--foreground))",
                  }}
                  transition={{ duration: 0.2, repeat: isGlitching ? 3 : 0 }}
                >
                  {Math.round(progress)}%
                </motion.span>
              </motion.div>
            </motion.div>

            {/* Loading Bar */}
            <motion.div
              className="absolute bottom-0 left-0 h-1 bg-neon-red"
              initial={{ width: "0%" }}
              animate={{ 
                width: `${progress}%`,
                opacity: isExpanding ? 0 : 1,
              }}
              style={{ boxShadow: "var(--shadow-neon)" }}
            />
          </motion.div>

          {/* Middle Section - Expanding Red Square */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <motion.div
              className="relative"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ 
                scale: isExpanding ? 30 : 1, 
                rotate: isExpanding ? 45 : 0,
              }}
            transition={{ 
              scale: { duration: isExpanding ? 0.6 : 0.8, ease: [0.76, 0, 0.24, 1] },
              rotate: { duration: isExpanding ? 0.6 : 0.8, ease: [0.76, 0, 0.24, 1] },
            }}
            >
              {/* Outer Ring - hides when expanding */}
              <motion.div
                className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 border-2 border-neon-red/30 rounded-sm"
                animate={{ 
                  rotate: isExpanding ? 0 : 360,
                  opacity: isExpanding ? 0 : 1,
                  borderColor: isGlitching ? ["hsl(var(--neon-red) / 0.3)", "hsl(0 100% 50% / 0.8)", "hsl(var(--neon-red) / 0.3)"] : "hsl(var(--neon-red) / 0.3)",
                }}
                transition={{ 
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  opacity: { duration: 0.3 },
                  borderColor: { duration: 0.2, repeat: isGlitching ? 3 : 0 },
                }}
                style={{ boxShadow: "var(--shadow-neon)" }}
              />

              {/* Inner Glowing Square - this expands */}
              <motion.div
                className="absolute inset-4 sm:inset-5 lg:inset-6 bg-neon-red"
                animate={{
                  opacity: 1,
                  boxShadow: isGlitching 
                    ? "0 0 60px hsl(var(--neon-red)), 0 0 120px hsl(var(--neon-red) / 0.8)"
                    : [
                        "0 0 20px hsl(var(--neon-red) / 0.6), 0 0 40px hsl(var(--neon-red) / 0.3)",
                        "0 0 40px hsl(var(--neon-red) / 0.8), 0 0 80px hsl(var(--neon-red) / 0.5)",
                        "0 0 20px hsl(var(--neon-red) / 0.6), 0 0 40px hsl(var(--neon-red) / 0.3)",
                      ],
                }}
                transition={{ 
                  boxShadow: { duration: 1.5, repeat: isExpanding ? 0 : Infinity, ease: "easeInOut" },
                }}
              />

              {/* Center Text - fades when expanding */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: isExpanding ? 0 : 1,
                }}
                transition={{ duration: 0.3 }}
              >
                <span className="font-cinzel text-lg sm:text-xl lg:text-2xl font-bold text-primary-foreground">
                  3.0
                </span>
              </motion.div>
            </motion.div>
          </div>

          {/* Flickering Elements - hide when expanding */}
          {!isExpanding && (
            <>
              <motion.div
                className="absolute top-1/4 left-1/4 w-1 h-1 bg-neon-red rounded-full"
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
              />
              <motion.div
                className="absolute top-3/4 right-1/3 w-1 h-1 bg-neon-red rounded-full"
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.3, repeat: Infinity, repeatDelay: 1.5 }}
              />
              <motion.div
                className="absolute top-1/2 right-1/4 w-1 h-1 bg-neon-red rounded-full"
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.4, repeat: Infinity, repeatDelay: 3 }}
              />
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
