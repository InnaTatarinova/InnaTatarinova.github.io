import React from "react";
import { useState } from "react";
import "./FormForContact.scss";
import { ButtonComponent } from "../ButtonComponents/ButtonComponnet";
import { FormProvider, useForm } from "react-hook-form";
import {
  message_validation,
  name_validation,
  phoneNumber_validation,
} from "../FormElement/Input/InputValidation";
import { BlockForInputContact } from "./BlockForInputContact";


export const FormForContact = () => {
  const methods = useForm();
  const [wasSentSuccessfuly, setSuccess] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = methods.handleSubmit(async (data) => {
    console.log(data);

    const endpoint = "https://localhost:8000/get_message_ContactUs";

    try {
      await fetch(endpoint, {
        method: "POST",
        body: JSON.stringify(data),
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
            methods.reset();
            setName("");
            setPhone("");
            setMessage("");
            setSuccess(true);
          } else {
            console.log("Message failed to send.");
          }
        });
    } catch {console.log("Server is not respond.");}
  });

  return (
    <FormProvider {...methods}>
      <form
        className="formContactUs"
        onSubmit={(e) => e.preventDefault()}
        noValidate
        autoComplete="off"
      >
        <BlockForInputContact
          type="NAME"
          validation={name_validation}
          className="inputName nameForContact"
          value={name}
          setValue={setName}
          setSuccess={setSuccess}
          wasSentSuccessfuly={wasSentSuccessfuly}
        />

        <BlockForInputContact
          type="PHONE"
          validation={phoneNumber_validation}
          className="inputPhone"
          value={phone}
          setValue={setPhone}
          setSuccess={setSuccess}
          wasSentSuccessfuly={wasSentSuccessfuly}
        />

        <BlockForInputContact
          type="MESSAGE"
          validation={message_validation}
          className="inputMessage"
          value={message}
          setValue={setMessage}
          setSuccess={setSuccess}
          wasSentSuccessfuly={wasSentSuccessfuly}
        />

        <div className="submitBTN">
          {wasSentSuccessfuly ? (
            <p className="infoSuccess">
              Your message was sent. We will call you back.
            </p>
          ) : (
            <ButtonComponent
              btnSize="btn-large"
              btnColor="btn-dark"
              btnBorder="btn-border-light"
              btnHoverStyle="btn-lightHoverTheme"
              onClick={onSubmit}
            >
              Contact us
            </ButtonComponent>
          )}
        </div>
      </form>
    </FormProvider>
  );
};
