import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { formatTime } from "./utils/timeHandler";
import "./timecomponent.css";
function TimeComponent({ date }) {
  const [updatedDate, setUpdatedDate] = useState(formatTime(date));
  const interval = useRef();
  useEffect(() => {
    interval.current = setInterval(() => {
      setUpdatedDate(formatTime(date));
    }, [1000]);
    return () => clearInterval(interval.current);
  });
  return <span className="time">{updatedDate}</span>;
}

export default TimeComponent;
