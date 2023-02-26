import React from "react";
import { useHistory } from "react-router-dom";
import ButtonsGroup from "./common/button";
import routes from "../config/routes.json";
function JoinUs() {
  const history = useHistory();
  return (
    <ButtonsGroup
      label="login / signup"
      onClick={() => {
        history.replace(routes["login-route"]);
      }}
    />
  );
}

export default JoinUs;
