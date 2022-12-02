import React, { useRef, useState } from "react";
import clsx from "clsx";
import style from "./ShortenList.module.scss";
import InputField from "../../components/InputField/InputField";
import shortenApi from "../../api/shortenApi";
import UrlNeedShorted from "./components/UrlNeedShorted/UrlNeedShorted";
import ShowUrlShorted from "./components/ShowUrlShorted/ShowUrlShorted";
const ShortenList = () => {
  const [linkShorted, setLinkShorted] = useState(false);
  const onSubmit = async ({ fullLink, alias }) => {
    try {
      const url = await shortenApi.addShorten({
        linkToRedirect: fullLink,
        alias: alias,
      });
      setLinkShorted(url);
    } catch (error) {
      console.log(error);
    }
  };
  const shortedAnother = () => {
    setLinkShorted(false);
  };
  return (
    <div className={clsx(style.main)}>
      <div className={clsx(style.formContainer)}>
        <div autoComplete="off">
          {!linkShorted ? (
            <UrlNeedShorted onSubmit={onSubmit} />
          ) : (
            <ShowUrlShorted
              linkShorted={linkShorted}
              shortedAnother={shortedAnother}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ShortenList;
