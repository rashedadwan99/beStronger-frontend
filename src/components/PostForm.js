import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsTrash } from "react-icons/bs";
import { IoMdPhotos } from "react-icons/io";
import Button from "./common/button";
import { Toast } from "./common/Toast";
import RenderInputField from "./common/Forms";
import { addPost, editPostHandler } from "../redux/actions/postActions";
import "./postform.css";
function PostForm({ isEditForm, post }) {
  const [postContent, setPostContent] = useState("");
  const [picture, setPicture] = useState("");
  const isSendingRequest = useSelector((state) => state.posts.isSendingRequest);
  const substring = "https://";
  useEffect(() => {
    if (isEditForm) {
      setPostContent(post.content);
      setPicture(post.picture);
    }
  }, []);
  const dispatch = useDispatch();

  const togglePostFormFunctions = async () => {
    if (!isEditForm) {
      dispatch(addPost({ postContent, picture }));
    } else {
      dispatch(editPostHandler(post, { postContent, picture }));
    }
  };

  const handleClickPost = async () => {
    const contentPattern = "^[a-zA-Z0-9]+|[\u0621-\u064A]+";
    const regex = new RegExp(contentPattern);
    const isValidContent = regex.test(postContent);
    if (!isValidContent && !picture) {
      Toast("info", "write at least one character or upload a photo");
      return;
    }

    togglePostFormFunctions();
  };

  const handleHowImageName = () => {
    console.log(URL.createObjectURL(picture));
    return (
      <>
        <img src={URL.createObjectURL(picture)} />
        <BsTrash onClick={() => setPicture("")} />
      </>
    );
  };

  const handleShowImageElement = () => {
    return (
      typeof picture === "string" &&
      picture.length > 0 && (
        <div className="post-form-image-container">
          <div className="image-delete-icon">
            <img src={picture} alt="post photo" />
            <BsTrash onClick={() => setPicture("")} />
          </div>
        </div>
      )
    );
  };

  return (
    <div className="post-form-container">
      <form>
        <RenderInputField
          element="textarea"
          data={postContent}
          setData={setPostContent}
          name="post-content"
          value={postContent}
          postPicture={picture}
        />
        {isEditForm && handleShowImageElement()}
        {picture && !isEditForm && (
          <div className="picture-name-container">{handleHowImageName()}</div>
        )}

        <div className="post-form-footer">
          <div className="post-form-footer-right-section">
            <div className="upload-photo">
              <RenderInputField
                type="file"
                name="upload-photo"
                data={picture}
                setData={setPicture}
                accept={"image/png, image/jpeg, image/jpg"}
              />
              <Button label={<IoMdPhotos />} />
            </div>
            <Button
              label="Post"
              onClick={handleClickPost}
              isLoading={isSendingRequest}
              disabled={isSendingRequest}
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default PostForm;
