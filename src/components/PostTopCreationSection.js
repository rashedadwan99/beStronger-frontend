import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useRouteMatch } from "react-router-dom";
import { openModal } from "../redux/actions/modalActions";
import ProfileImage from "./common/ProfileImage";
import PostForm from "./PostForm";

function PostInput() {
  const user = useSelector((state) => state.user.value);
  const dispatch = useDispatch();
  const { path } = useRouteMatch();
  const history = useHistory();
  const handleClickPostInput = () => {
    dispatch(
      openModal({
        title: "share a post",
        Component: <PostForm />,
      })
    );
  };
  const isSinglePostShowed = path === "/posts/:postId";
  const returnToHomePage = () => {
    history.push("/posts");
  };
  return (
    <div
      className="post-creation-section-top"
      onClick={!isSinglePostShowed ? handleClickPostInput : returnToHomePage}
    >
      {!isSinglePostShowed ? (
        <>
          <div className="profile-image">
            <ProfileImage>
              <img src={user.picture} alt={`${user.name}'s picture`} />
            </ProfileImage>
          </div>
          <div className="share-your-experince">share your experience</div>
        </>
      ) : (
        <div className="return-home-page">back to all posts</div>
      )}
    </div>
  );
}

export default PostInput;
