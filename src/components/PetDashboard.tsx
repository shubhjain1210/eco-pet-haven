import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import petPhoenix from "@/assets/pet-phoenix.png";
import petKraken from "@/assets/pet-kraken.png";
import petYeti from "@/assets/pet-yeti.png";
import { Carrot, Sparkles, Trash2, MessageCircle } from "lucide-react";
import { useState } from "react";

const pets = [
  { name: "Phoenix", image: petPhoenix, biome: "Forest", mood: "😊", color: "gradient-peach" },
  { name: "Kraken", image: petKraken, biome: "Ocean", mood: "😄", color: "gradient-sky" },
  { name: "Yeti", image: petYeti, biome: "Mountain", mood: "🥰", color: "gradient-mint" },
];

export const PetDashboard = () => {
  const [selectedPet, setSelectedPet] = useState(0);
  const currentPet = pets[selectedPet];
  
  return (
    <section className="py-20 px-4 gradient-hero">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
          Your Eco-Guardian Dashboard
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
          Monitor and care for your mythical companion
        </p>
        
        <div className="max-w-2xl mx-auto">
          <Card className="shadow-float rounded-2xl overflow-hidden border-2">
            <div className={`h-4 ${currentPet.color}`} />
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-3xl mb-2">{currentPet.name}</CardTitle>
              <p className="text-muted-foreground">{currentPet.biome} Biome Guardian</p>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div className="flex justify-center">
                <img 
                  src={currentPet.image} 
                  alt={`${currentPet.name} the eco-guardian`}
                  className="w-48 h-48 object-contain animate-float"
                />
              </div>
              
              <div className="bg-muted/50 rounded-2xl p-6 space-y-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold flex items-center gap-2">
                    <Carrot className="w-5 h-5 text-primary" />
                    Hunger
                  </span>
                  <span className="text-2xl">{currentPet.mood}</span>
                </div>
                <Progress value={75} className="h-3" />
                
                <div className="flex items-center justify-between mb-2 mt-4">
                  <span className="font-semibold flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-primary" />
                    Eco-Score
                  </span>
                  <span className="text-sm text-muted-foreground">850 pts</span>
                </div>
                <Progress value={85} className="h-3" />
              </div>
              
              <div className="grid grid-cols-2 gap-4 pt-4">
                <Button className="rounded-xl shadow-soft hover-bounce" variant="default">
                  <Carrot className="w-5 h-5 mr-2" />
                  Feed
                </Button>
                <Button className="rounded-xl shadow-soft hover-bounce" variant="secondary">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Play
                </Button>
                <Button className="rounded-xl shadow-soft hover-bounce" variant="secondary">
                  <Trash2 className="w-5 h-5 mr-2" />
                  Clean
                </Button>
                <Button className="rounded-xl shadow-soft hover-bounce" variant="secondary">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Talk
                </Button>
              </div>
              
              <div className="flex justify-center gap-3 pt-4 border-t">
                {pets.map((pet, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedPet(index)}
                    className={`w-16 h-16 rounded-xl overflow-hidden transition-all ${
                      selectedPet === index 
                        ? 'ring-4 ring-primary scale-110' 
                        : 'opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img 
                      src={pet.image} 
                      alt={pet.name}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
