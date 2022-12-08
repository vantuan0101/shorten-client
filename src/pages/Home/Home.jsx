import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import appApi from "../../api/appApi";
import authApi from "../../api/authApi";
import Header from "../../components/Header/Header";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const user = JSON.parse(window.localStorage.getItem("user"));
  useEffect(() => {
    const res = async () => {
      try {
        await appApi.checkDisableUser();
      } catch (error) {
        await authApi.logout(user._id);
        window.localStorage.removeItem("user");
        navigate("/expired");
      }
    };
    if (user) {
      res();
    }
  }, [user]);
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Home;
