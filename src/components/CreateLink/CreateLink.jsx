import React, { Fragment, useEffect, useState } from "react";
import clsx from "clsx";
import style from "./CreateLink.module.scss";
import shortenApi from "../../api/shortenApi";
import queryString from "query-string";
const CreateLink = () => {
  const parsed = queryString.parse(window.location.search);
  console.log(parsed);
  const [link, setLink] = useState([]);
  useEffect(() => {
    const res = async () => {
      const data = await shortenApi.getAll();
      setLink(data);
    };
    res();
  }, []);
  // console.log(link);
  return (
    <>
      <div className={clsx(style.container)}>
        <div className={clsx(style.header)}>
          <div className={clsx(style.heading)}>
            <div className={clsx(style.item)}>
              <h1>ID</h1>
            </div>
            <div className={clsx(style.item)}>
              <h1>Full Link</h1>
            </div>
            <div className={clsx(style.item)}>
              <h1>Shorted Link</h1>
            </div>
            <div className={clsx(style.item)}>
              <h1>Count</h1>
            </div>
          </div>
        </div>
        <div className={clsx(style.content)}>
          <div className={clsx(style.content_item)}>
            {link?.map((item) => (
              <div className={clsx(style.content_item_contain)} key={item._id}>
                <div className={clsx(style.item)}>{item._id}</div>
                <div className={clsx(style.item)}>{item.linkToRedirect}</div>
                <div className={clsx(style.item)}>{item.shortLink}</div>
                <div className={clsx(style.item)}>
                  {item.countClick ? item.countClick : 0}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateLink;
