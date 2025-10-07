import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Camera } from "lucide-react";

export const ARPreview = () => {
  return (
    <section className="py-20 px-4 bg-card">
      <div className="container mx-auto max-w-4xl">
        <Card className="shadow-float rounded-2xl border-2 overflow-hidden hover-lift">
          <div className="h-3 gradient-sky" />
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 w-20 h-20 rounded-full gradient-sky flex items-center justify-center">
              <Camera className="w-10 h-10 text-secondary-foreground" />
            </div>
            <CardTitle className="text-3xl mb-2">See Your Pet in Your World 🌍</CardTitle>
            <CardDescription className="text-lg">
              Use augmented reality to bring your eco-guardian into your room and watch them play in your space!
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center pb-8">
            <Button 
              size="lg" 
              variant="secondary"
              className="rounded-xl shadow-soft hover-bounce text-lg px-8 py-6"
            >
              <Camera className="w-5 h-5 mr-2" />
              Try AR Preview
            </Button>
            <p className="text-xs text-muted-foreground mt-4">
              Coming soon to iOS and Android
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
