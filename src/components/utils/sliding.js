export const GO_FORWARD = "GO_FORWARD";
export const GO_BACK = "GO_BACK";

export const goForward = ({
  index,
  setActiveSlides,
  activeSlides,
  slides,
  indexOfSlide,
  setGoNextSlide,
  goNextSlide,
}) => {
  if (index >= 0) {
    setActiveSlides([...activeSlides, slides[index]]);
  }
  if (!activeSlides.includes(slides[indexOfSlide + 1]) && index < 0) {
    setActiveSlides([...activeSlides, slides[indexOfSlide + 1]]);
  }

  setGoNextSlide(!goNextSlide);
};

export const goBack = ({
  index,
  slides,
  setActiveSlides,
  activeSlides,
  indexOfSlide,
  goPreviousSlide,
  setGoPreviousSlide,
}) => {
  if (index >= 0) {
    setActiveSlides([slides[index], activeSlides[activeSlides.length - 1]]);
  }
  if (!activeSlides.includes(slides[indexOfSlide - 1]) && index < 0) {
    setActiveSlides([slides[slides.length - 1], ...activeSlides]);
  }
  setGoPreviousSlide(!goPreviousSlide);
};

export const initalSlidingCaseHandller = ({
  setClassName,
  activeSlideslength,
  slide,
  activeSlides,
}) => {
  if (slide === activeSlides[activeSlideslength - 1]) {
    setClassName("slide-data");
  } else {
    setClassName("other-slides-data");
  }
};

export const slidingRight = ({
  activeSlides,
  setActiveSlides,
  slides,
  setClassName,
  slide,
  allSlidesLength,
  activeSlideslength,
}) => {
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
};

export const slidingLeft = ({
  activeSlides,
  setActiveSlides,
  slides,
  setClassName,
  slide,
  allSlidesLength,
  activeSlideslength,
}) => {
  if (
    activeSlides[0] === slides[allSlidesLength - 1] &&
    activeSlideslength === 2
  ) {
    if (activeSlides[activeSlideslength - 1] === slide)
      setClassName("slide-data slide-to-left");
    if (slides[allSlidesLength - 1] === slide) setClassName("slide-from-right");
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
      ...activeSlides.filter((s) => activeSlides[activeSlideslength - 1] !== s),
    ]);
  }
};
