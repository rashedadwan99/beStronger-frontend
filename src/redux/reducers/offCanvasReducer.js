import { OPEN_CANVAS, CLOSE_CANVAS } from "../actions/offCanvasActions";
const initialState = {
  show: false,
  Component: "",
  className: "canvas",
  title: "",
  onclose: () => {},
};
export const offCanvasReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_CANVAS:
      return {
        ...state,
        show: true,
        Component: action.payload.Component,
        className: "canvas show",
        title: action.payload.title,
      };
    case CLOSE_CANVAS:
      return {
        ...state,
        show: false,
        className: "canvas hide",
      };
    default:
      return state;
  }
};
