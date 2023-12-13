import React, { useEffect, useRef } from 'react'
import { Banner } from '../components/Banner/Banner';
import { AboutUs } from '../components/AboutUs/AboutUs';
import { Services } from '../components/Services/Services';
import { ServiceArea } from '../components/ServiceArea/ServiceArea';
import { Testimonial } from '../components/Testimonial/Testimonial';
import { ContactUs } from '../components/ContactUs/ContactUs';



export const Home = () => {
  const resultRef = useRef(null);
  return (
    <div>
      <Banner resultRef={resultRef}/>
      <Services ref={resultRef}/>
      <ServiceArea/>
      <Testimonial/>
      <ContactUs/>
      {/* <AboutUs/> */}
      {/* <InfoCard/> */}
      </div>
  )
}
