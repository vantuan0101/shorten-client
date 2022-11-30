import React, { useState } from "react";
import clsx from "clsx";
import style from "./InputField.module.scss";
const InputField = ({
  className = null,
  type = "text",
  name,
  placeholder = "",
  value,
  setValue,
  disabled = false,
}) => {
  return (
    <label>
      <input
        type={type}
        className={clsx(style.inputField, className)}
        name={name}
        placeholder={placeholder}
        value={value}
        disabled={disabled}
        onChange={(e) => setValue(e.target.value)}
        autoComplete="off"
      />
    </label>
  );
};

export default InputField;
