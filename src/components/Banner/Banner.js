import React, { useEffect, useState } from "react";
import { ButtonComponent } from "../../elementComponents/ButtonComponents/ButtonComponnet";
import "./Banner.scss";

const banner = require("../../assets/img/truckResize.png");
const bannerLogo = require("../../assets/img/truckLOGO.png");

export const Banner = () => {
  const [smallWindow, setSmallWindow] = useState(false);
    const [show, setShow] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);


  const changePhotoTruck = () => {
    if (window.innerWidth <= 768) {
      setSmallWindow(true);
    } else {
      setSmallWindow(false);
    }
  };

  window.addEventListener("resize",changePhotoTruck);

  useEffect(()=>{
   changePhotoTruck();
  },[]);

  useEffect(() => {
     
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setShow(
        (prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) ||
          currentScrollPos < 10
      );
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    // className="banner-container"
    <div className={show ? 'banner-container' : 'hidden'}>
      {/* //  className={`banner-container ${show && "hidden"}` */}
      <h1 className="banner-h1">We promise you will enjoy moving </h1>

      <div className="banner-img">
        {smallWindow ? (
          <img src={bannerLogo} alt="truck" />
        ) : (
          <img src={banner} alt="truck" />
        )}
        <div className="askPriceStyle">
          <h2>Want to know approximate price?</h2>
          <ButtonComponent
            btnSize="btn-large"
            btnColor="btn-light"
            btnBorder="btn-border-dark"
          >
            Click here
          </ButtonComponent>
        </div>
      </div>
    </div>
  );
};
