import React, { useEffect } from "react";
import { Quote } from "../components/mainComponent/Quote/Quote";
import { MovingFormProvider } from "../context/MovingFormContext";

export const Price = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <MovingFormProvider>
      <div className="componentStyle">
        <Quote />
      </div>
    </MovingFormProvider>
  );
};
