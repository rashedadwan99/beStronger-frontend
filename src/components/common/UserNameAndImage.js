import React from "react";
import UserInfo from "../NameProfileImage";
import ThreeDotsOption from "../ThreeDotsOption";
import "./user-name-image.css";

function UserNameAndImage({
  data,
  publisher,
  options,
  showDots,
  message,
  setDisableParentHandler,
}) {
  const onMouseEnter = () => {
    setDisableParentHandler && setDisableParentHandler(true);
  };
  const onMouseLeave = () => {
    setDisableParentHandler && setDisableParentHandler(false);
  };

  return (
    <div className="publiser-info">
      <UserInfo
        publisher={publisher}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        message={message}
        data={data}
      />
      {showDots && (
        <ThreeDotsOption
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          options={options}
          data={data}
        />
      )}
    </div>
  );
}

export default UserNameAndImage;
