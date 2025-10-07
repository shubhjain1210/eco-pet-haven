import { Button } from "@/components/ui/button";
import heroPets from "@/assets/hero-pets.png";
import { Leaf, Droplet, Mountain } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-hero">
      {/* Floating eco elements */}
      <Leaf className="eco-element animate-float text-primary w-12 h-12 top-20 left-10" />
      <Droplet className="eco-element animate-float-slow text-secondary w-10 h-10 top-40 right-20" />
      <Mountain className="eco-element animate-drift text-accent w-14 h-14 bottom-32 left-32" />
      <Leaf className="eco-element animate-float text-primary w-8 h-8 top-60 right-40" style={{ animationDelay: "2s" }} />
      <Droplet className="eco-element animate-drift text-secondary w-12 h-12 bottom-20 right-10" style={{ animationDelay: "1s" }} />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
            Adopt Your Own Eco-Guardian 🌱
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-muted-foreground">
            Care for mythical pets that protect our planet's biomes.
          </p>
          
          <div className="mb-12 relative">
            <img 
              src={heroPets} 
              alt="Three adorable eco-guardians: Phoenix, Kraken, and Yeti" 
              className="w-full max-w-3xl mx-auto rounded-2xl shadow-float hover-lift"
            />
          </div>
          
          <Button 
            size="lg" 
            className="text-xl px-12 py-8 rounded-2xl gradient-mint hover-bounce shadow-card"
          >
            Start Caring
          </Button>
        </div>
      </div>
    </section>
  );
};
