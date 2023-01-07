import {
  CREATE_POST,
  DELETE_POST,
  EDIT_POST,
  UPDATE_POST_LIKES,
  GET_ALL_POSTS,
  GET_ONLY_ONE_POST,
  ADD_COMMENT,
  DELETE_COMMENT,
  FETCH_ONLY_ONE_POST,
  GET_POST_COMMENTS,
  TOGGLE_LOADING_POSTS,
  NO_POSTS,
  IS_SENDING_REQUEST,
  GET_PROFILE_POSTS,
} from "../actions/postActions";

const initialState = {
  value: [],
  isLoading: false,
  noPosts: false,
  isSendingRequest: false,
};

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_LOADING_POSTS:
      return { ...state, isLoading: !state.isLoading, noPosts: false };
    case IS_SENDING_REQUEST:
      return {
        ...state,
        isSendingRequest: action.payload,
        noPosts: false,
      };
    case NO_POSTS:
      return { ...state, noPosts: action.payload };
    case CREATE_POST:
      return {
        ...state,
        value: [action.payload.post, ...state.value],
        isSendingRequest: false,
        noPosts: false,
      };

    case GET_ALL_POSTS: {
      return {
        ...state,
        value: [...action.payload.posts],
        isLoading: false,
      };
    }
    case GET_PROFILE_POSTS: {
      return {
        ...state,
        value: [...action.payload.posts],
        isLoading: false,
      };
    }

    case DELETE_POST: {
      const originalPosts = [...state.value];
      const posts = state.value.filter(
        (post) => post._id !== action.payload.post._id
      );
      if (!action.payload.backToOriginalPosts) {
        if (posts.length) {
          return { ...state, value: [...posts] };
        } else {
          return { ...state, value: [...posts], noPosts: true };
        }
      } else {
        return { ...state, value: [...originalPosts] };
      }
    }

    case EDIT_POST: {
      const posts = [...state.value];
      const indexOfPost = posts.indexOf(action.payload.originalPost);
      posts[indexOfPost].content = action.payload.updatedPost.content;
      posts[indexOfPost].picture = action.payload.updatedPost.picture;

      return {
        ...state,
        value: [...posts],
        isSendingRequest: false,
      };
    }

    case UPDATE_POST_LIKES:
      return handleLikesOrComments(state, action, "likes", "numOfLikes");

    case GET_POST_COMMENTS: {
      const posts = [...state.value];
      const index = findPostIndex(posts, action);
      posts[index].comments = action.payload.comments;
      return { ...state, value: [...posts] };
    }

    case ADD_COMMENT:
      return handleLikesOrComments(state, action, "comments", "numOfComments");

    case DELETE_COMMENT:
      return handleLikesOrComments(state, action, "comments", "numOfComments");

    case FETCH_ONLY_ONE_POST:
      return [];

    case GET_ONLY_ONE_POST:
      return [...state, ...action.payload.post];

    default:
      return state;
  }
};

const findPostIndex = (posts, action) => {
  return posts.findIndex(
    (post) => post._id === action.payload.originalPost._id
  );
};

const handleLikesOrComments = (state, action, data, numOfData) => {
  const posts = [...state.value];
  const index = findPostIndex(posts, action);
  posts[index][`${data}`] = action.payload.updatedPost[`${data}`];
  posts[index][`${numOfData}`] = action.payload.updatedPost[`${numOfData}`];
  return { ...state, value: [...posts], isSendingRequest: false };
};
