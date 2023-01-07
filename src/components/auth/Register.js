import React, { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import Button from "../common/button";
import RenderInputField from "../common/Forms";
import { toggleAppDependency } from "../../redux/actions/appUseEffectDependencyAction";
import { Toast } from "../common/Toast";
import { registerUserAction } from "../../redux/actions/userActions";
function Register() {
  const [data, setData] = useState({
    email: "",
    password: "",
    name: "",
    password2: "",
  });
  const appDependency = useSelector((state) => state.appUseEffectDependency);
  const isLoading = useSelector((state) => state.user.isLoading);
  const dispatch = useDispatch();

  const { email, password, name, password2 } = data;
  const handleSubmit = async () => {
    if (!email || !password || !password2 || !name) {
      Toast("error", "please fill all fields", "left-right");
      return;
    }
    if (name.length <= 3) {
      Toast(
        "error",
        "name must consist from at least 3 characters",
        "left-right"
      );
      return;
    }
    if (password !== password2) {
      Toast("error", "both password should be the same", "left-right");
      return;
    }
    if (password.length <= 4) {
      toast("error", "password should be at least 5 characters", "left-right");
      return;
    }
    const emailPattern =
      "^[a-zA-Z0-9]+(?:.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:.[a-zA-Z0-9]+)*$";
    const regex = new RegExp(emailPattern);
    if (!regex.test(email)) {
      Toast("error", "please enter a valid email", "left-right");
      return;
    }
    dispatch(registerUserAction(data));
  };
  return (
    <div className="login-form">
      <form onSubmit={handleSubmit}>
        <RenderInputField
          placeholder="name"
          value={name}
          name="name"
          type="text"
          data={data}
          setData={setData}
          label="name"
          isRequired
        />
        <RenderInputField
          placeholder="email"
          value={email}
          name="email"
          data={data}
          setData={setData}
          label="email"
          isRequired
        />
        <RenderInputField
          placeholder="password"
          value={password}
          name="password"
          type="password"
          data={data}
          setData={setData}
          label="password"
          isRequired
        />
        <RenderInputField
          placeholder="confirm password"
          value={password2}
          name="password2"
          type="password"
          data={data}
          setData={setData}
          label="confirm password"
          isRequired
        />
        <div className="button-container">
          <Button
            label="sign up"
            onClick={handleSubmit}
            isLoading={isLoading}
            disabled={isLoading}
          />
        </div>
      </form>
    </div>
  );
}

export default Register;
