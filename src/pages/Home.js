import React, { useEffect } from 'react'
import { Banner } from '../components/Banner/Banner';
import { AboutUs } from '../components/AboutUs/AboutUs';
import { Services } from '../components/Services/Services';



export const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
 }, []);
  return (
    <div>
      <Banner/>
      <Services/>
      <AboutUs/>
      {/* <InfoCard/> */}
      </div>
  )
}
