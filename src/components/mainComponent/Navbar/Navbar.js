import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ButtonComponent } from "../../elementsComponent/ButtonComponents/ButtonComponnet";
import "./Navbar.scss";
import "../Services/ServicesComponent.scss";
import { phoneNumber } from "../../../data/mainInfo";
import { ServiceList } from "../Services/ServiceList";

const logoFull = require("../../../assets/img/Logo_justImg.png");
// const logoDarkBlue = require("../../../assets/img/Logo_justImg_Mini.png");
// const logo = require("../../../assets/img/Logo_justImg_MiniBlue.png");
//  const logo = require("../../../assets/img/whiteLogoWithOutAnyColor.png");
const logo = require("../../../assets/img/whiteLogo.png");

const Navbar = () => {
  const [clickOnMenuStatus, setclickOnMenuStatus] = useState(false);
  const [button, setShowButton] = useState(true);
  const [visiblePhoneNumber, setVisiblePhoneNumber] = useState(false);
  const [showServiceType, setShowServiceType] = useState(false);

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

  //Show/hide menu list in small window
  const clickOnMenu = () => {
    setclickOnMenuStatus(!clickOnMenuStatus);
    setShowServiceType(false);
  };

  //close menulist after choosing some link
  const clickToCloseMenu = () => {
    setclickOnMenuStatus(false);
    setShowServiceType(false);
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

  const showServiceList = () => {
    setShowServiceType(!showServiceType);
  };

  useEffect(() => {
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
        <div className="phoneBtn" onClick={showPhoneNumber}>
          {!visiblePhoneNumber ? (
            <i className="bi bi-telephone-fill menuIcon biNavbar"></i>
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
              clickOnMenuStatus
                ? "bi bi-x-lg menuIcon biNavbar:"
                : "bi bi-list menuIcon biNavbar:"
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
          <li
            onClick={showServiceList}
            className={
              !showServiceType
                ? `nav-menu-li`
                : `nav-menu-li heightForServiceList`
            }
          >
            <>
              <div className="nav-menu-item">Services</div>
              <div onClick={clickToCloseMenu}>
                {showServiceType ? (
                  <ServiceList
                    classNameForList="infoCard-list-ForNavbar"
                    classNameForContainer="cardItem-container-ForNavbar"
                    classNameForText="cardItem-text-ForNavbar"
                    showImg="no"
                  />
                ) : null}
              </div>
            </>
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
              to="/"
              onClick={clickToCloseMenu}
              className="nav-menu-item"
            >
              Testimonial
            </Link>
          </li>
          <li className="nav-menu-li">
            <Link
              to="/contactUs"
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
