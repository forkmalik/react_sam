import React from "react";
import humanStyle from "./Human.module.scss";

const Human = (props) => {
  return (
    <div className={humanStyle.human}>
      <img src={props.img_url} alt="" />
      <a href="#s">{props.name}</a>
    </div>
  );
};

export default Human;
