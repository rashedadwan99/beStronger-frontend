import React from "react";
import { AiFillHeart } from "react-icons/ai";
import { BiDumbbell } from "react-icons/bi";
import { GiMuscleUp, GiStrongMan } from "react-icons/gi";
import Animations from "./common/Animations";
function NoPosts() {
  const shapes = [
    { icon: <BiDumbbell /> },
    { icon: <GiMuscleUp /> },
    { icon: <GiStrongMan /> },
    { icon: <AiFillHeart /> },
  ];
  return (
    <div className="no-posts">
      <p>there are no posts</p>
      <Animations shapes={shapes} />
    </div>
  );
}

export default NoPosts;
