import ServicePageLayout from "@/components/ServicePageLayout";
import aiCommercialHero from "@/assets/ai-commercial-hero.jpg";
import office1Img from "@/assets/project-office1.jpg";
import office2Img from "@/assets/project-office2.jpg";
import office3Img from "@/assets/project-office3.jpg";
import office4Img from "@/assets/project-office4.jpg";

const related = [
  { label: "Residential", path: "/services/residential" },
  { label: "Partitioning, Walling & Doors", path: "/services/partitioning-walling-doors" },
  { label: "Ceilings & Roofing", path: "/services/ceilings-roofing" },
  { label: "Electrical & Plumbing", path: "/services/electrical-plumbing" },
  { label: "Kitchen & Built-In Cupboards", path: "/services/kitchen-cupboards" },
];

export default function Commercial() {
  return (
    <ServicePageLayout
      title="Commercial Building, Renovations and Remodeling"
      subtitle="Commercial"
      heroImage={aiCommercialHero}
      relatedServices={related}
    >
      <div className="max-w-4xl mx-auto space-y-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-6">
            <p className="text-muted-foreground leading-relaxed text-base">
              Our commercial building, renovation, and remodeling services are tailored to meet the practical needs of modern businesses. At FreeRein Projects, we combine experience-driven construction methods with thoughtful planning to create durable, efficient, and professional spaces.
            </p>
            <p className="text-muted-foreground leading-relaxed text-base">
              Whether refreshing an existing property or transforming a commercial interior, we deliver results built to perform and last.
            </p>
            <p className="text-muted-foreground leading-relaxed text-base">
              Our team manages every phase of the project with precision — from planning and coordination to execution and final delivery — ensuring spaces that meet operational needs while maintaining high standards of craftsmanship with minimal disruptions to operations.
            </p>

            <div className="mt-8">
              <h2 className="text-xl font-bold text-foreground mb-5">What We Offer</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Office fit-outs and redesigns",
                  "Retail and shop renovations",
                  "Warehouse and industrial spaces",
                  "Reception and common areas",
                  "Boardrooms and meeting spaces",
                  "Full project management",
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
            <div className="bg-primary text-primary-foreground rounded-2xl p-6">
              <h3 className="font-bold text-lg mb-3">Why Choose Us</h3>
              <ul className="space-y-2 text-primary-foreground/85 text-sm">
                <li>✓ Minimal operational disruption</li>
                <li>✓ Certified professionals</li>
                <li>✓ On-time project delivery</li>
                <li>✓ Transparent, detailed quotes</li>
                <li>✓ End-to-end project management</li>
              </ul>
            </div>
            <img src={office1Img} alt="Commercial renovation" className="rounded-2xl w-full h-48 object-cover" />
          </div>
        </div>

        {/* Project photos gallery */}
        <div>
          <h2 className="text-xl font-bold text-foreground mb-5">Recent Commercial Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[office4Img, office2Img, office3Img].map((img, i) => (
              <div key={i} className="rounded-2xl overflow-hidden h-52">
                <img src={img} alt={`Commercial project ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </ServicePageLayout>
  );
}
