import { useCallback } from "react";
import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";
import particlesOptions from "../config/particlesjs-config.json";

export default function ParticlesJS() {
  const height = window.innerHeight;
  const particlesInit = useCallback((main) => {
    loadFull(main);
  }, []);
  return (
    <Particles
      options={particlesOptions}
      init={particlesInit}
      width="100%"
      height={`${height}px`}
      style={{
        position: "absolute",
        zIndex: "1",
        maxWidth: "2000px",
      }}
    ></Particles>
  );
}
