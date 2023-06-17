import React from "react";
import { useHistory } from "react-router-dom";
import ButtonsGroup from "./common/button";
import { loginRoute } from "../config/routes";
function JoinUs() {
  const history = useHistory();
  return (
    <ButtonsGroup
      label="login / register"
      onClick={() => {
        history.push(loginRoute);
      }}
    />
  );
}

export default JoinUs;
