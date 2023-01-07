export const OPEN_CANVAS = "OPEN_CANVAS";
export const CLOSE_CANVAS = "CLOSE_CANVAS";
export const openOffCanvas = (Component, title) => {
  return { type: OPEN_CANVAS, payload: { Component, title } };
};
export const closeOffCanvas = () => {
  return { type: CLOSE_CANVAS };
};
