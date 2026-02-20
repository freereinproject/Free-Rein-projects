import ServicePageLayout from "@/components/ServicePageLayout";
import kitchenImg from "@/assets/kitchen.jpg";
import cupboardsImg from "@/assets/cupboards2.jpg";
import walkinImg from "@/assets/walkin_closet.jpg";
import walkin2Img from "@/assets/project-walkin2.jpg";

const related = [
  { label: "Residential", path: "/services/residential" },
  { label: "Electrical & Plumbing", path: "/services/electrical-plumbing" },
  { label: "Partitioning, Walling & Doors", path: "/services/partitioning-walling-doors" },
  { label: "Windows & Window Coverings", path: "/services/windows-coverings" },
];

export default function Kitchen() {
  return (
    <ServicePageLayout
      title="Kitchen & Built-In Cupboards"
      subtitle="Kitchen & Cupboards"
      heroImage={kitchenImg}
      relatedServices={related}
    >
      <div className="max-w-4xl mx-auto space-y-14">

        {/* Kitchens */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-5">
            <h2 className="text-2xl font-bold text-foreground">Kitchens Designed for Every Lifestyle</h2>
            <div className="h-0.5 w-12 bg-primary rounded-full" />
            <p className="text-muted-foreground leading-relaxed">
              Your kitchen is the heart of your home, and we believe every space deserves style, functionality, and quality — regardless of budget. Whether you're looking for a luxurious high-end kitchen, a practical low-cost solution, or custom add-ons and renovations, our experienced team brings your vision to life.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              From design and material selection to installation and finishing touches, we handle every step with care and precision. Our goal is to create kitchens that are beautiful, functional, and built to last — making the renovation process smooth and stress-free for every client.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {["Custom kitchen designs", "High-end and budget options", "Countertop installations", "Cabinet fitting and finishing", "Kitchen renovations and upgrades", "Add-ons and extensions"].map((item) => (
                <div key={item} className="flex items-start gap-3 p-4 bg-muted rounded-xl">
                  <div className="w-2 h-2 rounded-full bg-primary mt-1.5 shrink-0" />
                  <span className="text-foreground text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <img src={kitchenImg} alt="Kitchen" className="rounded-2xl w-full h-48 object-cover shadow-lg" />
            <img src={cupboardsImg} alt="Cupboards" className="rounded-2xl w-full h-40 object-cover shadow-lg" />
          </div>
        </div>

        <div className="border-t border-border" />

        {/* Cupboards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-5">
            <h2 className="text-2xl font-bold text-foreground">Custom Built-in Cupboards for Every Home</h2>
            <div className="h-0.5 w-12 bg-primary rounded-full" />
            <p className="text-muted-foreground leading-relaxed">
              Organized, functional spaces start with smart storage solutions. Whether you're looking for luxurious, high-end built-in cupboards or practical, budget-friendly options, our skilled team designs and installs cupboards that fit your lifestyle and space perfectly.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We also offer custom add-ons and full renovations to enhance the beauty and usability of your home. From concept to installation, we handle every detail with care and precision, ensuring durable, stylish results that make your home more comfortable, organized, and enjoyable.
            </p>
          </div>
          <div className="space-y-4">
            <div className="bg-primary text-primary-foreground rounded-2xl p-6">
              <h3 className="font-bold mb-3">Cupboard Options</h3>
              <ul className="space-y-2 text-primary-foreground/85 text-sm">
                <li>✓ Built-in wardrobes</li>
                <li>✓ Walk-in closets</li>
                <li>✓ Linen and storage cupboards</li>
                <li>✓ Custom finishes and fittings</li>
                <li>✓ Budget and premium ranges</li>
              </ul>
            </div>
            <img src={walkinImg} alt="Walk-in closet" className="rounded-2xl w-full h-40 object-cover shadow-lg" />
            <img src={walkin2Img} alt="Walk-in wardrobe" className="rounded-2xl w-full h-40 object-cover shadow-lg" />
          </div>
        </div>

      </div>
    </ServicePageLayout>
  );
}
