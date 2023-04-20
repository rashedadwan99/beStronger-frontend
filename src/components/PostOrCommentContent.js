import React, { useState } from "react";
import ClickAbleImage from "./common/ClickAbleImage";

function PostOrCommentContent({ data }) {
  const [showSeeMore, setShowMore] = useState(false);
  const organizeContent = () => {
    return data.content.length > 100 ? (
      <>
        {!showSeeMore ? (
          <span onClick={() => setShowMore(true)}>
            {data.content.slice(0, 50)}

            <span className="see-more-less">see more...</span>
          </span>
        ) : (
          <span onClick={() => setShowMore(false)}>
            {data.content}
            <span className="see-more-less">see less...</span>
          </span>
        )}
      </>
    ) : (
      data.content
    );
  };
  return (
    <div className="post-or-comment-content">
      <p>{organizeContent()}</p>
      {data.picture && (
        <div className="post-image">
          <ClickAbleImage src={data.picture} alt="post media" />
        </div>
      )}
    </div>
  );
}

export default PostOrCommentContent;
