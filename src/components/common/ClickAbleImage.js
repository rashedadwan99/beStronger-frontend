import React from "react";
import { useDispatch } from "react-redux";
import { openModal } from "../../redux/actions/modalActions";
import ShowImageInModal from "../ShowImageInModal";

function ClickAbleImage({ src, alt, id }) {
  const dispatch = useDispatch();
  const openImageModal = () => {
    dispatch(
      openModal({
        title: alt,
        Component: <ShowImageInModal src={src} alt={alt} />,
      })
    );
  };
  return (
    <img
      src={src}
      alt={alt}
      onClick={openImageModal}
      id={id ?? ""}
      style={{ cursor: "pointer" }}
    />
  );
}

export default ClickAbleImage;
