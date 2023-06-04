import React, { useEffect, useState } from "react";
import { getPostFans } from "../../services/postService";
import UsersList from "../common/UsersList";
import "./postfans.css";
import UserListSkeleton from "../skeleton/UserListSkeleton";
function PostFans({ postId }) {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const getPostFansHandler = async () => {
    setIsLoading(true);

    const { data: users } = await getPostFans(postId);
    setIsLoading(false);

    setUsers(users);
  };
  useEffect(() => {
    getPostFansHandler();
  }, []);
  return (
    <div className="post-fans">
      {!isLoading ? (
        <UsersList users={users} />
      ) : (
        <UserListSkeleton number={1} />
      )}
    </div>
  );
}

export default PostFans;
