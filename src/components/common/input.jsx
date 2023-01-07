import React from "react";
import { Form } from "react-bootstrap";
function Input({ name, errorMessage, label, style, autoComplete, ...rest }) {
  return (
    <Form.Floating className="mb-3" style={{ ...style }}>
      <Form.Control
        isInvalid={errorMessage}
        {...rest}
        autoComplete={`${autoComplete ? "off" : "on"}`}
      />
      <label htmlFor={name}>{label}</label>
      <Form.Control.Feedback type="invalid">
        {errorMessage && errorMessage}
      </Form.Control.Feedback>
    </Form.Floating>
  );
}

export default Input;
