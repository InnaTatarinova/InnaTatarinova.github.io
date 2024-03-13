import React, { useContext, useEffect, useState } from "react";
import { LocalResidentForm } from "../FormElementForQuote/LocalResidentForm";
import { BedroomQuantityForm } from "../FormElementForQuote/BedroomQuantityForm";
import { Storage } from "../FormElementForQuote/Storage";
import { Floor } from "../FormElementForQuote/Floor";
import { MovingFormContext } from "../../../../context/MovingFormContext";
import { ShortForm } from "./ShortForm";
// import { conectionTruckSizeAndBedroom } from "../data/calculationData";

export const FullForm = () => {
  const {
    serviceType,
    residenceType,
    bedroomQuantity,
    dispatch,
  } = useContext(MovingFormContext);

  const [showRecom, setShowRec] = useState(false);

  const setRecomendationValue = () => {
    // if (bedroomQuantity !== 0) {
    //   switch (residenceType) {
    //     case "House":
    //       for (let i of conectionTruckSizeAndBedroom) {
    //         if (i.bedroom === bedroomQuantity) {
    //           dispatch({
    //             type: "TRUCK_SIZE",
    //             payload: i.truckSize,
    //           });
    //           dispatch({
    //             type: "MOVERS",
    //             payload: i.movers,
    //           });
    //           dispatch({
    //             type: "HOURS",
    //             payload: i.hours,
    //           });
    //         }
    //        }
    //   }
    //   setShowRec(true);
    // }
    
  };

  useEffect(() => {
    setRecomendationValue();
  }, [bedroomQuantity]);

  return (
    <div>
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

      {showRecom=== true ? (
        <div>
          <div className="proposedOptionBlockText">
            You can choose the different options, but we recommend the next
            ones:
          </div>
          <ShortForm />
        </div>
      ) : null}
    </div>
  );
};
