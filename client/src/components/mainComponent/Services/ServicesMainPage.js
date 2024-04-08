import React from "react";
import "./ServicesComponent.scss";
import { forwardRef } from "react";
import { ServiceList } from "./ServiceList";

export const ServicesMainPage = forwardRef((props, ref) => {
  return (
    <div className="infoCards" ref={ref}>
      <h2 className="infoCard-title">WELCOME TO OUR MOVING WORLD!</h2>
      <ServiceList
        classNameForContainer="cardItem-container-ForMainPage"
        classNameForImg="cardItem-img-ForMainPage"
        classNameForText="cardItem-text-ForMainPage"
      />
    </div>
  );
});
