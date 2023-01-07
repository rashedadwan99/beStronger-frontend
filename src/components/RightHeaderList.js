import React from "react";
import { AiOutlineLogout } from "react-icons/ai";
import { FaRegUserCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { toggleAppDependency } from "../redux/actions/appUseEffectDependencyAction";
import { logout } from "../services/authService";
import OptionsList from "./common/OptionsList";

function RightHeaderList({ setShow }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const appDependency = useSelector((state) => state.appUseEffectDependency);
  const options = [
    {
      label: "profile",

      onClick: () => {
        history.push("/profile");
        setShow(false);
      },
    },
    {
      label: "logout",

      onClick: () => {
        logout();

        dispatch(toggleAppDependency(!appDependency));
      },
    },
  ];
  return <OptionsList options={options} />;
}

export default RightHeaderList;
