import { Link } from "react-router-dom";
import { Mail, MapPin, ArrowRight } from "lucide-react";
import logo from "@/assets/logo.png";

// WhatsApp SVG icon
const WhatsAppIcon = ({ className }: {className?: string;}) =>
<svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>;


const services = [
{ label: "Commercial", path: "/services/commercial" },
{ label: "Residential", path: "/services/residential" },
{ label: "Partitioning, Walling & Doors", path: "/services/partitioning-walling-doors" },
{ label: "Ceilings & Roofing", path: "/services/ceilings-roofing" },
{ label: "Electrical & Plumbing", path: "/services/electrical-plumbing" },
{ label: "Kitchen & Built-In Cupboards", path: "/services/kitchen-cupboards" },
{ label: "Windows & Window Coverings", path: "/services/windows-coverings" },
{ label: "Outdoor Fixtures & Fittings", path: "/services/outdoor-fixtures" }];


export default function Footer() {
  return (
    <footer className="bg-[hsl(220,30%,8%)] text-white">
      {/* Top CTA strip */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-6 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-white/50 text-xs font-bold uppercase tracking-widest mb-1">Ready to build something great?</p>
              <h3 className="text-white text-2xl md:text-3xl font-bold">Let's bring your vision to life.</h3>
            </div>
            <a
              href="https://wa.me/27782846198"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-full font-bold text-sm hover:opacity-90 transition-all hover:shadow-lg hover:-translate-y-0.5">

              Get a Free Quote <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img alt="FreeRein Projects" className="h-14 w-auto mb-5 object-contain" src={logo} />
            <p className="text-white/50 text-sm leading-relaxed mt-4 font-light">
              Professional home and commercial remodeling across South Africa — delivering quality craftsmanship on every project.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white/90 font-semibold text-sm uppercase tracking-widest mb-6">Navigate</h4>
            <ul className="space-y-3">
              {[
              { label: "Home", path: "/" },
              { label: "About Us", path: "/about" },
              { label: "Projects", path: "/projects" },
              { label: "Get a Quote", path: "/#contact" }].
              map((link) =>
              <li key={link.path}>
                  <Link
                  to={link.path}
                  className="text-white/50 hover:text-primary transition-colors text-sm flex items-center gap-2 group">

                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all" />
                    {link.label}
                  </Link>
                </li>
              )}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white/90 font-semibold text-sm uppercase tracking-widest mb-6">Services</h4>
            <ul className="space-y-3">
              {services.slice(0, 6).map((s) =>
              <li key={s.path}>
                  <Link
                  to={s.path}
                  className="text-white/50 hover:text-primary transition-colors text-sm flex items-center gap-2 group">

                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all" />
                    {s.label}
                  </Link>
                </li>
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white/90 font-semibold text-sm uppercase tracking-widest mb-6">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://wa.me/27782846198"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-white/50 hover:text-primary transition-colors text-sm">

                  <WhatsAppIcon className="w-4 h-4 mt-0.5 shrink-0 text-primary" />
                  +27 78 284 6198
                </a>
              </li>
              <li>
                <a
                  href="mailto:sales@freereinprojects.co.za"
                  className="flex items-start gap-3 text-white/50 hover:text-primary transition-colors text-sm">

                  <Mail className="w-4 h-4 mt-0.5 shrink-0 text-primary" />
                  sales@freereinprojects.co.za
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/50 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-primary" />
                South Africa
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar with Logo */}
      <div className="border-t border-white/8">
        <div className="container mx-auto px-6 py-8 flex flex-col items-center gap-4">
          <img src={logo} alt="FreeRein Projects" className="h-16 w-auto opacity-80" />
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 w-full">
            <p className="text-white/30 text-xs">
              © {new Date().getFullYear()} FreeRein Projects. All rights reserved.
            </p>
            <p className="text-white/30 text-xs tracking-widest">
              REMODEL · REFURBISH · REDESIGN
            </p>
          </div>
        </div>
      </div>
    </footer>);

}