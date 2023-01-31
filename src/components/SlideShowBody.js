import React, { useState } from "react";
import { useEffect } from "react";

function SlideShowBody({
  slide,
  index,
  activeSlides,
  goNextSlide,
  slides,
  setActiveSlides,
  goPreviousSlide,
}) {
  const [className, setClassName] = useState("slide-data");
  const activeSlideslength = activeSlides.length;
  const allSlidesLength = slides.length;
  useEffect(() => {
    if (slide === activeSlides[activeSlideslength - 1]) {
      setClassName("slide-data");
    } else {
      setClassName("other-slides-data");
    }
  }, []);
  useEffect(() => {
    if (activeSlideslength > 1 && activeSlideslength <= allSlidesLength) {
      if (activeSlides[activeSlideslength - 2] === slide)
        setClassName("slide-data slide-to-left");
      if (activeSlides[activeSlideslength - 1] === slide)
        setClassName("slide-from-right");
      const indexOfFirstActiveSlide = slides.indexOf(
        activeSlides[activeSlideslength - 2]
      );
      const indexOfLastActiveSlide = slides.indexOf(
        activeSlides[activeSlideslength - 1]
      );
      if (indexOfLastActiveSlide - indexOfFirstActiveSlide > 1) {
        setActiveSlides([
          ...slides.filter((s, i) => i <= indexOfLastActiveSlide),
        ]);
      }
      return;
    }
    if (!slides[activeSlideslength]) {
      if (activeSlides[allSlidesLength - 1] === slide) {
        setClassName("slide-data slide-to-right");
      } else if (activeSlides[0] === slide) setClassName("slide-from-left");
      else setClassName("other-slides-data");
      setActiveSlides([slides[0]]);
    }
  }, [goNextSlide]);

  useEffect(() => {
    if (
      activeSlides[0] === slides[allSlidesLength - 1] &&
      activeSlideslength === 2
    ) {
      if (activeSlides[activeSlideslength - 1] === slide)
        setClassName("slide-data slide-to-left");
      if (slides[allSlidesLength - 1] === slide)
        setClassName("slide-from-right");
      setActiveSlides(slides);
    } else if (
      (activeSlideslength > 1 || activeSlideslength === allSlidesLength) &&
      activeSlides[activeSlideslength - 2]
    ) {
      if (activeSlides[activeSlideslength - 2] === slide)
        setClassName("slide-from-left");
      if (activeSlides[activeSlideslength - 1] === slide)
        setClassName("slide-data slide-to-right");
      setActiveSlides([
        ...activeSlides.filter(
          (s) => activeSlides[activeSlideslength - 1] !== s
        ),
      ]);
    }
  }, [goPreviousSlide]);
  const { title, description } = slide;

  return (
    <div className={className} key={index}>
      <div className="slide-image"></div>
      <div className="slide-body">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default SlideShowBody;
