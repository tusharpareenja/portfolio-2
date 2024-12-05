'use client'

import React, { useEffect, useState } from "react";
import Spline from '@splinetool/react-spline';

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full h-screen object-contain md:flex hidden"
      >
        <Spline
          scene="https://prod.spline.design/ZB8MTVDHoD4KBork/scene.splinecode"
          className="w-full h-fit object-contain"
        />
      </div>
    </div>
  );
};

export default ComputersCanvas;

