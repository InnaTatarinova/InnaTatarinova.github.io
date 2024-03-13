import React, { useContext } from "react";
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
import { FormContactContext } from "../../../context/FormContactContext";

export const FormForContact = () => {
  const methods = useForm();
  const [success, setSuccess] = useState(false);
  const { name, phone, message } = useContext(FormContactContext);

  const onSubmit = methods.handleSubmit((data) => {
    console.log(data);
    console.log("name: " + name);
    console.log("phone: " + phone);
    console.log("message:" + message);
    methods.reset();
    setSuccess(true);
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
        />

        <BlockForInputContact
          type="PHONE"
          validation={phoneNumber_validation}
          className="inputPhone"
        />

        <BlockForInputContact
          type="MESSAGE"
          validation={message_validation}
          className="inputMessage"
        />

        <div className="submitBTN">
          {success && (
            <p className="infoSuccess">Form has been submitted successfully</p>
          )}
          <div>
            <ButtonComponent
              btnSize="btn-large"
              btnColor="btn-dark"
              btnBorder="btn-border-light"
              btnHoverStyle="btn-lightHoverTheme"
              onClick={onSubmit}
            >
              Contact us
            </ButtonComponent>
          </div>
        </div>
      </form>
    </FormProvider>
  );
};
