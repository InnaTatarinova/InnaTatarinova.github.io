import React from "react";
import "./ContactUs.scss";
import { FormForContact } from "./FormForContact";

export const ContactUs = () => {
  return (
    <div className="contactUs-container">
      <h1 className="contactUs-title">Contact Us</h1>
      <div className="contact-block">
        <div className="contactInfo">
            <h2 className="contactInfoName">Phone:</h2>
            <h3 className="contactInfoValue">+1 234 567 89 98</h3>
            <h2 className="contactInfoName">Email:</h2>
            <h3 className="contactInfoValue">ourEmail@gmail.com</h3>
            <h2 className="contactInfoName">Address:</h2>
            <h3 className="contactInfoValue">57 OurAdress , Toronto, ON, Canada, M9B 0B2</h3>
        </div>
        <div className="writeUs">
          <h2 className="contactInfoName">Form to contact us:</h2>
          <FormForContact />
        </div>
      </div>
    </div>
  );
};
