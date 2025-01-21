import React, { useContext, useEffect, useState } from "react";
import { LocalResidentForm } from "../FormElementForQuote/LocalResidentForm";
import { BedroomQuantityForm } from "../FormElementForQuote/BedroomQuantityForm";
import { Storage } from "../FormElementForQuote/Storage";
import { Floor } from "../FormElementForQuote/Floor";
import { MovingFormContext } from "../../../../context/MovingFormContext";
import { ShortForm } from "./ShortForm";
//import { conectionTruckSizeAndBedroom } from "../data/calculationData";

export const FullForm = (props) => {
  const { serviceType, residenceType, bedroomQuantity, storage, dispatch } =
    useContext(MovingFormContext);

  const [showRecom, setShowRec] = useState(false);

  const setRecomendationValue = async () => {
    if (bedroomQuantity !== 0 || storage > 0) {
      let truck = 0;
      let movers = 0;
      let hours = 0;

      const data = {
        var1: residenceType,
        var2: bedroomQuantity,
        var3: serviceType,
        var4: storage,
      };
      const endpoint = "https://localhost:8000/get_advice";

      console.log(JSON.stringify(data));

      await fetch(endpoint, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((blob) => blob.json())
        .then((data1) => {
          console.log(data1[0]);
          truck = data1[0];
          movers = data1[1];
          hours = data1[2];
        })
        .catch((e) => {
          console.log(e.message);
        });

      dispatch({
        type: "TRUCK_SIZE",
        payload: truck,
      });
      dispatch({
        type: "MOVERS",
        payload: movers,
      });
      dispatch({
        type: "HOURS",
        payload: hours,
      });
      setShowRec(true);
    }
  };

  useEffect(() => {
    setRecomendationValue();
  }, [bedroomQuantity, storage]);

  return (
    <div className={props.gridName}>
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

      {showRecom === true ? (
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
