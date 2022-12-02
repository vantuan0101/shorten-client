import React, { useEffect, useState } from "react";
import clsx from "clsx";
import style from "./header.module.scss";
import authApi from "../../api/authApi";
const Header = () => {
  const user = JSON.parse(window.localStorage.getItem("user"));
  const logoutUser = async () => {
    try {
      await authApi.logout(user._id);
      window.localStorage.removeItem("user");
      window.location.href = "/";
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={clsx(style.main)}>
      <div className={clsx(style.contain)}>
        <a href="/" className={clsx(style.logo)}>
          Tiny Url
        </a>
        {user ? (
          <div className={clsx(style.infoUser)}>
            <div className={clsx(style.user)}>
              <div className={clsx(style.userContain)}>
                <img
                  src={
                    user?.picture
                      ? user.picture
                      : "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"
                  }
                  alt="avatar"
                />
                <div>
                  {user.firstName} {user.lastName}
                </div>
              </div>
              <ul className={clsx(style.menu)}>
                <li onClick={() => logoutUser()}>Logout</li>
                <li
                  onClick={() => (window.location.href = "/my-url/create-link")}
                >
                  My URL
                </li>
                <li onClick={() => (window.location.href = "/my-account")}>
                  My Account
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <div className={clsx(style.tools)}>
            <a href="/login">Login</a>
            <a href="/register">Sign Up</a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
