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
import { calculateShortQuote} from "../../../function/calculateShortQuote";
import { MistakeComponent } from "../MistakeComponent/MistakeComponent";
import { FullForm } from "./TypeForm/FullForm";
import { ShortForm } from "./TypeForm/ShortForm";
import { ResultQuote } from "./ResultQuote/ResultQuote";

export const FormForFullQuote = () => {
  const methods = useForm();

  const {
    movingFromInput,
    movingToInput,
    serviceType,
    residenceType,
    truckSize,
    movers,
    hours, dispatch
  } = useContext(MovingFormContext);

  const [selectedForm, setSelectedForm] = useState("full");
  const [openMistakeForm, setOpenMistakeForm] = useState(false);
  const [validForm, setValidForm] = useState(false);



  const handleRadioChange = (value) => {
    setSelectedForm(value);
  };

  const getEstimQuote = (e) => {
    e.preventDefault();

    if (selectedForm == "short") {
      if (truckSize && movers && hours !== "") {
        setValidForm(true); 
        let price = calculateShortQuote(truckSize,movers, hours); 

        dispatch({
          type:"PRICE",
          payload: price,
        })

      } else {
       
       
        setOpenMistakeForm(true);
      }
    }
  };

  return (
    <FormProvider {...methods}>
      <form
        className={!openMistakeForm ? "quoteFullForm" : "quoteFullFormOpacity"}
      >
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
          classNameForList="selectDropItem"
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
          <FullForm />
        ) : selectedForm === "short" ? (
          <ShortForm />
        ) : null}

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
        {validForm ? <ResultQuote/> : null}
      </form>

      {openMistakeForm ? (
        <MistakeComponent
          message="Please choose truck size, how many movers and hours would you prefer"
          setOpenMistakeForm={setOpenMistakeForm}
        />
      ) : null}
    </FormProvider>
  );
};
