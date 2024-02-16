import React from "react";
import { Poster } from "../components/mainComponent/Poster/Poster";
import { Quote } from "../components/mainComponent/Quote/Quote";
import price from "../assets/img/aboutUs/consultation.jpg";
import { MovingFormProvider } from "../context/MovingFormContext";


export const Price = () => {
  return (
    <MovingFormProvider>
        <div className="component">
            <Quote />
        </div>
      
    </MovingFormProvider>
  );
};
