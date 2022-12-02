import React, { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import clsx from "clsx";
import style from "./UserAccount.module.scss";
import EditUser from "../components/EditUser/EditUser";
import AddUser from "../components/AddUser/AddUser";
import userApi from "../../../../api/userApi";
const UserAccount = () => {
  const [user, setUser] = useState();
  const [action, setAction] = useState({
    isEdit: false,
    isAdd: false,
  });
  const { _id } = JSON.parse(window.localStorage.getItem("user"));

  useEffect(() => {
    const res = async () => {
      const data = await userApi.getUserById(_id);
      setUser(data);
    };
    if (_id) {
      res();
    } else {
      return (window.location.href = "/login");
    }
  }, []);
  const handleEdit = () => {
    setAction({ isEdit: !action.isEdit, isAdd: false });
  };
  const handleAdd = () => {
    setAction({ isEdit: false, isAdd: !action.isAdd });
  };

  return (
    <div className={clsx(style.main)}>
      {action.isEdit ? <EditUser handleEdit={handleEdit} user={user} /> : null}
      {action.isAdd ? <AddUser handleAdd={handleAdd} /> : null}
      <div className={clsx(style.header)}>
        <div>First Name</div>
        <div>Last Name</div>
        <div>User Name</div>
        <div>Email</div>
        <div>Tools</div>
      </div>
      <div className={clsx(style.data)}>
        <div>{user?.firstName || "Empty"}</div>
        <div>{user?.lastName || "Empty"}</div>
        <div>{user?.username || "Empty"}</div>
        <div>{user?.email || "Empty"}</div>
        <div className={clsx(style.button)}>
          <button onClick={() => setAction({ isDelete: false, isEdit: true })}>
            <FaEdit />
          </button>
          {/* <button onClick={() => handleDelete()}>
            <AiFillDelete />
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default UserAccount;
