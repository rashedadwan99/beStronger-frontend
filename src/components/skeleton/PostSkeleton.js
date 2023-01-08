import React from "react";
import UserListSkeleton from "./UserListSkeleton";
import "./skeleton.css";
import { AiOutlinePicture } from "react-icons/ai";
function PostSkeleton() {
  return (
    <div className="post-skeleton">
      <UserListSkeleton number={1} />
      <div className="post-skeleton-body">
        <AiOutlinePicture />
      </div>
    </div>
  );
}

export default PostSkeleton;
