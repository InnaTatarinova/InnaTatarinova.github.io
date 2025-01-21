import React from "react";
import { TruckSize } from "../FormElementForQuote/TruckSize";
import { MoversQuantity } from "../FormElementForQuote/MoversQuantity";
import { Hours } from "../FormElementForQuote/Hours";

export const ShortForm = (props) => {
  return (
    <div className={props.gridName}>
      <div className="truckSize">
        <TruckSize />
      </div>
      <div className="movers">
        <MoversQuantity />
      </div>
      <div className="hours">
        <Hours />
      </div>
    </div>
  );
};
