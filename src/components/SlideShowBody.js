import React, { useState } from "react";
import { useEffect } from "react";
import {
  initalSlidingCaseHandller,
  slidingLeft,
  slidingRight,
} from "./utils/sliding";

function SlideShowBody({
  slide,
  index,
  activeSlides,
  goNextSlide,
  slides,
  setActiveSlides,
  goPreviousSlide,
}) {
  const [className, setClassName] = useState("other-slides-data");
  const activeSlideslength = activeSlides.length;
  const allSlidesLength = slides.length;
  const slidingArgs = {
    activeSlides,
    setActiveSlides,
    slide,
    allSlidesLength,
    activeSlideslength,
    slides,
    setClassName,
  };
  useEffect(() => {
    initalSlidingCaseHandller({
      setClassName,
      activeSlides,
      slide,
      activeSlideslength,
    });
  }, []);
  useEffect(() => {
    slidingRight(slidingArgs);
  }, [goNextSlide]);

  useEffect(() => {
    slidingLeft(slidingArgs);
  }, [goPreviousSlide]);
  const { title, description, component, picture } = slide;

  return (
    <>
      <div className={className} key={index}>
        {picture && (
          <div className="slide-image">
            <img src={picture} alt="" />
          </div>
        )}
        <div className="slide-body">
          <div className="slide-description">
            <h1>{title}</h1>
            <h4>{description}</h4>
            {component}
          </div>
        </div>
      </div>
    </>
  );
}

export default SlideShowBody;
