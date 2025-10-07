import { HeroSection } from "@/components/HeroSection";
import { GameplaySection } from "@/components/GameplaySection";
import { PetDashboard } from "@/components/PetDashboard";
import { ARPreview } from "@/components/ARPreview";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <PetDashboard />
    </main>
  );
};

export default Index;
