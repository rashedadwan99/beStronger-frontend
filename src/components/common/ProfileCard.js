import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouteMatch } from "react-router-dom";
import { getProfileCardUser } from "../../redux/actions/ProfileCardActions";
import ProfileCardBottom from "../profile/ProfileCardBottom";
import ProfileCardMiddle from "../profile/ProfileCardMiddle";
import ProfileCardTop from "../profile/ProfileCardTop";
import ProfileCardSkeleton from "../skeleton/ProfileCardSkeleton";
import "./profilecard.css";
function ProfileCard() {
  const user = useSelector((state) => state.user.value);
  const isLoading = useSelector((state) => state.profileCardUser.isLoading);
  const dispatch = useDispatch();
  const { params } = useRouteMatch();
  useEffect(() => {
    if (params.userId && params.userId !== user._id) {
      dispatch(getProfileCardUser({ _id: params.userId }));
    } else {
      dispatch(getProfileCardUser(user));
    }
  }, [params.userId]);
  return !isLoading ? (
    <div className="profile-card">
      <ProfileCardTop />
      <ProfileCardMiddle />
      <ProfileCardBottom />
    </div>
  ) : (
    <ProfileCardSkeleton />
  );
}

export default ProfileCard;
