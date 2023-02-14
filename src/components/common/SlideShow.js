import React, { useEffect, useState } from "react";
import { useRef } from "react";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import SlideShowBody from "../SlideShowBody";
import { goBack, goForward } from "../utils/sliding";
import OptionsList from "./OptionsList";
import "./slide-show.css";
function SlideShow({ slides, stopSlidingWhenHover }) {
  const [activeSlides, setActiveSlides] = useState([slides[0]]);
  const [goNextSlide, setGoNextSlide] = useState(false);
  const [goPreviousSlide, setGoPreviousSlide] = useState(false);
  const [stopSlidingSliding, setStopSliding] = useState(stopSlidingWhenHover);
  const indexOfSlide = slides.indexOf(activeSlides[activeSlides.length - 1]);
  const i = useRef();
  useEffect(() => {
    i.current = setInterval(
      () => {
        forwardHandler(-1);
      },

      5000
    );
    return () => clearInterval(i.current);
  });

  const forwardHandler = (index) => {
    goForward({
      index,
      setActiveSlides,
      activeSlides,
      slides,
      setGoNextSlide,
      goNextSlide,
      indexOfSlide,
    });
  };
  const backHandler = (index) => {
    goBack({
      index,
      slides,
      setActiveSlides,
      activeSlides,
      indexOfSlide,
      goPreviousSlide,
      setGoPreviousSlide,
    });
  };

  const handleSlidingWithIndex = (index) => {
    if (indexOfSlide < index) {
      forwardHandler(index);
    }
    if (indexOfSlide > index) {
      backHandler(index);
    } else {
      return;
    }
  };
  const options = slides.map((s, index) => {
    return {
      label: s.title,
      onClick: () => {
        handleSlidingWithIndex(index);
      },
    };
  });
  const handleStopSliding = () => {
    if (!stopSlidingWhenHover) return;
  };
  return (
    <div className="slide-show">
      <div className="background" />
      <MdOutlineArrowBackIos
        className="back-icon"
        onClick={() => backHandler(-1)}
      />
      <div className="slide-container" onMouseEnter={handleStopSliding}>
        {slides.map((slide, index) => {
          return (
            <SlideShowBody
              slide={slide}
              index={index}
              activeSlides={activeSlides}
              goNextSlide={goNextSlide}
              key={index}
              slides={slides}
              setActiveSlides={setActiveSlides}
              goPreviousSlide={goPreviousSlide}
            />
          );
        })}
      </div>
      <div className="slide-show-bottom">
        <OptionsList options={options} indexOfActive={indexOfSlide} />
      </div>
      <MdOutlineArrowForwardIos
        className="forward-icon"
        onClick={() => forwardHandler(-1)}
      />
    </div>
  );
}

export default SlideShow;
