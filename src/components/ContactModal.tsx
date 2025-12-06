import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlan: string | null;
}

const ContactModal = ({ isOpen, onClose, selectedPlan }: ContactModalProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message envoyé !",
      description: "Nous vous répondrons dans les plus brefs délais.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-card border-border sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-foreground">Nous Contacter</DialogTitle>
          <DialogDescription className="text-muted-foreground">
            {selectedPlan
              ? `Vous êtes intéressé par l'abonnement ${selectedPlan}. Remplissez le formulaire ci-dessous.`
              : "Remplissez le formulaire ci-dessous pour nous contacter."}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name" className="text-foreground">Nom complet</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Votre nom"
              required
              className="bg-secondary border-border"
            />
          </div>

          <div>
            <Label htmlFor="email" className="text-foreground">Email</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="votre@email.com"
              required
              className="bg-secondary border-border"
            />
          </div>

          <div>
            <Label htmlFor="phone" className="text-foreground">Téléphone</Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="+33 6 12 34 56 78"
              className="bg-secondary border-border"
            />
          </div>

          <div>
            <Label htmlFor="message" className="text-foreground">Message</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Votre message..."
              rows={3}
              className="bg-secondary border-border"
            />
          </div>

          <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
            <Send className="w-4 h-4 mr-2" />
            Envoyer
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;
