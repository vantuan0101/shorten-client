import React, { useState } from "react";
import clsx from "clsx";
import style from "./InputField.module.scss";
import { useFormContext } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
const InputField = ({
  className = null,
  type = "text",
  name,
  placeholder = "",
  // setValue,
  disabled = false,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  // console.log(errors);
  return (
    <label>
      <input
        type={type}
        className={clsx(style.inputField, className)}
        name={name}
        placeholder={placeholder}
        disabled={disabled}
        autoComplete="off"
        {...register(name)}
      />
      <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }) => <p className={clsx(style.error)}>{message}</p>}
      />
    </label>
  );
};

export default InputField;
