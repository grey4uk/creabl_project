import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import css from "./Sidebar.module.css";
import logo from "../../assets/images/logo.svg";
import settings from "../../assets/icons/setings";
import users from "../../assets/icons/users";
import sessions from "../../assets/icons/sessions";
import analitics from "../../assets/icons/analitics";
import messages from "../../assets/icons/messages";
import chat from "../../assets/icons/chat";
import help from "../../assets/icons/help";
import user from "../../user1.json";

const Sidebar = ({ handleRoute }) => {
  const [sessionsCount, setSessionsCount] = useState(0);
  const [activeIcon, setActiveIcon] = useState(null);

  useEffect(() => {
    // data from component <sessions>
    setSessionsCount(85);
  }, []);

  const handleClick = (e) => {
    const target = e.currentTarget.querySelector("svg");
    activeIcon && activeIcon.classList.remove(`${activeIcon.classList[1]}`);
    target.classList.add(`${css.categoryIcoActive}`);
    setActiveIcon(target);
  };

  return (
    <div className={css.sidebarContainer}>
      <div>
        <img
          src={logo}
          alt="logo"
          width="74"
          height="18.56"
          className={css.logo}
        />
        <ul className={css.categoryList}>
          <li onClick={handleClick} className={css.categoryLi}>
            <NavLink
              onClick={handleRoute}
              className={css.categoryItem}
              activeStyle={{ color: "#1E2A3B", fontWeight: "600" }}
              exact
              to="/"
            >
              <div className={css.categoryItemHover}>
                {users}
                <span className={css.categoryName}> Users</span>
              </div>
            </NavLink>
          </li>
          <li
            onClick={handleClick}
            className={css.categoryLi}
            style={{ justifyContent: 'space-between' }}
          >
            <NavLink
              onClick={handleRoute}
              className={css.categoryItem}
              activeStyle={{ color: "#1E2A3B", fontWeight: "600" }}
              to="/sessions"
            >
              <div className={css.categoryItemHover}>
                {sessions}
                <span className={css.categoryName}>Sessions</span>
              </div>
            </NavLink>
            <span>{sessionsCount}</span>
          </li>
          <li onClick={handleClick} className={css.categoryLi}>
            <NavLink
              onClick={handleRoute}
              className={css.categoryItem}
              activeStyle={{ color: "#1E2A3B", fontWeight: "600" }}
              to="/analytics"
            >
              <div className={css.categoryItemHover}>
                {analitics}
                <span className={css.categoryName}>Analytics</span>
              </div>
            </NavLink>
            <span>soon</span>
          </li>
          <li onClick={handleClick} className={css.categoryLi}>
            <NavLink
              onClick={handleRoute}
              className={css.categoryItem}
              activeStyle={{ color: "#1E2A3B", fontWeight: "600" }}
              to="/messages"
            >
              <div className={css.categoryItemHover}>
                {messages}
                <span className={css.categoryName}>Messages</span>
              </div>
            </NavLink>
            <span>soon</span>
          </li>
          <li onClick={handleClick} className={css.categoryLi}>
            <NavLink
              onClick={handleRoute}
              className={css.categoryItem}
              activeStyle={{ color: "#1E2A3B", fontWeight: "600" }}
              to="/chats"
            >
              <div className={css.categoryItemHover}>
                {chat}
                <span className={css.categoryName}>Chats</span>
              </div>
            </NavLink>
            <span>soon</span>
          </li>
          <li onClick={handleClick} className={css.categoryLi}>
            <NavLink
              onClick={handleRoute}
              className={css.categoryItem}
              activeStyle={{ color: "#1E2A3B", fontWeight: "600" }}
              to="/help"
            >
              <div className={css.categoryItemHover}>
                {help}
                <span className={css.categoryName}>Help center</span>
              </div>
            </NavLink>
            <span>soon</span>
          </li>
          <li onClick={handleClick} className={css.categoryLi}>
            <NavLink
              onClick={handleRoute}
              className={css.categoryItem}
              activeStyle={{ color: "#1E2A3B", fontWeight: "600" }}
              to="/settings"
            >
              <div className={css.categoryItemHover}>
                {settings}
                <span className={css.categoryName}>Settings</span>
              </div>
            </NavLink>
          </li>
        </ul>
      </div>
      <div className={css.userInfo}>
        <img
          src={user.avatar}
          alt="ava"
          width="74"
          height="18.56"
          className={css.userAvatar}
        />
        <div className={css.userName}>
          <span>{user.firstName}</span>
          <span>{user.lastName}</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
