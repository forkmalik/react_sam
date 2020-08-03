import React from "react";
import friendsStyle from "./Friends.module.css";
import Human from "./Human/Human";
import { NavLink } from "react-router-dom";

const Friends = (props) => {
  let friendsElem = props.friends.map((f) => (
    <Human img={f.img_url} name={f.name} />
  ));
  return (
    <div className={friendsStyle.friends}>
      <NavLink to="/friends">Friends</NavLink>
      {friendsElem}
    </div>
  );
};

export default Friends;
