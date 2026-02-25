import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { useState } from "react";
import doorImg from "@/assets/door.jpg";
import windowsImg from "@/assets/windows.jpg";
import cupboards2Img from "@/assets/cupboards2.jpg";
import roofTileImg from "@/assets/project-roof-tile.jpg";
import walkin2Img from "@/assets/project-walkin2.jpg";
import office1Img from "@/assets/project-office1.jpg";
import office2Img from "@/assets/project-office2.jpg";
import office3Img from "@/assets/project-office3.jpg";
import office4Img from "@/assets/project-office4.jpg";
import roofMetalImg from "@/assets/project-roof-metal.jpg";
import craighall1Img from "@/assets/decking-craighall1.jpg";
import craighall2Img from "@/assets/decking-craighall2.jpg";
import foldingDoorImg from "@/assets/folding-door.jpg";
import rollerBlind1Img from "@/assets/roller-blind1.jpg";
import rollerBlind2Img from "@/assets/roller-blind2.jpg";
import { MessageCircle, ArrowRight } from "lucide-react";

const projects = [
  { img: office4Img, title: "Commercial Office Fit-Out", category: "Commercial", desc: "Full commercial office fit-out with glass partitions, brick feature wall and branded finishes." },
  { img: office1Img, title: "Office Branded Wall Feature", category: "Commercial", desc: "Custom feature wall with brand identity, suspended ceiling and professional lighting." },
  { img: office2Img, title: "Modern Office Renovation", category: "Commercial", desc: "Complete office renovation with custom desk, feature walls and professional finishes." },
  { img: office3Img, title: "Executive Office Design", category: "Commercial", desc: "Executive office with brick accent wall, dark feature walls and custom joinery." },
  { img: cupboards2Img, title: "Built-In Cupboard Installation", category: "Kitchen & Cupboards", desc: "Custom built-in cupboards with stylish finishes." },
  { img: walkin2Img, title: "Walk-In Wardrobe", category: "Kitchen & Cupboards", desc: "Elegant walk-in wardrobe with full hanging and shelving solutions." },
  { img: doorImg, title: "Custom Door Installation", category: "Doors", desc: "High-quality door installations with premium finishes." },
  { img: foldingDoorImg, title: "Wooden Folding Door", category: "Doors", desc: "Elegant wooden folding door installation with rich walnut finish for interior spaces." },
  { img: roofTileImg, title: "Roof Tiling Project", category: "Ceilings & Roofing", desc: "Complete roof tiling with quality materials and professional installation." },
  { img: roofMetalImg, title: "Metal Roof Installation", category: "Ceilings & Roofing", desc: "Durable corrugated metal roof installation — Cape Town." },
  { img: windowsImg, title: "Window Frame Installation", category: "Windows & Coverings", desc: "Custom window frames fitted with precision and care." },
  { img: rollerBlind1Img, title: "Roller Blinds", category: "Windows & Coverings", desc: "Custom roller blind installation with clean lines and a modern fabric finish." },
  { img: rollerBlind2Img, title: "Roller Blinds", category: "Windows & Coverings", desc: "Full-width roller blinds fitted for privacy and light control in residential spaces." },
  { img: craighall1Img, title: "Commercial Decking – Craighall", category: "Flooring & Decking", desc: "Composite decking platform and steps for a commercial storefront in Craighall." },
  { img: craighall2Img, title: "Storefront Deck Build – Craighall", category: "Flooring & Decking", desc: "Full exterior composite deck installation with integrated staircase for retail premises." },
];

const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <Layout>
      {/* ─── HERO ─── */}
      <section
        className="relative h-80 md:h-[480px] flex items-end"
        style={{
          backgroundImage: `url(${office4Img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(220,30%,5%)]/90 via-[hsl(220,30%,5%)]/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary/50 to-transparent" />
        <div className="relative container mx-auto px-6 pb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <div className="h-px w-6 bg-primary" />
            <span className="text-primary text-xs font-bold uppercase tracking-[0.2em]">Our Portfolio</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight">Our Projects</h1>
          <p className="text-white/60 mt-3 text-lg max-w-xl">
            A showcase of completed work across South Africa — from kitchens to full commercial fit-outs.
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-muted border-b border-border">
        <div className="container mx-auto px-6 py-3">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <span className="text-foreground font-medium">Projects</span>
          </div>
        </div>
      </div>

      {/* ─── STATS ─── */}
      <section className="bg-primary text-white py-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "500+", label: "Projects Completed" },
              { value: "100%", label: "Client Satisfaction" },
              { value: "8+", label: "Service Categories" },
              { value: "10+", label: "Years Experience" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-4xl font-black text-primary-foreground leading-none">{stat.value}</div>
                <div className="text-white/60 text-xs mt-2 uppercase tracking-widest font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROJECTS GRID ─── */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-px w-6 bg-primary" />
              <span className="text-primary text-xs font-bold uppercase tracking-[0.2em]">Portfolio</span>
              <div className="h-px w-6 bg-primary" />
            </div>
            <h2 className="section-title mb-3">Our Work Speaks for Itself</h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-sm">
              Every project is a testament to our commitment to quality, craftsmanship, and client satisfaction.
            </p>
          </div>

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-card border border-border text-foreground/70 hover:border-primary hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((project, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl"
              >
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220,30%,5%)]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-primary-foreground text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-foreground text-base mb-1.5 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{project.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-20 bg-[hsl(220,30%,8%)] text-center">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 mb-5 justify-center">
              <div className="h-px w-6 bg-primary" />
              <span className="text-primary text-xs font-bold uppercase tracking-[0.2em]">Start Your Project</span>
              <div className="h-px w-6 bg-primary" />
            </div>
            <h3 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight">Ready to Start Your Project?</h3>
            <p className="text-white/50 mb-10 text-base">
              Contact us today for a free consultation and no-obligation quote.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="https://wa.me/27782846198"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold text-sm hover:opacity-90 transition-all hover:shadow-lg hover:-translate-y-0.5"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Us
              </a>
              <Link
                to="/#contact"
                className="inline-flex items-center gap-2 border border-white/25 text-white px-8 py-4 rounded-full font-semibold text-sm hover:bg-white/8 transition-all"
              >
                Get a Quote <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
