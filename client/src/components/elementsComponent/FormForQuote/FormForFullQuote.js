import React, { useContext, useState } from "react";
import "./FormForFullQuote.scss";
import "./ElementsForQuote.scss";
import { MovingFormContext } from "../../../context/MovingFormContext";
import { FormProvider, useForm } from "react-hook-form";
import {
  movingFromComponent,
  movingToComponent,
  serviceTypeComponent,
} from "./MainConstComponentForQuote";
import { ButtonComponent } from "../ButtonComponents/ButtonComponnet";
import { MessageComponent } from "../MessageComponent/MessageComponent";
import { FullForm } from "./TypeForm/FullForm";
import { ShortForm } from "./TypeForm/ShortForm";
import { ResultQuote } from "./ResultQuote/ResultQuote";
import { BlockForInputQuote } from "../FormElement/BlockForInputQuote";
import { ContactUsForDetailed } from "./ContactUsForDetailed";

export const FormForFullQuote = () => {
  const methods = useForm();
  const {
    movingFromInput,
    movingToInput,
    serviceType,
    residenceType,
    bedroomQuantity,
    truckSize,
    movers,
    hours,
    dispatch,
  } = useContext(MovingFormContext);

  const [selectedForm, setSelectedForm] = useState("short");
  const [openMessageForm, setOpenMessageForm] = useState(false);
  const [validForm, setValidForm] = useState(false);
  const [message, setMessage] = useState("");
  const [messageFormWasOpen, setMessageFormWasOpen] = useState(false);

  const handleRadioChange = (value) => {
    setSelectedForm(value);
    setValidForm(false);
  };

  const getEstimQuote = (e) => {
    e.preventDefault();
    if (
      movingFromInput === null ||
      movingToInput === null ||
      serviceType === null
    ) {
      callMistakeForm(
        "Please choose origin address, distination address and type of moving"
      );
    } else {
      switch (selectedForm) {
        case "short":
          if (truckSize !== null && movers !== 0 && hours !== 0) {
            calculPrice();
          } else {
            callMistakeForm(
              "Please choose truck size, how many movers and hours would you prefer"
            );
          }
          break;
        case "full":
          switch (serviceType.id) {
            case 1:
              if (residenceType === "" && bedroomQuantity === 0) {
                callMistakeForm(
                  "Please choose residece type and how many bedroom"
                );
              } else {
                calculPrice();
              }
          }
          break;
      }
    }
  };

  const callMistakeForm = (text) => {
    setMessage(text);
    setOpenMessageForm(true);
  };

  const calculPrice = async () => {
    setValidForm(true);
    let price = 0;

    const data = {
      var1: truckSize,
      var2: movers,
      var3: hours,
    };
    const endpoint = "https://localhost:8000/get_price";

    console.log(JSON.stringify(data));

    await fetch(endpoint, {
      method: "POST",
      //body: data,
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((blob) => blob.json())
      .then((data1) => {
        console.log(data1[0]);
        price = data1[0];
      })
      .catch((e) => {
        console.log(e.message);
      });

    dispatch({
      type: "PRICE",
      payload: price,
    });
  };

  return (
    <FormProvider {...methods}>
      <form
        className={
          !openMessageForm
            ? "quoteFullForm"
            : " quoteFullForm quoteFullFormOpacity"
        }
      >
        <BlockForInputQuote
          name="From:"
          value={movingFromInput}
          component={movingFromComponent}
          componentType="address"
          type="MOVING_FROM"
          form="full"
          gridName="fromBlock"
        />
        <BlockForInputQuote
          name="To:"
          value={movingToInput}
          component={movingToComponent}
          componentType="address"
          type="MOVING_TO"
          form="full"
          gridName="toBlock"
        />
        <BlockForInputQuote
          name="Service:"
          value={serviceType}
          component={serviceTypeComponent}
          componentType="serviceType"
          type="SERVICE_TYPE"
          form="full"
          classNameForList="selectDropItem"
          gridName="serviceBlock"
        />

        <div className="formForChooseTypeOfForm formSize">
          <div>
            <input
              type="radio"
              id="short"
              value="short"
              checked={selectedForm === "short"}
              onChange={() => handleRadioChange("short")}
            />
            <span>Short form</span>{" "}
          </div>
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
        </div>

        {movingFromInput && movingToInput && serviceType !== null ? (
          serviceType.id === 3 ? (
            <ContactUsForDetailed text="Commercial Moving" />
          ) : serviceType.id === 4 ? (
            <ContactUsForDetailed text="Packing" />
          ) : serviceType.id === 5 ? (
            <ContactUsForDetailed text="Storage" />
          ) : serviceType.id === 6 ? (
            <ContactUsForDetailed text="Delivery" />
          ) : serviceType.id === 7 ? (
            <ContactUsForDetailed text="Junk Removal" />
          ) : selectedForm === "full" ? (
            <FullForm gridName="formQuote" />
          ) : selectedForm === "short" ? (
            <ShortForm gridName="formQuote" />
          ) : null
        ) : null}

        {/* {movingFromInput && movingToInput && serviceType !== null ? (
          selectedForm === "full" ? (
            <FullForm gridName="formQuote" />
          ) : selectedForm === "short" ? (
            <ShortForm gridName="formQuote" />
          ) : null
        ) : null} */}

        {serviceType !== null &&
        serviceType.id !== 3 &&
        serviceType.id !== 4 &&
        serviceType.id !== 5 &&
        serviceType.id !== 6 &&
        serviceType.id !== 7 ? (
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
        ) : null}
      </form>
      {validForm ? (
        <ResultQuote
          setValidForm={setValidForm}
          setOpenMessageForm={setOpenMessageForm}
          setMessage={setMessage}
        />
      ) : null}
      {openMessageForm ? (
        <MessageComponent
          message={message}
          setMessage={setMessage}
          setOpenMessageForm={setOpenMessageForm}
          setMessageFormWasOpen={setMessageFormWasOpen}
        />
      ) : null}
    </FormProvider>
  );
};
