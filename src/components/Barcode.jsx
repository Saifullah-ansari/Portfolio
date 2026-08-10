import { motion } from "framer-motion";

// Deterministic pseudo-random bar widths so the barcode looks real but is stable across renders.
function barWidths(seed, count) {
  let x = seed;
  const widths = [];
  for (let i = 0; i < count; i++) {
    x = (x * 9301 + 49297) % 233280;
    const r = x / 233280;
    widths.push(1 + Math.round(r * 3));
  }
  return widths;
}

export default function Barcode({ seed = 42, bars = 46, className = "", color = "var(--color-ink)" }) {
  const widths = barWidths(seed, bars);
  let x = 0;

  return (
    <svg
      viewBox={`0 0 ${widths.reduce((a, b) => a + b + 2, 0)} 40`}
      className={className}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {widths.map((w, i) => {
        const rectX = x;
        x += w + 2;
        return (
          <motion.rect
            key={i}
            x={rectX}
            y="0"
            width={w}
            height="40"
            fill={color}
            initial={{ scaleY: 0, opacity: 0 }}
            whileInView={{ scaleY: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.012, ease: "easeOut" }}
            style={{ transformOrigin: "bottom" }}
          />
        );
      })}
    </svg>
  );
}
