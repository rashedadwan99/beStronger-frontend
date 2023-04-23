import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../redux/actions/modalActions";
import ShowImageInModal from "../ShowImageInModal";

function ClickAbleImage({ src, alt, id }) {
  const showNotifications = useSelector((state) => state.notifications.show);
  const dispatch = useDispatch();
  const openImageModal = () => {
    if (showNotifications) return;
    dispatch(
      openModal({
        title: alt,
        Component: <ShowImageInModal src={src} alt={alt} />,
        className: "post-image-modal",
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
