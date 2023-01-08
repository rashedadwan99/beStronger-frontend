import React from "react";
import "./skeleton.css";
function UserListSkeleton({ number }) {
  const array = [...Array(number)].map((x) => 0);
  return (
    <>
      {array.map((n, i) => {
        return (
          <div className="skeleton-user-container" key={i}>
            <div className="user-list-skeleton">
              <div className="user-list-image-name">
                <div className="user-list-image" />
                <div className="user-list-name" />
              </div>
              <div className="user-list-button" />
            </div>
          </div>
        );
      })}
    </>
  );
}

export default UserListSkeleton;
