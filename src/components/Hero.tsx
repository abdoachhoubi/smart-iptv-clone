import { Button } from "@/components/ui/button";
import { Play, Tv2 } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-8 animate-fade-in">
            <Tv2 className="w-4 h-4 text-primary" />
            <span className="text-sm text-foreground">Service IPTV Premium #1 en France</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <span className="text-foreground">+12,000</span>
            <br />
            <span className="text-foreground">CHAÎNES</span>
          </h1>

          {/* Highlight Box */}
          <div className="inline-block mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <span className="bg-primary text-primary-foreground px-6 py-3 text-2xl md:text-3xl font-bold">
              TV et sports
            </span>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            Profitez des meilleures chaînes TV, films et séries en qualité HD et 4K. 
            Compatible avec tous vos appareils.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg glow-red animate-pulse-glow"
              asChild
            >
              <a href="#pricing">
                <Play className="w-5 h-5 mr-2" />
                Voir les Abonnements
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-border hover:bg-secondary font-semibold px-8 py-6 text-lg"
              asChild
            >
              <a href="#features">En savoir plus</a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-xl mx-auto animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary">12K+</div>
              <div className="text-sm text-muted-foreground">Chaînes</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary">4K</div>
              <div className="text-sm text-muted-foreground">Qualité</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
