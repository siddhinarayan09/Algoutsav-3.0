import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Instagram, Linkedin, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Map from "./ui/Map";
import emailjs from "emailjs-com";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // UPDATED FORM HANDLER WITH EMAILJS
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        "service_8gzjbrf",
        "template_au5rqtq",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "XuzKaVWpbfaY1WGI2"
      )
      .then(
        () => {
          toast({
            title: "Message Sent!",
            description: "We'll get back to you soon from the other side.",
          });

          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          toast({
            title: "Error",
            description: "Failed to send message. Please try again.",
            variant: "destructive",
          });

          console.error("EmailJS Error:", error);
        }
      );
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section
      id="contact"
      className="py-20 sm:py-32 relative overflow-hidden"
    >
      {/* Fog Effect */}
      <div className="absolute inset-0 bg-gradient-radial from-neon-red/10 via-transparent to-transparent opacity-20" />

      <div
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        ref={ref}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-cinzel text-4xl sm:text-5xl md:text-6xl font-bold text-neon-red mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-neon-red mx-auto animate-glow-pulse mb-6" />
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Have questions? Reach out from this dimension or the other
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Email */}
            <div className="flex items-start gap-4 group relative overflow-hidden">
              <div className="absolute inset-0 -left-full w-[175%] h-full bg-gradient-to-r from-transparent via-neon-red/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:left-0 transition-all duration-700 ease-out blur-xl pointer-events-none" />
              <div className="absolute inset-0 -left-full w-[175%] h-full bg-gradient-to-r from-neon-red/30 via-neon-red/10 to-transparent opacity-0 group-hover:opacity-100 group-hover:left-0 transition-all duration-500 ease-out blur-2xl pointer-events-none" />
              <div className="flex items-center justify-center w-12 h-12 bg-neon-red/10 border-2 border-neon-red/50 rounded-lg group-hover:animate-glow-pulse flex-shrink-0 relative z-10">
                <Mail className="text-neon-red" size={24} />
              </div>
              <div className="relative z-10">
                <h3 className="font-cinzel text-xl font-semibold text-foreground mb-1">
                  Email
                </h3>
                <a
                  href="mailto:algoutsav3.0nitrkl@gmail.com"
                  className="text-neon-red hover:underline"
                >
                  algoutsav3.0nitrkl@gmail.com
                </a>
              </div>
            </div>

            {/* Instagram */}
            <div className="flex items-start gap-4 group relative overflow-hidden">
              <div className="absolute inset-0 -left-full w-[175%] h-full bg-gradient-to-r from-transparent via-neon-red/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:left-0 transition-all duration-700 ease-out blur-xl pointer-events-none" />
              <div className="absolute inset-0 -left-full w-[175%] h-full bg-gradient-to-r from-neon-red/30 via-neon-red/10 to-transparent opacity-0 group-hover:opacity-100 group-hover:left-0 transition-all duration-500 ease-out blur-2xl pointer-events-none" />
              <div className="flex items-center justify-center w-12 h-12 bg-neon-red/10 border-2 border-neon-red/50 rounded-lg group-hover:animate-glow-pulse flex-shrink-0 relative z-10">
                <Instagram className="text-neon-red" size={24} />
              </div>
              <div className="relative z-10">
                <h3 className="font-cinzel text-xl font-semibold text-foreground mb-1">
                  Instagram
                </h3>
                <a
                  href="https://www.instagram.com/aps.nitr?igsh=bXlydzhlMTR2c2ll"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neon-red hover:underline"
                >
                  @aps.nitr
                </a>
              </div>
            </div>

            {/* LinkedIn */}
            <div className="flex items-start gap-4 group relative overflow-hidden">
              <div className="absolute inset-0 -left-full w-[175%] h-full bg-gradient-to-r from-transparent via-neon-red/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:left-0 transition-all duration-700 ease-out blur-xl pointer-events-none" />
              <div className="absolute inset-0 -left-full w-[175%] h-full bg-gradient-to-r from-neon-red/30 via-neon-red/10 to-transparent opacity-0 group-hover:opacity-100 group-hover:left-0 transition-all duration-500 ease-out blur-2xl pointer-events-none" />
              <div className="flex items-center justify-center w-12 h-12 bg-neon-red/10 border-2 border-neon-red/50 rounded-lg group-hover:animate-glow-pulse flex-shrink-0 relative z-10">
                <Linkedin className="text-neon-red" size={24} />
              </div>
              <div className="relative z-10">
                <h3 className="font-cinzel text-xl font-semibold text-foreground mb-1">
                  LinkedIn
                </h3>
                <a
                  href="https://www.linkedin.com/company/aps-nitr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neon-red hover:underline"
                >
                  Algorithmic and Programming Society, NIT Rourkela
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start gap-4 group relative overflow-hidden">
              <div className="absolute inset-0 -left-full w-[175%] h-full bg-gradient-to-r from-transparent via-neon-red/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:left-0 transition-all duration-700 ease-out blur-xl pointer-events-none" />
              <div className="absolute inset-0 -left-full w-[175%] h-full bg-gradient-to-r from-neon-red/30 via-neon-red/10 to-transparent opacity-0 group-hover:opacity-100 group-hover:left-0 transition-all duration-500 ease-out blur-2xl pointer-events-none" />
              <div className="flex items-center justify-center w-12 h-12 bg-neon-red/10 border-2 border-neon-red/50 rounded-lg group-hover:animate-glow-pulse flex-shrink-0 relative z-10">
                <MapPin className="text-neon-red" size={24} />
              </div>
              <div className="relative z-10">
                <h3 className="font-cinzel text-xl font-semibold text-foreground mb-1">
                  Location
                </h3>
                <p className="text-muted-foreground">
                  National Institute of Technology
                  <br />
                  Rourkela, Odisha 769008
                </p>
              </div>
            </div>

            {/* Map Placeholder */}
            <Map />
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-card border-2 border-neon-red/30 rounded-lg p-8 space-y-6 hover-glow"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-background border-neon-red/30 focus:border-neon-red"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-background border-neon-red/30 focus:border-neon-red"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-background border-neon-red/30 focus:border-neon-red min-h-[150px]"
                  placeholder="Your message..."
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-neon-red text-primary-foreground hover:bg-neon-red/90 hover-glow font-semibold py-6"
              >
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
