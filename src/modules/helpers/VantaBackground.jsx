import React, { useEffect, useRef } from "react";
import NET from "vanta/src/vanta.net";

const VantaBackground = () => {
  useEffect(() => {
    NET({
      el: "#vanta",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 300.0,
      minWidth: 300.0,
      scale: 1.0,
      scaleMobile: 1.0,
      color: 0x570710,
      backgroundColor: 0x0,
      points: 15.0,
      maxDistance: 30.0,
    });
  }, []);

  return (
    <div className="vanta-container">
      <div id="vanta" className="vanta-background">
        <div className="vanta-blur"></div>
      </div>
      <div className="vanta-content">
        <h1>¡Hola mundo! </h1>
        <p>En este lugar, te quiero mostrar una parte de mí.</p>
      </div>
    </div>
  );
};

export default VantaBackground;
