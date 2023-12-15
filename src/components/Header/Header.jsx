import React from "react";
import "./header.scss";
import LOGO from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Header = ({ title }) => {
  let heading = "";
  if (title === "/portfolio") {
    heading = "PORTFOLIO";
  } else if (title === "/awards") {
    heading = "WHO LIKED US";
  } else if (title === "/team") {
    heading = "WHO WE ARE";
  } else if (title === "/milestones") {
    heading = "TESTIMONIALS";
  } else if (title === "/clients") {
    heading = "WHO LIKED US";
  } else if (title === "/contact") {
    heading = "CONTACT US";
  }
  return (
    <div className="header__root">
      <div className="header__content">
        <Link to="/">
          <img src={LOGO} alt="logo" />
        </Link>
        <h1>{heading}</h1>
      </div>
    </div>
  );
};

export default Header;
