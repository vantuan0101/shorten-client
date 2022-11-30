import React, { Fragment } from "react";
import clsx from "clsx";
import style from "./CreateLink.module.scss";
const CreateLink = ({ data }) => {
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
            {data?.map((item) => (
              <Fragment key={item._id}>
                <div className={clsx(style.item)}>{item._id}</div>
                <div className={clsx(style.item)}>{item.linkToRedirect}</div>
                <div className={clsx(style.item)}>{item.shortLink}</div>
                <div className={clsx(style.item)}>
                  {item.count ? item.count : 0}
                </div>
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateLink;
