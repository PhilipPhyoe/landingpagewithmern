import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../components/Header.css";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import Button from "./Button";
import {
  faBars,
  faChevronUp,
  faMailForward,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const showMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };
  const ToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div>
      <div className="nav-bar">
        <div>
          <a href="#">
            <img className="logo" src="/images/logo final.jpg" />
          </a>
        </div>
        <div className="nav-bar-right">
          <div
            className={`header-menu ${mobileMenu ? "show" : ""}`}
            onClick={showMobileMenu}
          >
            <li className="menu-list">
              <Link to="/" className="menu-text" href="#">
                Home
              </Link>
            </li>
            <li className="menu-list">
              <Link to="/about" className="menu-text" href="#">
                About Us
              </Link>
            </li>
            <li className="menu-list">
              <Link to="/services" className="menu-text" href="#">
                Our Services
              </Link>
            </li>
            <li className="menu-list">
              <Link to="/contact" className="menu-text" href="#">
                Contact Us
              </Link>
            </li>
          </div>
          <div className="small-menu">
            <FontAwesomeIcon icon={faBars} onClick={showMobileMenu} />
          </div>
          <a href="https://www.facebook.com/profile.php?id=100063921074901">
            <FontAwesomeIcon icon={faFacebookF} className="social-icon" />
          </a>
          <div className="header-button">
            <Button icon={faMailForward}>Contact Now</Button>
          </div>
        </div>
      </div>
      <div className="to-top">
        <FontAwesomeIcon icon={faChevronUp} onClick={ToTop} />
      </div>
    </div>
  );
};

export default Header;
