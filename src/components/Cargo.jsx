import { motion } from "framer-motion";
import { skillCrates } from "../data";

export default function Cargo() {
  return (
    <section id="skills" className="py-24 md:py-32 bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-14 max-w-xl"
        >
          <span className="font-mono text-xs uppercase tracking-widest text-amber">02 / Skills</span>
          <h2 className="mt-4 font-[var(--font-display)] text-3xl md:text-4xl font-semibold leading-tight">
            Skills
          </h2>
          {/* <p className="mt-4 text-paper/70 leading-relaxed">
            Every crate loaded onto the truck — tools I reach for daily, grouped by what they're for.
          </p> */}
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillCrates.map((crate, i) => (
            <motion.div
              key={crate.label}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="group border border-paper/25 p-5 hover:border-amber transition-colors"
            >
              <div className="flex items-center justify-between font-mono text-xs text-paper/50 mb-4">
                <span> {crate.code}</span>
                <span className="w-6 h-6 rounded-full border border-paper/30 flex items-center justify-center group-hover:border-amber group-hover:text-amber transition-colors">
                  ▸
                </span>
              </div>
              <h3 className="font-[var(--font-display)] text-lg font-medium mb-4">{crate.label}</h3>
              <div className="flex flex-wrap gap-2">
                {crate.items.map((item) => (
                  <span
                    key={item}
                    className="font-mono text-xs px-2.5 py-1 bg-paper/10 text-paper/85 group-hover:bg-amber/15 group-hover:text-amber-soft transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
