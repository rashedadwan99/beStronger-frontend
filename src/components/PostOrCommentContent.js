import React, { useState } from "react";

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
      {data.picture && <img src={data.picture} alt="picture" />}
    </div>
  );
}

export default PostOrCommentContent;
