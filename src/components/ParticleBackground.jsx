import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticleBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log("Initializing particles...");
    await loadSlim(engine);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        right: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
      }}
    >
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          particles: {
            number: { value: 80, density: { enable: true, value_area: 700 } },
            color: { value: "#ffc107" },
            shape: { type: "circle" },
            opacity: { value: 0.5 },
            size: { value: 4, random: true },
            move: { enable: true, speed: 2 },
            line_linked: { enable: true, distance: 150, color: "#767272" },
          },
          interactivity: {
            events: { onhover: { enable: false, mode: "repulse" } },
            modes: { repulse: { distance: 200 } },
          },
        }}
      />
    </div>
  );
};

export default ParticleBackground;
