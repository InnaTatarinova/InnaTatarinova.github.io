import React from "react";
import { Poster } from "../components/mainComponent/Poster/Poster";
import photoImg from "../assets/img/poster/aboutUs.jpg";
import arrow from "../assets/img/poster/arrowBlue.png";
import { AboutUsComponent } from "../components/mainComponent/AboutUsComponent/AboutUsComponent";
import { MainContextFormProvider } from "../context/MainContext";

export const AboutUs = () => {
  return (
    <MainContextFormProvider>
      <Poster
        name="About KL CARGO"
        srcMain={photoImg}
        altMain="aboutUs"
        srcImg={arrow}
        altImg="arrow"
      />
      <AboutUsComponent />
    </MainContextFormProvider>
  );
};
