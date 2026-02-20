import ServicePageLayout from "@/components/ServicePageLayout";
import windowsImg from "@/assets/windows.jpg";

const related = [
  { label: "Residential", path: "/services/residential" },
  { label: "Commercial", path: "/services/commercial" },
  { label: "Partitioning, Walling & Doors", path: "/services/partitioning-walling-doors" },
  { label: "Outdoor Fixtures & Fittings", path: "/services/outdoor-fixtures" },
];

export default function Windows() {
  return (
    <ServicePageLayout
      title="Windows & Window Coverings"
      subtitle="Windows"
      heroImage={windowsImg}
      relatedServices={related}
    >
      <div className="max-w-4xl mx-auto space-y-14">

        {/* Windows */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-5">
            <h2 className="text-2xl font-bold text-foreground">Windows and Frames That Transform Your Space</h2>
            <div className="h-0.5 w-12 bg-primary rounded-full" />
            <p className="text-muted-foreground leading-relaxed">
              Windows do more than let in light. They shape the look, comfort, and energy efficiency of your home or office. Whether you need new installations, replacements, or custom window frames, our experienced team delivers high-quality solutions tailored to your style, budget, and functional needs.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We use durable materials and precise craftsmanship to ensure every window fits perfectly and performs flawlessly. From design and selection to installation and finishing touches, we handle every step with care, creating spaces that are brighter, more secure, and beautifully framed.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {["New window installations", "Window replacements", "Custom window frames", "Aluminium and wooden frames", "Security windows and burglar bars", "Energy-efficient glazing"].map((item) => (
                <div key={item} className="flex items-start gap-3 p-4 bg-muted rounded-xl">
                  <div className="w-2 h-2 rounded-full bg-primary mt-1.5 shrink-0" />
                  <span className="text-foreground text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <img src={windowsImg} alt="Windows" className="rounded-2xl w-full h-56 object-cover shadow-lg" />
          </div>
        </div>

        <div className="border-t border-border" />

        {/* Window Coverings */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-5">
            <h2 className="text-2xl font-bold text-foreground">Stylish Window Coverings for Every Space</h2>
            <div className="h-0.5 w-12 bg-primary rounded-full" />
            <p className="text-muted-foreground leading-relaxed">
              Enhance your rooms with blinds, shutters, or custom window coverings designed to fit your style and needs. Our team handles precise measurements, expert installation, and finishing touches, ensuring comfort, privacy, and lasting quality.
            </p>
          </div>
          <div className="space-y-4">
            <div className="bg-primary text-primary-foreground rounded-2xl p-6">
              <h3 className="font-bold mb-3">Window Coverings</h3>
              <ul className="space-y-2 text-primary-foreground/85 text-sm">
                <li>✓ Roller and venetian blinds</li>
                <li>✓ Wooden and faux shutters</li>
                <li>✓ Curtain tracks and rails</li>
                <li>✓ Custom-made coverings</li>
                <li>✓ Motorised blind systems</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </ServicePageLayout>
  );
}
