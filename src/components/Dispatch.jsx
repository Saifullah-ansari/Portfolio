import { motion } from "framer-motion";
import { contact } from "../data";
import Barcode from "./Barcode";

const links = [
  { label: "Email", value: contact.email, href: `mailto:${contact.email}` },
  { label: "Phone", value: contact.phone, href: `tel:${contact.phone.replace(/\s/g, "")}` },
  // { label: "LinkedIn", value: "/in/saifullah-ansari", href: contact.linkedin },
  { label: "GitHub", value: "https://github.com/Saifullah-ansari", href: contact.github },
];

export default function Dispatch() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-xl"
        >
          <span className="font-mono text-xs uppercase tracking-widest text-amber">05 / Contact</span>
          <h2 className="mt-4 font-[var(--font-display)] text-3xl md:text-5xl font-semibold leading-tight">
            Let's work together
          </h2>
          <p className="mt-4 text-paper/70 leading-relaxed">
            Whatever you're building — a dashboard, a marketplace, a tracking system — I'll help get it out the door. Reach out and I'll get back within a day.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="mt-14 border border-paper/25"
        >
          <div className="grid sm:grid-cols-2">
            {links.map((l, i) => (
              <a
                key={l.label}
                href={l.href}
                target={l.label.match(/LinkedIn|GitHub/) ? "_blank" : undefined}
                rel="noreferrer"
                className={`group flex items-center justify-between px-6 py-5 border-paper/25 hover:bg-paper/5 transition-colors ${
                  i % 2 === 0 ? "sm:border-r" : ""
                } ${i < links.length - 2 ? "border-b" : ""}`}
              >
                <span>
                  <span className="block font-mono text-[10px] uppercase tracking-widest text-paper/50">
                    {l.label}
                  </span>
                  <span className="block mt-1 font-[var(--font-display)] text-lg">{l.value}</span>
                </span>
                <span className="font-mono text-amber opacity-0 group-hover:opacity-100 transition-opacity">
                  →
                </span>
              </a>
            ))}
          </div>
        </motion.div>

        <div className="mt-16 flex flex-col sm:flex-row sm:items-end justify-between gap-8 border-t border-paper/20 pt-8">
          {/* <div>
            <Barcode seed={91} bars={40} className="h-8 w-56" color="var(--color-paper)" />
            <p className="mt-2 font-mono text-[10px] tracking-[0.3em] text-paper/40">
              PROOF OF DELIVERY · {contact.location.toUpperCase()}
            </p>
          </div> */}
          <p className="font-mono text-xs text-paper/40">
            © {new Date().getFullYear()} Mohammad Saifullah Ansari. Built with React &amp; Framer Motion.
          </p>
        </div>
      </div>
    </section>
  );
}
