import React, { useState } from "react";
import InputField from "../../../../components/InputField/InputField";
import clsx from "clsx";
import style from "./UrlNeedShorted.module.scss";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm } from "react-hook-form";
import ShowUrlShorted from "../ShowUrlShorted/ShowUrlShorted";
import * as yup from "yup";
import shortenApi from "../../../../api/shortenApi";
const schema = yup
  .object({
    fullLink: yup.string().required("Vui lòng nhập fullLink"),
    alias: yup.string(),
  })
  .required();
const UrlNeedShorted = ({ onSubmit }) => {
  const methods = useForm({ resolver: yupResolver(schema) });

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        encType="multipart/form-data"
      >
        <span>Enter a long URL to make a TinyURL</span>
        <InputField className={clsx(style.input)} name="fullLink" />
        <div className={clsx(style.urlCustom)}>
          <input
            value="shorten-web.up.railway.app/api/v1/"
            disabled
            className={clsx(style.urlMain)}
          />

          <InputField
            className={clsx(style.urlChange)}
            name="alias"
            placeholder="alias"
          />
        </div>
        <button className={clsx(style.buttonShort)} type="submit">
          Generate
        </button>
      </form>
    </FormProvider>
  );
};

export default UrlNeedShorted;
