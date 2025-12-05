import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      options={{
        background: {
          color: { value: "#0f172a" }, // Dark background (change if needed)
        },
        fpsLimit: 120,
        particles: {
          color: { value: "#ffffff" },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.3,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1, // Slow movement for professional look
          },
          number: {
            density: { enable: true },
            value: 80,
          },
          opacity: { value: 0.5 },
          size: { value: { min: 1, max: 3 } },
        },
      }}
      style={{
        position: "fixed", // Fixed so it covers the whole screen while you scroll
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1, // Puts it BEHIND your content
      }}
    />
  );
};

export default ParticlesBackground;