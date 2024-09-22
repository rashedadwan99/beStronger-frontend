import { Toast } from "../../components/common/Toast";
import {
  addComment,
  deleteComment,
  getComments,
} from "../../services/commentService";
import { deleteNotification } from "../../services/notificiationServices";
import { sendNotificationAction } from "./notificationsActions";

export const GET_COMMENTS = "GET_COMMENTS";
export const ADD_COMMENT = "ADD_COMMENT";
export const DELETE_COMMENT = "DELETE_COMMENT";
export const IS_LOADING_COMMENTS = "IS_LOADING_COMMENTS";
export const IS_SENDING_COMMENT_REQUEST = "IS_SENDING_COMMENT_REQUEST";
export const RESET_COMMENTS = "RESET_COMMENTS";
export const getCommentsAction = (postId) => {
  return async (dispatch) => {
    try {
      dispatch({ type: IS_LOADING_COMMENTS, payload: true });
      const { data: comments } = await getComments(postId);
      dispatch({ type: GET_COMMENTS, payload: comments });
      dispatch({ type: IS_LOADING_COMMENTS, payload: false });
    } catch (error) {
      dispatch({ type: IS_LOADING_COMMENTS, payload: false });
      Toast("error", error);
    }
  };
};

export const addCommentAction = (post, content, socket, user) => {
  return async (dispatch) => {
    try {
      dispatch({ type: IS_SENDING_COMMENT_REQUEST, payload: true });
      const { data: comment } = await addComment(post._id, content);
      if (post.publisher._id !== user._id) {
        dispatch(
          sendNotificationAction(
            ` commented on your post`,
            post.publisher._id,
            post._id,
            socket,
            post._id,
            comment._id,
            ""
          )
        );
      }
      dispatch({ type: ADD_COMMENT, payload: comment });
      dispatch({ type: IS_SENDING_COMMENT_REQUEST, payload: false });
      Toast("info", "the comment was added successfully");
    } catch (error) {
      dispatch({ type: IS_SENDING_COMMENT_REQUEST, payload: false });
      Toast("error", error);
    }
  };
};

export const deleteCommentAction = (post, commentId = "", socket) => {
  return async (dispatch) => {
    try {
      await deleteComment(commentId);
      const { data: notification } = await deleteNotification(
        commentId,
        "",
        post._id
      );
      dispatch({ type: DELETE_COMMENT, payload: { commentId } });
      if (post.publisher._id !== user._id) {
        socket.emit("delete notification", post.publisher._id, notification);
      }
      Toast("info", "the comment was deleted successfully");
    } catch (error) {
      Toast("error", error);
    }
  };
};

export const resetCommentsAction = () => {
  return { type: RESET_COMMENTS };
};
