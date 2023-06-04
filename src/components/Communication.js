import React from "react";
import ProfileCardContainer from "./profile/ProfileCardContainer";
import SharePostsSection from "./posts/SharePostsSection";
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
