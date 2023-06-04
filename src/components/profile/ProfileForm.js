import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editUserInfoAction } from "../../redux/actions/userActions";
import ButtonsGroup from "../common/button";
import RenderInputField from "../common/Forms";
import ProfileImage from "../common/ProfileImage";
import "./profileform.css";
function ProfileForm() {
  const user = useSelector((state) => state.user.value);
  const dispatch = useDispatch();
  const [name, setName] = useState(user.name);
  const [picture, setPicture] = useState(user.picture);
  const saveProfileInfo = () => {
    dispatch(editUserInfoAction(name, picture, user));
  };

  const isSendingRequest = useSelector((state) => state.user.isSendingRequest);
  return (
    <div className="profile-form">
      <>
        <ProfileImage>
          <img src={user.picture} alt={`${user.name}'s photo`} />
        </ProfileImage>
        <form>
          <RenderInputField
            label="change profile picture"
            placeholder="picture"
            setData={setPicture}
            type="file"
            data={picture}
            name="picture"
            accept="image/*"
          />
          <RenderInputField
            placeholder="name"
            setData={setName}
            type="text"
            data={name}
            value={name}
            name="name"
          />
          <ButtonsGroup
            label="save"
            onClick={saveProfileInfo}
            disabled={isSendingRequest}
            isLoading={isSendingRequest}
          />
        </form>
      </>
    </div>
  );
}

export default ProfileForm;
