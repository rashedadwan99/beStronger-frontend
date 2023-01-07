import React from "react";
import ProfileCardContainer from "./ProfileCardContainer";
import SharePostsSection from "./SharePostsSection";
import SuggestionsSection from "./SuggestionsSection";
import "./communication.css";

function Communication() {
  return (
    <div className="comunication-section">
      <ProfileCardContainer />
      <SharePostsSection />
      <SuggestionsSection />
    </div>
  );
}

export default Communication;
