import React from "react";
import ProfileCardContainer from "./ProfileCardContainer";
import SharePostsSection from "./SharePostsSection";
import SuggestionsSection from "./SuggestionsSection";
import "./communication.css";
import { useEffect } from "react";
import { useSelector } from "react-redux";

function Communication() {
  const socket = useSelector((state) => state.socket);
  const user = useSelector((state) => state.user.value);
  useEffect(() => {
    socket.emit("setup", user._id);
  }, [user]);
  return (
    <div className="comunication-section">
      <ProfileCardContainer />
      <SharePostsSection />
      <SuggestionsSection />
    </div>
  );
}

export default Communication;
