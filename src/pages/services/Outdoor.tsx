import ServicePageLayout from "@/components/ServicePageLayout";
import outdoorImg from "@/assets/outdoor.jpg";

const related = [
  { label: "Residential", path: "/services/residential" },
  { label: "Commercial", path: "/services/commercial" },
  { label: "Electrical & Plumbing", path: "/services/electrical-plumbing" },
  { label: "Windows & Window Coverings", path: "/services/windows-coverings" },
];

export default function Outdoor() {
  return (
    <ServicePageLayout
      title="Outdoor Fixtures & Fittings"
      subtitle="Outdoor"
      heroImage={outdoorImg}
      relatedServices={related}
    >
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-5">
            <h2 className="text-2xl font-bold text-foreground">Complete Outdoor Fixtures and Custom Fittings for Every Home</h2>
            <div className="h-0.5 w-12 bg-primary rounded-full" />
            <p className="text-muted-foreground leading-relaxed">
              Transform your outdoor spaces with our comprehensive range of fixtures, fittings, and custom add-ons. Whether you're looking to install new structures like sheds, awnings, carports, pools, or braai areas, our skilled team delivers high-quality, durable solutions designed to enhance both functionality and style.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We also specialize in selling and installing fittings onto existing fixtures, helping you upgrade or expand what you already have with ease. From planning and design to installation and finishing touches, we manage every detail to ensure your outdoor space is safe, practical, and visually appealing.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              No matter the size or complexity of your project, we work closely with you to create outdoor areas that are tailored to your needs, built to last, and perfect for entertaining, relaxing, or everyday use.
            </p>

            <div className="mt-6">
              <h3 className="text-lg font-bold text-foreground mb-4">What We Build</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Braai areas and entertainment decks",
                  "Carports and shade structures",
                  "Awnings and pergolas",
                  "Sheds and storage structures",
                  "Pool installations and surrounds",
                  "Custom garden fittings",
                  "Paving and outdoor flooring",
                  "Fencing and boundary walls",
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
            <img src={outdoorImg} alt="Outdoor fixtures" className="rounded-2xl w-full h-52 object-cover shadow-lg" />
            <div className="bg-primary text-primary-foreground rounded-2xl p-6">
              <h3 className="font-bold mb-3">Our Approach</h3>
              <ul className="space-y-2 text-primary-foreground/85 text-sm">
                <li>✓ Tailored outdoor designs</li>
                <li>✓ Quality materials throughout</li>
                <li>✓ Full project management</li>
                <li>✓ Upgrade existing fixtures</li>
                <li>✓ Built to last and impress</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </ServicePageLayout>
  );
}
