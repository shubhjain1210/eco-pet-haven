import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import petPhoenix from "@/assets/pet-phoenix.png";
import petKraken from "@/assets/pet-kraken.png";
import petYeti from "@/assets/pet-yeti.png";
import { Carrot, Sparkles, Trash2, MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";
import { toast } from "@/hooks/use-toast";

const initialPets = [
  { name: "Phoenix", image: petPhoenix, biome: "Forest", mood: "😊", color: "gradient-peach" },
  { name: "Kraken", image: petKraken, biome: "Ocean", mood: "😄", color: "gradient-sky" },
  { name: "Yeti", image: petYeti, biome: "Mountain", mood: "🥰", color: "gradient-mint" },
];

export const PetDashboard = () => {
  const [selectedPet, setSelectedPet] = useState(0);
  const [hunger, setHunger] = useState(75);
  const [ecoScore, setEcoScore] = useState(850);
  const [isAnimating, setIsAnimating] = useState(false);
  const currentPet = initialPets[selectedPet];
  
  // Hunger decreases over time
  useEffect(() => {
    const interval = setInterval(() => {
      setHunger(prev => Math.max(0, prev - 1));
    }, 10000); // Decrease every 10 seconds
    
    return () => clearInterval(interval);
  }, []);
  
  // Update mood based on hunger
  const getMood = () => {
    if (hunger > 70) return "🥰";
    if (hunger > 40) return "😊";
    if (hunger > 20) return "😐";
    return "😢";
  };
  
  const handleFeed = () => {
    if (hunger >= 95) {
      toast({
        title: "Pet is full!",
        description: `${currentPet.name} doesn't need food right now.`,
      });
      return;
    }
    
    setIsAnimating(true);
    setHunger(prev => Math.min(100, prev + 20));
    setEcoScore(prev => prev + 10);
    
    toast({
      title: "Yum! 🥕",
      description: `${currentPet.name} loved the organic treats!`,
    });
    
    setTimeout(() => setIsAnimating(false), 600);
  };
  
  const handlePlay = () => {
    setIsAnimating(true);
    setHunger(prev => Math.max(0, prev - 5));
    setEcoScore(prev => prev + 25);
    
    toast({
      title: "Playtime! ✨",
      description: `${currentPet.name} is having so much fun learning about nature!`,
    });
    
    setTimeout(() => setIsAnimating(false), 600);
  };
  
  const handleClean = () => {
    setIsAnimating(true);
    setEcoScore(prev => prev + 50);
    
    toast({
      title: "Biome Restored! 🌍",
      description: `You helped ${currentPet.name} clean the ${currentPet.biome.toLowerCase()}!`,
    });
    
    setTimeout(() => setIsAnimating(false), 600);
  };
  
  const handleTalk = () => {
    const messages = [
      `${currentPet.name}: "Thank you for protecting my home!" 💚`,
      `${currentPet.name}: "Did you know trees create oxygen for us to breathe?" 🌳`,
      `${currentPet.name}: "Every small action helps our planet!" 🌍`,
      `${currentPet.name}: "Let's keep our ${currentPet.biome.toLowerCase()} clean together!" ✨`,
    ];
    
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    
    toast({
      title: "Your eco-guardian speaks!",
      description: randomMessage,
    });
  };
  
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
                  className={`w-48 h-48 object-contain animate-float transition-transform ${
                    isAnimating ? 'scale-110' : ''
                  }`}
                />
              </div>
              
              <div className="bg-muted/50 rounded-2xl p-6 space-y-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold flex items-center gap-2">
                    <Carrot className="w-5 h-5 text-primary" />
                    Hunger
                  </span>
                  <span className="text-2xl">{getMood()}</span>
                </div>
                <Progress value={hunger} className="h-3" />
                
                <div className="flex items-center justify-between mb-2 mt-4">
                  <span className="font-semibold flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-primary" />
                    Eco-Score
                  </span>
                  <span className="text-sm text-muted-foreground">{ecoScore} pts</span>
                </div>
                <Progress value={Math.min(100, ecoScore / 10)} className="h-3" />
              </div>
              
              <div className="grid grid-cols-2 gap-4 pt-4">
                <Button 
                  onClick={handleFeed}
                  className="rounded-xl shadow-soft hover-bounce" 
                  variant="default"
                >
                  <Carrot className="w-5 h-5 mr-2" />
                  Feed
                </Button>
                <Button 
                  onClick={handlePlay}
                  className="rounded-xl shadow-soft hover-bounce" 
                  variant="secondary"
                >
                  <Sparkles className="w-5 h-5 mr-2" />
                  Play
                </Button>
                <Button 
                  onClick={handleClean}
                  className="rounded-xl shadow-soft hover-bounce" 
                  variant="secondary"
                >
                  <Trash2 className="w-5 h-5 mr-2" />
                  Clean
                </Button>
                <Button 
                  onClick={handleTalk}
                  className="rounded-xl shadow-soft hover-bounce" 
                  variant="secondary"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Talk
                </Button>
              </div>
              
              <div className="flex justify-center gap-3 pt-4 border-t">
                {initialPets.map((pet, index) => (
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
