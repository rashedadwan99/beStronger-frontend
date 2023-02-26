import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Toast } from "./common/Toast";
import UsersList from "./common/UsersList";
import UserListSkeleton from "./skeleton/UserListSkeleton";

function FollowingFollowersList({ users, profileCardUser, service }) {
  const [isLoading, setIsLoading] = useState(false);
  const [usersList, setUsersList] = useState([]);
  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);
        const { data: users } = await service(profileCardUser._id);
        setIsLoading(false);
        setUsersList([...users]);
      } catch (error) {
        Toast("error", error);
        setIsLoading(false);
      }
    }
    getData();
  }, []);
  return (
    <div className="followers-following-list">
      {!isLoading ? (
        <UsersList users={usersList} />
      ) : (
        <UserListSkeleton number={1} />
      )}
    </div>
  );
}

export default FollowingFollowersList;
