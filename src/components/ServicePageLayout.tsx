import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle } from "lucide-react";
import { ReactNode } from "react";
import Layout from "@/components/Layout";

interface ServicePageLayoutProps {
  title: string;
  subtitle?: string;
  heroImage: string;
  children: ReactNode;
  relatedServices?: Array<{ label: string; path: string }>;
}

export default function ServicePageLayout({
  title,
  subtitle,
  heroImage,
  children,
  relatedServices = [],
}: ServicePageLayoutProps) {
  return (
    <Layout>
      {/* ─── HERO BANNER ─── */}
      <section
        className="relative h-80 md:h-[480px] flex items-end"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(220,30%,5%)]/90 via-[hsl(220,30%,5%)]/55 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[hsl(var(--accent))] via-[hsl(var(--accent))]/50 to-transparent" />
        <div className="relative container mx-auto px-6 pb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <div className="h-px w-6 bg-[hsl(var(--accent))]" />
            <span className="text-[hsl(var(--accent))] text-xs font-bold uppercase tracking-[0.2em]">Our Services</span>
          </div>
          <h1 className="text-white text-4xl md:text-5xl font-black max-w-2xl leading-tight tracking-tight">
            {title}
          </h1>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-muted border-b border-border">
        <div className="container mx-auto px-6 py-3">
          <div className="flex items-center gap-2 text-sm text-muted-foreground flex-wrap">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <span className="text-muted-foreground">Services</span>
            <span>/</span>
            <span className="text-foreground font-medium truncate">{title}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-16">
        {children}
      </div>

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="bg-muted py-16">
          <div className="container mx-auto px-6">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 mb-3">
                <div className="h-px w-6 bg-[hsl(var(--accent))]" />
                <span className="text-[hsl(var(--accent))] text-xs font-bold uppercase tracking-[0.2em]">More Services</span>
                <div className="h-px w-6 bg-[hsl(var(--accent))]" />
              </div>
              <h3 className="text-2xl font-black text-foreground">Explore Other Services</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {relatedServices.map((s) => (
                <Link
                  key={s.path}
                  to={s.path}
                  className="group p-5 flex items-center justify-between bg-card rounded-2xl border border-border hover:border-[hsl(var(--accent))]/50 hover:shadow-md transition-all duration-200"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[hsl(var(--accent))] shrink-0" />
                    <span className="font-semibold text-foreground group-hover:text-primary transition-colors text-sm">
                      {s.label}
                    </span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 bg-[hsl(220,30%,8%)] text-center">
        <div className="container mx-auto px-6">
          <div className="max-w-xl mx-auto">
            <div className="inline-flex items-center gap-2 mb-5 justify-center">
              <div className="h-px w-6 bg-[hsl(var(--accent))]" />
              <span className="text-[hsl(var(--accent))] text-xs font-bold uppercase tracking-[0.2em]">Start Your Project</span>
              <div className="h-px w-6 bg-[hsl(var(--accent))]" />
            </div>
            <h3 className="text-3xl font-black text-white mb-3 tracking-tight">Ready to Get Started?</h3>
            <p className="text-white/50 mb-10 text-base">
              Contact us today for a free consultation and no-obligation quote.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="https://wa.me/27782846198"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[hsl(var(--accent))] text-[hsl(220,30%,8%)] px-8 py-4 rounded-full font-bold text-sm hover:opacity-90 transition-all hover:shadow-lg hover:-translate-y-0.5"
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
