import { motion } from "framer-motion";
import { shipments } from "../data";

const dot = {
  green: "bg-green",
  amber: "bg-amber",
};
const textColor = {
  green: "text-green",
  amber: "text-amber",
};

export default function Shipments() {
  return (
    <section id="projects" className="py-24 md:py-32 border-t-[1.5px] border-ink">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-14 max-w-xl"
        >
          <span className="font-mono text-xs uppercase tracking-widest text-amber">04 / Projects</span>
          <h2 className="mt-4 font-[var(--font-display)] text-3xl md:text-4xl font-semibold leading-tight">
            Projects
          </h2>
          <p className="mt-4 text-ink/70 leading-relaxed">
            Two packages, built MERN-stack end to end. Track each one below.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {shipments.map((s, i) => (
            <motion.article
              key={s.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.12 }}
              whileHover={{ y: -6 }}
              className="waybill-border bg-paper flex flex-col perforated"
            >
              <div className="flex items-center justify-between px-6 pt-6 font-mono text-xs uppercase tracking-widest text-ink-mute">
                <span>{s.id}</span>
                <span className="flex items-center gap-1.5">
                  <span className={`w-1.5 h-1.5 rounded-full ${dot[s.statusColor]} animate-pulse`} />
                  <span className={textColor[s.statusColor]}>{s.status}</span>
                </span>
              </div>

              <div className="px-6 pt-4">
                <h3 className="font-[var(--font-display)] text-2xl font-semibold text-ink">{s.name}</h3>
                <p className="mt-1 font-mono text-sm text-amber">{s.tagline}</p>
                <p className="mt-4 text-ink/75 leading-relaxed">{s.detail}</p>
              </div>

              <div className="mt-auto px-6 py-5 dash-line mx-6 mt-6 flex flex-wrap gap-2">
                {s.tools.map((t) => (
                  <span key={t} className="font-mono text-[11px] uppercase tracking-wider px-2 py-1 border border-ink/25 text-ink-mute">
                    {t}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
