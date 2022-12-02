import React, { useState } from "react";
import clsx from "clsx";
import style from "./ShowUrlShorted.module.scss";
import InputFieldShow from "../../../../components/InputField/InputFieldShow";
const ShowUrlShorted = ({ linkShorted, shortedAnother }) => {
  const [isShow, setIsShow] = useState(false);
  const handleClickCopy = (e) => {
    navigator.clipboard.writeText(linkShorted.shortLink);
    setIsShow(true);
    setTimeout(() => {
      setIsShow(false);
    }, 2000);
  };
  const handleLinkMyUrl = () => {
    const { user } = JSON.parse(window.localStorage.getItem("user"));
    if (!user) {
      return (window.location.href = "/login");
    }
    return (window.location.href = "/my-url/create-link");
  };

  return (
    <>
      <span> Your Long URL</span>
      <InputFieldShow
        className={clsx(style.input)}
        // name="shortenUrl"
        value={linkShorted.linkToRedirect}
      />
      <span>TinyURL</span>
      <InputFieldShow
        className={clsx(style.input)}
        // name="shortenUrl"
        value={linkShorted.shortLink}
      />
      <div className={clsx(style.tools)}>
        <button
          style={{ backgroundColor: isShow ? "#1f8244" : "#303030" }}
          className={clsx(style.buttonShort)}
          onClick={(e) => handleClickCopy(e)}
        >
          {isShow ? "Ok" : "Copy"}
        </button>
      </div>
      <div className={clsx(style.button)}>
        <button
          className={clsx(style.buttonShort)}
          onClick={() => handleLinkMyUrl()}
        >
          My URL
        </button>
        <button
          className={clsx(style.buttonShort)}
          onClick={() => shortedAnother()}
        >
          Shorted Another
        </button>
      </div>
    </>
  );
};

export default ShowUrlShorted;
