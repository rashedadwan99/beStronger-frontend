import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Toast } from "./common/Toast";
import { getPublicUsers } from "../services/userService";
import ProfileCard from "./common/ProfileCard";
import UserList from "./common/UsersList";
import UserListSkeleton from "./skeleton/UserListSkeleton";
function SuggestionsSection() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const getNutritionistsAndTrainers = async () => {
      try {
        setIsLoading(true);
        const { data: users } = await getPublicUsers();
        setIsLoading(false);
        setUsers(users);
      } catch (error) {
        Toast("error", error);
      }
    };
    getNutritionistsAndTrainers();
  }, []);
  return (
    <div className="right-communication-section">
      <ProfileCard />
      <div className="nutritionists-trainers">
        <div className="nutritionists-trainers_title">
          <p>nutritionists and trainers</p>
        </div>
        <div className="nutritionists-trainers_body">
          {!isLoading ? (
            <UserList users={users} />
          ) : (
            <UserListSkeleton number={3} />
          )}
        </div>
      </div>
    </div>
  );
}

export default SuggestionsSection;
