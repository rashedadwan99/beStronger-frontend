import React from "react";
import { useState } from "react";
import { Button, Spinner } from "react-bootstrap";
function ButtonsGroup({ label, isLoading, ...rest }) {
  return (
    <Button {...rest}>
      {isLoading ? <Spinner animation="border" size="sm" /> : label}
    </Button>
  );
}

export default ButtonsGroup;
