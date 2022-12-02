import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import AdminAccount from "./components/AdminAccount/AdminAccount";
import UserAccount from "./UserAccount/UserAccount";

const MyAccount = () => {
  const user = JSON.parse(window.localStorage.getItem("user"));
  // console.log(user);
  useEffect(() => {
    if (!user) {
      return (window.location.href = "/login");
    }
  }, []);
  return (
    <div>
      <h3>My Account</h3>
      {user.role !== "admin" ? <UserAccount /> : <AdminAccount />}
      {/* <Outlet /> */}
    </div>
  );
};

export default MyAccount;
