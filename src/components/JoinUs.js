import React from "react";
import { useHistory } from "react-router-dom";
import ButtonsGroup from "./common/button";

function JoinUs() {
  const history = useHistory();
  return (
    <ButtonsGroup
      label="login / signup"
      onClick={() => {
        history.replace("/login");
      }}
    />
  );
}

export default JoinUs;
