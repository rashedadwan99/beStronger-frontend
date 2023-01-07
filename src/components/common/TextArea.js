import React from "react";
import { Form, FloatingLabel } from "react-bootstrap";
function TextArea({ label, id, errorMessage, style, ...rest }) {
  return (
    <>
      <FloatingLabel label={label}>
        <Form.Control.Feedback
          type="invalid"
          isinvalid={errorMessage}
          style={{ display: "block", marginBottom: "2px" }}
        >
          {errorMessage && errorMessage}
        </Form.Control.Feedback>
        <Form.Control as="textarea" style={{ ...style }} id={id} {...rest} />
      </FloatingLabel>
    </>
  );
}

export default TextArea;
