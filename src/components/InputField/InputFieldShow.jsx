import React, { useState } from "react";
import clsx from "clsx";
import style from "./InputField.module.scss";

const InputFieldShow = ({
  className = null,
  name,
  placeholder = "",
  value,
}) => {
  return (
    <label>
      <input
        className={clsx(style.inputField, className)}
        name={name}
        value={value}
        disabled
      />
    </label>
  );
};

export default InputFieldShow;
