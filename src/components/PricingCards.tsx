import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import ContactModal from "./ContactModal";

const plans = [
  {
    name: "6 Mois",
    price: "34.99",
    originalPrice: null,
    features: [
      "+12,000 chaînes TV",
      "Qualité HD & Full HD",
      "VOD Films & Séries",
      "Support 7j/7",
      "1 connexion",
      "Mise à jour gratuite",
    ],
    popular: false,
  },
  {
    name: "12 Mois",
    price: "44.99",
    originalPrice: "69.99",
    features: [
      "+12,000 chaînes TV",
      "Qualité HD, Full HD & 4K",
      "VOD Films & Séries",
      "Support 24/7",
      "2 connexions",
      "Mise à jour gratuite",
      "Chaînes sportives premium",
    ],
    popular: true,
  },
  {
    name: "24 Mois",
    price: "59.99",
    originalPrice: "119.99",
    features: [
      "+12,000 chaînes TV",
      "Qualité HD, Full HD & 4K",
      "VOD Films & Séries illimité",
      "Support prioritaire 24/7",
      "3 connexions",
      "Mise à jour gratuite",
      "Chaînes sportives premium",
      "Contenu adulte inclus",
    ],
    popular: false,
  },
];

const PricingCards = () => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSelectPlan = (planName: string) => {
    setSelectedPlan(planName);
    setIsModalOpen(true);
  };

  return (
    <section id="pricing" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Nos <span className="text-primary">Abonnements</span>
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          Choisissez le forfait qui vous convient. Activation instantanée après commande.
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-6 transition-all duration-300 hover:scale-105 ${
                plan.popular
                  ? "bg-gradient-to-b from-primary/20 to-card border-2 border-primary glow-red"
                  : "bg-secondary border border-border"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <div className="bg-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-full flex items-center gap-1">
                    <Star className="w-3 h-3" />
                    POPULAIRE
                  </div>
                </div>
              )}

              {/* Plan name */}
              <h3 className="text-xl font-bold text-center mb-4">{plan.name}</h3>

              {/* Price */}
              <div className="text-center mb-6">
                {plan.originalPrice && (
                  <span className="text-muted-foreground line-through text-lg mr-2">
                    €{plan.originalPrice}
                  </span>
                )}
                <span className="text-4xl font-black text-primary">€{plan.price}</span>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm">
                    <Check className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button
                className={`w-full font-semibold py-6 ${
                  plan.popular
                    ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                    : "bg-secondary hover:bg-muted border border-border"
                }`}
                onClick={() => handleSelectPlan(plan.name)}
              >
                Nous Contacter
              </Button>
            </div>
          ))}
        </div>
      </div>

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedPlan={selectedPlan}
      />
    </section>
  );
};

export default PricingCards;
