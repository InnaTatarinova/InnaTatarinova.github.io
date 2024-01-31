import React, {useRef } from "react";
import { Banner } from "../components/mainComponent/Banner/Banner";
import { Services } from "../components/mainComponent/Services/Services";
import { ServiceArea } from "../components/mainComponent/ServiceArea/ServiceArea";
import { Testimonial } from "../components/mainComponent/Testimonial/Testimonial";
import { Quote } from "../components/mainComponent/Quote/Quote";
import { MovingFormProvider } from "../context/MovingFormContext";

export const Home = () => {
  const resultRef = useRef(null);

  return (
    <MovingFormProvider>
      <div>
        <Banner resultRef={resultRef} />
        <Services ref={resultRef} />
        <Quote />
        <ServiceArea />
        <Testimonial />
      </div>
    </MovingFormProvider>
  );
};
