import React, { Fragment, useEffect, useRef, useState } from "react";
import appApi from "../../api/appApi";
import clsx from "clsx";
import style from "./MyUrl.module.scss";
import CreateLink from "../../components/CreateLink/CreateLink";
const MyUrl = () => {
  const [linkList, setLinkList] = useState([]);
  const [isActivate, setIsActivate] = useState(true);
  const { _id } = JSON.parse(window.localStorage.getItem("user"));
  useEffect(() => {
    const res = async () => {
      const data = await appApi.getAllLinkOfUserById(_id);
      setLinkList(data);
    };
    res();
  }, []);
  const tab1 = useRef(null);
  const tab2 = useRef(null);
  // console.log(linkList);
  const handleActiveTab = (e) => {
    if (e.target.getAttribute("data-tab") === "1") {
      tab2?.current?.classList.remove("isActive");
      e.target.classList.add("isActive");
    } else {
      tab1?.current?.classList.remove("isActive");
      e.target.classList.add("isActive");
    }
    setIsActivate(!isActivate);
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
          </div>
          {isActivate ? (
            <CreateLink data={linkList?.createdLink} />
          ) : (
            <CreateLink data={linkList?.clickedLink} />
          )}
          {/* <Pagination /> */}
        </ul>
      </ul>
    </div>
  );
};

export default MyUrl;
