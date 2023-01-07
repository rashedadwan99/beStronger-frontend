import { OPEN_MODAL, CLOSE_MODAL } from "../actions/modalActions";
const initialState = {
  show: false,
};
export const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL: {
      return {
        ...state,
        show: true,
        Component: action.payload.Component,
        title: action.payload.title,
        className: action.payload.className,
      };
    }
    case CLOSE_MODAL: {
      return {
        ...state,
        show: false,

        title: "",
      };
    }
    default:
      return state;
  }
};
