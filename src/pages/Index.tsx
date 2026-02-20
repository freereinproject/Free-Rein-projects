import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, MessageCircle, Shield, Clock, Heart, DollarSign, Star, Users, Zap } from "lucide-react";
import Layout from "@/components/Layout";
import heroImg from "@/assets/hero.jpg";
import outdoorImg from "@/assets/outdoor.jpg";

const whyChooseUs = [
{
  icon: Shield,
  title: "Quality Craftsmanship",
  desc: "We never cut corners. Every nail, every finish, every detail is executed to the highest standard. Our craftsmen take genuine pride in their work.",
  highlight: "Flawless Execution"
},
{
  icon: Clock,
  title: "On Time, Every Time",
  desc: "Our project managers plan meticulously and communicate proactively, so your project stays on schedule and on budget — no surprises.",
  highlight: "On Schedule & Budget"
},
{
  icon: Heart,
  title: "Client-First Approach",
  desc: "Your vision drives everything we do. We listen deeply, communicate openly, and keep you informed at every stage. You're our partner.",
  highlight: "Your Vision, Our Mission"
},
{
  icon: DollarSign,
  title: "Transparent Pricing",
  desc: "No hidden fees, no nasty surprises. We provide clear, itemised quotes so you know exactly what you're paying for.",
  highlight: "Honest & Clear Quotes"
},
{
  icon: Zap,
  title: "End-to-End Service",
  desc: "From the first consultation to the final handover, we manage every aspect of your project. One team, one point of contact, zero stress.",
  highlight: "Stress-Free Process"
},
{
  icon: Users,
  title: "Experienced Team",
  desc: "Our certified professionals bring years of hands-on experience across residential and commercial projects. Fully insured, skilled across all trades.",
  highlight: "Certified Professionals"
}];


const stats = [
{ value: "500+", label: "Projects Completed" },
{ value: "100%", label: "Client Satisfaction" },
{ value: "10+", label: "Years Experience" },
{ value: "50+", label: "Expert Team Members" }];


const testimonials = [
{
  name: "Courtney White",
  role: "Google Review ★★★★★",
  text: "Free Rein Projects are simply the best! Right from the beginning I have received friendliness and professionalism. My favorite place is the kitchen that they remodeled. I cannot thank you enough!",
  stars: 5
},
{
  name: "Tyla Azov",
  role: "Google Review ★★★★★",
  text: "Great professional service and installation, highly recommend.",
  stars: 5
}];



export default function Index() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.querySelector('[name="name"]') as HTMLInputElement)?.value;
    const phone = (form.querySelector('[name="phone"]') as HTMLInputElement)?.value;
    const projectType = (form.querySelector('[name="projectType"]') as HTMLSelectElement)?.value;
    const message = (form.querySelector('[name="message"]') as HTMLTextAreaElement)?.value;
    const text = `Hi FreeRein Projects! My name is ${name}. Phone: ${phone}. Project: ${projectType}. ${message}`;
    const waUrl = `https://wa.me/27782846198?text=${encodeURIComponent(text)}`;
    window.open(waUrl, "_blank");
  };

  return (
    <Layout>
      {/* ─── HERO ─── */}
      <section
        className="relative min-h-screen flex items-center"
        style={{
          backgroundImage: `url(${heroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(220,30%,5%)]/90 via-[hsl(220,30%,5%)]/60 to-transparent" />
        {/* Turquoise accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary/60 to-transparent" />

        <div className="relative container mx-auto px-6 py-32">
          <div className="max-w-2xl animate-fade-up">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="h-px w-8 bg-primary" />
              <span className="text-primary text-xs font-bold uppercase tracking-[0.2em]">Remodel · Refurbish · Redesign</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.05] tracking-tight mb-6">
              Making Your<br />
              <span className="text-primary">Dream Space</span><br />
              a Reality
            </h1>
            <p className="text-white/65 text-lg leading-relaxed mb-10 max-w-lg">
              Professional home and commercial remodeling across South Africa — built with precision, delivered with care.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/27782846198"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold text-sm hover:opacity-90 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5">
                <MessageCircle className="w-4 h-4" />
                WhatsApp Us Now
              </a>
              <button
                onClick={scrollToContact}
                className="inline-flex items-center gap-2 border border-white/30 text-white px-8 py-4 rounded-full font-semibold text-sm hover:bg-white/10 hover:border-white/50 transition-all duration-300">
                Get a Free Quote
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <div className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent animate-pulse" />
        </div>
      </section>

      {/* ─── STATS BAR ─── */}
      <section className="bg-[hsl(var(--primary))] py-8 bg-primary-foreground text-primary">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat) =>
            <div key={stat.label} className="group">
                <div className="text-4xl font-black leading-none text-primary-foreground">{stat.value}</div>
                <div className="text-xs mt-2 uppercase tracking-widest font-medium text-primary-foreground">{stat.label}</div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE US ─── */}
      <section id="why-choose-us" className="py-28 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            {/* Left: Intro */}
            <div className="lg:sticky lg:top-32">
              <div className="gold-badge mb-4 text-primary">
                <div className="h-px w-6 bg-primary" />
                Our Promise to You
              </div>
              <h2 className="section-title mb-4">
                Why Hundreds of Clients Choose FreeRein
              </h2>
              <div className="brand-divider-left mb-6" />
              <p className="text-muted-foreground leading-relaxed mb-8 text-base">
                We don't just renovate spaces — we build lasting relationships through trust, quality, and genuine care for every single project we take on. Here's what sets us apart.
              </p>

              {/* Prominent checklist */}
              <div className="space-y-3 mb-10">
                {["Fully Insured & Certified", "Transparent, Itemised Quotes", "On-Time Project Delivery", "Residential & Commercial Experts"].map((item) =>
                <div key={item} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center shrink-0">
                      <CheckCircle className="w-3.5 h-3.5 text-primary-foreground" />
                    </div>
                    <span className="text-foreground font-medium text-sm">{item}</span>
                  </div>
                )}
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://wa.me/27782846198"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold text-sm hover:bg-primary/90 transition-all hover:shadow-lg hover:-translate-y-0.5">

                  <MessageCircle className="w-4 h-4" />
                  Get Started Today
                </a>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 border border-border text-foreground px-6 py-3 rounded-full font-semibold text-sm hover:border-primary hover:text-primary transition-all">

                  About Us <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right: Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {whyChooseUs.map((item, i) =>
              <div
                key={item.title}
                className={`group p-6 rounded-2xl border border-border bg-card hover:border-primary hover:shadow-[0_8px_32px_-8px_hsla(181,55%,41%,0.25)] transition-all duration-300 ${
                i === 0 ? "sm:col-span-2 flex gap-6 items-start" : ""}`
                }>
                  <div className={`w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors duration-300 ${i === 0 ? "" : "mb-4"}`}>
                    <item.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  <div>
                    <p className="text-primary text-[10px] font-black uppercase tracking-widest mb-1">{item.highlight}</p>
                    <h3 className="font-bold text-foreground text-base mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ─── FULL-WIDTH BANNER ─── */}
      <section
        className="relative py-28 overflow-hidden"
        style={{
          backgroundImage: `url(${outdoorImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed"
        }}>

        <div className="absolute inset-0 bg-[hsl(220,30%,5%)]/80" />
        <div className="relative container mx-auto px-6 text-center">
          <div className="gold-badge justify-center mb-4">
            <div className="h-px w-6 bg-[hsl(var(--accent))]" />
            500+ Happy Clients
            <div className="h-px w-6 bg-[hsl(var(--accent))]" />
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-5 tracking-tight">
            Ready to Transform<br />Your Space?
          </h2>
          <p className="text-white/60 text-lg mb-10 max-w-xl mx-auto">
            Join hundreds of satisfied clients across South Africa. Let's discuss your project and get you a free quote today.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://wa.me/27782846198"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold text-sm hover:opacity-90 transition-all hover:shadow-xl hover:-translate-y-0.5">
              <MessageCircle className="w-4 h-4" />
              WhatsApp Us
            </a>
            <button
              onClick={scrollToContact}
              className="inline-flex items-center gap-2 border border-white/30 text-white px-8 py-4 rounded-full font-semibold text-sm hover:bg-white/10 transition-all">

              Send a Quote Request <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <div className="gold-badge justify-center mb-4">
              <div className="h-px w-6 bg-primary" />
              Google Reviews
              <div className="h-px w-6 bg-primary" />
            </div>
            <h2 className="section-title">What Our Clients Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {testimonials.map((t) =>
            <div key={t.name} className="bg-card rounded-2xl p-7 border border-border shadow-sm hover:shadow-md hover:border-primary/40 transition-all">
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: t.stars }).map((_, i) =>
                <Star key={i} className="w-4 h-4 text-primary fill-primary" />
                )}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 italic">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-xs">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-bold text-foreground text-sm">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ─── CONTACT ─── */}
      <section id="contact" className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
              {/* Left */}
              <div className="lg:col-span-2">
                <div className="gold-badge mb-4">
                  <div className="h-px w-6 bg-[hsl(var(--accent))]" />
                  Get In Touch
                </div>
                <h2 className="section-title mb-4">Request a Free Quote</h2>
                <div className="brand-divider-left mb-6" />
                <p className="text-muted-foreground text-sm leading-relaxed mb-8">
                  We'd love to discuss your project and provide a no-obligation quote.
                </p>

                <div className="space-y-4">
                  <a
                    href="https://wa.me/27782846198"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-2xl border border-border hover:border-[hsl(var(--accent))] bg-card transition-all group">

                    <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: "#25D366" }}>
                      <MessageCircle className="w-5 h-5 text-white" fill="white" />
                    </div>
                    <div>
                      <div className="text-[10px] text-muted-foreground uppercase tracking-widest font-semibold mb-0.5">WhatsApp</div>
                      <div className="font-bold text-foreground text-sm group-hover:text-primary transition-colors">+27 78 284 6198</div>
                    </div>
                  </a>
                  <a
                    href="mailto:sales@freereinprojects.co.za"
                    className="flex items-center gap-4 p-4 rounded-2xl border border-border hover:border-[hsl(var(--accent))] bg-card transition-all group">

                    <div className="w-11 h-11 rounded-xl bg-primary flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    </div>
                    <div>
                      <div className="text-[10px] text-muted-foreground uppercase tracking-widest font-semibold mb-0.5">Email Sales</div>
                      <div className="font-bold text-foreground text-sm group-hover:text-primary transition-colors">sales@freereinprojects.co.za</div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Right: Form */}
              <div className="lg:col-span-3">
                <form onSubmit={handleSubmit} className="bg-card border border-border rounded-3xl p-8 space-y-5 shadow-sm">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-foreground uppercase tracking-widest mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="Your name"
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary text-sm transition-all" />

                    </div>
                    <div>
                      <label className="block text-xs font-bold text-foreground uppercase tracking-widest mb-2">Phone *</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="+27 ..."
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary text-sm transition-all" />

                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-foreground uppercase tracking-widest mb-2">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary text-sm transition-all" />

                  </div>
                  <div>
                    <label className="block text-xs font-bold text-foreground uppercase tracking-widest mb-2">Project Type *</label>
                    <select
                      name="projectType"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary text-sm transition-all">

                      <option value="">Select project type...</option>
                      <option>Commercial Renovation</option>
                      <option>Residential Renovation</option>
                      <option>Partitioning & Walling</option>
                      <option>Ceilings & Roofing</option>
                      <option>Electrical & Plumbing</option>
                      <option>Kitchen & Cupboards</option>
                      <option>Windows & Coverings</option>
                      <option>Outdoor Fixtures</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-foreground uppercase tracking-widest mb-2">Message</label>
                    <textarea
                      name="message"
                      rows={4}
                      placeholder="Tell us about your project..."
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary text-sm resize-none transition-all" />

                  </div>
                  <button
                    type="submit"
                    className="w-full bg-primary text-primary-foreground py-4 rounded-xl font-bold text-sm hover:bg-primary/90 transition-all hover:shadow-lg flex items-center justify-center gap-2">

                    <MessageCircle className="w-4 h-4" />
                    Send via WhatsApp
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>);

}