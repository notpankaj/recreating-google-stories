import React, { useRef } from "react";
import { useEffect } from "react";
import useOnScreen from "../../hooks/useOnScreen";

function FeatureSlide({ title, description, index, updateActiveImage }) {
  const eleRef = useRef(null);
  const onScreen = useOnScreen(eleRef);

  useEffect(() => {
    if (onScreen) {
      updateActiveImage(index);
    }
  }, [onScreen, index]);
  return (
    <div className="feature-slide" ref={eleRef}>
      <h3 className="feature-slide-title">{title}</h3>
      <p className="feature-slide-description">{description}</p>
    </div>
  );
}

export default FeatureSlide;
