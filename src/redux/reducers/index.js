import { combineReducers } from "redux";
import { offCanvasReducer } from "./offCanvasReducer";
import { modalReducer } from "./modalReducers";
import { nameOfUserReduser } from "./cureentUserName";
import { postsReducer } from "./postReducers";
import { usersReducers } from "./userReducers";
import { appUseEffectDependencyReducder } from "./appUseEffectDependencyReducer";
import { ProfilCardReucers } from "./ProfileCardReducers";
import { socketReducers } from "./socketReducers";
import { notificationsReducers } from "./notificationsReducers";

export const rootReducer = combineReducers({
  // Define a top-level state field named `todos`, handled by `todosReducer`
  canvas: offCanvasReducer,
  modal: modalReducer,
  posts: postsReducer,

  currentName: nameOfUserReduser,
  user: usersReducers,
  appUseEffectDependency: appUseEffectDependencyReducder,
  profileCardUser: ProfilCardReucers,
  socket: socketReducers,
  notifications: notificationsReducers,
});
