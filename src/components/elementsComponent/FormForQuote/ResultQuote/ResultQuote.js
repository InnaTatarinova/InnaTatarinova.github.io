import React, { useContext } from "react";
import { MovingFormContext } from "../../../../context/MovingFormContext";
import "./ResultQuote.scss";
import { ButtonComponent } from "../../ButtonComponents/ButtonComponnet";

export const ResultQuote = (props) => {
  const { price } = useContext(MovingFormContext);

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
        <ButtonComponent
          btnSize="btn-small"
          btnBorder="btn-border-dark"
          btnColor="btn-red"
          btnForm="btn-circle"
          className="movingPhone"
        >
          <i className="bi bi-telephone"></i>
        </ButtonComponent>
      </div>
    </div>
  );
};
