import { Leaf, Droplet, Mountain } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 gradient-mint">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center">
          <div className="flex justify-center gap-6 mb-6">
            <Leaf className="w-8 h-8 text-primary-foreground animate-float" />
            <Droplet className="w-8 h-8 text-primary-foreground animate-float" style={{ animationDelay: "1s" }} />
            <Mountain className="w-8 h-8 text-primary-foreground animate-float" style={{ animationDelay: "2s" }} />
          </div>
          
          <p className="text-2xl font-semibold text-primary-foreground mb-2">
            Small actions, big impact 🌍
          </p>
          
          <p className="text-primary-foreground/80 text-sm">
            Join thousands of guardians protecting our planet's biomes
          </p>
          
          <div className="mt-8 text-primary-foreground/60 text-xs">
            © 2025 Eco-Pet Adventure. Made with 💚 for our planet.
          </div>
        </div>
      </div>
    </footer>
  );
};
