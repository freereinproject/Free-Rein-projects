import ServicePageLayout from "@/components/ServicePageLayout";
import aiFlooringHero from "@/assets/ai-flooring-hero.jpg";
import decking1 from "@/assets/decking1.jpg";
import decking2 from "@/assets/decking2.jpg";
import decking3 from "@/assets/decking3.jpg";
import craighall1 from "@/assets/decking-craighall1.jpg";

const related = [
  { label: "Outdoor Fixtures & Fittings", path: "/services/outdoor-fixtures" },
  { label: "Residential", path: "/services/residential" },
  { label: "Commercial", path: "/services/commercial" },
  { label: "Kitchen & Built-In Cupboards", path: "/services/kitchen-cupboards" },
];

export default function Flooring() {
  return (
    <ServicePageLayout
      title="Flooring & Decking"
      subtitle="Flooring"
      heroImage={aiFlooringHero}
      relatedServices={related}
    >
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-5">
            <h2 className="text-2xl font-bold text-foreground">
              Premium Flooring & Composite Decking Solutions
            </h2>
            <div className="h-0.5 w-12 bg-primary rounded-full" />
            <p className="text-muted-foreground leading-relaxed">
              Elevate the look and feel of your indoor and outdoor spaces with our expert flooring and
              decking installations. From sleek indoor floor finishes to durable composite decking
              for patios, balconies, and entertainment areas, we deliver premium results that are
              built to last.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our composite decking solutions offer the natural beauty of timber without the
              maintenance hassle — resistant to rot, fading, and moisture, they're the ideal choice
              for South African outdoor climates. We handle everything from structural preparation
              and sub-frame construction to the final surface finish, ensuring a flawless result
              every time.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Whether you're upgrading a balcony, creating an entertainment deck, or laying
              new flooring throughout your home or office, our team brings craftsmanship,
              attention to detail, and quality materials to every project.
            </p>

            <div className="mt-6">
              <h3 className="text-lg font-bold text-foreground mb-4">What We Offer</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Composite decking installation",
                  "Timber and hardwood flooring",
                  "Balcony and patio decking",
                  "Laminate and vinyl flooring",
                  "Sub-frame and structural prep",
                  "Tile and stone flooring",
                  "Deck railings and finishing",
                  "Indoor & outdoor solutions",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 p-4 bg-muted rounded-xl">
                    <div className="w-2 h-2 rounded-full bg-primary mt-1.5 shrink-0" />
                    <span className="text-foreground text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <img
              src={craighall1}
              alt="Commercial decking – Craighall"
              className="rounded-2xl w-full h-52 object-cover shadow-lg"
            />
            <img
              src={decking2}
              alt="Composite decking installation"
              className="rounded-2xl w-full h-52 object-cover shadow-lg"
            />
            <img
              src={decking3}
              alt="Decking detail view"
              className="rounded-2xl w-full h-44 object-cover shadow-lg"
            />
            <div className="bg-primary text-primary-foreground rounded-2xl p-6">
              <h3 className="font-bold mb-3">Why Choose Us</h3>
              <ul className="space-y-2 text-primary-foreground/85 text-sm">
                <li>✓ Low-maintenance composite materials</li>
                <li>✓ Weather and UV resistant</li>
                <li>✓ Custom designs and finishes</li>
                <li>✓ Indoor and outdoor expertise</li>
                <li>✓ Clean, professional installation</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </ServicePageLayout>
  );
}
