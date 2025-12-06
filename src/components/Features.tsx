import { Zap, Clock, Film, Smartphone, HeadphonesIcon, Users } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Connexion Ultra-Rapide",
    description: "Serveurs optimisés pour un streaming fluide sans interruption.",
  },
  {
    icon: Clock,
    title: "Activation Express",
    description: "Votre abonnement est activé en quelques minutes après paiement.",
  },
  {
    icon: Film,
    title: "Contenu Premium",
    description: "Accès aux chaînes premium, films récents et séries exclusives.",
  },
  {
    icon: Smartphone,
    title: "Multi-Appareils",
    description: "Compatible Smart TV, mobile, tablette, PC et Fire Stick.",
  },
  {
    icon: HeadphonesIcon,
    title: "Support 24/7",
    description: "Équipe française disponible par WhatsApp et email.",
  },
  {
    icon: Users,
    title: "Multi-Connexions",
    description: "Partagez votre abonnement avec votre famille.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Pourquoi nous <span className="text-primary">choisir</span> ?
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          Découvrez les avantages qui font de nous le meilleur service IPTV en France.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
