import React, { useContext } from "react";
import { MovingFormContext } from "../../../../context/MovingFormContext";
import "./ResultQuote.scss";
import { ButtonComponent } from "../../ButtonComponents/ButtonComponnet";
import { Link } from "react-router-dom";

import { phoneNumber } from "../../../../data/mainInfo";

export const ResultQuote = () => {
  const { price } = useContext(MovingFormContext);

  const dialPhone =()=>{
    window.location.href = `tel://${phoneNumber}`
  }

  return (
    <div className="priceComponent">
      <div>Your total cost is</div>
      <div className="price">{price}$</div>
      <div className="price-explanation">
        This quote is excluding taxes and is only an estimated quote for the
        GTA.
      </div>
      <div className="proposedTocall-component">
        <div className="price-callUs">Like this </div>
        <div className="price-red">price?</div>
        <Link onClick={dialPhone}>
        <ButtonComponent
          btnSize="btn-small"
          btnBorder="btn-border-dark"
          btnColor="btn-red"
          btnForm="btn-circle"
          className="movingPhone"
        >
          <i className="bi bi-telephone"></i>
        </ButtonComponent>
        </Link>
      </div>
    </div>
  );
};
