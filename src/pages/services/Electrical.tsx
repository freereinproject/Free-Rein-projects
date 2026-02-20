import ServicePageLayout from "@/components/ServicePageLayout";
import aiElectricalHero from "@/assets/ai-electrical-hero.jpg";
import electricalImg from "@/assets/electrical.jpg";
import plumbingImg from "@/assets/plumbing.jpg";

const related = [
  { label: "Commercial", path: "/services/commercial" },
  { label: "Residential", path: "/services/residential" },
  { label: "Kitchen & Built-In Cupboards", path: "/services/kitchen-cupboards" },
  { label: "Ceilings & Roofing", path: "/services/ceilings-roofing" },
];

export default function Electrical() {
  return (
    <ServicePageLayout
      title="Electrical & Plumbing"
      subtitle="Electrical & Plumbing"
      heroImage={aiElectricalHero}
      relatedServices={related}
    >
      <div className="max-w-4xl mx-auto space-y-14">

        {/* Electrical */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-5">
            <h2 className="text-2xl font-bold text-foreground">Reliable Electrical Solutions for Every Project</h2>
            <div className="h-0.5 w-12 bg-primary rounded-full" />
            <p className="text-muted-foreground leading-relaxed">
              Safe, efficient electrical systems are the backbone of any home or commercial space. Whether you need new wiring, upgrades, repairs, or full installations, our certified team delivers high-quality electrical solutions tailored to your needs.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We prioritize safety, precision, and reliability at every step, ensuring that your electrical systems perform flawlessly. From planning and installation to maintenance and troubleshooting, we handle the technical details so you can enjoy peace of mind knowing your property is in expert hands.
            </p>
            <div className="bg-primary/10 border border-primary/20 rounded-xl p-4">
              <p className="text-primary font-semibold text-sm">
                🏅 Certificate of Compliance provided upon project completion.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {["New wiring and installations", "Electrical upgrades", "DB board installations", "Light fittings and fixtures", "Fault finding and repairs", "Certificate of Compliance"].map((item) => (
                <div key={item} className="flex items-start gap-3 p-4 bg-muted rounded-xl">
                  <div className="w-2 h-2 rounded-full bg-primary mt-1.5 shrink-0" />
                  <span className="text-foreground text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <img src={electricalImg} alt="Electrical" className="rounded-2xl w-full h-56 object-cover shadow-lg" />
          </div>
        </div>

        <div className="border-t border-border" />

        {/* Plumbing */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-5">
            <h2 className="text-2xl font-bold text-foreground">Trusted Plumbing Solutions for Your Home or Business</h2>
            <div className="h-0.5 w-12 bg-primary rounded-full" />
            <p className="text-muted-foreground leading-relaxed">
              Reliable plumbing is essential for comfort, safety, and efficiency in any space. Whether you need installations, repairs, maintenance, or emergency plumbing services, our skilled team delivers high-quality solutions tailored to your needs.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We handle every project with precision and care, using the best materials and techniques to ensure long-lasting results. From planning to completion, we take care of the details so you can enjoy smooth, worry-free plumbing that works when you need it most.
            </p>
          </div>
          <div className="space-y-4">
            <div className="bg-primary text-primary-foreground rounded-2xl p-6">
              <h3 className="font-bold mb-3">Plumbing Services</h3>
              <ul className="space-y-2 text-primary-foreground/85 text-sm">
                <li>✓ New plumbing installations</li>
                <li>✓ Pipe repairs and replacements</li>
                <li>✓ Geyser installations</li>
                <li>✓ Bathroom and kitchen plumbing</li>
                <li>✓ Drainage solutions</li>
              </ul>
            </div>
            <img src={plumbingImg} alt="Plumbing" className="rounded-2xl w-full h-40 object-cover shadow-lg" />
          </div>
        </div>

      </div>
    </ServicePageLayout>
  );
}
