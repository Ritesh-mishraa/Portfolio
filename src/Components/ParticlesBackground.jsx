import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

const streaks = [
  { angle: -35, top: "18%", left: "-5%", width: "55%", color: "rgba(99,102,241,0.5)", blur: 42, delay: 0, duration: 9 },
  { angle: 20, top: "60%", left: "50%", width: "45%", color: "rgba(139,92,246,0.4)", blur: 36, delay: 2, duration: 11 },
  { angle: -15, top: "78%", left: "10%", width: "40%", color: "rgba(6,182,212,0.32)", blur: 30, delay: 4, duration: 10 },
  { angle: 40, top: "5%", left: "62%", width: "35%", color: "rgba(16,185,129,0.28)", blur: 28, delay: 1, duration: 13 },
];

const Spotlight = () => {
  const x = useMotionValue(50);
  const y = useMotionValue(30);
  const sx = useSpring(x, { stiffness: 18, damping: 28 });
  const sy = useSpring(y, { stiffness: 18, damping: 28 });

  useEffect(() => {
    const pts = [[50, 30], [70, 50], [38, 68], [62, 18], [28, 52], [50, 30]];
    let i = 0;
    const next = () => { x.set(pts[i % pts.length][0]); y.set(pts[i % pts.length][1]); i++; };
    next();
    const id = setInterval(next, 3800);
    return () => clearInterval(id);
  }, [x, y]);

  return (
    <motion.div
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
      }}
    >
      <motion.div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `radial-gradient(ellipse 55% 45% at ${sx}% ${sy}%, rgba(99,102,241,0.13) 0%, transparent 70%)`,
        }}
      />
    </motion.div>
  );
};


const PerspectiveGrid = () => {
  const lines = [];
  const cols = 10, rows = 8;
  for (let i = 0; i <= cols; i++) {
    lines.push(
      <line key={`v${i}`}
        x1={`${(i / cols) * 100}%`} y1="100%"
        x2={`${40 + (i / cols) * 20}%`} y2="0%"
        stroke="rgba(99,102,241,0.11)" strokeWidth="0.7"
      />
    );
  }
  for (let j = 1; j <= rows; j++) {
    const t = j / rows;
    const yp = 100 - t * 100;
    const xl = 50 - t * 50;
    lines.push(
      <line key={`h${j}`}
        x1={`${xl}%`} y1={`${yp}%`}
        x2={`${100 - xl}%`} y2={`${yp}%`}
        stroke={`rgba(99,102,241,${0.13 - t * 0.11})`} strokeWidth="0.6"
      />
    );
  }
  return (
    <motion.svg
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2.5 }}
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}
    >
      {lines}
    </motion.svg>
  );
};


const Grain = () => (
  <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.032, pointerEvents: "none" }}>
    <filter id="grain">
      <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
      <feColorMatrix type="saturate" values="0" />
    </filter>
    <rect width="100%" height="100%" filter="url(#grain)" />
  </svg>
);


const ParticlesBackground = () => (
  <div
    style={{
      position: "fixed",
      inset: 0,
      zIndex: -1,
      overflow: "hidden",
      background: "linear-gradient(160deg, #04051a 0%, #080c28 35%, #060920 65%, #020510 100%)",
    }}
  >
    <PerspectiveGrid />

    {streaks.map((s, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, scaleX: 0.5 }}
        animate={{ opacity: [0, 1, 0.7, 1, 0], scaleX: [0.5, 1, 0.85, 1, 0.5] }}
        transition={{ duration: s.duration, delay: s.delay, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          top: s.top, left: s.left,
          width: s.width,
          height: "2px",
          background: s.color,
          filter: `blur(${s.blur}px)`,
          transform: `rotate(${s.angle}deg)`,
          transformOrigin: "left center",
        }}
      />
    ))}


    <Spotlight />

    <div style={{
      position: "absolute", top: 0, left: "20%", width: "60%", height: "1px",
      background: "linear-gradient(90deg, transparent, rgba(139,92,246,0.6), rgba(99,102,241,0.6), transparent)",
    }} />
   
    <div style={{
      position: "absolute", bottom: 0, left: "20%", width: "60%", height: "1px",
      background: "linear-gradient(90deg, transparent, rgba(6,182,212,0.32), rgba(99,102,241,0.32), transparent)",
    }} />


    <div style={{
      position: "absolute", top: 0, left: 0, width: 440, height: 440,
      background: "radial-gradient(circle at top left, rgba(99,102,241,0.1) 0%, transparent 65%)",
      pointerEvents: "none",
    }} />
    <div style={{
      position: "absolute", bottom: 0, right: 0, width: 400, height: 400,
      background: "radial-gradient(circle at bottom right, rgba(6,182,212,0.08) 0%, transparent 65%)",
      pointerEvents: "none",
    }} />

    <Grain />

    <div style={{
      position: "absolute", inset: 0,
      background: "radial-gradient(ellipse 100% 100% at 50% 50%, transparent 50%, rgba(2,5,16,0.65) 100%)",
      pointerEvents: "none",
    }} />
  </div>
);

export default ParticlesBackground;