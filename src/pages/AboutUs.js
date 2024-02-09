import React from 'react'
import { Poster } from '../components/mainComponent/Poster/Poster'
import photoImg from "../assets/img/poster/aboutUs.jpg"
import arrow from "../assets/img/poster/arrowBlue.png"

export const AboutUs = () => {
  return (
    <div>
        <Poster name="About KL CARGO" srcMain={photoImg} altMain="aboutUs" srcImg={arrow} altImg="arrow"/>
    </div>
  )
}
