import React, { Fragment, useEffect, useRef, useState } from "react";
import appApi from "../../api/appApi";
import clsx from "clsx";
import style from "./MyUrl.module.scss";
import CreateLink from "../../components/CreateLink/CreateLink";
import shortenApi from "../../api/shortenApi";
import { NavLink, Outlet } from "react-router-dom";
const MyUrl = () => {
  const { _id, firstName, lastName, username, email } = JSON.parse(
    window.localStorage.getItem("user")
  );

  return (
    <div className={clsx(style.main)}>
      <h2>Your URL</h2>
      <ul className={clsx(style.contain)}>
        <h3 className={clsx(style.info)}>Hello , {firstName + lastName}</h3>
        {email ? <li className={clsx(style.info)}>Email :{email}</li> : null}
        {username ? (
          <li className={clsx(style.info)}>Username :{username}</li>
        ) : null}

        <ul className={clsx(style.link)}>
          <div className={clsx(style.linkTab)}>
            <NavLink
              to="/my-url/create-link"
              className={({ isActive }) => (isActive ? "isActive" : undefined)}
            >
              Link has been created
            </NavLink>

            <NavLink
              to="/my-url/clicked-link"
              className={({ isActive }) => (isActive ? "isActive" : undefined)}
            >
              Link has been clicked
            </NavLink>

            <NavLink
              to="/my-url/all-link"
              className={({ isActive }) => (isActive ? "isActive" : undefined)}
            >
              All link has been created
            </NavLink>
          </div>
          <Outlet />
        </ul>
      </ul>
    </div>
  );
};

export default MyUrl;
