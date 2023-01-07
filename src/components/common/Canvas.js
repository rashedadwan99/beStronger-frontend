import React, { useEffect, useState } from "react";
import { useRef } from "react";

import { useDispatch, useSelector } from "react-redux";
import { closeOffCanvas } from "../../redux/actions/offCanvasActions";
import ModalCanvasHeader from "./ModalCanvasHeader";
import "./canvas.css";
function Canvas() {
  const show = useSelector((state) => state.canvas.show);
  const className = useSelector((state) => state.canvas.className);
  const Component = useSelector((state) => state.canvas.Component);
  const title = useSelector((state) => state.canvas.title);
  const dispatch = useDispatch();
  const ref = useRef(null);

  return (
    <>
      {show && (
        <div
          className="canvas-background"
          onClick={() => dispatch(closeOffCanvas())}
        />
      )}

      <div className={className} ref={ref}>
        <ModalCanvasHeader
          title={title}
          handleClickClose={() => dispatch(closeOffCanvas())}
        />
        <div className="canvas-body">{Component}</div>
      </div>
    </>
  );
}

export default Canvas;
