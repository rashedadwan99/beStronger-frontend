import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Offcanvas } from "react-bootstrap";
import { closeOffCanvas } from "../../redux/actions/offCanvasActions";
function OffCanvas() {
  const dispatch = useDispatch();
  const canvas = useSelector((state) => state.canvas);
  const { show, component, title } = canvas;
  return (
    <>
      <Offcanvas show={show} onHide={() => dispatch(closeOffCanvas())}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{title}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>{component}</Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default OffCanvas;
