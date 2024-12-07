"use client";
import { useEffect, useRef, useState } from "react";
import BIRDS from "vanta/dist/vanta.birds.min";
import * as THREE from "three";

const VantaBirdsBackground = () => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const vantaRef = useRef(null);

  useEffect(() => {
    try {
      if (!vantaEffect && vantaRef.current) {
        const effect = BIRDS({
          el: vantaRef.current,
          THREE,
          color1: "#635efa",
          color2: "#5bf3e5",
          birdSize: 1.5,
          speedLimit: 3,
          backgroundColor: "#000000",
          colorMode: "lerp",
        });
        setVantaEffect(effect);
      }
    } catch (err) {
      console.error("Vanta.js initialization error:", err);
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return <div ref={vantaRef} style={{ height: "100vh", width: "100%" }} />;
};

export default VantaBirdsBackground;
