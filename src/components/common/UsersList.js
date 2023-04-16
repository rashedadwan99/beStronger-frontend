import React from "react";
import ProfileImage from "./ProfileImage";
import FollowUnfollowButton from "./followUnfollowBtn";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { closeOffCanvas } from "../../redux/actions/offCanvasActions";
import { closeModal } from "../../redux/actions/modalActions";
import routes from "../../config/routes.json";
import "./userlist.css";
function UsersList({ users, showEmail, clickOnContainer }) {
  const history = useHistory();
  const currentUserId = useSelector((state) => state.user.value._id);
  const isCanvasShowed = useSelector((state) => state.canvas.show);
  const isModalShowed = useSelector((state) => state.modal.show);
  const dispatch = useDispatch();
  const handleClick = (user) => {
    const anotherProfileRoute = `/profile/${user._id}`;
    const myProfileRoute = routes["profile-route"];
    if (isCanvasShowed) dispatch(closeOffCanvas());
    if (isModalShowed) dispatch(closeModal());
    if (currentUserId !== user._id) history.push(anotherProfileRoute);
    else history.push(myProfileRoute);
  };

  return users.map((user) => {
    return (
      <div
        className="user-container"
        key={user._id}
        onClick={() => clickOnContainer && handleClick(user)}
      >
        <div
          className="user-picture-name"
          onClick={() => !clickOnContainer && handleClick(user)}
        >
          <ProfileImage>
            <img src={user.picture} alt={`${user.name}'s picture`} />
          </ProfileImage>
          <div className="user-name-email">
            <span>{currentUserId === user._id ? "you" : user.name}</span>

            {showEmail && <span className="user-email">{user.email}</span>}
          </div>
        </div>

        {user.followingList && user._id !== currentUserId && (
          <FollowUnfollowButton user={user} isUserListButton={true} />
        )}
      </div>
    );
  });
}

export default UsersList;
