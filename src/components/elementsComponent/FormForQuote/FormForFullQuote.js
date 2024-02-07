import React, { useContext, useState } from "react";
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
import { Floor } from "./FormElementForQuote/Floor";
import { TruckSize } from "./FormElementForQuote/TruckSize";
import { MoversQuantity } from "./FormElementForQuote/MoversQuantity";
import { Hours } from "./FormElementForQuote/Hours";
import { Storage } from "./FormElementForQuote/Storage";
import { ButtonComponent } from "../ButtonComponents/ButtonComponnet";
import { checkFormForQuote } from "../../../function/checkFormForQuote";
import { MistakeComponent } from "../MistakeComponent/MistakeComponent";

export const FormForFullQuote = () => {
  const methods = useForm();

  const {
    movingFromInput,
    movingToInput,
    serviceType,
    residenceType,
    truckSize,
    movers,
    hours,
  } = useContext(MovingFormContext);

  const [selectedForm, setSelectedForm] = useState("full");
  const [validForm, setValidForm] = useState("true");

  const handleRadioChange = (value) => {
    setSelectedForm(value);
  };

  const getEstimQuote = (e) => {
    e.preventDefault();

    if (selectedForm == "short") {
      if (truckSize && movers && hours !== "") {
        setValidForm(true);
      } else {
        setValidForm(false);
      }
    }
  };

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
          classNameForList = "selectDropItem"
        />

        <div className="formForChooseTypeOfForm">
          <div>
            <input
              type="radio"
              id="full"
              value="full"
              checked={selectedForm === "full"}
              onChange={() => handleRadioChange("full")}
            />
            <span>Full form</span>
          </div>
          <div>
            <input
              type="radio"
              id="short"
              value="short"
              checked={selectedForm === "short"}
              onChange={() => handleRadioChange("short")}
            />
            <span>Short form</span>
          </div>
        </div>

        {selectedForm === "full" && serviceType !== null ? (
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
        ) : selectedForm === "short" ? (
          <form>
            <div className="truckSize">
              <TruckSize />
            </div>
            <div className="movers">
              <MoversQuantity />
            </div>
            <div className="hours">
              <Hours />
            </div>
          </form>
        ) : null}

        {validForm === false ? <MistakeComponent /> : null}
        <div className="getEstimQuoteContainer">
          <ButtonComponent
            btnSize="btn-large"
            btnColor="btn-dark"
            btnBorder="btn-border-light"
            className="getEstimQuoteBtn"
            onClick={getEstimQuote}
          >
            Get Estimated Quote
          </ButtonComponent>
        </div>
      </form>
    </FormProvider>
  );
};
