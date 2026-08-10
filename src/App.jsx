import { motion, useScroll, useSpring } from "framer-motion";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Manifest from "./components/Manifest";
import Cargo from "./components/Cargo";
import Route from "./components/Route";
import Shipments from "./components/Shipments";
import Dispatch from "./components/Dispatch";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });

  return (
    <div className="min-h-screen bg-paper text-ink font-body">
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[3px] bg-amber origin-left z-[60]"
      />
      <Header />
      <main>
        <Hero />
        <Manifest />
        <Cargo />
        <Route />
        <Shipments />
        <Dispatch />
      </main>
    </div>
  );
}
