import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { getPublicUsers } from "../services/userService";
import ProfileCard from "./common/ProfileCard";
import UserList from "./common/UsersList";

function SuggestionsSection() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getNutritionistsAndTrainers = async () => {
      try {
        const { data: users } = await getPublicUsers();
        setUsers(users);
      } catch (error) {
        if (error.response && error.response.status === 400) {
          return toast.error(error.response.data.message, {
            position: "bottom-left",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        }
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
          <UserList users={users} />
        </div>
      </div>
    </div>
  );
}

export default SuggestionsSection;
