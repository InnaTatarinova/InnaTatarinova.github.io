import React, { useEffect } from 'react'
import { Banner } from '../components/Banner/Banner';



export const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
 }, []);
  return (
    <div>
      <Banner/>
      {/* <InfoCard/> */}
      </div>
  )
}
