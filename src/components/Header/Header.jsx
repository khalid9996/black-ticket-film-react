import React from "react";
import "./header.scss";
import LOGO from "../../assets/logo.png";

const Header = () => {
  return (
    <div className="header__root">
      <div className="header__content">
        <img src={LOGO} alt="logo" />
        <h1>WHO LIKED US</h1>
      </div>
    </div>
  );
};

export default Header;
