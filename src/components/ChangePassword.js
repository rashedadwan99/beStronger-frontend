import React, { useState } from "react";
import ButtonsGroup from "./common/button";
import RenderInputField from "./common/Forms";
import "./changepassword.css";
import { changePassword } from "../services/userService";
import { Toast } from "./common/Toast";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../redux/actions/modalActions";
function ChangePassword() {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    oldPassword: "",
    newPassword1: "",
    newPassword2: "",
  });
  const showModal = useSelector((state) => state.modal.show);
  const [isLoading, setIsLoading] = useState(false);

  const savePassword = async () => {
    const { oldPassword, newPassword1, newPassword2 } = data;

    if (!oldPassword || !newPassword1 || !newPassword2) {
      Toast("error", "please fill all fields");
      return;
    }
    if (
      oldPassword.length <= 4 ||
      newPassword1.length <= 4 ||
      newPassword2.length <= 4
    ) {
      Toast("error", "passwords should be at least 5 characters", "left-top");
      return;
    }

    try {
      setIsLoading(true);

      const { data: responseData } = await changePassword(data);

      Toast("success", responseData.message);
      if (showModal) {
        dispatch(closeModal());
      }
      setIsLoading(false);
    } catch (error) {
      Toast("error", error);
      setIsLoading(false);
    }
  };
  return (
    <div className="change-password">
      <form>
        {RenderInputField({
          data,
          setData,
          type: "password",
          isRequired: true,
          placeholder: "current password",
          name: "oldPassword",
          value: data.oldPassword,
        })}
        {RenderInputField({
          data,
          setData,
          type: "password",
          isRequired: true,
          placeholder: "new password",
          name: "newPassword1",
          value: data.newPassword1,
        })}
        {RenderInputField({
          data,
          setData,
          type: "password",
          isRequired: true,
          placeholder: "confirm new password",
          name: "newPassword2",
          value: data.newPassword2,
        })}
        <div className="button-container">
          <ButtonsGroup
            label="save"
            onClick={savePassword}
            isLoading={isLoading}
          />
        </div>
      </form>
    </div>
  );
}

export default ChangePassword;
