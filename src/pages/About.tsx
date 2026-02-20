import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { CheckCircle, ArrowRight, Award, Users, Clock, Handshake } from "lucide-react";
import commercialImg from "@/assets/commercial.jpg";
import residentialImg from "@/assets/residential.jpg";
import office1Img from "@/assets/project-office1.jpg";
import office2Img from "@/assets/project-office2.jpg";

const values = [
  {
    icon: Award,
    title: "Excellence in Every Detail",
    desc: "We never cut corners. From the first consultation to the final coat of paint, every detail receives our full attention.",
  },
  {
    icon: Users,
    title: "A Team You Can Trust",
    desc: "Our professionals are vetted, skilled, and passionate about their craft. We invest in our team so they can deliver the best.",
  },
  {
    icon: Clock,
    title: "Respect for Your Time",
    desc: "We plan meticulously to minimize disruption and deliver on schedule — because we understand that renovations affect your life.",
  },
  {
    icon: Handshake,
    title: "Honest Partnerships",
    desc: "Clear quotes, honest timelines, open communication. We treat every client as a long-term partner, not just a transaction.",
  },
];

const milestones = [
  { year: "Day One", title: "Founded with Purpose", desc: "FreeRein Projects was born from a passion for quality craftsmanship and a desire to give clients complete creative freedom." },
  { year: "Growth", title: "Expanding Our Expertise", desc: "We grew our team of specialists across all trades — electrical, plumbing, carpentry, ceiling, and more." },
  { year: "Today", title: "Trusted Across South Africa", desc: "Hundreds of completed projects later, we remain committed to the same values that started it all." },
];

export default function About() {
  return (
    <Layout>
      {/* ─── HERO ─── */}
      <section
        className="relative h-80 md:h-[480px] flex items-end"
        style={{
          backgroundImage: `url(${commercialImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(220,30%,5%)]/90 via-[hsl(220,30%,5%)]/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[hsl(var(--accent))] via-[hsl(var(--accent))]/50 to-transparent" />
        <div className="relative container mx-auto px-6 pb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <div className="h-px w-6 bg-[hsl(var(--accent))]" />
            <span className="text-[hsl(var(--accent))] text-xs font-bold uppercase tracking-[0.2em]">Our Story</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight">About FreeRein Projects</h1>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-muted border-b border-border">
        <div className="container mx-auto px-6 py-3">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <span className="text-foreground font-medium">About Us</span>
          </div>
        </div>
      </div>

      {/* ─── MAIN ABOUT ─── */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Left: Images collage */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src={office1Img}
                  alt="FreeRein Projects commercial work"
                  className="rounded-2xl w-full h-72 object-cover shadow-xl col-span-2"
                />
                <img
                  src={office2Img}
                  alt="FreeRein Projects office renovation"
                  className="rounded-2xl w-full h-44 object-cover shadow-lg"
                />
                <div className="rounded-2xl bg-primary flex flex-col items-center justify-center h-44 p-6 text-center">
                  <div className="text-4xl font-black text-[hsl(var(--accent))] leading-none">10+</div>
                  <div className="text-primary-foreground/80 text-xs mt-2 uppercase tracking-widest font-medium">Years of Excellence</div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-[hsl(var(--accent))] text-[hsl(220,30%,8%)] p-5 rounded-2xl shadow-xl hidden md:block">
                <div className="text-3xl font-black leading-none">500+</div>
                <div className="text-[hsl(220,30%,8%)]/70 text-xs mt-1 font-semibold">Projects</div>
              </div>
            </div>

            {/* Right: Text */}
            <div>
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="h-px w-6 bg-[hsl(var(--accent))]" />
                <span className="text-[hsl(var(--accent))] text-xs font-bold uppercase tracking-[0.2em]">Who We Are</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-foreground tracking-tight mb-2 leading-[1.1]">
                Built on Craftsmanship,<br />Driven by Care
              </h2>
              <div className="h-1 w-12 bg-[hsl(var(--accent))] rounded-full mb-7" />
              <p className="text-muted-foreground leading-relaxed mb-5 text-base">
                At FreeRein Projects, we specialize in turning ideas into stunning realities. Our name says it all — we give your vision free rein, allowing your dream space to come to life without compromise.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-5 text-base">
                From residential upgrades to commercial transformations, our team of skilled professionals delivers exceptional craftsmanship and outstanding customer service every step of the way.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-9 text-base">
                Whether you're looking to modernize a kitchen, partition a growing office, install a stunning ceiling, or build a complete outdoor entertainment area, we have the expertise to make it happen beautifully.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {[
                  "Residential & Commercial",
                  "Certified & Insured",
                  "On-Time Delivery",
                  "Transparent Quotes",
                  "Quality Materials",
                  "Dedicated Support",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-[hsl(var(--accent))] flex items-center justify-center shrink-0">
                      <CheckCircle className="w-3 h-3 text-[hsl(220,30%,8%)]" />
                    </div>
                    <span className="text-sm text-foreground font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-full font-bold text-sm hover:bg-primary/90 transition-all hover:shadow-lg hover:-translate-y-0.5"
              >
                View Our Work <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── MISSION & VISION ─── */}
      <section className="py-24 bg-[hsl(220,30%,8%)]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-1 max-w-4xl mx-auto">
            <div className="p-10 md:p-14 border-b md:border-b-0 md:border-r border-white/10">
              <div className="w-14 h-14 rounded-2xl border border-[hsl(var(--accent))]/40 flex items-center justify-center mb-7 text-[hsl(var(--accent))] text-2xl font-black">
                M
              </div>
              <h3 className="text-white text-2xl font-black mb-4">Our Mission</h3>
              <p className="text-white/55 leading-relaxed text-base">
                To deliver exceptional renovation and remodeling services that transform ordinary spaces into extraordinary experiences, built on quality, integrity, and genuine care for our clients.
              </p>
            </div>
            <div className="p-10 md:p-14">
              <div className="w-14 h-14 rounded-2xl border border-[hsl(var(--accent))]/40 flex items-center justify-center mb-7 text-[hsl(var(--accent))] text-2xl font-black">
                V
              </div>
              <h3 className="text-white text-2xl font-black mb-4">Our Vision</h3>
              <p className="text-white/55 leading-relaxed text-base">
                To be South Africa's most trusted building and renovation company — a team that homeowners and businesses turn to with complete confidence, knowing their space is in the very best hands.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── VALUES ─── */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-px w-6 bg-[hsl(var(--accent))]" />
              <span className="text-[hsl(var(--accent))] text-xs font-bold uppercase tracking-[0.2em]">What Drives Us</span>
              <div className="h-px w-6 bg-[hsl(var(--accent))]" />
            </div>
            <h2 className="section-title">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div key={v.title} className="group p-8 rounded-2xl border border-border bg-card hover:border-[hsl(var(--accent))] hover:shadow-[0_12px_40px_-8px_hsla(38,85%,55%,0.2)] transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl bg-primary/8 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                  <v.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <h3 className="font-bold text-foreground text-base mb-3">{v.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── JOURNEY TIMELINE ─── */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-px w-6 bg-[hsl(var(--accent))]" />
              <span className="text-[hsl(var(--accent))] text-xs font-bold uppercase tracking-[0.2em]">Our Journey</span>
              <div className="h-px w-6 bg-[hsl(var(--accent))]" />
            </div>
            <h2 className="section-title">How We Got Here</h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden md:block" />
              <div className="space-y-8">
                {milestones.map((m, i) => (
                  <div key={m.year} className="flex gap-8 items-start">
                    <div className="hidden md:flex w-16 h-16 rounded-2xl bg-primary items-center justify-center shrink-0 z-10">
                      <span className="text-[hsl(var(--accent))] font-black text-xs text-center leading-tight px-1">{m.year}</span>
                    </div>
                    <div className="flex-1 bg-card rounded-2xl p-7 border border-border hover:border-[hsl(var(--accent))]/40 transition-colors">
                      <span className="text-[hsl(var(--accent))] font-bold text-xs uppercase tracking-widest md:hidden block mb-2">{m.year}</span>
                      <h3 className="font-bold text-foreground text-lg mb-2">{m.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{m.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="rounded-3xl overflow-hidden relative h-80 md:h-[420px]">
            <img src={residentialImg} alt="Residential Project" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-[hsl(220,30%,5%)]/85 to-transparent flex items-center">
              <div className="px-10 md:px-16 max-w-lg">
                <h3 className="text-white text-3xl md:text-4xl font-black mb-4 tracking-tight">Ready to Transform Your Space?</h3>
                <p className="text-white/65 text-base mb-8">Let's discuss your vision and bring it to life with precision and care.</p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://wa.me/27782846198"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[hsl(var(--accent))] text-[hsl(220,30%,8%)] px-7 py-3.5 rounded-full font-bold text-sm hover:opacity-90 transition-all"
                  >
                    Get a Quote
                  </a>
                  <Link
                    to="/projects"
                    className="inline-flex items-center gap-2 border border-white/40 text-white px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-white/10 transition-all"
                  >
                    View Our Work <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
