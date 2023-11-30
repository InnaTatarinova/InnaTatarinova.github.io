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
    if (window.innerWidth < 450) {
      setVisiblePhoneNumber(false);
    }
  };

  window.addEventListener("resize", showButton);

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
    if (window.innerWidth > 450) {
      window.location.href = "tel:// +1 234 567 89 98";
      setVisiblePhoneNumber(!visiblePhoneNumber);
    }
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
        <div className="menuBtn" onClick={showPhoneNumber}>
          {!visiblePhoneNumber ? (
            <i className="bi bi-telephone"></i>
          ) : (
            <Link className="phoneNumberStyle">
              <ButtonComponent
                btnStyle="btn-transparent"
                btnSize="btn-large"
                btnColor="btn-dark"
                btnBorder="btn-border-light"
                className="visiblePhoneNumber"
              >
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
          <Link className="phoneNumberStyle showInSmallWind">
            <ButtonComponent
              btnStyle="btn-transparent"
              btnSize="btn-large"
              btnColor="btn-dark"
              btnBorder="btn-border-light"
              className="visiblePhoneNumber"
              onClick={() =>  window.location.href = "+1 234 567 89 98"}
            >
              +1 234 567 89 98
            </ButtonComponent>
          </Link>
        )}
      </div>
    </div>
  );
};
export default Navbar;
