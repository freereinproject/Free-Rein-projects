import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { MessageCircle } from "lucide-react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-20">
        {children}
      </main>
      <Footer />

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/27782846198"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl"
        style={{ backgroundColor: "#25D366" }}
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 text-white" fill="white" />
      </a>
    </div>
  );
}
