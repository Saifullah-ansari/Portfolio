import { motion } from "framer-motion";
import { profile } from "../data";

const fields = [
  { label: "Role", value: profile.role },
  { label: "Based in", value: profile.location },
  { label: "Experience", value: "3+ years, production apps" },
  { label: "Core stack", value: "React · Node.js · Express · MySQL · Java · Spring Boot" },
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
            The contents, declared plainly — no filler, no jargon that doesn't ship code.
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
            {profile.summary}
          </p>

          <div className="mt-8 grid sm:grid-cols-2 gap-x-8 gap-y-5 dash-line pt-6">
            {fields.map((f) => (
              <div key={f.label} className="flex justify-between gap-4 font-mono text-sm">
                <span className="text-ink-mute uppercase tracking-wider">{f.label}</span>
                <span className="text-ink text-right">{f.value}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
