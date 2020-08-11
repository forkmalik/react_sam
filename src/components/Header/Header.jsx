import React from "react";
import hStryle from './Header.module.scss';

const Header = () => {
  return (
    <header className={hStryle.header}>
      <img
        src="https://s2.logaster.com/static/v3/img/products/logo.png"
        alt=""
      />
    </header>
  );
};

export default Header;
