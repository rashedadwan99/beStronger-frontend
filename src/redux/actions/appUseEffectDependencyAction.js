export const TOGGLE_APP_DEPENCY = "TOGGLE_APP_DEPENCY";
export const toggleAppDependency = (data) => {
  return {
    type: TOGGLE_APP_DEPENCY,
    payload: data,
  };
};
