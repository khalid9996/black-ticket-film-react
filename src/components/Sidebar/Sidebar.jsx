import React, { useState, Children, useRef, useEffect } from "react";
import "./sidebar.scss";
import LOGO from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Sidebar = ({ children }) => {
  const [isChecked, setIsChecked] = useState(false);

  ///////////////////////////////////////////////////////
  ////////// CODE TO DETECT OUTSIDE CLICK ///////////////

  const sidebarRef = useRef(null);
  const handleOutsideClick = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      // Click outside the sidebar, close it
      setIsChecked(false);
    }
  };
  useEffect(() => {
    // Add a click event listener to the document
    document.addEventListener("click", handleOutsideClick);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  //////////////////////////////////

  return (
    <>
      <div class="wrapper" ref={sidebarRef}>
        <input
          type="checkbox"
          id="menuToggler"
          class="input-toggler"
          checked={isChecked}
          value="1"
          autofocus="true"
        />
        <label
          onClick={() => setIsChecked(!isChecked)}
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
              <img
                src={
                  LOGO
                    ? LOGO
                    : "https://www.blackticketfilms.com/wp-content/themes/btf/images/logo.png"
                }
                alt="logo"
              />
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
                <Link
                  class="menu__link"
                  onClick={() => setIsChecked(!isChecked)}
                  to="/"
                  role="menuitem"
                  tabindex="-1"
                >
                  Home
                </Link>
              </li>
              <li class="menu__item" role="none">
                <Link
                  class="menu__link"
                  onClick={() => setIsChecked(!isChecked)}
                  to="/portfolio"
                  role="menuitem"
                  tabindex="-1"
                >
                  Portfolio
                </Link>
              </li>
              <li class="menu__item" role="none">
                <Link
                  class="menu__link"
                  onClick={() => setIsChecked(!isChecked)}
                  to="awards"
                  role="menuitem"
                  tabindex="-1"
                >
                  Awards
                </Link>
              </li>
              <li class="menu__item" role="none">
                <Link
                  class="menu__link"
                  onClick={() => setIsChecked(!isChecked)}
                  to="/team"
                  role="menuitem"
                  tabindex="-1"
                >
                  Team
                </Link>
              </li>
              <li class="menu__item" role="none">
                <Link
                  class="menu__link"
                  onClick={() => setIsChecked(!isChecked)}
                  to="/milestones"
                  role="menuitem"
                  tabindex="-1"
                >
                  Milestones
                </Link>
              </li>
              <li class="menu__item" role="none">
                <Link
                  class="menu__link"
                  onClick={() => setIsChecked(!isChecked)}
                  to="/clients"
                  role="menuitem"
                  tabindex="-1"
                >
                  Clients
                </Link>
              </li>
              <li class="menu__item" role="none">
                <Link
                  class="menu__link"
                  onClick={() => setIsChecked(!isChecked)}
                  to="/contact"
                  role="menuitem"
                  tabindex="-1"
                >
                  Contact Us
                </Link>
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
