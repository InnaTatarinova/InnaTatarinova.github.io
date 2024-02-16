import React from 'react'
import { Poster } from '../components/mainComponent/Poster/Poster'
import { ServicePageInformation } from '../components/mainComponent/ServicePageInformation/ServicePageInformation'
import local from "../assets/img/ServicePhoto/junk.jpg";
import arrow from "../assets/img/poster/arrowRed.png";

export const Service_Junk = () => {
  return (
    <>
    <Poster
      name="Junk Removal"
      srcMain={local}
      altMain="local"
      srcImg={arrow}
      altImg="arrow"
    />
    <ServicePageInformation id="junk" quote="no" />
  </>
  )
}
