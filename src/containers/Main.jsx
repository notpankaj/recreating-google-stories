import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React from "react";
import FeatureSlides from "../components/FeatureSlides";
import Hero from "../components/Hero/Index";

function Main() {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  React.useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);
  return loading ? (
    <div className="loader" />
  ) : (
    <div>
      <Hero />
      <FeatureSlides />
      <div className="footer">Build your ideal story today.</div>
    </div>
  );
}

export default Main;
