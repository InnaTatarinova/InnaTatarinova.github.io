import React from "react";
import { ServiceList } from "./ServiceList";
import "./Services.scss"

export const ServicePageComponent = () => {
  return (
    <div className="servicesPageComponent">
      <h2 className="servicesPageComponent-title">Our Services</h2>
      <ServiceList/>
    </div>
  );
};
