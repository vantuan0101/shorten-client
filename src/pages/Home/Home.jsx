import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import appApi from "../../api/appApi";
import authApi from "../../api/authApi";
import Header from "../../components/Header/Header";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const res = async () => {
      try {
        await appApi.checkDisableUser();
      } catch (error) {
        const user = JSON.parse(window.localStorage.getItem("user"));
        await authApi.logout(user._id);
        window.localStorage.removeItem("user");
        navigate("/expired");
      }
    };
    res();
  }, []);
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Home;
