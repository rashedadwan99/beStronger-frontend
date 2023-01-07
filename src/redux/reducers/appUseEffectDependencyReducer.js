import { TOGGLE_APP_DEPENCY } from "../actions/appUseEffectDependencyAction";

const initialState = true;

export const appUseEffectDependencyReducder = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case TOGGLE_APP_DEPENCY: {
      return !state;
    }
    default:
      return state;
  }
};
