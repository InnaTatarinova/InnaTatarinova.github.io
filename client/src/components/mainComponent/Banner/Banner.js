import React, { useEffect, useState } from "react";
import "./Banner.scss";
import { FormForStartQuoteBanner } from "../../elementsComponent/FormForQuote/FormForStartQuoteBanner";

const banner = require("../../../assets/img/whiteTruckResize.png");
const bannerLogo = require("../../../assets/img/truckWithSmallLogoResize.png");

export const Banner = ({ resultRef }) => {
  const [smallWindow, setSmallWindow] = useState(false);

  const changePhotoTruck = () => {
    if (window.innerWidth <= 1024) {
      setSmallWindow(true);
    } else {
      setSmallWindow(false);
    }
  };

  window.addEventListener("resize", changePhotoTruck);

  const scrollDown = (e) => {
    e.preventDefault();
    resultRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    changePhotoTruck();
  }, []);

  return (
    <div className="banner-container">
      <h1 className="banner-h1">We promise you will enjoy moving </h1>
      <div className="banner-img-block">
        <div className="askPriceStyle">
          <FormForStartQuoteBanner />
        </div>
        <div className="banner-img">
          <div className="car"></div>
          <div className="wheel">
            <div className="wheel2"></div>
            <div className="wheel1"></div>
            
          </div>
        </div>

        <div className="scroll-btn" onClick={scrollDown}>
          <i className="bi bi-chevron-down"></i>
        </div>
      </div>
    </div>
  );
};
