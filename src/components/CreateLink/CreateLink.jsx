import React, { Fragment, useEffect, useState } from "react";
import clsx from "clsx";
import style from "./CreateLink.module.scss";
import shortenApi from "../../api/shortenApi";
import queryString from "query-string";
import appApi from "../../api/appApi";
import { useParams } from "react-router-dom";
import Select from "react-select";
import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();
const CreateLink = () => {
  const [link, setLink] = useState([]);
  const [sortQuery, setSortQuery] = useState();
  const [sortQueryRes, setSortQueryRes] = useState();
  const params = useParams();
  const { _id } = JSON.parse(window.localStorage.getItem("user"));
  // console.log(_id);
  useEffect(() => {
    if (sortQuery) {
      const handleOptions = sortQuery?.reduce((acc, cur) => {
        acc[cur.value] = cur.key;
        return acc;
      }, {});
      setSortQueryRes(handleOptions);
    }
  }, [sortQuery]);
  useEffect(() => {
    const res = async () => {
      const data = await appApi.getAllLinkOfUserById(
        _id,
        queryString.stringify(sortQueryRes)
      );
      if (params.showLink === "create-link") {
        setLink(data.createdLink);
      }
      if (params.showLink === "clicked-link") {
        setLink(data.clickedLink);
      }
    };
    const res2 = async () => {
      const data = await shortenApi.getAll(queryString.stringify(sortQueryRes));
      setLink(data[0].data);
    };
    if (params.showLink === "all-link") {
      res2();
    } else {
      res();
    }
  }, [params.showLink, sortQueryRes]);
  const options = [
    { value: "sortLinkToRedirect", key: "1", label: "Full Link ⬆" },
    { value: "sortLinkToRedirect", key: "-1", label: "Full Link ⬇" },
    { value: "sortShortLink", key: "1", label: "Short Link ⬆" },
    { value: "sortShortLink", key: "-1", label: "Short Link ⬇" },
    { value: "sortCountClick", key: "1", label: "Count ⬆" },
    { value: "sortCountClick", key: "-1", label: "Count ⬇" },
  ];
  return (
    <>
      <div className={clsx(style.optionTool)}>
        <Select
          closeMenuOnSelect={false}
          components={animatedComponents}
          onChange={setSortQuery}
          isMulti
          options={options}
        />
      </div>
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
