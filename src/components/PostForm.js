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
    if (picture) {
      togglePostFormFunctions();
      return;
    } else if (!isValidContent) {
      Toast("info", "write at least one character or upload a photo");
      return;
    }

    togglePostFormFunctions();
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

        {picture && (
          <div className="picture-name-container">
            <div className="image-delete-icon">
              <img
                src={picture.type ? URL.createObjectURL(picture) : picture}
              />
              <BsTrash onClick={() => setPicture("")} />
            </div>
          </div>
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
