import { Button } from "@/components/ui/button";
import heroPets from "@/assets/hero-pets.png";
import { Leaf, Droplet, Mountain } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-hero px-4">
      {/* Floating eco elements */}
      <Leaf className="eco-element animate-float text-primary/40 w-12 h-12 top-20 left-10" />
      <Mountain className="eco-element animate-drift text-accent/40 w-14 h-14 top-20 right-20" />
      <Droplet className="eco-element animate-float-slow text-secondary/40 w-10 h-10 bottom-40 left-20" />
      <Leaf className="eco-element animate-float text-primary/30 w-8 h-8 bottom-20 right-32" style={{ animationDelay: "2s" }} />
      
      <div className="container mx-auto py-20 relative z-10 max-w-5xl">
        <div className="text-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-4">
            <span className="text-foreground">Adopt Your Own</span>
            <br />
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Eco-Guardian
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-muted-foreground max-w-3xl mx-auto">
            Care for mythical pets and restore balance to nature's biomes
          </p>
          
          <div className="bg-background/60 backdrop-blur-sm rounded-[2rem] p-8 md:p-16 shadow-float min-h-[300px] flex items-center justify-center">
            <p className="text-muted-foreground text-lg">Scroll down to meet your eco-guardian</p>
          </div>
        </div>
      </div>
    </section>
  );
};
