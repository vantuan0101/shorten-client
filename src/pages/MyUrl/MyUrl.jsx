import React, { Fragment, useEffect, useRef, useState } from "react";
import appApi from "../../api/appApi";
import clsx from "clsx";
import style from "./MyUrl.module.scss";
import CreateLink from "../../components/CreateLink/CreateLink";
import shortenApi from "../../api/shortenApi";
import { Outlet } from "react-router-dom";
const MyUrl = () => {
  const [linkList, setLinkList] = useState([]);
  const [allLinkList, setAllLinkList] = useState(null);
  const [isActivate, setIsActivate] = useState({
    tab1: true,
    tab2: false,
    tab3: false,
  });
  const { _id } = JSON.parse(window.localStorage.getItem("user"));
  useEffect(() => {
    const res = async () => {
      const data = await appApi.getAllLinkOfUserById(_id);
      setLinkList(data);
    };
    res();
  }, []);
  useEffect(() => {
    if (isActivate.tab3 && !allLinkList) {
      const res = async () => {
        const data = await shortenApi.getAll();
        setAllLinkList(data);
      };
      res();
    }
  }, [isActivate.tab3]);
  const tab1 = useRef(null);
  const tab2 = useRef(null);
  const tab3 = useRef(null);
  const handleActiveTab = (e) => {
    if (e.target.getAttribute("data-tab") === "1") {
      tab2?.current?.classList.remove("isActive");
      tab3?.current?.classList.remove("isActive");
      e.target.classList.add("isActive");
      setIsActivate({
        tab1: true,
        tab2: false,
        tab3: false,
      });
    }
    if (e.target.getAttribute("data-tab") === "2") {
      tab1?.current?.classList.remove("isActive");
      tab3?.current?.classList.remove("isActive");
      e.target.classList.add("isActive");
      setIsActivate({
        tab1: false,
        tab2: true,
        tab3: false,
      });
    }
    if (e.target.getAttribute("data-tab") === "3") {
      tab1?.current?.classList.remove("isActive");
      tab2?.current?.classList.remove("isActive");
      e.target.classList.add("isActive");
      setIsActivate({
        tab1: false,
        tab2: false,
        tab3: true,
      });
    }
  };
  return (
    <div className={clsx(style.main)}>
      <h2>Your URL</h2>
      <ul className={clsx(style.contain)}>
        <h3 className={clsx(style.info)}>
          Hello , {linkList?.firstName + linkList?.lastName}
        </h3>
        {linkList?.email ? (
          <li className={clsx(style.info)}>Email :{linkList?.email}</li>
        ) : null}
        {linkList?.username ? (
          <li className={clsx(style.info)}>Username :{linkList?.username}</li>
        ) : null}

        <ul className={clsx(style.link)}>
          <div className={clsx(style.linkTab)}>
            <p
              onClick={(e) => handleActiveTab(e)}
              data-tab="1"
              ref={tab1}
              className="isActive"
            >
              Link has been created
            </p>
            <p onClick={(e) => handleActiveTab(e)} data-tab="2" ref={tab2}>
              Link has been clicked
            </p>
            <p onClick={(e) => handleActiveTab(e)} data-tab="3" ref={tab3}>
              All link has been created
            </p>
          </div>
          <Outlet />
          {/* {isActivate.tab1 ? <CreateLink data={linkList?.createdLink} /> : null}
          {isActivate.tab2 ? <CreateLink data={linkList?.clickedLink} /> : null}
          {isActivate.tab3 ? <CreateLink data={allLinkList} /> : null} */}
        </ul>
      </ul>
    </div>
  );
};

export default MyUrl;
