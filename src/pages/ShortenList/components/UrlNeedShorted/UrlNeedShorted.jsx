import React from "react";
import InputField from "../../../../components/InputField/InputField";
import clsx from "clsx";
import style from "./UrlNeedShorted.module.scss";
const UrlNeedShorted = ({
  shortenListValue,
  setShortenListValue,
  disabled,
  customLinkValue,
  setCustomLinkValue,
  onSubmit,
  buttonText,
}) => {
  return (
    <>
      <span>Enter a long URL to make a TinyURL</span>
      <InputField
        className={clsx(style.input)}
        // name="shortenUrl"
        value={shortenListValue}
        setValue={setShortenListValue}
      />
      <div className={clsx(style.urlCustom)}>
        <InputField
          className={clsx(style.urlMain)}
          // name="shortenUrl"
          value="shorten-web.up.railway.app/api/v1/"
          disabled={true}
        />
        <InputField
          className={clsx(style.urlChange)}
          // name="shortenUrl"
          placeholder="alias"
          value={customLinkValue}
          setValue={setCustomLinkValue}
        />
      </div>

      <button className={clsx(style.buttonShort)} onClick={(e) => onSubmit(e)}>
        {buttonText ? "Waiting..." : "Generate"}
      </button>
    </>
  );
};

export default UrlNeedShorted;
