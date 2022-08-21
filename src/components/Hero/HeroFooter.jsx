import gsap from "gsap";
import React from "react";
import { useEffect } from "react";
import { useRef } from "react";

function HeroFooter() {
  const eleRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: eleRef.current,
        start: "top top",
        scrub: true,
      },
    });
    tl.to(
      ".hero-container",
      {
        backgroundColor: "white",
        duration: 0.25,
      },
      `-=2`
    );
  }, []);

  return (
    <div ref={eleRef} className="hero-text-section">
      <h1 id="hero">Visual stories that feel like yours, because they are.</h1>
    </div>
  );
}

export default HeroFooter;
