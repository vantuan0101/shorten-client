import React from "react";

const ExpireComponent = () => {
  return (
    <div style={{ marginTop: "100px", marginLeft: "20px" }}>
      <p>Phiên bản đăng nhập hết hạn. Vui lòng đăng nhập lại</p>
      <div style={{ display: "flex" }}>
        <a href="/">Reload</a>

        <a style={{ marginLeft: "20px" }} href="/login"></a>
      </div>
    </div>
  );
};

export default ExpireComponent;
