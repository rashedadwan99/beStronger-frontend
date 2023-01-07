import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouteMatch } from "react-router-dom";
import { getProfileCardUser } from "../../redux/actions/ProfileCardActions";
import ProfileCardBottom from "../ProfileCardBottom";
import ProfileCardMiddle from "../ProfileCardMiddle";
import ProfileCardTop from "../ProfileCardTop";
import "./profilecard.css";
function ProfileCard() {
  const user = useSelector((state) => state.user.value);
  const isLoading = useSelector((state) => state.profileCardUser.isLoading);
  const dispatch = useDispatch();
  const { params } = useRouteMatch();
  useEffect(() => {
    if (params.userId) {
      dispatch(getProfileCardUser({ _id: params.userId }));
    } else {
      dispatch(getProfileCardUser(user));
    }
  }, []);
  return (
    !isLoading && (
      <div className="profile-card">
        <ProfileCardTop />
        <ProfileCardMiddle />
        <ProfileCardBottom />
      </div>
    )
  );
}

export default ProfileCard;
