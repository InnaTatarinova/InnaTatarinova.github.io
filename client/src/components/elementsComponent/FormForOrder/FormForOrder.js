import React, { useContext, useEffect, useState } from "react";
import "./FormForOrder.scss";
import { BlockForInputContact } from "../FormForContact/BlockForInputContact";
import {
  add_info_validation,
  email_validation,
  name_validation,
  phoneNumber_validation,
} from "../FormElement/Input/InputValidation";
import { ButtonComponent } from "../ButtonComponents/ButtonComponnet";
import { FormProvider, useForm } from "react-hook-form";
import { MovingFormContext } from "../../../context/MovingFormContext";
import { MessageComponent } from "../../elementsComponent/MessageComponent/MessageComponent";

export const FormForOrder = (props) => {
  const methods = useForm();
  const {
    movingFromInput,
    movingToInput,
    serviceType,
    residenceType,
    bedroomQuantity,
    floor,
    truckSize,
    movers,
    hours,
    storage,
    price,
    dispatch,
  } = useContext(MovingFormContext);
  const [wasSentSuccessfuly, setSuccess] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [openThanksForm, setOpenThanksForm] = useState(false);
  const [thankMessage, setThankMessage] = useState("");
  const [messageFormWasOpen, setMessageFormWasOpen] = useState(false);

  const sendOrder = methods.handleSubmit(async (data) => {
    console.log(data);
    const dataForOrder = Object.assign({}, data, {
      from: movingFromInput.display_name,
      to: movingToInput.display_name,
      serviceType: serviceType.name,
      residenceType: residenceType,
      bedroomQuantity: bedroomQuantity,
      floor: floor,
      truckSize: truckSize,
      movers: movers,
      hours: hours,
      storage: storage,
      price: price,
    });

    console.log(dataForOrder);
    const endpoint = "https://localhost:8000/get_message_SendOrder";

    try {
      await fetch(endpoint, {
        method: "POST",
        body: JSON.stringify(dataForOrder),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          return response.json();
        })
        .then((data1) => {
          console.log(data1);
          if (data1.success === true) {
            console.log("Message Sent.");
            setThankMessage(
              `We sincerely appreciate your decision to moving with our company! Thank you for placing your order. It means a lot to us. \n Expect a follow-up call soon to address any questions or provide updates.Warm regards, CL CARGO's team!`
            );
            setOpenThanksForm(true);

            methods.reset();
          } else {
            console.log("Message failed to send.");
          }
        });
    } catch {
      console.log("Server is not respond.");
    }
  });

  useEffect(() => {
    if (messageFormWasOpen) {
      setName("");
      setPhone("");
      setMessage("");
      setEmail("");
      dispatch({
        type: "MOVING_FROM",
        payload: null,
      });
      dispatch({
        type: "MOVING_TO",
        payload: null,
      });
      dispatch({
        type: "SERVICE_TYPE",
        payload: null,
      });

      dispatch({
        type: "RESIDENCE_TYPE",
        payload: null,
      });
      dispatch({
        type: "BEDROOM_QUANTITY",
        payload: null,
      });
      dispatch({
        type: "FLOOR_LEVEL",
        payload: null,
      });
      dispatch({
        type: "MOVERS",
        payload: null,
      });
      dispatch({
        type: "TRUCK_SIZE",
        payload: null,
      });
      dispatch({
        type: "HOURS",
        payload: null,
      });
      dispatch({
        type: "STORAGE",
        payload: null,
      });
      dispatch({
        type: "PRICE",
        payload: null,
      });
      setSuccess(true);
      props.setOpenOnlineForm(false);
      props.setValidForm(false);
    }
  }, [messageFormWasOpen]);

  return (
    <div>
      <FormProvider {...methods}>
        <form
          onSubmit={(e) => e.preventDefault()}
          noValidate
          autoComplete="off"
          className={openThanksForm ? "formOrderOpacity" : null}
        >
          <h3 className="title">just add contact information</h3>
          <BlockForInputContact
            validation={name_validation}
            className="inputFormOrder"
            value={name}
            setValue={setName}
            setSuccess={setSuccess}
            wasSentSuccessfuly={wasSentSuccessfuly}
          />
          <BlockForInputContact
            validation={phoneNumber_validation}
            className="inputFormOrder"
            value={phone}
            setValue={setPhone}
            setSuccess={setSuccess}
            wasSentSuccessfuly={wasSentSuccessfuly}
          />
          <BlockForInputContact
            validation={email_validation}
            className="inputFormOrder"
            value={email}
            setValue={setEmail}
            setSuccess={setSuccess}
            wasSentSuccessfuly={wasSentSuccessfuly}
          />

          <BlockForInputContact
            validation={add_info_validation}
            className="inputFormOrder"
            value={message}
            setValue={setMessage}
            setSuccess={setSuccess}
            wasSentSuccessfuly={wasSentSuccessfuly}
          />

          <ButtonComponent
            btnSize="btn-large"
            btnColor="btn-dark"
            btnBorder="btn-border-light"
            btnHoverStyle="btn-lightHoverTheme"
            onClick={sendOrder}
          >
            Send order
          </ButtonComponent>
        </form>
      </FormProvider>
      {openThanksForm ? (
        <MessageComponent
          className="thankMessage"
          message={thankMessage}
          setMessage={setThankMessage}
          setOpenMessageForm={setOpenThanksForm}
          setMessageFormWasOpen={setMessageFormWasOpen}
        />
      ) : null}
    </div>
  );
};
