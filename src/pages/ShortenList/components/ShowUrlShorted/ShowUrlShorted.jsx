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
          onClick={() => (window.location.href = "/my-url")}
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
