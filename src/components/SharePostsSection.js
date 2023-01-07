import React from "react";
import Posts from "./common/Posts";
import PostTopCreationSection from "./PostTopCreationSection";

function SharePostsSection() {
  return (
    <div className="middle-communication-section">
      <div className="post-creation-section">
        <PostTopCreationSection />
        <Posts />
      </div>
    </div>
  );
}

export default SharePostsSection;
