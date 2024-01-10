import React, { useEffect, useRef } from "react";
import NET from "vanta/src/vanta.net";

const VantaBackground = () => {
  useEffect(() => {
    NET({
      el: "#vanta",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 500.0,
      minWidth: 500.0,
      scale: 1.0,
      scaleMobile: 1.0,
      color: 0x570710,
      backgroundColor: 0x0,
      points: 15.0,
      maxDistance: 30.0,
    });
  }, []);

  return (
    <div className="vanta">
      <div id="vanta"></div>
    </div>
  );
};

export default VantaBackground;
