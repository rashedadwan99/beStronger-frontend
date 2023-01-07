import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { imageUrl } from "../utils/image";

function ControlledCarousel({ CarouselData }) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {CarouselData.map((data, index) => {
        return (
          <Carousel.Item key={data.profileUser._id}>
            <img
              className="d-block w-100"
              src={imageUrl(data.profileUser.profileImage)}
              alt={`${data.profileUser.name} slide`}
            />
            <Carousel.Caption>
              <h3>{data.profileUser.name}</h3>
              {/* <p>{data.profileUser.bio}</p> */}
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}
export default ControlledCarousel;
