import React, { useRef, useState } from "react";
import clsx from "clsx";
import style from "./ShortenList.module.scss";
import InputField from "../../components/InputField/InputField";
import shortenApi from "../../api/shortenApi";
import UrlNeedShorted from "./components/UrlNeedShorted/UrlNeedShorted";
import ShowUrlShorted from "./components/ShowUrlShorted/ShowUrlShorted";
const ShortenList = () => {
  const [shortenListValue, setShortenListValue] = useState("");
  const [customLinkValue, setCustomLinkValue] = useState("");
  const [linkShorted, setLinkShorted] = useState(false);
  const [buttonText, setButtonText] = useState(false);
  const onSubmit = async (e) => {
    try {
      e.preventDefault();
      if (!shortenListValue) {
        return;
      }
      setButtonText(true);
      const url = await shortenApi.addShorten({
        linkToRedirect: shortenListValue,
      });
      setLinkShorted(url);
    } catch (error) {
      console.log(error);
    }
  };
  const showMyUrl = () => {};
  const shortedAnother = () => {
    setLinkShorted(false);
    setShortenListValue("");
    setCustomLinkValue("");
    setButtonText(false);
  };
  return (
    <div className={clsx(style.main)}>
      <div className={clsx(style.formContainer)}>
        <div autoComplete="off">
          {!linkShorted ? (
            <UrlNeedShorted
              shortenListValue={shortenListValue}
              setShortenListValue={setShortenListValue}
              disabled={true}
              customLinkValue={customLinkValue}
              setCustomLinkValue={setCustomLinkValue}
              onSubmit={onSubmit}
              buttonText={buttonText}
            />
          ) : (
            <ShowUrlShorted
              linkShorted={linkShorted}
              showMyUrl={showMyUrl}
              shortedAnother={shortedAnother}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ShortenList;
