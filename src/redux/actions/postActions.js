import { Toast } from "../../components/common/Toast";
import {
  deletePost,
  editPost,
  getOnePost,
  onClickDisLike,
  onClickLike,
  getPostComments,
  getPosts,
  createPost,
  getPostFans,
  getUserPosts,
} from "../../services/postService";
import { uploadPicture } from "../../services/uploadPictureService";
import { closeModal, CLOSE_MODAL } from "./modalActions";
import $ from "jquery";
import {
  deleteNotificationByTargetId,
  sendNotificationAction,
} from "./notificationsActions";
import { deleteNotification } from "../../services/notificiationServices";

export const CREATE_POST = "CREATE_POST";
export const GET_ALL_POSTS = "GET_ALL_POSTS";
export const TOGGLE_LOADING_POSTS = "TOGGLE_LOADING_POSTS";
export const TOGGLE_LOADING_COMMENTS = "TOGGLE_LOADING_COMMENTS";
export const FETCH_ONLY_ONE_POST = "FETCH_ONLY_ONE_POST";
export const GET_ONLY_ONE_POST = "GET_ONLY_ONE_POST";
export const NO_POSTS = "NO_POSTS";
export const GET_POST_FANS = "GET_POST_FANS";
export const DELETE_POST = "DELETE_POST";
export const EDIT_POST = "EDIT_POST";
export const UPDATE_POST_LIKES = "UPDATE_POST_LIKES";
export const GET_POST_COMMENTS = "GET_POST_COMMENTS";
export const ADD_COMMENT = "ADD_COMMENT";
export const DELETE_COMMENT = "DELETE_COMMENT";
export const IS_SENDING_POSTS_REQUEST = "IS_SENDING_POSTS_REQUEST";
export const GET_PROFILE_POSTS = "GET_PROFILE_POSTS";
export const RESET_ALL_POSTS = "RESET_ALL_POSTS";

export const addPost = ({ postContent, picture }, originalPost) => {
  return async (dispatch) => {
    dispatch({ type: IS_SENDING_POSTS_REQUEST, payload: true });
    let postResponse;
    try {
      const response = await uploadPicture(picture);

      if (response === undefined) {
        postResponse = await createPost({ content: postContent, picture });
      }

      if (response) {
        postResponse = await createPost({
          content: postContent,
          picture: response.data.url,
        });
      }
      const { data: post } = postResponse;
      dispatch({ type: CREATE_POST, payload: { post } });

      $("#posts-container").animate(
        {
          scrollTop: 0,
        },
        300
      );
      dispatch({ type: CLOSE_MODAL });
      Toast("info", "the post was published successfully!");
    } catch (error) {
      dispatch({ type: IS_SENDING_POSTS_REQUEST, payload: false });
      Toast("error", error);
    }
  };
};

export const getPostsAction = () => {
  return async (dispatch) => {
    dispatch({ type: TOGGLE_LOADING_POSTS });
    dispatch({ type: NO_POSTS, payload: false });
    try {
      const { data: posts } = await getPosts();
      if (!posts.length) dispatch({ type: NO_POSTS, payload: true });
      dispatch({ type: GET_ALL_POSTS, payload: { posts } });
    } catch (error) {
      dispatch({ type: TOGGLE_LOADING_POSTS });
      Toast("error", error);
    }
  };
};

export const getOnlyOnePost = (postId) => {
  return async (dispatch) => {
    try {
      dispatch({ type: TOGGLE_LOADING_POSTS });
      const { data: post } = await getOnePost(postId);
      dispatch({ type: GET_ONLY_ONE_POST, payload: { post } });
    } catch (error) {
      dispatch({ type: TOGGLE_LOADING_POSTS });

      Toast("error", error);
    }
  };
};

export const editPostHandler = (originalPost, { postContent, picture }) => {
  return async (dispatch) => {
    dispatch({ type: IS_SENDING_POSTS_REQUEST, payload: true });
    let postResponse;
    try {
      if (originalPost.picture !== picture && picture !== "") {
        const response = await uploadPicture(picture);
        if (response) {
          postResponse = await editPost(originalPost._id, {
            content: postContent,
            picture: response.data.url,
          });
        }
      } else {
        postResponse = await editPost(originalPost._id, {
          content: postContent,
          picture,
        });
      }

      const { data: updatedPost } = postResponse;

      dispatch({
        type: EDIT_POST,
        payload: {
          originalPost,
          updatedPost,
        },
      });

      dispatch(closeModal());
      Toast("info", "the post was editted successfully!");
    } catch (error) {
      console.log(error);
      dispatch({ type: IS_SENDING_POSTS_REQUEST, payload: false });
      Toast("error", error);
    }
  };
};

export const handleDeletePost = (postId) => {
  return async (dispatch) => {
    try {
      dispatch({ type: IS_SENDING_POSTS_REQUEST, payload: true });
      const { data: post } = await deletePost(postId);
      dispatch({ type: DELETE_POST, payload: { post } });

      dispatch(deleteNotificationByTargetId(post._id));
      dispatch({ type: CLOSE_MODAL });

      Toast("info", "the post was deleted successfully!");
      dispatch({ type: IS_SENDING_POSTS_REQUEST, payload: false });
    } catch (error) {
      dispatch({ type: IS_SENDING_POSTS_REQUEST, payload: false });

      const backToOriginalPosts = true;
      dispatch({ type: DELETE_POST, payload: { backToOriginalPosts } });
      Toast("error", error);
    }
  };
};

export const likeAction = (originalPost, socket, senderUser) => {
  return async (dispatch) => {
    try {
      dispatch({ type: IS_SENDING_POSTS_REQUEST, payload: true });
      dispatch({
        type: UPDATE_POST_LIKES,
        payload: { senderUser, originalPost },
      });
      await onClickLike(originalPost._id);
      dispatch({ type: IS_SENDING_POSTS_REQUEST, payload: false });
      if (senderUser._id !== originalPost.publisher._id) {
        dispatch(
          sendNotificationAction(
            ` liked your post`,
            originalPost.publisher._id,
            originalPost._id,
            socket,
            originalPost._id,
            "",
            ""
          )
        );
      }
    } catch (error) {
      dispatch({ type: IS_SENDING_POSTS_REQUEST, payload: false });
      Toast("error", error);
    }
  };
};
export const disLikeAction = (originalPost, socket, senderUser) => {
  return async (dispatch) => {
    try {
      dispatch({ type: IS_SENDING_POSTS_REQUEST, payload: true });
      dispatch({
        type: UPDATE_POST_LIKES,
        payload: { senderUser, originalPost },
      });
      await onClickDisLike(originalPost._id);
      dispatch({ type: IS_SENDING_POSTS_REQUEST, payload: false });
    } catch (error) {
      dispatch({ type: IS_SENDING_POSTS_REQUEST, payload: false });
      Toast("error", error);
    }
    if (senderUser._id !== originalPost.publisher._id) {
      const { data: notification } = await deleteNotification(
        originalPost._id,
        "",
        "",
        originalPost._id
      );
      socket.emit(
        "delete notification",
        originalPost.publisher._id,
        notification
      );
    }
  };
};

export const getPostCommentsHandler = (originalPost) => {
  return async (dispatch) => {
    try {
      dispatch({ type: TOGGLE_LOADING_COMMENTS, payload: true });
      const { data: comments } = await getPostComments(originalPost._id);
      dispatch({
        type: GET_POST_COMMENTS,
        payload: { comments, originalPost },
      });
      dispatch({ type: TOGGLE_LOADING_COMMENTS, payload: false });
    } catch (error) {
      dispatch({ type: TOGGLE_LOADING_COMMENTS, payload: false });

      Toast("error", error);
    }
  };
};
export const getPostFansAction = (post) => {
  return async (dispatch) => {
    try {
      const { data: users } = await getPostFans(post._id);
      dispatch({ type: GET_POST_FANS, payload: users });
    } catch (error) {
      Toast("error", error);
    }
  };
};

export const getProfilePosts = (userId) => {
  return async (dispatch) => {
    try {
      dispatch({ type: RESET_ALL_POSTS });
      dispatch({ type: TOGGLE_LOADING_POSTS });
      dispatch({ type: NO_POSTS, payload: false });
      const { data: posts } = await getUserPosts(userId);
      if (!posts.length) dispatch({ type: NO_POSTS, payload: true });
      dispatch({ type: GET_PROFILE_POSTS, payload: { posts } });
    } catch (error) {
      dispatch({ type: TOGGLE_LOADING_POSTS });
      Toast("error", error);
    }
  };
};
export const resetAllPosts = () => {
  return {
    type: RESET_ALL_POSTS,
  };
};
