import React, { useEffect } from "react";
import { Poster } from "../components/mainComponent/Poster/Poster";
import { ServicePageInformation } from "../components/mainComponent/ServicePageInformation/ServicePageInformation";
import local from "../assets/img/ServicePhoto/packing.jpg";
import arrow from "../assets/img/poster/arrowRed.png";


export const Service_Packing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Poster
        name="Packing"
        srcMain={local}
        altMain="local"
        srcImg={arrow}
        altImg="arrow"
        classNameH3="fourthColor"
      />
      <ServicePageInformation id="packing" quote="no" />
    </>
  );
};
