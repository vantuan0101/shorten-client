import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import ShortenList from "../ShortenList/ShortenList";

const Home = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Home;
