import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../redux/actions/modalActions";
import ProfileImage from "./common/ProfileImage";
import PostForm from "./PostForm";

function PostInput() {
  const user = useSelector((state) => state.user.value);
  const dispatch = useDispatch();
  const handleClickPostInput = () => {
    dispatch(
      openModal({
        title: "share a post",
        Component: <PostForm />,
      })
    );
  };
  return (
    <div className="post-creation-section-top" onClick={handleClickPostInput}>
      <div className="profile-image">
        <ProfileImage>
          <img src={user.picture} alt={`${user.name}'s picture`} />
        </ProfileImage>
      </div>
      <div className="share-your-experince">share your experience</div>
    </div>
  );
}

export default PostInput;
