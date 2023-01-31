import React from "react";
import SlideShow from "../components/common/SlideShow";
import "./landing-page.css";
function LandingPage() {
  const slides = [
    { title: "first slide", description: "silawy" },
    { title: "second slide", description: "adwani" },
    { title: "third slide", description: "nasrawi" },
    { title: "fourth slide", description: "sharkasi" },
  ];
  return (
    <div className="landing-page">
      <SlideShow slides={slides} stopSlidingWhenHover={true} />
    </div>
  );
}

export default LandingPage;
