import React, { useState } from "react";
import clsx from "clsx";
import style from "./EditUser.module.scss";
import userApi from "../../../../../api/userApi";
const EditUser = ({ user, handleEdit }) => {
  console.log(user);
  const [dataUser, setDataUser] = useState({
    firstName: user.firstName || "",
    lastName: user.lastName || "",
    username: user.username || "",
    email: user.email || "",
  });
  const handleChangeEdit = (e) => {
    setDataUser({
      ...dataUser,
      [e.target.name]: e.target.value,
    });
  };
  // console.log(dataUser);

  const handleSubmitEdit = async () => {
    try {
      const res = await userApi.updateUserById(user._id, { ...dataUser });
      // console.log(res);
      window.localStorage.setItem("user", JSON.stringify(res));
      handleEdit();
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={clsx(style.main)}>
      <div className={clsx(style.header)}>
        <h3>EditUser</h3>
        <div onClick={() => handleEdit()}>Close</div>
      </div>
      <div className={clsx(style.info)}>
        <div className={clsx(style.user)}>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            value={dataUser.firstName}
            name="firstName"
            id="firstName"
            placeholder={dataUser.firstName}
            onChange={(e) => handleChangeEdit(e)}
          />
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            value={dataUser.lastName}
            name="lastName"
            id="lastName"
            placeholder={dataUser.lastName}
            onChange={(e) => handleChangeEdit(e)}
          />
          <label htmlFor="username">User Name</label>

          <input
            type="text"
            value={dataUser.username}
            name="username"
            id="username"
            placeholder={dataUser.username}
            onChange={(e) => handleChangeEdit(e)}
          />
          <label htmlFor="email">Email</label>

          <input
            type="text"
            value={dataUser.email}
            name="email"
            id="email"
            placeholder={dataUser.email}
            onChange={(e) => handleChangeEdit(e)}
          />
        </div>
        <div className={clsx(style.button)} onClick={() => handleSubmitEdit()}>
          Submit
        </div>
      </div>
    </div>
  );
};

export default EditUser;
