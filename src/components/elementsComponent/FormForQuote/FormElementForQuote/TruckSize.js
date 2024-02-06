import React, { useContext } from "react";
import { ItemForChoose } from "../ElementForFormQuote/ItemForChoose";
import { MovingFormContext } from "../../../../context/MovingFormContext";

export const TruckSize = () => {
  const { truckSize } = useContext(MovingFormContext);
 
  const className = "typeWidthForThree";
  const type = "TRUCK_SIZE";
  const icon = "icon";
  const classNameIcon="bi-truck";

  return (
    <div>
      <span>Choose truck size</span>
      <div className="adContainerForQuote">
        <ItemForChoose
          name="16' Truck"
          value="16"
          context={truckSize}
          icon={icon}
          type={type}
          className={className}
          classNameIcon={classNameIcon}
        
        />
        <ItemForChoose
          name="20' Truck"
          value="20"
          context={truckSize}
          icon={icon}
          type={type}
          className={className}
          classNameIcon={classNameIcon}
        />
        <ItemForChoose
          name="26' Truck"
          value="26"
          context={truckSize}
          icon={icon}
          type={type}
          className={className}
          classNameIcon={classNameIcon}
        />
      </div>
    </div>
  );
};
