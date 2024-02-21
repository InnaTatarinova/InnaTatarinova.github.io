import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ButtonComponent } from "../../elementsComponent/ButtonComponents/ButtonComponnet";
import "./Navbar.scss";

import { phoneNumber } from "../../../data/mainInfo";

const logoFull = require("../../../assets/img/Logo_justImg.png");
// const logoDarkBlue = require("../../../assets/img/Logo_justImg_Mini.png");
// const logo = require("../../../assets/img/Logo_justImg_MiniBlue.png");
//  const logo = require("../../../assets/img/whiteLogoWithOutAnyColor.png");
const logo = require("../../../assets/img/whiteLogo.png");

const Navbar = () => {
  const [clickOnMenuStatus, setclickOnMenuStatus] = useState(false);
  const [button, setShowButton] = useState(true);
  const [visiblePhoneNumber, setVisiblePhoneNumber] = useState(false);
  const [changeNavbar, setChangeNavbar]=useState(false);

  //show btn with phoneNumber
  const showButton = () => {
    if (window.innerWidth <= 1024) {
      setShowButton(false);
    } else {
      setShowButton(true);
    }
    if (window.innerWidth < 480) {
      setVisiblePhoneNumber(false);
    }
  };

  window.addEventListener("resize", showButton);
  window.onscroll = function () {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
      setChangeNavbar(true);
    } else {
      setChangeNavbar(false);
    }
  };

  //Show/hide menu list in small window
  const clickOnMenu = () => {
    setclickOnMenuStatus(!clickOnMenuStatus);
  };

  //close menulist after choosing some link
  const clickToCloseMenu = () => {
    setclickOnMenuStatus(false);
  };

  //Show phone number in small window after click on phone icon
  const showPhoneNumber = () => {
    if (window.innerWidth > 480) {
      setVisiblePhoneNumber(!visiblePhoneNumber);
    }
    phoneNumberDial();
  };

  const phoneNumberDial = () => {
    window.location.href = `tel://${phoneNumber}`;
  };

  useEffect(() => {
    showButton();
  }, []);

  return (
    <div>
      <div className={!changeNavbar ? "nav-block" : "nav-block nav-block-Scroll"}>
        <div className="nav-logo">
          <Link to="/">
            <img src={logo} alt="logo" className="nav-img" />
          </Link>
        </div>
        <div className="phoneBtn" onClick={showPhoneNumber}>
          {!visiblePhoneNumber ? (
            <i className="bi bi-telephone-fill menuIcon"></i>
          ) : (
            <Link className="phoneNumberStyle">
              <ButtonComponent
                btnStyle="btn-transparent"
                btnSize="btn-large"
                btnColor="btn-dark"
                btnBorder="btn-border-light"
                className="visiblePhoneNumber"
              >
                {phoneNumber}
              </ButtonComponent>
            </Link>
          )}
        </div>

        <div onClick={clickOnMenu} className="menuBtn">
          <i
            className={
              clickOnMenuStatus ? "bi bi-x-lg menuIcon" : "bi bi-list menuIcon"
            }
          ></i>
        </div>

        <ul className={clickOnMenuStatus ? "nav-menu active" : "nav-menu"}>
          <li className="nav-menu-li">
            <Link
              to="/about"
              onClick={clickToCloseMenu}
              className="nav-menu-item"
            >
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
              to="/quote"
              onClick={clickToCloseMenu}
              className="nav-menu-item"
            >
              Price
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
          <li className="nav-menu-li">
            <Link
              to="/products"
              onClick={clickToCloseMenu}
              className="nav-menu-item"
            >
              Contact us
            </Link>
          </li>
        </ul>

        {button && (
          <Link className="phoneNumberStyle">
            <ButtonComponent
              btnStyle="btn-transparent"
              btnSize="btn-large"
              btnColor="btn-dark"
              btnBorder="btn-border-light"
              className="visiblePhoneNumber"
            >
              {phoneNumber}
            </ButtonComponent>
          </Link>
        )}
      </div>
    </div>
  );
};
export default Navbar;
