import React, { useContext, useState } from "react";
import "../FormForQuote/ElementsForQuote.scss";
import { SelectChoice } from "./SelectChoice";
import { MovingFormContext } from "../../../context/MovingFormContext";

export const BlockForSelectItem = (props) => {
  const [showSelectedList, setShowSelectedList] = useState(false);
  const {serviceType} = useContext(MovingFormContext);

  const openList = () => {
    setShowSelectedList(true);
  };

  return (
    <div className=" formQuoteInput zPosition3">
      <div className="chooseType" onClick={openList}>
        <div className="chooseName">
          {serviceType === null ? "" : `${serviceType.name}`}
        </div>
        <i className="bi bi-caret-down-fill biWidth"></i>
      </div>
      {showSelectedList ? <SelectChoice type={props.type} className="selectDropItem" showSelectForm={setShowSelectedList}/> : null}
    </div>
  );
};
