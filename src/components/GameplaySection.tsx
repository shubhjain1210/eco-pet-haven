import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Carrot, Trash2, MessageCircle } from "lucide-react";

const gameplayFeatures = [
  {
    icon: Carrot,
    title: "Feed & Grow",
    description: "Keep your eco-guardian happy and healthy with nutritious treats. Watch them grow stronger!",
    gradient: "gradient-peach",
  },
  {
    icon: Trash2,
    title: "Clean & Protect",
    description: "Remove trash from their biome to raise your eco-score. Every action helps the planet!",
    gradient: "gradient-sky",
  },
  {
    icon: MessageCircle,
    title: "Talk & Play",
    description: "Use voice commands to interact with your pet. They'll respond with adorable reactions!",
    gradient: "gradient-mint",
  },
];

export const GameplaySection = () => {
  return (
    <section className="py-20 px-4 bg-card">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
          How It Works
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
          Three simple ways to care for your mythical eco-guardian
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {gameplayFeatures.map((feature, index) => (
            <Card 
              key={index} 
              className="hover-lift border-2 overflow-hidden shadow-card rounded-2xl"
            >
              <div className={`h-3 ${feature.gradient}`} />
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-muted flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl mb-2">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
