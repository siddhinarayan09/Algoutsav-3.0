import { motion } from "framer-motion";

const galleryImages = [
  { src: "https://res.cloudinary.com/dwh7xuupf/image/upload/v1764858468/IMG_7057_mfjwbn.jpg" },
  { src: "https://res.cloudinary.com/dwh7xuupf/image/upload/v1764857890/IMG_6851-2_akps3r.jpg" },
  { src: "https://res.cloudinary.com/dwh7xuupf/image/upload/v1764859382/aadi_-_d156yq.jpg" },
  { src: "https://res.cloudinary.com/dwh7xuupf/image/upload/v1764859540/Algo_1_of_1_-14_1_cohoyd.jpg" },
  { src: "https://res.cloudinary.com/dwh7xuupf/image/upload/v1764857855/CHAYAN-1-12_cwundo.jpg" },
  { src: "https://res.cloudinary.com/dwh7xuupf/image/upload/v1764857847/CHAYAN-1-9_suwmep.jpg" },
  { src: "https://res.cloudinary.com/dwh7xuupf/image/upload/v1764857947/IMG_8124_1_w8kyne.jpg" },
  { src: "https://res.cloudinary.com/dwh7xuupf/image/upload/v1764858480/CHAYAN-1-19_megaii.jpg" },
  {src:"https://res.cloudinary.com/dwh7xuupf/image/upload/v1764859834/aadi_-7197_1_1_lyduw0.jpg"},
  {src: "https://res.cloudinary.com/dwh7xuupf/image/upload/v1764858480/CHAYAN-1-19_megaii.jpg"},
];

const Gallery = () => {
  // Duplicate images for seamless animation
  const duplicatedImages = [...galleryImages, ...galleryImages];

  return (
    <section id="gallery" className="py-20 bg-background overflow-hidden">
      {/* Heading */}
      <div className="container mx-auto px-4 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-cinzel font-bold text-foreground mb-4">
            <span className="text-primary animate-flicker">Gallery</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Glimpses from our previous editions
          </p>
        </motion.div>
      </div>

      {/* Row 1 — Left to Right */}
      <div className="relative mb-6">
        <motion.div
          className="flex gap-6"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
          style={{ width: "fit-content" }}
        >
          {duplicatedImages.map((image, index) => (
            <div
              key={`row1-${index}`}
              className="relative flex-shrink-0 w-[300px] md:w-[400px] h-[200px] md:h-[280px] rounded-lg overflow-hidden group"
            >
              <img
                src={image.src}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/50 rounded-lg transition-all duration-300 group-hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)]" />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Row 2 — Right to Left */}
      <div className="relative">
        <motion.div
          className="flex gap-6"
          animate={{ x: ["-100%", "0%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 35,
              ease: "linear",
            },
          }}
          style={{ width: "fit-content" }}
        >
          {[...duplicatedImages].reverse().map((image, index) => (
            <div
              key={`row2-${index}`}
              className="relative flex-shrink-0 w-[300px] md:w-[400px] h-[200px] md:h-[280px] rounded-lg overflow-hidden group"
            >
              <img
                src={image.src}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/50 rounded-lg transition-all duration-300 group-hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)]" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
