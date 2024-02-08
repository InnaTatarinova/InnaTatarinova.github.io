import React from "react";
import "./ContactUs.scss";
import { FormForContact } from "../../elementsComponent/FormForContact/FormForContact";
import ReactWhatsappButton from "react-whatsapp-button";
import { Button } from "@react-email/components";

import { phoneNumber } from "../../../data/mainInfo";
import { email } from "../../../data/mainInfo";
import { address } from "../../../data/mainInfo";
import { countryCode } from "../../../data/mainInfo";
import { shortPhoneNumber } from "../../../data/mainInfo";

export const ContactUs = () => {
  return (
    <div className="contactUs-container">
      <h1 className="contactUs-title">Contact Us</h1>
      <div className="contact-block">
        <div className="contactInfo">
          <h2 className="contactInfoName">Phone:</h2>
          <h3 className="contactInfoValue">{ phoneNumber }</h3>
          <h2 className="contactInfoName">Email:</h2>
          <h3 className="contactInfoValue">{email}</h3>
          <h2 className="contactInfoName">Address:</h2>
          <h3 className="contactInfoValue">
            {address}
          </h3>
        </div>
        <div className="writeUs">
          <h2 className="contactInfoName">Form to contact us:</h2>
          <FormForContact />
        </div>

        <ReactWhatsappButton
          countryCode={countryCode}
          phoneNumber={shortPhoneNumber}
          animated
          // onClick={onSubmit}
        />
      </div>
    </div>
  );
};

