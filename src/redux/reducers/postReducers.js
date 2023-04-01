import {
  CREATE_POST,
  DELETE_POST,
  EDIT_POST,
  UPDATE_POST_LIKES,
  GET_ALL_POSTS,
  GET_ONLY_ONE_POST,
  ADD_COMMENT,
  DELETE_COMMENT,
  GET_POST_COMMENTS,
  TOGGLE_LOADING_POSTS,
  NO_POSTS,
  IS_SENDING_POSTS_REQUEST,
  GET_PROFILE_POSTS,
  RESET_ALL_POSTS,
  TOGGLE_LOADING_COMMENTS,
} from "../actions/postActions";

const initialState = {
  value: [],
  isLoading: false,
  noPosts: false,
  isSendingRequest: false,
  isLoadingComments: false,
};

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_LOADING_POSTS:
      return { ...state, isLoading: !state.isLoading, noPosts: false };
    case IS_SENDING_POSTS_REQUEST:
      return {
        ...state,
        isSendingRequest: action.payload,
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

    case UPDATE_POST_LIKES: {
      const { senderUser, originalPost } = action.payload;
      const posts = [...state.value];
      const index = posts.indexOf(originalPost);
      if (!posts[index].likes.includes(senderUser._id)) {
        posts[index].likes = [senderUser._id, ...posts[index].likes];
        posts[index].numOfLikes = posts[index].numOfLikes + 1;
      } else {
        posts[index].likes = posts[index].likes.filter(
          (liker) => liker !== senderUser._id
        );
        posts[index].numOfLikes = posts[index].numOfLikes - 1;
      }
      return { ...state, value: posts };
    }
    case TOGGLE_LOADING_COMMENTS: {
      return { ...state, isLoadingComments: action.payload };
    }
    case GET_POST_COMMENTS: {
      const posts = [...state.value];
      const index = findPostIndex(posts, action);
      posts[index].comments = action.payload.comments;
      return { ...state, value: [...posts], isLoadingComments: false };
    }

    case ADD_COMMENT:
      return handleComments(state, action, "comments", "numOfComments");

    case DELETE_COMMENT:
      return handleComments(state, action, "comments", "numOfComments");

    case GET_ONLY_ONE_POST:
      return {
        ...state,
        value: [...action.payload.post],
        isLoading: false,
      };

    case RESET_ALL_POSTS:
      return initialState;

    default:
      return state;
  }
};

const findPostIndex = (posts, action) => {
  return posts.findIndex(
    (post) => post._id === action.payload.originalPost._id
  );
};

const handleComments = (state, action, data, numOfData) => {
  const posts = [...state.value];
  const index = findPostIndex(posts, action);
  posts[index][`${data}`] = action.payload.updatedPost[`${data}`];
  posts[index][`${numOfData}`] = action.payload.updatedPost[`${numOfData}`];
  return { ...state, value: [...posts], isSendingRequest: false };
};
