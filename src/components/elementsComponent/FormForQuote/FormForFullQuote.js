import React, { useContext } from "react";
import "./FormForFullQuote.scss";
import "./ElementsForQuote.scss";
import { MovingFormContext } from "../../../context/MovingFormContext";
import { FormProvider, useForm } from "react-hook-form";
import { BlockForInput } from "../FormElement/BlockForInput";
import {
  movingFromComponent,
  movingToComponent,
  serviceTypeComponent,
} from "./MainConstComponentForQuote";
import { LocalResidentForm } from "./FormElementForQuote/LocalResidentForm";
import { BedroomQuantityForm } from "./FormElementForQuote/BedroomQuantityForm";
import { FloorForm } from "./FormElementForQuote/FloorForm";
import { TruckSize} from "./FormElementForQuote/TruckSize";
import { MoversQuantity } from "./FormElementForQuote/MoversQuantity";
import { Hours } from "./FormElementForQuote/Hours";

export const FormForFullQuote = () => {
  const methods = useForm();

  const { movingFromInput, movingToInput, serviceType, residenceType} =
    useContext(MovingFormContext);

  return (
    <FormProvider {...methods}>
      <form className="quoteFullForm">
        <BlockForInput
          name="From:"
          value={movingFromInput}
          component={movingFromComponent}
          componentType="address"
          type="MOVING_FROM"
          form="full"
        />
        <BlockForInput
          name="To:"
          value={movingToInput}
          component={movingToComponent}
          componentType="address"
          type="MOVING_TO"
          form="full"
        />
        <BlockForInput
          name="Service:"
          value={serviceType}
          component={serviceTypeComponent}
          componentType="serviceType"
          type="SERVICE_TYPE"
          form="full"
        />
        <div className="residenceType">
          {serviceType === null ? null : serviceType.id === 1 ? (
            <LocalResidentForm />
          ) : null}
        </div>

        <div className="bedroomQuantity">
          {residenceType === "House" ||
          residenceType === "Apartment" ||
          residenceType === "Condo" ? (
            <BedroomQuantityForm />
          ) : null}
        </div>

        <div className="floor">
          {residenceType === "Apartment" || residenceType === "Condo" ? (
            <FloorForm type="FLOOR_LEVEL" />
          ) : null}
        </div>

        <div className="truckSize">
          <TruckSize/>
        </div>

        <div className="movers">
          <MoversQuantity/>
        </div>

        <div className="hours">
          <Hours/>
        </div>


      </form>
    </FormProvider>
  );
};
