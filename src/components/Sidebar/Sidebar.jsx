import React, { Children } from "react";
import "./sidebar.scss";
import LOGO from "../../assets/logo.png";

const Sidebar = ({ children }) => {
  return (
    <>
      <div class="wrapper">
        <input
          type="checkbox"
          id="menuToggler"
          class="input-toggler"
          value="1"
          autofocus="true"
        />
        <label
          for="menuToggler"
          id="menuTogglerLabel"
          class="menu-toggler"
          role="button"
          aria-pressed="false"
          aria-expanded="false"
          aria-label="Navigation button"
        >
          <span class="menu-toggler__line"></span>
          <span class="menu-toggler__line"></span>
          <span class="menu-toggler__line"></span>
        </label>
        <nav
          id="sidebar"
          class="sidebar"
          role="navigation"
          aria-labelledby="menuTogglerLabel"
          aria-hidden="true"
        >
          <div className="sidebar__content__div">
            <div className="logo__container">
              <img src={LOGO} alt="logo" />
            </div>
            <span className="seperator"></span>

            {/* Menu Links */}
            <ul
              id="menubar"
              class="menu"
              role="menubar"
              aria-orientation="vertical"
            >
              <li class="menu__item" role="none">
                <a class="menu__link" href="#" role="menuitem" tabindex="-1">
                  Portfolio
                </a>
              </li>
              <li class="menu__item" role="none">
                <a class="menu__link" href="#" role="menuitem" tabindex="-1">
                  Awards
                </a>
              </li>
              <li class="menu__item" role="none">
                <a class="menu__link" href="#" role="menuitem" tabindex="-1">
                  Team
                </a>
              </li>
              <li class="menu__item" role="none">
                <a class="menu__link" href="#" role="menuitem" tabindex="-1">
                  Milestones
                </a>
              </li>
              <li class="menu__item" role="none">
                <a class="menu__link" href="#" role="menuitem" tabindex="-1">
                  Clients
                </a>
              </li>
              <li class="menu__item" role="none">
                <a class="menu__link" href="#" role="menuitem" tabindex="-1">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </nav>
        {/* <main>{children}</main> */}
      </div>
    </>
  );
};

export default Sidebar;
