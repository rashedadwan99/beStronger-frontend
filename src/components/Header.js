import React from "react";
import HeaderRightSection from "./HeaderRightSection";
import HeaderLeftSection from "./HeaderLeftSection";
import "./header.css";
import {
  getNotificationsAction,
  reciveNotificiation,
  removeNotificiation,
} from "../redux/actions/notificationsActions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  decreaseFollowersList,
  increaseFollowersList,
} from "../redux/actions/userActions";
function Header() {
  const dispatch = useDispatch();
  const socket = useSelector((state) => state.socket);
  const user = useSelector((state) => state.user.value);

  return (
    <div className="header">
      <HeaderLeftSection />
      <div className="header-middle-section">
        <h3>beStronger</h3>
      </div>
      <HeaderRightSection />
    </div>
  );
}

export default Header;
