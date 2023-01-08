import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsTrash } from "react-icons/bs";
import Button from "./common/button";
import RenderInputField from "./common/Forms";

import { addPost, editPostHandler } from "../redux/actions/postActions";
import "./postform.css";
import { Toast } from "./common/Toast";
function PostForm({ isEditForm, post }) {
  const [postContent, setPostContent] = useState("");
  const [picture, setPicture] = useState("");
  const isSendingRequest = useSelector((state) => state.posts.isSendingRequest);

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
    if (!isValidContent) {
      Toast("info", "write at least one character");
      return;
    }

    togglePostFormFunctions();
  };

  const handleHowImageName = () => {
    return !isEditForm && picture.name ? (
      <p>
        {picture.name.length <= 15
          ? picture.name
          : picture.name.slice(0, 15) + "..."}
      </p>
    ) : (
      <p>{picture.name}</p>
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
        <div className="post-form-footer">
          <div className="post-form-footer-left-section">
            <div className="upload-photo">
              <RenderInputField
                type="file"
                name="upload-photo"
                data={picture}
                setData={setPicture}
                accept={"image/png, image/jpeg, image/jpg"}
              />
              <Button label="choose a photo" />
            </div>
          </div>
          <Button
            label="Post"
            onClick={handleClickPost}
            isLoading={isSendingRequest}
            disabled={isSendingRequest}
          />
        </div>
        {isEditForm && handleShowImageElement()}
        <div className="picture-name-container">{handleHowImageName()}</div>
      </form>
    </div>
  );
}

export default PostForm;
