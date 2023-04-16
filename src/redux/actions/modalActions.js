export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";
export const openModal = ({ title, Component, className }) => {
  return {
    type: OPEN_MODAL,
    payload: { title, Component, className },
  };
};
export const closeModal = () => {
  return { type: CLOSE_MODAL };
};
