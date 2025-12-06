import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Qu'est-ce que l'IPTV ?",
    answer:
      "L'IPTV (Internet Protocol Television) est un service qui permet de regarder la télévision via internet. Vous pouvez accéder à des milliers de chaînes TV, films et séries sur vos appareils connectés.",
  },
  {
    question: "Comment fonctionne l'activation ?",
    answer:
      "Après votre commande, vous recevez vos identifiants de connexion par email en quelques minutes. Il vous suffit de les entrer dans l'application de votre choix pour commencer à regarder.",
  },
  {
    question: "Quels appareils sont compatibles ?",
    answer:
      "Notre service est compatible avec Smart TV (Samsung, LG, Sony), Android TV, Amazon Fire Stick, smartphones (Android/iOS), tablettes, ordinateurs PC/Mac, et box Android.",
  },
  {
    question: "Quelle qualité d'image proposez-vous ?",
    answer:
      "Nous proposons des chaînes en qualité SD, HD, Full HD et 4K selon votre forfait. La majorité de nos chaînes sont disponibles en Full HD minimum.",
  },
  {
    question: "Puis-je utiliser le service à l'étranger ?",
    answer:
      "Oui, notre service fonctionne dans le monde entier. Vous pouvez regarder vos chaînes préférées où que vous soyez, tant que vous avez une connexion internet stable.",
  },
  {
    question: "Combien de connexions simultanées ai-je ?",
    answer:
      "Le nombre de connexions dépend de votre forfait : 1 connexion pour 6 mois, 2 connexions pour 12 mois, et 3 connexions pour 24 mois.",
  },
  {
    question: "Quelle vitesse internet est nécessaire ?",
    answer:
      "Pour une qualité optimale, nous recommandons une connexion d'au moins 10 Mbps. Pour le contenu 4K, 25 Mbps ou plus est préférable.",
  },
  {
    question: "Y a-t-il une période d'essai ?",
    answer:
      "Nous proposons un test de 24h pour vous permettre de découvrir notre service avant de vous engager. Contactez-nous pour en bénéficier.",
  },
  {
    question: "Quels moyens de paiement acceptez-vous ?",
    answer:
      "Nous acceptons les paiements par carte bancaire, PayPal, et cryptomonnaies pour votre commodité et sécurité.",
  },
  {
    question: "Comment contacter le support ?",
    answer:
      "Notre équipe est disponible 24/7 par WhatsApp et email. Nous répondons généralement en moins d'une heure.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Questions <span className="text-primary">Fréquentes</span>
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          Trouvez les réponses aux questions les plus courantes sur notre service IPTV.
        </p>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary/50"
              >
                <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
