import gsap from "gsap";
import React, { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { featureSlides } from "../../data";
import FeatureSlide from "./FeatureSlide";

const RenderImages = ({ activeFeatureIndex }) => {
  return featureSlides?.map((item, index) => {
    const { imageUrl } = item;
    return (
      <img
        // className={cn({ "as-primary": activeFeatureIndex === index })}
        className={activeFeatureIndex === index ? `as-primary` : ""}
        src={imageUrl}
        alt=""
        key={imageUrl}
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
    );
  });
};

function FeatureSlides() {
  const featureSliderRef = useRef(null);
  const featureSlidesRightRef = useRef(null);
  const [activeFeatureIndex, setActiveFeatureIndex] = useState(0);

  useEffect(() => {
    function stopTrigger() {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: featureSlidesRightRef.current,
          start: "top top",
          end: () => `+=${featureSliderRef.current.offsetHeight}`,
          scrub: true,
          pin: true,
        },
      });

      return tl;
    }

    const master = gsap.timeline();
    master.add(stopTrigger());
  }, []);

  return (
    <div ref={featureSliderRef} className="feature-slides-container">
      <div className="feature-slides-left">
        {featureSlides?.map((item, index) => {
          return (
            <FeatureSlide
              key={item.title}
              title={item?.title}
              description={item.description}
              index={index}
              updateActiveImage={setActiveFeatureIndex}
            />
          );
        })}
      </div>
      <div ref={featureSlidesRightRef} className="feature-slides-right">
        <RenderImages activeFeatureIndex={activeFeatureIndex} />
      </div>
    </div>
  );
}

export default FeatureSlides;
