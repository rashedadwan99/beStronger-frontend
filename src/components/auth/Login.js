import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../../redux/actions/userActions";
import Button from "../common/button";
import RenderInputField from "../common/Forms";
import { Toast } from "../common/Toast";
import "./login.css";
function Login() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const isLoading = useSelector((state) => state.user.isLoading);

  const dispatch = useDispatch();
  const { email, password } = data;
  const handleSubmit = async () => {
    if (!email || !password) {
      Toast("error", "please fill all fields");
      return;
    }
    const emailPattern =
      "^[a-zA-Z0-9]+(?:.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:.[a-zA-Z0-9]+)*$";
    const regex = new RegExp(emailPattern);
    if (!regex.test(email)) {
      Toast("error", "please enter a valid email");
      return;
    }
    dispatch(loginAction(data));
  };
  return (
    <div className="login-form">
      <form onSubmit={handleSubmit}>
        <RenderInputField
          placeholder="email"
          value={email}
          name="email"
          data={data}
          setData={setData}
          label="email"
        />
        <RenderInputField
          placeholder="password"
          value={password}
          name="password"
          type="password"
          data={data}
          setData={setData}
          label="password"
        />
        <div className="button-container">
          <Button
            label="login"
            onClick={handleSubmit}
            isLoading={isLoading}
            disabled={isLoading}
          />
        </div>
      </form>
    </div>
  );
}

export default Login;
