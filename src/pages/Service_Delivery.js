import React from 'react'
import { Poster } from '../components/mainComponent/Poster/Poster'
import { ServicePageInformation } from '../components/mainComponent/ServicePageInformation/ServicePageInformation'
import local from "../assets/img/ServicePhoto/delivery2.jpg";
import arrow from "../assets/img/poster/arrowRed.png";

export const Service_Delivery = () => {
  return (
    <>
    <Poster
      name="Delivery"
      srcMain={local}
      altMain="local"
      srcImg={arrow}
      altImg="arrow"
     
    />
    <ServicePageInformation id="delivery" quote="no" />
  </>
  )
}
