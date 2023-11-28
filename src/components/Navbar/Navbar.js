import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ButtonComponent } from "../../elementComponents/ButtonComponents/ButtonComponnet";
import "./Navbar.scss";

const logo = require("../../assets/img/Logo_justImg.png");

const Navbar = () => {
  const [clickOnMenuStatus, setclickOnMenuStatus] = useState(false);
  const [button, setShowButton] = useState(true);
  const [visiblePhoneNumber, setVisiblePhoneNumber] = useState(false);

  //show btn with phoneNumber
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setShowButton(false);
    } else {
      setShowButton(true);
    }
  };

  window.addEventListener("resize", showButton);

  //Show/hide menu list in small window
  const clickOnMenu = () => {
    setclickOnMenuStatus(!clickOnMenuStatus);
    setVisiblePhoneNumber(!visiblePhoneNumber);
  };

  //close menulist after choosing some link
  const clickToCloseMenu = () => {
    setclickOnMenuStatus(false);
  };

  //Show phone number in small window after click on phone icon
  const showPhoneNumber = () => {
    setVisiblePhoneNumber(!visiblePhoneNumber);
  };

  useEffect(() => {
    setVisiblePhoneNumber(!visiblePhoneNumber);
    showButton();
  }, []);

  return (
    <div>
      <div className="nav-block">
        <div className="nav-logo">
          <Link to="/">
            <img src={logo} alt="logo" className="nav-img" />
          </Link>
        </div>
        <div className="menuBtn" onClick={showPhoneNumber}>
          {visiblePhoneNumber ? (
            <i className="bi bi-telephone"></i>
          ) : (
            <Link
              href="tel:+1123-456-7890"
              className="phoneNumberStyle showInSmallWind"
            >
              <ButtonComponent btnStyle="btn-outline-light" btnSize="btn-large">
                +1 234 567 89 98
              </ButtonComponent>
            </Link>
          )}
        </div>

        <div onClick={clickOnMenu} className="menuBtn">
          <i className={clickOnMenuStatus ? "bi bi-x-lg" : "bi bi-list"}></i>
        </div>

        <ul className={clickOnMenuStatus ? "nav-menu active" : "nav-menu"}>
          <li className="nav-menu-li">
            <Link to="/" onClick={clickToCloseMenu} className="nav-menu-item">
              About us
            </Link>
          </li>
          <li className="nav-menu-li">
            <Link
              to="/services"
              onClick={clickToCloseMenu}
              className="nav-menu-item"
            >
              Services
            </Link>
          </li>
          <li className="nav-menu-li">
            <Link
              to="/products"
              onClick={clickToCloseMenu}
              className="nav-menu-item"
            >
              Testimonial
            </Link>
          </li>
          <li className="nav-menu-li">
            <Link
              to="/products"
              onClick={clickToCloseMenu}
              className="nav-menu-item"
            >
              Price
            </Link>
          </li>
        </ul>

        {button && (
          <Link
            href="tel:+1123-456-7890"
            className="phoneNumberStyle showInSmallWind"
          >
            <ButtonComponent btnStyle="btn-outline-dark" btnSize="btn-large">
              +1 234 567 89 98
            </ButtonComponent>
          </Link>
        )}
      </div>
    </div>
  );
};
export default Navbar;
