import React, { useContext } from "react";
import { LocalResidentForm } from "../FormElementForQuote/LocalResidentForm";
import { BedroomQuantityForm } from "../FormElementForQuote/BedroomQuantityForm";
import { Storage } from "../FormElementForQuote/Storage";
import { Floor } from "../FormElementForQuote/Floor";
import { MovingFormContext } from "../../../../context/MovingFormContext";

export const FullForm = () => {
  const { serviceType, residenceType } = useContext(MovingFormContext);
  return (
    <form>
      <div className="residenceType">
        {serviceType.id === 1 || serviceType.id === 2 ? (
          <LocalResidentForm />
        ) : null}
      </div>

      <div className="bedroomQuantity">
        {residenceType === "House" ||
        residenceType === "Apartment" ||
        residenceType === "Condo" ? (
          <BedroomQuantityForm />
        ) : residenceType === "Storage" ? (
          <Storage />
        ) : null}
      </div>

      <div className="floor">
        {residenceType === "Apartment" ||
        residenceType === "Condo" ||
        residenceType === "Storage" ? (
          <Floor type="FLOOR_LEVEL" name="Floor" inputSize="1" />
        ) : null}
      </div>
    </form>
  );
};
