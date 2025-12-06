import { Monitor, Smartphone, Tablet, Tv, Laptop, Cast } from "lucide-react";

const devices = [
  { icon: Tv, name: "Smart TV" },
  { icon: Smartphone, name: "Android" },
  { icon: Smartphone, name: "iPhone" },
  { icon: Tablet, name: "iPad" },
  { icon: Laptop, name: "PC/Mac" },
  { icon: Monitor, name: "Fire Stick" },
  { icon: Cast, name: "Chromecast" },
  { icon: Tv, name: "Apple TV" },
];

const DeviceCarousel = () => {
  return (
    <section id="channels" className="py-20 bg-card">
      <div className="container mx-auto px-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Compatible avec <span className="text-primary">tous vos appareils</span>
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto">
          Notre service IPTV fonctionne sur Smart TV, smartphones, tablettes, ordinateurs et bien plus encore.
        </p>
      </div>

      {/* Infinite scrolling carousel */}
      <div className="overflow-hidden">
        <div className="flex animate-scroll-left">
          {/* Duplicate items for seamless loop */}
          {[...devices, ...devices, ...devices, ...devices].map((device, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-8 flex flex-col items-center gap-3"
            >
              <div className="w-20 h-20 bg-secondary rounded-2xl flex items-center justify-center border border-border hover:border-primary/50 transition-colors">
                <device.icon className="w-10 h-10 text-primary" />
              </div>
              <span className="text-sm text-muted-foreground">{device.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DeviceCarousel;
