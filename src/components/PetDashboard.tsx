import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import petPhoenix from "@/assets/pet-phoenix.png";
import petKraken from "@/assets/pet-kraken.png";
import petYeti from "@/assets/pet-yeti.png";
import { Heart, Sparkles, Trash2, MessageCircle, Utensils } from "lucide-react";
import { useState } from "react";

const pets = [
  { 
    name: "Phoenix", 
    image: petPhoenix, 
    biome: "Forest", 
    health: 85,
    hunger: 60,
    ecoScore: 92
  },
  { 
    name: "Kraken", 
    image: petKraken, 
    biome: "Ocean", 
    health: 90,
    hunger: 75,
    ecoScore: 88
  },
  { 
    name: "Yeti", 
    image: petYeti, 
    biome: "Mountain", 
    health: 78,
    hunger: 50,
    ecoScore: 95
  },
];

export const PetDashboard = () => {
  const [selectedPet, setSelectedPet] = useState(0);
  const currentPet = pets[selectedPet];
  
  return (
    <section className="py-20 px-4 bg-background min-h-screen flex items-center">
      <div className="container mx-auto max-w-xl">
        <Card className="shadow-float rounded-[2rem] overflow-hidden border-0 bg-card">
          <CardContent className="p-8 space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <Sparkles className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-bold text-foreground">Baby {currentPet.name}</h2>
            </div>
            
            <div className="space-y-6">
              {/* Health Bar */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Heart className="w-5 h-5 text-orange-400" />
                    <span className="font-semibold text-foreground">Health</span>
                  </div>
                  <span className="text-orange-400 font-bold">{currentPet.health}%</span>
                </div>
                <div className="h-3 bg-muted rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-orange-300 to-orange-400 rounded-full transition-all"
                    style={{ width: `${currentPet.health}%` }}
                  />
                </div>
              </div>
              
              {/* Hunger Bar */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Utensils className="w-5 h-5 text-green-400" />
                    <span className="font-semibold text-foreground">Hunger</span>
                  </div>
                  <span className="text-green-400 font-bold">{currentPet.hunger}%</span>
                </div>
                <div className="h-3 bg-muted rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-green-300 to-green-400 rounded-full transition-all"
                    style={{ width: `${currentPet.hunger}%` }}
                  />
                </div>
              </div>
              
              {/* Eco-Score Bar */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-blue-400" />
                    <span className="font-semibold text-foreground">Eco-Score</span>
                  </div>
                  <span className="text-blue-400 font-bold">{currentPet.ecoScore}%</span>
                </div>
                <div className="h-3 bg-muted rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-blue-300 to-blue-400 rounded-full transition-all"
                    style={{ width: `${currentPet.ecoScore}%` }}
                  />
                </div>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <Button 
                className="rounded-[1.5rem] h-14 bg-green-400 hover:bg-green-500 text-foreground font-semibold"
              >
                <Utensils className="w-5 h-5 mr-2" />
                Feed
              </Button>
              <Button 
                className="rounded-[1.5rem] h-14 bg-blue-300 hover:bg-blue-400 text-foreground font-semibold"
              >
                <Heart className="w-5 h-5 mr-2" />
                Play
              </Button>
              <Button 
                variant="outline"
                className="rounded-[1.5rem] h-14 border-2 font-semibold"
              >
                <Trash2 className="w-5 h-5 mr-2" />
                Clean
              </Button>
              <Button 
                variant="outline"
                className="rounded-[1.5rem] h-14 border-2 border-green-300 text-green-600 hover:bg-green-50 font-semibold"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Talk
              </Button>
            </div>
            
            {/* Pet Selector */}
            <div className="flex justify-center gap-3 pt-6 border-t">
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
    </section>
  );
};
