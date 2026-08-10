import { motion } from "framer-motion";
import Barcode from "./Barcode";
import { profile } from "../data";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.15 },
  },
};


const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-20 md:pt-44 md:pb-28 paper-noise overflow-hidden">
      {/* corner registration marks, like a print sheet */}
      <div className="pointer-events-none absolute inset-6 md:inset-10 hidden md:block">
        {["top-0 left-0", "top-0 right-0", "bottom-0 left-0", "bottom-0 right-0"].map((pos) => (
          <span key={pos} className={`absolute ${pos} w-4 h-4 border-ink/40`} style={{
            borderTopWidth: pos.includes("top") ? 1.5 : 0,
            borderBottomWidth: pos.includes("bottom") ? 1.5 : 0,
            borderLeftWidth: pos.includes("left") ? 1.5 : 0,
            borderRightWidth: pos.includes("right") ? 1.5 : 0,
          }} />
        ))}
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto max-w-6xl px-5 md:px-8"
      >
        {/* <motion.div variants={item} className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-ink-mute mb-8">
          <span className="w-8 dash-line" />
          Shipping Label · No. {profile.tracking}
        </motion.div> */}

        <motion.h1
          variants={item}
          className="font-[var(--font-display)] font-semibold leading-[0.95] tracking-tight text-[13vw] sm:text-6xl md:text-7xl lg:text-8xl text-ink"
        >
          Mohammad Saifullah
          <br />
          <span className="text-amber">Ansari</span>
        </motion.h1>

        <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3">
          <span className="font-mono text-xs uppercase tracking-widest bg-ink text-paper px-3 py-1.5">
            {profile.role}
          </span>
          <span className="font-mono text-xs uppercase tracking-widest text-ink-mute">
            {profile.location}
          </span>
          <span className="font-mono text-xs uppercase tracking-widest px-2 py-1 border border-green text-green">
            Available for hire
          </span>
        </motion.div>

        <motion.p variants={item} className="mt-8 max-w-xl text-base md:text-lg text-ink/80 leading-relaxed">
          {profile.summary}
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 bg-ink text-paper font-mono text-xs uppercase tracking-widest px-5 py-3 hover:bg-signal transition-colors"
          >
            View projects →
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border border-ink text-ink font-mono text-xs uppercase tracking-widest px-5 py-3 hover:bg-ink hover:text-paper transition-colors"
          >
            Get in touch
          </a>
        </motion.div>
{/* 
        <motion.div variants={item} className="mt-16 flex items-end justify-between gap-8 waybill-border border-x-0 border-b-0 pt-6">
          <div className="flex-1">
            <Barcode seed={17} bars={64} className="h-10 w-full max-w-md" />
            <p className="mt-2 font-mono text-[10px] tracking-[0.3em] text-ink-mute">
               3+ YR FULL-STACK
            </p>
          </div>
          <div className="hidden sm:block text-right font-mono text-xs text-ink-mute">
            <p>ORIGIN: DELHI, IN</p>
            <p>DEST: YOUR TEAM</p>
          </div>
        </motion.div> */}
      </motion.div>
    </section>
  );
}
