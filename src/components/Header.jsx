import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { profile } from "../data";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-paper/95 backdrop-blur waybill-border border-t-0 border-x-0" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8 flex items-center justify-between h-16">
        <a href="#top" className="flex items-center gap-2 font-mono text-sm text-ink">
          <span className="w-2.5 h-2.5 bg-signal rounded-full inline-block" />
          <span className="tracking-tight">{profile.tracking}</span>
        </a>
        <nav className="hidden md:flex items-center gap-1 font-mono text-xs uppercase tracking-widest">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-3 py-2 text-ink-mute hover:text-ink transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href={`mailto:${profile.email}`}
          className="hidden sm:inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest border border-ink px-3 py-1.5 hover:bg-ink hover:text-paper transition-colors"
        >
          Contact →
        </a>
      </div>
    </motion.header>
  );
}
