import ServicePageLayout from "@/components/ServicePageLayout";
import aiPartitioningHero from "@/assets/ai-partitioning-hero.jpg";
import partitioningImg from "@/assets/partitioning.jpg";
import doorImg from "@/assets/door.jpg";

const related = [
  { label: "Commercial", path: "/services/commercial" },
  { label: "Residential", path: "/services/residential" },
  { label: "Ceilings & Roofing", path: "/services/ceilings-roofing" },
  { label: "Windows & Window Coverings", path: "/services/windows-coverings" },
];

export default function Partitioning() {
  return (
    <ServicePageLayout
      title="Partitioning, Walling & Doors"
      subtitle="Partitioning"
      heroImage={aiPartitioningHero}
      relatedServices={related}
    >
      <div className="max-w-4xl mx-auto space-y-14">

        {/* Partitioning */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-5">
            <h2 className="text-2xl font-bold text-foreground">Partitioning Solutions That Transform Your Space</h2>
            <div className="h-0.5 w-12 bg-primary rounded-full" />
            <p className="text-muted-foreground leading-relaxed">
              Creating functional, flexible spaces starts with smart partitioning. Whether you're looking to divide an office, optimize a commercial space, or create private areas at home, our expert team delivers solutions that are both practical and stylish.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We handle everything from design and materials selection to installation, ensuring minimal disruption and a smooth process from start to finish. With our attention to detail and commitment to quality, you can trust us to create spaces that work for you. Efficient, comfortable, and built to last.
            </p>
          </div>
          <div>
            <img src={partitioningImg} alt="Partitioning" className="rounded-2xl w-full h-52 object-cover shadow-lg" />
          </div>
        </div>

        <div className="border-t border-border" />

        {/* Walling */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-5">
            <h2 className="text-2xl font-bold text-foreground">Walling Solutions Built to Last</h2>
            <div className="h-0.5 w-12 bg-primary rounded-full" />
            <p className="text-muted-foreground leading-relaxed">
              Strong, durable walls are the foundation of any great space. Whether you're constructing new walls, renovating existing ones, or need specialized walling solutions, our skilled team ensures precision, quality, and efficiency at every step.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We work with a variety of materials to suit your design, budget, and functional needs, delivering results that are both sturdy and visually appealing. From planning to completion, we take care of the details so you can enjoy a seamless, stress-free experience.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="bg-primary text-primary-foreground rounded-2xl p-6">
              <h3 className="font-bold mb-3">What We Offer</h3>
              <ul className="space-y-2 text-primary-foreground/85 text-sm">
                <li>✓ Office and commercial partitions</li>
                <li>✓ Drywall and brick walling</li>
                <li>✓ Custom door installations</li>
                <li>✓ Sliding and interior doors</li>
                <li>✓ All materials and finishes</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-border" />

        {/* Doors */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-5">
            <h2 className="text-2xl font-bold text-foreground">Doors That Combine Style, Security, and Durability</h2>
            <div className="h-0.5 w-12 bg-primary rounded-full" />
            <p className="text-muted-foreground leading-relaxed">
              Doors do more than separate spaces. They enhance the look, feel, and functionality of your home or office. Whether you need interior doors, exterior doors, sliding doors, or custom solutions, our expert team provides high-quality options designed to meet your style, security, and durability needs.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              From precise measurements and expert installation to finishing touches, we handle every step with care, ensuring a flawless result that lasts. With our attention to detail and commitment to quality, you can trust us to create doors that look great and perform even better.
            </p>
          </div>
          <div>
            <img src={doorImg} alt="Doors" className="rounded-2xl w-full h-52 object-cover shadow-lg" />
          </div>
        </div>

      </div>
    </ServicePageLayout>
  );
}
