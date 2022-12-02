import React, { Fragment, useEffect, useState } from "react";
import userApi from "../../../../../api/userApi";
import AddUser from "../AddUser/AddUser";
import EditUser from "../EditUser/EditUser";
import clsx from "clsx";
import style from "../../UserAccount/UserAccount.module.scss";
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import appApi from "../../../../../api/appApi";
const AdminAccount = () => {
  const [user, setUser] = useState([]);
  const [editUser, setEditUser] = useState();
  const [action, setAction] = useState({
    isEdit: false,
    isAdd: false,
  });
  const { role } = JSON.parse(window.localStorage.getItem("user"));
  useEffect(() => {
    const res = async () => {
      const data = await userApi.getAll();
      setUser(data);
    };
    if (role === "admin") {
      res();
    } else {
      window.location.href = "/unauthorized";
    }
  }, []);
  const handleEdit = (item) => {
    setEditUser(item);
    setAction({ isEdit: !action.isEdit, isAdd: false });
  };
  const handleAdd = () => {
    setAction({ isEdit: false, isAdd: !action.isAdd });
  };
  const handleDelete = async (id) => {
    try {
      await userApi.deletedUserById(id);
    } catch (error) {
      console.log(error);
    }
  };
  const handleDisableUser = async (id) => {
    try {
      const res = await appApi.disableUser({ id });
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  console.log(user);
  return (
    <div className={clsx(style.main)}>
      {action.isEdit ? (
        <EditUser handleEdit={handleEdit} user={editUser} />
      ) : null}
      {action.isAdd ? <AddUser handleAdd={handleAdd} /> : null}
      <div
        className={clsx(style.header)}
        style={{ gridTemplateColumns: "repeat(5,1fr) 200px" }}
      >
        <div>First Name</div>
        <div>Last Name</div>
        <div>User Name</div>
        <div>Email</div>
        <div>Role</div>
        <div>Tools</div>
      </div>
      <div
        className={clsx(style.data)}
        style={{ gridTemplateColumns: "repeat(5,1fr) 200px" }}
      >
        {user?.map((item) => (
          <Fragment key={item._id}>
            <div>{item?.firstName || "Empty"}</div>
            <div>{item?.lastName || "Empty"}</div>
            <div>{item?.username || "Empty"}</div>
            <div>{item?.email || "Empty"}</div>
            <div>{item?.role || "Empty"}</div>
            <div className={clsx(style.button)}>
              <button onClick={() => handleEdit(item)}>
                <FaEdit />
              </button>
              <button onClick={() => handleDelete(item._id)}>
                <AiFillDelete />
              </button>
              <button
                style={{ fontSize: "8px" }}
                onClick={() => handleDisableUser(item._id)}
              >
                Disable
              </button>
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default AdminAccount;
