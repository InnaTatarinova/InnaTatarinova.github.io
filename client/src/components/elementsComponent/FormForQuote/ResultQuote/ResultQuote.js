import React, { useContext, useState } from "react";
import { MovingFormContext } from "../../../../context/MovingFormContext";
import "./ResultQuote.scss";
import { ButtonComponent } from "../../ButtonComponents/ButtonComponnet";
import { Link } from "react-router-dom";

import { phoneNumber } from "../../../../data/mainInfo";
import { FormForOrder } from "../../FormForOrder/FormForOrder";


export const ResultQuote = (props) => {
  const { price } = useContext(MovingFormContext);
  const [openOnlineForm, setOpenOnlineForm] = useState(false);

  const dialPhone = () => {
    window.location.href = `tel://${phoneNumber}`;
  };

  const openOnlineOrderform = (e) => {
    e.preventDefault();
    setOpenOnlineForm(true);
  };

  return (
    <div className="priceComponent">
      <div>Your total cost is</div>
      <div className="price">{price}$</div>
      <div className="price-explanation">
        This quote is excluding taxes and is only an estimated quote for the
        GTA.
      </div>
      <div className="proposedToOnlineForm-component">
        <div className="price-callUs">Like this </div>
        <div className="price-red">price?</div>
        <ButtonComponent
          onClick={openOnlineOrderform}
          className="openOnlineOrderform"
        >
          Order
        </ButtonComponent>
      </div>
      {openOnlineForm ? (
        <FormForOrder setOpenOnlineForm={setOpenOnlineForm} setValidForm={props.setValidForm} setOpenMessageForm={props.setOpenMessageForm} setMessage={props.setMessage}/>
      ) : null}
      <div className="proposedTocall-component">
        <div className="price-callUs">
          <div> Have any questions or need further details?</div>
          <Link onClick={dialPhone}>
            <ButtonComponent className="movingPhone">
              <i className="bi bi-telephone telephoneMoving"></i>
            </ButtonComponent>
          </Link>
        </div>
      </div>
    </div>
  );
};
