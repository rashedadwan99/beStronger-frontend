import { rootReducer } from "../reducers";
import { offCanvasReducer } from "../reducers/offCanvasReducer";
import { OPEN_CANVAS } from "./offCanvasActions";

export const resetAllReducers = () => {
  rootReducer(undefined, {
    type: "",
  });
};
