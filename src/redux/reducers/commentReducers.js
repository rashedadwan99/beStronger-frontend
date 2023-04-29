import {
  ADD_COMMENT,
  DELETE_COMMENT,
  GET_COMMENTS,
  IS_LOADING_COMMENTS,
  IS_SENDING_COMMENT_REQUEST,
  RESET_COMMENTS,
} from "../actions/commentsActions";

const initialState = {
  value: [],
  isSendingCommentRequest: false,
  isLoadingComments: false,
};
export const commentReducers = (state = initialState, action) => {
  switch (action.type) {
    case IS_LOADING_COMMENTS:
      return { ...state, isLoadingComments: action.payload };
    case IS_SENDING_COMMENT_REQUEST:
      return { ...state, isSendingCommentRequest: action.payload };
    case GET_COMMENTS:
      return {
        ...state,
        value: [...action.payload],
      };
    case ADD_COMMENT:
      return {
        ...state,
        value: [...state.value, action.payload],
      };
    case DELETE_COMMENT:
      return {
        ...state,
        value: state.value.filter((c) => c._id !== action.payload.commentId),
      };
    case RESET_COMMENTS:
      return state;

    default:
      return state;
  }
};
