import React from "react";
import nStyle from "./Navbar.module.scss";
import { NavLink } from "react-router-dom";
import Friends from "./Friends/Friends";

const Navbar = (props) => {
  return (
    <nav className={nStyle.nav}>
      <div>
        <NavLink
          to="/profile"
          className={nStyle.item}
          activeClassName={nStyle.activeLink}
        >
          Profile
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/dialogs"
          className={nStyle.item}
          activeClassName={nStyle.activeLink}
        >
          Messages
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/news"
          className={nStyle.item}
          activeClassName={nStyle.activeLink}
        >
          News
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/music"
          className={nStyle.item}
          activeClassName={nStyle.activeLink}
        >
          Music
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/settings"
          className={nStyle.item}
          activeClassName={nStyle.activeLink}
        >
          Settings
        </NavLink>
      </div>
      <Friends friends={props.friends} />
    </nav>
  );
};

export default Navbar;
//36 was