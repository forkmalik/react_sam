import React from "react";
import infoStyle from "./ProfileInfo.module.scss";

const ProfileInfo = () => {
  return (
    <div>
      <img
        src="https://www.gettyimages.pt/gi-resources/images/Homepage/Hero/PT/PT_hero_42_153645159.jpg"
        alt=""
      />
      <div className={infoStyle.info}>ava + description</div>
    </div>
  );
};


export default ProfileInfo;