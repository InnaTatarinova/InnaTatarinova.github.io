import React from "react";
import "./ContactPageComponent.scss";

import { phoneNumber } from "../../../data/mainInfo";
import { email } from "../../../data/mainInfo";
import { address } from "../../../data/mainInfo";
import { FormForContact } from "../../elementsComponent/FormForContact/FormForContact";

export const ContactPageComponent = () => {
  return (
    <div className="componentStyle">
      <h2 className="titleStyle">You can find us: </h2>
      <div className="contactBlock">
        <h5>Hours of operation: </h5>
        <h5>8 AM : 9 PM Daily</h5>
      </div>
      <div className="contactBlock">
        <h3 className="redColor">Office:</h3>
        <h5>KL CARGO,</h5>
        <h5>{address}</h5>
        <h5>{phoneNumber}</h5>
      </div>
      <div className="contactBlock">
        <h3 className="redColor">Email:</h3>
        <h5>
          <a
            href={`mailto:${email}?subject=Mail from our Website&body=Some body text here`}
            className="emailLinkDark"
          >
            {email}
          </a>
        </h5>
      </div>
      <div className="map_block">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2876.9252471966233!2d-79.56067032346088!3d43.857378039200704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b28a707977289%3A0x6f532fb61418e7!2zMzAgSGVhdGhjbGlmZmUgRHIsIFdvb2RicmlkZ2UsIE9OIEw0SCAwSjksINCa0LDQvdCw0LTQsA!5e0!3m2!1suk!2sus!4v1709925001176!5m2!1suk!2sus"
          width="100%"
          height="350"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="form_contact">
        <h4 className="redColor">Don't hesitate to contact Us:</h4>
        <FormForContact />
      </div>
    </div>
  );
};
