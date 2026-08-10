import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { route, jobHighlights } from "../data";

const statusColor = {
  CLEARED: "text-ink-mute",
  CERTIFIED: "text-amber",
  DELIVERED: "text-green",
};

function RouteStop({ stop, index }) {
  const isLast = index === route.length - 1;
  return (
    <motion.div
      initial={{ opacity: 0, x: -18 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="relative pl-12 md:pl-16 pb-14 last:pb-0"
    >
      {/* node */}
      <motion.span
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.4, ease: "backOut", delay: 0.15 }}
        className="absolute left-[9px] md:left-[17px] top-1 -translate-x-1/2 w-4 h-4 rounded-full bg-paper border-[1.5px] border-ink z-10"
      />
      {!isLast && (
        <span className="absolute left-[9px] md:left-[17px] top-1 -translate-x-1/2 w-px h-full bg-paper-line" />
      )}

      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 font-mono text-xs uppercase tracking-widest mb-2">
        <span className="text-ink-mute">{stop.kind}</span>
        <span className="text-ink-mute">·</span>
        <span className="text-ink-mute">{stop.date}</span>
        <span className={`ml-auto ${statusColor[stop.status]}`}>{stop.status}</span>
      </div>

      <h3 className="font-[var(--font-display)] text-xl md:text-2xl font-semibold text-ink">
        {stop.title}
      </h3>
      <p className="mt-1 font-mono text-sm text-amber">{stop.org}</p>
      <p className="mt-3 text-ink/75 leading-relaxed max-w-2xl">{stop.detail}</p>

      {stop.id === "job" && (
        <div className="mt-6 grid sm:grid-cols-3 gap-3">
          {jobHighlights.map((h) => (
            <div key={h.title} className="waybill-border p-4 bg-paper-dim/50">
              <p className="font-[var(--font-display)] text-sm font-semibold text-ink">{h.title}</p>
              <p className="mt-1 font-mono text-[11px] text-ink-mute">{h.stack}</p>
              <p className="mt-2 text-xs text-ink/70 leading-relaxed">{h.detail}</p>
              <div className="mt-3 flex flex-wrap gap-3 dash-line pt-3">
                {h.metrics.map((m) => (
                  <div key={m.label}>
                    <p className="font-mono text-lg font-semibold text-signal leading-none">{m.value}</p>
                    <p className="font-mono text-[9px] uppercase tracking-wider text-ink-mute mt-1">{m.label}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </motion.div>
  );
}

export default function Route() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.75", "end 0.4"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 24, mass: 0.4 });

  return (
    <section id="experience" className="py-24 md:py-32 border-t-[1.5px] border-ink">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-14 max-w-xl"
        >
          <span className="font-mono text-xs uppercase tracking-widest text-amber">03 / Experience</span>
          <h2 className="mt-4 font-[var(--font-display)] text-3xl md:text-4xl font-semibold leading-tight">
            Experience & education
          </h2>
          {/* <p className="mt-4 text-ink-mute leading-relaxed">
            Every checkpoint from graduation to the last delivered release, in order.
          </p> */}
        </motion.div>

        <div ref={containerRef} className="relative">
          {/* base dashed line */}
          <div className="absolute left-[9px] md:left-[17px] top-1 bottom-0 w-px" style={{
            backgroundImage: "repeating-linear-gradient(to bottom, var(--color-paper-line) 0 6px, transparent 6px 12px)"
          }} />
          {/* animated progress line, fills as user scrolls */}
          <motion.div
            className="absolute left-[9px] md:left-[17px] top-1 w-[3px] bg-amber origin-top"
            style={{ scaleY: progress, height: "100%" }}
          />

          {route.map((stop, i) => (
            <RouteStop stop={stop} index={i} key={stop.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
