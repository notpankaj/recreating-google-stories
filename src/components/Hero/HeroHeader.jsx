import gsap from "gsap";
import React, { useEffect } from "react";

function HeroHeader() {
  useEffect(() => {
    gsap.fromTo(
      "#hero-text",
      {
        opacity: 0,
        scale: 0.5,
      },
      { opacity: 1, delay: 0.2, scale: 1, duration: 0.5 }
    );
  }, []);
  return (
    <div id="hero-text" className="hero-text-section">
      <h1 id="hero">Stories meet their widest audience ever</h1>
    </div>
  );
}

export default HeroHeader;
