import React, { useState } from "react";
import { phoneNumber } from "../../../data/mainInfo";
import "./ContactUsForDetailed.scss";
import { FormForContact } from "../FormForContact/FormForContact";

export const ContactUsForDetailed = (props) => {
  const [showForm, setShowForm] = useState(false);
  const [wasSentInfo, setWasSentInfo] = useState(false);

  const phoneNumberDial = () => {
    window.location.href = `tel://${phoneNumber}`;
  };

  const openFormForContactUs = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="contactUsForDetails getEstimQuoteContainer">
      For <span className="highlight">{props.text}</span> please call us{" "}
      <span className="highlight" onClick={phoneNumberDial}>
        {phoneNumber}
      </span>{" "}
      or contact us throught
      <span> </span>
      <span className="highlight" onClick={openFormForContactUs}>
        Contact form
      </span>
      <div className="sectionForForm">
        {showForm ? (
          <FormForContact
            setShowForm={setShowForm}
            setWasSentInfo={setWasSentInfo}
          />
        ) : null}

        {wasSentInfo ? (
          <p className="infoSuccess">
            Your message was sent. We will call you back.
          </p>
        ) : null}
      </div>
    </div>
  );
};
