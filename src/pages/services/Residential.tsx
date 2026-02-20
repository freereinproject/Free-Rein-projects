import ServicePageLayout from "@/components/ServicePageLayout";
import aiResidentialHero from "@/assets/ai-residential-hero.jpg";
import residentialImg from "@/assets/residential.jpg";

const related = [
  { label: "Commercial", path: "/services/commercial" },
  { label: "Kitchen & Built-In Cupboards", path: "/services/kitchen-cupboards" },
  { label: "Ceilings & Roofing", path: "/services/ceilings-roofing" },
  { label: "Electrical & Plumbing", path: "/services/electrical-plumbing" },
  { label: "Windows & Window Coverings", path: "/services/windows-coverings" },
];

export default function Residential() {
  return (
    <ServicePageLayout
      title="Residential Building, Renovations and Remodeling"
      subtitle="Residential"
      heroImage={aiResidentialHero}
      relatedServices={related}
    >
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-primary/10 border border-primary/20 rounded-2xl p-5 mb-2">
              <p className="text-primary font-semibold text-base italic">
                "We Know How Stressful Building and Renovations Can Be ~ Take A Deep Breath, We'll Do All The Heavy Lifting"
              </p>
            </div>
            <p className="text-muted-foreground leading-relaxed text-base">
              FreeRein Projects provides residential building, renovation, and remodeling services designed to enhance comfort, functionality, and long-term value.
            </p>
            <p className="text-muted-foreground leading-relaxed text-base">
              We work closely with homeowners to understand their vision, guide them through each stage, and deliver quality craftsmanship with clear communication from start to finish.
            </p>
            <p className="text-muted-foreground leading-relaxed text-base">
              Whether building new or updating an existing space, we approach every home with care and attention to detail.
            </p>

            <div className="mt-8">
              <h2 className="text-xl font-bold text-foreground mb-5">Our Residential Services</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "New home construction",
                  "Room additions and extensions",
                  "Full home renovations",
                  "Interior upgrades",
                  "Kitchen and bathroom remodels",
                  "Structural improvements",
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
              <h3 className="font-bold text-lg mb-3">Our Promise</h3>
              <ul className="space-y-2 text-primary-foreground/85 text-sm">
                <li>✓ Clear communication throughout</li>
                <li>✓ Quality craftsmanship</li>
                <li>✓ On-time and on-budget delivery</li>
                <li>✓ Fully licensed and insured</li>
                <li>✓ Personalised service for every home</li>
              </ul>
            </div>
            <img src={residentialImg} alt="Residential renovation" className="rounded-2xl w-full h-48 object-cover" />
          </div>
        </div>
      </div>
    </ServicePageLayout>
  );
}
