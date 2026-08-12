import { motion } from "framer-motion";
import { profile } from "../data";

const fields = [
  { label: "Role", value: profile.role },
  { label: "Based in", value: profile.location },
  { label: "Experience", value: profile.experience },
  { label: "Core stack", value: profile.coreTech },
];

export default function Manifest() {
  return (
    <section id="about" className="py-24 md:py-32 border-t-[1.5px] border-ink">
      <div className="mx-auto max-w-6xl px-5 md:px-8 grid md:grid-cols-12 gap-10 md:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="md:col-span-4"
        >
          <span className="font-mono text-xs uppercase tracking-widest text-amber">01 / About</span>
          <h2 className="mt-4 font-[var(--font-display)] text-3xl md:text-4xl font-semibold leading-tight">
            About me
          </h2>
          <p className="mt-4 text-ink/70 leading-relaxed">
            Here's a straightforward look at what I do.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="md:col-span-8 waybill-border p-6 md:p-10 bg-paper-dim/60"
        >
          <p className="text-lg md:text-xl leading-relaxed text-ink">
            {profile.summary2}
          </p>

          <div className="mt-8 grid sm:grid-cols-2 gap-x-8 gap-y-5 dash-line pt-6">
            {fields.map((f) => (
              <div key={f.label} className="font-mono text-sm">
                <span className="block text-ink-mute uppercase tracking-wider text-xs mb-1">{f.label}</span>
                <span className="block text-ink">{f.value}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}