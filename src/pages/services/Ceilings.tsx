import ServicePageLayout from "@/components/ServicePageLayout";
import aiCeilingsHero from "@/assets/ai-ceilings-hero.jpg";
import ceilingImg from "@/assets/ceiling.jpg";
import roofTileImg from "@/assets/project-roof-tile.jpg";
import roofMetalImg from "@/assets/project-roof-metal.jpg";

const related = [
  { label: "Commercial", path: "/services/commercial" },
  { label: "Residential", path: "/services/residential" },
  { label: "Electrical & Plumbing", path: "/services/electrical-plumbing" },
  { label: "Partitioning, Walling & Doors", path: "/services/partitioning-walling-doors" },
];

export default function Ceilings() {
  return (
    <ServicePageLayout
      title="Ceilings & Roofing"
      subtitle="Ceilings & Roofing"
      heroImage={aiCeilingsHero}
      relatedServices={related}
    >
      <div className="max-w-4xl mx-auto space-y-14">

        {/* Ceilings */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-5">
            <h2 className="text-2xl font-bold text-foreground">Ceilings That Elevate Your Space</h2>
            <div className="h-0.5 w-12 bg-primary rounded-full" />
            <p className="text-muted-foreground leading-relaxed">
              A well-designed ceiling does more than complete a room. It enhances its style, comfort, and functionality. Whether you're looking for suspended ceilings, decorative ceilings, or custom designs, our experienced team delivers high-quality solutions tailored to your needs.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We handle every step, from design and material selection to precise installation, ensuring a flawless finish that stands the test of time. With our attention to detail and commitment to quality, you can trust us to create ceilings that not only look stunning but also improve the overall feel of your space.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              {["Suspended ceilings", "Decorative ceilings", "Cornices and coving", "Insulated ceilings", "Custom ceiling designs", "Repairs and restorations"].map((item) => (
                <div key={item} className="flex items-start gap-3 p-4 bg-muted rounded-xl">
                  <div className="w-2 h-2 rounded-full bg-primary mt-1.5 shrink-0" />
                  <span className="text-foreground text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <img src={ceilingImg} alt="Ceilings" className="rounded-2xl w-full h-56 object-cover shadow-lg" />
          </div>
        </div>

        <div className="border-t border-border" />

        {/* Roofing */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-5">
            <h2 className="text-2xl font-bold text-foreground">Roofing Solutions You Can Rely On</h2>
            <div className="h-0.5 w-12 bg-primary rounded-full" />
            <p className="text-muted-foreground leading-relaxed">
              A strong, well-constructed roof is essential for the safety, comfort, and longevity of any building. Whether you need new roof installation, repairs, or custom roofing solutions, our skilled team delivers durable, high-quality results using the best materials and techniques.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We handle every step of the process — from assessment and planning to precise installation and finishing — ensuring your roof is built to last and looks great. With our commitment to craftsmanship and attention to detail, you can rest easy knowing your property is protected by a roof you can trust.
            </p>
          </div>
          <div className="space-y-4">
            <div className="bg-primary text-primary-foreground rounded-2xl p-6">
              <h3 className="font-bold mb-3">Roofing Services</h3>
              <ul className="space-y-2 text-primary-foreground/85 text-sm">
                <li>✓ New roof installation</li>
                <li>✓ Roof repairs and maintenance</li>
                <li>✓ Waterproofing solutions</li>
                <li>✓ Insulation installation</li>
                <li>✓ Custom roofing designs</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Project photos */}
        <div>
          <h2 className="text-xl font-bold text-foreground mb-5">Recent Roofing Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-2xl overflow-hidden h-56">
              <img src={roofTileImg} alt="Roof tiling project" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="rounded-2xl overflow-hidden h-56">
              <img src={roofMetalImg} alt="Metal roof installation" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
          </div>
        </div>

      </div>
    </ServicePageLayout>
  );
}
