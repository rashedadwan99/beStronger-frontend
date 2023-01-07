import { getCurrentUserName } from "../../services/profileService";

export const GET_NAME = "GET_NAME";
export const getNameOfUser = () => {

  return async (dispatch) => {
    const { data: name } = await getCurrentUserName();
    dispatch({ type: GET_NAME, payload: name })
  }

}