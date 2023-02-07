import React from "react";
import SlideShow from "../components/common/SlideShow";

import { slides } from "../landingPageSlides";
import "./landing-page.css";
function LandingPage() {
  return (
    <div className="landing-page">
      <SlideShow slides={slides} stopSlidingWhenHover={true} />
    </div>
  );
}

export default LandingPage;
