import { combineReducers } from "redux";
import { offCanvasReducer } from "./offCanvasReducer";
import { modalReducer } from "./modalReducers";
import { postsReducer } from "./postReducers";
import { usersReducers } from "./userReducers";
import { appUseEffectDependencyReducder } from "./appUseEffectDependencyReducer";
import { ProfilCardReucers } from "./ProfileCardReducers";
import { socketReducers } from "./socketReducers";
import { notificationsReducers } from "./notificationsReducers";
import { commentReducers } from "./commentReducers";
import { chatReducers } from "./chatReducers";
import { messageReducers } from "./messageReducers";

export const rootReducer = combineReducers({
  // Define a top-level state field named `todos`, handled by `todosReducer`
  canvas: offCanvasReducer,
  modal: modalReducer,
  posts: postsReducer,
  comments: commentReducers,
  chats: chatReducers,
  messages: messageReducers,
  user: usersReducers,
  appUseEffectDependency: appUseEffectDependencyReducder,
  profileCardUser: ProfilCardReucers,
  socket: socketReducers,
  notifications: notificationsReducers,
});
