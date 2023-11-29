import React, { useEffect, useState } from "react";
import { ButtonComponent } from "../../elementComponents/ButtonComponents/ButtonComponnet";
import "./Banner.scss";

const banner = require("../../assets/img/truckResiz.png");

export const Banner = () => {
  return (
    <div className="banner-container">
      <h1 className="banner-h1">We promise you will enjoy moving</h1>
      <div className="banner-img">
        <img src={banner} alt="truck" />
        <div className="askPriceStyle">
          <h2>Want to know approximate price?</h2>
          <ButtonComponent btnSize="btn-large" btnColor="btn-light" btnBorder="btn-border-dark">Click here</ButtonComponent>
        </div>
      </div>
    </div>
  );
};
