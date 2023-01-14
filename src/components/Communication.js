import React, { useEffect, useState } from "react";
import ProfileCardContainer from "./ProfileCardContainer";
import SharePostsSection from "./SharePostsSection";
import SuggestionsSection from "./SuggestionsSection";
import "./communication.css";
import { useSelector } from "react-redux";

function Communication() {
  const user = useSelector((state) => state.user.value);
  const socket = useSelector((state) => state.socket);
  const [socketConnected, setSocketConnected] = useState(false);

  useEffect(() => {
    if (!socket) return;
    socket.emit("setup", user._id);
    socket.on("connected", () => {
      setSocketConnected(true);
    });
  }, [socket]);
  return (
    <div className="comunication-section">
      <ProfileCardContainer />
      <SharePostsSection />
      <SuggestionsSection />
    </div>
  );
}

export default Communication;
